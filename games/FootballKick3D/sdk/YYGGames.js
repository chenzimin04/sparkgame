var a  =  10;

!function (_0x566332, _0x1905b1) {
    if ("object" == typeof exports && "object" == typeof module) {
      module.exports = _0x1905b1();
    } else if ("function" == typeof define && define.amd) {
      define([], _0x1905b1);
    } else if ("object" == typeof exports) {
      exports.YYGGames = _0x1905b1();
    } else {
      _0x566332.YYGGames = _0x1905b1();
    }
  }(self, () => {
    _0x4bede1 = {
      0xeb9: (_0x2a2e63, _0xe334a2, _0x101ad6) => {
        'use strict';
  
        const _0x269549 = _0x101ad6(0x1fbe);
        const _0x164ff5 = _0x101ad6(0x1523);
        const _0x335d7a = new class extends _0x164ff5 {
          ["content"]({
            onError: _0x2ea3cc,
            onResult: _0x1c81a7,
            onDone: _0x591c29
          }) {
            let _0x2b58e5 = '';
            _0x2b58e5 += "var _results = new Array(" + this.options.taps.length + ");\n";
            _0x2b58e5 += "var _checkDone = function() {\n";
            _0x2b58e5 += "for(var i = 0; i < _results.length; i++) {\n";
            _0x2b58e5 += "var item = _results[i];\n";
            _0x2b58e5 += "if(item === undefined) return false;\n";
            _0x2b58e5 += "if(item.result !== undefined) {\n";
            _0x2b58e5 += _0x1c81a7("item.result");
            _0x2b58e5 += "return true;\n";
            _0x2b58e5 += "}\n";
            _0x2b58e5 += "if(item.error) {\n";
            _0x2b58e5 += _0x2ea3cc("item.error");
            _0x2b58e5 += "return true;\n";
            _0x2b58e5 += "}\n";
            _0x2b58e5 += "}\n";
            _0x2b58e5 += "return false;\n";
            _0x2b58e5 += "}\n";
            _0x2b58e5 += this.callTapsParallel({
              "onError": (_0x326d77, _0x2572b3, _0xe4a4bb, _0x16e7eb) => {
                let _0x2e8ab3 = '';
                _0x2e8ab3 += "if(" + _0x326d77 + " < _results.length && ((_results.length = " + (_0x326d77 + 0x1) + "), (_results[" + _0x326d77 + "] = { error: " + _0x2572b3 + " }), _checkDone())) {\n";
                _0x2e8ab3 += _0x16e7eb(true);
                _0x2e8ab3 += "} else {\n";
                _0x2e8ab3 += _0xe4a4bb();
                _0x2e8ab3 += "}\n";
                return _0x2e8ab3;
              },
              "onResult": (_0x331c0c, _0x10a5fa, _0x58d434, _0x5144de) => {
                let _0xbdc490 = '';
                _0xbdc490 += "if(" + _0x331c0c + " < _results.length && (" + _0x10a5fa + " !== undefined && (_results.length = " + (_0x331c0c + 0x1) + "), (_results[" + _0x331c0c + "] = { result: " + _0x10a5fa + " }), _checkDone())) {\n";
                _0xbdc490 += _0x5144de(true);
                _0xbdc490 += "} else {\n";
                _0xbdc490 += _0x58d434();
                _0xbdc490 += "}\n";
                return _0xbdc490;
              },
              "onTap": (_0x1e7368, _0x5943e2, _0x3410d5, _0x599b5d) => {
                let _0x867af4 = '';
                if (_0x1e7368 > 0x0) {
                  _0x867af4 += "if(" + _0x1e7368 + " >= _results.length) {\n";
                  _0x867af4 += _0x3410d5();
                  _0x867af4 += "} else {\n";
                }
                _0x867af4 += _0x5943e2();
                if (_0x1e7368 > 0x0) {
                  _0x867af4 += "}\n";
                }
                return _0x867af4;
              },
              "onDone": _0x591c29
            });
            return _0x2b58e5;
          }
        }();
        const _0x4f1793 = function (_0x20067f) {
          _0x335d7a.setup(this, _0x20067f);
          return _0x335d7a.create(_0x20067f);
        };
        function _0x359452(_0x6117e1 = [], _0x2b817a = undefined) {
          const _0x4bb03b = new _0x269549(_0x6117e1, _0x2b817a);
          _0x4bb03b.constructor = _0x359452;
          _0x4bb03b.compile = _0x4f1793;
          _0x4bb03b._call = undefined;
          _0x4bb03b.call = undefined;
          return _0x4bb03b;
        }
        _0x359452.prototype = null;
        _0x2a2e63.exports = _0x359452;
      },
      0x2042: (_0x3323b6, _0x1a69d9, _0x4fd268) => {
        'use strict';
  
        const _0x2d5ce8 = _0x4fd268(0x1fbe);
        const _0x55c0ba = _0x4fd268(0x1523);
        const _0x3fe42b = new class extends _0x55c0ba {
          ["content"]({
            onError: _0x2d7054,
            onDone: _0x386e44
          }) {
            return this.callTapsParallel({
              "onError": (_0x4d11b6, _0xf033a2, _0x3ac364, _0x2bd2dc) => _0x2d7054(_0xf033a2) + _0x2bd2dc(true),
              "onDone": _0x386e44
            });
          }
        }();
        const _0x5705d4 = function (_0x36b751) {
          _0x3fe42b.setup(this, _0x36b751);
          return _0x3fe42b.create(_0x36b751);
        };
        function _0x1c4cb6(_0x10aa79 = [], _0x2e4a72 = undefined) {
          const _0x3e61fa = new _0x2d5ce8(_0x10aa79, _0x2e4a72);
          _0x3e61fa.constructor = _0x1c4cb6;
          _0x3e61fa.compile = _0x5705d4;
          _0x3e61fa._call = undefined;
          _0x3e61fa.call = undefined;
          return _0x3e61fa;
        }
        _0x1c4cb6.prototype = null;
        _0x3323b6.exports = _0x1c4cb6;
      },
      0x1258: (_0x9816c9, _0x2ea734, _0x33596a) => {
        'use strict';
  
        const _0x52ad52 = _0x33596a(0x1fbe);
        const _0x14f8d6 = _0x33596a(0x1523);
        const _0x23e08c = new class extends _0x14f8d6 {
          ["content"]({
            onError: _0x271ff6,
            onResult: _0xf562df,
            resultReturns: _0x2a54bb,
            onDone: _0x4a0d15
          }) {
            return this.callTapsSeries({
              "onError": (_0x5dc29f, _0x3b95d7, _0x58673b, _0x414f4f) => _0x271ff6(_0x3b95d7) + _0x414f4f(true),
              "onResult": (_0x1322c3, _0x15ca51, _0x2a57de) => "if(" + _0x15ca51 + " !== undefined) {\n" + _0xf562df(_0x15ca51) + "\n} else {\n" + _0x2a57de() + "}\n",
              "resultReturns": _0x2a54bb,
              "onDone": _0x4a0d15
            });
          }
        }();
        const _0x336f41 = function (_0x8d7f19) {
          _0x23e08c.setup(this, _0x8d7f19);
          return _0x23e08c.create(_0x8d7f19);
        };
        function _0x2eca26(_0x51376f = [], _0x4a1cfb = undefined) {
          const _0x11b90b = new _0x52ad52(_0x51376f, _0x4a1cfb);
          _0x11b90b.constructor = _0x2eca26;
          _0x11b90b.compile = _0x336f41;
          _0x11b90b._call = undefined;
          _0x11b90b.call = undefined;
          return _0x11b90b;
        }
        _0x2eca26.prototype = null;
        _0x9816c9.exports = _0x2eca26;
      },
      0x999: (_0x1504b3, _0xe47e60, _0xd4d6d9) => {
        'use strict';
  
        const _0x4217e8 = _0xd4d6d9(0x1fbe);
        const _0x8781c3 = _0xd4d6d9(0x1523);
        const _0x5f5090 = new class extends _0x8781c3 {
          ["content"]({
            onError: _0x3fef00,
            onDone: _0x17c280
          }) {
            return this.callTapsSeries({
              "onError": (_0x276339, _0xcc3364, _0x537e12, _0x37a3cb) => _0x3fef00(_0xcc3364) + _0x37a3cb(true),
              "onDone": _0x17c280
            });
          }
        }();
        const _0x1ca3a3 = function (_0x38e80a) {
          _0x5f5090.setup(this, _0x38e80a);
          return _0x5f5090.create(_0x38e80a);
        };
        function _0x2e3f18(_0x40e82b = [], _0x5e9abb = undefined) {
          const _0x56de2b = new _0x4217e8(_0x40e82b, _0x5e9abb);
          _0x56de2b.constructor = _0x2e3f18;
          _0x56de2b.compile = _0x1ca3a3;
          _0x56de2b._call = undefined;
          _0x56de2b.call = undefined;
          return _0x56de2b;
        }
        _0x2e3f18.prototype = null;
        _0x1504b3.exports = _0x2e3f18;
      },
      0x12e4: (_0x5c4962, _0x3316d3, _0xc60a11) => {
        'use strict';
  
        const _0x195d2a = _0xc60a11(0x1fbe);
        const _0x1e4192 = _0xc60a11(0x1523);
        const _0x39fe91 = new class extends _0x1e4192 {
          ["content"]({
            onError: _0x20b99a,
            onDone: _0x3f2d0c
          }) {
            return this.callTapsLooping({
              "onError": (_0x1c7051, _0x34d343, _0x1b06a2, _0x3a1324) => _0x20b99a(_0x34d343) + _0x3a1324(true),
              "onDone": _0x3f2d0c
            });
          }
        }();
        const _0x2912d3 = function (_0x344db5) {
          _0x39fe91.setup(this, _0x344db5);
          return _0x39fe91.create(_0x344db5);
        };
        function _0x13cc4a(_0x203205 = [], _0x52dc6d = undefined) {
          const _0xcc856b = new _0x195d2a(_0x203205, _0x52dc6d);
          _0xcc856b.constructor = _0x13cc4a;
          _0xcc856b.compile = _0x2912d3;
          _0xcc856b._call = undefined;
          _0xcc856b.call = undefined;
          return _0xcc856b;
        }
        _0x13cc4a.prototype = null;
        _0x5c4962.exports = _0x13cc4a;
      },
      0xa7e: (_0x2f3b0d, _0x468f93, _0x516457) => {
        'use strict';
  
        const _0x36c4c6 = _0x516457(0x1fbe);
        const _0x378dae = _0x516457(0x1523);
        const _0x55cf88 = new class extends _0x378dae {
          ["content"]({
            onError: _0x43cb9d,
            onResult: _0xe55dad,
            onDone: _0x318838
          }) {
            return this.callTapsSeries({
              "onError": (_0x5dd84e, _0x10dfa9, _0x133011, _0x5e13c1) => _0x43cb9d(_0x10dfa9) + _0x5e13c1(true),
              "onResult": (_0x151386, _0x32a973, _0xd84d25) => {
                let _0x382831 = '';
                _0x382831 += "if(" + _0x32a973 + " !== undefined) {\n";
                _0x382831 += this._args[0x0] + " = " + _0x32a973 + ";\n";
                _0x382831 += "}\n";
                _0x382831 += _0xd84d25();
                return _0x382831;
              },
              "onDone": () => _0xe55dad(this._args[0x0])
            });
          }
        }();
        const _0x5ba996 = function (_0x589864) {
          _0x55cf88.setup(this, _0x589864);
          return _0x55cf88.create(_0x589864);
        };
        function _0x43db10(_0x345aed = [], _0x12de6e = undefined) {
          if (_0x345aed.length < 0x1) {
            throw new Error("Waterfall hooks must have at least one argument");
          }
          const _0x1fe209 = new _0x36c4c6(_0x345aed, _0x12de6e);
          _0x1fe209.constructor = _0x43db10;
          _0x1fe209.compile = _0x5ba996;
          _0x1fe209._call = undefined;
          _0x1fe209.call = undefined;
          return _0x1fe209;
        }
        _0x43db10.prototype = null;
        _0x2f3b0d.exports = _0x43db10;
      },
      0x1fbe: (_0x23a3b5, _0x44d4dd, _0x134d64) => {
        'use strict';
  
        const _0x32410b = _0x134d64(0x1779).deprecate(() => {}, "Hook.context is deprecated and will be removed");
        const _0x4efcd2 = function (..._0x12f31f) {
          this.call = this._createCall("sync");
          return this.call(..._0x12f31f);
        };
        const _0x2fb57a = function (..._0x2dd545) {
          this.callAsync = this._createCall("async");
          return this.callAsync(..._0x2dd545);
        };
        const _0x15d260 = function (..._0x346410) {
          this.promise = this._createCall("promise");
          return this.promise(..._0x346410);
        };
        class _0x5f416b {
          constructor(_0x4a9b86 = [], _0x4173ac = undefined) {
            this._args = _0x4a9b86;
            this.name = _0x4173ac;
            this.taps = [];
            this.interceptors = [];
            this._call = _0x4efcd2;
            this.call = _0x4efcd2;
            this._callAsync = _0x2fb57a;
            this.callAsync = _0x2fb57a;
            this._promise = _0x15d260;
            this.promise = _0x15d260;
            this._x = undefined;
            this.compile = this.compile;
            this.tap = this.tap;
            this.tapAsync = this.tapAsync;
            this.tapPromise = this.tapPromise;
          }
          ["compile"](_0x49a57a) {
            throw new Error("Abstract: should be overridden");
          }
          ["_createCall"](_0x3de060) {
            return this.compile({
              "taps": this.taps,
              "interceptors": this.interceptors,
              "args": this._args,
              "type": _0x3de060
            });
          }
          ["_tap"](_0x3fd343, _0xff35e3, _0x386537) {
            if ("string" == typeof _0xff35e3) {
              _0xff35e3 = {
                "name": _0xff35e3.trim()
              };
            } else {
              if ("object" != typeof _0xff35e3 || null === _0xff35e3) {
                throw new Error("Invalid tap options");
              }
            }
            if ("string" != typeof _0xff35e3.name || '' === _0xff35e3.name) {
              throw new Error("Missing name for tap");
            }
            if (undefined !== _0xff35e3.context) {
              _0x32410b();
            }
            _0xff35e3 = Object.assign({
              "type": _0x3fd343,
              "fn": _0x386537
            }, _0xff35e3);
            _0xff35e3 = this._runRegisterInterceptors(_0xff35e3);
            this._insert(_0xff35e3);
          }
          ["tap"](_0x1772c5, _0x7410aa) {
            this._tap("sync", _0x1772c5, _0x7410aa);
          }
          ["tapAsync"](_0x5ee77a, _0x3856ae) {
            this._tap("async", _0x5ee77a, _0x3856ae);
          }
          ["tapPromise"](_0x2f5f93, _0x147bd2) {
            this._tap("promise", _0x2f5f93, _0x147bd2);
          }
          ["_runRegisterInterceptors"]() {
            for (const _0x4218c1 of this.interceptors) if (_0x4218c1.register) {
              const _0xbbd987 = _0x4218c1.register(_0xbbd987);
              if (undefined !== _0xbbd987) {
                _0xbbd987;
              }
            }
            return _0xbbd987;
          }
          ["withOptions"](_0x1ca6ff) {
            return {
              "name": this.name,
              "tap": (_0x49cd4c, _0x492a2d) => this.tap(Object.assign({}, _0x1ca6ff, "string" == typeof _0x49cd4c ? {
                "name": _0x49cd4c
              } : _0x49cd4c), _0x492a2d),
              "tapAsync": (_0x43539b, _0x48f924) => this.tapAsync(Object.assign({}, _0x1ca6ff, "string" == typeof _0x43539b ? {
                "name": _0x43539b
              } : _0x43539b), _0x48f924),
              "tapPromise": (_0x3ab2f7, _0x2910d4) => this.tapPromise(Object.assign({}, _0x1ca6ff, "string" == typeof _0x3ab2f7 ? {
                "name": _0x3ab2f7
              } : _0x3ab2f7), _0x2910d4),
              "intercept": _0xe0450a => this.intercept(_0xe0450a),
              "isUsed": () => this.isUsed(),
              "withOptions": _0x5585da => this.withOptions(Object.assign({}, _0x1ca6ff, "string" == typeof _0x5585da ? {
                "name": _0x5585da
              } : _0x5585da))
            };
          }
          ["isUsed"]() {
            return this.taps.length > 0x0 || this.interceptors.length > 0x0;
          }
          ["intercept"](_0x30046c) {
            this._resetCompilation();
            this.interceptors.push(Object.assign({}, _0x30046c));
            if (_0x30046c.register) {
              for (let _0x44988e = 0x0; _0x44988e < this.taps.length; _0x44988e++) {
                this.taps[_0x44988e] = _0x30046c.register(this.taps[_0x44988e]);
              }
            }
          }
          ["_resetCompilation"]() {
            this.call = this._call;
            this.callAsync = this._callAsync;
            this.promise = this._promise;
          }
          ["_insert"](_0x422d0b) {
            let _0x58083d;
            this._resetCompilation();
            if ("string" == typeof _0x422d0b.before) {
              _0x58083d = new Set([_0x422d0b.before]);
            } else if (Array.isArray(_0x422d0b.before)) {
              _0x58083d = new Set(_0x422d0b.before);
            }
            let _0x49435a = 0x0;
            if ("number" == typeof _0x422d0b.stage) {
              _0x49435a = _0x422d0b.stage;
            }
            let _0x2b8c5a = this.taps.length;
            for (; _0x2b8c5a > 0x0;) {
              _0x2b8c5a--;
              const _0x59f414 = this.taps[_0x2b8c5a];
              this.taps[_0x2b8c5a + 0x1] = _0x59f414;
              const _0x482cd8 = _0x59f414.stage || 0x0;
              if (_0x58083d) {
                if (_0x58083d.has(_0x59f414.name)) {
                  _0x58083d["delete"](_0x59f414.name);
                  continue;
                }
                if (_0x58083d.size > 0x0) {
                  continue;
                }
              }
              if (!(_0x482cd8 > _0x49435a)) {
                _0x2b8c5a++;
                break;
              }
            }
            this.taps[_0x2b8c5a] = _0x422d0b;
          }
        }
        Object.setPrototypeOf(_0x5f416b.prototype, null);
        _0x23a3b5.exports = _0x5f416b;
      },
      0x1523: _0x4d37a4 => {
        'use strict';
  
        _0x4d37a4.exports = class {
          constructor(_0x2afb95) {
            this.config = _0x2afb95;
            this.options = undefined;
            this._args = undefined;
          }
          ["create"](_0x2fc619) {
            let _0x2a4f42;
            this.init(_0x2fc619);
            switch (this.options.type) {
              case "sync":
                _0x2a4f42 = new Function(this.args(), "\"use strict\";\n" + this.header() + this.contentWithInterceptors({
                  "onError": _0x20bbf7 => "throw " + _0x20bbf7 + ";\n",
                  "onResult": _0x108c62 => "return " + _0x108c62 + ";\n",
                  "resultReturns": true,
                  "onDone": () => '',
                  "rethrowIfPossible": true
                }));
                break;
              case "async":
                _0x2a4f42 = new Function(this.args({
                  "after": "_callback"
                }), "\"use strict\";\n" + this.header() + this.contentWithInterceptors({
                  "onError": _0x3bbc86 => "_callback(" + _0x3bbc86 + ");\n",
                  "onResult": _0x45a18b => "_callback(null, " + _0x45a18b + ");\n",
                  "onDone": () => "_callback();\n"
                }));
                break;
              case "promise":
                let _0x32b756 = false;
                _0x32b756 = true;
                const _0x51bc90 = this.contentWithInterceptors({
                  "onError": _0x50e244 => "_error(" + _0x50e244 + ");\n",
                  "onResult": _0x3cde1d => "_resolve(" + _0x3cde1d + ");\n",
                  "onDone": () => "_resolve();\n"
                });
                let _0x345a66 = '';
                _0x345a66 += "\"use strict\";\n";
                _0x345a66 += this.header();
                _0x345a66 += "return new Promise((function(_resolve, _reject) {\n";
                if (_0x32b756) {
                  _0x345a66 += "var _sync = true;\n";
                  _0x345a66 += "function _error(_err) {\n";
                  _0x345a66 += "if(_sync)\n";
                  _0x345a66 += "_resolve(Promise.resolve().then((function() { throw _err; })));\n";
                  _0x345a66 += "else\n";
                  _0x345a66 += "_reject(_err);\n";
                  _0x345a66 += "};\n";
                }
                _0x345a66 += _0x51bc90;
                if (_0x32b756) {
                  _0x345a66 += "_sync = false;\n";
                }
                _0x345a66 += "}));\n";
                _0x2a4f42 = new Function(this.args(), _0x345a66);
            }
            this.deinit();
            return _0x2a4f42;
          }
          ["setup"](_0x50cd3c, _0x5160ad) {
            _0x50cd3c._x = _0x5160ad.taps.map(_0xa1a36e => _0xa1a36e.fn);
          }
          ["init"](_0x2ac9f4) {
            this.options = _0x2ac9f4;
            this._args = _0x2ac9f4.args.slice();
          }
          ["deinit"]() {
            this.options = undefined;
            this._args = undefined;
          }
          ["contentWithInterceptors"](_0x54e79c) {
            if (this.options.interceptors.length > 0x0) {
              const _0xf72c5 = _0x54e79c.onError;
              const _0x28b029 = _0x54e79c.onResult;
              const _0x5ebb71 = _0x54e79c.onDone;
              let _0x580011 = '';
              for (let _0x3ad38a = 0x0; _0x3ad38a < this.options.interceptors.length; _0x3ad38a++) {
                const _0x216a37 = this.options.interceptors[_0x3ad38a];
                if (_0x216a37.call) {
                  _0x580011 += this.getInterceptor(_0x3ad38a) + ".call(" + this.args({
                    "before": _0x216a37.context ? "_context" : undefined
                  }) + ");\n";
                }
              }
              _0x580011 += this.content(Object.assign(_0x54e79c, {
                "onError": _0xf72c5 && (_0x38e2a6 => {
                  let _0x10da03 = '';
                  for (let _0x5950fd = 0x0; _0x5950fd < this.options.interceptors.length; _0x5950fd++) {
                    if (this.options.interceptors[_0x5950fd].error) {
                      _0x10da03 += this.getInterceptor(_0x5950fd) + ".error(" + _0x38e2a6 + ");\n";
                    }
                  }
                  _0x10da03 += _0xf72c5(_0x38e2a6);
                  return _0x10da03;
                }),
                "onResult": _0x28b029 && (_0x33440f => {
                  let _0x437272 = '';
                  for (let _0x5abc49 = 0x0; _0x5abc49 < this.options.interceptors.length; _0x5abc49++) {
                    if (this.options.interceptors[_0x5abc49].result) {
                      _0x437272 += this.getInterceptor(_0x5abc49) + ".result(" + _0x33440f + ");\n";
                    }
                  }
                  _0x437272 += _0x28b029(_0x33440f);
                  return _0x437272;
                }),
                "onDone": _0x5ebb71 && (() => {
                  let _0x29a1f7 = '';
                  for (let _0x354246 = 0x0; _0x354246 < this.options.interceptors.length; _0x354246++) {
                    if (this.options.interceptors[_0x354246].done) {
                      _0x29a1f7 += this.getInterceptor(_0x354246) + ".done();\n";
                    }
                  }
                  _0x29a1f7 += _0x5ebb71();
                  return _0x29a1f7;
                })
              }));
              return _0x580011;
            }
            return this.content(_0x54e79c);
          }
          ["header"]() {
            let _0x116b34 = '';
            if (this.needContext()) {
              _0x116b34 += "var _context = {};\n";
            } else {
              _0x116b34 += "var _context;\n";
            }
            _0x116b34 += "var _x = this._x;\n";
            if (this.options.interceptors.length > 0x0) {
              _0x116b34 += "var _taps = this.taps;\n";
              _0x116b34 += "var _interceptors = this.interceptors;\n";
            }
            return _0x116b34;
          }
          ["needContext"]() {
            for (const _0x24105a of this.options.taps) if (_0x24105a.context) {
              return true;
            }
            return false;
          }
          ["callTap"](_0x5254ad, {
            onError: _0xffc60b,
            onResult: _0x1e27cd,
            onDone: _0xc1bffc,
            rethrowIfPossible: _0x3e426d
          }) {
            let _0x564c4c = '';
            let _0x169c81 = false;
            for (let _0x20325d = 0x0; _0x20325d < this.options.interceptors.length; _0x20325d++) {
              const _0x164623 = this.options.interceptors[_0x20325d];
              if (_0x164623.tap) {
                if (!_0x169c81) {
                  _0x564c4c += "var _tap" + _0x5254ad + " = " + this.getTap(_0x5254ad) + ";\n";
                  _0x169c81 = true;
                }
                _0x564c4c += this.getInterceptor(_0x20325d) + ".tap(" + (_0x164623.context ? "_context, " : '') + "_tap" + _0x5254ad + ");\n";
              }
            }
            _0x564c4c += "var _fn" + _0x5254ad + " = " + this.getTapFn(_0x5254ad) + ";\n";
            const _0x45bbf6 = this.options.taps[_0x5254ad];
            switch (_0x45bbf6.type) {
              case "sync":
                if (!_0x3e426d) {
                  _0x564c4c += "var _hasError" + _0x5254ad + " = false;\n";
                  _0x564c4c += "try {\n";
                }
                _0x564c4c += _0x1e27cd ? "var _result" + _0x5254ad + " = _fn" + _0x5254ad + "(" + this.args({
                  "before": _0x45bbf6.context ? "_context" : undefined
                }) + ");\n" : "_fn" + _0x5254ad + "(" + this.args({
                  "before": _0x45bbf6.context ? "_context" : undefined
                }) + ");\n";
                if (!_0x3e426d) {
                  _0x564c4c += "} catch(_err) {\n";
                  _0x564c4c += "_hasError" + _0x5254ad + " = true;\n";
                  _0x564c4c += _0xffc60b("_err");
                  _0x564c4c += "}\n";
                  _0x564c4c += "if(!_hasError" + _0x5254ad + ") {\n";
                }
                if (_0x1e27cd) {
                  _0x564c4c += _0x1e27cd("_result" + _0x5254ad);
                }
                if (_0xc1bffc) {
                  _0x564c4c += _0xc1bffc();
                }
                if (!_0x3e426d) {
                  _0x564c4c += "}\n";
                }
                break;
              case "async":
                let _0x56e001 = '';
                _0x56e001 += _0x1e27cd ? "(function(_err" + _0x5254ad + ", _result" + _0x5254ad + ") {\n" : "(function(_err" + _0x5254ad + ") {\n";
                _0x56e001 += "if(_err" + _0x5254ad + ") {\n";
                _0x56e001 += _0xffc60b("_err" + _0x5254ad);
                _0x56e001 += "} else {\n";
                if (_0x1e27cd) {
                  _0x56e001 += _0x1e27cd("_result" + _0x5254ad);
                }
                if (_0xc1bffc) {
                  _0x56e001 += _0xc1bffc();
                }
                _0x56e001 += "}\n";
                _0x56e001 += "})";
                _0x564c4c += "_fn" + _0x5254ad + "(" + this.args({
                  "before": _0x45bbf6.context ? "_context" : undefined,
                  "after": _0x56e001
                }) + ");\n";
                break;
              case "promise":
                _0x564c4c += "var _hasResult" + _0x5254ad + " = false;\n";
                _0x564c4c += "var _promise" + _0x5254ad + " = _fn" + _0x5254ad + "(" + this.args({
                  "before": _0x45bbf6.context ? "_context" : undefined
                }) + ");\n";
                _0x564c4c += "if (!_promise" + _0x5254ad + " || !_promise" + _0x5254ad + ".then)\n";
                _0x564c4c += "  throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise" + _0x5254ad + " + ')');\n";
                _0x564c4c += "_promise" + _0x5254ad + ".then((function(_result" + _0x5254ad + ") {\n";
                _0x564c4c += "_hasResult" + _0x5254ad + " = true;\n";
                if (_0x1e27cd) {
                  _0x564c4c += _0x1e27cd("_result" + _0x5254ad);
                }
                if (_0xc1bffc) {
                  _0x564c4c += _0xc1bffc();
                }
                _0x564c4c += "}), function(_err" + _0x5254ad + ") {\n";
                _0x564c4c += "if(_hasResult" + _0x5254ad + ") throw _err" + _0x5254ad + ";\n";
                _0x564c4c += _0xffc60b("_err" + _0x5254ad);
                _0x564c4c += "});\n";
            }
            return _0x564c4c;
          }
          ["callTapsSeries"]({
            onError: _0x1b7699,
            onResult: _0x22fcec,
            resultReturns: _0x30dc92,
            onDone: _0x216277,
            doneReturns: _0xe6a453,
            rethrowIfPossible: _0x1f4fd5
          }) {
            if (0x0 === this.options.taps.length) {
              return _0x216277();
            }
            const _0x3819b9 = this.options.taps.findIndex(_0x14d7cb => "sync" !== _0x14d7cb.type);
            const _0x1cda1e = _0x30dc92 || _0xe6a453;
            let _0x56a3e8 = '';
            let _0x1f79a0 = _0x216277;
            let _0x32c628 = 0x0;
            for (let _0x1835a4 = this.options.taps.length - 0x1; _0x1835a4 >= 0x0; _0x1835a4--) {
              if (_0x1f79a0 !== _0x216277 && ("sync" !== this.options.taps[_0x1835a4].type || _0x32c628++ > 0x14)) {
                _0x32c628 = 0x0;
                _0x56a3e8 += "function _next" + _0x1835a4 + "() {\n";
                _0x56a3e8 += _0x1f79a0();
                _0x56a3e8 += "}\n";
                _0x1f79a0 = () => (_0x1cda1e ? "return " : '') + "_next" + _0x1835a4 + "();\n";
              }
              const _0x46f12e = _0x56c18a => _0x56c18a ? '' : _0x216277();
              const _0xaea39e = this.callTap(_0x1835a4, {
                "onError": _0x1a3ce8 => _0x1b7699(_0x1835a4, _0x1a3ce8, _0x1f79a0, _0x46f12e),
                "onResult": _0x22fcec && (_0x3fd644 => _0x22fcec(_0x1835a4, _0x3fd644, _0x1f79a0, _0x46f12e)),
                "onDone": !_0x22fcec && _0x1f79a0,
                "rethrowIfPossible": _0x1f4fd5 && (_0x3819b9 < 0x0 || _0x1835a4 < _0x3819b9)
              });
              _0x1f79a0 = () => _0xaea39e;
            }
            _0x56a3e8 += _0x1f79a0();
            return _0x56a3e8;
          }
          ["callTapsLooping"]({
            onError: _0x4533cb,
            onDone: _0x30fd93,
            rethrowIfPossible: _0x34f3bb
          }) {
            if (0x0 === this.options.taps.length) {
              return _0x30fd93();
            }
            const _0x11b0a7 = this.options.taps.every(_0x433e64 => "sync" === _0x433e64.type);
            let _0x481b52 = '';
            if (!_0x11b0a7) {
              _0x481b52 += "var _looper = (function() {\n";
              _0x481b52 += "var _loopAsync = false;\n";
            }
            _0x481b52 += "var _loop;\n";
            _0x481b52 += "do {\n";
            _0x481b52 += "_loop = false;\n";
            for (let _0x2d430f = 0x0; _0x2d430f < this.options.interceptors.length; _0x2d430f++) {
              const _0x56ed34 = this.options.interceptors[_0x2d430f];
              if (_0x56ed34.loop) {
                _0x481b52 += this.getInterceptor(_0x2d430f) + ".loop(" + this.args({
                  "before": _0x56ed34.context ? "_context" : undefined
                }) + ");\n";
              }
            }
            _0x481b52 += this.callTapsSeries({
              "onError": _0x4533cb,
              "onResult": (_0x3bc2be, _0x59399a, _0x922ce, _0x3e907b) => {
                let _0x3854dc = '';
                _0x3854dc += "if(" + _0x59399a + " !== undefined) {\n";
                _0x3854dc += "_loop = true;\n";
                if (!_0x11b0a7) {
                  _0x3854dc += "if(_loopAsync) _looper();\n";
                }
                _0x3854dc += _0x3e907b(true);
                _0x3854dc += "} else {\n";
                _0x3854dc += _0x922ce();
                _0x3854dc += "}\n";
                return _0x3854dc;
              },
              "onDone": _0x30fd93 && (() => {
                let _0x21e0c3 = '';
                _0x21e0c3 += "if(!_loop) {\n";
                _0x21e0c3 += _0x30fd93();
                _0x21e0c3 += "}\n";
                return _0x21e0c3;
              }),
              "rethrowIfPossible": _0x34f3bb && _0x11b0a7
            });
            _0x481b52 += "} while(_loop);\n";
            if (!_0x11b0a7) {
              _0x481b52 += "_loopAsync = true;\n";
              _0x481b52 += "});\n";
              _0x481b52 += "_looper();\n";
            }
            return _0x481b52;
          }
          ["callTapsParallel"]({
            onError: _0x1f0b59,
            onResult: _0xe2d96c,
            onDone: _0x4e5f3b,
            rethrowIfPossible: _0x151460,
            onTap: _0x1de594 = (_0x3576a8, _0x267821) => _0x267821()
          }) {
            if (this.options.taps.length <= 0x1) {
              return this.callTapsSeries({
                "onError": _0x1f0b59,
                "onResult": _0xe2d96c,
                "onDone": _0x4e5f3b,
                "rethrowIfPossible": _0x151460
              });
            }
            let _0x334bae = '';
            _0x334bae += "do {\n";
            _0x334bae += "var _counter = " + this.options.taps.length + ";\n";
            if (_0x4e5f3b) {
              _0x334bae += "var _done = (function() {\n";
              _0x334bae += _0x4e5f3b();
              _0x334bae += "});\n";
            }
            for (let _0x554152 = 0x0; _0x554152 < this.options.taps.length; _0x554152++) {
              const _0x9c1fb = () => _0x4e5f3b ? "if(--_counter === 0) _done();\n" : "--_counter;";
              const _0x597441 = _0x11aaf2 => _0x11aaf2 || !_0x4e5f3b ? "_counter = 0;\n" : "_counter = 0;\n_done();\n";
              _0x334bae += "if(_counter <= 0) break;\n";
              _0x334bae += _0x1de594(_0x554152, () => this.callTap(_0x554152, {
                "onError": _0x242e60 => {
                  let _0x3cdba5 = '';
                  _0x3cdba5 += "if(_counter > 0) {\n";
                  _0x3cdba5 += _0x1f0b59(_0x554152, _0x242e60, _0x9c1fb, _0x597441);
                  _0x3cdba5 += "}\n";
                  return _0x3cdba5;
                },
                "onResult": _0xe2d96c && (_0x3f7937 => {
                  let _0x5ef849 = '';
                  _0x5ef849 += "if(_counter > 0) {\n";
                  _0x5ef849 += _0xe2d96c(_0x554152, _0x3f7937, _0x9c1fb, _0x597441);
                  _0x5ef849 += "}\n";
                  return _0x5ef849;
                }),
                "onDone": !_0xe2d96c && (() => _0x4e5f3b ? "if(--_counter === 0) _done();\n" : "--_counter;"),
                "rethrowIfPossible": _0x151460
              }), _0x9c1fb, _0x597441);
            }
            _0x334bae += "} while(false);\n";
            return _0x334bae;
          }
          ["args"]({
            before: _0x25f70c,
            after: _0x44a511
          } = {}) {
            let _0x3122ff = this._args;
            if (_0x25f70c) {
              _0x3122ff = [_0x25f70c].concat(_0x3122ff);
            }
            if (_0x44a511) {
              _0x3122ff = _0x3122ff.concat(_0x44a511);
            }
            return 0x0 === _0x3122ff.length ? '' : _0x3122ff.join(", ");
          }
          ["getTapFn"](_0x3af538) {
            return "_x[" + _0x3af538 + "]";
          }
          ["getTap"](_0x5e2e59) {
            return "_taps[" + _0x5e2e59 + "]";
          }
          ["getInterceptor"](_0x5ab62e) {
            return "_interceptors[" + _0x5ab62e + "]";
          }
        };
      },
      0x1e5b: (_0x34f5e6, _0x268258, _0x5980c7) => {
        'use strict';
  
        const _0x112efc = _0x5980c7(0x1779);
        const _0x320af2 = (_0x3a0acc, _0x4ae0c7) => _0x4ae0c7;
        class _0x47586f {
          constructor(_0x276fb3, _0x32f3df = undefined) {
            this._map = new Map();
            this.name = _0x32f3df;
            this._factory = _0x276fb3;
            this._interceptors = [];
          }
          ["get"](_0x42a490) {
            return this._map.get(_0x42a490);
          }
          ["for"](_0x15ca62) {
            const _0x3be1a9 = this.get(_0x15ca62);
            if (undefined !== _0x3be1a9) {
              return _0x3be1a9;
            }
            let _0x5e75a5 = this._factory(_0x15ca62);
            const _0x97b818 = this._interceptors;
            for (let _0x590705 = 0x0; _0x590705 < _0x97b818.length; _0x590705++) {
              _0x5e75a5 = _0x97b818[_0x590705].factory(_0x15ca62, _0x5e75a5);
            }
            this._map.set(_0x15ca62, _0x5e75a5);
            return _0x5e75a5;
          }
          ["intercept"](_0x3a5ae4) {
            this._interceptors.push(Object.assign({
              "factory": _0x320af2
            }, _0x3a5ae4));
          }
        }
        _0x47586f.prototype.tap = _0x112efc.deprecate(function (_0x4325ac, _0x34a26e, _0x320572) {
          return this["for"](_0x4325ac).tap(_0x34a26e, _0x320572);
        }, "HookMap#tap(key,\u2026) is deprecated. Use HookMap#for(key).tap(\u2026) instead.");
        _0x47586f.prototype.tapAsync = _0x112efc.deprecate(function (_0x400ab1, _0xb8924b, _0x102ff9) {
          return this["for"](_0x400ab1).tapAsync(_0xb8924b, _0x102ff9);
        }, "HookMap#tapAsync(key,\u2026) is deprecated. Use HookMap#for(key).tapAsync(\u2026) instead.");
        _0x47586f.prototype.tapPromise = _0x112efc.deprecate(function (_0x4e8ccf, _0x2c6fd3, _0x5f1f9d) {
          return this["for"](_0x4e8ccf).tapPromise(_0x2c6fd3, _0x5f1f9d);
        }, "HookMap#tapPromise(key,\u2026) is deprecated. Use HookMap#for(key).tapPromise(\u2026) instead.");
        _0x34f5e6.exports = _0x47586f;
      },
      0xcda: (_0x59255a, _0x468e47, _0x1ed07c) => {
        'use strict';
  
        _0x1ed07c(0x1fbe);
        class _0x29787b {
          constructor(_0xe0a60c, _0x5d9d4a = undefined) {
            this.hooks = _0xe0a60c;
            this.name = _0x5d9d4a;
          }
          ["tap"](_0x5193b5, _0xe60310) {
            for (const _0x55c39a of this.hooks) _0x55c39a.tap(_0x5193b5, _0xe60310);
          }
          ["tapAsync"](_0x2d6fa0, _0x7cac06) {
            for (const _0x1f6b92 of this.hooks) _0x1f6b92.tapAsync(_0x2d6fa0, _0x7cac06);
          }
          ["tapPromise"](_0x4216c7, _0x1d3692) {
            for (const _0x2d667e of this.hooks) _0x2d667e.tapPromise(_0x4216c7, _0x1d3692);
          }
          ["isUsed"]() {
            for (const _0x4cc0e0 of this.hooks) if (_0x4cc0e0.isUsed()) {
              return true;
            }
            return false;
          }
          ["intercept"](_0x33b4c3) {
            for (const _0x131ba7 of this.hooks) _0x131ba7.intercept(_0x33b4c3);
          }
          ["withOptions"](_0x11eb80) {
            return new _0x29787b(this.hooks.map(_0x17a108 => _0x17a108.withOptions(_0x11eb80)), this.name);
          }
        }
        _0x59255a.exports = _0x29787b;
      },
      0x1438: (_0x35cf0b, _0x261fd0, _0x29ebd3) => {
        'use strict';
  
        const _0x59d1b3 = _0x29ebd3(0x1fbe);
        const _0x35900d = _0x29ebd3(0x1523);
        const _0x1d4ea3 = new class extends _0x35900d {
          ["content"]({
            onError: _0x51b7a1,
            onResult: _0x463cb5,
            resultReturns: _0x5acdc2,
            onDone: _0x4f08b2,
            rethrowIfPossible: _0x2e3452
          }) {
            return this.callTapsSeries({
              "onError": (_0x346e00, _0x2de56e) => _0x51b7a1(_0x2de56e),
              "onResult": (_0x29c5aa, _0x2d225c, _0x4d49cb) => "if(" + _0x2d225c + " !== undefined) {\n" + _0x463cb5(_0x2d225c) + ";\n} else {\n" + _0x4d49cb() + "}\n",
              "resultReturns": _0x5acdc2,
              "onDone": _0x4f08b2,
              "rethrowIfPossible": _0x2e3452
            });
          }
        }();
        const _0x5708b2 = () => {
          throw new Error("tapAsync is not supported on a SyncBailHook");
        };
        const _0x1d215d = () => {
          throw new Error("tapPromise is not supported on a SyncBailHook");
        };
        const _0x47115 = function (_0xfbd294) {
          _0x1d4ea3.setup(this, _0xfbd294);
          return _0x1d4ea3.create(_0xfbd294);
        };
        function _0x28d506(_0x4652bf = [], _0x5a8125 = undefined) {
          const _0x478925 = new _0x59d1b3(_0x4652bf, _0x5a8125);
          _0x478925.constructor = _0x28d506;
          _0x478925.tapAsync = _0x5708b2;
          _0x478925.tapPromise = _0x1d215d;
          _0x478925.compile = _0x47115;
          return _0x478925;
        }
        _0x28d506.prototype = null;
        _0x35cf0b.exports = _0x28d506;
      },
      0x16db: (_0x3b7145, _0x1a3c2e, _0x171cd7) => {
        'use strict';
  
        const _0x1592cb = _0x171cd7(0x1fbe);
        const _0x14b254 = _0x171cd7(0x1523);
        const _0x148a72 = new class extends _0x14b254 {
          ["content"]({
            onError: _0x5b8dcf,
            onDone: _0x27a164,
            rethrowIfPossible: _0x43dcc3
          }) {
            return this.callTapsSeries({
              "onError": (_0x2838b1, _0x55fb9) => _0x5b8dcf(_0x55fb9),
              "onDone": _0x27a164,
              "rethrowIfPossible": _0x43dcc3
            });
          }
        }();
        const _0x498ee5 = () => {
          throw new Error("tapAsync is not supported on a SyncHook");
        };
        const _0x29b583 = () => {
          throw new Error("tapPromise is not supported on a SyncHook");
        };
        const _0x357312 = function (_0x4d131a) {
          _0x148a72.setup(this, _0x4d131a);
          return _0x148a72.create(_0x4d131a);
        };
        function _0x36a1eb(_0x29522a = [], _0x32ac9a = undefined) {
          const _0xafe7a5 = new _0x1592cb(_0x29522a, _0x32ac9a);
          _0xafe7a5.constructor = _0x36a1eb;
          _0xafe7a5.tapAsync = _0x498ee5;
          _0xafe7a5.tapPromise = _0x29b583;
          _0xafe7a5.compile = _0x357312;
          return _0xafe7a5;
        }
        _0x36a1eb.prototype = null;
        _0x3b7145.exports = _0x36a1eb;
      },
      0xf87: (_0x3acaeb, _0x4e830e, _0x874611) => {
        'use strict';
  
        const _0x40aab8 = _0x874611(0x1fbe);
        const _0x4625f6 = _0x874611(0x1523);
        const _0x455d90 = new class extends _0x4625f6 {
          ["content"]({
            onError: _0x108005,
            onDone: _0x25ed4c,
            rethrowIfPossible: _0x1d6244
          }) {
            return this.callTapsLooping({
              "onError": (_0x507f1e, _0x150698) => _0x108005(_0x150698),
              "onDone": _0x25ed4c,
              "rethrowIfPossible": _0x1d6244
            });
          }
        }();
        const _0x2912e5 = () => {
          throw new Error("tapAsync is not supported on a SyncLoopHook");
        };
        const _0x3ffba3 = () => {
          throw new Error("tapPromise is not supported on a SyncLoopHook");
        };
        const _0x2ebbe1 = function (_0x4c1449) {
          _0x455d90.setup(this, _0x4c1449);
          return _0x455d90.create(_0x4c1449);
        };
        function _0x298615(_0x25690a = [], _0x556a33 = undefined) {
          const _0x20b1b9 = new _0x40aab8(_0x25690a, _0x556a33);
          _0x20b1b9.constructor = _0x298615;
          _0x20b1b9.tapAsync = _0x2912e5;
          _0x20b1b9.tapPromise = _0x3ffba3;
          _0x20b1b9.compile = _0x2ebbe1;
          return _0x20b1b9;
        }
        _0x298615.prototype = null;
        _0x3acaeb.exports = _0x298615;
      },
      0x1544: (_0x48e093, _0x313552, _0x3bf81c) => {
        'use strict';
  
        const _0xba7355 = _0x3bf81c(0x1fbe);
        const _0x368595 = _0x3bf81c(0x1523);
        const _0x540317 = new class extends _0x368595 {
          ["content"]({
            onError: _0x1b91e4,
            onResult: _0x343dfb,
            resultReturns: _0x4afa9e,
            rethrowIfPossible: _0xdc2711
          }) {
            return this.callTapsSeries({
              "onError": (_0x3a75af, _0x5f5799) => _0x1b91e4(_0x5f5799),
              "onResult": (_0x58f19d, _0x27f454, _0x2ce493) => {
                let _0x3ea606 = '';
                _0x3ea606 += "if(" + _0x27f454 + " !== undefined) {\n";
                _0x3ea606 += this._args[0x0] + " = " + _0x27f454 + ";\n";
                _0x3ea606 += "}\n";
                _0x3ea606 += _0x2ce493();
                return _0x3ea606;
              },
              "onDone": () => _0x343dfb(this._args[0x0]),
              "doneReturns": _0x4afa9e,
              "rethrowIfPossible": _0xdc2711
            });
          }
        }();
        const _0x36ed62 = () => {
          throw new Error("tapAsync is not supported on a SyncWaterfallHook");
        };
        const _0x56f214 = () => {
          throw new Error("tapPromise is not supported on a SyncWaterfallHook");
        };
        const _0x508752 = function (_0x1473ca) {
          _0x540317.setup(this, _0x1473ca);
          return _0x540317.create(_0x1473ca);
        };
        function _0x5c86e1(_0x65bf2d = [], _0x351d66 = undefined) {
          if (_0x65bf2d.length < 0x1) {
            throw new Error("Waterfall hooks must have at least one argument");
          }
          const _0x1f7cd9 = new _0xba7355(_0x65bf2d, _0x351d66);
          _0x1f7cd9.constructor = _0x5c86e1;
          _0x1f7cd9.tapAsync = _0x36ed62;
          _0x1f7cd9.tapPromise = _0x56f214;
          _0x1f7cd9.compile = _0x508752;
          return _0x1f7cd9;
        }
        _0x5c86e1.prototype = null;
        _0x48e093.exports = _0x5c86e1;
      },
      0x2505: (_0x2fe852, _0x1e4e25, _0x55e8d7) => {
        'use strict';
  
        _0x1e4e25.__esModule = true;
        _0x1e4e25.SyncHook = _0x55e8d7(0x16db);
        _0x1e4e25.SyncBailHook = _0x55e8d7(0x1438);
        _0x1e4e25.SyncWaterfallHook = _0x55e8d7(0x1544);
        _0x1e4e25.SyncLoopHook = _0x55e8d7(0xf87);
        _0x1e4e25.AsyncParallelHook = _0x55e8d7(0x2042);
        _0x1e4e25.AsyncParallelBailHook = _0x55e8d7(0xeb9);
        _0x1e4e25.AsyncSeriesHook = _0x55e8d7(0x999);
        _0x1e4e25.AsyncSeriesBailHook = _0x55e8d7(0x1258);
        _0x1e4e25.AsyncSeriesLoopHook = _0x55e8d7(0x12e4);
        _0x1e4e25.AsyncSeriesWaterfallHook = _0x55e8d7(0xa7e);
        _0x1e4e25.HookMap = _0x55e8d7(0x1e5b);
        _0x1e4e25.MultiHook = _0x55e8d7(0xcda);
      },
      0x1779: (_0xe85fde, _0x45694d) => {
        'use strict';
  
        _0x45694d.deprecate = (_0x4eed0a, _0x295714) => {
          let _0x297437 = true;
          return function () {
            if (_0x297437) {
              console.warn("DeprecationWarning: " + _0x295714);
              _0x297437 = false;
            }
            return _0x4eed0a.apply(this, arguments);
          };
        };
      },
      0x2148: function (_0x5e685d, _0x43f002, _0x222beb) {
        'use strict';
  
        var _0x48c732 = this && this.__importDefault || function (_0x3ecd97) {
          return _0x3ecd97 && _0x3ecd97.__esModule ? _0x3ecd97 : {
            "default": _0x3ecd97
          };
        };
        Object.defineProperty(_0x43f002, "__esModule", {
          "value": true
        });
        const _0x34fea2 = _0x48c732(_0x222beb(0x492));
        const _0x5f07ae = _0x48c732(_0x222beb(0x109));
        const _0x21b93f = _0x222beb(0xda5);
        const _0x513a8e = _0x48c732(_0x222beb(0x1bba));
        const _0x24a6a0 = _0x48c732(_0x222beb(0x1d63));
        const _0x2abb16 = _0x48c732(_0x222beb(0xea3));
        const _0x44ccea = _0x222beb(0x24b7);
        _0x5e685d.exports = function (_0x518021) {
          _0x513a8e["default"].preload();
          const _0x117426 = document.scripts;
          let _0x271b73 = false;
          for (const _0x13b42e of _0x117426) if (_0x13b42e.src.indexOf("YYGGames.js") > -0x1 || _0x13b42e.src.indexOf("h5gamessdk.yyggames.com/sdk/YYGGames2.js") > -0x1 || _0x13b42e.src.indexOf("h5gamessdk.yyggames.com/sdk/YYGGames-dev.js") > -0x1) {
            _0x271b73 = true;
            const _0x32a5e1 = _0x13b42e.getAttribute("data-adapter");
            const _0x96dc7a = _0x13b42e.getAttribute("data-channel");
            const _0x1e969b = _0x13b42e.getAttribute("data-id");
            _0x5f07ae["default"].dataid = _0x1e969b;
            if (_0x96dc7a) {
              _0x5f07ae["default"].channel = _0x96dc7a.toUpperCase();
            }
            if ("laya" == _0x32a5e1) {
              _0x518021.YYGGames = _0x34fea2["default"].getInstance();
              _0x518021._YYGGames = _0x24a6a0["default"].getInstance();
              window._YYGGames = _0x24a6a0["default"].getInstance();
            } else {
              _0x518021.YYGGames = _0x24a6a0["default"].getInstance();
            }
            break;
          }
          _0x518021.AdPlatformType = _0x21b93f.AdPlatformType;
          window.AdPlatformType = _0x21b93f.AdPlatformType;
          _0x518021.YYGGames.bundle = _0x2abb16["default"];
          _0x518021.YYGGames.events = Object.assign({}, _0x44ccea.AdEvent);
          return _0x518021.YYGGames;
        }({});
      },
      0x109: (_0x20e890, _0x6249f7) => {
        'use strict';
  
        Object.defineProperty(_0x6249f7, "__esModule", {
          "value": true
        });
        class _0x4c7585 {}
        _0x6249f7["default"] = _0x4c7585;
        _0x4c7585.pause = false;
        _0x4c7585.isShowAD = false;
        _0x4c7585.afgConfig = {
          "channel": null
        };
        _0x4c7585.afcConfig = {
          "channel": null
        };
        _0x4c7585.source = null;
      },
      0x1eb: (_0x5f169c, _0x35a5ac) => {
        'use strict';
  
        Object.defineProperty(_0x35a5ac, "__esModule", {
          "value": true
        });
        class _0x283ae0 {
          constructor() {
            ++_0x283ae0.ID;
            this._myID = _0x283ae0.ID;
          }
          ["getMyID"]() {
            return this._myID;
          }
        }
        _0x35a5ac["default"] = _0x283ae0;
        _0x283ae0.ID = 0x0;
      },
      0x63a: (_0x1f08c6, _0x188564) => {
        'use strict';
  
        Object.defineProperty(_0x188564, "__esModule", {
          "value": true
        });
        _0x188564.ADActionEnum = undefined;
        (_0x188564.ADActionEnum || (_0x188564.ADActionEnum = {})).REGISTER_AFC = "REGISTER_AFC";
      },
      0xda5: (_0x5772ba, _0x541bcc) => {
        'use strict';
  
        var _0xf0fa93;
        Object.defineProperty(_0x541bcc, "__esModule", {
          "value": true
        });
        _0x541bcc.AdPlatformType = undefined;
        (_0xf0fa93 = _0x541bcc.AdPlatformType || (_0x541bcc.AdPlatformType = {}))[_0xf0fa93.en_ADBREAK = 0x0] = "en_ADBREAK";
        _0xf0fa93[_0xf0fa93.en_GAMEDISTRIBUTION = 0x1] = "en_GAMEDISTRIBUTION";
        _0xf0fa93[_0xf0fa93.en_GAMEMONETIZE = 0x2] = "en_GAMEMONETIZE";
        _0xf0fa93[_0xf0fa93.TRANSSION = 0x3] = "TRANSSION";
        _0xf0fa93[_0xf0fa93.en_XIAOMI = 0x4] = "en_XIAOMI";
        _0xf0fa93[_0xf0fa93.Xishanju = 0x5] = "Xishanju";
        _0xf0fa93[_0xf0fa93.en_TCL = 0x6] = "en_TCL";
        _0xf0fa93[_0xf0fa93.FaceBook = 0x7] = "FaceBook";
        _0xf0fa93[_0xf0fa93.CloudView = 0x8] = "CloudView";
        _0xf0fa93[_0xf0fa93.Kfreegame = 0x9] = "Kfreegame";
        _0xf0fa93[_0xf0fa93.Crazygames = 0xa] = "Crazygames";
        _0xf0fa93[_0xf0fa93.Y8 = 0xb] = "Y8";
        _0xf0fa93[_0xf0fa93.NoAd = 0xc] = "NoAd";
        _0xf0fa93[_0xf0fa93.h5games4u = 0xd] = "h5games4u";
        _0xf0fa93[_0xf0fa93.idg = 0xe] = "idg";
        _0xf0fa93[_0xf0fa93.enjoy4fun = 0xf] = "enjoy4fun";
        _0xf0fa93[_0xf0fa93.miapp = 0x10] = "miapp";
        _0xf0fa93[_0xf0fa93.mitest = 0x11] = "mitest";
      },
      0x1b70: (_0x1ec8d7, _0x390dd0) => {
        'use strict';
  
        var _0x141f65;
        Object.defineProperty(_0x390dd0, "__esModule", {
          "value": true
        });
        _0x390dd0.ChannelType = undefined;
        (_0x141f65 = _0x390dd0.ChannelType || (_0x390dd0.ChannelType = {}))[_0x141f65.YAD = 0x0] = "YAD";
        _0x141f65[_0x141f65.YIV = 0x1] = "YIV";
        _0x141f65[_0x141f65.BABYGAMES = 0x2] = "BABYGAMES";
        _0x141f65[_0x141f65.BESTGAMES = 0x3] = "BESTGAMES";
        _0x141f65[_0x141f65.CARGAMES = 0x4] = "CARGAMES";
        _0x141f65[_0x141f65.PUZZLEGAME = 0x5] = "PUZZLEGAME";
      },
      0x139f: (_0x5c55a9, _0x301e91) => {
        'use strict';
  
        var _0x554537;
        Object.defineProperty(_0x301e91, "__esModule", {
          "value": true
        });
        _0x301e91.ConfigType = undefined;
        (_0x554537 = _0x301e91.ConfigType || (_0x301e91.ConfigType = {}))[_0x554537.en_CHANNEL = 0x0] = "en_CHANNEL";
        _0x554537[_0x554537.en_APPNAME = 0x1] = "en_APPNAME";
        _0x554537[_0x554537.en_ADCHANNELID = 0x2] = "en_ADCHANNELID";
        _0x554537[_0x554537.en_CHANNELNAME = 0x3] = "en_CHANNELNAME";
        _0x554537[_0x554537.WEBSITEADDRESS = 0x4] = "WEBSITEADDRESS";
        _0x554537[_0x554537.en_DEBUGOPEN = 0x5] = "en_DEBUGOPEN";
        _0x554537[_0x554537.en_ADPLATFORM = 0x6] = "en_ADPLATFORM";
        _0x554537[_0x554537.en_GAMEDISTRIBUTIONID = 0x7] = "en_GAMEDISTRIBUTIONID";
        _0x554537[_0x554537.en_GAMEMONETIZEID = 0x8] = "en_GAMEMONETIZEID";
        _0x554537[_0x554537.en_TRANSSION = 0x9] = "en_TRANSSION";
        _0x554537[_0x554537.en_ADPUBID = 0xa] = "en_ADPUBID";
        _0x554537[_0x554537.en_BANNERENABLE = 0xb] = "en_BANNERENABLE";
      },
      0x13a3: (_0x1a7e58, _0x4fd09c) => {
        'use strict';
  
        Object.defineProperty(_0x4fd09c, "__esModule", {
          "value": true
        });
        _0x4fd09c.CountryEnum = undefined;
        (_0x4fd09c.CountryEnum || (_0x4fd09c.CountryEnum = {})).US = "US";
      },
      0x4e: function (_0x54fb8e, _0x49f1ff, _0x16d658) {
        'use strict';
  
        var _0x1f58d8 = this && this.__importDefault || function (_0x4be409) {
          return _0x4be409 && _0x4be409.__esModule ? _0x4be409 : {
            "default": _0x4be409
          };
        };
        Object.defineProperty(_0x49f1ff, "__esModule", {
          "value": true
        });
        const _0x21e426 = _0x1f58d8(_0x16d658(0x191e));
        class _0x37deb1 extends _0x21e426["default"] {
          static ["getInstance"]() {
            if (!this.instance) {
              this.instance = new this();
            }
            return this.instance;
          }
        }
        _0x49f1ff["default"] = _0x37deb1;
      },
      0x18d7: (_0x3616d3, _0x451591) => {
        'use strict';
  
        Object.defineProperty(_0x451591, "__esModule", {
          "value": true
        });
        class _0x427bdd {
          static ["init"]() {
            window.addEventListener("message", this.onMessage.bind(this), false);
          }
          static ["register"](_0x28203) {
            this.targets.push(_0x28203);
          }
          static ["onMessage"](_0x623010) {
            const _0x4e5f51 = _0x623010.data || {};
            switch (_0x4e5f51.event) {
              case "showInterstitial":
                switch (_0x4e5f51.data) {
                  case "beforeShowAd":
                    for (const _0x4fd84a of this.targets) if (_0x4fd84a.iConfig) {
                      _0x4fd84a.iConfig.beforeShowAd();
                    }
                    break;
                  case "afterShowAd":
                    for (const _0x4a7730 of this.targets) if (_0x4a7730.iConfig) {
                      _0x4a7730.iConfig.afterShowAd();
                    }
                    break;
                  case "adBreakDone":
                    for (const _0x46b687 of this.targets) if (_0x46b687.iConfig) {
                      _0x46b687.iConfig.adBreakDone(_0x4e5f51.res);
                    }
                }
                break;
              case "inited":
                if (_0x4e5f51.data) {
                  for (const _0x5ac97a of this.targets) {
                    _0x5ac97a.yygGamesOwnSite = true;
                    _0x5ac97a.isOwnSite = true;
                    if (_0x5ac97a.rConfig) {
                      _0x5ac97a.rConfig.beforeReward(_0x4e5f51.data.showAdFn);
                    }
                  }
                }
                break;
              case "showAdFn":
                for (const _0x431e00 of this.targets) {
                  _0x431e00.yygGamesOwnSite = true;
                  _0x431e00.isOwnSite = true;
                  if (_0x431e00.rConfig) {
                    _0x431e00.rConfig.beforeReward(_0x4e5f51.data);
                  }
                }
                break;
              case "showReward":
                switch (_0x4e5f51.data) {
                  case "beforeShowAd":
                    for (const _0xabf165 of this.targets) if (_0xabf165.rConfig) {
                      _0xabf165.rConfig.beforeShowAd();
                    }
                    break;
                  case "afterShowAd":
                    for (const _0x5460f2 of this.targets) if (_0x5460f2.rConfig) {
                      _0x5460f2.rConfig.afterShowAd();
                    }
                    break;
                  case "rewardComplete":
                    for (const _0x31828a of this.targets) if (_0x31828a.rConfig) {
                      _0x31828a.rConfig.rewardComplete();
                    }
                    break;
                  case "rewardDismissed":
                    for (const _0x3f9aaa of this.targets) if (_0x3f9aaa.rConfig) {
                      _0x3f9aaa.rConfig.rewardDismissed();
                    }
                    break;
                  case "adBreakDone":
                    for (const _0x57634a of this.targets) if (_0x57634a.rConfig) {
                      _0x57634a.rConfig.adBreakDone(_0x4e5f51.res);
                    }
                }
            }
          }
        }
        _0x451591["default"] = _0x427bdd;
        _0x427bdd.targets = [];
      },
      0x1052: function (_0x27468f, _0x210934, _0x3e7a8b) {
        'use strict';
  
        var _0x4815d1 = this && this.__importDefault || function (_0x321e29) {
          return _0x321e29 && _0x321e29.__esModule ? _0x321e29 : {
            "default": _0x321e29
          };
        };
        Object.defineProperty(_0x210934, "__esModule", {
          "value": true
        });
        const _0x6c2d0 = _0x4815d1(_0x3e7a8b(0x109));
        const _0x20bab1 = _0x3e7a8b(0x139f);
        const _0x3aeccd = _0x4815d1(_0x3e7a8b(0x4e));
        const _0xa3ffca = _0x4815d1(_0x3e7a8b(0x836));
        const _0x4a8612 = _0x4815d1(_0x3e7a8b(0x1c5c));
        const _0xb338f1 = _0x4815d1(_0x3e7a8b(0x92e));
        const _0x5422ee = _0x4815d1(_0x3e7a8b(0x1680));
        const _0x39b78f = _0x4815d1(_0x3e7a8b(0x1ea1));
        class _0x1366dd {
          constructor() {
            this.showInterstitialCount = 0x0;
            this.interstitialCooldown = 0x0;
            this.isReady = false;
            this.rConfig = {
              "showAdFn": null
            };
            this.iConfig = {
              "showTimes": null
            };
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x1366dd();
            }
            return this._gInstance;
          }
          ["onMessage"](_0x141ffd) {
            const _0x24300f = _0x141ffd.data || {};
            switch (_0x24300f.event) {
              case "showInterstitial":
                switch (_0x24300f.data) {
                  case "beforeShowAd":
                    if (this.options && this.options.beforeShowAd) {
                      this.options.beforeShowAd();
                      this.options.beforeShowAd = null;
                    }
                    break;
                  case "afterShowAd":
                    if (this.options && this.options.afterShowAd) {
                      this.options.afterShowAd();
                      this.options.afterShowAd = null;
                    }
                    break;
                  case "adBreakDone":
                    if (this.options && this.options.adBreakDone) {
                      this.options.adBreakDone(_0x24300f.res);
                      this.options.adBreakDone = null;
                      _0x3aeccd["default"].getInstance().event("adBreakDone", [{
                        "type": "int",
                        "data": _0x24300f.res,
                        "action": this.options ? this.options.action : ''
                      }]);
                    }
                }
                break;
              case "inited":
                if (_0x24300f.data) {
                  window.yygGamesOwnSite = _0x24300f.data.yygGamesOwnSite;
                  this.rConfig.showAdFn = _0x24300f.data.showAdFn;
                }
                break;
              case "showAdFn":
                this.rConfig.showAdFn = _0x24300f.data;
                break;
              case "showReward":
                switch (_0x24300f.data) {
                  case "beforeShowAd":
                    _0x3aeccd["default"].getInstance().event("beforeShowAd", [{
                      "type": "reward",
                      "action": this.rewardOptions ? this.rewardOptions.action : ''
                    }]);
                    if (this.rewardOptions && this.rewardOptions.beforeShowAd) {
                      this.rewardOptions.beforeShowAd();
                      this.rewardOptions.beforeShowAd = null;
                    }
                    break;
                  case "afterShowAd":
                    _0x3aeccd["default"].getInstance().event("afterShowAd", [{
                      "type": "reward",
                      "action": this.rewardOptions ? this.rewardOptions.action : ''
                    }]);
                    if (this.rewardOptions && this.rewardOptions.afterShowAd) {
                      this.rewardOptions.afterShowAd();
                      this.rewardOptions.afterShowAd = null;
                    }
                    break;
                  case "rewardComplete":
                    if (this.rewardOptions && this.rewardOptions.rewardComplete) {
                      _0x3aeccd["default"].getInstance().event("adViewed", [{
                        "type": "reward",
                        "action": this.rewardOptions ? this.rewardOptions.action : ''
                      }]);
                      this.rewardOptions.rewardComplete();
                      this.rewardOptions.rewardComplete = null;
                    }
                    break;
                  case "rewardDismissed":
                    _0x3aeccd["default"].getInstance().event("adDismissed", [{
                      "type": "reward",
                      "action": this.rewardOptions ? this.rewardOptions.action : ''
                    }]);
                    if (this.rewardOptions && this.rewardOptions.rewardDismissed) {
                      this.rewardOptions.rewardDismissed();
                      this.rewardOptions.rewardDismissed = null;
                    }
                    break;
                  case "adBreakDone":
                    if (this.rewardOptions && this.rewardOptions.adBreakDone) {
                      this.rewardOptions.adBreakDone(_0x24300f.res);
                      this.rewardOptions.adBreakDone = null;
                      _0x3aeccd["default"].getInstance().event("adBreakDone", [{
                        "type": "reward",
                        "data": _0x24300f.res,
                        "action": this.rewardOptions ? this.rewardOptions.action : ''
                      }]);
                    }
                }
            }
          }
          ["startup"]() {
            return new Promise(async (_0x2fe42b, _0x49941e) => {
              window.addEventListener("message", this.onMessage.bind(this), false);
              if (window.parent) {
                try {
                  window.parent.postMessage({
                    "event": "inited"
                  }, "*");
                } catch (_0x22aea6) {
                  _0xb338f1["default"].trace("postMessage error", _0x22aea6);
                }
                await new Promise((_0x9f801d, _0x454e5e) => {
                  setTimeout(() => {
                    _0x9f801d();
                  }, 0xc8);
                });
              }
              const _0x4d8b25 = document.createElement("script");
              _0x4d8b25.async = true;
              _0x4d8b25.setAttribute("data-ad-client", "ca-pub-8878716159434368");
              _0x4d8b25.setAttribute("data-ad-channel", _0x5422ee["default"].getInstance().get(_0x20bab1.ConfigType.en_ADCHANNELID));
              _0x4d8b25.setAttribute("data-ad-frequency-hint", "10s");
              try {
                const _0x50b6c2 = location.hostname;
                const _0x2f0a85 = _0x5422ee["default"].getInstance().get(_0x20bab1.ConfigType.en_CHANNELNAME);
                if (_0x50b6c2.indexOf(_0x2f0a85.toLowerCase()) < 0x0 && !_0x5422ee["default"].getInstance().get(_0x20bab1.ConfigType.en_DEBUGOPEN)) {
                  _0x5422ee["default"].getInstance().set(_0x20bab1.ConfigType.en_DEBUGOPEN, true);
                  _0xb338f1["default"].traceWarn("debugOpen original value is False, set to True because the game files are not host on " + _0x2f0a85);
                }
                if (_0x50b6c2.indexOf(_0x2f0a85.toLowerCase()) > -0x1) {
                  _0x5422ee["default"].getInstance().set(_0x20bab1.ConfigType.en_DEBUGOPEN, false);
                }
              } catch (_0x3d54ec) {
                _0xb338f1["default"].trace("get hostname error", _0x3d54ec);
              }
              if (_0x5422ee["default"].getInstance().get(_0x20bab1.ConfigType.en_DEBUGOPEN)) {
                _0x4d8b25.setAttribute("data-adbreak-test", "on");
              }
              _0x4d8b25.onload = () => {
                this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                _0x2fe42b(true);
              };
              _0x4d8b25.onerror = function () {
                _0x49941e();
              };
              _0x4d8b25.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0x4d8b25);
              window.adsbygoogle = window.adsbygoogle || [];
              window.adBreak = window.adConfig = function (_0x2dcc71) {
                window.adsbygoogle.push(_0x2dcc71);
              };
              window.adConfig({
                "preloadAdBreaks": "on",
                "onReady": _0x43ff0b => {
                  this.isReady = true;
                  _0xb338f1["default"].trace("adBreak isRead");
                }
              });
              this.adBreak = function (_0x3b5c8e) {
                window.adsbygoogle.push(_0x3b5c8e);
              };
            });
          }
          ["showInterstitial"](_0x9a007e) {
            if (!_0x9a007e.adBreakDone) {
              _0x9a007e.adBreakDone = function () {};
            }
            if (_0xb338f1["default"].onYYGGamesWebsite() && this.iConfig.showTimes > 0x0) {
              this.options = _0x9a007e;
              try {
                gtag("event", "showIAD", {
                  "event_category": _0x4a8612["default"].hostname(document.referrer),
                  "event_label": _0x6c2d0["default"].tag + "-" + _0x6c2d0["default"].appName
                });
                window.parent.postMessage({
                  "event": "showInterstitial"
                }, "*");
              } catch (_0x19fd7a) {
                console.log("showInterstitial error:", _0x19fd7a);
              }
              return;
            }
            if (this.interstitialCooldown > 0x0) {
              if (_0x9a007e && _0x9a007e.beforeShowAd) {
                _0x9a007e.beforeShowAd();
                _0x9a007e.beforeShowAd = null;
              }
              if (_0x9a007e && _0x9a007e.afterShowAd) {
                _0x9a007e.afterShowAd();
                _0x9a007e.afterShowAd = null;
              }
              if (_0x9a007e && _0x9a007e.adBreakDone) {
                _0x9a007e.adBreakDone({
                  "breakStatus": "less-than-30s-" + this.interstitialCooldown
                });
                _0x9a007e.adBreakDone = null;
              }
              return void _0xb338f1["default"].trace("requesting Interstitial AD\uFF0Cless than 30s, ignored :", this.interstitialCooldown);
            }
            _0xb338f1["default"].trace("requesting Interstitial AD");
            if (this.options && this.options.afterShowAd) {
              return;
            }
            let _0x525273 = "next";
            if (0x0 == this.showInterstitialCount) {
              _0x525273 = "preroll";
              this.showInterstitialCount++;
              _0x3aeccd["default"].getInstance().event("beforeShowAd", [{
                "type": "int"
              }]);
            }
            _0x4a8612["default"].showLoading();
            if (this.isReady) {
              clearTimeout(this.showLoading);
              this.showLoading = setTimeout(() => {
                this.interstitialCooldown = 0x1e;
                if (_0x9a007e && _0x9a007e.beforeShowAd) {
                  _0x9a007e.beforeShowAd();
                  _0x9a007e.beforeShowAd = null;
                  _0x39b78f["default"].getInstance().event("beforeShowAd");
                }
                if (_0x9a007e && _0x9a007e.afterShowAd) {
                  _0x9a007e.afterShowAd();
                  _0x9a007e.afterShowAd = null;
                }
                _0x4a8612["default"].hideLoading();
              }, 0x3e8);
              this.options = _0x9a007e;
              if ("preroll" == _0x525273) {
                if (_0x9a007e && _0x9a007e.beforeShowAd) {
                  _0x9a007e.beforeShowAd();
                  _0x9a007e.beforeShowAd = null;
                  _0x39b78f["default"].getInstance().event("beforeShowAd");
                  try {
                    window.parent.postMessage({
                      "event": "beforeShowInGameAd"
                    }, "*");
                  } catch (_0xd70ef6) {}
                }
                clearTimeout(this.showLoading);
                return void this.adBreak({
                  "type": _0x525273,
                  "name": "game",
                  "adBreakDone": _0x10c3d9 => {
                    this.iConfig.showTimes++;
                    this.interstitialCooldown = 0x1e;
                    _0xb338f1["default"].trace("adBreakDone", _0x10c3d9);
                    _0x4a8612["default"].hideLoading();
                    if (_0x9a007e && _0x9a007e.afterShowAd) {
                      _0x9a007e.afterShowAd();
                      _0x9a007e.afterShowAd = null;
                      _0x39b78f["default"].getInstance().event("afterShowAd");
                    }
                    if (_0x9a007e && _0x9a007e.adBreakDone) {
                      _0x9a007e.adBreakDone(_0x10c3d9);
                      _0x9a007e.adBreakDone = null;
                      _0x3aeccd["default"].getInstance().event("adBreakDone", [{
                        "type": "int",
                        "data": _0x10c3d9,
                        "action": _0x9a007e ? _0x9a007e.action : ''
                      }]);
                    }
                    try {
                      window.parent.postMessage({
                        "event": "afterShowInGameAd"
                      }, "*");
                    } catch (_0x4de70e) {}
                  }
                });
              }
              this.adBreak({
                "type": _0x525273,
                "name": "game",
                "beforeAd": () => {
                  if (_0x9a007e && _0x9a007e.beforeShowAd) {
                    _0x9a007e.beforeShowAd();
                    _0x9a007e.beforeShowAd = null;
                    _0x39b78f["default"].getInstance().event("beforeShowAd");
                  }
                  clearTimeout(this.showLoading);
                  try {
                    window.parent.postMessage({
                      "event": "beforeShowInGameAd"
                    }, "*");
                  } catch (_0x1277a7) {}
                  window.blur();
                },
                "afterAd": () => {
                  _0xb338f1["default"].trace("afterAd");
                  _0x4a8612["default"].hideLoading();
                  if (_0x9a007e && _0x9a007e.afterShowAd) {
                    _0x9a007e.afterShowAd();
                    _0x9a007e.afterShowAd = null;
                  }
                  this.interstitialCooldown = 0x1e;
                  window.focus();
                  _0x39b78f["default"].getInstance().event("afterShowAd");
                  try {
                    window.parent.postMessage({
                      "event": "afterShowInGameAd"
                    }, "*");
                  } catch (_0x1e7915) {}
                },
                "adBreakDone": _0x68cb71 => {
                  _0xb338f1["default"].trace("adBreakDone", _0x68cb71);
                  clearTimeout(this.showLoading);
                  _0x4a8612["default"].hideLoading();
                  if (_0x9a007e && _0x9a007e.beforeShowAd) {
                    _0x9a007e.beforeShowAd();
                    _0x9a007e.beforeShowAd = null;
                    _0x39b78f["default"].getInstance().event("beforeShowAd");
                  }
                  if (_0x9a007e && _0x9a007e.afterShowAd) {
                    _0x9a007e.afterShowAd();
                    _0x9a007e.afterShowAd = null;
                    _0x39b78f["default"].getInstance().event("afterShowAd");
                  }
                  if (_0x9a007e && _0x9a007e.adBreakDone) {
                    _0x3aeccd["default"].getInstance().event("adBreakDone", [{
                      "type": "int",
                      "data": _0x68cb71,
                      "action": _0x9a007e.action
                    }]);
                    _0x9a007e.adBreakDone(_0x68cb71);
                    _0x9a007e.adBreakDone = null;
                  }
                }
              });
              return true;
            }
            _0xa3ffca["default"].getInstance().showInterstitial({
              "beforeAd": () => {
                gtag("event", "showIAD", {
                  "event_category": _0x4a8612["default"].hostname(document.referrer),
                  "event_label": _0x6c2d0["default"].tag + "-" + _0x6c2d0["default"].appName
                });
                _0x4a8612["default"].hideLoading();
                if (_0x9a007e && _0x9a007e.beforeShowAd) {
                  _0x9a007e.beforeShowAd();
                  _0x9a007e.beforeShowAd = null;
                  _0x39b78f["default"].getInstance().event("beforeShowAd");
                  _0x3aeccd["default"].getInstance().event("beforeShowAd", [{
                    "type": "int"
                  }]);
                }
                clearTimeout(this.showLoading);
                window.blur();
                try {
                  window.parent.postMessage({
                    "event": "beforeShowInGameAd"
                  }, "*");
                } catch (_0x1a3834) {}
              },
              "afterAd": () => {
                _0xb338f1["default"].trace("afterAd");
                _0x4a8612["default"].hideLoading();
                if (_0x9a007e && _0x9a007e.afterShowAd) {
                  _0x9a007e.afterShowAd();
                  _0x9a007e.afterShowAd = null;
                }
                if (_0x9a007e && _0x9a007e.adBreakDone) {
                  _0x9a007e.adBreakDone({
                    "breakStatus": "default-ad"
                  });
                  _0x9a007e.adBreakDone = null;
                }
                this.interstitialCooldown = 0x1e;
                window.focus();
                _0x39b78f["default"].getInstance().event("afterShowAd");
                try {
                  window.parent.postMessage({
                    "event": "afterShowInGameAd"
                  }, "*");
                } catch (_0x58e835) {}
              }
            });
          }
          ["canShowReward"]() {
            return _0xb338f1["default"].onYYGGamesWebsite() ? this.rConfig.showAdFn : !this.isReady || !!this.showAdFn;
          }
          ["showReward"](_0x1105c4) {
            if (!this.canShowReward()) {
              return false;
            }
            if (_0xb338f1["default"].onYYGGamesWebsite()) {
              this.rewardOptions = _0x1105c4;
              try {
                gtag("event", "showRAD", {
                  "event_category": _0x4a8612["default"].hostname(document.referrer),
                  "event_label": _0x6c2d0["default"].tag + "-" + _0x6c2d0["default"].appName
                });
                window.parent.postMessage({
                  "event": "showReward"
                }, "*");
              } catch (_0x44cea7) {
                console.log("showReward error:", _0x44cea7);
              }
            } else {
              _0xb338f1["default"].trace("requesting Reward AD");
              gtag("event", "showRAD", {
                "event_category": _0x4a8612["default"].hostname(document.referrer),
                "event_label": _0x6c2d0["default"].tag + "-" + _0x6c2d0["default"].appName
              });
              this.rewardOptions = _0x1105c4;
              if (!this.rewardOptions.adBreakDone) {
                this.rewardOptions.adBreakDone = function () {};
              }
              if (this.isReady) {
                this.showAdFn();
                this.showAdFn = null;
                window.blur();
                return true;
              }
              _0xa3ffca["default"].getInstance().showReward({
                "beforeAd": () => {
                  _0x4a8612["default"].hideLoading();
                  if (_0x1105c4 && _0x1105c4.beforeShowAd) {
                    _0x1105c4.beforeShowAd();
                    _0x1105c4.beforeShowAd = null;
                    _0x39b78f["default"].getInstance().event("beforeShowAd");
                  }
                  _0x3aeccd["default"].getInstance().event("beforeShowAd", [{
                    "type": "reward",
                    "action": _0x1105c4 ? _0x1105c4.action : ''
                  }]);
                  clearTimeout(this.showLoading);
                  window.blur();
                },
                "afterAd": () => {
                  _0xb338f1["default"].trace("afterAd");
                  _0x4a8612["default"].hideLoading();
                  if (_0x1105c4 && _0x1105c4.afterShowAd) {
                    _0x1105c4.afterShowAd();
                    _0x1105c4.afterShowAd = null;
                  }
                  this.interstitialCooldown = 0x1e;
                  window.focus();
                  _0x3aeccd["default"].getInstance().event("afterShowAd", [{
                    "type": "reward",
                    "action": _0x1105c4 ? _0x1105c4.action : ''
                  }]);
                  _0x39b78f["default"].getInstance().event("afterShowAd");
                },
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this),
                "adBreakDone": _0x7ec130 => {
                  if (this.rewardOptions && this.rewardOptions.adBreakDone) {
                    _0x3aeccd["default"].getInstance().event("adBreakDone", [{
                      "type": "reward",
                      "data": _0x7ec130,
                      "action": this.rewardOptions.action
                    }]);
                    this.rewardOptions.adBreakDone(_0x7ec130);
                    this.rewardOptions.adBreakDone = null;
                  }
                }
              });
            }
          }
          ["onBeforeReward"](_0x4f4e57) {
            _0xb338f1["default"].trace("load Reward AD Successful");
            this.showAdFn = _0x4f4e57;
          }
          ["onRewardBeforeBreak"]() {
            _0x39b78f["default"].getInstance().event("beforeShowAd");
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
            _0x3aeccd["default"].getInstance().event("beforeShowAd", [{
              "type": "reward",
              "action": this.rewardOptions ? this.rewardOptions.action : ''
            }]);
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            this.interstitialCooldown = 0x1e;
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
            _0x39b78f["default"].getInstance().event("afterShowAd");
            _0x3aeccd["default"].getInstance().event("afterShowAd", [{
              "type": "reward",
              "action": this.rewardOptions ? this.rewardOptions.action : ''
            }]);
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions && this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
              this.rewardOptions.rewardDismissed = null;
              _0x3aeccd["default"].getInstance().event("adDismissed", [{
                "type": "reward",
                "action": this.rewardOptions.action
              }]);
            }
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions && this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
              this.rewardOptions.rewardComplete = null;
              _0x3aeccd["default"].getInstance().event("adViewed", [{
                "type": "reward",
                "action": this.rewardOptions.action
              }]);
            }
          }
          ["showBanner"](_0x19e1f5) {}
          ["hideBanner"](_0x2161d1) {}
          ["showSplash"](_0x3e0ff2) {}
          ["hideSplash"](_0x591b72) {}
        }
        _0x210934["default"] = _0x1366dd;
      },
      0x1bdf: (_0x37248b, _0x1a4995) => {
        'use strict';
  
        Object.defineProperty(_0x1a4995, "__esModule", {
          "value": true
        });
        class _0x59e78b {
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x59e78b();
            }
            return this._gInstance;
          }
          ["init"]() {
            return new Promise((_0x448b7e, _0x1a199d) => {
              _0x448b7e(true);
            });
          }
          ["showInterstitial"](_0x555cc9) {
            return window.parent.YYGGamesWebsite.showInterstitial(_0x555cc9);
          }
          ["canShowReward"]() {
            return window.parent.YYGGamesWebsite.canShowReward();
          }
          ["showReward"](_0x13bd6b) {
            window.parent.YYGGamesWebsite.showReward(_0x13bd6b);
            return true;
          }
          ["showBanner"](_0x798119) {}
          ["hideBanner"](_0xe677a9) {}
          ["showSplash"](_0x313c8c) {
            return true;
          }
          ["hideSplash"](_0x32aeec) {
            return true;
          }
        }
        _0x1a4995["default"] = _0x59e78b;
      },
      0x1680: (_0xb9f484, _0x408e33) => {
        'use strict';
  
        Object.defineProperty(_0x408e33, "__esModule", {
          "value": true
        });
        class _0x2d9985 {
          constructor() {
            this.configs = new Map();
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x2d9985();
            }
            return this._gInstance;
          }
          ["get"](_0x3e454e) {
            return this.configs.get(_0x3e454e);
          }
          ["set"](_0xa3a191, _0x3812ae) {
            this.configs.set(_0xa3a191, _0x3812ae);
          }
        }
        _0x408e33["default"] = _0x2d9985;
      },
      0x1aad: (_0x1c5683, _0x5620f5, _0x5ad94c) => {
        'use strict';
  
        Object.defineProperty(_0x5620f5, "__esModule", {
          "value": true
        });
        const _0x4c3b8b = _0x5ad94c(0x2235);
        class _0x1da81b extends _0x4c3b8b.Singleton {
          ["init"]() {
            return new Promise((_0x45b68f, _0x57bec0) => {
              const _0x1f1fc1 = this;
              const _0x19f607 = document.createElement("script");
              _0x19f607.onload = function () {
                CrazyGames.SDK.game.sdkGameLoadingStart();
                setTimeout(() => {
                  _0x1f1fc1.onInitialized();
                  CrazyGames.SDK.game.sdkGameLoadingStop();
                  _0x45b68f(true);
                }, 0x3e8);
              };
              _0x19f607.onerror = function () {
                _0x57bec0();
              };
              _0x19f607.src = "https://sdk.crazygames.com/crazygames-sdk-v2.js";
              document.head.appendChild(_0x19f607);
            });
          }
          ["onInitialized"]() {}
          ["showInterstitial"](_0x20f30f) {
            this.options = _0x20f30f;
            if ("function" != typeof _0x20f30f) {
              if (this.options && this.options.beforeShowAd) {
                this.options.beforeShowAd();
                this.options.beforeShowAd = null;
              }
              if (this.options && this.options.afterShowAd) {
                this.options.afterShowAd();
                this.options.afterShowAd = null;
              }
            } else {
              _0x20f30f();
            }
          }
          ["showReward"](_0xabc0d4) {
            CrazyGames.SDK.ad.requestAd("rewarded", new _0x262b05(_0xabc0d4));
          }
          ["canShowReward"]() {
            return true;
          }
        }
        _0x5620f5["default"] = _0x1da81b;
        class _0x262b05 {
          constructor(_0x21e7ae) {
            this.options = _0x21e7ae;
          }
          ["adFinished"]() {
            CrazyGames.SDK.game.gameplayStart();
            if (this.options && this.options.rewardComplete) {
              this.options.rewardComplete();
              this.options.rewardComplete = null;
            }
            if (this.options && this.options.afterShowAd) {
              this.options.afterShowAd();
              this.options.afterShowAd = null;
            }
          }
          ["adError"]() {
            CrazyGames.SDK.game.gameplayStart();
            if (this.options && this.options.beforeShowAd) {
              this.options.beforeShowAd();
              this.options.beforeShowAd = null;
            }
            if (this.options && this.options.afterShowAd) {
              this.options.afterShowAd();
              this.options.afterShowAd = null;
            }
          }
          ["adStarted"]() {
            CrazyGames.SDK.game.gameplayStop();
            if (this.options && this.options.beforeShowAd) {
              this.options.beforeShowAd();
              this.options.beforeShowAd = null;
            }
          }
        }
      },
      0x1ea1: (_0x98e875, _0x8815c3) => {
        'use strict';
  
        Object.defineProperty(_0x8815c3, "__esModule", {
          "value": true
        });
        class _0x1b4c51 {
          constructor() {
            this._events = {};
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x1b4c51();
            }
            return this._gInstance;
          }
          ["hasListener"](_0xda9cfd) {
            return !(!this._events || !this._events[_0xda9cfd]);
          }
          ["event"](_0x2fce4f, _0x5168ff = null) {
            if (!this._events || !this._events[_0x2fce4f]) {
              return false;
            }
            var _0x4e3b87 = this._events[_0x2fce4f];
            if (_0x4e3b87.run) {
              if (_0x4e3b87.once) {
                delete this._events[_0x2fce4f];
              }
              if (null != _0x5168ff) {
                _0x4e3b87.runWith(_0x5168ff);
              } else {
                _0x4e3b87.run();
              }
            } else {
              var _0x411feb = 0x0;
              for (var _0x3ab326 = _0x4e3b87.length; _0x411feb < _0x3ab326; _0x411feb++) {
                var _0xb6a74a = _0x4e3b87[_0x411feb];
                if (_0xb6a74a) {
                  if (null != _0x5168ff) {
                    _0xb6a74a.runWith(_0x5168ff);
                  } else {
                    _0xb6a74a.run();
                  }
                }
                if (!(_0xb6a74a && !_0xb6a74a.once)) {
                  _0x4e3b87.splice(_0x411feb, 0x1);
                  _0x411feb--;
                  _0x3ab326--;
                }
              }
              if (0x0 === _0x4e3b87.length && this._events) {
                delete this._events[_0x2fce4f];
              }
            }
            return true;
          }
          ["on"](_0x557f88, _0x3f32b6, _0x4069cf, _0x308f2d = null) {
            return this._createListener(_0x557f88, _0x3f32b6, _0x4069cf, _0x308f2d, false);
          }
          ["once"](_0x3fb896, _0x29688c, _0x199936, _0x460f3a = null) {
            return this._createListener(_0x3fb896, _0x29688c, _0x199936, _0x460f3a, true);
          }
          ["_createListener"](_0x4f6a40, _0x285686, _0x4bf3e3, _0x4be7f6, _0x3c1834, _0x383ea9 = true) {
            if (_0x383ea9) {
              this.off(_0x4f6a40, _0x285686, _0x4bf3e3, _0x3c1834);
            }
            var _0x16f7ec = _0x39bf1c.create(_0x285686 || this, _0x4bf3e3, _0x4be7f6, _0x3c1834);
            if (!this._events) {
              this._events = {};
            }
            var _0x3bbf61 = this._events;
            if (_0x3bbf61[_0x4f6a40]) {
              if (_0x3bbf61[_0x4f6a40].run) {
                _0x3bbf61[_0x4f6a40] = [_0x3bbf61[_0x4f6a40], _0x16f7ec];
              } else {
                _0x3bbf61[_0x4f6a40].push(_0x16f7ec);
              }
            } else {
              _0x3bbf61[_0x4f6a40] = _0x16f7ec;
            }
            return this;
          }
          ["off"](_0x5dead3, _0xf579bb, _0x2c1dae, _0x1ca7ad = false) {
            if (!this._events || !this._events[_0x5dead3]) {
              return this;
            }
            var _0x4f3866 = this._events[_0x5dead3];
            if (null != _0x4f3866) {
              if (_0x4f3866.run) {
                if (!(_0xf579bb && _0x4f3866.caller !== _0xf579bb || null != _0x2c1dae && _0x4f3866.method !== _0x2c1dae || _0x1ca7ad && !_0x4f3866.once)) {
                  delete this._events[_0x5dead3];
                  _0x4f3866.recover();
                }
              } else {
                var _0x35f0e1 = 0x0;
                var _0x1cca0d = 0x0;
                for (var _0x204d72 = _0x4f3866.length; _0x1cca0d < _0x204d72; _0x1cca0d++) {
                  var _0xf70f09 = _0x4f3866[_0x1cca0d];
                  if (_0xf70f09) {
                    if (!(!_0xf70f09 || _0xf579bb && _0xf70f09.caller !== _0xf579bb || null != _0x2c1dae && _0xf70f09.method !== _0x2c1dae || _0x1ca7ad && !_0xf70f09.once)) {
                      _0x35f0e1++;
                      _0x4f3866[_0x1cca0d] = null;
                      _0xf70f09.recover();
                    }
                  } else {
                    _0x35f0e1++;
                  }
                }
                if (_0x35f0e1 === _0x204d72) {
                  delete this._events[_0x5dead3];
                }
              }
            }
            return this;
          }
          ["offAll"](_0x4dd507 = null) {
            var _0x50fb72 = this._events;
            if (!_0x50fb72) {
              return this;
            }
            if (_0x4dd507) {
              this._recoverHandlers(_0x50fb72[_0x4dd507]);
              delete _0x50fb72[_0x4dd507];
            } else {
              for (var _0x2e7905 in _0x50fb72) this._recoverHandlers(_0x50fb72[_0x2e7905]);
              this._events = null;
            }
            return this;
          }
          ["offAllCaller"](_0x3a80ef) {
            if (_0x3a80ef && this._events) {
              for (var _0x101aca in this._events) this.off(_0x101aca, _0x3a80ef, null);
            }
            return this;
          }
          ["_recoverHandlers"](_0x1e5e02) {
            if (_0x1e5e02) {
              if (_0x1e5e02.run) {
                _0x1e5e02.recover();
              } else {
                for (var _0x4369eb = _0x1e5e02.length - 0x1; _0x4369eb > -0x1; _0x4369eb--) {
                  if (_0x1e5e02[_0x4369eb]) {
                    _0x1e5e02[_0x4369eb].recover();
                    _0x1e5e02[_0x4369eb] = null;
                  }
                }
              }
            }
          }
        }
        _0x8815c3["default"] = _0x1b4c51;
        class _0x30ba1e {
          constructor(_0x454620 = null, _0x25f8e8 = null, _0x125688 = null, _0x3dc373 = false) {
            this.once = false;
            this._id = 0x0;
            this.setTo(_0x454620, _0x25f8e8, _0x125688, _0x3dc373);
          }
          ["setTo"](_0x4c8744, _0x440386, _0x372434, _0x289e43 = false) {
            this._id = _0x30ba1e._gid++;
            this.caller = _0x4c8744;
            this.method = _0x440386;
            this.args = _0x372434;
            this.once = _0x289e43;
            return this;
          }
          ["run"]() {
            if (null == this.method) {
              return null;
            }
            var _0x2943a2 = this._id;
            var _0x32b5c6 = this.method.apply(this.caller, this.args);
            if (this._id === _0x2943a2 && this.once) {
              this.recover();
            }
            return _0x32b5c6;
          }
          ["runWith"](_0x5f1ab3) {
            if (null == this.method) {
              return null;
            }
            var _0x38943c = this._id;
            if (null == _0x5f1ab3) {
              var _0x2018e5 = this.method.apply(this.caller, this.args);
            } else {
              _0x2018e5 = this.args || _0x5f1ab3.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(_0x5f1ab3)) : this.method.apply(this.caller, _0x5f1ab3) : this.method.call(this.caller, _0x5f1ab3);
            }
            if (this._id === _0x38943c && this.once) {
              this.recover();
            }
            return _0x2018e5;
          }
          ["clear"]() {
            this.caller = null;
            this.method = null;
            this.args = null;
            return this;
          }
          ["recover"]() {
            if (this._id > 0x0) {
              this._id = 0x0;
              _0x30ba1e._pool.push(this.clear());
            }
          }
          static ["create"](_0x3bdeda, _0x2b3e03, _0x52ee97 = null, _0x533ff6 = true) {
            return _0x30ba1e._pool.length ? _0x30ba1e._pool.pop().setTo(_0x3bdeda, _0x2b3e03, _0x52ee97, _0x533ff6) : new _0x30ba1e(_0x3bdeda, _0x2b3e03, _0x52ee97, _0x533ff6);
          }
        }
        _0x30ba1e._pool = [];
        _0x30ba1e._gid = 0x1;
        class _0x39bf1c extends _0x30ba1e {
          constructor(_0x15a0c0, _0x586d27, _0x2c9ef3, _0x54ce76) {
            super(_0x15a0c0, _0x586d27, _0x2c9ef3, _0x54ce76);
          }
          ["recover"]() {
            if (this._id > 0x0) {
              this._id = 0x0;
              _0x39bf1c._pool.push(this.clear());
            }
          }
          static ["create"](_0x8e7d92, _0x914972, _0x216ad4 = null, _0x30181f = true) {
            return _0x39bf1c._pool.length ? _0x39bf1c._pool.pop().setTo(_0x8e7d92, _0x914972, _0x216ad4, _0x30181f) : new _0x39bf1c(_0x8e7d92, _0x914972, _0x216ad4, _0x30181f);
          }
        }
        _0x39bf1c._pool = [];
      },
      0x127c: function (_0x20842c, _0x206c97, _0x22825c) {
        'use strict';
  
        var _0x524ab6 = this && this.__importDefault || function (_0x363c4e) {
          return _0x363c4e && _0x363c4e.__esModule ? _0x363c4e : {
            "default": _0x363c4e
          };
        };
        Object.defineProperty(_0x206c97, "__esModule", {
          "value": true
        });
        const _0x14f972 = _0x524ab6(_0x22825c(0x1ea1));
        class _0x5447d8 {
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x5447d8();
            }
            return this._gInstance;
          }
          ["startup"]() {
            return new Promise((_0x1b0b2b, _0x55d7e0) => {
              FBInstant.initializeAsync().then(() => {
                _0x1b0b2b(true);
              });
            });
          }
          ["setLoadingProgress"](_0x42690f) {
            FBInstant.setLoadingProgress(_0x42690f);
            if (_0x42690f >= 0x64) {
              FBInstant.startGameAsync();
            }
          }
          ["showInterstitial"](_0x2dcee9) {
            _0x7a3bf2;
            if (_0x2dcee9 && _0x2dcee9.beforeShowAd) {
              _0x2dcee9.beforeShowAd();
              _0x2dcee9.beforeShowAd = null;
            }
            FBInstant.getInterstitialAdAsync("455647646282917_457053476142334").then(_0x7a3bf2 => _0x7a3bf2.loadAsync()).then(() => _0x7a3bf2.showAsync()).then(() => {
              if (_0x2dcee9 && _0x2dcee9.afterShowAd) {
                _0x2dcee9.afterShowAd();
                _0x2dcee9.afterShowAd = null;
              }
            })["catch"](() => {
              if (_0x2dcee9 && _0x2dcee9.afterShowAd) {
                _0x2dcee9.afterShowAd();
                _0x2dcee9.afterShowAd = null;
              }
            });
            return true;
          }
          ["canShowReward"]() {
            return true;
          }
          ["showReward"](_0x314b08) {
            this.rewardOptions = _0x314b08;
            _0x56ac99;
            this.onRewardBefore();
            FBInstant.getRewardedVideoAsync("455647646282917_457053522808996").then(_0x56ac99 => _0x56ac99.loadAsync()).then(() => _0x56ac99.showAsync()).then(_0x197d2d => {
              console.log("RewardedVideo_showAsync_ok", _0x197d2d);
              this.onRewardComplete();
              this.onRewardAfter();
            })["catch"](_0x597293 => {
              this.onRewardDismissed();
              this.onRewardAfter();
            });
            return true;
          }
          ["onRewardBefore"]() {
            _0x14f972["default"].getInstance().event("beforeShowAd");
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
          }
          ["onRewardAfter"]() {
            window.focus();
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            _0x14f972["default"].getInstance().event("afterShowAd");
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
          ["showBanner"](_0xaa8a01) {}
          ["hideBanner"](_0x1acbba) {}
          ["showSplash"](_0x3fc09d) {}
          ["hideSplash"](_0x47500a) {}
        }
        _0x206c97["default"] = _0x5447d8;
      },
      0x42: function (_0x5e7e15, _0x446abc, _0xc04a65) {
        'use strict';
  
        var _0x2d8138 = this && this.__importDefault || function (_0x437e95) {
          return _0x437e95 && _0x437e95.__esModule ? _0x437e95 : {
            "default": _0x437e95
          };
        };
        Object.defineProperty(_0x446abc, "__esModule", {
          "value": true
        });
        const _0x5f5954 = _0xc04a65(0x24b7);
        const _0x2add8f = _0xc04a65(0x139f);
        const _0x286cac = _0xc04a65(0x2235);
        const _0x23d7ab = _0x2d8138(_0xc04a65(0x4e));
        const _0x56df24 = _0x2d8138(_0xc04a65(0x1c5c));
        const _0x1da41e = _0x2d8138(_0xc04a65(0x92e));
        const _0xfbbb57 = _0x2d8138(_0xc04a65(0x1680));
        const _0x2b463e = _0x2d8138(_0xc04a65(0x1ea1));
        class _0x1a7113 extends _0x286cac.Singleton {
          constructor() {
            super(...arguments);
            this.isReward = false;
            this.inited = false;
            this.isCanShowReward = false;
          }
          ["init"]() {
            return new Promise((_0x32eb56, _0x1d8dbd) => {
              this.startupComplete = function () {
                this.inited = true;
                _0x32eb56(true);
              };
              this.startupError = _0x1d8dbd;
              window.GD_OPTIONS = {
                "gameId": _0xfbbb57["default"].getInstance().get(_0x2add8f.ConfigType.en_GAMEDISTRIBUTIONID),
                "onEvent": this.onEvent.bind(this)
              };
              var _0x3d60b6 = document.createElement("script");
              _0x3d60b6.onload = function () {};
              _0x3d60b6.onerror = function () {
                _0x1d8dbd();
              };
              _0x3d60b6.src = "https://html5.api.gamedistribution.com/main.min.js";
              document.head.appendChild(_0x3d60b6);
            });
          }
          ["onEvent"](_0x31e77d) {
            _0x1da41e["default"].trace(_0x31e77d);
            console.log("event:", _0x31e77d);
            switch (_0x31e77d.name) {
              case "SDK_ERROR":
                if (this.startupError) {
                  this.startupError();
                  this.startupError = null;
                }
                break;
              case "AD_ERROR":
                _0x56df24["default"].hideLoading();
                if ("dismissed" == _0x31e77d.message) {
                  if (this.options && this.options.rewardDismissed) {
                    this.options.rewardDismissed();
                  }
                  this.options.rewardDismissed = null;
                }
                _0x56df24["default"].hideLoading();
                break;
              case "SDK_GAME_START":
                if (this.isReward) {
                  this.isReward = false;
                  this.preloadReward();
                }
                this.onAfterShowAd();
                _0x56df24["default"].hideLoading();
                break;
              case "SDK_GAME_PAUSE":
                this.onBeforeShowAd();
                break;
              case "LOADED":
              case "AD_SDK_FINISHED":
              case "CONTENT_RESUME_REQUESTED":
                break;
              case "SDK_READY":
                if (this.startupComplete) {
                  this.startupComplete(true);
                }
                this.startupComplete = null;
                this.preloadReward();
                break;
              case "AD_SDK_CANCELED":
                break;
              case "AD_CANCELED":
              case "SKIPPED":
                _0x56df24["default"].hideLoading();
                if (this.options && this.options.rewardDismissed) {
                  this.options.rewardDismissed();
                }
                this.options.rewardDismissed = null;
                this.onAfterShowAd();
                break;
              case "SDK_REWARDED_WATCH_COMPLETE":
                if (this.options && this.options.rewardComplete) {
                  this.options.rewardComplete();
                  this.options.rewardComplete = null;
                }
              case "COMPLETE":
              case "ALL_ADS_COMPLETED":
                this.onAfterShowAd();
                _0x56df24["default"].hideLoading();
            }
          }
          ["showInterstitial"](_0xf40e7a) {
            this.options = "function" == typeof _0xf40e7a ? {
              "afterShowAd": _0xf40e7a
            } : _0xf40e7a;
            if (!this.options.beforeShowAd) {
              this.options.beforeShowAd = new Function();
            }
            if (!this.options.afterShowAd) {
              this.options.afterShowAd = new Function();
            }
            _0x56df24["default"].trace("show int ad");
            return this.inited ? (_0x56df24["default"].showLoading(), this.isReward = false, this.onBeforeShowAd(), window.gdsdk.showAd(), true) : (this.onBeforeShowAd(), void this.onAfterShowAd());
          }
          ["onBeforeShowAd"]() {
            window.blur();
            const _0x44535d = document.getElementById("gdsdk__advertisement");
            if (_0x44535d) {
              _0x44535d.style.display = '';
            }
            if (this.options && this.options.beforeShowAd) {
              this.options.beforeShowAd();
              this.options.beforeShowAd = null;
              _0x23d7ab["default"].getInstance().event(_0x5f5954.AdEvent.beforeShowAd, [{}]);
            }
          }
          ["onAfterShowAd"]() {
            window.focus();
            const _0x2b6605 = document.getElementById("gdsdk__advertisement");
            if (_0x2b6605) {
              _0x2b6605.style.display = "none";
            }
            if (this.options && this.options.afterShowAd) {
              this.options.afterShowAd();
              this.options.afterShowAd = null;
              _0x23d7ab["default"].getInstance().event(_0x5f5954.AdEvent.afterShowAd, [{}]);
            }
            _0x2b463e["default"].getInstance().event("afterShowAd");
          }
          ["showReward"](_0x453b44) {
            _0x56df24["default"].showLoading();
            this.options = _0x453b44;
            this.isReward = true;
            this.onBeforeShowAd();
            window.gdsdk.showAd("rewarded");
          }
          ["preloadReward"]() {
            this.isCanShowReward = false;
            const _0x4eeee8 = this;
            setTimeout(function () {
              window.gdsdk.preloadAd("rewarded").then(function (_0x17c4b6) {
                _0x4eeee8.isCanShowReward = true;
              })["catch"](function (_0x4a1c8e) {
                console.log("error", _0x4a1c8e);
                _0x4eeee8.preloadReward();
              });
            }, 0x1f4);
          }
          ["canShowReward"]() {
            return this.isCanShowReward;
          }
        }
        _0x446abc["default"] = _0x1a7113;
      },
      0x2350: function (_0x51ea64, _0x12f267, _0x4b6b89) {
        'use strict';
  
        var _0x205259 = this && this.__importDefault || function (_0x2c2b8e) {
          return _0x2c2b8e && _0x2c2b8e.__esModule ? _0x2c2b8e : {
            "default": _0x2c2b8e
          };
        };
        Object.defineProperty(_0x12f267, "__esModule", {
          "value": true
        });
        const _0x5e24aa = _0x4b6b89(0x139f);
        const _0x33161a = _0x205259(_0x4b6b89(0x1c5c));
        const _0x2a8fa5 = _0x205259(_0x4b6b89(0x92e));
        const _0x2fa5b6 = _0x205259(_0x4b6b89(0x1680));
        class _0x301919 {
          constructor() {
            this.isReward = false;
            this.canReward = false;
            this.isCanShowReward = false;
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x301919();
            }
            return this._gInstance;
          }
          ["init"]() {
            return new Promise((_0x32c72f, _0xd40626) => {
              this.startupComplete = _0x32c72f;
              this.startupError = _0xd40626;
              window.SDK_OPTIONS = {
                "gameId": _0x2fa5b6["default"].getInstance().get(_0x5e24aa.ConfigType.en_GAMEMONETIZEID),
                "onEvent": this.onEvent.bind(this)
              };
              var _0x5be4ea = document.createElement("script");
              _0x5be4ea.onload = function () {};
              _0x5be4ea.onerror = function () {
                _0xd40626();
              };
              _0x5be4ea.src = "https://api.gamemonetize.com/sdk.js";
              document.head.appendChild(_0x5be4ea);
            });
          }
          ["onEvent"](_0x914b16) {
            _0x2a8fa5["default"].trace(_0x914b16);
            switch (_0x914b16.name) {
              case "SDK_ERROR":
                if (this.startupError) {
                  this.startupError();
                  this.startupError = null;
                }
                break;
              case "AD_ERROR":
              case "AD_SDK_FINISHED":
                _0x33161a["default"].hideLoading();
                break;
              case "SDK_GAME_START":
                if (this.options && this.options.rewardComplete) {
                  this.options.rewardComplete();
                  this.options.rewardComplete = null;
                }
                if (this.options && this.options.afterShowAd) {
                  this.options.afterShowAd();
                  this.options.afterShowAd = null;
                }
                _0x33161a["default"].hideLoading();
                break;
              case "SDK_GAME_PAUSE":
                if (this.options && this.options.beforeShowAd) {
                  this.options.beforeShowAd();
                  this.options.beforeShowAd = null;
                }
                if (this.isReward) {
                  this.canReward = true;
                }
                _0x33161a["default"].hideLoading();
                break;
              case "LOADED":
              case "AD_SDK_FINISHED":
              case "CONTENT_RESUME_REQUESTED":
              case "AD_SDK_CANCELED":
              case "AD_CANCELED":
              case "SKIPPED":
              case "COMPLETE":
              default:
                break;
              case "SDK_READY":
                if (this.startupComplete) {
                  this.startupComplete(true);
                }
                this.startupComplete = null;
            }
          }
          ["showInterstitial"](_0x622b7a) {
            this.options = "function" == typeof _0x622b7a ? {
              "afterShowAd": _0x622b7a
            } : _0x622b7a;
            _0x33161a["default"].showLoading();
            this.isReward = false;
            this.onBeforeShowAd();
            window.sdk.showBanner();
            return true;
          }
          ["showReward"](_0x455420) {
            _0x33161a["default"].showLoading();
            this.options = _0x455420;
            this.isReward = true;
            this.canReward = false;
            this.onBeforeShowAd();
            window.sdk.showBanner("rewarded");
          }
          ["onBeforeShowAd"]() {
            if (this.options && this.options.beforeShowAd) {
              this.options.beforeShowAd();
              this.options.beforeShowAd = null;
            }
          }
          ["canShowReward"]() {
            return this.isCanShowReward;
          }
        }
        _0x12f267["default"] = _0x301919;
      },
      0x84b: function (_0x1460c1, _0x73cd1, _0x571177) {
        'use strict';
  
        var _0x54ddae = this && this.__importDefault || function (_0x219ad7) {
          return _0x219ad7 && _0x219ad7.__esModule ? _0x219ad7 : {
            "default": _0x219ad7
          };
        };
        Object.defineProperty(_0x73cd1, "__esModule", {
          "value": true
        });
        const _0x275bd8 = _0x571177(0x2235);
        const _0x1952e8 = _0x54ddae(_0x571177(0x10e7));
        const _0x154546 = _0x54ddae(_0x571177(0x1c5c));
        class _0x2c6926 extends _0x275bd8.Singleton {
          constructor() {
            super(...arguments);
            this.isNewBee = true;
            this.cpid = "8253985222";
          }
          ["init"]() {
            return new Promise((_0x296595, _0x23cae1) => {
              const _0x7c23ff = document.createElement("script");
              _0x7c23ff.onload = () => {
                this.sdk = new window.kfreegame.SDK({
                  "cpid": this.cpid,
                  "sound": false
                });
                _0x1952e8["default"].getInstance().trace("kfreegame init");
                this.sdk.ready(() => {
                  this.sdk.regStatusHandler(function () {
                    return {
                      "coin": 0x2710,
                      "level": 0x2710
                    };
                  });
                  _0x1952e8["default"].getInstance().trace("kfreegame ready :", this.cpid);
                  setInterval(this.query.bind(this), 0x3e8);
                  _0x296595(true);
                });
              };
              _0x7c23ff.onerror = function () {
                _0x23cae1();
              };
              let _0x2bba60 = new URLSearchParams(location.search).get("dev");
              _0x7c23ff.src = _0x2bba60 ? "https://www.kfreegame.com/sdk/v1/sdk.dev.js" : "https://www.kfreegame.com/sdk/v1/sdk.js";
              document.head.appendChild(_0x7c23ff);
              _0x154546["default"].ga("UA-203001982-7");
            });
          }
          ["create"](_0x562873, _0x318251) {
            const _0x13663c = {};
            if ("preroll" != _0x562873) {
              _0x13663c.onBefore = function () {};
              _0x13663c.onAfter = function () {
                if (_0x318251 && _0x318251.afterShowAd) {
                  _0x318251.afterShowAd();
                  _0x318251.afterShowAd = null;
                }
                window.focus();
              };
            }
            _0x13663c.onDone = function () {
              if (_0x318251 && _0x318251.afterShowAd) {
                _0x318251.afterShowAd();
                _0x318251.afterShowAd = null;
              }
              window.focus();
            };
            this.sdk.requestAd(_0x562873, _0x13663c);
          }
          ["showInterstitial"](_0x2b471e) {
            if (_0x2b471e && _0x2b471e.beforeShowAd) {
              _0x2b471e.beforeShowAd();
              _0x2b471e.beforeShowAd = null;
            }
            _0x1952e8["default"].getInstance().trace("showInterstitial");
            let _0x23b527 = this.isNewBee ? "preroll" : "next";
            this.create(_0x23b527, _0x2b471e);
            this.isNewBee = false;
          }
          ["showReward"](_0x207399) {
            if (this.showAdFn) {
              this.rewardOptions = _0x207399;
              this.showAdFn();
              this.showAdFn = null;
              window.blur();
              return true;
            }
          }
          ["query"]() {
            if (this.showAdFn) {
              return;
            }
            const _0x2f5595 = {
              onBeforeReward: _0x2f8b0b => {
                this.showAdFn = _0x2f8b0b;
              },
              onBefore: () => {
                if (this.rewardOptions) {
                  if (this.rewardOptions.beforeShowAd) {
                    this.rewardOptions.beforeShowAd();
                  }
                  this.rewardOptions.beforeShowAd = null;
                }
              },
              "onAfter": () => {
                if (this.rewardOptions) {
                  if (this.rewardOptions.afterShowAd) {
                    this.rewardOptions.afterShowAd();
                  }
                  this.rewardOptions.afterShowAd = null;
                }
              },
              onDismissed: () => {
                if (this.rewardOptions) {
                  if (this.rewardOptions.rewardDismissed) {
                    this.rewardOptions.rewardDismissed();
                  }
                  this.rewardOptions.rewardDismissed = null;
                }
              },
              "onViewed": () => {
                if (this.rewardOptions) {
                  if (this.rewardOptions.rewardComplete) {
                    this.rewardOptions.rewardComplete();
                  }
                  this.rewardOptions.rewardComplete = null;
                }
              },
              "onDone": () => {
                if (this.rewardOptions) {
                  if (this.rewardOptions.afterShowAd) {
                    this.rewardOptions.afterShowAd();
                  }
                  this.rewardOptions.afterShowAd = null;
                }
                window.focus();
              }
            };
            this.sdk.requestAd("reward", _0x2f5595);
          }
          ["canShowReward"]() {
            return !!this.showAdFn;
          }
          ["track"](_0x42a35e, _0x54f44c) {
            this.sdk.track(_0x42a35e);
          }
        }
        _0x73cd1["default"] = _0x2c6926;
      },
      0x292: function (_0x29d15b, _0x34cae5, _0x56d6bf) {
        'use strict';
  
        var _0x2981bb = this && this.__importDefault || function (_0xd4a241) {
          return _0xd4a241 && _0xd4a241.__esModule ? _0xd4a241 : {
            "default": _0xd4a241
          };
        };
        Object.defineProperty(_0x34cae5, "__esModule", {
          "value": true
        });
        const _0x65922c = _0x56d6bf(0x139f);
        const _0x19a4fd = _0x2981bb(_0x56d6bf(0x1c5c));
        const _0x5b4d4a = _0x2981bb(_0x56d6bf(0x92e));
        const _0x373dac = _0x2981bb(_0x56d6bf(0x1680));
        class _0x2a2681 {
          constructor() {
            this.interstitialCooldown = 0x0;
            this.interstitialed = false;
            this.interstitialTimerout = 0x0;
            this.reinterstitialCount = 0x0;
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x2a2681();
            }
            return this._gInstance;
          }
          ["init"]() {
            return new Promise((_0x45ab81, _0x2bc76f) => {
              var _0xd7237 = document.createElement("script");
              _0xd7237.async = true;
              _0x373dac["default"].getInstance().set(_0x65922c.ConfigType.en_ADPUBID, "ca-pub-6228750284884003");
              _0x373dac["default"].getInstance().set(_0x65922c.ConfigType.en_ADCHANNELID, "2246042049");
              _0xd7237.setAttribute("data-ad-client", _0x373dac["default"].getInstance().get(_0x65922c.ConfigType.en_ADPUBID));
              _0xd7237.setAttribute("data-ad-channel", _0x373dac["default"].getInstance().get(_0x65922c.ConfigType.en_ADCHANNELID));
              _0xd7237.setAttribute("data-ad-frequency-hint", "10s");
              try {
                const _0x1c9cd6 = location.hostname;
                if (_0x1c9cd6.indexOf("yof.com".toLowerCase()) < 0x0 && !_0x373dac["default"].getInstance().get(_0x65922c.ConfigType.en_DEBUGOPEN)) {
                  _0x373dac["default"].getInstance().set(_0x65922c.ConfigType.en_DEBUGOPEN, true);
                  _0x5b4d4a["default"].traceWarn("debugOpen original value is False, set to True because the game files are not host on yof.com");
                }
              } catch (_0x563ee0) {
                _0x5b4d4a["default"].trace("get hostname error", _0x563ee0);
              }
              _0xd7237.onload = () => {
                this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                this.showSplash();
                this.showBanner();
                _0x45ab81(true);
              };
              _0xd7237.onerror = function () {
                _0x2bc76f();
              };
              _0xd7237.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0xd7237);
              window.adsbygoogle = window.adsbygoogle || [];
              window.adBreak = window.adConfig = function (_0x51aa63) {
                window.adsbygoogle.push(_0x51aa63);
              };
              window.adConfig({
                "preloadAdBreaks": "on"
              });
              this.adBreak = function (_0x5ce3ee) {
                window.adsbygoogle.push(_0x5ce3ee);
              };
              _0x19a4fd["default"].ga("UA-203001982-2");
            });
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["showBanner"](_0x531ada) {
            this.hideBanner();
            const _0x335874 = document.body;
            const _0x46a616 = document.createElement("ins");
            _0x335874.appendChild(_0x46a616);
            _0x46a616.className = "adsbygoogle";
            _0x46a616.id = "adsbygoogle_banner";
            _0x46a616.style.display = "block";
            _0x46a616.style.width = "320px";
            _0x46a616.style.height = "50px";
            _0x46a616.style.position = "absolute";
            _0x46a616.style.left = (window.innerWidth - 0x140) / 0x2 + '';
            if (_0x531ada && _0x531ada.top) {
              if ("number" == typeof _0x531ada.top) {
                _0x46a616.style.top = _0x531ada.top + "px";
              } else {
                _0x46a616.style.top = _0x531ada.top;
              }
            } else {
              _0x46a616.style.bottom = "0";
            }
            _0x46a616.setAttribute("data-ad-client", _0x373dac["default"].getInstance().get(_0x65922c.ConfigType.en_ADPUBID));
            _0x46a616.setAttribute("data-ad-slot", "4704497076");
            _0x46a616.setAttribute("data-full-width-responsive", "true");
            if (_0x373dac["default"].getInstance().get(_0x65922c.ConfigType.en_DEBUGOPEN)) {
              _0x46a616.style.background = "#FFFFFF";
              _0x46a616.setAttribute("data-adtest", "on");
            }
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
          ["hideBanner"](_0x35853f) {
            const _0xb030f7 = document.getElementById("adsbygoogle_banner");
            if (_0xb030f7) {
              _0xb030f7.remove();
            }
          }
          ["showSplash"](_0x275414) {
            clearTimeout(this.interstitialTimerout);
            if (!(this.reinterstitialCount > 0x5)) {
              this.reinterstitialCount++;
              this.interstitialTimerout = setTimeout(() => {
                if (!this.interstitialed) {
                  this.showSplash();
                }
              }, 0x3e8);
              this.adBreak({
                "type": "next",
                "name": "game",
                "beforeAd": () => {
                  window.blur();
                  clearTimeout(this.interstitialTimerout);
                  this.interstitialed = true;
                },
                "afterAd": () => {
                  window.focus();
                }
              });
            }
          }
          ["hideSplash"](_0x85685c) {}
          ["showInterstitial"](_0x4a05cd) {
            this.interstitialed = true;
            if (_0x4a05cd) {
              if (_0x4a05cd.beforeShowAd) {
                _0x4a05cd.beforeShowAd();
              }
              if (_0x4a05cd.afterShowAd) {
                _0x4a05cd.afterShowAd();
              }
              _0x4a05cd.beforeShowAd = null;
              _0x4a05cd.afterShowAd = null;
            }
            return true;
          }
          ["canShowReward"]() {
            return !!this.showAdFn;
          }
          ["showReward"](_0x508f28) {
            return !!this.canShowReward() && (_0x5b4d4a["default"].trace("requesting Reward AD"), this.rewardOptions = _0x508f28, this.showAdFn(), this.showAdFn = null, true);
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onBeforeReward"](_0x442842) {
            _0x5b4d4a["default"].trace("load Reward AD Successful");
            this.showAdFn = _0x442842;
          }
          ["onRewardBeforeBreak"]() {
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
        }
        _0x34cae5["default"] = _0x2a2681;
      },
      0xccb: function (_0x349e6b, _0x73d83a, _0x38962b) {
        'use strict';
  
        var _0x192499 = this && this.__importDefault || function (_0x207b5a) {
          return _0x207b5a && _0x207b5a.__esModule ? _0x207b5a : {
            "default": _0x207b5a
          };
        };
        Object.defineProperty(_0x73d83a, "__esModule", {
          "value": true
        });
        const _0xc3a9d8 = _0x38962b(0x139f);
        const _0x18c5a8 = _0x192499(_0x38962b(0x4e));
        const _0x1c4730 = _0x38962b(0x2235);
        const _0x2c4645 = _0x192499(_0x38962b(0x1c5c));
        const _0x1ce668 = _0x192499(_0x38962b(0x92e));
        const _0x476e8c = _0x192499(_0x38962b(0x1680));
        class _0x5c003f extends _0x1c4730.Singleton {
          constructor() {
            super(...arguments);
            this.interstitialCooldown = 0x5;
            this.rConfig = {
              "showAdFn": null
            };
            this.iConfig = {
              "showTimes": 0x0,
              "takeTurns": false
            };
          }
          ["onMessage"](_0x5d82d8) {
            const _0x56e492 = _0x5d82d8.data || {};
            switch (_0x56e492.event) {
              case "showInterstitial":
                switch (_0x56e492.data) {
                  case "beforeShowAd":
                    if (this.options && this.options.beforeShowAd) {
                      this.iConfig.showTimes++;
                      this.options.beforeShowAd();
                      this.options.beforeShowAd = null;
                      if (window.adFeedback) {
                        window.adFeedback.onAdShow();
                      }
                    }
                    break;
                  case "afterShowAd":
                    if (this.options && this.options.afterShowAd) {
                      this.options.afterShowAd();
                      this.options.afterShowAd = null;
                      if (window.adFeedback) {
                        window.adFeedback.onAdDismiss();
                      }
                    }
                }
                break;
              case "inited":
                if (_0x56e492.data) {
                  window.yygGamesOwnSite = _0x56e492.data.yygGamesOwnSite;
                  this.rConfig.showAdFn = _0x56e492.data.showAdFn;
                }
                break;
              case "showAdFn":
                this.rConfig.showAdFn = _0x56e492.data;
                break;
              case "showReward":
                switch (_0x56e492.data) {
                  case "beforeShowAd":
                    if (this.rewardOptions && this.rewardOptions.beforeShowAd) {
                      this.rewardOptions.beforeShowAd();
                      this.rewardOptions.beforeShowAd = null;
                      if (window.adFeedback) {
                        window.adFeedback.onAdShow();
                      }
                    }
                    break;
                  case "afterShowAd":
                    if (this.rewardOptions && this.rewardOptions.afterShowAd) {
                      this.rewardOptions.afterShowAd();
                      this.rewardOptions.afterShowAd = null;
                      if (window.adFeedback) {
                        window.adFeedback.onAdDismiss();
                      }
                    }
                    break;
                  case "rewardComplete":
                    if (this.rewardOptions && this.rewardOptions.rewardComplete) {
                      this.rewardOptions.rewardComplete();
                      this.rewardOptions.rewardComplete = null;
                    }
                    break;
                  case "rewardDismissed":
                    if (this.rewardOptions && this.rewardOptions.rewardDismissed) {
                      this.rewardOptions.rewardDismissed();
                      this.rewardOptions.rewardDismissed = null;
                    }
                }
            }
          }
          ["init"]() {
            return new Promise(async (_0x35a742, _0x2e9a45) => {
              window.addEventListener("message", this.onMessage.bind(this), false);
              if (window.parent) {
                try {
                  window.parent.postMessage({
                    "event": "inited"
                  }, "*");
                } catch (_0x22d478) {
                  _0x1ce668["default"].trace("postMessage error", _0x22d478);
                }
                await new Promise((_0x5a9100, _0x2232f5) => {
                  setTimeout(() => {
                    _0x5a9100();
                  }, 0xc8);
                });
              }
              const _0x2af0f9 = document.createElement("script");
              _0x2af0f9.async = true;
              _0x2af0f9.setAttribute("data-ad-client", _0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_ADPUBID));
              _0x2af0f9.setAttribute("data-ad-channel", _0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_ADCHANNELID));
              _0x2af0f9.setAttribute("data-ad-frequency-hint", "10s");
              try {
                const _0x1778b2 = location.hostname;
                this.iConfig.takeTurns = true;
                if (!(location.href.indexOf("xm.yyggames.com") > -0x1)) {
                  if (_0x1778b2.indexOf("yof.com".toLowerCase()) < 0x0 && !_0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_DEBUGOPEN)) {
                    _0x476e8c["default"].getInstance().set(_0xc3a9d8.ConfigType.en_DEBUGOPEN, true);
                    _0x1ce668["default"].traceWarn("debugOpen original value is False, set to True because the game files are not host on yof.com");
                  }
                }
              } catch (_0x1180a4) {
                _0x1ce668["default"].trace("get hostname error", _0x1180a4);
              }
              if (_0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_DEBUGOPEN)) {
                _0x2af0f9.setAttribute("data-adbreak-test", "on");
              }
              _0x2af0f9.onload = () => {
                this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                _0x35a742(true);
              };
              _0x2af0f9.onerror = function () {
                _0x2e9a45();
              };
              _0x2af0f9.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0x2af0f9);
              window.adsbygoogle = window.adsbygoogle || [];
              window.adBreak = window.adConfig = function (_0x51113d) {
                window.adsbygoogle.push(_0x51113d);
              };
              window.adConfig({
                "preloadAdBreaks": "on"
              });
              this.adBreak = function (_0x365f8b) {
                window.adsbygoogle.push(_0x365f8b);
              };
              _0x2c4645["default"].ga("UA-203001982-1");
              _0x2c4645["default"].ga("UA-120241896-23");
              _0x2c4645["default"].ga("UA-120241896-20");
            });
          }
          ["showInterstitial"](_0x2245bd) {
            try {
              if ((new URLSearchParams(location.search).get("platform") || '').indexOf("danfa") > -0x1) {
                if (_0x2245bd && _0x2245bd.beforeShowAd) {
                  _0x2245bd.beforeShowAd();
                  _0x2245bd.beforeShowAd = null;
                }
                return void (_0x2245bd && _0x2245bd.afterShowAd && (_0x2245bd.afterShowAd(), _0x2245bd.afterShowAd = null));
              }
            } catch (_0x1262d2) {}
            if ("function" == typeof _0x2245bd) {
              _0x2245bd = {
                "beforeShowAd": new Function(),
                "afterShowAd": _0x2245bd
              };
            }
            this.options = _0x2245bd;
            if (_0x1ce668["default"].onYYGGamesWebsite() && this.iConfig.showTimes > 0x0) {
              if (!this.iConfig.takeTurns) {
                try {
                  window.parent.postMessage({
                    "event": "showInterstitial"
                  }, "*");
                } catch (_0x1ee636) {
                  console.log("showInterstitial error:", _0x1ee636);
                }
                return;
              }
              _0x1ce668["default"].trace("this.iConfig.showTimes", this.iConfig.showTimes);
              if (this.iConfig.showTimes % 0x2 != 0x0) {
                try {
                  window.parent.postMessage({
                    "event": "showInterstitial"
                  }, "*");
                } catch (_0x3789a8) {
                  console.log("showInterstitial error:", _0x3789a8);
                }
                return;
              }
            }
            if (this.interstitialCooldown > 0x0) {
              if (_0x2245bd && _0x2245bd.beforeShowAd) {
                _0x2245bd.beforeShowAd();
                _0x2245bd.beforeShowAd = null;
              }
              if (_0x2245bd && _0x2245bd.afterShowAd) {
                _0x2245bd.afterShowAd();
                _0x2245bd.afterShowAd = null;
              }
              return void _0x1ce668["default"].trace("requesting Interstitial AD\uFF0Cless than 30s, ignored :", this.interstitialCooldown);
            }
            _0x1ce668["default"].trace("requesting Interstitial AD");
            let _0x51e82c = "next";
            if (0x0 == this.iConfig.showTimes) {
              _0x51e82c = "preroll";
            }
            if (_0x2245bd && _0x2245bd.beforeShowAd) {
              _0x2245bd.beforeShowAd();
              _0x2245bd.beforeShowAd = null;
              _0x18c5a8["default"].getInstance().event("beforeShowAd");
            }
            return "preroll" == _0x51e82c ? (window.adFeedback && window.adFeedback.onAdShow(), void this.adBreak({
              "type": _0x51e82c,
              "name": "game",
              "adBreakDone": _0x3abe43 => {
                this.iConfig.showTimes++;
                this.interstitialCooldown = 0xf;
                _0x1ce668["default"].trace("adBreakDone", _0x3abe43);
                if (_0x2245bd && _0x2245bd.afterShowAd) {
                  _0x2245bd.afterShowAd();
                  _0x2245bd.afterShowAd = null;
                  _0x18c5a8["default"].getInstance().event("afterShowAd");
                }
                try {
                  if (window.adFeedback) {
                    window.adFeedback.onAdDismiss();
                  }
                } catch (_0x37aefa) {}
              }
            })) : (this.adBreak({
              "type": _0x51e82c,
              "name": "game",
              "beforeAd": () => {
                window.blur();
                if (window.adFeedback) {
                  window.adFeedback.onAdShow();
                }
              },
              "afterAd": () => {
                _0x2c4645["default"].hideLoading();
                if (_0x2245bd && _0x2245bd.afterShowAd) {
                  _0x2245bd.afterShowAd();
                  _0x2245bd.afterShowAd = null;
                }
                this.interstitialCooldown = 0xf;
                window.focus();
                _0x18c5a8["default"].getInstance().event("afterShowAd");
              },
              "adBreakDone": _0x4ce16c => {
                this.iConfig.showTimes++;
                _0x1ce668["default"].trace("adBreakDone", _0x4ce16c);
                _0x2c4645["default"].hideLoading();
                if (_0x2245bd && _0x2245bd.afterShowAd) {
                  _0x2245bd.afterShowAd();
                  _0x2245bd.afterShowAd = null;
                  _0x18c5a8["default"].getInstance().event("afterShowAd");
                }
                if (window.adFeedback) {
                  window.adFeedback.onAdDismiss();
                }
              }
            }), true);
          }
          ["canShowReward"]() {
            return _0x1ce668["default"].onYYGGamesWebsite() ? this.rConfig.showAdFn : !!this.showAdFn;
          }
          ["showReward"](_0x3d6a30) {
            if (!this.canShowReward()) {
              return false;
            }
            if (!_0x1ce668["default"].onYYGGamesWebsite()) {
              _0x1ce668["default"].trace("requesting Reward AD");
              this.rewardOptions = _0x3d6a30;
              this.showAdFn();
              this.showAdFn = null;
              window.blur();
              return true;
            }
            this.rewardOptions = _0x3d6a30;
            try {
              window.parent.postMessage({
                "event": "showReward"
              }, "*");
            } catch (_0x15cf59) {
              console.log("showReward error:", _0x15cf59);
            }
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onBeforeReward"](_0xfe53c9) {
            _0x1ce668["default"].trace("load Reward AD Successful");
            this.showAdFn = _0xfe53c9;
          }
          ["onRewardBeforeBreak"]() {
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
            if (window.adFeedback) {
              window.adFeedback.onAdShow();
            }
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
            if (window.adFeedback) {
              window.adFeedback.onAdDismiss();
            }
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
          ["showBanner"](_0x28671d) {}
          ["hideBanner"](_0x315fa0) {}
          ["showSplash"](_0x306bae) {
            const _0xbd47e3 = _0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_DEBUGOPEN);
            if (!_0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_BANNERENABLE) && !_0xbd47e3) {
              return;
            }
            this.hideSplash();
            const _0x7c0800 = document.body;
            const _0xf82d41 = document.createElement("ins");
            _0x7c0800.appendChild(_0xf82d41);
            _0xf82d41.className = "adsbygoogle";
            _0xf82d41.id = "adsbygoogle_splash";
            _0xf82d41.style.display = "block";
            if (_0x306bae && _0x306bae.top) {
              if ("number" == typeof _0x306bae.top) {
                _0xf82d41.style.marginTop = _0x306bae.top + "px";
              } else {
                _0xf82d41.style.marginTop = _0x306bae.top;
              }
            } else {
              _0xf82d41.style.marginTop = "50%";
            }
            _0xf82d41.style.marginTop = _0x306bae && _0x306bae.top ? _0x306bae.top + "px" : "50%";
            _0xf82d41.setAttribute("data-ad-client", "ca-pub-5907420070029753");
            _0xf82d41.setAttribute("data-ad-slot", "4555556324");
            _0xf82d41.setAttribute("data-ad-format", "auto");
            _0xf82d41.setAttribute("data-full-width-responsive", "true");
            if (_0x476e8c["default"].getInstance().get(_0xc3a9d8.ConfigType.en_DEBUGOPEN)) {
              _0xf82d41.setAttribute("data-adtest", "on");
            }
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            return true;
          }
          ["hideSplash"](_0x4bb366) {
            const _0x26062a = document.getElementById("adsbygoogle_splash");
            if (_0x26062a) {
              _0x26062a.remove();
            }
            return true;
          }
        }
        _0x73d83a["default"] = _0x5c003f;
      },
      0x1554: function (_0x5baba7, _0x33a40d, _0x2960bd) {
        'use strict';
  
        var _0x138b66 = this && this.__importDefault || function (_0x5f0452) {
          return _0x5f0452 && _0x5f0452.__esModule ? _0x5f0452 : {
            "default": _0x5f0452
          };
        };
        Object.defineProperty(_0x33a40d, "__esModule", {
          "value": true
        });
        const _0x362b12 = _0x138b66(_0x2960bd(0x92e));
        class _0x270aa1 {
          constructor() {
            this.showInterstitialCount = 0x0;
            this.interstitialTimerout = 0x0;
            this.interstitialCooldown = 0x0;
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x270aa1();
            }
            return this._gInstance;
          }
          ["init"]() {
            return new Promise((_0x391b2f, _0x3b4b90) => {
              var _0x1bbcca = document.createElement("script");
              _0x1bbcca.async = false;
              _0x1bbcca.onload = () => {
                _0x362b12["default"].trace("\u5F00\u59CB\u767B\u5F55");
                vigoo.Login(_0x44f249 => {
                  _0x362b12["default"].trace("\u767B\u5F55\u6210\u529F", _0x44f249);
                  _0x391b2f(true);
                });
              };
              _0x1bbcca.onerror = function () {
                _0x3b4b90();
              };
              _0x1bbcca.src = "https://sdk.vigoo.com/vigoo/sdk.js";
              document.head.appendChild(_0x1bbcca);
              window.dataLayer = window.dataLayer || [];
              window.gtag = function (_0x190c6a, _0x471bf5) {
                window.dataLayer.push(arguments);
              };
              window.gtag("js", new Date());
              window.gtag("config", "UA-203001982-3");
              var _0x25cb77 = document.createElement("script");
              _0x25cb77.async = true;
              _0x25cb77.src = "https://www.googletagmanager.com/gtag/js?id=UA-203001982-3";
              document.head.appendChild(_0x25cb77);
            });
          }
          ["showInterstitial"](_0x3110c1) {
            if (_0x3110c1 && _0x3110c1.beforeShowAd) {
              _0x3110c1.beforeShowAd();
              _0x3110c1.beforeShowAd = null;
            }
            _0x362b12["default"].trace("requesting Interstitial AD");
            vigoo.ShowScreenVideo("\u4E0B\u4E00\u5173", _0x3f83e8 => {
              _0x3f83e8.type;
              console.log("ShowScreenVideo", _0x3f83e8);
              if (_0x3110c1 && _0x3110c1.afterShowAd) {
                _0x3110c1.afterShowAd();
                _0x3110c1.afterShowAd = null;
              }
            });
            return true;
          }
          ["canShowReward"]() {
            return true;
          }
          ["showReward"](_0x252928) {
            return !!this.canShowReward() && (_0x362b12["default"].trace("requesting Reward AD"), _0x252928 && _0x252928.beforeShowAd && (_0x252928.beforeShowAd(), _0x252928.beforeShowAd = null), window.blur(), vigoo.ShowExcitationVideoAdv(_0x2b486b => {
              if (0x3 == _0x2b486b.type) {
                if (_0x252928 && _0x252928.rewardComplete) {
                  _0x252928.rewardComplete();
                  _0x252928.rewardComplete = null;
                }
              } else if (_0x252928 && _0x252928.rewardComplete) {
                _0x252928.rewardDismissed();
                _0x252928.rewardDismissed = null;
              }
              if (_0x252928 && _0x252928.afterShowAd) {
                _0x252928.afterShowAd();
                _0x252928.afterShowAd = null;
              }
            }), true);
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onBeforeReward"](_0xce1f9d) {
            _0x362b12["default"].trace("load Reward AD Successful");
            this.showAdFn = _0xce1f9d;
          }
          ["onRewardBeforeBreak"]() {
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
          ["showBanner"](_0x5bc777) {}
          ["hideBanner"](_0x41f8b6) {}
          ["showSplash"](_0x11de5a) {}
          ["hideSplash"](_0x256502) {}
        }
        _0x33a40d["default"] = _0x270aa1;
      },
      0x1fe9: function (_0x30b32a, _0x275f5e, _0x1fdefa) {
        'use strict';
  
        var _0x889fc3 = this && this.__importDefault || function (_0x1e4d39) {
          return _0x1e4d39 && _0x1e4d39.__esModule ? _0x1e4d39 : {
            "default": _0x1e4d39
          };
        };
        Object.defineProperty(_0x275f5e, "__esModule", {
          "value": true
        });
        const _0x5e230a = _0x889fc3(_0x1fdefa(0x109));
        const _0x32176f = _0x889fc3(_0x1fdefa(0x1bbf));
        const _0x9765e7 = _0x1fdefa(0x24b7);
        const _0x54a2b0 = _0x1fdefa(0x2235);
        const _0x5838d7 = _0x889fc3(_0x1fdefa(0x1c5c));
        const _0x1e9146 = _0x889fc3(_0x1fdefa(0x92e));
        class _0x2a4f08 extends _0x54a2b0.Singleton {
          constructor() {
            super(...arguments);
            this.inited = false;
            this.iConfig = new _0x32176f["default"](null, _0x9765e7.AD.int, 0x1);
          }
          ["init"]() {
            return this.inited ? Promise.resolve() : (this.inited = true, new Promise(async (_0x121270, _0x2a0bd5) => {
              const _0x3c62eb = document.createElement("script");
              _0x3c62eb.async = true;
              _0x3c62eb.setAttribute("data-gameid", _0x5e230a["default"].dataid);
              if (!(_0x5e230a["default"].dataid && 0x0 != _0x5e230a["default"].dataid.length)) {
                _0x5838d7["default"].trace("enjoy4fun id error", "id:", _0x5e230a["default"].dataid);
              }
              _0x3c62eb.onload = () => {
                GameBridgeSDK.gameLoadingStart();
                GameBridgeSDK.init().then(() => {
                  this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                  _0x121270(true);
                });
              };
              _0x3c62eb.id = "gamebridge-sdk";
              _0x3c62eb.onerror = function () {
                _0x2a0bd5();
              };
              _0x3c62eb.src = "https://sdk.enjoy4fun.com/v1/gamebridge-sdk.js";
              document.head.appendChild(_0x3c62eb);
            }));
          }
          ["showInterstitial"](_0x16d8fa) {
            if ("function" == typeof _0x16d8fa) {
              _0x16d8fa = {
                "afterShowAd": _0x16d8fa
              };
            }
            _0x5838d7["default"].showLoading();
            GameBridgeSDK.commercialBreak(() => {
              _0x5838d7["default"].hideLoading();
              if (_0x16d8fa.beforeShowAd) {
                _0x16d8fa.beforeShowAd();
              }
            }).then(_0x301286 => {
              _0x5838d7["default"].trace("commercialBreak", _0x301286);
              if (_0x16d8fa.adBreakDone) {
                _0x16d8fa.adBreakDone();
              }
              if (_0x16d8fa.afterShowAd) {
                _0x16d8fa.afterShowAd();
              }
            });
            return true;
          }
          ["canShowReward"]() {
            return true;
          }
          ["showReward"](_0x3eea33, _0x48a83b, _0x59f354) {
            if ("function" == typeof _0x3eea33) {
              _0x3eea33 = {
                "beforeShowAd": new Function(),
                "adBreakDone": new Function(),
                "afterShowAd": new Function(),
                "rewardDismissed": new Function(),
                "rewardComplete": _0x3eea33
              };
            }
            _0x1e9146["default"].trace("requesting Reward AD");
            if (_0x3eea33.beforeShowAd) {
              _0x3eea33.beforeShowAd();
            }
            GameBridgeSDK.rewardedBreak().then(_0x1412db => {
              _0x5838d7["default"].trace("rewardedBreak", _0x1412db);
              if (_0x1412db) {
                if (_0x3eea33.rewardComplete) {
                  _0x3eea33.rewardComplete();
                }
              } else if (_0x3eea33.rewardDismissed) {
                _0x3eea33.rewardDismissed();
              }
              if (_0x3eea33.adBreakDone) {
                _0x3eea33.adBreakDone();
              }
              if (_0x3eea33.afterShowAd) {
                _0x3eea33.afterShowAd();
              }
            });
            return true;
          }
          ["onUpdate"]() {}
          ["showBanner"](_0x44196c) {}
          ["hideBanner"](_0x27099d) {}
          ["showSplash"](_0x1665fa) {}
          ["hideSplash"](_0xbfc7e2) {}
        }
        _0x275f5e["default"] = _0x2a4f08;
      },
      0x5f7: function (_0x22e9b5, _0x3ae0cd, _0x9ac2f3) {
        'use strict';
  
        var _0x34b4d4 = this && this.__importDefault || function (_0x1e8274) {
          return _0x1e8274 && _0x1e8274.__esModule ? _0x1e8274 : {
            "default": _0x1e8274
          };
        };
        Object.defineProperty(_0x3ae0cd, "__esModule", {
          "value": true
        });
        const _0x350168 = _0x9ac2f3(0x139f);
        const _0x37cbc7 = _0x9ac2f3(0x2235);
        const _0x5cb3b6 = _0x34b4d4(_0x9ac2f3(0x836));
        const _0x1fa452 = _0x34b4d4(_0x9ac2f3(0x1c5c));
        const _0x55f8d6 = _0x34b4d4(_0x9ac2f3(0x92e));
        const _0x5f1099 = _0x34b4d4(_0x9ac2f3(0x1680));
        const _0x3e2082 = _0x34b4d4(_0x9ac2f3(0x1ea1));
        class _0x2973e5 extends _0x37cbc7.Singleton {
          constructor() {
            super(...arguments);
            this.showInterstitialCount = 0x0;
            this.interstitialCooldown = 0x0;
            this.isReady = false;
            this.rConfig = {
              "showAdFn": null
            };
            this.iConfig = {
              "showTimes": null
            };
          }
          ["onMessage"](_0x3a7a8c) {
            const _0x2010eb = _0x3a7a8c.data || {};
            switch (_0x2010eb.event) {
              case "showInterstitial":
                switch (_0x2010eb.data) {
                  case "beforeShowAd":
                    if (this.options && this.options.beforeShowAd) {
                      this.options.beforeShowAd();
                      this.options.beforeShowAd = null;
                    }
                    break;
                  case "afterShowAd":
                    if (this.options && this.options.afterShowAd) {
                      this.options.afterShowAd();
                      this.options.afterShowAd = null;
                    }
                }
                break;
              case "inited":
                if (_0x2010eb.data) {
                  window.yygGamesOwnSite = _0x2010eb.data.yygGamesOwnSite;
                  this.rConfig.showAdFn = _0x2010eb.data.showAdFn;
                }
                break;
              case "showAdFn":
                this.rConfig.showAdFn = _0x2010eb.data;
                break;
              case "showReward":
                switch (_0x2010eb.data) {
                  case "beforeShowAd":
                    if (this.rewardOptions && this.rewardOptions.beforeShowAd) {
                      this.rewardOptions.beforeShowAd();
                      this.rewardOptions.beforeShowAd = null;
                    }
                    break;
                  case "afterShowAd":
                    if (this.rewardOptions && this.rewardOptions.afterShowAd) {
                      this.rewardOptions.afterShowAd();
                      this.rewardOptions.afterShowAd = null;
                    }
                    break;
                  case "rewardComplete":
                    if (this.rewardOptions && this.rewardOptions.rewardComplete) {
                      this.rewardOptions.rewardComplete();
                      this.rewardOptions.rewardComplete = null;
                    }
                    break;
                  case "rewardDismissed":
                    if (this.rewardOptions && this.rewardOptions.rewardDismissed) {
                      this.rewardOptions.rewardDismissed();
                      this.rewardOptions.rewardDismissed = null;
                    }
                }
            }
          }
          ["startup"]() {
            return new Promise(async (_0x12e3c2, _0x3df874) => {
              window.addEventListener("message", this.onMessage.bind(this), false);
              if (window.parent) {
                try {
                  window.parent.postMessage({
                    "event": "inited"
                  }, "*");
                } catch (_0x44a2bf) {
                  _0x55f8d6["default"].trace("postMessage error", _0x44a2bf);
                }
                await new Promise((_0x226e43, _0x35844c) => {
                  setTimeout(() => {
                    _0x226e43();
                  }, 0xc8);
                });
              }
              const _0x1b22d9 = document.createElement("script");
              _0x1b22d9.async = true;
              _0x1b22d9.setAttribute("data-ad-client", "ca-pub-1606100897128261");
              _0x1b22d9.setAttribute("data-ad-channel", "7723651850");
              _0x1b22d9.setAttribute("data-ad-frequency-hint", "10s");
              if (_0x5f1099["default"].getInstance().get(_0x350168.ConfigType.en_DEBUGOPEN)) {
                _0x1b22d9.setAttribute("data-adbreak-test", "on");
              }
              _0x1b22d9.onload = () => {
                this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                _0x12e3c2(true);
              };
              _0x1b22d9.onerror = function () {
                _0x3df874();
              };
              _0x1b22d9.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0x1b22d9);
              window.adsbygoogle = window.adsbygoogle || [];
              window.adBreak = window.adConfig = function (_0x12752f) {
                window.adsbygoogle.push(_0x12752f);
              };
              window.adConfig({
                "preloadAdBreaks": "on",
                "onReady": _0x2c8386 => {
                  this.isReady = true;
                  _0x55f8d6["default"].trace("adBreak isRead");
                }
              });
              this.adBreak = function (_0x2ae03f) {
                window.adsbygoogle.push(_0x2ae03f);
              };
              _0x1fa452["default"].ga("UA-203001982-8");
            });
          }
          ["showInterstitial"](_0x1ea9bc) {
            _0x55f8d6["default"].trace("event_category", _0x1fa452["default"].hostname(document.referrer));
            if (_0x55f8d6["default"].onYYGGamesWebsite() && this.iConfig.showTimes > 0x0) {
              this.options = _0x1ea9bc;
              try {
                window.parent.postMessage({
                  "event": "showInterstitial"
                }, "*");
              } catch (_0x5cbb42) {
                console.log("showInterstitial error:", _0x5cbb42);
              }
              return;
            }
            if (this.interstitialCooldown > 0x0) {
              if (_0x1ea9bc && _0x1ea9bc.beforeShowAd) {
                _0x1ea9bc.beforeShowAd();
                _0x1ea9bc.beforeShowAd = null;
              }
              if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                _0x1ea9bc.afterShowAd();
                _0x1ea9bc.afterShowAd = null;
              }
              return void _0x55f8d6["default"].trace("requesting Interstitial AD\uFF0Cless than 30s, ignored :", this.interstitialCooldown);
            }
            _0x55f8d6["default"].trace("requesting Interstitial AD");
            if (this.options && this.options.afterShowAd) {
              return;
            }
            let _0x11a83a = "next";
            if (0x0 == this.showInterstitialCount) {
              _0x11a83a = "preroll";
              this.showInterstitialCount++;
            }
            _0x1fa452["default"].showLoading();
            if (this.isReady) {
              clearTimeout(this.showLoading);
              this.showLoading = setTimeout(() => {
                this.interstitialCooldown = 0x1e;
                if (_0x1ea9bc && _0x1ea9bc.beforeShowAd) {
                  _0x1ea9bc.beforeShowAd();
                  _0x1ea9bc.beforeShowAd = null;
                  _0x3e2082["default"].getInstance().event("beforeShowAd");
                }
                if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                  _0x1ea9bc.afterShowAd();
                  _0x1ea9bc.afterShowAd = null;
                }
                _0x1fa452["default"].hideLoading();
              }, 0x3e8);
              this.options = _0x1ea9bc;
              return "preroll" == _0x11a83a ? (_0x1ea9bc && _0x1ea9bc.beforeShowAd && (_0x1ea9bc.beforeShowAd(), _0x1ea9bc.beforeShowAd = null, _0x3e2082["default"].getInstance().event("beforeShowAd")), clearTimeout(this.showLoading), void this.adBreak({
                "type": _0x11a83a,
                "name": "game",
                "adBreakDone": _0xd62b5b => {
                  this.iConfig.showTimes++;
                  this.interstitialCooldown = 0x1e;
                  _0x55f8d6["default"].trace("adBreakDone", _0xd62b5b);
                  _0x1fa452["default"].hideLoading();
                  if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                    _0x1ea9bc.afterShowAd();
                    _0x1ea9bc.afterShowAd = null;
                    _0x3e2082["default"].getInstance().event("afterShowAd");
                  }
                }
              })) : (this.adBreak({
                "type": _0x11a83a,
                "name": "game",
                "beforeAd": () => {
                  if (_0x1ea9bc && _0x1ea9bc.beforeShowAd) {
                    _0x1ea9bc.beforeShowAd();
                    _0x1ea9bc.beforeShowAd = null;
                    _0x3e2082["default"].getInstance().event("beforeShowAd");
                  }
                  clearTimeout(this.showLoading);
                  window.blur();
                },
                "afterAd": () => {
                  _0x55f8d6["default"].trace("afterAd");
                  _0x1fa452["default"].hideLoading();
                  if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                    _0x1ea9bc.afterShowAd();
                    _0x1ea9bc.afterShowAd = null;
                  }
                  this.interstitialCooldown = 0x1e;
                  window.focus();
                  _0x3e2082["default"].getInstance().event("afterShowAd");
                },
                "adBreakDone": _0x354009 => {
                  _0x55f8d6["default"].trace("adBreakDone", _0x354009);
                  clearTimeout(this.showLoading);
                  _0x1fa452["default"].hideLoading();
                  if (_0x1ea9bc && _0x1ea9bc.beforeShowAd) {
                    _0x1ea9bc.beforeShowAd();
                    _0x1ea9bc.beforeShowAd = null;
                    _0x3e2082["default"].getInstance().event("beforeShowAd");
                  }
                  if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                    _0x1ea9bc.afterShowAd();
                    _0x1ea9bc.afterShowAd = null;
                    _0x3e2082["default"].getInstance().event("afterShowAd");
                  }
                }
              }), true);
            }
            _0x5cb3b6["default"].getInstance().showInterstitial({
              "beforeAd": () => {
                _0x1fa452["default"].hideLoading();
                if (_0x1ea9bc && _0x1ea9bc.beforeShowAd) {
                  _0x1ea9bc.beforeShowAd();
                  _0x1ea9bc.beforeShowAd = null;
                  _0x3e2082["default"].getInstance().event("beforeShowAd");
                }
                clearTimeout(this.showLoading);
                window.blur();
              },
              "afterAd": () => {
                _0x55f8d6["default"].trace("afterAd");
                _0x1fa452["default"].hideLoading();
                if (_0x1ea9bc && _0x1ea9bc.afterShowAd) {
                  _0x1ea9bc.afterShowAd();
                  _0x1ea9bc.afterShowAd = null;
                }
                this.interstitialCooldown = 0x1e;
                window.focus();
                _0x3e2082["default"].getInstance().event("afterShowAd");
              }
            });
          }
          ["canShowReward"]() {
            return _0x55f8d6["default"].onYYGGamesWebsite() ? this.rConfig.showAdFn : !this.isReady || !!this.showAdFn;
          }
          ["showReward"](_0x37809a) {
            if (!this.canShowReward()) {
              return false;
            }
            if (_0x55f8d6["default"].onYYGGamesWebsite()) {
              this.rewardOptions = _0x37809a;
              try {
                window.parent.postMessage({
                  "event": "showReward"
                }, "*");
              } catch (_0x1802e0) {
                console.log("showReward error:", _0x1802e0);
              }
            } else {
              _0x55f8d6["default"].trace("requesting Reward AD");
              this.rewardOptions = _0x37809a;
              if (this.isReady) {
                this.showAdFn();
                this.showAdFn = null;
                window.blur();
                return true;
              }
              _0x5cb3b6["default"].getInstance().showReward({
                "beforeAd": () => {
                  _0x1fa452["default"].hideLoading();
                  if (_0x37809a && _0x37809a.beforeShowAd) {
                    _0x37809a.beforeShowAd();
                    _0x37809a.beforeShowAd = null;
                    _0x3e2082["default"].getInstance().event("beforeShowAd");
                  }
                  clearTimeout(this.showLoading);
                  window.blur();
                },
                "afterAd": () => {
                  _0x55f8d6["default"].trace("afterAd");
                  _0x1fa452["default"].hideLoading();
                  if (_0x37809a && _0x37809a.afterShowAd) {
                    _0x37809a.afterShowAd();
                    _0x37809a.afterShowAd = null;
                  }
                  this.interstitialCooldown = 0x1e;
                  window.focus();
                  _0x3e2082["default"].getInstance().event("afterShowAd");
                },
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onBeforeReward"](_0x24380d) {
            _0x55f8d6["default"].trace("load Reward AD Successful");
            this.showAdFn = _0x24380d;
          }
          ["onRewardBeforeBreak"]() {
            _0x3e2082["default"].getInstance().event("beforeShowAd");
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            this.interstitialCooldown = 0x1e;
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
            _0x3e2082["default"].getInstance().event("afterShowAd");
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
          ["showBanner"](_0x226d3c) {}
          ["hideBanner"](_0xf65a8d) {}
          ["showSplash"](_0x22c7ee) {}
          ["hideSplash"](_0x22876b) {}
        }
        _0x3ae0cd["default"] = _0x2973e5;
      },
      0xb6a: function (_0x3e3808, _0x48b780, _0x399f94) {
        'use strict';
  
        var _0x5c353c = this && this.__importDefault || function (_0x16d36c) {
          return _0x16d36c && _0x16d36c.__esModule ? _0x16d36c : {
            "default": _0x16d36c
          };
        };
        Object.defineProperty(_0x48b780, "__esModule", {
          "value": true
        });
        const _0xa7be0b = _0x5c353c(_0x399f94(0x4e));
        const _0x7ba4bf = _0x399f94(0x2235);
        const _0x34eada = _0x5c353c(_0x399f94(0x1588));
        const _0x16cde8 = _0x5c353c(_0x399f94(0x1c5c));
        const _0x1b57bb = _0x5c353c(_0x399f94(0x92e));
        const _0x109fa3 = {
          "index": 0x1,
          "callbacks": {}
        };
        const _0x1eb00f = function (_0x2b4954, _0x35a881) {
          try {
            _0x2b4954.index = 0x1+1;
            _0x109fa3.callbacks[_0x2b4954.index] = _0x35a881;
            window.parent.postMessage(_0x2b4954, "*");
          } catch (_0x187739) {
            _0x1b57bb["default"].trace("message error", _0x187739);
          }
        };
        class _0x23d05f extends _0x7ba4bf.Singleton {
          ["init"]() {
            return new Promise(async (_0x1b4c2d, _0x5299f3) => {
              if (_0x34eada["default"].iframe) {
                window.addEventListener("message", _0x221640 => {
                  const _0x841fcf = _0x221640.data || {};
                  const _0x4e5619 = _0x841fcf.status;
                  const _0x2aacdb = _0x841fcf.format;
                  const _0x3f3d57 = _0x841fcf.index;
                  if (_0x2aacdb && _0x3f3d57 > 0x0 && _0x109fa3.callbacks[_0x3f3d57]) {
                    _0x109fa3.callbacks[_0x3f3d57](_0x4e5619);
                  }
                }, false);
                _0x1b4c2d(true);
              } else {
                const _0x4fddb8 = document.createElement("script");
                _0x4fddb8.onload = () => {
                  const _0x341e5a = new GameAds({
                    "adConfig": {
                      "clientId": "ca-pub-3423367744172781"
                    }
                  });
                  this.gameAds = _0x341e5a;
                  _0x1b4c2d(true);
                };
                _0x4fddb8.src = "https://cdn.alsgp0.fds.api.mi-img.com/global-game/partner/game-ads-1.0.0.umd.js";
                document.head.appendChild(_0x4fddb8);
              }
            });
          }
          ["showInterstitial"](_0x317b52) {
            _0x1b57bb["default"].trace("requesting Interstitial AD");
            if ("function" == typeof _0x317b52) {
              _0x317b52 = {
                "beforeShowAd": new Function(),
                "afterShowAd": _0x317b52
              };
            }
            const _0x5121a1 = () => {
              window.blur();
              _0x16cde8["default"].showLoading();
              if (_0x317b52 && _0x317b52.beforeShowAd) {
                _0x317b52.beforeShowAd();
                _0x317b52.beforeShowAd = null;
                _0xa7be0b["default"].getInstance().event("beforeShowAd");
              }
            };
            const _0xcbb12e = () => {
              _0x16cde8["default"].hideLoading();
              if (_0x317b52 && _0x317b52.afterShowAd) {
                _0x317b52.afterShowAd();
                _0x317b52.afterShowAd = null;
              }
              window.focus();
              _0xa7be0b["default"].getInstance().event("afterShowAd");
            };
            const _0x6b4c15 = () => {
              _0x16cde8["default"].hideLoading();
              _0xcbb12e();
              if (_0x317b52 && _0x317b52.adBreakDone) {
                _0x317b52.adBreakDone();
                _0x317b52.adBreakDone = null;
                _0xa7be0b["default"].getInstance().event("adBreakDone");
              }
            };
            if (_0x34eada["default"].iframe || !this.gameAds) {
              _0x1eb00f({
                "format": "interstitial"
              }, _0x365936 => {
                _0x16cde8["default"].trace(_0x365936);
                switch (_0x365936) {
                  case "beforeAd":
                    _0x5121a1();
                    break;
                  case "afterAd":
                    _0xcbb12e();
                    break;
                  case "adBreakDone":
                    _0x6b4c15();
                }
              });
              return true;
            }
            this.gameAds.showAds("next", _0x192860 => {
              switch (_0x192860) {
                case "beforeAd":
                  _0x5121a1();
                  break;
                case "afterAd":
                  _0xcbb12e();
                  break;
                case "adBreakDone":
                  _0x6b4c15();
              }
            });
          }
          ["canShowReward"]() {
            return true;
          }
          ["showReward"](_0x5e1392) {
            _0x1b57bb["default"].trace("requesting reward ad");
            const _0x1792ad = () => {
              window.blur();
              _0x16cde8["default"].showLoading();
              if (_0x5e1392 && _0x5e1392.beforeShowAd) {
                _0x5e1392.beforeShowAd();
                _0x5e1392.beforeShowAd = null;
                _0xa7be0b["default"].getInstance().event("beforeShowAd");
              }
            };
            const _0x2069af = () => {
              _0x16cde8["default"].hideLoading();
              if (_0x5e1392 && _0x5e1392.afterShowAd) {
                _0x5e1392.afterShowAd();
                _0x5e1392.afterShowAd = null;
              }
              window.focus();
              _0xa7be0b["default"].getInstance().event("afterShowAd");
            };
            const _0x2bd23 = () => {
              if (_0x5e1392 && _0x5e1392.rewardComplete) {
                _0x5e1392.rewardComplete();
                _0x5e1392.rewardComplete = null;
              }
            };
            const _0x1e2187 = () => {
              if (_0x5e1392 && _0x5e1392.rewardDismissed) {
                _0x5e1392.rewardDismissed();
                _0x5e1392.rewardDismissed = null;
              }
            };
            const _0x1ef4f7 = () => {
              _0x16cde8["default"].hideLoading();
              _0x2069af();
              if (_0x5e1392 && _0x5e1392.afterShowAd) {
                _0x5e1392.afterShowAd();
                _0x5e1392.afterShowAd = null;
                _0xa7be0b["default"].getInstance().event("afterShowAd");
              }
            };
            if (_0x34eada["default"].iframe || !this.gameAds) {
              _0x1eb00f({
                "format": "reward"
              }, _0x22490a => {
                _0x16cde8["default"].trace(_0x22490a);
                switch (_0x22490a) {
                  case "beforeAd":
                    _0x1792ad();
                    break;
                  case "afterAd":
                    _0x2069af();
                    break;
                  case "adViewed":
                    _0x2bd23();
                    break;
                  case "adDismissed":
                    _0x1e2187();
                    break;
                  case "adBreakDone":
                    _0x1ef4f7();
                }
              });
              return true;
            }
            this.gameAds.showAds("reward", (_0x5bbb47, _0x468664) => {
              switch (_0x5bbb47) {
                case "beforeAd":
                  _0x1792ad();
                  break;
                case "afterAd":
                  _0x2069af();
                  break;
                case "adViewed":
                  _0x2bd23();
                  break;
                case "adDismissed":
                  _0x1e2187();
                  break;
                case "adBreakDone":
                  _0x1ef4f7();
              }
            });
          }
          ["onUpdate"]() {}
          ["showBanner"](_0x5e799e) {}
          ["hideBanner"](_0x351206) {}
          ["showSplash"](_0x1231a0) {}
          ["hideSplash"](_0x1da0e5) {}
        }
        _0x48b780["default"] = _0x23d05f;
      },
      0x1b97: function (_0x1632ce, _0x421cf5, _0x510d5b) {
        'use strict';
  
        var _0x52baa8 = this && this.__importDefault || function (_0x5598ef) {
          return _0x5598ef && _0x5598ef.__esModule ? _0x5598ef : {
            "default": _0x5598ef
          };
        };
        Object.defineProperty(_0x421cf5, "__esModule", {
          "value": true
        });
        const _0x163693 = _0x510d5b(0x2235);
        const _0x530dd3 = _0x52baa8(_0x510d5b(0x836));
        const _0x3f5ecb = _0x52baa8(_0x510d5b(0x1c5c));
        const _0x2b9767 = _0x52baa8(_0x510d5b(0x92e));
        const _0x5628fc = _0x52baa8(_0x510d5b(0x1ea1));
        class _0x55e3c3 extends _0x163693.Singleton {
          constructor() {
            super(...arguments);
            this.showInterstitialCount = 0x0;
            this.interstitialCooldown = 0x0;
            this.isReady = false;
            this.rConfig = {
              "showAdFn": null
            };
            this.iConfig = {
              "showTimes": null
            };
          }
          ["init"]() {
            return new Promise(async (_0x14c10b, _0x5eb8e0) => {
              const _0x537f38 = document.createElement("script");
              _0x537f38.async = true;
              _0x537f38.setAttribute("data-ad-client", "ca-pub-6129580795478709");
              _0x537f38.setAttribute("data-ad-channel", "8431729647");
              _0x537f38.setAttribute("data-ad-frequency-hint", "180s");
              _0x537f38.onload = () => {
                this.updateInterval = setInterval(this.onUpdate.bind(this), 0x3e8);
                _0x14c10b(true);
              };
              _0x537f38.onerror = function () {
                _0x5eb8e0();
              };
              _0x537f38.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0x537f38);
              window.adsbygoogle = window.adsbygoogle || [];
              window.adBreak = window.adConfig = function (_0x5a1c03) {
                window.adsbygoogle.push(_0x5a1c03);
              };
              window.adConfig({
                "preloadAdBreaks": "on",
                "onReady": _0x4fdf4a => {
                  this.isReady = true;
                  _0x2b9767["default"].trace("adBreak isRead");
                }
              });
              this.adBreak = function (_0x405d05) {
                window.adsbygoogle.push(_0x405d05);
              };
            });
          }
          ["showInterstitial"](_0xeb4b1c) {
            if (this.interstitialCooldown > 0x0) {
              if (_0xeb4b1c && _0xeb4b1c.beforeShowAd) {
                _0xeb4b1c.beforeShowAd();
                _0xeb4b1c.beforeShowAd = null;
              }
              if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                _0xeb4b1c.afterShowAd();
                _0xeb4b1c.afterShowAd = null;
              }
              return void _0x2b9767["default"].trace("requesting Interstitial AD\uFF0Cless than 30s, ignored :", this.interstitialCooldown);
            }
            _0x2b9767["default"].trace("requesting Interstitial AD");
            if (this.options && this.options.afterShowAd) {
              return;
            }
            let _0x483e28 = "next";
            if (0x0 == this.showInterstitialCount) {
              _0x483e28 = "preroll";
              this.showInterstitialCount++;
            }
            _0x3f5ecb["default"].showLoading();
            if (this.isReady) {
              clearTimeout(this.showLoading);
              this.showLoading = setTimeout(() => {
                this.interstitialCooldown = 0x1e;
                if (_0xeb4b1c && _0xeb4b1c.beforeShowAd) {
                  _0xeb4b1c.beforeShowAd();
                  _0xeb4b1c.beforeShowAd = null;
                  _0x5628fc["default"].getInstance().event("beforeShowAd");
                }
                if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                  _0xeb4b1c.afterShowAd();
                  _0xeb4b1c.afterShowAd = null;
                }
                _0x3f5ecb["default"].hideLoading();
              }, 0x3e8);
              this.options = _0xeb4b1c;
              return "preroll" == _0x483e28 ? (_0xeb4b1c && _0xeb4b1c.beforeShowAd && (_0xeb4b1c.beforeShowAd(), _0xeb4b1c.beforeShowAd = null, _0x5628fc["default"].getInstance().event("beforeShowAd")), clearTimeout(this.showLoading), void this.adBreak({
                "type": _0x483e28,
                "name": "game",
                "adBreakDone": _0x317931 => {
                  this.iConfig.showTimes++;
                  this.interstitialCooldown = 0x1e;
                  _0x2b9767["default"].trace("adBreakDone", _0x317931);
                  _0x3f5ecb["default"].hideLoading();
                  if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                    _0xeb4b1c.afterShowAd();
                    _0xeb4b1c.afterShowAd = null;
                    _0x5628fc["default"].getInstance().event("afterShowAd");
                  }
                }
              })) : (this.adBreak({
                "type": _0x483e28,
                "name": "game",
                "beforeAd": () => {
                  if (_0xeb4b1c && _0xeb4b1c.beforeShowAd) {
                    _0xeb4b1c.beforeShowAd();
                    _0xeb4b1c.beforeShowAd = null;
                    _0x5628fc["default"].getInstance().event("beforeShowAd");
                  }
                  clearTimeout(this.showLoading);
                  window.blur();
                },
                "afterAd": () => {
                  _0x2b9767["default"].trace("afterAd");
                  _0x3f5ecb["default"].hideLoading();
                  if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                    _0xeb4b1c.afterShowAd();
                    _0xeb4b1c.afterShowAd = null;
                  }
                  this.interstitialCooldown = 0x1e;
                  window.focus();
                  _0x5628fc["default"].getInstance().event("afterShowAd");
                },
                "adBreakDone": _0x5646f4 => {
                  _0x2b9767["default"].trace("adBreakDone", _0x5646f4);
                  clearTimeout(this.showLoading);
                  _0x3f5ecb["default"].hideLoading();
                  if (_0xeb4b1c && _0xeb4b1c.beforeShowAd) {
                    _0xeb4b1c.beforeShowAd();
                    _0xeb4b1c.beforeShowAd = null;
                    _0x5628fc["default"].getInstance().event("beforeShowAd");
                  }
                  if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                    _0xeb4b1c.afterShowAd();
                    _0xeb4b1c.afterShowAd = null;
                    _0x5628fc["default"].getInstance().event("afterShowAd");
                  }
                }
              }), true);
            }
            _0x530dd3["default"].getInstance().showInterstitial({
              "beforeAd": () => {
                _0x3f5ecb["default"].hideLoading();
                if (_0xeb4b1c && _0xeb4b1c.beforeShowAd) {
                  _0xeb4b1c.beforeShowAd();
                  _0xeb4b1c.beforeShowAd = null;
                  _0x5628fc["default"].getInstance().event("beforeShowAd");
                }
                clearTimeout(this.showLoading);
                window.blur();
              },
              "afterAd": () => {
                _0x2b9767["default"].trace("afterAd");
                _0x3f5ecb["default"].hideLoading();
                if (_0xeb4b1c && _0xeb4b1c.afterShowAd) {
                  _0xeb4b1c.afterShowAd();
                  _0xeb4b1c.afterShowAd = null;
                }
                this.interstitialCooldown = 0x1e;
                window.focus();
                _0x5628fc["default"].getInstance().event("afterShowAd");
              }
            });
          }
          ["canShowReward"]() {
            return !this.isReady || !!this.showAdFn;
          }
          ["showReward"](_0x5534d9) {
            return !!this.canShowReward() && (_0x2b9767["default"].trace("requesting Reward AD"), this.rewardOptions = _0x5534d9, this.isReady ? (this.showAdFn(), this.showAdFn = null, window.blur(), true) : void _0x530dd3["default"].getInstance().showReward({
              "beforeAd": () => {
                _0x3f5ecb["default"].hideLoading();
                if (_0x5534d9 && _0x5534d9.beforeShowAd) {
                  _0x5534d9.beforeShowAd();
                  _0x5534d9.beforeShowAd = null;
                  _0x5628fc["default"].getInstance().event("beforeShowAd");
                }
                clearTimeout(this.showLoading);
                window.blur();
              },
              "afterAd": () => {
                _0x2b9767["default"].trace("afterAd");
                _0x3f5ecb["default"].hideLoading();
                if (_0x5534d9 && _0x5534d9.afterShowAd) {
                  _0x5534d9.afterShowAd();
                  _0x5534d9.afterShowAd = null;
                }
                this.interstitialCooldown = 0x1e;
                window.focus();
                _0x5628fc["default"].getInstance().event("afterShowAd");
              },
              "adDismissed": this.onRewardDismissed.bind(this),
              "adViewed": this.onRewardComplete.bind(this)
            }));
          }
          ["onUpdate"]() {
            if (this.interstitialCooldown >= 0x0) {
              this.interstitialCooldown--;
            }
            this.checkReward();
          }
          ["checkReward"]() {
            if (!this.showAdFn) {
              this.adBreak({
                "type": "reward",
                "name": "reward",
                "beforeAd": this.onRewardBeforeBreak.bind(this),
                "afterAd": this.onRewardAfterBreak.bind(this),
                "beforeReward": this.onBeforeReward.bind(this),
                "adDismissed": this.onRewardDismissed.bind(this),
                "adViewed": this.onRewardComplete.bind(this)
              });
            }
          }
          ["onBeforeReward"](_0x332729) {
            _0x2b9767["default"].trace("load Reward AD Successful");
            this.showAdFn = _0x332729;
          }
          ["onRewardBeforeBreak"]() {
            _0x5628fc["default"].getInstance().event("beforeShowAd");
            if (this.rewardOptions.beforeShowAd) {
              this.rewardOptions.beforeShowAd();
            }
            this.rewardOptions.beforeShowAd = null;
          }
          ["onRewardAfterBreak"]() {
            window.focus();
            this.interstitialCooldown = 0x1e;
            if (this.rewardOptions.afterShowAd) {
              this.rewardOptions.afterShowAd();
            }
            this.rewardOptions.afterShowAd = null;
            this.showAdFn = null;
            _0x5628fc["default"].getInstance().event("afterShowAd");
          }
          ["onRewardDismissed"]() {
            if (this.rewardOptions.rewardDismissed) {
              this.rewardOptions.rewardDismissed();
            }
            this.rewardOptions.rewardDismissed = null;
          }
          ["onRewardComplete"]() {
            if (this.rewardOptions.rewardComplete) {
              this.rewardOptions.rewardComplete();
            }
            this.rewardOptions.rewardComplete = null;
          }
          ["showBanner"](_0x143750) {}
          ["hideBanner"](_0x4d572a) {}
          ["showSplash"](_0x10a161) {}
          ["hideSplash"](_0x4ec4b2) {}
        }
        _0x421cf5["default"] = _0x55e3c3;
      },
      0x1c4e: (_0x1cd6c1, _0xc4d6ac) => {
        'use strict';
  
        Object.defineProperty(_0xc4d6ac, "__esModule", {
          "value": true
        });
        class _0x3933f4 {
          static ["pause"]() {
            if ("undefined" != typeof Laya) {
              if (0x0 == Laya.timer.scale) {
                return;
              }
              this.timerScale = Laya.timer.scale;
              Laya.timer.scale = 0x0;
            }
          }
          static ["resume"]() {
            if ("undefined" != typeof Laya) {
              Laya.timer.scale = this.timerScale;
            }
          }
        }
        _0xc4d6ac["default"] = _0x3933f4;
        _0x3933f4.timerScale = 0x1;
      },
      0x836: function (_0x37a662, _0x234415, _0x1dae62) {
        'use strict';
  
        var _0x4e053a = this && this.__importDefault || function (_0x5f2189) {
          return _0x5f2189 && _0x5f2189.__esModule ? _0x5f2189 : {
            "default": _0x5f2189
          };
        };
        Object.defineProperty(_0x234415, "__esModule", {
          "value": true
        });
        const _0x526aa2 = _0x4e053a(_0x1dae62(0x1eb));
        const _0x319453 = _0x1dae62(0x139f);
        const _0x3e3161 = _0x4e053a(_0x1dae62(0x1680));
        const _0x44ec5d = _0x4e053a(_0x1dae62(0x1c5c));
        const _0x14fd99 = _0x4e053a(_0x1dae62(0x92e));
        class _0x475643 extends _0x526aa2["default"] {
          constructor() {
            super(...arguments);
            this.recommends = [];
            this.inited = false;
            this.games = [];
            this.rewardInterval = 0x0;
            this.rewardTime = 0x0;
            this.itemSize = {
              "w": 0xc8,
              "h": 0xc8,
              "dw": 0x2ee,
              "dh": 0x2ee
            };
            this.domain = '';
          }
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x475643();
            }
            return this._gInstance;
          }
          ["init"]() {
            this.inited = false;
            const _0x2d9f61 = ["https://www.yiv.com/forgame/gamesAD.json", "https://www.yad.com/forgame/gamesAD.json"];
            _0x2d9f61.sort(function () {
              return 0.5 - Math.random();
            });
            this.domain = "https://www.yiv.com/";
            const _0x453a39 = _0x2d9f61[0x0];
            if (_0x453a39.indexOf("www.yad.com") > -0x1) {
              this.domain = "https://www.yad.com/";
              this.itemSize.w = 0x10a;
              this.itemSize.dh = 562.5;
            }
            _0x14fd99["default"].readDataSync(_0x453a39).then(_0x4c40b2 => {
              _0x4c40b2.sort(function () {
                return 0.5 - Math.random();
              });
              this.games = _0x4c40b2;
              if (0x0 == _0x4c40b2.length) {
                return;
              }
              const _0x3eed04 = document.createElement("div");
              _0x3eed04.style.backgroundColor = "#000000";
              _0x3eed04.style.position = "absolute";
              _0x3eed04.style.width = "100%";
              _0x3eed04.style.height = "100%";
              _0x3eed04.style.textAlign = "center";
              _0x3eed04.style.left = "0";
              _0x3eed04.style.top = "0";
              const _0x5fe3f7 = document.createElement("div");
              _0x5fe3f7.style.display = "flex";
              _0x5fe3f7.style.flex = "0";
              _0x5fe3f7.style.width = "100%";
              _0x5fe3f7.style.height = "100%";
              _0x5fe3f7.style.flexDirection = "column";
              _0x5fe3f7.style.alignItems = "center";
              _0x5fe3f7.style.justifyContent = "center";
              for (let _0x45f7cc = 0x0; _0x45f7cc < 0x2; _0x45f7cc++) {
                const _0x6d4d82 = document.createElement("div");
                for (let _0x58a708 = 0x0; _0x58a708 < 0x2; _0x58a708++) {
                  const _0x3b671e = document.createElement("img");
                  _0x3b671e.style.cursor = "pointer";
                  _0x3b671e.style.marginTop = "4px";
                  _0x3b671e.style.marginLeft = "4px";
                  _0x3b671e.style.border = "2px solid #FFFFFF";
                  _0x3b671e.style.borderRadius = "10px";
                  _0x3b671e.setAttribute("id", _0x4c40b2[this.recommends.length].id);
                  _0x3b671e.src = _0x4c40b2[this.recommends.length].thumb;
                  _0x3b671e.onload = () => {
                    this.resize();
                  };
                  _0x3b671e.onclick = () => {
                    this.navigate(_0x3b671e.getAttribute("id"));
                  };
                  _0x6d4d82.appendChild(_0x3b671e);
                  this.recommends.push(_0x3b671e);
                }
                _0x5fe3f7.appendChild(_0x6d4d82);
              }
              const _0x19957e = document.createElement("div");
              _0x19957e.innerHTML = "CLOSE";
              _0x19957e.style.width = "160px";
              _0x19957e.style.height = "30px";
              _0x19957e.style.lineHeight = "30px";
              _0x19957e.style.border = "1px solid #FFFFFF";
              _0x19957e.style.position = "absolute";
              _0x19957e.style.bottom = "40px";
              _0x19957e.style.right = "10px";
              _0x19957e.style.cursor = "pointer";
              _0x19957e.style.color = "#FFFFFF";
              _0x5fe3f7.appendChild(_0x19957e);
              const _0xb37e9c = document.createElement("div");
              _0xb37e9c.style.position = "absolute";
              _0xb37e9c.style.bottom = "10px";
              _0xb37e9c.style.right = "10px";
              _0xb37e9c.style.color = "#FFFFFF";
              _0xb37e9c.innerHTML = "More Games @ " + this.domain.replace("https://www.", '').replace("/", '');
              _0xb37e9c.style.cursor = "pointer";
              _0x5fe3f7.appendChild(_0xb37e9c);
              _0x3eed04.appendChild(_0x5fe3f7);
              document.body.appendChild(_0x3eed04);
              _0x19957e.onclick = () => {
                if (this.rewardTime > 0x0) {
                  if (this.options && this.options.adDismissed) {
                    return;
                  }
                } else if (this.options && this.options.adViewed) {
                  this.options.adViewed();
                  this.options.adDismissed = null;
                  this.options.adViewed = null;
                }
                if (this.options && this.options.afterAd) {
                  this.options.afterAd();
                  this.options.afterAd = null;
                }
                _0x3eed04.style.zIndex = "0";
                _0x3eed04.style.display = "none";
              };
              _0xb37e9c.onclick = () => {
                this.navigate();
              };
              _0x3eed04.style.display = "none";
              this.recommend_close = _0x19957e;
              this.recommend_bottom = _0xb37e9c;
              this.defaultAd = _0x3eed04;
              this.inited = true;
              window.addEventListener("resize", () => {
                this.resize();
              }, false);
            });
          }
          ["navigate"](_0x348b9b) {
            const _0x1a1006 = _0x3e3161["default"].getInstance().get(_0x319453.ConfigType.en_APPNAME);
            const _0x113bb3 = _0x3e3161["default"].getInstance().get(_0x319453.ConfigType.en_CHANNELNAME);
            _0x348b9b = _0x348b9b || '';
            var _0x2e6efc = document.referrer;
            let _0x37c45a = this.domain;
            if (!(undefined === _0x348b9b || '' == _0x348b9b || "undefined" == _0x348b9b)) {
              _0x37c45a = _0x37c45a + "?pic=" + _0x348b9b;
            }
            _0x2e6efc = undefined === _0x2e6efc || '' == _0x2e6efc || "undefined" == _0x2e6efc ? "unknown" : _0x2e6efc.split("/")[0x2];
            if (_0x37c45a.indexOf("?") > -0x1) {
              _0x37c45a += "&";
            } else {
              _0x37c45a += "?";
            }
            _0x37c45a = _0x37c45a + "utm_source=" + _0x2e6efc + "&utm_medium=" + _0x1a1006 + "&utm_campaign=defaultAD-" + _0x113bb3;
            try {
              window.open(_0x37c45a);
            } catch (_0x49b51d) {}
          }
          ["resize"]() {
            var _0x5d6c69;
            var _0x4a95a8 = this.itemSize.dw;
            var _0x13b8fe = this.itemSize.dh;
            var _0x42a6ba = window.innerWidth;
            var _0xf2e700 = window.innerHeight;
            _0x5d6c69 = _0x42a6ba / _0xf2e700 > _0x4a95a8 / _0x13b8fe ? _0xf2e700 * _0x4a95a8 / _0x13b8fe : _0x42a6ba;
            for (const _0x705148 of this.recommends) {
              _0x705148.width = Math.min(this.itemSize.w, _0x5d6c69 * this.itemSize.w / _0x4a95a8);
              _0x705148.height = _0x705148.width * _0x13b8fe / _0x4a95a8;
            }
            this.recommend_bottom.style.fontSize = _0x42a6ba < 0xd2 ? "10" : "18";
          }
          ["showReward"](_0x5229fe) {
            this.games.sort(function () {
              return 0.5 - Math.random();
            });
            for (let _0x1b205a = 0x0; _0x1b205a < this.recommends.length; _0x1b205a++) {
              const _0x566daf = this.recommends[_0x1b205a];
              _0x566daf.src = this.games[_0x1b205a].thumb;
              _0x566daf.setAttribute("id", this.games[_0x1b205a].id);
            }
            this.rewardTime = 0x5;
            this.recommend_close.innerText = "Reward in 5s";
            this.defaultAd.style.display = '';
            this.defaultAd.style.zIndex = "1000";
            this.options = _0x5229fe;
            if (this.options && this.options.beforeAd) {
              this.options.beforeAd();
              this.options.beforeAd = null;
            }
            clearInterval(this.rewardInterval);
            this.rewardInterval = setInterval(() => {
              this.rewardTime--;
              this.recommend_close.innerText = "Reward in " + this.rewardTime + "s";
              if (this.rewardTime <= 0x0) {
                clearInterval(this.rewardInterval);
                this.recommend_close.innerText = "CLOSE";
              }
            }, 0x3e8);
          }
          ["showInterstitial"](_0x467003) {
            if (!this.inited) {
              if (this.options && this.options.beforeAd) {
                this.options.beforeAd();
                this.options.beforeAd = null;
              }
              return void (this.options && this.options.afterAd && (this.options.afterAd(), this.options.afterAd = null));
            }
            _0x44ec5d["default"].hideLoading();
            this.rewardTime = -0x1;
            this.games.sort(function () {
              return 0.5 - Math.random();
            });
            for (let _0x1e99b8 = 0x0; _0x1e99b8 < this.recommends.length; _0x1e99b8++) {
              const _0x1d7875 = this.recommends[_0x1e99b8];
              _0x1d7875.src = this.games[_0x1e99b8].thumb;
              _0x1d7875.setAttribute("id", this.games[_0x1e99b8].id);
            }
            this.recommend_close.innerText = "CLOSE";
            this.defaultAd.style.display = '';
            this.defaultAd.style.zIndex = "1000";
            this.options = _0x467003;
            if (this.options && this.options.beforeAd) {
              this.options.beforeAd();
              this.options.beforeAd = null;
            }
          }
        }
        _0x234415["default"] = _0x475643;
      },
      0x20ce: function (_0xf20d5a, _0x286a01, _0x4a86bc) {
        'use strict';
  
        var _0x54ffd0 = this && this.__importDefault || function (_0x2db7c5) {
          return _0x2db7c5 && _0x2db7c5.__esModule ? _0x2db7c5 : {
            "default": _0x2db7c5
          };
        };
        Object.defineProperty(_0x286a01, "__esModule", {
          "value": true
        });
        const _0x1696e2 = _0x54ffd0(_0x4a86bc(0x1eb));
        const _0x54498c = _0x54ffd0(_0x4a86bc(0x43b));
        class _0x564217 extends _0x1696e2["default"] {
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x564217();
            }
            return this._gInstance;
          }
          constructor() {
            super();
            const _0x16dbda = document.body || document.getElementsByTagName("body")[0x0];
            const _0x13e738 = document.createElement("style");
            const _0x28a87e = _0x54498c["default"].format("Loading%d", this.getMyID());
            const _0x15cff9 = "\n        ." + _0x28a87e + "{\n            width: 20px;\n            height: 24px;\n            border: 1px rgba(255,255,255,1) solid;\n            border-radius: 0px 0px 5px 5px;\n            position: relative;\n            overflow:visible;\n            margin: 36px auto;\n        }\n        ." + _0x28a87e + ":after, ." + _0x28a87e + ":before{\n            position: absolute;\n            content: \"\";\n        }\n        ." + _0x28a87e + ":before{\n            width: 1px;\n            height: 6px;\n            background-color: rgba(255,255,255,1);\n            top: -10px;\n            left: 4px;\n            box-shadow: 5px 0px 0px 0px rgba(255,255,255,1),\n                        5px -5px 0px 0px rgba(255,255,255,1),\n                        10px 0px 0px 0px rgba(255,255,255,1);\n            -webkit-animation: steam 1s linear infinite alternate;\n               -moz-animation: steam 1s linear infinite alternate;\n                    animation: steam 1s linear infinite alternate;\n        }\n        ." + _0x28a87e + ":after{\n            width: 5px;\n            height: 12px;\n            border: 1px #fff solid;\n            border-left: none;\n            border-radius: 0px 20px 20px 0px;\n            left: 20px;\n        }\n        @-webkit-keyframes steam{\n            0%{height: 0px;}\n            100%{height: 6px;}            \n        }\n        @-moz-keyframes steam{\n            0%{height: 0px}\n            100%{height: 6px;}            \n        }\n        @keyframes steam{\n            0%{height: 0px}\n            100%{height: 6px;}            \n        }\n        ";
            _0x13e738.textContent += _0x15cff9;
            _0x16dbda.appendChild(_0x13e738);
            this.background = document.createElement("div");
            this.background.style.position = "fixed";
            this.background.style.zIndex = "0";
            this.background.style.top = "0";
            this.background.style.left = "0";
            this.background.style.width = "100%";
            this.background.style.height = "100%";
            this.background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            this.sprite = document.createElement("div");
            this.sprite.className = _0x28a87e;
            this.sprite.style.top = "40%";
            this.background.appendChild(this.sprite);
            this.background.style.display = "none";
            _0x16dbda.appendChild(this.background);
          }
          ["showLoading"]() {
            this.background.style.zIndex = "1000";
            this.background.style.display = "block";
          }
          ["hideLoading"]() {
            this.background.style.zIndex = "0";
            this.background.style.display = "none";
          }
        }
        _0x286a01["default"] = _0x564217;
      },
      0x1b83: function (_0x5c8b98, _0x54eca0, _0x52599b) {
        'use strict';
  
        var _0x34ace1 = this && this.__importDefault || function (_0x492ead) {
          return _0x492ead && _0x492ead.__esModule ? _0x492ead : {
            "default": _0x492ead
          };
        };
        Object.defineProperty(_0x54eca0, "__esModule", {
          "value": true
        });
        const _0x173355 = _0x34ace1(_0x52599b(0x1eb));
        const _0x5d6fcc = _0x34ace1(_0x52599b(0x43b));
        class _0x405a8a extends _0x173355["default"] {
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x405a8a();
            }
            return this._gInstance;
          }
          constructor() {
            super();
            const _0x28b8fb = document.body || document.getElementsByTagName("body")[0x0];
            const _0x5221fb = document.createElement("style");
            const _0x3f5607 = _0x5d6fcc["default"].format("LoadingLayer%d", this.getMyID());
            const _0x1bbfd4 = "\n            ." + _0x3f5607 + ",." + _0x3f5607 + ":before,." + _0x3f5607 + ":after\n            {  \n                border-radius: 50%;\n                width: 2.0em;\n                height: 2.0em; \n                -webkit-animation-fill-mode: both;\n                animation-fill-mode: both;\n                -webkit-animation: load7 1.8s infinite ease-in-out;\n                animation: load7 1.8s infinite ease-in-out;\n            }\n            ." + _0x3f5607 + " {\n                color: #ffffff;\n                font-size: 10px;\n                margin: 0px auto;\n                position: relative;\n                text-indent: -9999em;\n                -webkit-transform: translateZ(0);\n                -ms-transform: translateZ(0);\n                transform: translateZ(0);\n                -webkit-animation-delay: -0.16s;\n                animation-delay: -0.16s;\n            }\n            ." + _0x3f5607 + ":before,." + _0x3f5607 + ":after\n            {\n                content: '';\n                position: absolute;top: 0;\n            }\n            ." + _0x3f5607 + ":before{\n                left: -3.5em;\n                -webkit-animation-delay: -0.32s;\n                animation-delay: -0.32s;\n            }\n            ." + _0x3f5607 + ":after{\n                left: 3.5em;\n            }\n            @-webkit-keyframes load7\n            {\n                0%,80%,100% {\n                    box-shadow: 0 2.5em 0 -1.3em;\n                }\n                40% {\n                    box-shadow: 0 2.5em 0 0;\n                }\n            }\n            @keyframes load7\n            {\n                0%,80%,100% {\n                    box-shadow: 0 2.5em 0 -1.3em;\n                }\n                40% {\n                    box-shadow: 0 2.5em 0 0;\n                }\n            }\n        ";
            _0x5221fb.textContent += _0x1bbfd4;
            _0x28b8fb.appendChild(_0x5221fb);
            this.background = document.createElement("div");
            this.background.style.position = "fixed";
            this.background.style.zIndex = "0";
            this.background.style.top = "0";
            this.background.style.left = "0";
            this.background.style.width = "100%";
            this.background.style.height = "100%";
            this.background.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            this.sprite = document.createElement("div");
            this.sprite.className = _0x3f5607;
            this.sprite.style.top = "40%";
            this.background.appendChild(this.sprite);
            this.background.style.display = "none";
            _0x28b8fb.appendChild(this.background);
          }
          ["setAlpha"](_0x37925c) {
            this.background.style.backgroundColor = _0x5d6fcc["default"].format("rgba(0, 0, 0, %d)", _0x37925c);
            if (0x0 == _0x37925c) {
              this.sprite.style.display = "none";
            }
          }
          ["showLoading"]() {
            this.background.style.zIndex = "1000";
            this.background.style.display = "block";
          }
          ["hideLoading"]() {
            this.background.style.zIndex = "0";
            this.background.style.display = "none";
          }
        }
        _0x54eca0["default"] = _0x405a8a;
      },
      0x10e7: function (_0x49db52, _0x6e7ecb, _0x24d8b0) {
        'use strict';
  
        var _0x30e5f9 = this && this.__importDefault || function (_0x5eafc2) {
          return _0x5eafc2 && _0x5eafc2.__esModule ? _0x5eafc2 : {
            "default": _0x5eafc2
          };
        };
        Object.defineProperty(_0x6e7ecb, "__esModule", {
          "value": true
        });
        const _0x59b023 = _0x30e5f9(_0x24d8b0(0x1eb));
        const _0x1f1193 = _0x24d8b0(0xda5);
        const _0x27eab8 = _0x24d8b0(0x139f);
        const _0x8cbd36 = _0x30e5f9(_0x24d8b0(0x1680));
        class _0x373045 extends _0x59b023["default"] {
          static ["getInstance"]() {
            if (!this._gInstance) {
              this._gInstance = new _0x373045();
            }
            return this._gInstance;
          }
          constructor() {
            super();
            const _0x453417 = document.createElement("iframe");
            _0x453417.style.display = "none";
            document.head.appendChild(_0x453417);
            this.gConsole = _0x453417.contentWindow.console;
          }
          ["trace"](..._0xb32299) {
            if (_0x8cbd36["default"].getInstance().get(_0x27eab8.ConfigType.en_ADPLATFORM) != _0x1f1193.AdPlatformType.en_GAMEDISTRIBUTION || _0x8cbd36["default"].getInstance().get(_0x27eab8.ConfigType.en_DEBUGOPEN)) {
              var _0x264ce2 = [];
              for (var _0x185d53 = 0x1; _0x185d53 < arguments.length; _0x185d53++) {
                _0x264ce2[_0x185d53 - 0x1] = arguments[_0x185d53];
              }
              this.gConsole.log.apply(this, ["%c %c %c YYGGAMES:", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", arguments[0x0]].concat(_0x264ce2));
            }
          }
          ["status"](..._0x3f9334) {
            const _0x2f82ab = [];
            for (let _0x4be79c = 0x1; _0x4be79c < arguments.length; _0x4be79c++) {
              _0x2f82ab[_0x4be79c - 0x1] = arguments[_0x4be79c];
            }
            this.gConsole.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", arguments[0x0].concat(..._0x2f82ab), "background: #d44a52", "background: #fb8cb3"]);
          }
          ["traceWarn"](_0x5ca3c1) {
            if (_0x8cbd36["default"].getInstance().get(_0x27eab8.ConfigType.en_ADPLATFORM) != _0x1f1193.AdPlatformType.en_GAMEDISTRIBUTION) {
              this.gConsole.log.apply(this, ["%c %c %c YYGGAMES: %c%s", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ff0300", _0x5ca3c1]);
            }
          }
          ["traceVersion"](_0x45c16c) {
            if (_0x8cbd36["default"].getInstance().get(_0x27eab8.ConfigType.en_ADPLATFORM) != _0x1f1193.AdPlatformType.en_GAMEDISTRIBUTION) {
              this.gConsole.log.apply(this, ["%c %c %c YYGGAMES %c%s %c %c ", "background: #fb8cb3", "background: #d44a52", "color: #ffffff; background: #871905", "color: #ffffff;background: #871905;", _0x45c16c, "background: #d44a52", "background: #fb8cb3"]);
            }
          }
        }
        _0x6e7ecb["default"] = _0x373045;
      },
      0x1ec9: (_0x1b01d7, _0x223bab, _0x5e02ec) => {
        'use strict';
  
        Object.defineProperty(_0x223bab, "__esModule", {
          "value": true
        });
        _0x223bab.Toast = undefined;
        const _0x491ce7 = _0x5e02ec(0x2235);
        class _0x51e14f extends _0x491ce7.Singleton {
          constructor() {
            super();
            this.id = -0x1;
            this.div = document.createElement("div");
            this.div.style.cssText = "overflow: hidden;word-break: break-all;word-wrap: break-word;font-family:Arial;padding:10px 10px 10px 10px;min-height:20px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 18px;";
            document.body.appendChild(this.div);
          }
          ["show"](_0x5cd208, _0x31a601) {
            let _0x4c680f;
            let _0x4de618;
            _0x31a601 = isNaN(_0x31a601) ? 0x7d0 : _0x31a601;
            if ("undefined" != typeof Laya) {
              _0x4c680f = Laya.stage.designWidth;
              _0x4de618 = Laya.stage.designHeight;
            } else {
              _0x4c680f = window.innerWidth;
              _0x4de618 = window.innerHeight;
            }
            var _0x1fc394;
            var _0x27035a = window.innerWidth;
            var _0x389553 = window.innerHeight;
            _0x1fc394 = _0x27035a / _0x389553 > _0x4c680f / _0x4de618 ? _0x389553 * _0x4c680f / _0x4de618 : _0x27035a;
            this.div.style.width = _0x1fc394 - 0x64 + "px";
            this.div.innerHTML = _0x5cd208;
            _0x31a601 = isNaN(_0x31a601) ? 0x7d0 : _0x31a601;
            this.div.style.display = "inline";
            this.div.style.opacity = "1";
            clearTimeout(this.id);
            this.id = setTimeout(() => {
              this.div.style.webkitTransition = "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in";
              this.div.style.opacity = "0";
              this.div.style.display = "none";
            }, _0x31a601);
          }
          ["hide"]() {
            this.div.style.opacity = "0";
            this.div.style.display = "none";
          }
        }
        _0x223bab.Toast = _0x51e14f;
      },
      0xdf3: function (_0x18c7d9, _0x232852, _0xdf491f) {
        'use strict';
  
        var _0x143a90 = this && this.__importDefault || function (_0x19bd9e) {
          return _0x19bd9e && _0x19bd9e.__esModule ? _0x19bd9e : {
            "default": _0x19bd9e
          };
        };
        Object.defineProperty(_0x232852, "__esModule", {
          "value": true
        });
        const _0x1cf77d = _0xdf491f(0x2235);
        const _0x32b1e8 = _0xdf491f(0x22bd);
        const _0x5738f8 = _0x143a90(_0xdf491f(0x1588));
        class _0x1822c1 extends _0x1cf77d.Singleton {
          constructor() {
            super();
            this.id = -0x1;
            this.div = document.createElement("div");
            this.div.style.cssText = "\n        overflow: hidden;\n        word-break: break-all;\n        word-wrap: break-word;\n        font-family:Arial;\n        padding:10px 10px 10px 10px;\n        min-height:20px;\n        color: rgb(255, 255, 255);\n        line-height: 20px;\n        text-align:center;\n        border-radius: 4px;\n        position: fixed;\n        top: 40%;left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 999999;\n        background: rgba(0, 0, 0,.7);\n        font-size: 18px;";
            document.body.appendChild(this.div);
          }
          ["show"](_0x2ca819, _0x436bcc) {
            let _0x512890;
            let _0x5ae389;
            _0x436bcc = isNaN(_0x436bcc) ? 0x7d0 : _0x436bcc;
            if ("undefined" != typeof Laya && _0x5738f8["default"].os == _0x32b1e8.OS.PC) {
              _0x512890 = Laya.stage.designWidth;
              _0x5ae389 = Laya.stage.designHeight;
            } else {
              _0x512890 = window.innerWidth;
              _0x5ae389 = window.innerHeight;
            }
            var _0x2aa17e;
            var _0x305fe1 = window.innerWidth;
            var _0x15092a = window.innerHeight;
            _0x2aa17e = _0x305fe1 / _0x15092a > _0x512890 / _0x5ae389 ? _0x15092a * _0x512890 / _0x5ae389 : _0x305fe1;
            this.div.style.width = Math.max(0xc8, _0x2aa17e - 0x64) + "px";
            this.div.innerHTML = _0x2ca819;
            _0x436bcc = isNaN(_0x436bcc) ? 0x7d0 : _0x436bcc;
            this.div.style.display = "inline";
            this.div.style.opacity = "1";
            clearTimeout(this.id);
            this.id = setTimeout(() => {
              this.div.style.webkitTransition = "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in";
              this.div.style.opacity = "0";
              this.div.style.display = "none";
            }, _0x436bcc);
          }
          ["hide"]() {
            this.div.style.opacity = "0";
            this.div.style.display = "none";
          }
        }
        _0x232852["default"] = _0x1822c1;
      },
      0x1d63: function (_0x2c98b5, _0x580613, _0x15e2c1) {
        'use strict';
  
        var _0x32a438 = this && this.__importDefault || function (_0x530c66) {
          return _0x530c66 && _0x530c66.__esModule ? _0x530c66 : {
            "default": _0x530c66
          };
        };
        Object.defineProperty(_0x580613, "__esModule", {
          "value": true
        });
        const _0x5e445e = _0x32a438(_0x15e2c1(0x4c0));
        const _0x27b48b = _0x32a438(_0x15e2c1(0x109));
        const _0x2a09f0 = _0x15e2c1(0xda5);
        const _0x2fc390 = _0x15e2c1(0x1b70);
        const _0x4e386f = _0x15e2c1(0x139f);
        const _0x1a0f77 = _0x15e2c1(0x2235);
        const _0x15f6ba = _0x32a438(_0x15e2c1(0x1052));
        const _0x36c7f3 = _0x32a438(_0x15e2c1(0x1bdf));
        const _0xa18708 = _0x32a438(_0x15e2c1(0x1680));
        const _0x5bf21f = _0x32a438(_0x15e2c1(0x1aad));
        const _0xb7e1df = _0x32a438(_0x15e2c1(0x1ea1));
        const _0x3752fb = _0x32a438(_0x15e2c1(0x127c));
        const _0x584e49 = _0x32a438(_0x15e2c1(0x42));
        const _0x437571 = _0x32a438(_0x15e2c1(0x2350));
        const _0x24cbb1 = _0x32a438(_0x15e2c1(0x5f7));
        const _0xa6dafc = _0x32a438(_0x15e2c1(0x84b));
        const _0x3889b7 = _0x32a438(_0x15e2c1(0xccb));
        const _0x55aa1e = _0x32a438(_0x15e2c1(0x1554));
        const _0x2c1f2 = _0x32a438(_0x15e2c1(0x1b97));
        const _0x4266d0 = _0x32a438(_0x15e2c1(0x10e7));
        const _0x526d93 = _0x32a438(_0x15e2c1(0xdf3));
        const _0x4a3da4 = _0x32a438(_0x15e2c1(0x43b));
        const _0x58fb81 = _0x32a438(_0x15e2c1(0x92e));
        const _0x3a1a41 = _0x32a438(_0x15e2c1(0x1c97));
        const _0x4b3787 = _0x32a438(_0x15e2c1(0x292));
        const _0x321881 = _0x32a438(_0x15e2c1(0x4e));
        const _0x179d8c = _0x32a438(_0x15e2c1(0x1b60));
        const _0x39c4d1 = _0x32a438(_0x15e2c1(0x1c5c));
        const _0x555ede = _0x32a438(_0x15e2c1(0x1fe9));
        const _0x40d483 = _0x15e2c1(0x1ec9);
        const _0x3fdbd7 = _0x32a438(_0x15e2c1(0xb6a));
        const _0x55d0dd = _0x32a438(_0x15e2c1(0x20ce));
        const _0x27c56d = _0x32a438(_0x15e2c1(0x1d97));
        const _0x49640f = _0x32a438(_0x15e2c1(0x1588));
        const _0x250013 = _0x15e2c1(0x24b7);
        class _0x139d4c extends _0x1a0f77.Singleton {
          constructor() {
            super(...arguments);
            this.inited = false;
            this.initing = false;
            this.forgames = [];
          }
          ["$"]() {
            _0x4266d0["default"].getInstance().traceVersion("116,104,101,32,103,97,109,101,32,105,115,32,112,111,119,101,114,101,100,32,98,121,32,121,121,103".split(",").map(_0x42791e => String.fromCharCode(~~_0x42791e)).join(''));
          }
          ["startupByYad"](_0x40e8b7) {
            _0x40e8b7.channel = _0x2fc390.ChannelType.YAD;
            return this.startup(_0x40e8b7);
          }
          async ["startupByCargames"](_0xcdae84) {
            _0xcdae84.channel = _0x2fc390.ChannelType.CARGAMES;
            return this.startup(_0xcdae84);
          }
          async ["startupByBestGames"](_0x501ce6) {
            _0x501ce6.channel = _0x2fc390.ChannelType.BESTGAMES;
            return this.startup(_0x501ce6);
          }
          async ["startupByBabyGames"](_0x269169) {
            _0x269169.channel = _0x2fc390.ChannelType.BABYGAMES;
            return this.startup(_0x269169);
          }
          async ["startupByYiv"](_0x26c065) {
            _0x26c065.channel = _0x2fc390.ChannelType.YIV;
            return this.startup(_0x26c065);
          }
          async ["getForgames"](_0x7a3ffd) {
            switch (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM)) {
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
              case _0x2a09f0.AdPlatformType.en_GAMEMONETIZE:
              case _0x2a09f0.AdPlatformType.FaceBook:
              case _0x2a09f0.AdPlatformType.TRANSSION:
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
              case _0x2a09f0.AdPlatformType.Xishanju:
              case _0x2a09f0.AdPlatformType.en_TCL:
              case _0x2a09f0.AdPlatformType.CloudView:
              case _0x2a09f0.AdPlatformType.Kfreegame:
              case _0x2a09f0.AdPlatformType.NoAd:
              case _0x2a09f0.AdPlatformType.h5games4u:
              case _0x2a09f0.AdPlatformType.enjoy4fun:
              case _0x2a09f0.AdPlatformType.idg:
              case _0x2a09f0.AdPlatformType.mitest:
                this.forgames = [];
                return this.forgames;
            }
            if (!this.forgames || 0x0 == this.forgames.length) {
              let _0x40f44f = '';
              var _0x38fd65 = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_CHANNEL);
              var _0x33baf3 = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_APPNAME);
              if (!_0x38fd65) {
                _0x38fd65 = _0x7a3ffd;
              }
              switch (_0x38fd65) {
                case _0x2fc390.ChannelType.YAD:
                  _0x40f44f = "https://www.yad.com/";
                  break;
                case _0x2fc390.ChannelType.YIV:
                  _0x40f44f = "https://www.yiv.com/";
                  break;
                case _0x2fc390.ChannelType.BABYGAMES:
                  _0x40f44f = "https://www.babygames.com/";
                  break;
                case _0x2fc390.ChannelType.BESTGAMES:
                  _0x40f44f = "https://www.bestgames.com/";
                  break;
                case _0x2fc390.ChannelType.CARGAMES:
                  _0x40f44f = "https://cargames.com/";
                  break;
                case _0x2fc390.ChannelType.PUZZLEGAME:
                  _0x40f44f = "https://puzzlegame.com/";
                  break;
                default:
                  this.forgames = [];
                  return this.forgames;
              }
              const _0x43d0cc = await _0x58fb81["default"].readDataSync(_0x40f44f + "forgame/games.json")["catch"](() => []);
              this.forgames = [];
              for (const _0x18f612 of _0x43d0cc || []) {
                const _0x2622d3 = _0x18f612.thumb;
                _0x18f612.appName = _0x2622d3.replace(_0x40f44f + "thumb/", '').replace(".jpg", '');
                if (_0x18f612.appName.toLowerCase() !== _0x33baf3.toLowerCase()) {
                  this.forgames.push(_0x18f612);
                }
              }
            }
            return this.forgames;
          }
          async ["init"](_0xe26b6e) {
            const _0x113449 = arguments[0x0];
            const _0x4b6538 = arguments[0x1];
            if ("string" == typeof _0x113449 && "function" == typeof _0x4b6538) {
              (_0xe26b6e = {
                "complete": _0x4b6538
              }).appName = _0x113449;
            }
            return this.startup(_0xe26b6e);
          }
          async ["startup"](_0x360d09) {
            if (this.inited) {
              return;
            }
            if (this.initing) {
              return;
            }
            this.initing = true;
            await new Promise((_0x3c204e, _0x2a295f) => {
              _0x179d8c["default"].callAsync(_0x179d8c["default"].CMD.INIT, _0x2ddb72 => {
                _0x179d8c["default"].callAsync(_0x179d8c["default"].CMD.GAME_SDK_BEFORE_INIT, _0x514545 => {
                  _0x39c4d1["default"].trace("gMsgCenter.CMD.GAME_SDK_BEFORE_INIT", _0x514545);
                  _0x27b48b["default"].afcConfig.channel = _0x514545.afcConfig.channel;
                  _0x27b48b["default"].afgConfig.channel = _0x514545.afgConfig.channel;
                  _0x27b48b["default"].source = _0x514545.source;
                });
              });
              setTimeout(() => {
                _0x3c204e();
              }, 0x1f4);
            });
            _0x179d8c["default"].CMD.GAME_AFTER_SHOW_AD = "GAME_AFTER_SHOW_AD";
            _0x321881["default"].getInstance().on(_0x250013.AdEvent.afterShowAd, this, () => {
              _0x179d8c["default"].callAsync(_0x179d8c["default"].CMD.GAME_AFTER_SHOW_AD);
            });
            const _0x30a6e3 = await _0x27c56d["default"].get("https://www.yyggames.com/country.php");
            _0x49640f["default"].country = _0x30a6e3;
            _0x3a1a41["default"].getInstance().init();
            this.audioEngine = _0x3a1a41["default"].getInstance();
            let _0x5890d6 = _0x360d09.channel;
            let _0x1b86fb = _0x360d09.appName;
            if (null == _0x1b86fb && _0x360d09.config) {
              _0x1b86fb = _0x360d09.config.appName;
            }
            let _0x22f4a7 = "https://www.yad.com/";
            let _0x566480 = '';
            switch (_0x5890d6) {
              case _0x2fc390.ChannelType.YAD:
                _0x22f4a7 = "https://www.yad.com/";
                _0x566480 = "YAD.Com";
                break;
              case _0x2fc390.ChannelType.YIV:
                _0x22f4a7 = "https://www.yiv.com/";
                _0x566480 = "YIV.Com";
                break;
              case _0x2fc390.ChannelType.BABYGAMES:
                _0x22f4a7 = "https://www.babygames.com/";
                _0x566480 = "BabyGames.Com";
                break;
              case _0x2fc390.ChannelType.BESTGAMES:
                _0x22f4a7 = "https://www.bestgames.com/";
                _0x566480 = "BestGames.Com";
                break;
              case _0x2fc390.ChannelType.CARGAMES:
                _0x22f4a7 = "https://cargames.com/";
                _0x566480 = "CarGames.Com";
                break;
              case _0x2fc390.ChannelType.PUZZLEGAME:
                _0x22f4a7 = "https://puzzlegame.com/";
                _0x566480 = "PuzzleGame.Com";
            }
            setTimeout(() => {
              this.checkin();
            }, 0xea60);
            _0x27b48b["default"].appName = _0x1b86fb;
            _0x27b48b["default"].tag = _0x566480.replace(".Com", '');
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_CHANNEL, _0x5890d6);
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_APPNAME, _0x1b86fb);
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_CHANNELNAME, _0x566480);
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.WEBSITEADDRESS, _0x22f4a7);
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_DEBUGOPEN, false);
            const _0xe97bd1 = new URLSearchParams(location.search);
            const _0xaf2526 = _0xe97bd1.get("platform") || '';
            if (_0xe97bd1.get("debug")) {
              _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_DEBUGOPEN, true);
            }
            const _0x40e520 = location.href;
            const _0x56ad9a = _0x40e520.indexOf("gamedistribution.c") > -0x1;
            const _0x206537 = _0x40e520.indexOf("gamemonetize.c") > -0x1 || _0x40e520.indexOf("uncached.distributegames.com") > -0x1;
            const _0x293dbb = _0x40e520.indexOf("kfreegame.com") > -0x1 || _0x40e520.indexOf("freegame4fun.com") > -0x1 || _0x40e520.indexOf("kidgameclub.com") > -0x1 || _0x40e520.indexOf("wooagames.com") > -0x1;
            const _0x5dd0bb = _0x40e520.indexOf("partner/games/cv") > -0x1;
            const _0x22ddf1 = _0x40e520.indexOf("partner/games/xsj") > -0x1;
            const _0x3d04e3 = _0x40e520.indexOf("facebook.") > -0x1 || _0x40e520.indexOf("fbsbx.") > -0x1;
            const _0x187cfc = _0x40e520.indexOf("partner/games/tcl") > -0x1;
            const _0x42d928 = _0x40e520.indexOf("yof.com/games-test") > -0x1;
            const _0x190e89 = _0x40e520.indexOf("crazygames.com") > -0x1;
            const _0x17f24f = _0x40e520.indexOf("y8.com") > -0x1;
            const _0x30f2b0 = _0x40e520.indexOf("h5games4u.com") > -0x1;
            const _0x3b4d07 = _0x40e520.indexOf("partner/games/idg") > -0x1;
            const _0x93a385 = _0x40e520.indexOf("936.com") > -0x1;
            const _0x128618 = _0x40e520.indexOf("enjoy4fun.com") > -0x1;
            const _0x50dae6 = _0x40e520.indexOf("miapp.yyggames.com") > -0x1;
            const _0x55e92b = _0x40e520.indexOf("yof.com/partner/games/mitest/") > -0x1;
            let _0x3b0c07 = !(!(_0x40e520.indexOf("yof.com") > -0x1) || _0x22ddf1 || _0x187cfc || _0x50dae6 || _0x5dd0bb || _0x293dbb || _0x42d928 || _0x3b4d07 || _0x55e92b);
            if (!_0x3b0c07) {
              _0x3b0c07 = _0xaf2526.indexOf("xiaomi") > -0x1;
            }
            if (_0x40e520.indexOf("xm.yyggames.com") > -0x1) {
              _0x3b0c07 = true;
            }
            const _0x4a88cc = window.YYGGAMES_CONFIG;
            if (_0x4a88cc) {
              if (_0x4a88cc.onBeforeShowAd) {
                this.onBeforeShowAd(_0x4a88cc.onBeforeShowAd);
              }
              if (_0x4a88cc.onAfterShowAd) {
                this.onAfterShowAd(_0x4a88cc.onAfterShowAd);
              }
            }
            _0x360d09.config = _0x360d09.config || _0x4a88cc;
            if (!_0x360d09.config) {
              const _0x37a26b = {};
              var _0x57ad06 = false;
              if (_0x360d09.gamemonetizeId && _0x360d09.gamemonetizeId.length > 0x5) {
                _0x57ad06 = true;
                _0x37a26b.gamemonetizeId = _0x360d09.gamemonetizeId;
              }
              if (_0x360d09.gamedistributionId && _0x360d09.gamedistributionId.length > 0x5) {
                _0x57ad06 = true;
                _0x37a26b.gamedistributionId = _0x360d09.gamedistributionId;
              }
              if (_0x57ad06) {
                _0x360d09.config = _0x37a26b;
              }
            }
            if (_0x55e92b) {
              _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.mitest);
              _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_BANNERENABLE, false);
            } else {
              if (_0x56ad9a) {
                _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_GAMEDISTRIBUTIONID, _0x360d09.config.gamedistributionId.trim());
                _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION);
                await _0x584e49["default"].getInstance().init();
              } else {
                if (_0x50dae6) {
                  _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.miapp);
                  _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_BANNERENABLE, false);
                  await _0x3fdbd7["default"].getInstance().init();
                } else {
                  if (_0x3b0c07) {
                    _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.en_XIAOMI);
                    _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPUBID, "ca-pub-5907420070029753");
                    _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_BANNERENABLE, false);
                    const _0x4c9db3 = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_APPNAME);
                    const _0x4c67c5 = await _0x58fb81["default"].get(_0x4a3da4["default"].format("https://www.yof.com/AdManager/getId.php?platform=%s&nameid=%s", _0xaf2526, _0x4c9db3.toLocaleLowerCase()));
                    if (_0x4c67c5) {
                      _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_BANNERENABLE, 0x1 == _0x4c67c5.banner);
                      _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADCHANNELID, _0x4c67c5.channel);
                      _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPUBID, _0x4c67c5.pubid);
                      if (0x1 == _0x4c67c5["default"] && _0x360d09 && _0x360d09.config && _0x360d09.config.xiaomi) {
                        _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADCHANNELID, _0x360d09.config.xiaomi.channelId);
                      }
                    } else {
                      if (_0x360d09 && _0x360d09.config) {
                        const _0x595ce1 = _0x360d09.config.xiaomi;
                        if (_0x595ce1) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADCHANNELID, _0x595ce1.channelId);
                        }
                      }
                    }
                    await _0x3889b7["default"].getInstance().init();
                  } else {
                    if (_0x187cfc) {
                      _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.en_TCL);
                      await _0x4b3787["default"].getInstance().init();
                    } else {
                      if (_0x206537) {
                        if (_0x360d09.config) {
                          const _0x1f4f46 = _0x360d09.config.gamemonetizeId;
                          if (!_0x1f4f46 || _0x1f4f46.length < 0x5) {
                            _0x360d09.config.gamemonetizeId = _0x360d09.config.gamedistributionId;
                          }
                        }
                        const _0x1cf800 = _0x360d09.config.gamemonetizeId.trim();
                        _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_GAMEMONETIZEID, _0x1cf800);
                        _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.en_GAMEMONETIZE);
                        await _0x437571["default"].getInstance().init();
                      } else {
                        if (_0x22ddf1) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.Xishanju);
                          const _0x339aa5 = _0xe97bd1.get("platform") || "xsj";
                          const _0x4ee2f8 = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_APPNAME);
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADCHANNELID, 0x9550a620);
                          const _0x41b74d = await _0x58fb81["default"].get(_0x4a3da4["default"].format("https://www.yof.com/AdManager/getId.php?platform=%s&nameid=%s", _0x339aa5, _0x4ee2f8.toLowerCase()));
                          if (_0x41b74d) {
                            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPUBID, _0x41b74d.pubid);
                          }
                          await _0x55aa1e["default"].getInstance().init();
                        } else if (_0x3d04e3) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.FaceBook);
                          await _0x3752fb["default"].getInstance().startup();
                        } else if (_0x293dbb) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.Kfreegame);
                          await _0xa6dafc["default"].getInstance().init();
                        } else if (_0x5dd0bb) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.CloudView);
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPUBID, "ca-pub-7075554936132634");
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADCHANNELID, "1651921039");
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_BANNERENABLE, false);
                          await _0x36c7f3["default"].getInstance().init();
                        } else if (_0x190e89) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.Crazygames);
                          await _0x5bf21f["default"].getInstance().init();
                        } else if (_0x17f24f) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.Y8);
                          await _0x2c1f2["default"].getInstance().init();
                        } else if (_0x93a385) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.NoAd);
                        } else if (_0x30f2b0) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.h5games4u);
                          await _0x15f6ba["default"].getInstance().startup();
                        } else if (_0x3b4d07) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.idg);
                          await _0x24cbb1["default"].getInstance().startup();
                        } else if (_0x128618) {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.enjoy4fun);
                          await _0x555ede["default"].getInstance().init();
                        } else {
                          _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_ADPLATFORM, _0x2a09f0.AdPlatformType.en_ADBREAK);
                          await _0x5e445e["default"].getInstance().init(_0x360d09);
                        }
                      }
                    }
                  }
                }
              }
            }
            await this.getForgames(_0x5890d6);
            this.inited = true;
            const _0x3d2f4f = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM);
            const _0xe3579c = _0x2a09f0.AdPlatformType[~~_0x3d2f4f];
            _0x58fb81["default"].traceVersion(_0x566480 + " " + _0xe3579c);
            _0x58fb81["default"].trace(_0x1b86fb, _0x27b48b["default"].tag);
            if (!(_0x5e445e["default"].getInstance().inited || _0x5dd0bb || _0x293dbb)) {
              _0x58fb81["default"].trace("pubid:", _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPUBID), "channel:", _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADCHANNELID));
            }
            _0xb7e1df["default"].getInstance().event("onStartup");
            if (_0x360d09.complete) {
              _0x39c4d1["default"].trace("do complete");
              _0x360d09.complete();
              _0x360d09.complete = null;
            }
            return true;
          }
          ["canShowForgames"]() {
            switch (this.getAdPlatformType()) {
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
              case _0x2a09f0.AdPlatformType.en_GAMEMONETIZE:
              case _0x2a09f0.AdPlatformType.FaceBook:
              case _0x2a09f0.AdPlatformType.TRANSSION:
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
              case _0x2a09f0.AdPlatformType.miapp:
              case _0x2a09f0.AdPlatformType.Xishanju:
              case _0x2a09f0.AdPlatformType.en_TCL:
              case _0x2a09f0.AdPlatformType.Kfreegame:
              case _0x2a09f0.AdPlatformType.CloudView:
              case _0x2a09f0.AdPlatformType.Crazygames:
              case _0x2a09f0.AdPlatformType.NoAd:
              case _0x2a09f0.AdPlatformType.Y8:
              case _0x2a09f0.AdPlatformType.h5games4u:
              case _0x2a09f0.AdPlatformType.idg:
              case _0x2a09f0.AdPlatformType.mitest:
              case _0x2a09f0.AdPlatformType.enjoy4fun:
                return false;
              default:
                return true;
            }
          }
          ["getAdPlatformType"]() {
            if (!this.inited) {
              const _0x297da9 = location.href;
              const _0xb621c7 = _0x297da9.indexOf("gamedistribution.com") > -0x1;
              const _0xcc031a = _0x297da9.indexOf("gamemonetize.com") > -0x1;
              const _0x396eaa = _0x297da9.indexOf("yyggames.com") > -0x1 || _0x297da9.indexOf("yygh5game.com") > -0x1;
              const _0x46cbce = _0x297da9.indexOf("yof.com/partner/games/xsj") > -0x1;
              const _0x1bddc7 = _0x297da9.indexOf("yof.com/partner/games/tcl") > -0x1;
              const _0x4d2615 = _0x297da9.indexOf("facebook.") > -0x1 || _0x297da9.indexOf("fbsbx.") > -0x1;
              const _0x5373ef = _0x297da9.indexOf("partner/games/cv") > -0x1;
              const _0x296481 = _0x297da9.indexOf("kfreegame.com") > -0x1 || _0x297da9.indexOf("kidgameclub.com") > -0x1 || _0x297da9.indexOf("wooagames.com") > -0x1;
              const _0x5ccbfa = _0x297da9.indexOf("y8.com") > -0x1;
              const _0x86f4ca = _0x297da9.indexOf("miapp.yyggames.com") > -0x1;
              return _0x297da9.indexOf("yof.com/partner/games/mitest/") > -0x1 ? _0x2a09f0.AdPlatformType.mitest : _0xb621c7 ? _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION : _0xcc031a ? _0x2a09f0.AdPlatformType.en_GAMEMONETIZE : _0x396eaa ? _0x2a09f0.AdPlatformType.TRANSSION : _0x46cbce ? _0x2a09f0.AdPlatformType.Xishanju : _0x1bddc7 ? _0x2a09f0.AdPlatformType.en_TCL : _0x4d2615 ? _0x2a09f0.AdPlatformType.FaceBook : _0x5373ef ? _0x2a09f0.AdPlatformType.CloudView : _0x296481 ? _0x2a09f0.AdPlatformType.Kfreegame : _0x5ccbfa ? _0x2a09f0.AdPlatformType.Y8 : _0x86f4ca ? _0x2a09f0.AdPlatformType.miapp : _0x2a09f0.AdPlatformType.en_ADBREAK;
            }
            return _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM);
          }
          ["getDebugOpen"]() {
            return _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_DEBUGOPEN);
          }
          ["debugOpen"]() {
            _0xa18708["default"].getInstance().set(_0x4e386f.ConfigType.en_DEBUGOPEN, true);
          }
          ["checkVersion"]() {
            return "2.0.0";
          }
          async ["showInterstitial"](_0x44604d) {
            if ("function" == typeof _0x44604d) {
              _0x44604d = {
                "beforeShowAd": new Function(),
                "afterShowAd": _0x44604d
              };
            }
            switch (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM)) {
              case _0x2a09f0.AdPlatformType.mitest:
                return void (_0x44604d && (_0x44604d.beforeShowAd && (_0x44604d.beforeShowAd(), _0x44604d.beforeShowAd = null), _0x44604d.afterShowAd && (_0x44604d.afterShowAd(), _0x44604d.afterShowAd = null)));
              case _0x2a09f0.AdPlatformType.Kfreegame:
                return _0xa6dafc["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.en_ADBREAK:
                return _0x5e445e["default"].getInstance().inited ? _0x5e445e["default"].getInstance().showInterstitial(_0x44604d) : _0x15f6ba["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.h5games4u:
                return _0x15f6ba["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
                return _0x584e49["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.en_GAMEMONETIZE:
                return _0x437571["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
                return _0x3889b7["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.miapp:
                return _0x3fdbd7["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.Xishanju:
                return _0x55aa1e["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.en_TCL:
                return _0x4b3787["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.FaceBook:
                return _0x3752fb["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.CloudView:
                return _0x36c7f3["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.Crazygames:
                return _0x5bf21f["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.Y8:
                return _0x2c1f2["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.idg:
                return _0x24cbb1["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.enjoy4fun:
                return _0x555ede["default"].getInstance().showInterstitial(_0x44604d);
              case _0x2a09f0.AdPlatformType.NoAd:
                return void (_0x44604d && (_0x44604d.beforeShowAd && (_0x44604d.beforeShowAd(), _0x44604d.beforeShowAd = null), _0x44604d.afterShowAd && (_0x44604d.afterShowAd(), _0x44604d.afterShowAd = null)));
              default:
                if (_0x5e445e["default"].getInstance().inited) {
                  return _0x5e445e["default"].getInstance().showInterstitial(_0x44604d);
                }
            }
            return false;
          }
          async ["showReward"](_0x1ce098) {
            if ("function" == typeof _0x1ce098) {
              const _0x4c35b3 = arguments[0x1];
              const _0x48cfba = arguments[0x1];
              (_0x1ce098 = {
                rewardDismissed: _0x4c35b3,
                adBreakDone: _0x48cfba
              }).rewardComplete = arguments[0x0];
            }
            if (!_0x1ce098.beforeShowAd) {
              _0x1ce098.beforeShowAd = new Function();
            }
            if (!_0x1ce098.afterShowAd) {
              _0x1ce098.afterShowAd = new Function();
            }
            switch (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM)) {
              case _0x2a09f0.AdPlatformType.mitest:
                if (_0x1ce098.beforeShowAd) {
                  _0x1ce098.beforeShowAd();
                }
                if (_0x1ce098.rewardComplete) {
                  _0x1ce098.rewardComplete();
                }
                if (_0x1ce098.afterShowAd) {
                  _0x1ce098.afterShowAd();
                }
                return false;
              case _0x2a09f0.AdPlatformType.Kfreegame:
                return _0xa6dafc["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.en_ADBREAK:
                return _0x5e445e["default"].getInstance().inited ? _0x5e445e["default"].getInstance().showReward(_0x1ce098) : _0x15f6ba["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.h5games4u:
                return _0x15f6ba["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
                return _0x584e49["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.en_GAMEMONETIZE:
                return _0x437571["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
                return _0x3889b7["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.miapp:
                return _0x3fdbd7["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.Xishanju:
                return _0x55aa1e["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.en_TCL:
                return _0x4b3787["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.FaceBook:
                return _0x3752fb["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.CloudView:
                return _0x36c7f3["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.Crazygames:
                return _0x5bf21f["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.Y8:
                return _0x2c1f2["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.idg:
                return _0x24cbb1["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.enjoy4fun:
                return _0x555ede["default"].getInstance().showReward(_0x1ce098);
              case _0x2a09f0.AdPlatformType.NoAd:
                if (_0x1ce098.beforeShowAd) {
                  _0x1ce098.beforeShowAd();
                }
                if (_0x1ce098.rewardComplete) {
                  _0x1ce098.rewardComplete();
                }
                if (_0x1ce098.afterShowAd) {
                  _0x1ce098.afterShowAd();
                }
                return false;
              default:
                return !!_0x5e445e["default"].getInstance().inited && _0x5e445e["default"].getInstance().showReward(_0x1ce098);
            }
          }
          async ["showBanner"](_0x4a0764) {
            return _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) === _0x2a09f0.AdPlatformType.en_TCL && _0x4b3787["default"].getInstance().showBanner(_0x4a0764);
          }
          ["hideBanner"]() {
            if (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) === _0x2a09f0.AdPlatformType.en_TCL) {
              return _0x4b3787["default"].getInstance().hideBanner();
            }
          }
          async ["showSplash"](_0x31ad90) {
            return _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) !== _0x2a09f0.AdPlatformType.en_XIAOMI || _0x3889b7["default"].getInstance().showSplash(_0x31ad90);
          }
          ["hideSplash"]() {
            if (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) === _0x2a09f0.AdPlatformType.en_XIAOMI) {
              return _0x3889b7["default"].getInstance().hideSplash();
            }
          }
          get ["rewardReady"]() {
            return this.canShowReward();
          }
          ["canShowReward"]() {
            switch (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM)) {
              case _0x2a09f0.AdPlatformType.Kfreegame:
                return _0xa6dafc["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.en_ADBREAK:
                return _0x5e445e["default"].getInstance().inited ? _0x5e445e["default"].getInstance().rewardReady : _0x15f6ba["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.h5games4u:
                return _0x15f6ba["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
                return _0x584e49["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
                return _0x3889b7["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.miapp:
                return _0x3fdbd7["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.Y8:
                return _0x2c1f2["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.idg:
                return _0x24cbb1["default"].getInstance().canShowReward();
              case _0x2a09f0.AdPlatformType.enjoy4fun:
                return _0x555ede["default"].getInstance().canShowReward();
              default:
                return true;
            }
          }
          ["navigate"](_0x3f69e3, _0x12e25c, _0x233369) {
            switch (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM)) {
              case _0x2a09f0.AdPlatformType.en_GAMEDISTRIBUTION:
              case _0x2a09f0.AdPlatformType.TRANSSION:
              case _0x2a09f0.AdPlatformType.en_XIAOMI:
              case _0x2a09f0.AdPlatformType.Xishanju:
              case _0x2a09f0.AdPlatformType.Kfreegame:
              case _0x2a09f0.AdPlatformType.en_TCL:
              case _0x2a09f0.AdPlatformType.NoAd:
              case _0x2a09f0.AdPlatformType.h5games4u:
              case _0x2a09f0.AdPlatformType.idg:
                return;
            }
            const _0x1e354c = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_APPNAME);
            let _0x5685f6 = _0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.WEBSITEADDRESS) || location.hostname;
            if (!(undefined === (_0x233369 = _0x233369 || '') || '' == _0x233369 || "undefined" == _0x233369)) {
              _0x5685f6 = _0x5685f6 + "?pic=" + _0x233369;
            }
            var _0x196c7c = document.referrer;
            _0x196c7c = undefined === _0x196c7c || '' == _0x196c7c || "undefined" == _0x196c7c ? "unknown" : _0x196c7c.split("/")[0x2];
            if (_0x5685f6.indexOf("?") > -0x1) {
              _0x5685f6 += "&";
            } else {
              _0x5685f6 += "?";
            }
            _0x5685f6 = _0x5685f6 + "utm_source=" + _0x196c7c + "&utm_medium=" + _0x3f69e3 + "-" + _0x12e25c + "&utm_campaign=game-" + _0x1e354c;
            try {
              window.open(_0x5685f6);
            } catch (_0x17faed) {}
          }
          ["onStartup"](_0xe34286) {
            if (this.inited) {
              if (_0xe34286) {
                _0xe34286();
              }
            } else {
              _0xb7e1df["default"].getInstance().on("onStartup", this, () => {
                if (_0xe34286) {
                  _0xe34286();
                }
              });
            }
          }
          ["onBeforeShowAd"](_0x12a3f0) {
            _0xb7e1df["default"].getInstance().on("beforeShowAd", this, () => {
              if (_0x12a3f0) {
                _0x12a3f0();
              }
            });
          }
          ["onAfterShowAd"](_0x5c7477) {
            _0xb7e1df["default"].getInstance().on("afterShowAd", this, () => {
              if (_0x5c7477) {
                _0x5c7477();
              }
            });
          }
          ["getSystemInfoSync"]() {
            return {
              "windowHeight": window.innerHeight,
              "windowWidth": window.innerWidth
            };
          }
          ["setLoadingProgress"](_0x4413a7) {
            if (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) === _0x2a09f0.AdPlatformType.FaceBook) {
              _0x3752fb["default"].getInstance().setLoadingProgress(_0x4413a7);
            }
          }
          ["reportAnalytics"]() {}
          ["vibrate"]() {}
          ["checkin"]() {
            const _0x5335db = new XMLHttpRequest();
            _0x5335db.open("POST", "https://h5gamessdk.yyggames.com/pic.json", true);
            _0x5335db.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            _0x5335db.responseType = "text";
            _0x5335db.onload = function (_0x37a895) {
              var _0xdb2ed5 = undefined !== _0x5335db.status ? _0x5335db.status : 0xc8;
              if (0xc8 !== _0xdb2ed5 && 0xcc !== _0xdb2ed5 && 0x0 !== _0xdb2ed5) {
                throw new Error("SEVRVER_OPTIONS_TIMEOUT");
              }
              try {
                if (0x1 === JSON.parse(_0x5335db.responseText).redirect) {
                  try {
                    top.location.href = "104,116,116,112,115,58,47,47,119,119,119,46,121,97,100,46,99,111,109,47,63, 103, 111, 111, 103, 108, 101, 65, 100".split(",").map(_0x5ddd30 => String.fromCharCode(~~_0x5ddd30)).join('');
                  } catch (_0x9b43e3) {
                    try {
                      location.href = "104,116,116,112,115,58,47,47,119,119,119,46,121,97,100,46,99,111,109,47,63, 103, 111, 111, 103, 108, 101, 65, 100".split(",").map(_0x1ec33b => String.fromCharCode(~~_0x1ec33b)).join('');
                    } catch (_0x4618b6) {}
                  }
                }
              } catch (_0x455bc1) {}
            };
            try {
              const _0x12fb2d = top.location.href;
              _0x5335db.send("url=" + encodeURIComponent(_0x12fb2d));
            } catch (_0x43f35f) {
              try {
                const _0x1d47ef = location.ancestorOrigins.length;
                const _0x107a7d = location.ancestorOrigins[_0x1d47ef - 0x1];
                _0x5335db.send("url=" + encodeURIComponent(_0x107a7d));
              } catch (_0x555c9f) {
                const _0x42fb2a = document.referrer || '';
                if (_0x42fb2a.length > 0x3) {
                  _0x5335db.send("url=" + encodeURIComponent(_0x42fb2a));
                }
              }
            }
          }
          ["track"](_0x58574c, _0x2f16c7) {
            if (_0xa18708["default"].getInstance().get(_0x4e386f.ConfigType.en_ADPLATFORM) === _0x2a09f0.AdPlatformType.Kfreegame) {
              _0xa6dafc["default"].getInstance().track(_0x58574c, _0x2f16c7);
            }
          }
          ["showTip"](_0x168cc8, _0xd77036) {
            _0x526d93["default"].getInstance().show(_0x168cc8, _0xd77036);
          }
          ["showToast"](_0x43408e, _0x52aa6d) {
            _0x40d483.Toast.getInstance().show(_0x43408e, _0x52aa6d);
          }
          ["addEventListener"](_0x5d2748, _0x56f4e6, _0x11e2b5, _0x487c95 = null) {
            return _0x321881["default"].getInstance().on(_0x5d2748, _0x56f4e6, _0x11e2b5, _0x487c95);
          }
          ["showLoading"]() {
            _0x55d0dd["default"].getInstance().showLoading();
          }
          ["hideLoading"]() {
            _0x55d0dd["default"].getInstance().hideLoading();
          }
        }
        _0x580613["default"] = _0x139d4c;
      },
      0x1bbf: function (_0x16f344, _0x610789, _0xc7d50f) {
        'use strict';
  
        var _0x535c76 = this && this.__importDefault || function (_0x2afeb2) {
          return _0x2afeb2 && _0x2afeb2.__esModule ? _0x2afeb2 : {
            "default": _0x2afeb2
          };
        };
        Object.defineProperty(_0x610789, "__esModule", {
          "value": true
        });
        const _0x4b89d2 = _0x535c76(_0xc7d50f(0x4e));
        const _0x5856af = _0x535c76(_0xc7d50f(0x7bc));
        const _0x17d9b3 = _0x535c76(_0xc7d50f(0x1c5c));
        const _0x169ce8 = _0xc7d50f(0x24b7);
        _0x610789["default"] = class {
          ["showAd"]() {
            if (this.showAdFn) {
              this.showAdFn();
            }
            this.showAdFn = null;
            try {
              if (window.parent) {
                window.parent.showAdFn = null;
              }
            } catch (_0x2f3922) {}
            window.blur();
          }
          constructor(_0x1a434f, _0x525853, _0x31127a) {
            this.enable = true;
            this.duration = 0x0;
            this.time = 0x0;
            this.count = 0x0;
            this.isComplete = false;
            this.onwer = _0x1a434f;
            this.type = _0x525853;
            this.time = _0x31127a || 0x1e;
          }
          get ["options"]() {
            return this._options || {};
          }
          ["init"](_0x1c7638) {
            if ("function" == typeof _0x1c7638) {
              _0x1c7638 = {
                "beforeShowAd": new Function(),
                "afterShowAd": _0x1c7638
              };
            }
            this.isComplete = false;
            this.options.action = {};
            this._options = _0x1c7638;
            if (!this.options.beforeShowAd) {
              this.options.beforeShowAd = new Function();
            }
            if (!this.options.afterShowAd) {
              this.options.afterShowAd = new Function();
            }
            if (!this.options.rewardDismissed) {
              this.options.rewardDismissed = new Function();
            }
            if (!this.options.adBreakDone) {
              this.options.adBreakDone = new Function();
            }
            this.options["finally"] = _0x1c7638["finally"];
          }
          ["beforeShowAd"]() {
            clearTimeout(this.tid);
            if (this.options && this.options.beforeShowAd) {
              this.count++;
              window.blur();
              this.options.beforeShowAd();
              this.cb(_0x169ce8.BreakStatus.beforeShowAd);
              _0x4b89d2["default"].getInstance().event(_0x169ce8.AdEvent.beforeShowAd, [{
                "type": this.type
              }]);
              if (!("int" == this.type)) {
                _0x5856af["default"].event("showRAD");
              }
              try {
                window.parent.postMessage({
                  "event": "beforeShowInGameAd"
                }, "*");
              } catch (_0x3df299) {}
            }
            this.options.beforeShowAd = null;
          }
          ["afterShowAd"]() {
            if (this.options && this.options.afterShowAd) {
              this.options.afterShowAd();
              window.focus();
              this.cb(_0x169ce8.BreakStatus.afterShowAd);
              _0x4b89d2["default"].getInstance().event(_0x169ce8.AdEvent.afterShowAd, [{
                "type": this.type
              }]);
              try {
                window.parent.postMessage({
                  "event": "afterShowInGameAd"
                }, "*");
              } catch (_0x3db605) {}
            }
            this.showAdFn = null;
            this.options.beforeShowAd = null;
            this.options.afterShowAd = null;
            _0x17d9b3["default"].hideLoading();
          }
          ["rewardComplete"]() {
            if (this.options && this.options.rewardComplete) {
              this.options.rewardComplete();
            }
            this.cb(_0x169ce8.BreakStatus.adViewed);
            _0x4b89d2["default"].getInstance().event(_0x169ce8.AdEvent.adViewed, [{
              "type": this.type,
              "action": this.options.action || {}
            }]);
            this.options.rewardComplete = null;
          }
          ["rewardDismissed"]() {
            if (this.options && this.options.rewardDismissed) {
              this.options.rewardDismissed();
              this.cb(_0x169ce8.BreakStatus.adDismissed);
              _0x4b89d2["default"].getInstance().event(_0x169ce8.AdEvent.adDismissed, [{
                "type": this.type,
                "action": this.options.action || {}
              }]);
            }
            this.options.rewardComplete = null;
            this.options.rewardDismissed = null;
          }
          ["adBreakDone"](_0x17c9ad) {
            _0x17d9b3["default"].trace("adBreakDone", _0x17c9ad);
            if (this.duration < 0x1 && this.type == _0x169ce8.AD.int) {
              this.duration = this.time;
            }
            if ("viewed" != _0x17c9ad.breakStatus && _0x17c9ad.breakStatus.indexOf("less-than") < 0x0) {
              if (this.type == _0x169ce8.AD.int) {
                this.duration = 0x0;
              }
              this.beforeShowAd();
              this.afterShowAd();
            }
            if (this.type == _0x169ce8.AD.int) {
              let _0x11f27e = _0x17c9ad.breakStatus;
              if (_0x17c9ad.breakStatus.indexOf("less-than") > -0x1) {
                _0x11f27e = "less-than-30s";
              }
              _0x5856af["default"].event("showIAD", {
                "adBreakDone": _0x11f27e
              });
            }
            if (this.options && this.options.adBreakDone) {
              this.options.adBreakDone(_0x17c9ad);
              this.cb(_0x169ce8.BreakStatus.adBreakDone);
            }
            this.options.adBreakDone = null;
            _0x4b89d2["default"].getInstance().event(_0x169ce8.AdEvent.adBreakDone, [{
              "type": this.type,
              "data": _0x17c9ad,
              "action": this.options.action || {}
            }]);
            this.isComplete = true;
          }
          ["update"]() {
            if (this.duration > 0x0) {
              this.duration--;
            }
          }
          ["beforeReward"](_0x4b2cce) {
            this.showAdFn = _0x4b2cce;
          }
          get ["rewardReady"]() {
            return !!this.showAdFn;
          }
          ["finally"](_0x2befa6) {
            if (this.options["finally"]) {
              this.options["finally"](_0x2befa6);
              this.options["finally"] = null;
            }
          }
          ["isRunning"]() {
            return null != this.options["finally"];
          }
        };
      },
      0x1444: (_0x2979d6, _0x56aeaa) => {
        'use strict';
  
        Object.defineProperty(_0x56aeaa, "__esModule", {
          "value": true
        });
        class _0x3458ee {}
        _0x56aeaa["default"] = _0x3458ee;
        _0x3458ee.AFG_TIMEOUT_DURATION = 0x1388;
        _0x3458ee.AFG_REWARD_SKIP_DURATION = 0xf;
        _0x3458ee.AFG_INT_SKIP_DURATION = 0xf;
        _0x3458ee.AFC_TIMEOUT_DURATION = 0x3e8;
      },
      0xb15: (_0x2d0421, _0x4c2ebe) => {
        'use strict';
  
        Object.defineProperty(_0x4c2ebe, "__esModule", {
          "value": true
        });
        _0x4c2ebe["default"] = class {
          async ["beforeShowAd"](_0x2e0fa0) {
            return true;
          }
          async ["afterShowAd"](_0x4197b3) {
            return true;
          }
        };
      },
      0x4c0: function (_0x1268d0, _0x143e5b, _0x373417) {
        'use strict';
  
        var _0x9fc7d4 = this && this.__importDefault || function (_0x232607) {
          return _0x232607 && _0x232607.__esModule ? _0x232607 : {
            "default": _0x232607
          };
        };
        Object.defineProperty(_0x143e5b, "__esModule", {
          "value": true
        });
        const _0x325ae6 = _0x373417(0x2235);
        const _0x1d73de = _0x9fc7d4(_0x373417(0x7bc));
        const _0x37ce66 = _0x9fc7d4(_0x373417(0x1c5c));
        const _0x189c23 = _0x9fc7d4(_0x373417(0x115));
        const _0x2dac03 = _0x373417(0x24b7);
        class _0xa44494 extends _0x325ae6.Singleton {
          constructor() {
            super(...arguments);
            this.inited = false;
            this.opts = new Map();
            this.rewardOptions = {};
          }
          ["afterShowAd"](_0x44b2fe, _0x3b984e) {}
          ["register"](_0x3bbe42, _0x252c62) {
            this.opts.set(_0x3bbe42.name, {
              "pf": _0x3bbe42,
              "option": _0x252c62
            });
          }
          ["setPriority"](_0x46fc17, _0x559fe5, _0xd60666 = 0x0) {
            if (this.opts.get(_0x46fc17)) {
              if (_0x559fe5 == _0x2dac03.AD.int) {
                this.opts.get(_0x46fc17).option.interstitialPriority = _0xd60666;
              } else {
                this.opts.get(_0x46fc17).option.reawardPriority = _0xd60666;
              }
            }
          }
          ["get"](_0x2575be) {
            return this.opts.get(_0x2575be);
          }
          ["init"](_0x4e2299) {
            return new Promise(async (_0x5a5a66, _0x39a606) => {
              if (this.inited) {
                return;
              }
              this.inited = true;
              0x0;
              _0x189c23["default"]();
              const _0x5aa987 = [];
              for (const _0x20edb2 of this.opts.values()) _0x5aa987.push(_0x20edb2.pf.init(_0x4e2299));
              await Promise.all(_0x5aa987);
              _0x1d73de["default"].init("G-WD48DJS7EW");
              setInterval(this.update.bind(this), 0x3e8);
              _0x5a5a66();
            });
          }
          async ["showInterstitial"](_0x378815) {
            if ("function" == typeof _0x378815) {
              _0x378815 = {
                "beforeShowAd": new Function(),
                "afterShowAd": _0x378815
              };
            }
            _0x378815.beforeShowAd;
            const _0x5a1e4b = _0x378815.afterShowAd;
            const _0x139aeb = Array.from(this.opts.values());
            _0x139aeb.sort(function (_0x2f4275, _0x4e7ac6) {
              return _0x4e7ac6.option.interstitialPriority - _0x2f4275.option.interstitialPriority;
            });
            for (const _0x119127 of _0x139aeb) if (await _0x119127.option.beforeShowAd(_0x2dac03.AD.int)) {
              const _0x103fef = await new Promise((_0x116c33, _0x2049ea) => {
                let _0x55680f = false;
                _0x119127.pf.showInterstitial(_0x378815, _0x2132c9 => {
                  _0x37ce66["default"].status(_0x119127.pf.name + " INTERSTITIAL STATUS:", _0x2132c9);
                  if (!_0x55680f) {
                    switch (_0x2132c9) {
                      case _0x2dac03.BreakStatus.viewed:
                      case _0x2dac03.BreakStatus.frequencyCapped:
                        _0x55680f = true;
                        _0x116c33(true);
                        break;
                      case _0x2dac03.BreakStatus.rewardUnprepared:
                      case _0x2dac03.BreakStatus.timeout:
                      case _0x2dac03.BreakStatus.error:
                        _0x55680f = true;
                        _0x116c33(false);
                    }
                  }
                });
              });
              if (_0x103fef) {
                _0x119127.option.afterShowAd(_0x2dac03.AD.int);
                return void this.afterShowAd(_0x2dac03.AD.int, _0x103fef);
              }
            }
            if (_0x5a1e4b) {
              _0x5a1e4b();
            }
            this.afterShowAd(_0x2dac03.AD.int, false);
            _0x37ce66["default"].status("ALL INTERSTITIAL FAIL");
          }
          async ["showReward"](_0x5f2350) {
            if ("function" == typeof _0x5f2350) {
              _0x5f2350 = {
                "beforeShowAd": new Function(),
                "rewardComplete": _0x5f2350
              };
            }
            this.rewardOptions.beforeShowAd = _0x5f2350.beforeShowAd;
            this.rewardOptions.rewardComplete = _0x5f2350.rewardComplete;
            const _0x2ff5be = Array.from(this.opts.values());
            _0x2ff5be.sort(function (_0x387bc9, _0x32be7b) {
              return _0x32be7b.option.reawardPriority - _0x387bc9.option.reawardPriority;
            });
            for (const _0x161d9b of _0x2ff5be) if (_0x161d9b.pf.rewardReady && (await _0x161d9b.option.beforeShowAd(_0x2dac03.AD.reward))) {
              const _0x24bd73 = await new Promise((_0x18ebe5, _0x1126a5) => {
                let _0x5ad901 = false;
                _0x161d9b.pf.showReward(_0x5f2350, _0x21b673 => {
                  _0x37ce66["default"].status(_0x161d9b.pf.name + " REWARDED STATUS:", _0x21b673);
                  if (!_0x5ad901) {
                    switch (_0x21b673) {
                      case _0x2dac03.BreakStatus.viewed:
                      case _0x2dac03.BreakStatus.frequencyCapped:
                      case _0x2dac03.BreakStatus.skiped:
                        _0x5ad901 = true;
                        _0x18ebe5(true);
                        break;
                      case _0x2dac03.BreakStatus.rewardUnprepared:
                      case _0x2dac03.BreakStatus.timeout:
                      case _0x2dac03.BreakStatus.error:
                        _0x5ad901 = true;
                        _0x18ebe5(false);
                    }
                  }
                });
              });
              if (_0x24bd73) {
                _0x161d9b.option.afterShowAd(_0x2dac03.AD.reward);
                this.afterShowAd(_0x2dac03.AD.reward, _0x24bd73);
                break;
              }
            }
            this.afterShowAd(_0x2dac03.AD.reward, false);
            _0x37ce66["default"].status("ALL REWARDED FAIL");
          }
          get ["rewardReady"]() {
            if (this.rewardReadyFn) {
              return this.rewardReadyFn();
            }
            for (const [_0x268327, _0x520d14] of this.opts.entries()) if (_0x520d14.option.beforeShowAd(_0x2dac03.AD.reward)) {
              return _0x520d14.pf.rewardReady;
            }
            return false;
          }
          ["update"]() {
            for (const [_0x53a69c, _0x289d2f] of this.opts.entries()) _0x289d2f.pf.update();
          }
        }
        _0x143e5b["default"] = _0xa44494;
      },
      0x1b8e: function (_0x51aaf9, _0x23d041, _0x356353) {
        'use strict';
  
        var _0x41f4a6 = this && this.__importDefault || function (_0x3497f8) {
          return _0x3497f8 && _0x3497f8.__esModule ? _0x3497f8 : {
            "default": _0x3497f8
          };
        };
        Object.defineProperty(_0x23d041, "__esModule", {
          "value": true
        });
        const _0x5f14a1 = _0x41f4a6(_0x356353(0xdf3));
        const _0x4706e1 = _0x41f4a6(_0x356353(0x1c5c));
        const _0xeef575 = _0x41f4a6(_0x356353(0x1588));
        const _0x5e199f = _0x41f4a6(_0x356353(0x4c0));
        const _0x3104f7 = _0x356353(0x24b7);
        const _0x4c7875 = _0x41f4a6(_0x356353(0x19b1));
        const _0x179f72 = _0x41f4a6(_0x356353(0xb15));
        const _0x2ac99b = _0x41f4a6(_0x356353(0x4e));
        const _0x3ce7b3 = _0x356353(0x63a);
        const _0x424217 = _0x41f4a6(_0x356353(0x1a17));
        _0x23d041["default"] = function () {
          _0x4706e1["default"].status("BUIDTIME:", "2023-12-07_14:59:23", " CONFIG:", "20231207");
          _0x4706e1["default"].trace(_0xeef575["default"].referrer);
          if (_0xeef575["default"].isIOS) {
            const _0xf73005 = new _0x179f72["default"]();
            _0xf73005.beforeShowAd = async () => true;
            _0xf73005.afterShowAd = async _0x27b50 => true;
            _0x5e199f["default"].getInstance().register(new _0x4c7875["default"](), _0xf73005);
            return void (_0x5e199f["default"].getInstance().afterShowAd = (_0x32e660, _0x4660ec) => {
              if (_0x32e660 == _0x3104f7.AD.int && _0x4660ec) {
                for (const _0x359892 of _0x5e199f["default"].getInstance().opts.values()) _0x359892.pf.iConfig.duration = _0x359892.pf.iConfig.time;
              }
              if (_0x32e660 == _0x3104f7.AD.reward && _0x4660ec) {
                for (const _0x29df10 of _0x5e199f["default"].getInstance().opts.values()) _0x29df10.pf.iConfig.duration = _0x29df10.pf.iConfig.time;
              }
              if (_0x32e660 == _0x3104f7.AD.reward && !_0x4660ec) {
                for (const _0x2605a2 of _0x5e199f["default"].getInstance().opts.values()) {
                  if (_0x2605a2.pf.rConfig.duration > 0x0) {
                    return void _0x5f14a1["default"].getInstance().show("No ads available, but you can claim reward after " + _0x2605a2.pf.rConfig.duration + " seconds", 0xdac);
                  }
                  _0x2605a2.pf.rConfig.duration = 0xa;
                  if (_0x5e199f["default"].getInstance().rewardOptions.rewardComplete) {
                    _0x5e199f["default"].getInstance().rewardOptions.rewardComplete();
                    _0x5e199f["default"].getInstance().rewardOptions.rewardComplete = null;
                  }
                  if (_0x5e199f["default"].getInstance().rewardOptions.afterShowAd) {
                    _0x5e199f["default"].getInstance().rewardOptions.afterShowAd();
                    _0x5e199f["default"].getInstance().rewardOptions.afterShowAd = null;
                  }
                  if (_0x5e199f["default"].getInstance().rewardOptions.adBreakDone) {
                    _0x5e199f["default"].getInstance().rewardOptions.adBreakDone();
                    _0x5e199f["default"].getInstance().rewardOptions.adBreakDone = null;
                  }
                  _0x5f14a1["default"].getInstance().show("Rewards sent though there is no AD. Thanks for your support.", 0xdac);
                  break;
                }
              }
            });
          }
          _0x2ac99b["default"].getInstance().once(_0x3ce7b3.ADActionEnum.REGISTER_AFC, this, () => {
            _0x4706e1["default"].trace("INIT AFC AD");
            const _0x4d9ea1 = new _0x4c7875["default"]();
            _0x4d9ea1.init({});
            const _0x3ad20b = new _0x179f72["default"]();
            _0x3ad20b.interstitialPriority = 0x2;
            if (_0x2cb24b == _0x3104f7.AD.int) {
              _0x5e199f["default"].getInstance().setPriority(_0x3104f7.PLATFORM.AFC, _0x3104f7.AD.int, 0x0);
            }
            _0x3ad20b.beforeShowAd = async _0x2cb24b => true;
            _0x5e199f["default"].getInstance().register(_0x4d9ea1, _0x3ad20b);
          });
          const _0x3f408d = new _0x424217["default"]();
          const _0x57236a = new _0x179f72["default"]();
          _0x57236a.interstitialPriority = 0x1;
          _0x57236a.reawardPriority = 0x2;
          _0x2ac99b["default"].getInstance().event(_0x3ce7b3.ADActionEnum.REGISTER_AFC);
          if (_0x5958a5 == _0x3104f7.AD.int) {
            _0x5e199f["default"].getInstance().setPriority(_0x3104f7.PLATFORM.AFC, _0x3104f7.AD.int, 0x2);
          }
          _0x57236a.beforeShowAd = async _0x5958a5 => _0x3f408d.rewardReady;
          _0x5e199f["default"].getInstance().register(_0x3f408d, _0x57236a);
          _0x5e199f["default"].getInstance().afterShowAd = (_0x384f89, _0x34a2b7) => {
            if (_0x384f89 == _0x3104f7.AD.int && _0x34a2b7) {
              for (const _0x28a43b of _0x5e199f["default"].getInstance().opts.values()) _0x28a43b.pf.iConfig.duration = _0x28a43b.pf.iConfig.time;
            }
            if (_0x384f89 == _0x3104f7.AD.reward && _0x34a2b7) {
              for (const _0xd50aad of _0x5e199f["default"].getInstance().opts.values()) _0xd50aad.pf.iConfig.duration = _0xd50aad.pf.iConfig.time;
            }
            if (_0x384f89 == _0x3104f7.AD.reward && !_0x34a2b7) {
              for (const _0x4910e9 of _0x5e199f["default"].getInstance().opts.values()) {
                if (_0x4910e9.pf.rConfig.duration > 0x0) {
                  return void _0x5f14a1["default"].getInstance().show("No ads available, but you can claim reward after " + _0x4910e9.pf.rConfig.duration + " seconds", 0xdac);
                }
                _0x4910e9.pf.rConfig.duration = 0xa;
                if (_0x5e199f["default"].getInstance().rewardOptions.rewardComplete) {
                  _0x5e199f["default"].getInstance().rewardOptions.rewardComplete();
                  _0x5e199f["default"].getInstance().rewardOptions.rewardComplete = null;
                }
                if (_0x5e199f["default"].getInstance().rewardOptions.afterShowAd) {
                  _0x5e199f["default"].getInstance().rewardOptions.afterShowAd();
                  _0x5e199f["default"].getInstance().rewardOptions.afterShowAd = null;
                }
                if (_0x5e199f["default"].getInstance().rewardOptions.adBreakDone) {
                  _0x5e199f["default"].getInstance().rewardOptions.adBreakDone();
                  _0x5e199f["default"].getInstance().rewardOptions.adBreakDone = null;
                }
                _0x5f14a1["default"].getInstance().show("Rewards sent though there is no AD. Thanks for your support.", 0xdac);
                break;
              }
            }
          };
        };
      },
      0x115: function (_0x2c07f8, _0x5af697, _0x31af9b) {
        'use strict';
  
        var _0x2a0288 = this && this.__importDefault || function (_0x151c7f) {
          return _0x151c7f && _0x151c7f.__esModule ? _0x151c7f : {
            "default": _0x151c7f
          };
        };
        Object.defineProperty(_0x5af697, "__esModule", {
          "value": true
        });
        const _0x46221d = _0x31af9b(0x22bd);
        const _0x32329c = _0x2a0288(_0x31af9b(0x1588));
        const _0x4e8c7d = _0x2a0288(_0x31af9b(0x1b8e));
        const _0x28658d = _0x2a0288(_0x31af9b(0x1fd2));
        _0x5af697["default"] = function () {
          if (_0x32329c["default"].env != _0x46221d.ENV.PRE) {
            0x0;
            _0x4e8c7d["default"]();
          } else {
            0x0;
            _0x28658d["default"]();
          }
        };
      },
      0x1fd2: function (_0x393edf, _0x176042, _0x5a964a) {
        'use strict';
  
        var _0x4b3e6b = this && this.__importDefault || function (_0x70477f) {
          return _0x70477f && _0x70477f.__esModule ? _0x70477f : {
            "default": _0x70477f
          };
        };
        Object.defineProperty(_0x176042, "__esModule", {
          "value": true
        });
        const _0x33f998 = _0x4b3e6b(_0x5a964a(0x1c5c));
        const _0x30892f = _0x4b3e6b(_0x5a964a(0x4c0));
        const _0x3bd8e6 = _0x5a964a(0x24b7);
        const _0x1bfda3 = _0x4b3e6b(_0x5a964a(0xdf3));
        const _0x21cb1c = _0x4b3e6b(_0x5a964a(0xb15));
        const _0x3515c4 = _0x4b3e6b(_0x5a964a(0x19b1));
        _0x176042["default"] = function () {
          _0x33f998["default"].status("BUIDTIME:", "2023-12-07_14:59:23", " CONFIG:", "TEST");
          const _0xae1c08 = new _0x21cb1c["default"]();
          _0xae1c08.beforeShowAd = async () => true;
          _0xae1c08.afterShowAd = async _0x24936a => true;
          _0x30892f["default"].getInstance().register(new _0x3515c4["default"](), _0xae1c08);
          _0x30892f["default"].getInstance().afterShowAd = (_0x31e2b3, _0x2523f9) => {
            if (_0x31e2b3 == _0x3bd8e6.AD.int && _0x2523f9) {
              for (const _0x19587a of _0x30892f["default"].getInstance().opts.values()) _0x19587a.pf.iConfig.duration = _0x19587a.pf.iConfig.time;
            }
            if (_0x31e2b3 == _0x3bd8e6.AD.reward && _0x2523f9) {
              for (const _0x44ffeb of _0x30892f["default"].getInstance().opts.values()) _0x44ffeb.pf.iConfig.duration = _0x44ffeb.pf.iConfig.time;
            }
            _0x30892f["default"].getInstance().afterShowAd = (_0x54bf44, _0x26d8b7) => {
              if (_0x54bf44 == _0x3bd8e6.AD.int && _0x26d8b7) {
                for (const _0xeedb33 of _0x30892f["default"].getInstance().opts.values()) _0xeedb33.pf.iConfig.duration = _0xeedb33.pf.iConfig.time;
              }
              if (_0x54bf44 == _0x3bd8e6.AD.reward && _0x26d8b7) {
                for (const _0x565cc1 of _0x30892f["default"].getInstance().opts.values()) _0x565cc1.pf.iConfig.duration = _0x565cc1.pf.iConfig.time;
              }
              if (_0x54bf44 == _0x3bd8e6.AD.reward && !_0x26d8b7) {
                for (const _0x379cd1 of _0x30892f["default"].getInstance().opts.values()) {
                  if (_0x379cd1.pf.rConfig.duration > 0x0) {
                    return void _0x1bfda3["default"].getInstance().show("No ads available, but you can claim reward after " + _0x379cd1.pf.rConfig.duration + " seconds", 0xdac);
                  }
                  _0x379cd1.pf.rConfig.duration = 0xa;
                  if (_0x30892f["default"].getInstance().rewardOptions.rewardComplete) {
                    _0x30892f["default"].getInstance().rewardOptions.rewardComplete();
                    _0x30892f["default"].getInstance().rewardOptions.rewardComplete = null;
                  }
                  if (_0x30892f["default"].getInstance().rewardOptions.afterShowAd) {
                    _0x30892f["default"].getInstance().rewardOptions.afterShowAd();
                    _0x30892f["default"].getInstance().rewardOptions.afterShowAd = null;
                  }
                  if (_0x30892f["default"].getInstance().rewardOptions.adBreakDone) {
                    _0x30892f["default"].getInstance().rewardOptions.adBreakDone();
                    _0x30892f["default"].getInstance().rewardOptions.adBreakDone = null;
                  }
                  _0x1bfda3["default"].getInstance().show("Rewards sent though there is no AD. Thanks for your support.", 0xdac);
                  break;
                }
              }
            };
          };
        };
      },
      0x24b7: (_0x11b853, _0x1fbbd3) => {
        'use strict';
  
        var _0x4a26f;
        var _0x2abafa;
        var _0x5e7711;
        var _0x4935;
        Object.defineProperty(_0x1fbbd3, "__esModule", {
          "value": true
        });
        _0x1fbbd3.PLATFORM = _0x1fbbd3.BreakStatus = _0x1fbbd3.AdEvent = _0x1fbbd3.AD = undefined;
        (_0x4935 = _0x1fbbd3.AD || (_0x1fbbd3.AD = {})).int = "int";
        _0x4935.reward = "reward";
        (_0x5e7711 = _0x1fbbd3.AdEvent || (_0x1fbbd3.AdEvent = {})).beforeShowAd = "beforeShowAd";
        _0x5e7711.afterShowAd = "afterShowAd";
        _0x5e7711.adBreakDone = "adBreakDone";
        _0x5e7711.adViewed = "adViewed";
        _0x5e7711.adDismissed = "adDismissed";
        (_0x2abafa = _0x1fbbd3.BreakStatus || (_0x1fbbd3.BreakStatus = {})).beforeShowAd = "beforeShowAd";
        _0x2abafa.afterShowAd = "afterShowAd";
        _0x2abafa.adBreakDone = "adBreakDone";
        _0x2abafa.adViewed = "adViewed";
        _0x2abafa.adDismissed = "adDismissed";
        _0x2abafa.error = "error";
        _0x2abafa.timeout = "timeout";
        _0x2abafa.viewed = "viewed";
        _0x2abafa.other = "other";
        _0x2abafa.ignored = "ignored";
        _0x2abafa.dismissed = "dismissed";
        _0x2abafa.viewing = "viewing";
        _0x2abafa.skiped = "skiped";
        _0x2abafa.frequencyCapped = "frequencyCapped";
        _0x2abafa.rewardComplete = "rewardComplete";
        _0x2abafa.rewardUnprepared = "rewardUnprepared";
        (_0x4a26f = _0x1fbbd3.PLATFORM || (_0x1fbbd3.PLATFORM = {})).AFC = "AFC";
        _0x4a26f.AFG = "AFG";
        _0x4a26f.PREAFG = "AFG";
        _0x4a26f.PREBIDAFG = "PREBIDAFG";
        _0x4a26f.GAM = "GAM";
      },
      0x134d: function (_0x34adf8, _0x23e8b3, _0x387568) {
        'use strict';
  
        var _0x2ca5b2 = this && this.__importDefault || function (_0x309ea1) {
          return _0x309ea1 && _0x309ea1.__esModule ? _0x309ea1 : {
            "default": _0x309ea1
          };
        };
        Object.defineProperty(_0x23e8b3, "__esModule", {
          "value": true
        });
        _0x23e8b3.ADComponent = undefined;
        const _0x2e6c72 = _0x2ca5b2(_0x387568(0x191e));
        class _0x1b1a5f extends _0x2e6c72["default"] {
          constructor() {
            super(...arguments);
            this.enable = true;
          }
          get ["clientWidth"]() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          }
          get ["clientHeight"]() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          }
        }
        _0x23e8b3.ADComponent = _0x1b1a5f;
      },
      0x19b1: function (_0x559334, _0x4be3b6, _0x4aa702) {
        'use strict';
  
        var _0x3abd55 = this && this.__importDefault || function (_0x31a950) {
          return _0x31a950 && _0x31a950.__esModule ? _0x31a950 : {
            "default": _0x31a950
          };
        };
        Object.defineProperty(_0x4be3b6, "__esModule", {
          "value": true
        });
        const _0x16fbb3 = _0x3abd55(_0x4aa702(0x109));
        const _0x1d6929 = _0x3abd55(_0x4aa702(0x1657));
        const _0x38722c = _0x3abd55(_0x4aa702(0x4e));
        const _0x34f5bf = _0x4aa702(0x22bd);
        const _0x452515 = _0x3abd55(_0x4aa702(0x1588));
        const _0x3ce208 = _0x3abd55(_0x4aa702(0x1c5c));
        const _0x1a2a02 = _0x3abd55(_0x4aa702(0x1bbf));
        const _0x27c61d = _0x3abd55(_0x4aa702(0x1444));
        const _0x28a622 = _0x4aa702(0x24b7);
        const _0x301d50 = _0x4aa702(0x134d);
        class _0x3018f6 extends _0x301d50.ADComponent {
          constructor() {
            super(...arguments);
            this.name = "AFC";
            this.attributes = new Map();
            this.channel = 0x0;
            this.inited = false;
            this.rConfig = new _0x1a2a02["default"](this, _0x28a622.AD.reward, 0x1e);
            this.iConfig = new _0x1a2a02["default"](this, _0x28a622.AD.int, 0x1e);
            this.tConfig = new _0x1a2a02["default"](this, _0x28a622.AD.int, 0x1e);
          }
          ["init"](_0xf88b2a) {
            return new Promise(async (_0x4c0ca3, _0x5ea9e1) => {
              const _0x81206 = null == _0x1d6929["default"].hostnames[_0x452515["default"].referrer] ? 0x8 : _0x1d6929["default"].hostnames[_0x452515["default"].referrer];
              const _0x13151c = _0x1d6929["default"].pubs[_0x81206];
              if (!(_0x452515["default"].env != _0x34f5bf.ENV.OTHER && 0x8 != _0x81206)) {
                _0x3ce208["default"].trace("ON OTHER CHANNEL");
              }
              if (_0x16fbb3["default"].afcConfig.channel) {
                _0x3ce208["default"].trace("USE AFCCONFIG CHANNEL", _0x16fbb3["default"].afcConfig.channel);
                _0x13151c.channel = _0x16fbb3["default"].afcConfig.channel;
                _0x13151c.mchannel = _0x16fbb3["default"].afcConfig.channel;
              }
              this.attributes.set("data-ad-client", "ca-pub-8878716159434368");
              this.attributes.set("data-ad-channel", _0x13151c.channel);
              if (_0x452515["default"].os != _0x34f5bf.OS.PC && undefined !== _0x13151c.mchannel) {
                this.attributes.set("data-ad-channel", _0x13151c.mchannel);
              }
              this.attributes.set("data-ad-frequency-hint", "30s");
              if (_0x452515["default"].env == _0x34f5bf.ENV.PRE) {
                _0x3ce208["default"].trace("debugOpen original value is False, set to True because the game files are not host on " + _0x13151c.name);
                this.attributes.set("data-adbreak-test", "on");
              }
              const _0x53a161 = document.createElement("script");
              _0x53a161.async = true;
              for (const [_0xda9687, _0xc5a35] of this.attributes.entries()) {
                _0x3ce208["default"].trace(_0xda9687, _0xc5a35);
                _0x53a161.setAttribute(_0xda9687, _0xc5a35);
              }
              _0x53a161.onload = () => {
                window.adsbygoogle = window.adsbygoogle || [];
                window.adBreak = window.adBreak || function (_0x1f0011) {
                  window.adsbygoogle.push(_0x1f0011);
                };
                window.adConfig = window.adConfig || function (_0x304506) {
                  window.adsbygoogle.push(_0x304506);
                };
                window.adConfig({
                  "preloadAdBreaks": "on",
                  "onReady": _0x51883e => {
                    this.inited = true;
                    _0x3ce208["default"].trace(this.name + " ready");
                    this.reward();
                  }
                });
                _0x4c0ca3(true);
              };
              _0x53a161.onerror = function () {
                _0x3ce208["default"].status("afc init error");
                _0x5ea9e1("afc init error");
              };
              _0x53a161.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
              document.head.appendChild(_0x53a161);
              _0x38722c["default"].getInstance().on(_0x28a622.AdEvent.adBreakDone, this, _0x176bb6 => {
                switch (_0x176bb6.type) {
                  case _0x28a622.AD.reward:
                    break;
                  case _0x28a622.AD.int:
                    if ("viewed" == _0x176bb6.data.breakStatus) {
                      this.iConfig.duration = this.iConfig.time;
                    }
                }
              });
            });
          }
          ["showInterstitial"](_0x422357, _0x5323ef) {
            return this.iConfig.isRunning() ? new Promise((_0x31431f, _0x3d8188) => {
              _0x422357["finally"] = _0x31431f;
              this.tConfig.init(_0x422357);
              this.tConfig.cb = _0x5323ef || new Function();
              this.tConfig.beforeShowAd();
              this.tConfig.afterShowAd();
              this.tConfig.adBreakDone({
                "breakStatus": _0x28a622.BreakStatus.viewing
              });
              this.tConfig["finally"]({
                "breakStatus": _0x28a622.BreakStatus.viewing
              });
            }) : new Promise((_0x2a05b5, _0x439964) => {
              _0x422357["finally"] = _0x2a05b5;
              this.iConfig.init(_0x422357);
              this.iConfig.cb = _0x5323ef || new Function();
              _0x3ce208["default"].trace("requesting afc Interstitial AD", this.iConfig.count);
              if (this.iConfig.duration > 0x0) {
                this.iConfig.beforeShowAd();
                const _0x15a9d6 = this.iConfig.duration;
                setTimeout(() => {
                  this.iConfig.afterShowAd();
                  this.iConfig.adBreakDone({
                    "breakStatus": "less-than-30s-" + _0x15a9d6
                  });
                  this.iConfig["finally"]({
                    "breakStatus": _0x28a622.BreakStatus.frequencyCapped
                  });
                }, 0x64);
                return void _0x3ce208["default"].trace("requesting Interstitial AD\uFF0Cless than 30s, ignored :", _0x15a9d6);
              }
              _0x3ce208["default"].showLoading();
              clearTimeout(this.iConfig.tid);
              this.iConfig.tid = setTimeout(() => {
                this.iConfig.beforeShowAd();
                this.iConfig.afterShowAd();
                this.iConfig.adBreakDone({
                  "breakStatus": _0x28a622.BreakStatus.timeout
                });
                this.iConfig["finally"]({
                  "breakStatus": _0x28a622.BreakStatus.timeout
                });
              }, _0x27c61d["default"].AFC_TIMEOUT_DURATION);
              const _0x2c4374 = this.inited ? 0x0 == this.iConfig.count ? "preroll" : "next" : "preroll";
              switch (_0x2c4374) {
                case "preroll":
                  this.iConfig.beforeShowAd();
                  adBreak({
                    "type": _0x2c4374,
                    "name": "game",
                    "adBreakDone": _0x5465ab => {
                      this.iConfig.afterShowAd();
                      this.iConfig.adBreakDone(_0x5465ab);
                      this.iConfig["finally"]({
                        "breakStatus": _0x5465ab.breakStatus
                      });
                    }
                  });
                  break;
                case "next":
                  adBreak({
                    "type": _0x2c4374,
                    "name": "game",
                    "beforeAd": () => {
                      this.iConfig.beforeShowAd();
                    },
                    "afterAd": this.iConfig.afterShowAd.bind(this.iConfig),
                    "adBreakDone": _0xc89cc0 => {
                      this.iConfig.adBreakDone(_0xc89cc0);
                      this.iConfig["finally"]({
                        "breakStatus": _0xc89cc0.breakStatus
                      });
                    }
                  });
              }
              return true;
            });
          }
          get ["rewardReady"]() {
            return !!this.inited && this.rConfig.rewardReady;
          }
          ["showReward"](_0x4ff4f7, _0x4de4ce) {
            return new Promise((_0x422b38, _0x48b0d1) => {
              _0x3ce208["default"].trace("requesting afc reward ad");
              _0x4ff4f7["finally"] = _0x422b38;
              this.rConfig.init(_0x4ff4f7);
              this.rConfig.cb = _0x4de4ce || new Function();
              if (!this.rConfig.rewardReady) {
                _0x3ce208["default"].trace("requesting afc reward ad ,but not ready");
                this.rConfig.beforeShowAd();
                this.rConfig.afterShowAd();
                this.rConfig.adBreakDone({
                  "breakStatus": _0x28a622.BreakStatus.rewardUnprepared
                });
                this.rConfig["finally"]({
                  "breakStatus": _0x28a622.BreakStatus.rewardUnprepared
                });
                return void this.rConfig.cb(_0x28a622.BreakStatus.rewardUnprepared);
              }
              _0x3ce208["default"].showLoading();
              this.rConfig.showAd();
            });
          }
          ["update"]() {
            if (this.inited) {
              this.iConfig.update();
              this.rConfig.update();
            }
          }
          ["showBanner"](_0xfdd668) {}
          ["hideBanner"](_0x186832) {}
          ["showSplash"](_0x37651a) {}
          ["hideSplash"](_0x2135a6) {}
          ["reward"]() {
            if (!this.rConfig.rewardReady) {
              _0x3ce208["default"].trace("adbreak reward");
              adBreak({
                "type": _0x28a622.AD.reward,
                "name": _0x28a622.AD.reward,
                "beforeAd": () => {
                  _0x3ce208["default"].trace("afc beforeAd");
                  this.rConfig.beforeShowAd();
                },
                "afterAd": () => {
                  _0x3ce208["default"].trace("afc afterShowAd");
                  this.rConfig.afterShowAd();
                },
                "beforeReward": this.rConfig.beforeReward.bind(this.rConfig),
                "adDismissed": () => {
                  _0x3ce208["default"].status("AFC Reward Dismissed");
                  this.rConfig.rewardDismissed();
                },
                "adViewed": () => {
                  this.rConfig.rewardComplete();
                },
                "adBreakDone": _0x72e759 => {
                  const _0x3fad2a = _0x72e759.breakStatus;
                  switch (_0x3fad2a) {
                    case _0x28a622.BreakStatus.viewed:
                    case _0x28a622.BreakStatus.dismissed:
                      break;
                    default:
                      _0x3ce208["default"].trace("default request afc reward callback status:", _0x3fad2a);
                      _0x3ce208["default"].trace("default request afc reward adBreakDone :", _0x72e759);
                  }
                  switch (_0x3fad2a) {
                    case _0x28a622.BreakStatus.viewed:
                      this.iConfig.duration = this.iConfig.time;
                    case _0x28a622.BreakStatus.dismissed:
                      this.rConfig.adBreakDone(_0x72e759);
                      this.rConfig["finally"]({
                        "breakStatus": _0x3fad2a
                      });
                      setTimeout(() => {
                        this.reward();
                      }, 0xfa0);
                      break;
                    case _0x28a622.BreakStatus.other:
                      this.rConfig.enable = false;
                      break;
                    case _0x28a622.BreakStatus.ignored:
                      setTimeout(() => {
                        this.reward();
                      }, 0x2710);
                      break;
                    case _0x28a622.BreakStatus.error:
                      _0x3ce208["default"].hideLoading();
                      setTimeout(() => {
                        this.reward();
                      }, 0xfa0);
                      break;
                    default:
                      setTimeout(() => {
                        this.reward();
                      }, 0xfa0);
                  }
                }
              });
            }
          }
        }
        _0x4be3b6["default"] = _0x3018f6;
      },
      0x1a17: function (_0x134b6d, _0x8a955c, _0x350126) {
        'use strict';
  
        var _0x53519f = this && this.__importDefault || function (_0x350652) {
          return _0x350652 && _0x350652.__esModule ? _0x350652 : {
            "default": _0x350652
          };
        };
        Object.defineProperty(_0x8a955c, "__esModule", {
          "value": true
        });
        const _0x4c9ef1 = _0x53519f(_0x350126(0x109));
        const _0x4c17b2 = _0x53519f(_0x350126(0x1657));
        const _0x92e919 = _0x350126(0x22bd);
        const _0x2406ef = _0x53519f(_0x350126(0x1588));
        const _0x54c1d3 = _0x350126(0x1ec9);
        const _0x3367d4 = _0x53519f(_0x350126(0x1c5c));
        const _0x2216b1 = _0x53519f(_0x350126(0x1bbf));
        const _0x961237 = _0x53519f(_0x350126(0x1444));
        const _0x5e1eee = _0x350126(0x24b7);
        const _0x41125a = _0x350126(0x134d);
        const _0x2fbf65 = _0x53519f(_0x350126(0x1298));
        const _0x2668dd = _0x53519f(_0x350126(0x1c8a));
        const _0x97df31 = {
          "buckets": [{
            "max": 0x9,
            "increment": 0.01
          }, {
            "max": 0x1f,
            "increment": 0.05
          }, {
            "max": 0x4b,
            "increment": 0.1
          }]
        };
        const _0xc6323c = {
          "userIds": [{
            "name": "id5Id",
            "params": {
              "partner": 0x5ac
            },
            "storage": {
              "type": "html5",
              "name": "id5id",
              "expires": 0x5a,
              "refreshInSeconds": 0x7080
            }
          }, {
            "name": "sharedId",
            "storage": {
              "type": "cookie",
              "name": "_sharedid",
              "expires": 0x16d
            }
          }],
          "syncDelay": 0xbb8,
          "auctionDelay": 0x32
        };
        class _0x3cac88 extends _0x41125a.ADComponent {
          constructor() {
            super(...arguments);
            this.name = "PrebidAFG";
            this.channel = 0x0;
            this.inited = false;
            this.rConfig = new _0x2216b1["default"](this, _0x5e1eee.AD.reward);
            this.iConfig = new _0x2216b1["default"](this, _0x5e1eee.AD.int, 0x3c);
            this.mgr = new _0x2fbf65["default"]();
            this.skippable = false;
            this.isOpening = false;
            this.ad = {
              "type": _0x5e1eee.AD.int,
              "itmes": [],
              "resize": null,
              "clear": null,
              "cleaned": false
            };
          }
          ["init"](_0x5256d6) {
            return new Promise(async (_0x2df60f, _0xd3cbfd) => {
              const _0x209533 = () => {
                const _0x44a391 = null == _0x4c17b2["default"].hostnames[_0x2406ef["default"].referrer] ? 0x8 : _0x4c17b2["default"].hostnames[_0x2406ef["default"].referrer];
                const _0x1e10ff = _0x4c17b2["default"].pubs[_0x44a391];
                if (_0x2406ef["default"].os != _0x92e919.OS.PC && undefined !== _0x1e10ff.miu) {
                  this.iu = _0x1e10ff.miu;
                } else {
                  this.iu = _0x1e10ff.iu;
                }
                const _0x337e95 = document.body || document.getElementsByTagName("body")[0x0];
                const _0x52416c = document.createElement("div");
                _0x52416c.id = "advertisement";
                _0x52416c.style.position = "fixed";
                _0x52416c.style.zIndex = "0";
                _0x52416c.style.top = "0";
                _0x52416c.style.left = "0";
                _0x52416c.style.width = "100%";
                _0x52416c.style.height = "100%";
                _0x52416c.style.backgroundColor = "#000000";
                _0x52416c.style.opacity = "0";
                _0x52416c.style.transform = "translateX(-9999px)";
                _0x52416c.style.zIndex = "-1";
                _0x337e95.appendChild(_0x52416c);
                const _0x48e166 = document.createElement("video");
                _0x48e166.id = "advertisement_video";
                _0x48e166.style.position = "absolute";
                _0x48e166.style.backgroundColor = "#000000";
                _0x48e166.style.top = "0";
                _0x48e166.style.left = "0";
                _0x48e166.style.width = this.clientWidth + "px";
                _0x48e166.style.height = this.clientHeight + "px";
                _0x52416c.appendChild(_0x48e166);
                const _0x1db25f = document.createElement("div");
                _0x1db25f.id = "advertisement_slot";
                _0x1db25f.style.position = "absolute";
                _0x1db25f.style.top = "0";
                _0x1db25f.style.left = "0";
                _0x1db25f.style.width = this.clientWidth + "px";
                _0x1db25f.style.height = this.clientHeight + "px";
                _0x52416c.appendChild(_0x1db25f);
                const _0x566557 = document.createElement("div");
                _0x566557.style.color = "#ffffff";
                _0x566557.style.position = "absolute";
                _0x566557.style.top = "10px";
                _0x566557.style.left = "10px";
                _0x566557.innerText = '';
                _0x52416c.appendChild(_0x566557);
                this.remainingTimeLabel = _0x566557;
                const _0x5c5743 = document.createElement("div");
                _0x5c5743.style.fontSize = "16px";
                _0x5c5743.style.fontFamily = "sans-serif";
                _0x5c5743.style.position = "absolute";
                _0x5c5743.style.bottom = "140px";
                _0x5c5743.style.right = "0px";
                _0x5c5743.style.color = "#FFFFFF";
                _0x5c5743.style.paddingLeft = "5px";
                _0x5c5743.style.paddingRight = "5px";
                _0x5c5743.style.backgroundColor = "#000000";
                _0x5c5743.style.borderRadius = "4px 0 0 4px";
                _0x52416c.appendChild(_0x5c5743);
                this.skipLabel = _0x5c5743;
                this.skipLabel.style.display = "none";
                const _0x514efc = document.createElement("div");
                _0x514efc.style.width = "140px";
                _0x514efc.style.textAlign = "center";
                _0x514efc.style.height = "40px";
                _0x514efc.style.lineHeight = "40px";
                _0x514efc.style.fontSize = "16px";
                _0x514efc.style.fontFamily = "sans-serif";
                _0x514efc.style.borderRadius = "4px 0 0 4px";
                _0x514efc.style.border = "1px solid rgba(255,255,255,.5)";
                _0x514efc.style.position = "absolute";
                _0x514efc.style.bottom = "20px";
                _0x514efc.style.backgroundColor = "#000000";
                _0x514efc.style.right = "0";
                _0x514efc.style.cursor = "pointer";
                _0x514efc.style.color = "#FFFFFF";
                _0x514efc.onclick = () => {
                  if ("Skip Ad" == this.skipButton.innerText) {
                    this.ad.clear();
                    this.mgr.skip();
                  }
                };
                const _0x38abd1 = this.clientWidth / this.clientHeight;
                this.skipLabel.style.bottom = _0x38abd1 < 0.359 ? "120px" : _0x38abd1 < 0.573 ? "125px" : _0x38abd1 < 0x1 ? "140px" : "80px";
                _0x52416c.appendChild(_0x514efc);
                this.skipButton = _0x514efc;
                this.ad.itmes.push(_0x1db25f);
                this.ad.itmes.push(_0x48e166);
                const _0x25ea54 = new google.ima.AdDisplayContainer(_0x1db25f, _0x48e166);
                _0x25ea54.initialize();
                this.mgr.error.tap("afg", _0x564697 => {
                  this.isOpening = false;
                  _0x52416c.style.transform = "translateX(-9999px)";
                  _0x52416c.style.zIndex = "-1";
                  _0x3367d4["default"].hideLoading();
                  switch (this.format) {
                    case _0x5e1eee.AD.int:
                      this.iConfig.cb(_0x5e1eee.BreakStatus.error);
                      this.iConfig["finally"]({
                        "breakStatus": _0x5e1eee.BreakStatus.error
                      });
                      break;
                    case _0x5e1eee.AD.reward:
                      this.rConfig.cb(_0x5e1eee.BreakStatus.error);
                      this.rConfig["finally"]({
                        "breakStatus": _0x5e1eee.BreakStatus.error
                      });
                  }
                  setTimeout(() => {
                    this.requestBids().then(() => {
                      this.showAD();
                    });
                  }, 0x2710);
                });
                this.mgr.click.tap("afg", _0x17bbc2 => {
                  this.isOpening = false;
                  _0x3367d4["default"].trace("afc complete ");
                  if (this.format === _0x5e1eee.AD.int) {
                    this.iConfig.afterShowAd();
                    this.iConfig.adBreakDone({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                    this.iConfig["finally"]({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                  } else {
                    this.iConfig.duration = this.iConfig.time;
                    this.rConfig.rewardComplete();
                    this.rConfig.afterShowAd();
                    this.rConfig.adBreakDone({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                    this.rConfig["finally"]({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                  }
                  _0x48e166.src = '';
                  _0x52416c.style.opacity = "0";
                  setTimeout(() => {
                    _0x52416c.style.transform = "translateX(-9999px)";
                    _0x52416c.style.zIndex = "-1";
                  }, 0xa);
                  this.requestBids().then(() => {
                    this.showAD();
                  });
                });
                this.mgr.loaded.tap("loaded", _0x3b1d14 => {
                  const _0x5e9d4a = _0x3b1d14.getAdData();
                  _0x3367d4["default"].trace("AdData:onLoaded", _0x5e9d4a);
                  this.addata = _0x5e9d4a;
                  this.skippable = !!_0x5e9d4a.skippable;
                  this.skipLabel.style.display = "none";
                  this.skipButton.style.display = "none";
                });
                this.mgr.started.tap("started", _0x4f5aa7 => {
                  this.isOpening = true;
                  if (this.format === _0x5e1eee.AD.int) {
                    this.iConfig.beforeShowAd();
                  } else {
                    this.rConfig.beforeShowAd();
                  }
                  _0x3367d4["default"].hideLoading();
                  _0x52416c.style.transform = "translateX(0)";
                  _0x52416c.style.zIndex = "99";
                  setTimeout(() => {
                    _0x52416c.style.opacity = "1";
                  }, 0xa);
                });
                this.mgr.complete.tap("complete", _0x8e18fc => {
                  this.isOpening = false;
                  _0x3367d4["default"].trace("afc complete ");
                  if (this.format === _0x5e1eee.AD.int) {
                    this.iConfig.afterShowAd();
                    this.iConfig.adBreakDone({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                    this.iConfig["finally"]({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                  } else {
                    this.iConfig.duration = this.iConfig.time;
                    this.rConfig.rewardComplete();
                    this.rConfig.afterShowAd();
                    this.rConfig.adBreakDone({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                    this.rConfig["finally"]({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                  }
                  _0x48e166.src = '';
                  _0x52416c.style.opacity = "0";
                  setTimeout(() => {
                    _0x52416c.style.transform = "translateX(-9999px)";
                    _0x52416c.style.zIndex = "-1";
                  }, 0xa);
                  this.requestBids().then(() => {
                    this.showAD();
                  });
                });
                this.mgr.skipped.tap("skipped", _0x1c256f => {
                  this.isOpening = false;
                  if (this.format === _0x5e1eee.AD.int) {
                    this.iConfig.afterShowAd();
                    this.iConfig.adBreakDone({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                    this.iConfig["finally"]({
                      "breakStatus": _0x5e1eee.BreakStatus.viewed
                    });
                  } else {
                    const _0x1fa1bf = Math.max(0x0, _0x961237["default"].AFG_REWARD_SKIP_DURATION - this.mgr.getTimeOffset());
                    this.mgr.skippable;
                    if (0x0 == _0x1fa1bf) {
                      this.rConfig.rewardComplete();
                      this.rConfig.afterShowAd();
                      this.rConfig.adBreakDone({
                        "breakStatus": _0x5e1eee.BreakStatus.viewed
                      });
                      this.rConfig["finally"]({
                        "breakStatus": _0x5e1eee.BreakStatus.viewed
                      });
                    } else {
                      this.rConfig.rewardDismissed();
                      this.rConfig.afterShowAd();
                      this.rConfig.adBreakDone({
                        "breakStatus": _0x5e1eee.BreakStatus.skiped
                      });
                      this.rConfig["finally"]({
                        "breakStatus": _0x5e1eee.BreakStatus.skiped
                      });
                    }
                  }
                  _0x48e166.src = '';
                  _0x52416c.style.opacity = "0";
                  setTimeout(() => {
                    _0x52416c.style.transform = "translateX(-9999px)";
                    _0x52416c.style.zIndex = "-1";
                  }, 0xa);
                  this.requestBids().then(() => {
                    this.showAD();
                  });
                });
                this.adsLoader = new google.ima.AdsLoader(_0x25ea54);
                this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, _0x388011 => {
                  const _0x35c06c = _0x388011.getAdsManager(_0x48e166);
                  this.mgr.init(_0x35c06c);
                  if (this.ad.cleaned) {
                    this.mgr.destroy();
                  }
                }, false);
                this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, _0x3c6f42 => {
                  this.mgr.error.call(_0x3c6f42);
                }, false);
                this.ad.clear = () => {
                  this.ad.cleaned = true;
                  this.mgr.destroy();
                  this.adsLoader.contentComplete();
                  _0x52416c.style.transform = "translateX(-9999px)";
                  _0x52416c.style.zIndex = "-1";
                  _0x3367d4["default"].hideLoading();
                };
                window.addEventListener("resize", () => {
                  this.ad.itmes.forEach(_0x231750 => {
                    _0x231750.style.width = this.clientWidth + "px";
                    _0x231750.style.height = this.clientHeight + "px";
                  });
                  this.mgr.resize();
                  const _0x38e5a3 = this.clientWidth / this.clientHeight;
                  this.skipLabel.style.bottom = _0x38e5a3 < 0.359 ? "120px" : _0x38e5a3 < 0.573 ? "125px" : _0x38e5a3 < 0x1 ? "140px" : "80px";
                });
                this.inited = true;
              };
              window.pbjs = window.pbjs || {};
              pbjs.que = pbjs.que || [];
              const _0x13ef32 = document.createElement("script");
              _0x13ef32.onload = () => {
                _0x209533();
                _0x3367d4["default"].trace(this.name, "inited");
                const _0x314a07 = document.createElement("script");
                _0x314a07.onload = () => {
                  _0x3367d4["default"].trace("prebid init");
                  pbjs.que.push(() => {
                    pbjs.addAdUnits(_0x2668dd["default"].bids());
                    const _0x52fbcc = {
                      "gdpr": {
                        "cmpApi": "iab",
                        "timeout": 0x1f40,
                        "defaultGdprScope": true
                      },
                      "usp": {
                        "cmpApi": "iab",
                        "timeout": 0x1f40
                      }
                    };
                    if ("function" != typeof __tcfapi) {
                      delete _0x52fbcc.gdpr;
                    }
                    pbjs.setConfig({
                      "cache": {
                        "url": "https://prebid.adnxs.com/pbc/v1/cache"
                      },
                      "debug": false,
                      "priceGranularity": _0x97df31,
                      "userSync": _0xc6323c,
                      "consentManagement": _0x52fbcc,
                      "enableSendAllBids": true
                    });
                    _0x2df60f(true);
                    this.requestBids().then(() => {
                      this.showAD();
                    });
                  });
                };
                _0x314a07.type = "text/javascript";
                _0x314a07.async = false;
                _0x314a07.src = "https://h5gamessdk.yyggames.com/sdk/prebid8.19.0.js";
                document.head.appendChild(_0x314a07);
              };
              _0x13ef32.onerror = () => {
                _0xd3cbfd();
              };
              _0x13ef32.type = "text/javascript";
              _0x13ef32.async = true;
              _0x13ef32.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js";
              _0x13ef32.id = "afg";
              document.head.appendChild(_0x13ef32);
            });
          }
          ["requestBids"]() {
            return new Promise((_0x37bd8f, _0x193fb8) => {
              console.log("requestBids");
              this.ad.clear();
              pbjs.requestBids({
                "adUnits": _0x2668dd["default"].bids(),
                "bidsBackHandler": _0x41e075 => {
                  this.buildVideoUrl = pbjs.adServers.dfp.buildVideoUrl({
                    "adUnit": _0x2668dd["default"].bids(),
                    "params": {
                      "iu": this.iu,
                      "cust_params": {
                        "source": _0x4c9ef1["default"].source,
                        "hb_size": "640x480"
                      },
                      "output": "vast"
                    }
                  });
                  _0x37bd8f();
                  _0x3367d4["default"].trace("iu", this.iu);
                  _0x3367d4["default"].trace("pbjs bids", _0x41e075);
                  _0x3367d4["default"].trace("pbjs buildVideoUrl", this.buildVideoUrl);
                }
              });
            });
          }
          ["showInterstitial"](_0x332b5a, _0x14254a) {
            return new Promise((_0x279db5, _0x51aa3d) => {
              if (this.isOpening) {
                _0x3367d4["default"].trace("the interstitial AD is showing");
                if (_0x14254a) {
                  _0x14254a(_0x5e1eee.BreakStatus.viewing);
                }
                return void _0x279db5({
                  "breakStatus": _0x5e1eee.BreakStatus.viewing
                });
              }
              if ("function" == typeof _0x332b5a) {
                _0x332b5a = {
                  "beforeShowAd": new Function(),
                  "afterShowAd": _0x332b5a
                };
              }
              _0x332b5a["finally"] = _0x279db5;
              this.iConfig.init(_0x332b5a);
              this.iConfig.cb = _0x14254a || new Function();
              this.format = _0x5e1eee.AD.int;
              _0x3367d4["default"].trace("requesting afg interstitial AD");
              return this.iConfig.duration > 0x0 ? (this.iConfig.beforeShowAd(), this.iConfig.afterShowAd(), this.iConfig.adBreakDone({
                "breakStatus": "less-than-" + this.iConfig.time + "s-" + this.iConfig.duration
              }), void this.iConfig["finally"]({
                "breakStatus": _0x5e1eee.BreakStatus.frequencyCapped
              })) : this.mgr.isLoaded ? (_0x3367d4["default"].showLoading(), void this.mgr.start()) : (this.iConfig.beforeShowAd(), this.iConfig.afterShowAd(), this.iConfig.adBreakDone({
                "breakStatus": _0x5e1eee.BreakStatus.timeout
              }), void this.iConfig["finally"]({
                "breakStatus": _0x5e1eee.BreakStatus.frequencyCapped
              }));
            });
          }
          get ["rewardReady"]() {
            return this.mgr.isLoaded;
          }
          ["showReward"](_0x12e70c, _0x2ff9b4) {
            return new Promise((_0x5739df, _0x4250b8) => {
              if ("function" == typeof _0x12e70c) {
                _0x12e70c = {
                  "beforeShowAd": new Function(),
                  "rewardComplete": _0x12e70c
                };
              }
              _0x12e70c["finally"] = _0x5739df;
              this.rConfig.init(_0x12e70c);
              this.rConfig.cb = _0x2ff9b4 || new Function();
              this.format = _0x5e1eee.AD.reward;
              _0x3367d4["default"].trace("requesting afg reward ad");
              return this.mgr.isLoaded ? (_0x3367d4["default"].showLoading(), this.mgr.start(), true) : (this.ad.clear(), this.rConfig.beforeShowAd(), this.rConfig.afterShowAd(), this.rConfig.adBreakDone({
                "breakStatus": _0x5e1eee.BreakStatus.timeout
              }), this.rConfig["finally"]({
                "breakStatus": _0x5e1eee.BreakStatus.timeout
              }), this.event(_0x5e1eee.AdEvent.adBreakDone, {
                "breakStatus": _0x5e1eee.BreakStatus.timeout
              }), void _0x54c1d3.Toast.getInstance().show("No ads available", 0xdac));
            });
          }
          ["update"]() {
            if (this.inited && (this.iConfig.update(), this.rConfig.update(), this.mgr.isOpening)) {
              const _0x4c2f9f = this.mgr.getTimeOffset();
              const _0x2bae4b = Math.floor(this.mgr.getRemainingTime());
              const _0x180ec6 = this.mgr.getSkipTimeOffset();
              const _0x4b45d7 = this.mgr.getFSkipTimeOffset();
              this.remainingTimeLabel.innerText = 0x0 == _0x180ec6 ? '' + (_0x2bae4b > 0x9 ? '' : "0") + _0x2bae4b : '';
              if (this.format == _0x5e1eee.AD.reward) {
                const _0x42a58d = Math.min(_0x961237["default"].AFG_REWARD_SKIP_DURATION, this.mgr.maxDuration);
                const _0x2b9ea9 = Math.max(0x0, _0x42a58d - _0x4c2f9f);
                this.skipButton.innerText = "Reward in " + _0x2b9ea9 + "s";
                if (this.mgr.skippable) {
                  if (0x0 == _0x2b9ea9) {
                    this.skipLabel.style.display = "none";
                  } else {
                    if (_0x4b45d7 < 0x1) {
                      this.skipLabel.style.display = '';
                    }
                    this.skipLabel.innerText = "Reward in " + _0x2b9ea9 + "s";
                  }
                } else {
                  this.skipButton.style.display = '';
                  if (0x0 == _0x2b9ea9) {
                    this.skipButton.innerText = "Skip Ad";
                  }
                }
              }
              if (this.format == _0x5e1eee.AD.int && !this.mgr.skippable) {
                this.skipButton.style.display = '';
                const _0x163c68 = Math.min(_0x961237["default"].AFG_INT_SKIP_DURATION, this.mgr.maxDuration);
                const _0x4924d9 = Math.max(0x0, _0x163c68 - _0x4c2f9f);
                this.skipButton.innerText = 0x0 == _0x4924d9 ? "Skip Ad" : "Skip Ad in " + _0x4924d9 + "s";
              }
            }
          }
          ["showAD"]() {
            this.ad.cleaned = false;
            this.mgr.destroy();
            this.adsLoader.contentComplete();
            let _0x5a016d = "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=" + this.iu + "&env=vp&unviewed_position_start=1&gdfp_req=1&output=vast&tfcd=0&npa=0&impl=s&description_url=" + encodeURIComponent(location.href);
            const _0xd1defe = new google.ima.AdsRequest();
            if (_0x4c9ef1["default"].source) {
              _0x5a016d += "&cust_params=source%3D" + _0x4c9ef1["default"].source;
            }
            _0xd1defe.adTagUrl = this.buildVideoUrl || _0x5a016d;
            _0xd1defe.nonLinearAdSlotWidth = this.clientWidth;
            _0xd1defe.nonLinearAdSlotHeight = this.clientHeight;
            _0xd1defe.linearAdSlotHeight = this.clientWidth;
            _0xd1defe.linearAdSlotHeight = this.clientHeight;
            _0xd1defe.forceNonLinearFullSlot = true;
            _0xd1defe.setAdWillAutoPlay(false);
            _0xd1defe.setAdWillPlayMuted(false);
            this.adsLoader.requestAds(_0xd1defe);
          }
          ["showBanner"](_0x280e66) {}
          ["hideBanner"](_0x42635c) {}
          ["showSplash"](_0x5c8258) {}
          ["hideSplash"](_0x38ff97) {}
        }
        _0x8a955c["default"] = _0x3cac88;
      },
      0x1c8a: function (_0x146994, _0x4b8da2, _0x4df71d) {
        'use strict';
  
        var _0x4b7d7a = this && this.__importDefault || function (_0x1b9369) {
          return _0x1b9369 && _0x1b9369.__esModule ? _0x1b9369 : {
            "default": _0x1b9369
          };
        };
        Object.defineProperty(_0x4b8da2, "__esModule", {
          "value": true
        });
        const _0x11480c = _0x4df71d(0x13a3);
        const _0x9a2cc8 = _0x4df71d(0x22bd);
        const _0x45d922 = _0x4b7d7a(_0x4df71d(0x1588));
        const _0x776e7b = _0x4b7d7a(_0x4df71d(0x1c5c));
        const _0x1cbb27 = {
          "bidder": "tappx",
          "params": {
            "host": "vz42018yyg.pub.tappx.com/rtb/",
            "tappxkey": "pub-76314-desktop-6830",
            "endpoint": "vz42018yyg"
          }
        };
        const _0x5a07aa = {
          "bidder": "richaudience",
          "params": {
            "pid": "U4K8nc9VJ0",
            "supplyType": "site"
          }
        };
        const _0xf67649 = {
          "code": "v1",
          "mediaTypes": {
            "video": {
              "context": "instream",
              "protocols": [0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8],
              "mimes": ["video/mp4", "application/javascript"],
              "playerSize": [[0x280, 0x1e0]]
            }
          },
          "bids": [_0x5a07aa, _0x1cbb27]
        };
        const _0x46589a = {
          "tappx": {
            [_0x9a2cc8.ENV.BESTGAMES]: {
              [_0x9a2cc8.OS.PC]: "pub-76314-desktop-6830",
              [_0x9a2cc8.OS.MOBILE]: "pub-76313-mweb-6797"
            },
            [_0x9a2cc8.ENV.CARGAMES]: {
              [_0x9a2cc8.OS.PC]: "pub-76316-desktop-6892",
              [_0x9a2cc8.OS.MOBILE]: "pub-76315-mweb-6870"
            },
            [_0x9a2cc8.ENV.J4]: {
              [_0x9a2cc8.OS.PC]: "pub-76303-desktop-5953",
              [_0x9a2cc8.OS.MOBILE]: "pub-76310-mweb-6492"
            },
            [_0x9a2cc8.ENV.BABYGAMES]: {
              [_0x9a2cc8.OS.PC]: "pub-76306-desktop-6138",
              [_0x9a2cc8.OS.MOBILE]: "pub-76307-mweb-6376"
            },
            [_0x9a2cc8.ENV.PUZZLEGAME]: {
              [_0x9a2cc8.OS.PC]: "pub-76312-desktop-6754",
              [_0x9a2cc8.OS.MOBILE]: "pub-76311-mweb-6729"
            },
            [_0x9a2cc8.ENV.YAD]: {
              [_0x9a2cc8.OS.PC]: "pub-76305-desktop-6061",
              [_0x9a2cc8.OS.MOBILE]: "pub-76308-mweb-6408"
            },
            [_0x9a2cc8.ENV.YIV]: {
              [_0x9a2cc8.OS.PC]: "pub-76304-desktop-6010",
              [_0x9a2cc8.OS.MOBILE]: "pub-76309-mweb-6457"
            },
            [_0x9a2cc8.ENV.TOPGAMES]: {
              [_0x9a2cc8.OS.PC]: "pub-76318-desktop-6970",
              [_0x9a2cc8.OS.MOBILE]: "pub-76317-mweb-6941"
            }
          },
          "richaudience": {
            [_0x9a2cc8.ENV.BESTGAMES]: {
              [_0x9a2cc8.OS.PC]: "U4K8nc9VJ0",
              [_0x9a2cc8.OS.MOBILE]: "U4K8nc9VJ0"
            },
            [_0x9a2cc8.ENV.CARGAMES]: {
              [_0x9a2cc8.OS.PC]: "ISMj1nQyIA",
              [_0x9a2cc8.OS.MOBILE]: "ISMj1nQyIA"
            },
            [_0x9a2cc8.ENV.J4]: {
              [_0x9a2cc8.OS.PC]: "CPdKStTUvJ",
              [_0x9a2cc8.OS.MOBILE]: "CPdKStTUvJ"
            },
            [_0x9a2cc8.ENV.BABYGAMES]: {
              [_0x9a2cc8.OS.PC]: "ZWyO4hYZCU",
              [_0x9a2cc8.OS.MOBILE]: "ZWyO4hYZCU"
            },
            [_0x9a2cc8.ENV.PUZZLEGAME]: {
              [_0x9a2cc8.OS.PC]: '',
              [_0x9a2cc8.OS.MOBILE]: ''
            },
            [_0x9a2cc8.ENV.YAD]: {
              [_0x9a2cc8.OS.PC]: "8LnTykBKoF",
              [_0x9a2cc8.OS.MOBILE]: "8LnTykBKoF"
            },
            [_0x9a2cc8.ENV.YIV]: {
              [_0x9a2cc8.OS.PC]: "1Rmqo7pQTq",
              [_0x9a2cc8.OS.MOBILE]: "1Rmqo7pQTq"
            },
            [_0x9a2cc8.ENV.TOPGAMES]: {
              [_0x9a2cc8.OS.PC]: "FbfnXsDrJ0",
              [_0x9a2cc8.OS.MOBILE]: "FbfnXsDrJ0"
            }
          }
        };
        _0x4b8da2["default"] = class {
          static ["bids"]() {
            const _0x416563 = _0x45d922["default"].iframe ? _0x45d922["default"].iframeEnv : _0x45d922["default"].env;
            _0x5a07aa.params.pid = _0x46589a.richaudience[_0x416563][_0x45d922["default"].os];
            _0x1cbb27.params.tappxkey = _0x46589a.tappx[_0x416563][_0x45d922["default"].os];
            if (_0x45d922["default"].country !== _0x11480c.CountryEnum.US) {
              const _0x485416 = _0xf67649.bids.indexOf(_0x1cbb27);
              if (_0x485416 > -0x1) {
                _0xf67649.bids.splice(_0x485416, 0x1);
                _0x776e7b["default"].trace("country is ", _0x45d922["default"].country, "remove tappxBidder");
              }
            }
            return _0xf67649;
          }
        };
      },
      0x1298: function (_0x2d4278, _0x5531f5, _0xd4e708) {
        'use strict';
  
        var _0x55d715 = this && this.__importDefault || function (_0x1e5540) {
          return _0x1e5540 && _0x1e5540.__esModule ? _0x1e5540 : {
            "default": _0x1e5540
          };
        };
        Object.defineProperty(_0x5531f5, "__esModule", {
          "value": true
        });
        const _0x4c8dbe = _0xd4e708(0x2505);
        const _0x142249 = _0x55d715(_0xd4e708(0x1c5c));
        _0x5531f5["default"] = class {
          constructor() {
            this.isLoaded = false;
            this.isOpening = false;
            this.error = new _0x4c8dbe.SyncHook(["arg0"]);
            this.loaded = new _0x4c8dbe.SyncHook(["arg0"]);
            this.click = new _0x4c8dbe.SyncHook(["arg0"]);
            this.started = new _0x4c8dbe.SyncHook(["arg0"]);
            this.complete = new _0x4c8dbe.SyncHook(["arg0"]);
            this.skipped = new _0x4c8dbe.SyncHook(["arg0"]);
            this.maxDuration = 0x0;
            this.maxSkipTimeOffset = 0x0;
            this.skippable = true;
            this.error.tap("mgr", _0x60d571 => {
              const _0x9ec841 = _0x60d571.getError();
              _0x142249["default"].status("===============================AFG AD ERROR=================================");
              _0x142249["default"].trace("message:", _0x9ec841.getMessage());
              _0x142249["default"].trace("errorType:", _0x9ec841.getType());
              _0x142249["default"].trace("errorCode:", _0x9ec841.getVastErrorCode());
              _0x142249["default"].status("===========================================================================");
            });
            this.loaded.tap("mgr", _0xe1e774 => {
              this.isLoaded = true;
              this.isOpening = false;
              this.addata = _0xe1e774.getAdData();
            });
            this.started.tap("mgr", _0xf53aa6 => {
              this.skippable = !!this.addata.skippable;
              this.maxDuration = ~~this.addata.duration;
              this.maxSkipTimeOffset = ~~this.addata.skipTimeOffset;
              this.isOpening = true;
            });
          }
          ["init"](_0x241482) {
            this.destroy();
            this.owner = _0x241482;
            this.owner.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, _0x555710 => {
              this.error.call(_0x555710);
            });
            this.owner.addEventListener(google.ima.AdEvent.Type.LOADED, _0x5f33d1 => {
              this.loaded.call(_0x5f33d1);
            });
            this.owner.addEventListener(google.ima.AdEvent.Type.STARTED, _0x295f48 => {
              this.started.call(_0x295f48);
            });
            this.owner.addEventListener(google.ima.AdEvent.Type.COMPLETE, _0x208803 => {
              this.complete.call(_0x208803);
            });
            this.owner.addEventListener(google.ima.AdEvent.Type.SKIPPED, _0x3399bd => {
              this.skipped.call(_0x3399bd);
            });
            this.owner.addEventListener(google.ima.AdEvent.Type.CLICK, _0x178d40 => {
              this.click.call(_0x178d40);
            });
            try {
              this.owner.init(this.clientWidth, this.clientHeight, google.ima.ViewMode.NORMAL);
            } catch (_0x153ed7) {
              throw _0x153ed7;
            }
          }
          ["start"]() {
            this.owner.start();
          }
          ["destroy"]() {
            if (this.owner) {
              this.owner.destroy();
              this.owner = null;
            }
            this.isLoaded = false;
          }
          ["resize"]() {
            if (this.owner) {
              this.owner.resize(this.clientWidth, this.clientHeight, google.ima.ViewMode.NORMAL);
            }
          }
          get ["clientWidth"]() {
            return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
          }
          get ["clientHeight"]() {
            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
          }
          ["skip"]() {
            this.skipped.call('');
          }
          ["getTimeOffset"]() {
            return Math.floor(Math.max(0x0, this.maxDuration - this.getRemainingTime()));
          }
          ["getFSkipTimeOffset"]() {
            const _0x2ab246 = Math.max(0x0, this.maxDuration - this.getRemainingTime());
            return Math.max(0x0, this.maxSkipTimeOffset - _0x2ab246);
          }
          ["getAdSkippableState"]() {
            return !!this.owner && this.owner.getAdSkippableState();
          }
          ["getSkipTimeOffset"]() {
            return Math.floor(Math.max(0x0, this.maxSkipTimeOffset - this.getTimeOffset()));
          }
          ["getRemainingTime"]() {
            return this.owner ? this.owner.getRemainingTime() : 0x0;
          }
        };
      },
      0x492: function (_0x25ebd7, _0x3750df, _0x4ef274) {
        'use strict';
  
        var _0x4187df = this && this.__importDefault || function (_0x48e1dd) {
          return _0x48e1dd && _0x48e1dd.__esModule ? _0x48e1dd : {
            "default": _0x48e1dd
          };
        };
        Object.defineProperty(_0x3750df, "__esModule", {
          "value": true
        });
        const _0x4f82fb = _0x4187df(_0x4ef274(0x1c97));
        const _0x3020e7 = _0x4187df(_0x4ef274(0x1d63));
        const _0x2d0d44 = _0x4187df(_0x4ef274(0xdf3));
        const _0x34be2a = _0x4ef274(0x2235);
        const _0x461f09 = _0x4187df(_0x4ef274(0x92e));
        const _0x444838 = _0x4187df(_0x4ef274(0x18b4));
        const _0x5b2f1d = _0x4ef274(0x1b70);
        const _0xf20380 = _0x4187df(_0x4ef274(0x109));
        const _0x164c6a = _0x4187df(_0x4ef274(0x1588));
        const _0x3278b8 = _0x4187df(_0x4ef274(0x4e));
        const _0x4ca2bb = _0x4187df(_0x4ef274(0x1c4e));
        const _0x2837af = _0x4187df(_0x4ef274(0x20ce));
        class _0x43fdb3 extends _0x34be2a.Singleton {
          constructor() {
            super(...arguments);
            this.inited = false;
            this.appName = '';
            this.canNavigate = false;
            this.navigateParam = {};
            this.tid = -0x1;
          }
          async ["init"](_0x4ac377, _0x39f71d) {
            if (this.inited) {
              return;
            }
            this.inited = true;
            const _0x38dd1f = document.getElementById("layaCanvas");
            if (_0x38dd1f) {
              _0x38dd1f.addEventListener("mouseup", this.onNavigate.bind(this));
              _0x38dd1f.addEventListener("touchend", this.onNavigate.bind(this));
            }
            const _0x57ccec = {
              "appName": _0x4ac377
            };
            this.appName = _0x4ac377;
            _0xf20380["default"].appName = _0x4ac377;
            _0x57ccec.config = await this.loadConfig();
            _0x57ccec.channel = _0x5b2f1d.ChannelType[_0xf20380["default"].channel];
            await _0x3020e7["default"].getInstance().init(_0x57ccec);
            if (!this.icon) {
              this.icon = new Laya.Image();
            }
            this.gameBanner = _0x444838["default"].createGameBanner();
            Laya.stage.addChild(this.gameBanner);
            this.gameBox = _0x444838["default"].createGameBox();
            Laya.stage.addChild(this.gameBox);
            this.icon.on(Laya.Event.MOUSE_DOWN, this, () => {
              this.navigate("GAME", "LOGO");
            });
            Laya.stage.addChild(this.icon);
            this.gameBanner.visible = false;
            if (_0x3020e7["default"].getInstance().canShowForgames()) {
              this.gameBox.zOrder = 0x30d40;
              this.gameBanner.zOrder = 0x30d40;
              this.icon.zOrder = 0x30d40;
              this.gameBanner.visible = true;
              this.gameBox.visible = true;
              this.gameBanner.games.array = _0x3020e7["default"].getInstance().forgames;
              Laya.timer.frameLoop(0x1, this.gameBanner, this.gameBanner.onUpdate);
              const _0x3855f0 = ["https://h5gamessdk.yyggames.com/sdk/res/yad.png", "YIV", "https://h5gamessdk.yyggames.com/sdk/res/babygames.png", "BESTGAMES", "https://h5gamessdk.yyggames.com/sdk/res/cargames.png", "https://h5gamessdk.yyggames.com/sdk/res/puzzle2.png"][_0x57ccec.channel];
              if (_0x3855f0.startsWith("https://")) {
                this.icon.skin = _0x3855f0;
              }
              this.gameBanner.width = Laya.stage.width + 0x190;
              this.gameBanner.centerX = 0x0;
              const _0x17a607 = _0x3020e7["default"].getInstance().forgames.slice();
              const _0x1784d5 = _0x461f09["default"].randomInt(0x0, _0x17a607.length - 0x1);
              this.gameBox.game1.dataSource = _0x17a607[_0x1784d5];
              _0x17a607.splice(_0x1784d5, 0x1);
              const _0xe31649 = _0x461f09["default"].randomInt(0x0, _0x17a607.length - 0x1);
              this.gameBox.game2.dataSource = _0x17a607[_0xe31649];
              _0x17a607.splice(_0xe31649, 0x1);
              this.gameBox.game1.on(Laya.Event.MOUSE_DOWN, this, () => {
                _0x43fdb3.getInstance().navigate("GAME", "MORE", this.gameBox.game1.dataSource.id);
              });
              this.gameBox.game2.on(Laya.Event.MOUSE_DOWN, this, () => {
                _0x43fdb3.getInstance().navigate("GAME", "MORE", this.gameBox.game2.dataSource.id);
              });
            } else {
              this.icon.visible = false;
              this.icon.skin = '';
              this.gameBanner.games.visible = false;
              this.gameBanner.visible = false;
              this.gameBanner.bg.visible = false;
              this.gameBox.visible = false;
              this.gameBox.game1.visible = false;
              this.gameBox.game2.visible = false;
              const _0x3c86a8 = this.gameBox.game1._children || [];
              const _0x14fb5a = this.gameBox.game2._children || [];
              for (const _0x1960e6 of _0x3c86a8) _0x1960e6.visible = false;
              for (const _0x3aa6fb of _0x14fb5a) _0x3aa6fb.visible = false;
            }
            _0x4f82fb["default"].getInstance().init();
            if (_0x4f82fb["default"].getInstance().enabled) {
              this.audio = _0x4f82fb["default"].getInstance();
            //  _0x4f82fb["default"].getInstance().playMusic(_0x2e9945);
            //   Laya.SoundManager.playMusic = (_0x2e9945, _0x1b33be, _0x479381, _0x149330) => null;
            Laya.SoundManager.playMusic = (_0x2e9945, _0x1b33be, _0x479381, _0x149330) =>{
                _0x4f82fb["default"].getInstance().playMusic(_0x2e9945);
            }
              Laya.SoundManager.stopMusic = () => {
                _0x4f82fb["default"].getInstance().stopMusic();
              };
              Laya.SoundManager.playSound = function (_0x1c9629, _0x307574, _0x5922f5, _0x2ae34e, _0x4a8cde) {
                _0x4f82fb["default"].getInstance().playSound(_0x1c9629);
                return null;
              };
              Laya.SoundManager.stopSound = function (_0x3589aa) {
                _0x4f82fb["default"].getInstance().stopSound();
              };
            }
            Laya.alertGlobalError = null;
            window.onerror = null;
            if (_0x39f71d) {
              _0x39f71d();
            }
          }
          ["showInterstitial"](_0x1ccaee, _0x36c335) {
            let _0x1af3d3 = _0x36c335;
            if ("function" == typeof _0x1ccaee) {
              _0x1af3d3 = _0x1ccaee;
              _0x1ccaee = {};
            }
            _0x3020e7["default"].getInstance().showInterstitial({
              "action": _0x1ccaee,
              "beforeShowAd": () => {
                _0xf20380["default"].isShowAD = true;
                clearTimeout(this.tid);
                this.tid = setTimeout(() => {
                  _0x4f82fb["default"].getInstance().muted = true;
                }, 0x64);
                if (_0x164c6a["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x4ca2bb["default"].pause();
                  Laya.stage.renderingEnabled = false;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.pause();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.pause();
                  }
                }
              },
              "afterShowAd": () => {
                window.focus();
                _0xf20380["default"].isShowAD = false;
                clearTimeout(this.tid);
                this.tid = setTimeout(() => {
                  _0x4f82fb["default"].getInstance().muted = false;
                }, 0x64);
                if (_0x164c6a["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x4ca2bb["default"].resume();
                  Laya.stage.renderingEnabled = true;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.resume();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.resume();
                  }
                }
                if (_0x1af3d3) {
                  _0x1af3d3();
                }
              }
            });
          }
          get ["rewardReady"]() {
            return _0x3020e7["default"].getInstance().canShowReward();
          }
          ["showReward"](_0x3b346c, _0x2f763e, _0x1a47f2, _0x277191) {
            if ("function" == typeof _0x3b346c) {
              _0x277191 = _0x1a47f2;
              _0x1a47f2 = _0x2f763e;
              _0x2f763e = _0x3b346c;
              _0x3b346c = {};
            } else if ("object" == typeof _0x3b346c && _0x3b346c.rewardComplete) {
              _0x2f763e = _0x3b346c.rewardComplete;
              _0x1a47f2 = _0x3b346c.rewardDismissed;
            }
            if (!_0x3020e7["default"].getInstance().canShowReward()) {
              this.showTip("No Available Video");
              return void (_0x277191 && _0x277191());
            }
            _0x3020e7["default"].getInstance().showReward({
              "action": _0x3b346c,
              "beforeShowAd": () => {
                _0xf20380["default"].isShowAD = true;
                setTimeout(() => {
                  _0x4f82fb["default"].getInstance().muted = true;
                }, 0x64);
                if (_0x164c6a["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x4ca2bb["default"].pause();
                  Laya.stage.renderingEnabled = false;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.pause();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.pause();
                  }
                }
              },
              "afterShowAd": () => {
                window.focus();
                _0xf20380["default"].isShowAD = false;
                setTimeout(() => {
                  _0x4f82fb["default"].getInstance().muted = false;
                }, 0x64);
                if (_0x164c6a["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x4ca2bb["default"].resume();
                  Laya.stage.renderingEnabled = true;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.resume();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.resume();
                  }
                }
              },
              "rewardComplete": () => {
                if (_0x2f763e) {
                  _0x2f763e();
                }
                if (_0x277191) {
                  _0x277191();
                }
                _0x277191 = null;
                _0x2f763e = null;
              },
              "rewardDismissed": () => {
                if (_0x1a47f2) {
                  _0x1a47f2();
                  if (_0x277191) {
                    _0x277191();
                  }
                  _0x277191 = null;
                  _0x1a47f2 = null;
                }
                this.showTip("Pls watch the ad completely, so that you can claim your reward");
              }
            });
          }
          ["showTip"](_0x2d3adb, _0x2fd7bc) {
            _0x2d0d44["default"].getInstance().show(_0x2d3adb, _0x2fd7bc);
          }
          ["loadConfig"]() {
            return new Promise((_0x95b706, _0x200334) => {
              var _0x20de74 = new XMLHttpRequest();
              _0x20de74.open("GET", "cnf.json", true);
              _0x20de74.onload = function () {
                if (0xc8 !== _0x20de74.status && 0x0 !== _0x20de74.status) {
                  throw "no response";
                }
                try {
                  _0x95b706(JSON.parse(_0x20de74.responseText));
                } catch (_0x46b0c1) {
                  _0x95b706({});
                }
              };
              _0x20de74.onerror = function () {
                _0x95b706({});
                throw "no response";
              };
              _0x20de74.ontimeout = function () {
                _0x95b706({});
              };
              _0x20de74.onabort = function () {
                _0x95b706({});
              };
              _0x20de74.send(null);
            });
          }
          ["showLoading"]() {
            _0x2837af["default"].getInstance().showLoading();
          }
          ["hideLoading"]() {
            _0x2837af["default"].getInstance().hideLoading();
          }
          ["onNavigate"]() {
            if (this.canNavigate) {
              const _0xd720b1 = (_0x3020e7["default"].getInstance().forgames.find(_0x30ddda => _0x30ddda.id == this.navigateParam.to) || {
                "name": ''
              }).name;
              this.navigateParam.name = _0xd720b1;
              _0x3278b8["default"].getInstance().event("navigate", this.navigateParam);
              _0x3020e7["default"].getInstance().navigate(this.navigateParam.screen, this.navigateParam.action, this.navigateParam.to);
            }
            this.canNavigate = false;
          }
          ["navigate"](_0x542df4, _0x2f9be6, _0x298ff4) {
            if (false === this.canNavigate) {
              this.navigateParam.screen = _0x542df4;
              this.navigateParam.action = _0x2f9be6;
              this.navigateParam.to = _0x298ff4;
              this.canNavigate = true;
            }
          }
          ["track"](_0x5e0aa2, _0x4d5ed9) {
            _0x3020e7["default"].getInstance().track(_0x5e0aa2, _0x4d5ed9);
          }
          ["addEventListener"](_0x407bba, _0xcaf8e2, _0x10e301, _0x3701bb = null) {
            return _0x3278b8["default"].getInstance().on(_0x407bba, _0xcaf8e2, _0x10e301, _0x3701bb);
          }
        }
        _0x3750df["default"] = _0x43fdb3;
      },
      0x18b4: function (_0x24dfff, _0x242b48, _0x5b7e7f) {
        'use strict';
  
        var _0x520eeb = this && this.__importDefault || function (_0x47aca0) {
          return _0x47aca0 && _0x47aca0.__esModule ? _0x47aca0 : {
            "default": _0x47aca0
          };
        };
        Object.defineProperty(_0x242b48, "__esModule", {
          "value": true
        });
        const _0x1998a6 = _0x520eeb(_0x5b7e7f(0x492));
        _0x242b48["default"] = class {
          static ["createGameBanner"]() {
            class _0x56c963 extends Laya.View {
              constructor() {
                super(...arguments);
                this.value = 0x1;
              }
              ["createChildren"]() {
                super.createChildren();
                this.createView(_0x56c963.uiView);
                this.games.hScrollBarSkin = '';
                this.games.renderHandler = new Laya.Handler(this, this.renderBanner);
              }
              ["onUpdate"]() {
                this.games.scrollBar.value += this.value;
                if (this.games.scrollBar.value >= this.games.scrollBar.max) {
                  this.games.scrollBar.value = 0x0;
                }
              }
              ["renderBanner"](_0x2e50d7, _0x10e171) {
                const _0x4a6ebe = _0x2e50d7.dataSource;
                _0x2e50d7.offAll();
                _0x2e50d7.on(Laya.Event.MOUSE_OVER, _0x2e50d7, () => {
                  _0x2e50d7.zOrder = 0x64;
                });
                _0x2e50d7.on(Laya.Event.MOUSE_OUT, _0x2e50d7, () => {
                  _0x2e50d7.zOrder = _0x10e171;
                });
                _0x2e50d7.on(Laya.Event.MOUSE_OVER, _0x2e50d7, () => {
                  _0x2e50d7.scale(_0x2e50d7.scaleX + 0.1, _0x2e50d7.scaleY + 0.1);
                  this.value = 0x0;
                });
                _0x2e50d7.on(Laya.Event.MOUSE_OUT, _0x2e50d7, () => {
                  _0x2e50d7.scale(_0x2e50d7.scaleX - 0.1, _0x2e50d7.scaleY - 0.1);
                  this.value = 0x1;
                });
                _0x2e50d7.on(Laya.Event.MOUSE_DOWN, _0x2e50d7, _0x516b2e => {
                  _0x516b2e.stopPropagation();
                  _0x1998a6["default"].getInstance().navigate("GAME", "MORE", _0x4a6ebe.id);
                });
              }
              ["setBannerSize"](_0x755ac9, _0x4395b9) {
                this.games.height = _0x4395b9 + 0x32;
                this.height = _0x4395b9 + 0x32;
                const _0x4e956d = this.games.itemRender;
                _0x4e956d.props.width = _0x755ac9;
                _0x4e956d.props.height = _0x4395b9;
                _0x4e956d.props.y = _0x4395b9 / 0x2 + 0x19;
                _0x4e956d.child[0x0].props.width = _0x755ac9;
                _0x4e956d.child[0x0].props.height = _0x4395b9;
                _0x4e956d.child[0x0].child[0x0].props.width = _0x755ac9;
                _0x4e956d.child[0x0].child[0x0].props.height = _0x4395b9;
                const _0x5e919d = this.games.cells;
                for (const _0x25510b of _0x5e919d) {
                  _0x25510b.width = _0x755ac9;
                  _0x25510b.height = _0x4395b9;
                  _0x25510b.y = _0x4395b9 / 0x2 + 0x19;
                  const _0x13f4e8 = _0x25510b._children || _0x25510b._childs;
                  _0x13f4e8[0x0].width = _0x755ac9;
                  _0x13f4e8[0x0].height = _0x4395b9;
                  _0x13f4e8[0x0].mask.width = _0x755ac9;
                  _0x13f4e8[0x0].mask.height = _0x4395b9;
                }
                this.games.refresh();
              }
            }
            _0x56c963.uiView = {
              "type": "View",
              "props": {
                "width": 0x438,
                "height": 0xc8
              },
              "compId": 0x2,
              "child": [{
                "type": "Image",
                "props": {
                  "var": "bg",
                  "y": 0x0,
                  "x": 0x0,
                  "top": 0x0,
                  "skin": "https://h5gamessdk.yyggames.com/sdk/res/di2.png",
                  "sizeGrid": "30,30,30,30",
                  "right": 0x0,
                  "left": 0x0,
                  "bottom": 0x0
                },
                "compId": 0x4
              }, {
                "type": "List",
                "props": {
                  "y": 0x0,
                  "x": 0xa,
                  "var": "games",
                  "right": 0x0,
                  "left": 0x0,
                  "spaceX": 0x14,
                  "centerY": 0x0,
                  "height": 0xc8,
                  "repeatY": 0x1
                },
                "compId": 0x3,
                "child": [{
                  "type": "Box",
                  "props": {
                    "x": 0x64,
                    "width": 0xc8,
                    "name": "render",
                    "height": 0x96,
                    "centerY": 0x0,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                  },
                  "compId": 0x7,
                  "child": [{
                    "type": "Image",
                    "props": {
                      "y": 0x0,
                      "x": 0x0,
                      "width": 0xc8,
                      "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                      "name": "thumb",
                      "height": 0x96
                    },
                    "compId": 0x8,
                    "child": [{
                      "type": "Image",
                      "props": {
                        "y": 0x0,
                        "x": 0x0,
                        "width": 0xc8,
                        "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                        "sizeGrid": "30,30,30,30",
                        "renderType": "mask",
                        "height": 0x96
                      },
                      "compId": 0x9
                    }]
                  }]
                }]
              }],
              "loadList": [],
              "loadList3D": []
            };
            return new _0x56c963();
          }
          static ["createGameBox"]() {
            class _0x71b837 extends Laya.View {
              constructor() {
                super(...arguments);
                this.w = 0xc8;
                this.h = 0x96;
                this.isAwake = false;
              }
              ["createChildren"]() {
                super.createChildren();
                this.createView(_0x71b837.uiView);
              }
              ["onAwake"]() {
                this.isAwake = true;
              }
              ["onEnable"]() {
                this.onBannerResize();
              }
              ["setBannerSize"](_0x41181c, _0x4ac449) {
                this.w = _0x41181c;
                this.h = _0x4ac449;
                if (this.isAwake) {
                  this.onBannerResize();
                }
              }
              ["onBannerResize"]() {
                const _0x116b54 = this.game1.getChildByName("thumb");
                const _0x5c66e2 = this.game2.getChildByName("thumb");
                const _0x20122f = this.game1.getChildByName("bg");
                const _0x15fae1 = this.game2.getChildByName("bg");
                _0x116b54.width = _0x5c66e2.width = this.w;
                _0x116b54.height = _0x5c66e2.height = this.h;
                if (_0x116b54.mask) {
                  _0x116b54.mask.width = this.w;
                  _0x116b54.mask.height = this.h;
                }
                if (_0x5c66e2.mask) {
                  _0x5c66e2.mask.width = this.w;
                  _0x5c66e2.mask.height = this.h;
                }
                _0x20122f.width = _0x15fae1.width = this.w + 0x14;
                _0x20122f.height = _0x15fae1.height = this.h + 0x14;
              }
            }
            _0x71b837.uiView = {
              "type": "View",
              "props": {
                "width": 0x370,
                "mouseThrough": true,
                "height": 0xc8
              },
              "compId": 0x2,
              "child": [{
                "type": "Box",
                "props": {
                  "y": 0x64,
                  "width": 0xc8,
                  "var": "game1",
                  "height": 0x96,
                  "anchorY": 0.5,
                  "anchorX": 0.5
                },
                "compId": 0xf,
                "child": [{
                  "type": "Image",
                  "props": {
                    "y": 0x4b,
                    "x": 0x64,
                    "width": 0xdc,
                    "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                    "sizeGrid": "30,30,30,30",
                    "name": "bg",
                    "height": 0xaa,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                  },
                  "compId": 0x15
                }, {
                  "type": "Image",
                  "props": {
                    "y": 0x4b,
                    "x": 0x64,
                    "width": 0xc8,
                    "height": 0x96,
                    "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                    "name": "thumb",
                    "anchorY": 0.5,
                    "anchorX": 0.5
                  },
                  "compId": 0x10,
                  "child": [{
                    "type": "Image",
                    "props": {
                      "y": 0x0,
                      "x": 0x0,
                      "width": 0xc8,
                      "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                      "sizeGrid": "30,30,30,30",
                      "renderType": "mask",
                      "height": 0x96
                    },
                    "compId": 0x11
                  }]
                }]
              }, {
                "type": "Box",
                "props": {
                  "y": 0x64,
                  "width": 0xc8,
                  "var": "game2",
                  "height": 0x96,
                  "anchorY": 0.5,
                  "anchorX": 0.5
                },
                "compId": 0x12,
                "child": [{
                  "type": "Image",
                  "props": {
                    "y": 0x4b,
                    "x": 0x64,
                    "width": 0xdc,
                    "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                    "sizeGrid": "30,30,30,30",
                    "name": "bg",
                    "height": 0xaa,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                  },
                  "compId": 0x17
                }, {
                  "type": "Image",
                  "props": {
                    "y": 0x4b,
                    "x": 0x64,
                    "width": 0xc8,
                    "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                    "name": "thumb",
                    "height": 0x96,
                    "anchorY": 0.5,
                    "anchorX": 0.5
                  },
                  "compId": 0x18,
                  "child": [{
                    "type": "Image",
                    "props": {
                      "y": 0x0,
                      "x": 0x0,
                      "width": 0xc8,
                      "skin": "https://h5gamessdk.yyggames.com/sdk/res/di1.png",
                      "sizeGrid": "30,30,30,30",
                      "renderType": "mask",
                      "height": 0x96
                    },
                    "compId": 0x19
                  }]
                }]
              }],
              "loadList": ["https://h5gamessdk.yyggames.com/sdk/res/di1.png"],
              "loadList3D": []
            };
            return new _0x71b837();
          }
        };
      },
      0x1657: (_0x46dd2b, _0x15d3b0) => {
        'use strict';
  
        Object.defineProperty(_0x15d3b0, "__esModule", {
          "value": true
        });
        _0x15d3b0["default"] = {
          "pubs": {
            0x0: {
              "name": "YAD.Com",
              "address": "https://www.yad.com/",
              "channel": 0x455ab0fe,
              "iu": "/21627520311/Yad-Site-InGame-AdUnit"
            },
            0x1: {
              "name": "YIV.Com",
              "address": "https://www.yiv.com/",
              "channel": 0x1b95af055,
              "iu": "/21627520311/Yiv-Site-InGame-AdUnit"
            },
            0x2: {
              "name": "BabyGames.Com",
              "address": "https://www.babygames.com/",
              "channel": 0x148d57258,
              "iu": "/21627520311/BabyGames-Site-InGame-AdUnit"
            },
            0x3: {
              "name": "BestGames.Com",
              "address": "https://www.bestgames.com/",
              "channel": 0x1e606463d,
              "mchannel": 0x24d7cd60f,
              "iu": "/21627520311/BestGames-PC-Site-InGame-AdUnit",
              "miu": "/21627520311/BestGames-Mobile-Site-InGame-AdUnit"
            },
            0x4: {
              "name": "CarGames.Com",
              "address": "https://www.cargames.com/",
              "channel": 0x25260a417,
              "mchannel": 0x21ffdf68a,
              "iu": "/21627520311/CarGames-PC-Site-InGame-AdUnit",
              "miu": "/21627520311/CarGames-Mobile-Site-InGame-AdUnit"
            },
            0x5: {
              "name": "PuzzleGame.Com",
              "address": "https://www.puzzlegame.com/",
              "channel": 0xfb3a2a68,
              "iu": "/21627520311/PuzzleGame-Site-InGame-AdUnit"
            },
            0x6: {
              "name": "TopGames.com",
              "address": "https://www.topgames.com/",
              "channel": 0x23b8a563f,
              "mchannel": 0x8ead9d6e,
              "iu": "/21627520311/TopGames-PC-Site-InGame-AdUnit",
              "miu": "/21627520311/TopGames-Mobile-Site-InGame-AdUnit"
            },
            0x7: {
              "name": "4J.com",
              "address": "https://www.4j.com/",
              "channel": 0x1f4ac44c7,
              "mchannel": 0x24be7e8da,
              "iu": "/21627520311/4J-PC-Site-InGame-AdUnit",
              "miu": "/21627520311/4J-Mobile-Site-InGame-AdUnit"
            },
            0x8: {
              "name": "other",
              "address": "https://www.yad.com/",
              "channel": 0x1922820a5,
              "iu": "/21627520311/Other-Site-InGame-AdUnit"
            }
          },
          "hostnames": {
            "www.yad.com": 0x0,
            "www.yiv.com": 0x1,
            "www.babygames.com": 0x2,
            "www.bestgames.com": 0x3,
            "www.cargames.com": 0x4,
            "www.puzzlegame.com": 0x5,
            "www.topgames.com": 0x6,
            "www.4j.com": 0x7
          }
        };
      },
      0x1bba: function (_0xc1975b, _0x267e99, _0x2d8151) {
        'use strict';
  
        var _0x2d8742 = this && this.__importDefault || function (_0x37b4ee) {
          return _0x37b4ee && _0x37b4ee.__esModule ? _0x37b4ee : {
            "default": _0x37b4ee
          };
        };
        Object.defineProperty(_0x267e99, "__esModule", {
          "value": true
        });
        const _0x13c36e = _0x2d8742(_0x2d8151(0x18d7));
        const _0x37710f = _0x2d8742(_0x2d8151(0x1588));
        _0x267e99["default"] = {
          "preload": function () {
            _0x37710f["default"].init();
            window.sys = _0x37710f["default"];
            _0x13c36e["default"].init();
          }
        };
      },
      0x191e: (_0x544082, _0x274605) => {
        'use strict';
  
        Object.defineProperty(_0x274605, "__esModule", {
          "value": true
        });
        _0x274605["default"] = class {
          constructor() {
            this._events = {};
          }
          ["hasListener"](_0x45491d) {
            return !(!this._events || !this._events[_0x45491d]);
          }
          ["event"](_0x3bdd39, _0x3535e5 = null) {
            if (!this._events || !this._events[_0x3bdd39]) {
              return false;
            }
            var _0x3fefa9 = this._events[_0x3bdd39];
            if (_0x3fefa9.run) {
              if (_0x3fefa9.once) {
                delete this._events[_0x3bdd39];
              }
              if (null != _0x3535e5) {
                _0x3fefa9.runWith(_0x3535e5);
              } else {
                _0x3fefa9.run();
              }
            } else {
              var _0x2b4552 = 0x0;
              for (var _0x2db0aa = _0x3fefa9.length; _0x2b4552 < _0x2db0aa; _0x2b4552++) {
                var _0x39350d = _0x3fefa9[_0x2b4552];
                if (_0x39350d) {
                  if (null != _0x3535e5) {
                    _0x39350d.runWith(_0x3535e5);
                  } else {
                    _0x39350d.run();
                  }
                }
                if (!(_0x39350d && !_0x39350d.once)) {
                  _0x3fefa9.splice(_0x2b4552, 0x1);
                  _0x2b4552--;
                  _0x2db0aa--;
                }
              }
              if (0x0 === _0x3fefa9.length && this._events) {
                delete this._events[_0x3bdd39];
              }
            }
            return true;
          }
          ["on"](_0x1f47e8, _0x4c400d, _0x293a04, _0x3a5b3e = null) {
            return this._createListener(_0x1f47e8, _0x4c400d, _0x293a04, _0x3a5b3e, false);
          }
          ["once"](_0x421920, _0x397d8a, _0x7f266, _0x4f97da = null) {
            return this._createListener(_0x421920, _0x397d8a, _0x7f266, _0x4f97da, true);
          }
          ["_createListener"](_0x4f6e0a, _0x17587f, _0x43d70b, _0x47828d, _0x182f8f, _0x3d4f57 = true) {
            if (_0x3d4f57) {
              this.off(_0x4f6e0a, _0x17587f, _0x43d70b, _0x182f8f);
            }
            var _0x1a4d61 = _0x7c9cb.create(_0x17587f || this, _0x43d70b, _0x47828d, _0x182f8f);
            if (!this._events) {
              this._events = {};
            }
            var _0x3d83e7 = this._events;
            if (_0x3d83e7[_0x4f6e0a]) {
              if (_0x3d83e7[_0x4f6e0a].run) {
                _0x3d83e7[_0x4f6e0a] = [_0x3d83e7[_0x4f6e0a], _0x1a4d61];
              } else {
                _0x3d83e7[_0x4f6e0a].push(_0x1a4d61);
              }
            } else {
              _0x3d83e7[_0x4f6e0a] = _0x1a4d61;
            }
            return this;
          }
          ["off"](_0x3d7cb5, _0x1ddce6, _0x5e489f, _0x1cf99d = false) {
            if (!this._events || !this._events[_0x3d7cb5]) {
              return this;
            }
            var _0x393448 = this._events[_0x3d7cb5];
            if (null != _0x393448) {
              if (_0x393448.run) {
                if (!(_0x1ddce6 && _0x393448.caller !== _0x1ddce6 || null != _0x5e489f && _0x393448.method !== _0x5e489f || _0x1cf99d && !_0x393448.once)) {
                  delete this._events[_0x3d7cb5];
                  _0x393448.recover();
                }
              } else {
                var _0x1ca2e0 = 0x0;
                var _0x313f8a = 0x0;
                for (var _0x17babf = _0x393448.length; _0x313f8a < _0x17babf; _0x313f8a++) {
                  var _0x28a117 = _0x393448[_0x313f8a];
                  if (_0x28a117) {
                    if (!(!_0x28a117 || _0x1ddce6 && _0x28a117.caller !== _0x1ddce6 || null != _0x5e489f && _0x28a117.method !== _0x5e489f || _0x1cf99d && !_0x28a117.once)) {
                      _0x1ca2e0++;
                      _0x393448[_0x313f8a] = null;
                      _0x28a117.recover();
                    }
                  } else {
                    _0x1ca2e0++;
                  }
                }
                if (_0x1ca2e0 === _0x17babf) {
                  delete this._events[_0x3d7cb5];
                }
              }
            }
            return this;
          }
          ["offAll"](_0x76b5f9 = null) {
            var _0x425e9d = this._events;
            if (!_0x425e9d) {
              return this;
            }
            if (_0x76b5f9) {
              this._recoverHandlers(_0x425e9d[_0x76b5f9]);
              delete _0x425e9d[_0x76b5f9];
            } else {
              for (var _0x4b8d59 in _0x425e9d) this._recoverHandlers(_0x425e9d[_0x4b8d59]);
              this._events = null;
            }
            return this;
          }
          ["offAllCaller"](_0x55b423) {
            if (_0x55b423 && this._events) {
              for (var _0x4004b2 in this._events) this.off(_0x4004b2, _0x55b423, null);
            }
            return this;
          }
          ["_recoverHandlers"](_0x4e3508) {
            if (_0x4e3508) {
              if (_0x4e3508.run) {
                _0x4e3508.recover();
              } else {
                for (var _0x418427 = _0x4e3508.length - 0x1; _0x418427 > -0x1; _0x418427--) {
                  if (_0x4e3508[_0x418427]) {
                    _0x4e3508[_0x418427].recover();
                    _0x4e3508[_0x418427] = null;
                  }
                }
              }
            }
          }
        };
        class _0x2840ec {
          constructor(_0x5174e2 = null, _0x4f1104 = null, _0xe62c24 = null, _0x2f48c6 = false) {
            this.once = false;
            this._id = 0x0;
            this.setTo(_0x5174e2, _0x4f1104, _0xe62c24, _0x2f48c6);
          }
          ["setTo"](_0x1e7a6d, _0x5211f2, _0x53a434, _0x5894ca = false) {
            this._id = _0x2840ec._gid++;
            this.caller = _0x1e7a6d;
            this.method = _0x5211f2;
            this.args = _0x53a434;
            this.once = _0x5894ca;
            return this;
          }
          ["run"]() {
            if (null == this.method) {
              return null;
            }
            var _0x53771a = this._id;
            var _0x2163e1 = this.method.apply(this.caller, this.args);
            if (this._id === _0x53771a && this.once) {
              this.recover();
            }
            return _0x2163e1;
          }
          ["runWith"](_0x27caf3) {
            if (null == this.method) {
              return null;
            }
            var _0x41d8f8 = this._id;
            if (null == _0x27caf3) {
              var _0x1beff5 = this.method.apply(this.caller, this.args);
            } else {
              _0x1beff5 = this.args || _0x27caf3.unshift ? this.args ? this.method.apply(this.caller, this.args.concat(_0x27caf3)) : this.method.apply(this.caller, _0x27caf3) : this.method.call(this.caller, _0x27caf3);
            }
            if (this._id === _0x41d8f8 && this.once) {
              this.recover();
            }
            return _0x1beff5;
          }
          ["clear"]() {
            this.caller = null;
            this.method = null;
            this.args = null;
            return this;
          }
          ["recover"]() {
            if (this._id > 0x0) {
              this._id = 0x0;
              _0x2840ec._pool.push(this.clear());
            }
          }
          static ["create"](_0x4150b3, _0x17468c, _0x2ffbc7 = null, _0x4727fd = true) {
            return _0x2840ec._pool.length ? _0x2840ec._pool.pop().setTo(_0x4150b3, _0x17468c, _0x2ffbc7, _0x4727fd) : new _0x2840ec(_0x4150b3, _0x17468c, _0x2ffbc7, _0x4727fd);
          }
        }
        _0x2840ec._pool = [];
        _0x2840ec._gid = 0x1;
        class _0x7c9cb extends _0x2840ec {
          constructor(_0x166ceb, _0xbeb380, _0x2ac418, _0x4c9af4) {
            super(_0x166ceb, _0xbeb380, _0x2ac418, _0x4c9af4);
          }
          ["recover"]() {
            if (this._id > 0x0) {
              this._id = 0x0;
              _0x7c9cb._pool.push(this.clear());
            }
          }
          static ["create"](_0x97dcd9, _0x2667f7, _0x283889 = null, _0x1ac029 = true) {
            return _0x7c9cb._pool.length ? _0x7c9cb._pool.pop().setTo(_0x97dcd9, _0x2667f7, _0x283889, _0x1ac029) : new _0x7c9cb(_0x97dcd9, _0x2667f7, _0x283889, _0x1ac029);
          }
        }
        _0x7c9cb._pool = [];
      },
      0x2235: (_0x3fef3e, _0x5d2698) => {
        'use strict';
  
        Object.defineProperty(_0x5d2698, "__esModule", {
          "value": true
        });
        _0x5d2698.Singleton = undefined;
        _0x5d2698.Singleton = class {
          static ["getInstance"]() {
            if (!this.instance) {
              this.instance = new this();
            }
            return this.instance;
          }
        };
      },
      0xf43: (_0x4563df, _0xa62e6b) => {
        'use strict';
  
        Object.defineProperty(_0xa62e6b, "__esModule", {
          "value": true
        });
        _0xa62e6b["default"] = class {
          constructor() {
            this._volume = 0x64;
            this._dirContext = {};
            this.loop = false;
            this.pause = false;
          }
          ["init"]() {
            this._context = new AudioContext();
          }
          get ["context"]() {
            return this._context;
          }
          ["isSuspend"]() {
            return "suspended" === this._context.state;
          }
          ["suspend"]() {
            this._context.suspend();
            setTimeout(() => {
              this._context.suspend();
            }, 0x64);
          }
          ["resume"]() {
            if (!this.pause) {
              return this._context.resume();
            }
          }
          set ["volume"](_0x96553f) {
            this._volume = _0x96553f;
            for (const _0x152169 of Object.values(this._dirContext)) _0x152169.volume = this._volume;
          }
          get ["volume"]() {
            return this._volume;
          }
          ["play"](_0x5f590e, _0x3ab0cb) {
            const _0x51d1a4 = this._dirContext[_0x5f590e];
            if (_0x51d1a4) {
              try {
                _0x51d1a4.loop = _0x3ab0cb;
                _0x51d1a4.init();
              } catch (_0x5a52ee) {
                console.error("playBuffer error. Exception: " + _0x5a52ee);
              }
            } else {
              this.decode(_0x5f590e);
            }
          }
          ["stop"](_0x4c1a2a) {
            const _0x96f8d = this._dirContext[_0x4c1a2a];
            if (_0x96f8d) {
              _0x96f8d.disconnect();
            }
          }
          ["stopAll"]() {
            for (const _0x1f533a of Object.values(this._dirContext)) _0x1f533a.disconnect();
          }
          ["decode"](_0x6a1c96) {
            return new Promise((_0x3587ea, _0x8feaf7) => {
              if (this._dirContext[_0x6a1c96]) {
                return void _0x3587ea();
              }
              const _0x38f83a = this;
              var _0x55d3b3 = new XMLHttpRequest();
              _0x55d3b3.open("GET", _0x6a1c96, true);
              _0x55d3b3.responseType = "arraybuffer";
              _0x55d3b3.onload = function () {
                if (0xc8 !== _0x55d3b3.status && 0x0 !== _0x55d3b3.status) {
                  throw "no response";
                }
                _0x38f83a.context.decodeAudioData(_0x55d3b3.response, function (_0x34949d) {
                  const _0x54586e = new _0x5ed6a6(_0x38f83a.context);
                  _0x54586e.loop = _0x38f83a.loop;
                  _0x54586e.buffer = _0x34949d;
                  _0x38f83a._dirContext[_0x6a1c96] = _0x54586e;
                  _0x54586e.init();
                  _0x54586e.volume = _0x38f83a.volume;
                }, function (_0x3a2757) {
                  console.log("Decode error." + _0x6a1c96);
                });
                _0x3587ea();
              };
              _0x55d3b3.onerror = function () {
                _0x3587ea();
                throw "no response";
              };
              _0x55d3b3.ontimeout = function () {
                _0x3587ea();
              };
              _0x55d3b3.onabort = function () {
                _0x3587ea();
              };
              _0x55d3b3.send(null);
            });
          }
        };
        class _0x5ed6a6 {
          constructor(_0x43b06a) {
            this.threeD = false;
            this.ended = true;
            this.loop = false;
            this._volume = 0x64;
            this.context = _0x43b06a;
            this.gain = this.context.createGain();
            this.gain.connect(this.context.destination);
          }
          ["init"]() {
            this.ended = false;
            this.setup();
            this.source.buffer = this.buffer;
            this.source.loop = this.loop;
            this.source.start(this.context.currentTime);
          }
          ["setup"]() {
            this.disconnect();
            this.source = this.context.createBufferSource();
            this.source.connect(this.gain);
          }
          ["disconnect"]() {
            if (this.source) {
              this.source.disconnect();
            }
            this.source = null;
          }
          set ["volume"](_0x207709) {
            this._volume = _0x207709;
            this.gain.gain.value = this._volume / 0x64;
          }
          get ["volume"]() {
            return this._volume;
          }
        }
      },
      0x1c97: function (_0x5f3ae2, _0x13697f, _0x5054d1) {
        'use strict';
  
        var _0x121ed6 = this && this.__importDefault || function (_0x5b185c) {
          return _0x5b185c && _0x5b185c.__esModule ? _0x5b185c : {
            "default": _0x5b185c
          };
        };
        Object.defineProperty(_0x13697f, "__esModule", {
          "value": true
        });
        const _0x58f0a1 = _0x121ed6(_0x5054d1(0x109));
        const _0x63c6cc = _0x121ed6(_0x5054d1(0x1c4e));
        const _0x51ad81 = _0x121ed6(_0x5054d1(0x1588));
        const _0x16802e = _0x5054d1(0x2235);
        const _0x25d459 = _0x121ed6(_0x5054d1(0xf43));
        class _0x1a879e extends _0x16802e.Singleton {
          constructor() {
            super(...arguments);
            this._muted = false;
            this.resumeId = -0x1;
            this.enabled = false;
            this.hiddenMuted = false;
            this.inited = false;
          }
          ["init"]() {
            if (!this.inited) {
              this.inited = true;
              try {
                window.AudioContext = window.AudioContext || window.webkitAudioContext;
                this.music = new _0x25d459["default"]();
                this.music.init();
                this.music.loop = true;
                this.sound = new _0x25d459["default"]();
                this.sound.init();
                window.document.addEventListener("mousedown", () => {
                  setTimeout(() => {
                    if (!_0x58f0a1["default"].isShowAD) {
                      this.resume();
                    }
                  }, 0x64);
                }, true);
                window.document.addEventListener("touchstart", () => {
                  setTimeout(() => {
                    if (!_0x58f0a1["default"].isShowAD) {
                      this.resume();
                    }
                  }, 0x64);
                }, true);
                window.document.addEventListener("visibilitychange", this.changeVisibility.bind(this));
                this.music.context.onstatechange = this.changeState.bind(this);
                this.sound.context.onstatechange = this.changeState.bind(this);
                this.enabled = true;
                this.music.volume = 0x3c;
                this.resume();
              } catch (_0x40c544) {
                this.enabled = false;
                console.log("Web Audio API", _0x40c544);
                alert("Web Audio API is not supported in this browser");
              }
            }
          }
          ["resume"]() {
            if (!(_0x58f0a1["default"].isShowAD || this.pause || this._muted || _0x58f0a1["default"].pause)) {
              if (this.music.isSuspend()) {
                this.music.resume();
              }
              if (this.sound.isSuspend()) {
                this.sound.resume();
              }
              if (!(this.music.isSuspend() && this.sound.isSuspend())) {
                window.document.removeEventListener("mousedown", this.resume.bind(this), true);
                window.document.removeEventListener("touchstart", this.resume.bind(this), true);
                clearInterval(this.resumeId);
                this.resumeId = -0x1;
              }
            }
          }
          ["changeState"]() {
            if (!this._muted && -0x1 == this.resumeId && (this.music.isSuspend() && !this.music.pause || this.sound.isSuspend() && !this.sound.pause)) {
              window.document.addEventListener("mousedown", this.resume.bind(this), true);
              window.document.addEventListener("touchstart", this.resume.bind(this), true);
              this.resumeId = setInterval(this.resume.bind(this), 0xc8);
            }
          }
          ["changeVisibility"]() {
            if (!_0x58f0a1["default"].isShowAD) {
              if ("hidden" == document.visibilityState) {
                if (!this.muted) {
                  this.hiddenMuted = this.muted = true;
                }
                if ("undefined" != typeof Laya && _0x51ad81["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x63c6cc["default"].pause();
                  Laya.stage.renderingEnabled = false;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.pause();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.pause();
                  }
                }
              } else if ("visible" == document.visibilityState) {
                if (this.hiddenMuted) {
                  this.hiddenMuted = this.muted = false;
                }
                if ("undefined" != typeof Laya && _0x51ad81["default"].aotuPauseTimerOnVisibilityChange) {
                  _0x63c6cc["default"].resume();
                  Laya.stage.renderingEnabled = true;
                  if (Laya.updateTimer) {
                    Laya.updateTimer.resume();
                  }
                  if (Laya.physicsTimer) {
                    Laya.physicsTimer.resume();
                  }
                }
              }
            }
          }
          get ["pause"]() {
            return _0x58f0a1["default"].pause;
          }
          set ["pause"](_0x1526a1) {
            this.pauseMusic = _0x1526a1;
            this.pauseSound = _0x1526a1;
            _0x58f0a1["default"].pause = _0x1526a1;
          }
          get ["pauseMusic"]() {
            return this.music.isSuspend();
          }
          set ["pauseMusic"](_0x309213) {
            this.music.pause = _0x309213;
            if (_0x309213) {
              this.music.suspend();
            } else if (!this.muted) {
              this.music.resume();
            }
          }
          get ["pauseSound"]() {
            return this.sound.isSuspend();
          }
          set ["pauseSound"](_0x2b8824) {
            this.sound.pause = _0x2b8824;
            if (_0x2b8824) {
              this.sound.suspend();
            } else if (!this.muted) {
              this.sound.resume();
            }
          }
          set ["muted"](_0x26bb7a) {
            this._muted = _0x26bb7a;
            if (this._muted) {
              this.music.suspend();
              this.sound.suspend();
            } else if (-0x1 == this.resumeId) {
              this.resumeId = setInterval(this.resume.bind(this), 0xc8);
            }
          }
          get ["muted"]() {
            return this._muted;
          }
          ["playMusic"](_0x1c384f) {
            if (!_0x58f0a1["default"].pause) {
              this.music.play(_0x1c384f, true);
            }
          }
          ["stopMusic"]() {
            this.music.stopAll();
          }
          ["playSound"](_0x10ca62, _0x2eadda = false) {
            if (!_0x58f0a1["default"].pause) {
              this.sound.play(_0x10ca62, _0x2eadda);
            }
          }
          ["stopSound"]() {
            this.sound.stopAll();
          }
        }
        _0x13697f["default"] = _0x1a879e;
      },
      0x7bc: function (_0x17e6f9, _0x57a38d, _0x23892a) {
        'use strict';
  
        var _0x125764 = this && this.__importDefault || function (_0xa8b9f0) {
          return _0xa8b9f0 && _0xa8b9f0.__esModule ? _0xa8b9f0 : {
            "default": _0xa8b9f0
          };
        };
        Object.defineProperty(_0x57a38d, "__esModule", {
          "value": true
        });
        const _0x4889d6 = _0x125764(_0x23892a(0x109));
        const _0x1491fa = _0x125764(_0x23892a(0x1c5c));
        class _0x3be533 {
          static ["init"](_0x45aeb3, _0x110b54) {
            if (this.inited) {
              return;
            }
            this.inited = true;
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () {
              window.dataLayer.push(arguments);
            };
            gtag("js", new Date());
            gtag("config", _0x45aeb3);
            gtag("set", {
              "cookie_flags": "SameSite=None;Secure"
            });
            const _0x431a52 = document.createElement("script");
            _0x431a52.onload = function () {
              _0x3be533.event("loadSDK");
            };
            _0x431a52.async = true;
            _0x431a52.src = "https://www.googletagmanager.com/gtag/js?id=" + _0x45aeb3;
            document.head.appendChild(_0x431a52);
            this.register("event_category", () => _0x1491fa["default"].hostname(document.referrer));
            this.register("event_label", () => _0x4889d6["default"].tag + "-" + _0x4889d6["default"].appName);
            this.register("event_callback", () => function () {});
            if (_0x110b54) {
              _0x110b54();
            }
            return true;
          }
          static ["register"](_0x4081d2, _0x2a6002) {
            this.mp.set(_0x4081d2, _0x2a6002);
          }
          static ["event"](_0x43ad6b, _0x207cf7) {
            _0x207cf7 = _0x207cf7 || {};
            for (const [_0x4cc775, _0x7355d9] of this.mp.entries()) if (!_0x207cf7[_0x4cc775] && _0x7355d9) {
              _0x207cf7[_0x4cc775] = _0x7355d9();
            }
            gtag("event", _0x43ad6b, _0x207cf7);
          }
        }
        _0x57a38d["default"] = _0x3be533;
        _0x3be533.inited = false;
        _0x3be533.mp = new Map();
      },
      0x22bd: (_0x4f0e74, _0x1a6395) => {
        'use strict';
  
        var _0x9f36fa;
        var _0x3dfba2;
        Object.defineProperty(_0x1a6395, "__esModule", {
          "value": true
        });
        _0x1a6395.ENV = _0x1a6395.OS = undefined;
        (_0x3dfba2 = _0x1a6395.OS || (_0x1a6395.OS = {})).PC = "PC";
        _0x3dfba2.MOBILE = "MOBILE";
        (_0x9f36fa = _0x1a6395.ENV || (_0x1a6395.ENV = {}))[_0x9f36fa.PRE = 0x0] = "PRE";
        _0x9f36fa[_0x9f36fa.YAD = 0x1] = "YAD";
        _0x9f36fa[_0x9f36fa.YIV = 0x2] = "YIV";
        _0x9f36fa[_0x9f36fa.PUZZLEGAME = 0x3] = "PUZZLEGAME";
        _0x9f36fa[_0x9f36fa.BABYGAMES = 0x4] = "BABYGAMES";
        _0x9f36fa[_0x9f36fa.CARGAMES = 0x5] = "CARGAMES";
        _0x9f36fa[_0x9f36fa.BESTGAMES = 0x6] = "BESTGAMES";
        _0x9f36fa[_0x9f36fa.TOPGAMES = 0x7] = "TOPGAMES";
        _0x9f36fa[_0x9f36fa.J4 = 0x8] = "J4";
        _0x9f36fa[_0x9f36fa.OTHER = 0x9] = "OTHER";
        _0x9f36fa[_0x9f36fa.JUMP = 0xa] = "JUMP";
      },
      0x1588: (_0x3c3341, _0xf814dc, _0x27c88d) => {
        'use strict';
  
        Object.defineProperty(_0xf814dc, "__esModule", {
          "value": true
        });
        const _0x3c9fe5 = _0x27c88d(0x22bd);
        class _0x47d013 {
          static ["isMobile"]() {
            _0xbb6c50 = navigator.userAgent || navigator.vendor || window.opera;
            return !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(_0xbb6c50) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0xbb6c50.substr(0x0, 0x4)));
            var _0xbb6c50;
          }
          static ["init"]() {
            if (this.inited) {
              return;
            }
            this.inited = true;
            const _0xee2df3 = window.navigator.userAgent;
            const _0x785856 = this.isMobile();
            if (!(_0xee2df3.indexOf("Android") > -0x1)) {
              _0xee2df3.indexOf("Adr");
            }
            const _0x475438 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (_0x785856) {
              this.isIOS = _0x475438;
              this.os = _0x3c9fe5.OS.MOBILE;
            } else {
              this.os = _0x3c9fe5.OS.PC;
            }
            if (self != top) {
              this.iframe = true;
            }
            let _0x2e2197 = location.hostname;
            if (this.iframe) {
              try {
                _0x2e2197 = top.location.href;
              } catch (_0x277fe4) {
                try {
                  const _0x4a98b5 = location.ancestorOrigins.length;
                  _0x2e2197 = _0x4a98b5 > 0x1 ? location.ancestorOrigins[_0x4a98b5 - 0x1] : document.referrer;
                } catch (_0x2d58ee) {
                  try {
                    _0x2e2197 = document.referrer;
                  } catch (_0x12966f) {
                    try {
                      _0x2e2197 = location.hostname;
                    } catch (_0x236106) {}
                  }
                }
              }
              this.referrer = new URL(_0x2e2197).hostname;
            } else if ('' == document.referrer) {
              this.referrer = location.hostname;
            } else {
              this.referrer = new URL(document.referrer).hostname;
            }
            function _0x3dc4b2(_0x24f4ba) {
              let _0x298231 = _0x3c9fe5.ENV.OTHER;
              if (["192.168.0", "192.168.1", "127.0.0.1", "localhost", "preview.construct.net", "yof.com/games-test", "meenagames.com", "testgame.oneupitsolution.com", "coolgamespot.com", "games.propheticdevelopers.com", "dreamtowngame.online"].find(_0x471eca => _0x24f4ba.indexOf(_0x471eca) > -0x1)) {
                _0x298231 = _0x3c9fe5.ENV.PRE;
              } else {
                _0x298231 = _0x3c9fe5.ENV.OTHER;
                if (_0x24f4ba.indexOf("yad.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.YAD;
                }
                if (_0x24f4ba.indexOf("yiv.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.YIV;
                }
                if (_0x24f4ba.indexOf("puzzlegame.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.PUZZLEGAME;
                }
                if (_0x24f4ba.indexOf("babygames.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.BABYGAMES;
                }
                if (_0x24f4ba.indexOf("cargames.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.CARGAMES;
                }
                if (_0x24f4ba.indexOf("bestgames.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.BESTGAMES;
                }
                if (_0x24f4ba.indexOf("topgames.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.TOPGAMES;
                }
                if (_0x24f4ba.indexOf("4j.com") > -0x1) {
                  _0x298231 = _0x3c9fe5.ENV.J4;
                }
              }
              return _0x298231;
            }
            this.env = _0x3dc4b2(this.referrer);
            if (this.iframe) {
              this.iframeEnv = _0x3dc4b2(location.href);
            }
          }
        }
        _0xf814dc["default"] = _0x47d013;
        _0x47d013.inited = false;
        _0x47d013.country = '';
        _0x47d013.aotuPauseTimerOnVisibilityChange = true;
        _0x47d013.iframe = false;
        _0x47d013.testGame = false;
        _0x47d013.referrer = '';
      },
      0x43b: (_0x1b64a6, _0x34433f) => {
        'use strict';
  
        Object.defineProperty(_0x34433f, "__esModule", {
          "value": true
        });
        _0x34433f["default"] = class {
          static ["format"](_0x4674da, ..._0x583d93) {
            var _0x287fba;
            var _0x56c31b;
            var _0x326f5a;
            var _0x3e9db1;
            var _0x10a085;
            var _0x965b00;
            var _0x34ff33;
            var _0x440eb2;
            var _0x18d22c = ["([^%]*)", "%", "(['\\-+ #0]*?)", "([1-9]\\d*)?", "(\\.([1-9]\\d*))?", "[lhjztL]*?", "([diouxXfFeEgGaAcCsSp%jr])"].join('');
            var _0x35e2b0 = new RegExp(_0x18d22c);
            var _0x381f6e = Array.prototype.slice.call(arguments, 0x1);
            var _0x1852ca = _0x4674da;
            for (var _0x5c0ba0 = ''; null !== (_0x440eb2 = _0x35e2b0.exec(_0x1852ca));) {
              _0x5c0ba0 += _0x440eb2[0x1];
              _0x1852ca = _0x1852ca.substring(_0x440eb2[0x0].length);
              _0x440eb2[0x0].substring(_0x440eb2[0x1].length);
              _0x440eb2[0x1].length;
              _0x440eb2[0x0].length;
              _0x287fba = _0x440eb2[0x2] || '';
              _0x56c31b = _0x440eb2[0x3] || 0x0;
              _0x440eb2[0x4];
              _0x3e9db1 = false;
              _0x965b00 = false;
              _0x10a085 = " ";
              if ("%" != (_0x326f5a = _0x440eb2[0x6])) {
                _0x34ff33 = _0x381f6e.shift();
                if (_0x287fba.match(/-/)) {
                  _0x3e9db1 = true;
                }
                if (_0x287fba.match(/0/)) {
                  _0x10a085 = "0";
                }
                if (_0x287fba.match(/\+/)) {
                  _0x965b00 = true;
                }
                switch (_0x326f5a) {
                  case "s":
                    _0x5c0ba0 += this.doPad(_0x10a085, _0x56c31b, _0x3e9db1, _0x34ff33.toString());
                    break;
                  case "d":
                    _0x34ff33 = Math.floor(_0x34ff33);
                  case "f":
                    _0x5c0ba0 += (_0x965b00 = _0x965b00 && _0x34ff33 > 0x0 ? "+" : '') + this.doPad(_0x10a085, _0x56c31b, _0x3e9db1, _0x34ff33.toString());
                    break;
                  case "x":
                    _0x5c0ba0 += this.doPad(_0x10a085, _0x56c31b, _0x3e9db1, _0x34ff33.toString(0x10));
                    break;
                  default:
                    throw "is not supported";
                }
              } else {
                _0x5c0ba0 += "%";
              }
            }
            return _0x5c0ba0 + _0x1852ca;
          }
          static ["doPad"](_0xb7acb9, _0x221b24, _0x23af74, _0x4c85ae) {
            for (var _0x379e7b = _0x4c85ae; _0x379e7b.length < _0x221b24;) {
              if (_0x23af74) {
                _0x379e7b += _0xb7acb9;
              } else {
                _0x379e7b = _0xb7acb9 + _0x379e7b;
              }
            }
            return _0x379e7b;
          }
        };
      },
      0x1d97: (_0x32f89b, _0x93737b) => {
        'use strict';
  
        Object.defineProperty(_0x93737b, "__esModule", {
          "value": true
        });
        _0x93737b["default"] = class {
          static ["get"](_0x58cb61, _0x4af714) {
            return new Promise((_0x19f056, _0x320247) => {
              const _0xca7598 = new XMLHttpRequest();
              _0xca7598.open("GET", _0x58cb61, true);
              _0xca7598.onload = function () {
                let _0xa3ae42 = _0xca7598.response;
                if (0xc8 != _0xca7598.status && 0x0 != _0xca7598.status || _0xa3ae42.byteLength < 0xa) {
                  _0x4af714(null);
                  return void _0x19f056(null);
                }
                try {
                  _0xa3ae42 = JSON.parse(_0xa3ae42);
                } catch (_0x2d649b) {}
                _0x19f056(_0xa3ae42);
                if (_0x4af714) {
                  _0x4af714(_0xa3ae42);
                }
              };
              _0xca7598.onerror = function (_0x5be91e) {
                _0x19f056(null);
                if (_0x4af714) {
                  _0x4af714(null);
                }
              };
              _0xca7598.send();
            });
          }
          static ["post"](_0x2ae7d6, _0x25115a, _0x57c8b2) {
            return new Promise((_0x39d320, _0x31c671) => {
              const _0x20b789 = new XMLHttpRequest();
              _0x20b789.open("POST", _0x2ae7d6, true);
              _0x20b789.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
              _0x20b789.responseType = "text";
              _0x20b789.onload = function (_0x187dbe) {
                var _0x3419b2 = undefined !== _0x20b789.status ? _0x20b789.status : 0xc8;
                if (0xc8 !== _0x3419b2 && 0xcc !== _0x3419b2 && 0x0 !== _0x3419b2) {
                  throw new Error("SEVRVER_OPTIONS_TIMEOUT");
                }
                try {
                  const _0x11987d = JSON.parse(_0x20b789.responseText);
                  _0x39d320(_0x11987d);
                  if (_0x57c8b2) {
                    _0x57c8b2(_0x11987d);
                  }
                } catch (_0x30b1ce) {
                  throw new Error("SEVRVER_OPTIONS_TIMEOUT");
                }
              };
              _0x20b789.send(_0x25115a);
            });
          }
        };
      },
      0x1c5c: function (_0x32ccb8, _0x4c1f57, _0x24bedb) {
        'use strict';
  
        var _0x453f90 = this && this.__importDefault || function (_0x4967b0) {
          return _0x4967b0 && _0x4967b0.__esModule ? _0x4967b0 : {
            "default": _0x4967b0
          };
        };
        Object.defineProperty(_0x4c1f57, "__esModule", {
          "value": true
        });
        const _0x5c6437 = _0x453f90(_0x24bedb(0x1b83));
        const _0x396c1b = _0x453f90(_0x24bedb(0x10e7));
        _0x4c1f57["default"] = class {
          static ["ga"](_0x4d4f8d) {
            window.dataLayer = window.dataLayer || [];
            window.gtag = function (_0x10b03c, _0x1deb69) {
              window.dataLayer.push(arguments);
            };
            window.gtag("js", new Date());
            window.gtag("config", _0x4d4f8d);
            const _0x230c2e = document.createElement("script");
            _0x230c2e.async = true;
            _0x230c2e.src = "https://www.googletagmanager.com/gtag/js?id=" + _0x4d4f8d;
            document.head.appendChild(_0x230c2e);
          }
          static ["hostname"](_0x475636) {
            try {
              const _0x41bc7d = new URL(_0x475636).hostname.split(".");
              const _0x59a5b3 = _0x41bc7d.length - 0x1;
              const _0x563fc6 = _0x41bc7d.length >= 0x3 && (_0x41bc7d[_0x59a5b3] + _0x41bc7d[_0x59a5b3 - 0x1]).length <= 0x5;
              return _0x41bc7d.splice(_0x563fc6 ? -0x3 : -0x2).join(".");
            } catch (_0x2f3b73) {
              return location.href;
            }
          }
          static ["trace"](..._0x1e6e03) {
            _0x396c1b["default"].getInstance().trace(..._0x1e6e03);
          }
          static ["status"](..._0x400e2f) {
            _0x396c1b["default"].getInstance().status(..._0x400e2f);
          }
          static ["showLoading"]() {
            _0x5c6437["default"].getInstance().showLoading();
          }
          static ["hideLoading"]() {
            _0x5c6437["default"].getInstance().hideLoading();
          }
        };
      },
      0x92e: function (_0x417214, _0x574b44, _0x2e8d70) {
        'use strict';
  
        var _0xdb02f0 = this && this.__importDefault || function (_0xda1607) {
          return _0xda1607 && _0xda1607.__esModule ? _0xda1607 : {
            "default": _0xda1607
          };
        };
        Object.defineProperty(_0x574b44, "__esModule", {
          "value": true
        });
        const _0x970384 = _0xdb02f0(_0x2e8d70(0x10e7));
        const _0x314425 = _0xdb02f0(_0x2e8d70(0x1b83));
        _0x574b44["default"] = class {
          static ["setLoadingAlpha"](_0x39559e) {
            _0x314425["default"].getInstance().setAlpha(_0x39559e);
          }
          static ["readDataSync"](_0x15b33f) {
            return new Promise((_0xe14764, _0x5672b7) => {
              var _0x12c822 = new XMLHttpRequest();
              _0x12c822.open("GET", _0x15b33f, true);
              _0x12c822.onerror = _0x12c822.onabort = function (_0x1f5c73) {
                _0x5672b7();
              };
              _0x12c822.onload = function (_0x9d8958) {
                var _0x5695e4 = undefined !== _0x12c822.status ? _0x12c822.status : 0xc8;
                if (0xc8 === _0x5695e4 || 0xcc === _0x5695e4 || 0x0 === _0x5695e4) {
                  _0xe14764(JSON.parse(_0x12c822.responseText));
                } else {
                  _0x5672b7();
                }
              };
              _0x12c822.send();
            });
          }
          static ["onYYGGamesWebsite"]() {
            return !!window.yygGamesOwnSite && window.yygGamesOwnSite;
          }
          static ["trace"](..._0x1ab855) {
            _0x970384["default"].getInstance().trace(..._0x1ab855);
          }
          static ["traceWarn"](_0x5bce98) {
            _0x970384["default"].getInstance().traceWarn(_0x5bce98);
          }
          static ["traceVersion"](_0x47cc73) {
            _0x970384["default"].getInstance().traceVersion(_0x47cc73);
          }
          static ["showMsg"](_0x5aedf9) {}
          static ["hideMsg"]() {}
          static ["get"](_0x97fc7d) {
            return new Promise((_0x4ba24f, _0x165f18) => {
              const _0x50d80e = new XMLHttpRequest();
              _0x50d80e.open("GET", _0x97fc7d, true);
              _0x50d80e.onload = function () {
                var _0x33e6a4 = _0x50d80e.response;
                if (0xc8 != _0x50d80e.status && 0x0 != _0x50d80e.status || _0x33e6a4.byteLength < 0xa) {
                  _0x4ba24f(null);
                } else {
                  var _0x3907b9 = null;
                  try {
                    _0x3907b9 = JSON.parse(_0x33e6a4);
                  } catch (_0x3f40ec) {}
                  _0x4ba24f(_0x3907b9);
                }
              };
              _0x50d80e.onerror = function (_0x5d7407) {
                _0x4ba24f(null);
              };
              _0x50d80e.send(null);
            });
          }
          static ["addAsyncScript"](_0x58d88a, _0x5504c4, _0x199817) {
            var _0x3d69fe = document.getElementById(_0x5504c4);
            if (!_0x3d69fe) {
              (_0x3d69fe = document.createElement("script")).async = true;
              _0x3d69fe.onload = _0x199817;
              _0x3d69fe.src = _0x58d88a;
              document.head.appendChild(_0x3d69fe);
            }
          }
          static ["randomInt"](_0x519d69, _0x3e28d3) {
            return _0x519d69 + Math.round(Math.random() * (_0x3e28d3 - _0x519d69));
          }
          static ["randomArray"](_0x682199) {
            return _0x682199 && 0x0 != _0x682199.length ? _0x682199[this.randomInt(0x0, _0x682199.length - 0x1)] : null;
          }
        };
      },
      0x1b60: _0x21e0de => {
        var _0x530dfa;
        self;
        _0x530dfa = () => (() => {
          'use strict';
  
          var _0x12be0e = {
            0x301: (_0x5995e6, _0x2296ad, _0x541379) => {
              const _0x411301 = _0x541379(0x7e);
              const _0x2e19e9 = _0x541379(0x19b);
              const _0x342430 = new class extends _0x2e19e9 {
                ["content"]({
                  onError: _0x2d05fa,
                  onResult: _0x402573,
                  onDone: _0x2a4593
                }) {
                  let _0x415d2c = '';
                  _0x415d2c += "var _results = new Array(" + this.options.taps.length + ");\n";
                  _0x415d2c += "var _checkDone = function() {\n";
                  _0x415d2c += "for(var i = 0; i < _results.length; i++) {\n";
                  _0x415d2c += "var item = _results[i];\n";
                  _0x415d2c += "if(item === undefined) return false;\n";
                  _0x415d2c += "if(item.result !== undefined) {\n";
                  _0x415d2c += _0x402573("item.result");
                  _0x415d2c += "return true;\n";
                  _0x415d2c += "}\n";
                  _0x415d2c += "if(item.error) {\n";
                  _0x415d2c += _0x2d05fa("item.error");
                  _0x415d2c += "return true;\n";
                  _0x415d2c += "}\n";
                  _0x415d2c += "}\n";
                  _0x415d2c += "return false;\n";
                  _0x415d2c += "}\n";
                  _0x415d2c += this.callTapsParallel({
                    "onError": (_0x51c35e, _0x52021e, _0x2ab3c9, _0x2eaabd) => {
                      let _0x18c926 = '';
                      _0x18c926 += "if(" + _0x51c35e + " < _results.length && ((_results.length = " + (_0x51c35e + 0x1) + "), (_results[" + _0x51c35e + "] = { error: " + _0x52021e + " }), _checkDone())) {\n";
                      _0x18c926 += _0x2eaabd(true);
                      _0x18c926 += "} else {\n";
                      _0x18c926 += _0x2ab3c9();
                      _0x18c926 += "}\n";
                      return _0x18c926;
                    },
                    "onResult": (_0x3999c9, _0xab9228, _0x56265f, _0x3d2f16) => {
                      let _0x45caa6 = '';
                      _0x45caa6 += "if(" + _0x3999c9 + " < _results.length && (" + _0xab9228 + " !== undefined && (_results.length = " + (_0x3999c9 + 0x1) + "), (_results[" + _0x3999c9 + "] = { result: " + _0xab9228 + " }), _checkDone())) {\n";
                      _0x45caa6 += _0x3d2f16(true);
                      _0x45caa6 += "} else {\n";
                      _0x45caa6 += _0x56265f();
                      _0x45caa6 += "}\n";
                      return _0x45caa6;
                    },
                    "onTap": (_0x529031, _0x4592c6, _0x4bed1a, _0x16f799) => {
                      let _0x114546 = '';
                      if (_0x529031 > 0x0) {
                        _0x114546 += "if(" + _0x529031 + " >= _results.length) {\n";
                        _0x114546 += _0x4bed1a();
                        _0x114546 += "} else {\n";
                      }
                      _0x114546 += _0x4592c6();
                      if (_0x529031 > 0x0) {
                        _0x114546 += "}\n";
                      }
                      return _0x114546;
                    },
                    "onDone": _0x2a4593
                  });
                  return _0x415d2c;
                }
              }();
              const _0x6aa553 = function (_0x245ec4) {
                _0x342430.setup(this, _0x245ec4);
                return _0x342430.create(_0x245ec4);
              };
              function _0x3791fb(_0x2cfabb = [], _0x40afc3 = undefined) {
                const _0x12c9be = new _0x411301(_0x2cfabb, _0x40afc3);
                _0x12c9be.constructor = _0x3791fb;
                _0x12c9be.compile = _0x6aa553;
                _0x12c9be._call = undefined;
                _0x12c9be.call = undefined;
                return _0x12c9be;
              }
              _0x3791fb.prototype = null;
              _0x5995e6.exports = _0x3791fb;
            },
            0x102: (_0xfd8d52, _0x5177d4, _0x301d3f) => {
              const _0x55fb66 = _0x301d3f(0x7e);
              const _0x497fd8 = _0x301d3f(0x19b);
              const _0x20395d = new class extends _0x497fd8 {
                ["content"]({
                  onError: _0x4687d3,
                  onDone: _0x2c7d20
                }) {
                  return this.callTapsParallel({
                    "onError": (_0x2b1cc8, _0x42f2cf, _0x165c4d, _0x34200a) => _0x4687d3(_0x42f2cf) + _0x34200a(true),
                    "onDone": _0x2c7d20
                  });
                }
              }();
              const _0xc3d6da = function (_0x560b40) {
                _0x20395d.setup(this, _0x560b40);
                return _0x20395d.create(_0x560b40);
              };
              function _0x318249(_0x3d769d = [], _0x1b836b = undefined) {
                const _0x52c2fe = new _0x55fb66(_0x3d769d, _0x1b836b);
                _0x52c2fe.constructor = _0x318249;
                _0x52c2fe.compile = _0xc3d6da;
                _0x52c2fe._call = undefined;
                _0x52c2fe.call = undefined;
                return _0x52c2fe;
              }
              _0x318249.prototype = null;
              _0xfd8d52.exports = _0x318249;
            },
            0x2b8: (_0x13d070, _0x5c1df4, _0x1c5125) => {
              const _0x7545e1 = _0x1c5125(0x7e);
              const _0x4fa149 = _0x1c5125(0x19b);
              const _0x3eee1d = new class extends _0x4fa149 {
                ["content"]({
                  onError: _0x12a665,
                  onResult: _0x43d56d,
                  resultReturns: _0x4ac0cd,
                  onDone: _0x30df98
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x15fce5, _0x24906a, _0x112e87, _0x56a397) => _0x12a665(_0x24906a) + _0x56a397(true),
                    "onResult": (_0x4dfdc6, _0x29d4e3, _0xc4340a) => "if(" + _0x29d4e3 + " !== undefined) {\n" + _0x43d56d(_0x29d4e3) + "\n} else {\n" + _0xc4340a() + "}\n",
                    "resultReturns": _0x4ac0cd,
                    "onDone": _0x30df98
                  });
                }
              }();
              const _0x33abc5 = function (_0x17861a) {
                _0x3eee1d.setup(this, _0x17861a);
                return _0x3eee1d.create(_0x17861a);
              };
              function _0x5cda30(_0x4cab0a = [], _0x5348e1 = undefined) {
                const _0x32387c = new _0x7545e1(_0x4cab0a, _0x5348e1);
                _0x32387c.constructor = _0x5cda30;
                _0x32387c.compile = _0x33abc5;
                _0x32387c._call = undefined;
                _0x32387c.call = undefined;
                return _0x32387c;
              }
              _0x5cda30.prototype = null;
              _0x13d070.exports = _0x5cda30;
            },
            0x1c9: (_0x3c6bd8, _0x4798cc, _0x36f17f) => {
              const _0xa79d1b = _0x36f17f(0x7e);
              const _0x58cf3e = _0x36f17f(0x19b);
              const _0x41eec6 = new class extends _0x58cf3e {
                ["content"]({
                  onError: _0x4cbec8,
                  onDone: _0x3cd5af
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x2def56, _0x12cfb1, _0x562c7b, _0x4c0a7d) => _0x4cbec8(_0x12cfb1) + _0x4c0a7d(true),
                    "onDone": _0x3cd5af
                  });
                }
              }();
              const _0xa88dee = function (_0x44547a) {
                _0x41eec6.setup(this, _0x44547a);
                return _0x41eec6.create(_0x44547a);
              };
              function _0x493ec6(_0x56e870 = [], _0x488768 = undefined) {
                const _0x56d013 = new _0xa79d1b(_0x56e870, _0x488768);
                _0x56d013.constructor = _0x493ec6;
                _0x56d013.compile = _0xa88dee;
                _0x56d013._call = undefined;
                _0x56d013.call = undefined;
                return _0x56d013;
              }
              _0x493ec6.prototype = null;
              _0x3c6bd8.exports = _0x493ec6;
            },
            0x344: (_0x9b3aa9, _0x2ab9f5, _0x4708aa) => {
              const _0xee2f33 = _0x4708aa(0x7e);
              const _0x1b188f = _0x4708aa(0x19b);
              const _0x46d83d = new class extends _0x1b188f {
                ["content"]({
                  onError: _0x4c10fb,
                  onDone: _0x36d907
                }) {
                  return this.callTapsLooping({
                    "onError": (_0x21f9f6, _0x4cd584, _0x1b50eb, _0x34ea2f) => _0x4c10fb(_0x4cd584) + _0x34ea2f(true),
                    "onDone": _0x36d907
                  });
                }
              }();
              const _0x45fadf = function (_0x261fe1) {
                _0x46d83d.setup(this, _0x261fe1);
                return _0x46d83d.create(_0x261fe1);
              };
              function _0x8c550f(_0x29003c = [], _0x316e54 = undefined) {
                const _0x146076 = new _0xee2f33(_0x29003c, _0x316e54);
                _0x146076.constructor = _0x8c550f;
                _0x146076.compile = _0x45fadf;
                _0x146076._call = undefined;
                _0x146076.call = undefined;
                return _0x146076;
              }
              _0x8c550f.prototype = null;
              _0x9b3aa9.exports = _0x8c550f;
            },
            0x2ae: (_0x3adc90, _0x22efe3, _0x5de915) => {
              const _0x5a8823 = _0x5de915(0x7e);
              const _0x15cb7e = _0x5de915(0x19b);
              const _0x4ad0f8 = new class extends _0x15cb7e {
                ["content"]({
                  onError: _0x17554e,
                  onResult: _0xa99c1b,
                  onDone: _0x202ca1
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x107f71, _0x19f882, _0x4522c5, _0x43b7ac) => _0x17554e(_0x19f882) + _0x43b7ac(true),
                    "onResult": (_0x420a36, _0x532ab6, _0x32d4bd) => {
                      let _0x303d1b = '';
                      _0x303d1b += "if(" + _0x532ab6 + " !== undefined) {\n";
                      _0x303d1b += this._args[0x0] + " = " + _0x532ab6 + ";\n";
                      _0x303d1b += "}\n";
                      _0x303d1b += _0x32d4bd();
                      return _0x303d1b;
                    },
                    "onDone": () => _0xa99c1b(this._args[0x0])
                  });
                }
              }();
              const _0x12f82d = function (_0xa02aac) {
                _0x4ad0f8.setup(this, _0xa02aac);
                return _0x4ad0f8.create(_0xa02aac);
              };
              function _0x207dff(_0x13e11f = [], _0xec130f = undefined) {
                if (_0x13e11f.length < 0x1) {
                  throw new Error("Waterfall hooks must have at least one argument");
                }
                const _0x18b460 = new _0x5a8823(_0x13e11f, _0xec130f);
                _0x18b460.constructor = _0x207dff;
                _0x18b460.compile = _0x12f82d;
                _0x18b460._call = undefined;
                _0x18b460.call = undefined;
                return _0x18b460;
              }
              _0x207dff.prototype = null;
              _0x3adc90.exports = _0x207dff;
            },
            0x7e: (_0x2daa5a, _0x26a750, _0xde1248) => {
              const _0x2c82f4 = _0xde1248(0x9).deprecate(() => {}, "Hook.context is deprecated and will be removed");
              const _0x430ca5 = function (..._0x5920fb) {
                this.call = this._createCall("sync");
                return this.call(..._0x5920fb);
              };
              const _0x2db35e = function (..._0x39dfab) {
                this.callAsync = this._createCall("async");
                return this.callAsync(..._0x39dfab);
              };
              const _0x592199 = function (..._0x5aa82a) {
                this.promise = this._createCall("promise");
                return this.promise(..._0x5aa82a);
              };
              class _0x22f6ab {
                constructor(_0x2b12be = [], _0x3e2d1f = undefined) {
                  this._args = _0x2b12be;
                  this.name = _0x3e2d1f;
                  this.taps = [];
                  this.interceptors = [];
                  this._call = _0x430ca5;
                  this.call = _0x430ca5;
                  this._callAsync = _0x2db35e;
                  this.callAsync = _0x2db35e;
                  this._promise = _0x592199;
                  this.promise = _0x592199;
                  this._x = undefined;
                  this.compile = this.compile;
                  this.tap = this.tap;
                  this.tapAsync = this.tapAsync;
                  this.tapPromise = this.tapPromise;
                }
                ["compile"](_0x1557ed) {
                  throw new Error("Abstract: should be overridden");
                }
                ["_createCall"](_0x2943ef) {
                  return this.compile({
                    "taps": this.taps,
                    "interceptors": this.interceptors,
                    "args": this._args,
                    "type": _0x2943ef
                  });
                }
                ["_tap"](_0x22cb62, _0x964203, _0x3de416) {
                  if ("string" == typeof _0x964203) {
                    _0x964203 = {
                      "name": _0x964203.trim()
                    };
                  } else {
                    if ("object" != typeof _0x964203 || null === _0x964203) {
                      throw new Error("Invalid tap options");
                    }
                  }
                  if ("string" != typeof _0x964203.name || '' === _0x964203.name) {
                    throw new Error("Missing name for tap");
                  }
                  if (undefined !== _0x964203.context) {
                    _0x2c82f4();
                  }
                  _0x964203 = Object.assign({
                    "type": _0x22cb62,
                    "fn": _0x3de416
                  }, _0x964203);
                  _0x964203 = this._runRegisterInterceptors(_0x964203);
                  this._insert(_0x964203);
                }
                ["tap"](_0x484d11, _0x45acf4) {
                  this._tap("sync", _0x484d11, _0x45acf4);
                }
                ["tapAsync"](_0x4b1378, _0x2705bb) {
                  this._tap("async", _0x4b1378, _0x2705bb);
                }
                ["tapPromise"](_0x159be, _0x1b6694) {
                  this._tap("promise", _0x159be, _0x1b6694);
                }
                ["_runRegisterInterceptors"]() {
                  for (const _0x2dd059 of this.interceptors) if (_0x2dd059.register) {
                    const _0x135f45 = _0x2dd059.register(_0x135f45);
                    if (undefined !== _0x135f45) {
                      _0x135f45;
                    }
                  }
                  return _0x135f45;
                }
                ["withOptions"](_0x3e8236) {
                  const _0xc5427f = _0x141bc8 => Object.assign({}, _0x3e8236, "string" == typeof _0x141bc8 ? {
                    "name": _0x141bc8
                  } : _0x141bc8);
                  return {
                    "name": this.name,
                    "tap": (_0x55fb2a, _0xdae221) => this.tap(Object.assign({}, _0x3e8236, "string" == typeof _0x55fb2a ? {
                      "name": _0x55fb2a
                    } : _0x55fb2a), _0xdae221),
                    "tapAsync": (_0x589fd0, _0x11f48d) => this.tapAsync(Object.assign({}, _0x3e8236, "string" == typeof _0x589fd0 ? {
                      "name": _0x589fd0
                    } : _0x589fd0), _0x11f48d),
                    "tapPromise": (_0x1afa87, _0x44121c) => this.tapPromise(Object.assign({}, _0x3e8236, "string" == typeof _0x1afa87 ? {
                      "name": _0x1afa87
                    } : _0x1afa87), _0x44121c),
                    "intercept": _0xb347cf => this.intercept(_0xb347cf),
                    "isUsed": () => this.isUsed(),
                    "withOptions": _0x4c1d08 => this.withOptions(Object.assign({}, _0x3e8236, "string" == typeof _0x4c1d08 ? {
                      "name": _0x4c1d08
                    } : _0x4c1d08))
                  };
                }
                ["isUsed"]() {
                  return this.taps.length > 0x0 || this.interceptors.length > 0x0;
                }
                ["intercept"](_0x4c79bb) {
                  this._resetCompilation();
                  this.interceptors.push(Object.assign({}, _0x4c79bb));
                  if (_0x4c79bb.register) {
                    for (let _0x1ce10f = 0x0; _0x1ce10f < this.taps.length; _0x1ce10f++) {
                      this.taps[_0x1ce10f] = _0x4c79bb.register(this.taps[_0x1ce10f]);
                    }
                  }
                }
                ["_resetCompilation"]() {
                  this.call = this._call;
                  this.callAsync = this._callAsync;
                  this.promise = this._promise;
                }
                ["_insert"](_0x1656bf) {
                  let _0x1afb44;
                  this._resetCompilation();
                  if ("string" == typeof _0x1656bf.before) {
                    _0x1afb44 = new Set([_0x1656bf.before]);
                  } else if (Array.isArray(_0x1656bf.before)) {
                    _0x1afb44 = new Set(_0x1656bf.before);
                  }
                  let _0xc67c1e = 0x0;
                  if ("number" == typeof _0x1656bf.stage) {
                    _0xc67c1e = _0x1656bf.stage;
                  }
                  let _0x3a3c3a = this.taps.length;
                  for (; _0x3a3c3a > 0x0;) {
                    _0x3a3c3a--;
                    const _0x521ccf = this.taps[_0x3a3c3a];
                    this.taps[_0x3a3c3a + 0x1] = _0x521ccf;
                    const _0x44e3a5 = _0x521ccf.stage || 0x0;
                    if (_0x1afb44) {
                      if (_0x1afb44.has(_0x521ccf.name)) {
                        _0x1afb44["delete"](_0x521ccf.name);
                        continue;
                      }
                      if (_0x1afb44.size > 0x0) {
                        continue;
                      }
                    }
                    if (!(_0x44e3a5 > _0xc67c1e)) {
                      _0x3a3c3a++;
                      break;
                    }
                  }
                  this.taps[_0x3a3c3a] = _0x1656bf;
                }
              }
              Object.setPrototypeOf(_0x22f6ab.prototype, null);
              _0x2daa5a.exports = _0x22f6ab;
            },
            0x19b: _0x320d18 => {
              _0x320d18.exports = class {
                constructor(_0x2f662d) {
                  this.config = _0x2f662d;
                  this.options = undefined;
                  this._args = undefined;
                }
                ["create"](_0x49c5f3) {
                  let _0x415d6c;
                  this.init(_0x49c5f3);
                  switch (this.options.type) {
                    case "sync":
                      _0x415d6c = new Function(this.args(), "\"use strict\";\n" + this.header() + this.contentWithInterceptors({
                        "onError": _0x544ac8 => "throw " + _0x544ac8 + ";\n",
                        "onResult": _0x2b6864 => "return " + _0x2b6864 + ";\n",
                        "resultReturns": true,
                        "onDone": () => '',
                        "rethrowIfPossible": true
                      }));
                      break;
                    case "async":
                      _0x415d6c = new Function(this.args({
                        "after": "_callback"
                      }), "\"use strict\";\n" + this.header() + this.contentWithInterceptors({
                        "onError": _0x28856e => "_callback(" + _0x28856e + ");\n",
                        "onResult": _0x1b89b4 => "_callback(null, " + _0x1b89b4 + ");\n",
                        "onDone": () => "_callback();\n"
                      }));
                      break;
                    case "promise":
                      let _0x508a76 = false;
                      _0x508a76 = true;
                      const _0xc50ea4 = this.contentWithInterceptors({
                        "onError": _0x35b276 => "_error(" + _0x35b276 + ");\n",
                        "onResult": _0x1254ea => "_resolve(" + _0x1254ea + ");\n",
                        "onDone": () => "_resolve();\n"
                      });
                      let _0x310e5e = '';
                      _0x310e5e += "\"use strict\";\n";
                      _0x310e5e += this.header();
                      _0x310e5e += "return new Promise((function(_resolve, _reject) {\n";
                      if (_0x508a76) {
                        _0x310e5e += "var _sync = true;\n";
                        _0x310e5e += "function _error(_err) {\n";
                        _0x310e5e += "if(_sync)\n";
                        _0x310e5e += "_resolve(Promise.resolve().then((function() { throw _err; })));\n";
                        _0x310e5e += "else\n";
                        _0x310e5e += "_reject(_err);\n";
                        _0x310e5e += "};\n";
                      }
                      _0x310e5e += _0xc50ea4;
                      if (_0x508a76) {
                        _0x310e5e += "_sync = false;\n";
                      }
                      _0x310e5e += "}));\n";
                      _0x415d6c = new Function(this.args(), _0x310e5e);
                  }
                  this.deinit();
                  return _0x415d6c;
                }
                ["setup"](_0x964e2d, _0x389a3d) {
                  _0x964e2d._x = _0x389a3d.taps.map(_0x10ab0f => _0x10ab0f.fn);
                }
                ["init"](_0x14a947) {
                  this.options = _0x14a947;
                  this._args = _0x14a947.args.slice();
                }
                ["deinit"]() {
                  this.options = undefined;
                  this._args = undefined;
                }
                ["contentWithInterceptors"](_0x289e20) {
                  if (this.options.interceptors.length > 0x0) {
                    const _0x56417c = _0x289e20.onError;
                    const _0x98d883 = _0x289e20.onResult;
                    const _0x5b92c5 = _0x289e20.onDone;
                    let _0x442e17 = '';
                    for (let _0x3b56a7 = 0x0; _0x3b56a7 < this.options.interceptors.length; _0x3b56a7++) {
                      const _0x10d4f2 = this.options.interceptors[_0x3b56a7];
                      if (_0x10d4f2.call) {
                        _0x442e17 += this.getInterceptor(_0x3b56a7) + ".call(" + this.args({
                          "before": _0x10d4f2.context ? "_context" : undefined
                        }) + ");\n";
                      }
                    }
                    _0x442e17 += this.content(Object.assign(_0x289e20, {
                      "onError": _0x56417c && (_0x16343e => {
                        let _0x22a0bc = '';
                        for (let _0x3349e7 = 0x0; _0x3349e7 < this.options.interceptors.length; _0x3349e7++) {
                          if (this.options.interceptors[_0x3349e7].error) {
                            _0x22a0bc += this.getInterceptor(_0x3349e7) + ".error(" + _0x16343e + ");\n";
                          }
                        }
                        _0x22a0bc += _0x56417c(_0x16343e);
                        return _0x22a0bc;
                      }),
                      "onResult": _0x98d883 && (_0x439f0c => {
                        let _0x420c3a = '';
                        for (let _0x185f27 = 0x0; _0x185f27 < this.options.interceptors.length; _0x185f27++) {
                          if (this.options.interceptors[_0x185f27].result) {
                            _0x420c3a += this.getInterceptor(_0x185f27) + ".result(" + _0x439f0c + ");\n";
                          }
                        }
                        _0x420c3a += _0x98d883(_0x439f0c);
                        return _0x420c3a;
                      }),
                      "onDone": _0x5b92c5 && (() => {
                        let _0x4fa204 = '';
                        for (let _0x3d933c = 0x0; _0x3d933c < this.options.interceptors.length; _0x3d933c++) {
                          if (this.options.interceptors[_0x3d933c].done) {
                            _0x4fa204 += this.getInterceptor(_0x3d933c) + ".done();\n";
                          }
                        }
                        _0x4fa204 += _0x5b92c5();
                        return _0x4fa204;
                      })
                    }));
                    return _0x442e17;
                  }
                  return this.content(_0x289e20);
                }
                ["header"]() {
                  let _0x3a02bb = '';
                  if (this.needContext()) {
                    _0x3a02bb += "var _context = {};\n";
                  } else {
                    _0x3a02bb += "var _context;\n";
                  }
                  _0x3a02bb += "var _x = this._x;\n";
                  if (this.options.interceptors.length > 0x0) {
                    _0x3a02bb += "var _taps = this.taps;\n";
                    _0x3a02bb += "var _interceptors = this.interceptors;\n";
                  }
                  return _0x3a02bb;
                }
                ["needContext"]() {
                  for (const _0x362211 of this.options.taps) if (_0x362211.context) {
                    return true;
                  }
                  return false;
                }
                ["callTap"](_0x456861, {
                  onError: _0x462e0d,
                  onResult: _0x3bdb41,
                  onDone: _0x434fb0,
                  rethrowIfPossible: _0x4430a3
                }) {
                  let _0x11d3e2 = '';
                  let _0x30f80d = false;
                  for (let _0x252fa0 = 0x0; _0x252fa0 < this.options.interceptors.length; _0x252fa0++) {
                    const _0x45a3aa = this.options.interceptors[_0x252fa0];
                    if (_0x45a3aa.tap) {
                      if (!_0x30f80d) {
                        _0x11d3e2 += "var _tap" + _0x456861 + " = " + this.getTap(_0x456861) + ";\n";
                        _0x30f80d = true;
                      }
                      _0x11d3e2 += this.getInterceptor(_0x252fa0) + ".tap(" + (_0x45a3aa.context ? "_context, " : '') + "_tap" + _0x456861 + ");\n";
                    }
                  }
                  _0x11d3e2 += "var _fn" + _0x456861 + " = " + this.getTapFn(_0x456861) + ";\n";
                  const _0x44f72f = this.options.taps[_0x456861];
                  switch (_0x44f72f.type) {
                    case "sync":
                      if (!_0x4430a3) {
                        _0x11d3e2 += "var _hasError" + _0x456861 + " = false;\n";
                        _0x11d3e2 += "try {\n";
                      }
                      _0x11d3e2 += _0x3bdb41 ? "var _result" + _0x456861 + " = _fn" + _0x456861 + "(" + this.args({
                        "before": _0x44f72f.context ? "_context" : undefined
                      }) + ");\n" : "_fn" + _0x456861 + "(" + this.args({
                        "before": _0x44f72f.context ? "_context" : undefined
                      }) + ");\n";
                      if (!_0x4430a3) {
                        _0x11d3e2 += "} catch(_err) {\n";
                        _0x11d3e2 += "_hasError" + _0x456861 + " = true;\n";
                        _0x11d3e2 += _0x462e0d("_err");
                        _0x11d3e2 += "}\n";
                        _0x11d3e2 += "if(!_hasError" + _0x456861 + ") {\n";
                      }
                      if (_0x3bdb41) {
                        _0x11d3e2 += _0x3bdb41("_result" + _0x456861);
                      }
                      if (_0x434fb0) {
                        _0x11d3e2 += _0x434fb0();
                      }
                      if (!_0x4430a3) {
                        _0x11d3e2 += "}\n";
                      }
                      break;
                    case "async":
                      let _0x472b11 = '';
                      _0x472b11 += _0x3bdb41 ? "(function(_err" + _0x456861 + ", _result" + _0x456861 + ") {\n" : "(function(_err" + _0x456861 + ") {\n";
                      _0x472b11 += "if(_err" + _0x456861 + ") {\n";
                      _0x472b11 += _0x462e0d("_err" + _0x456861);
                      _0x472b11 += "} else {\n";
                      if (_0x3bdb41) {
                        _0x472b11 += _0x3bdb41("_result" + _0x456861);
                      }
                      if (_0x434fb0) {
                        _0x472b11 += _0x434fb0();
                      }
                      _0x472b11 += "}\n";
                      _0x472b11 += "})";
                      _0x11d3e2 += "_fn" + _0x456861 + "(" + this.args({
                        "before": _0x44f72f.context ? "_context" : undefined,
                        "after": _0x472b11
                      }) + ");\n";
                      break;
                    case "promise":
                      _0x11d3e2 += "var _hasResult" + _0x456861 + " = false;\n";
                      _0x11d3e2 += "var _promise" + _0x456861 + " = _fn" + _0x456861 + "(" + this.args({
                        "before": _0x44f72f.context ? "_context" : undefined
                      }) + ");\n";
                      _0x11d3e2 += "if (!_promise" + _0x456861 + " || !_promise" + _0x456861 + ".then)\n";
                      _0x11d3e2 += "  throw new Error('Tap function (tapPromise) did not return promise (returned ' + _promise" + _0x456861 + " + ')');\n";
                      _0x11d3e2 += "_promise" + _0x456861 + ".then((function(_result" + _0x456861 + ") {\n";
                      _0x11d3e2 += "_hasResult" + _0x456861 + " = true;\n";
                      if (_0x3bdb41) {
                        _0x11d3e2 += _0x3bdb41("_result" + _0x456861);
                      }
                      if (_0x434fb0) {
                        _0x11d3e2 += _0x434fb0();
                      }
                      _0x11d3e2 += "}), function(_err" + _0x456861 + ") {\n";
                      _0x11d3e2 += "if(_hasResult" + _0x456861 + ") throw _err" + _0x456861 + ";\n";
                      _0x11d3e2 += _0x462e0d("_err" + _0x456861);
                      _0x11d3e2 += "});\n";
                  }
                  return _0x11d3e2;
                }
                ["callTapsSeries"]({
                  onError: _0x56c215,
                  onResult: _0x46b606,
                  resultReturns: _0x24f74c,
                  onDone: _0x291310,
                  doneReturns: _0x51ba1b,
                  rethrowIfPossible: _0x1ee1da
                }) {
                  if (0x0 === this.options.taps.length) {
                    return _0x291310();
                  }
                  const _0x1fdec8 = this.options.taps.findIndex(_0x41c743 => "sync" !== _0x41c743.type);
                  const _0x57b23d = _0x24f74c || _0x51ba1b;
                  let _0x4a28f7 = '';
                  let _0xdf52f3 = _0x291310;
                  let _0x3e3f68 = 0x0;
                  for (let _0x264f9f = this.options.taps.length - 0x1; _0x264f9f >= 0x0; _0x264f9f--) {
                    if (_0xdf52f3 !== _0x291310 && ("sync" !== this.options.taps[_0x264f9f].type || _0x3e3f68++ > 0x14)) {
                      _0x3e3f68 = 0x0;
                      _0x4a28f7 += "function _next" + _0x264f9f + "() {\n";
                      _0x4a28f7 += _0xdf52f3();
                      _0x4a28f7 += "}\n";
                      _0xdf52f3 = () => (_0x57b23d ? "return " : '') + "_next" + _0x264f9f + "();\n";
                    }
                    const _0x311eb5 = _0xb5c58b => _0xb5c58b ? '' : _0x291310();
                    const _0x2133de = this.callTap(_0x264f9f, {
                      "onError": _0x5f15f4 => _0x56c215(_0x264f9f, _0x5f15f4, _0xdf52f3, _0x311eb5),
                      "onResult": _0x46b606 && (_0x4c5df8 => _0x46b606(_0x264f9f, _0x4c5df8, _0xdf52f3, _0x311eb5)),
                      "onDone": !_0x46b606 && _0xdf52f3,
                      "rethrowIfPossible": _0x1ee1da && (_0x1fdec8 < 0x0 || _0x264f9f < _0x1fdec8)
                    });
                    _0xdf52f3 = () => _0x2133de;
                  }
                  _0x4a28f7 += _0xdf52f3();
                  return _0x4a28f7;
                }
                ["callTapsLooping"]({
                  onError: _0x504aba,
                  onDone: _0x33aeef,
                  rethrowIfPossible: _0x12a10c
                }) {
                  if (0x0 === this.options.taps.length) {
                    return _0x33aeef();
                  }
                  const _0x475490 = this.options.taps.every(_0x315991 => "sync" === _0x315991.type);
                  let _0x1cd6b2 = '';
                  if (!_0x475490) {
                    _0x1cd6b2 += "var _looper = (function() {\n";
                    _0x1cd6b2 += "var _loopAsync = false;\n";
                  }
                  _0x1cd6b2 += "var _loop;\n";
                  _0x1cd6b2 += "do {\n";
                  _0x1cd6b2 += "_loop = false;\n";
                  for (let _0x2bdf7c = 0x0; _0x2bdf7c < this.options.interceptors.length; _0x2bdf7c++) {
                    const _0x18c475 = this.options.interceptors[_0x2bdf7c];
                    if (_0x18c475.loop) {
                      _0x1cd6b2 += this.getInterceptor(_0x2bdf7c) + ".loop(" + this.args({
                        "before": _0x18c475.context ? "_context" : undefined
                      }) + ");\n";
                    }
                  }
                  _0x1cd6b2 += this.callTapsSeries({
                    "onError": _0x504aba,
                    "onResult": (_0x57bfdc, _0x7d300e, _0x4cdad1, _0x3a35b5) => {
                      let _0x2056dc = '';
                      _0x2056dc += "if(" + _0x7d300e + " !== undefined) {\n";
                      _0x2056dc += "_loop = true;\n";
                      if (!_0x475490) {
                        _0x2056dc += "if(_loopAsync) _looper();\n";
                      }
                      _0x2056dc += _0x3a35b5(true);
                      _0x2056dc += "} else {\n";
                      _0x2056dc += _0x4cdad1();
                      _0x2056dc += "}\n";
                      return _0x2056dc;
                    },
                    "onDone": _0x33aeef && (() => {
                      let _0x58690a = '';
                      _0x58690a += "if(!_loop) {\n";
                      _0x58690a += _0x33aeef();
                      _0x58690a += "}\n";
                      return _0x58690a;
                    }),
                    "rethrowIfPossible": _0x12a10c && _0x475490
                  });
                  _0x1cd6b2 += "} while(_loop);\n";
                  if (!_0x475490) {
                    _0x1cd6b2 += "_loopAsync = true;\n";
                    _0x1cd6b2 += "});\n";
                    _0x1cd6b2 += "_looper();\n";
                  }
                  return _0x1cd6b2;
                }
                ["callTapsParallel"]({
                  onError: _0x234abd,
                  onResult: _0x104a0b,
                  onDone: _0x262a66,
                  rethrowIfPossible: _0xdd7ab0,
                  onTap: _0xd19067 = (_0x295655, _0x249b7c) => _0x249b7c()
                }) {
                  if (this.options.taps.length <= 0x1) {
                    return this.callTapsSeries({
                      "onError": _0x234abd,
                      "onResult": _0x104a0b,
                      "onDone": _0x262a66,
                      "rethrowIfPossible": _0xdd7ab0
                    });
                  }
                  let _0x7934bb = '';
                  _0x7934bb += "do {\n";
                  _0x7934bb += "var _counter = " + this.options.taps.length + ";\n";
                  if (_0x262a66) {
                    _0x7934bb += "var _done = (function() {\n";
                    _0x7934bb += _0x262a66();
                    _0x7934bb += "});\n";
                  }
                  for (let _0x47f60f = 0x0; _0x47f60f < this.options.taps.length; _0x47f60f++) {
                    const _0x581822 = () => _0x262a66 ? "if(--_counter === 0) _done();\n" : "--_counter;";
                    const _0x199c58 = _0x5359e7 => _0x5359e7 || !_0x262a66 ? "_counter = 0;\n" : "_counter = 0;\n_done();\n";
                    _0x7934bb += "if(_counter <= 0) break;\n";
                    _0x7934bb += _0xd19067(_0x47f60f, () => this.callTap(_0x47f60f, {
                      "onError": _0x2572ba => {
                        let _0xa4b38d = '';
                        _0xa4b38d += "if(_counter > 0) {\n";
                        _0xa4b38d += _0x234abd(_0x47f60f, _0x2572ba, _0x581822, _0x199c58);
                        _0xa4b38d += "}\n";
                        return _0xa4b38d;
                      },
                      "onResult": _0x104a0b && (_0x4f019f => {
                        let _0xbea514 = '';
                        _0xbea514 += "if(_counter > 0) {\n";
                        _0xbea514 += _0x104a0b(_0x47f60f, _0x4f019f, _0x581822, _0x199c58);
                        _0xbea514 += "}\n";
                        return _0xbea514;
                      }),
                      "onDone": !_0x104a0b && (() => _0x262a66 ? "if(--_counter === 0) _done();\n" : "--_counter;"),
                      "rethrowIfPossible": _0xdd7ab0
                    }), _0x581822, _0x199c58);
                  }
                  _0x7934bb += "} while(false);\n";
                  return _0x7934bb;
                }
                ["args"]({
                  before: _0x189e33,
                  after: _0x36ec0c
                } = {}) {
                  let _0x768043 = this._args;
                  if (_0x189e33) {
                    _0x768043 = [_0x189e33].concat(_0x768043);
                  }
                  if (_0x36ec0c) {
                    _0x768043 = _0x768043.concat(_0x36ec0c);
                  }
                  return 0x0 === _0x768043.length ? '' : _0x768043.join(", ");
                }
                ["getTapFn"](_0x576f10) {
                  return "_x[" + _0x576f10 + "]";
                }
                ["getTap"](_0x2d11cf) {
                  return "_taps[" + _0x2d11cf + "]";
                }
                ["getInterceptor"](_0x10db38) {
                  return "_interceptors[" + _0x10db38 + "]";
                }
              };
            },
            0x303: (_0x36d241, _0x2adf5a, _0x58e128) => {
              const _0x4cd317 = _0x58e128(0x9);
              const _0x1ff861 = (_0x270e62, _0x38eead) => _0x38eead;
              class _0x17bf68 {
                constructor(_0x24a80e, _0x258ff8 = undefined) {
                  this._map = new Map();
                  this.name = _0x258ff8;
                  this._factory = _0x24a80e;
                  this._interceptors = [];
                }
                ["get"](_0x26ef91) {
                  return this._map.get(_0x26ef91);
                }
                ["for"](_0x37fef7) {
                  const _0x381244 = this.get(_0x37fef7);
                  if (undefined !== _0x381244) {
                    return _0x381244;
                  }
                  let _0x2c3f3b = this._factory(_0x37fef7);
                  const _0x26c720 = this._interceptors;
                  for (let _0x412531 = 0x0; _0x412531 < _0x26c720.length; _0x412531++) {
                    _0x2c3f3b = _0x26c720[_0x412531].factory(_0x37fef7, _0x2c3f3b);
                  }
                  this._map.set(_0x37fef7, _0x2c3f3b);
                  return _0x2c3f3b;
                }
                ["intercept"](_0x1dc4b6) {
                  this._interceptors.push(Object.assign({
                    "factory": _0x1ff861
                  }, _0x1dc4b6));
                }
              }
              _0x17bf68.prototype.tap = _0x4cd317.deprecate(function (_0xd23f2e, _0xe762f8, _0x4f28eb) {
                return this["for"](_0xd23f2e).tap(_0xe762f8, _0x4f28eb);
              }, "HookMap#tap(key,\u2026) is deprecated. Use HookMap#for(key).tap(\u2026) instead.");
              _0x17bf68.prototype.tapAsync = _0x4cd317.deprecate(function (_0x32a19b, _0xfef25a, _0x560818) {
                return this["for"](_0x32a19b).tapAsync(_0xfef25a, _0x560818);
              }, "HookMap#tapAsync(key,\u2026) is deprecated. Use HookMap#for(key).tapAsync(\u2026) instead.");
              _0x17bf68.prototype.tapPromise = _0x4cd317.deprecate(function (_0x39d5f4, _0x119952, _0x59b9e6) {
                return this["for"](_0x39d5f4).tapPromise(_0x119952, _0x59b9e6);
              }, "HookMap#tapPromise(key,\u2026) is deprecated. Use HookMap#for(key).tapPromise(\u2026) instead.");
              _0x36d241.exports = _0x17bf68;
            },
            0x122: (_0x3086bc, _0x13e42e, _0x31073b) => {
              _0x31073b(0x7e);
              class _0x514cf8 {
                constructor(_0x2f99fc, _0x4f7ecd = undefined) {
                  this.hooks = _0x2f99fc;
                  this.name = _0x4f7ecd;
                }
                ["tap"](_0x45ba96, _0x283312) {
                  for (const _0x4dda43 of this.hooks) _0x4dda43.tap(_0x45ba96, _0x283312);
                }
                ["tapAsync"](_0x436152, _0x39e8d3) {
                  for (const _0x55c54e of this.hooks) _0x55c54e.tapAsync(_0x436152, _0x39e8d3);
                }
                ["tapPromise"](_0x4aada7, _0x163d4c) {
                  for (const _0x5eb7e4 of this.hooks) _0x5eb7e4.tapPromise(_0x4aada7, _0x163d4c);
                }
                ["isUsed"]() {
                  for (const _0x33e6d0 of this.hooks) if (_0x33e6d0.isUsed()) {
                    return true;
                  }
                  return false;
                }
                ["intercept"](_0x18ec0c) {
                  for (const _0x16d827 of this.hooks) _0x16d827.intercept(_0x18ec0c);
                }
                ["withOptions"](_0x599ba2) {
                  return new _0x514cf8(this.hooks.map(_0x3144e0 => _0x3144e0.withOptions(_0x599ba2)), this.name);
                }
              }
              _0x3086bc.exports = _0x514cf8;
            },
            0xb0: (_0x314670, _0x312ddc, _0x3edf24) => {
              const _0x49f27f = _0x3edf24(0x7e);
              const _0x39092c = _0x3edf24(0x19b);
              const _0x144789 = new class extends _0x39092c {
                ["content"]({
                  onError: _0x363482,
                  onResult: _0x58dd3b,
                  resultReturns: _0x314c75,
                  onDone: _0x549c49,
                  rethrowIfPossible: _0x818c25
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x5b6d69, _0x4f20ee) => _0x363482(_0x4f20ee),
                    "onResult": (_0x276440, _0x1c1365, _0x102562) => "if(" + _0x1c1365 + " !== undefined) {\n" + _0x58dd3b(_0x1c1365) + ";\n} else {\n" + _0x102562() + "}\n",
                    "resultReturns": _0x314c75,
                    "onDone": _0x549c49,
                    "rethrowIfPossible": _0x818c25
                  });
                }
              }();
              const _0x1e4752 = () => {
                throw new Error("tapAsync is not supported on a SyncBailHook");
              };
              const _0x5519e5 = () => {
                throw new Error("tapPromise is not supported on a SyncBailHook");
              };
              const _0x2c778d = function (_0x2497dc) {
                _0x144789.setup(this, _0x2497dc);
                return _0x144789.create(_0x2497dc);
              };
              function _0x5a7d0e(_0xb29d18 = [], _0x534c4b = undefined) {
                const _0x49ae97 = new _0x49f27f(_0xb29d18, _0x534c4b);
                _0x49ae97.constructor = _0x5a7d0e;
                _0x49ae97.tapAsync = _0x1e4752;
                _0x49ae97.tapPromise = _0x5519e5;
                _0x49ae97.compile = _0x2c778d;
                return _0x49ae97;
              }
              _0x5a7d0e.prototype = null;
              _0x314670.exports = _0x5a7d0e;
            },
            0x353: (_0x143535, _0x7779f6, _0x400fdf) => {
              const _0xbadd1c = _0x400fdf(0x7e);
              const _0x10156d = _0x400fdf(0x19b);
              const _0xba2342 = new class extends _0x10156d {
                ["content"]({
                  onError: _0x157383,
                  onDone: _0x1b0b16,
                  rethrowIfPossible: _0x5d5b09
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x2e4473, _0x45142c) => _0x157383(_0x45142c),
                    "onDone": _0x1b0b16,
                    "rethrowIfPossible": _0x5d5b09
                  });
                }
              }();
              const _0x512149 = () => {
                throw new Error("tapAsync is not supported on a SyncHook");
              };
              const _0x75d4e8 = () => {
                throw new Error("tapPromise is not supported on a SyncHook");
              };
              const _0x36c273 = function (_0x34a041) {
                _0xba2342.setup(this, _0x34a041);
                return _0xba2342.create(_0x34a041);
              };
              function _0x2167f6(_0x3a2901 = [], _0x257db3 = undefined) {
                const _0x3a40b0 = new _0xbadd1c(_0x3a2901, _0x257db3);
                _0x3a40b0.constructor = _0x2167f6;
                _0x3a40b0.tapAsync = _0x512149;
                _0x3a40b0.tapPromise = _0x75d4e8;
                _0x3a40b0.compile = _0x36c273;
                return _0x3a40b0;
              }
              _0x2167f6.prototype = null;
              _0x143535.exports = _0x2167f6;
            },
            0x3cf: (_0x2726c3, _0x19bcb6, _0x1eddd8) => {
              const _0x52cf7b = _0x1eddd8(0x7e);
              const _0x53ce3d = _0x1eddd8(0x19b);
              const _0x3e9e18 = new class extends _0x53ce3d {
                ["content"]({
                  onError: _0x11b13b,
                  onDone: _0x4cf134,
                  rethrowIfPossible: _0x56df03
                }) {
                  return this.callTapsLooping({
                    "onError": (_0x49d082, _0x3347b2) => _0x11b13b(_0x3347b2),
                    "onDone": _0x4cf134,
                    "rethrowIfPossible": _0x56df03
                  });
                }
              }();
              const _0x31cbcf = () => {
                throw new Error("tapAsync is not supported on a SyncLoopHook");
              };
              const _0x2d5aa4 = () => {
                throw new Error("tapPromise is not supported on a SyncLoopHook");
              };
              const _0x58e1b5 = function (_0x597e13) {
                _0x3e9e18.setup(this, _0x597e13);
                return _0x3e9e18.create(_0x597e13);
              };
              function _0xb87aae(_0x3cbdc5 = [], _0x2c2a6b = undefined) {
                const _0x57fa14 = new _0x52cf7b(_0x3cbdc5, _0x2c2a6b);
                _0x57fa14.constructor = _0xb87aae;
                _0x57fa14.tapAsync = _0x31cbcf;
                _0x57fa14.tapPromise = _0x2d5aa4;
                _0x57fa14.compile = _0x58e1b5;
                return _0x57fa14;
              }
              _0xb87aae.prototype = null;
              _0x2726c3.exports = _0xb87aae;
            },
            0x1bc: (_0x433a0c, _0x38af6a, _0x300d7b) => {
              const _0x93d4f6 = _0x300d7b(0x7e);
              const _0xbf7a9c = _0x300d7b(0x19b);
              const _0xca1c99 = new class extends _0xbf7a9c {
                ["content"]({
                  onError: _0x5d14fb,
                  onResult: _0x574d5a,
                  resultReturns: _0x2322aa,
                  rethrowIfPossible: _0x9d4894
                }) {
                  return this.callTapsSeries({
                    "onError": (_0x3382a6, _0x18db8e) => _0x5d14fb(_0x18db8e),
                    "onResult": (_0x2b4507, _0x38c1d9, _0x5dd8c6) => {
                      let _0x1d4a48 = '';
                      _0x1d4a48 += "if(" + _0x38c1d9 + " !== undefined) {\n";
                      _0x1d4a48 += this._args[0x0] + " = " + _0x38c1d9 + ";\n";
                      _0x1d4a48 += "}\n";
                      _0x1d4a48 += _0x5dd8c6();
                      return _0x1d4a48;
                    },
                    "onDone": () => _0x574d5a(this._args[0x0]),
                    "doneReturns": _0x2322aa,
                    "rethrowIfPossible": _0x9d4894
                  });
                }
              }();
              const _0x301eaa = () => {
                throw new Error("tapAsync is not supported on a SyncWaterfallHook");
              };
              const _0x1fc568 = () => {
                throw new Error("tapPromise is not supported on a SyncWaterfallHook");
              };
              const _0x5e46a7 = function (_0x11f35a) {
                _0xca1c99.setup(this, _0x11f35a);
                return _0xca1c99.create(_0x11f35a);
              };
              function _0x446347(_0x5afd6e = [], _0x21d3fd = undefined) {
                if (_0x5afd6e.length < 0x1) {
                  throw new Error("Waterfall hooks must have at least one argument");
                }
                const _0x5cfbca = new _0x93d4f6(_0x5afd6e, _0x21d3fd);
                _0x5cfbca.constructor = _0x446347;
                _0x5cfbca.tapAsync = _0x301eaa;
                _0x5cfbca.tapPromise = _0x1fc568;
                _0x5cfbca.compile = _0x5e46a7;
                return _0x5cfbca;
              }
              _0x446347.prototype = null;
              _0x433a0c.exports = _0x446347;
            },
            0x1dd: (_0x5b258b, _0xd9183d, _0xf5dd) => {
              _0xd9183d.__esModule = true;
              _0xd9183d.SyncHook = _0xf5dd(0x353);
              _0xd9183d.SyncBailHook = _0xf5dd(0xb0);
              _0xd9183d.SyncWaterfallHook = _0xf5dd(0x1bc);
              _0xd9183d.SyncLoopHook = _0xf5dd(0x3cf);
              _0xd9183d.AsyncParallelHook = _0xf5dd(0x102);
              _0xd9183d.AsyncParallelBailHook = _0xf5dd(0x301);
              _0xd9183d.AsyncSeriesHook = _0xf5dd(0x1c9);
              _0xd9183d.AsyncSeriesBailHook = _0xf5dd(0x2b8);
              _0xd9183d.AsyncSeriesLoopHook = _0xf5dd(0x344);
              _0xd9183d.AsyncSeriesWaterfallHook = _0xf5dd(0x2ae);
              _0xd9183d.HookMap = _0xf5dd(0x303);
              _0xd9183d.MultiHook = _0xf5dd(0x122);
            },
            0x9: (_0x10a5a2, _0x32121c) => {
              _0x32121c.deprecate = (_0x37bb0d, _0x1e67c4) => {
                let _0x281f6b = true;
                return function () {
                  if (_0x281f6b) {
                    console.warn("DeprecationWarning: " + _0x1e67c4);
                    _0x281f6b = false;
                  }
                  return _0x37bb0d.apply(this, arguments);
                };
              };
            },
            0x218: function (_0x30b31d, _0x212bd1, _0x17099a) {
              var _0xe56f81 = this && this.__importDefault || function (_0x19a650) {
                return _0x19a650 && _0x19a650.__esModule ? _0x19a650 : {
                  "default": _0x19a650
                };
              };
              Object.defineProperty(_0x212bd1, "__esModule", {
                "value": true
              });
              const _0x89f6bc = _0xe56f81(_0x17099a(0x399));
              !function () {
                const _0x12336b = new _0x89f6bc["default"]();
                _0x30b31d.exports = _0x12336b;
              }();
            },
            0x399: (_0x29c5fc, _0x2acbb5, _0x49f0a7) => {
              Object.defineProperty(_0x2acbb5, "__esModule", {
                "value": true
              });
              const _0x571958 = _0x49f0a7(0x288);
              const _0x437c52 = _0x49f0a7(0x1dd);
              const _0x4a5414 = new _0x437c52.HookMap(_0x54c760 => new _0x437c52.AsyncSeriesHook(["arg0", "arg1"]));
              _0x2acbb5["default"] = class {
                constructor() {
                  this.index = 0x1;
                  this.callbacks = {};
                  this.CMD = _0x571958.CMD;
                  if (window) {
                    window.addEventListener("message", this.onMessage.bind(this), false);
                  }
                }
                ["sendMessage"](_0x19a2a9, _0x92b6bd) {
                  _0x92b6bd.key = _0x19a2a9;
                  try {
                    window.parent.postMessage(_0x92b6bd, "*");
                  } catch (_0x4d5392) {}
                }
                ["onMessage"](_0x4070c9) {
                  const _0x40fbb3 = _0x4070c9.data || {};
                  if (_0x40fbb3.key && "WEB" == _0x40fbb3.os) {
                    const _0x441fa3 = this.callbacks[_0x40fbb3.index];
                    if (_0x441fa3) {
                      _0x441fa3(_0x40fbb3);
                    }
                  }
                }
                ["callAsync"](_0x5a741b, _0x338479) {
                  const _0x361feb = {
                    "os": "GAME",
                    "index": this.index++
                  };
                  if ("function" == typeof _0x338479) {
                    this.callbacks[_0x361feb.index] = _0x338479;
                  }
                  this.sendMessage(_0x5a741b, _0x361feb);
                }
                ["tapPromise"](_0x274ddb, _0x270fa6) {
                  _0x4a5414["for"](_0x274ddb).tapPromise("gMsgCenter_" + this.index++, _0x270fa6);
                }
              };
            },
            0x288: (_0x35d624, _0x488db0) => {
              var _0x56935c;
              Object.defineProperty(_0x488db0, "__esModule", {
                "value": true
              });
              _0x488db0.CMD = undefined;
              (_0x56935c = _0x488db0.CMD || (_0x488db0.CMD = {})).INIT = "INIT";
              _0x56935c.GAME_SDK_BEFORE_INIT = "GAME_SDK_BEFORE_INIT";
              _0x56935c.GAME_SDK_AFTER_INIT = "GAME_SDK_AFTER_INIT";
              _0x56935c.GAME_PLAY_CLICK = "GAME_PLAY_CLICK";
            }
          };
          var _0x69cd29 = {};
          return function _0x27ff8a(_0x29829) {
            var _0x3ad6af = _0x69cd29[_0x29829];
            if (undefined !== _0x3ad6af) {
              return _0x3ad6af.exports;
            }
            var _0x19cf9d = _0x69cd29[_0x29829] = {
              "exports": {}
            };
            _0x12be0e[_0x29829].call(_0x19cf9d.exports, _0x19cf9d, _0x19cf9d.exports, _0x27ff8a);
            return _0x19cf9d.exports;
          }(0x218);
        })();
        _0x21e0de.exports = _0x530dfa();
      },
      0xea3: _0x56cdc8 => {
        var _0x44a6b9;
        self;
        _0x44a6b9 = () => (() => {
          var _0x264028 = {
            0x8b1: function (_0x351fe9, _0x131ebb, _0x285690) {
              var _0x1888a9;
              _0x1888a9 = _0x285690(0x1d06);
              _0x285690(0x1623);
              _0x285690(0xc4a);
              _0x285690(0x1f74);
              _0x285690(0x1c28);
              (function () {
                var _0x5a645c = _0x1888a9.lib.BlockCipher;
                var _0x49cab7 = _0x1888a9.algo;
                var _0x2c09d4 = [];
                var _0x3a41a1 = [];
                var _0x1004d6 = [];
                var _0xa9bdfd = [];
                var _0x19d81b = [];
                var _0x3cfa41 = [];
                var _0x53a922 = [];
                var _0x12224f = [];
                var _0x1014ec = [];
                var _0x509102 = [];
                !function () {
                  var _0x5882e5 = [];
                  for (var _0x17d42d = 0x0; _0x17d42d < 0x100; _0x17d42d++) {
                    _0x5882e5[_0x17d42d] = _0x17d42d < 0x80 ? _0x17d42d << 0x1 : _0x17d42d << 0x1 ^ 0x11b;
                  }
                  var _0x513909 = 0x0;
                  var _0x38dd04 = 0x0;
                  for (_0x17d42d = 0x0; _0x17d42d < 0x100; _0x17d42d++) {
                    var _0x2ac40a = _0x38dd04 ^ _0x38dd04 << 0x1 ^ _0x38dd04 << 0x2 ^ _0x38dd04 << 0x3 ^ _0x38dd04 << 0x4;
                    _0x2ac40a = _0x2ac40a >>> 0x8 ^ 0xff & _0x2ac40a ^ 0x63;
                    _0x2c09d4[_0x513909] = _0x2ac40a;
                    _0x3a41a1[_0x2ac40a] = _0x513909;
                    var _0x19b87d = _0x5882e5[_0x513909];
                    var _0x25f664 = _0x5882e5[_0x19b87d];
                    var _0xf82e01 = _0x5882e5[_0x25f664];
                    var _0x2a498d = 0x101 * _0x5882e5[_0x2ac40a] ^ 0x1010100 * _0x2ac40a;
                    _0x1004d6[_0x513909] = _0x2a498d << 0x18 | _0x2a498d >>> 0x8;
                    _0xa9bdfd[_0x513909] = _0x2a498d << 0x10 | _0x2a498d >>> 0x10;
                    _0x19d81b[_0x513909] = _0x2a498d << 0x8 | _0x2a498d >>> 0x18;
                    _0x3cfa41[_0x513909] = _0x2a498d;
                    _0x2a498d = 0x1010101 * _0xf82e01 ^ 0x10001 * _0x25f664 ^ 0x101 * _0x19b87d ^ 0x1010100 * _0x513909;
                    _0x53a922[_0x2ac40a] = _0x2a498d << 0x18 | _0x2a498d >>> 0x8;
                    _0x12224f[_0x2ac40a] = _0x2a498d << 0x10 | _0x2a498d >>> 0x10;
                    _0x1014ec[_0x2ac40a] = _0x2a498d << 0x8 | _0x2a498d >>> 0x18;
                    _0x509102[_0x2ac40a] = _0x2a498d;
                    if (_0x513909) {
                      _0x513909 = _0x19b87d ^ _0x5882e5[_0x5882e5[_0x5882e5[_0xf82e01 ^ _0x19b87d]]];
                      _0x38dd04 ^= _0x5882e5[_0x5882e5[_0x38dd04]];
                    } else {
                      _0x513909 = _0x38dd04 = 0x1;
                    }
                  }
                }();
                var _0xd5a4eb = [0x0, 0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
                var _0x408e9b = _0x49cab7.AES = _0x5a645c.extend({
                  "_doReset": function () {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                      var _0x56b426 = this._keyPriorReset = this._key;
                      var _0x64c530 = _0x56b426.words;
                      var _0x26174b = _0x56b426.sigBytes / 0x4;
                      var _0x34656d = 0x4 * ((this._nRounds = _0x26174b + 0x6) + 0x1);
                      var _0xa667e6 = this._keySchedule = [];
                      for (var _0x514541 = 0x0; _0x514541 < _0x34656d; _0x514541++) {
                        if (_0x514541 < _0x26174b) {
                          _0xa667e6[_0x514541] = _0x64c530[_0x514541];
                        } else {
                          _0x2d2852 = _0xa667e6[_0x514541 - 0x1];
                          if (_0x514541 % _0x26174b) {
                            if (_0x26174b > 0x6 && _0x514541 % _0x26174b == 0x4) {
                              _0x2d2852 = _0x2c09d4[_0x2d2852 >>> 0x18] << 0x18 | _0x2c09d4[_0x2d2852 >>> 0x10 & 0xff] << 0x10 | _0x2c09d4[_0x2d2852 >>> 0x8 & 0xff] << 0x8 | _0x2c09d4[0xff & _0x2d2852];
                            }
                          } else {
                            _0x2d2852 = _0x2c09d4[(_0x2d2852 = _0x2d2852 << 0x8 | _0x2d2852 >>> 0x18) >>> 0x18] << 0x18 | _0x2c09d4[_0x2d2852 >>> 0x10 & 0xff] << 0x10 | _0x2c09d4[_0x2d2852 >>> 0x8 & 0xff] << 0x8 | _0x2c09d4[0xff & _0x2d2852];
                            _0x2d2852 ^= _0xd5a4eb[_0x514541 / _0x26174b | 0x0] << 0x18;
                          }
                          _0xa667e6[_0x514541] = _0xa667e6[_0x514541 - _0x26174b] ^ _0x2d2852;
                        }
                      }
                      var _0x5ad262 = this._invKeySchedule = [];
                      for (var _0x50c713 = 0x0; _0x50c713 < _0x34656d; _0x50c713++) {
                        _0x514541 = _0x34656d - _0x50c713;
                        if (_0x50c713 % 0x4) {
                          var _0x2d2852 = _0xa667e6[_0x514541];
                        } else {
                          _0x2d2852 = _0xa667e6[_0x514541 - 0x4];
                        }
                        _0x5ad262[_0x50c713] = _0x50c713 < 0x4 || _0x514541 <= 0x4 ? _0x2d2852 : _0x53a922[_0x2c09d4[_0x2d2852 >>> 0x18]] ^ _0x12224f[_0x2c09d4[_0x2d2852 >>> 0x10 & 0xff]] ^ _0x1014ec[_0x2c09d4[_0x2d2852 >>> 0x8 & 0xff]] ^ _0x509102[_0x2c09d4[0xff & _0x2d2852]];
                      }
                    }
                  },
                  "encryptBlock": function (_0x69509f, _0x49492b) {
                    this._doCryptBlock(_0x69509f, _0x49492b, this._keySchedule, _0x1004d6, _0xa9bdfd, _0x19d81b, _0x3cfa41, _0x2c09d4);
                  },
                  "decryptBlock": function (_0x2f1972, _0x5c3166) {
                    var _0x37603c = _0x2f1972[_0x5c3166 + 0x1];
                    _0x2f1972[_0x5c3166 + 0x1] = _0x2f1972[_0x5c3166 + 0x3];
                    _0x2f1972[_0x5c3166 + 0x3] = _0x37603c;
                    this._doCryptBlock(_0x2f1972, _0x5c3166, this._invKeySchedule, _0x53a922, _0x12224f, _0x1014ec, _0x509102, _0x3a41a1);
                    _0x37603c = _0x2f1972[_0x5c3166 + 0x1];
                    _0x2f1972[_0x5c3166 + 0x1] = _0x2f1972[_0x5c3166 + 0x3];
                    _0x2f1972[_0x5c3166 + 0x3] = _0x37603c;
                  },
                  "_doCryptBlock": function (_0x3e6074, _0x2342ec, _0x5941c4, _0x43b46b, _0x56a2d9, _0x51743f, _0x4baa80, _0xe2ba91) {
                    var _0x1c80b0 = this._nRounds;
                    var _0x15bb79 = _0x3e6074[_0x2342ec] ^ _0x5941c4[0x0];
                    var _0x44c299 = _0x3e6074[_0x2342ec + 0x1] ^ _0x5941c4[0x1];
                    var _0x37d4f8 = _0x3e6074[_0x2342ec + 0x2] ^ _0x5941c4[0x2];
                    var _0x3fd93c = _0x3e6074[_0x2342ec + 0x3] ^ _0x5941c4[0x3];
                    var _0x3ce229 = 0x4;
                    for (var _0x5158d5 = 0x1; _0x5158d5 < _0x1c80b0; _0x5158d5++) {
                      var _0x42738b = _0x43b46b[_0x15bb79 >>> 0x18] ^ _0x56a2d9[_0x44c299 >>> 0x10 & 0xff] ^ _0x51743f[_0x37d4f8 >>> 0x8 & 0xff] ^ _0x4baa80[0xff & _0x3fd93c] ^ _0x5941c4[_0x3ce229++];
                      var _0x356612 = _0x43b46b[_0x44c299 >>> 0x18] ^ _0x56a2d9[_0x37d4f8 >>> 0x10 & 0xff] ^ _0x51743f[_0x3fd93c >>> 0x8 & 0xff] ^ _0x4baa80[0xff & _0x15bb79] ^ _0x5941c4[_0x3ce229++];
                      var _0x187c88 = _0x43b46b[_0x37d4f8 >>> 0x18] ^ _0x56a2d9[_0x3fd93c >>> 0x10 & 0xff] ^ _0x51743f[_0x15bb79 >>> 0x8 & 0xff] ^ _0x4baa80[0xff & _0x44c299] ^ _0x5941c4[_0x3ce229++];
                      var _0x32c9b7 = _0x43b46b[_0x3fd93c >>> 0x18] ^ _0x56a2d9[_0x15bb79 >>> 0x10 & 0xff] ^ _0x51743f[_0x44c299 >>> 0x8 & 0xff] ^ _0x4baa80[0xff & _0x37d4f8] ^ _0x5941c4[_0x3ce229++];
                      _0x15bb79 = _0x42738b;
                      _0x44c299 = _0x356612;
                      _0x37d4f8 = _0x187c88;
                      _0x3fd93c = _0x32c9b7;
                    }
                    _0x42738b = (_0xe2ba91[_0x15bb79 >>> 0x18] << 0x18 | _0xe2ba91[_0x44c299 >>> 0x10 & 0xff] << 0x10 | _0xe2ba91[_0x37d4f8 >>> 0x8 & 0xff] << 0x8 | _0xe2ba91[0xff & _0x3fd93c]) ^ _0x5941c4[_0x3ce229++];
                    _0x356612 = (_0xe2ba91[_0x44c299 >>> 0x18] << 0x18 | _0xe2ba91[_0x37d4f8 >>> 0x10 & 0xff] << 0x10 | _0xe2ba91[_0x3fd93c >>> 0x8 & 0xff] << 0x8 | _0xe2ba91[0xff & _0x15bb79]) ^ _0x5941c4[_0x3ce229++];
                    _0x187c88 = (_0xe2ba91[_0x37d4f8 >>> 0x18] << 0x18 | _0xe2ba91[_0x3fd93c >>> 0x10 & 0xff] << 0x10 | _0xe2ba91[_0x15bb79 >>> 0x8 & 0xff] << 0x8 | _0xe2ba91[0xff & _0x44c299]) ^ _0x5941c4[_0x3ce229++];
                    _0x32c9b7 = (_0xe2ba91[_0x3fd93c >>> 0x18] << 0x18 | _0xe2ba91[_0x15bb79 >>> 0x10 & 0xff] << 0x10 | _0xe2ba91[_0x44c299 >>> 0x8 & 0xff] << 0x8 | _0xe2ba91[0xff & _0x37d4f8]) ^ _0x5941c4[_0x3ce229++];
                    _0x3e6074[_0x2342ec] = _0x42738b;
                    _0x3e6074[_0x2342ec + 0x1] = _0x356612;
                    _0x3e6074[_0x2342ec + 0x2] = _0x187c88;
                    _0x3e6074[_0x2342ec + 0x3] = _0x32c9b7;
                  },
                  "keySize": 0x8
                });
                _0x1888a9.AES = _0x5a645c._createHelper(_0x408e9b);
              })();
              _0x351fe9.exports = _0x1888a9.AES;
            },
            0x1c28: function (_0x28ec69, _0x45b3b6, _0x122d1c) {
              var _0x19ed35;
              _0x19ed35 = _0x122d1c(0x1d06);
              _0x122d1c(0x1f74);
              _0x28ec69.exports = void (_0x19ed35.lib.Cipher || function (_0x33ae30) {
                var _0xe22d0f = _0x19ed35.lib;
                var _0x261717 = _0xe22d0f.Base;
                var _0x262171 = _0xe22d0f.WordArray;
                var _0x344b8e = _0xe22d0f.BufferedBlockAlgorithm;
                var _0x3eb713 = _0x19ed35.enc;
                _0x3eb713.Utf8;
                var _0x1edde7 = _0x3eb713.Base64;
                var _0x5ce1e9 = _0x19ed35.algo.EvpKDF;
                var _0x210391 = _0xe22d0f.Cipher = _0x344b8e.extend({
                  "cfg": _0x261717.extend(),
                  "createEncryptor": function (_0x18e5a1, _0x2f45d9) {
                    return this.create(this._ENC_XFORM_MODE, _0x18e5a1, _0x2f45d9);
                  },
                  "createDecryptor": function (_0x2d45ef, _0x80824a) {
                    return this.create(this._DEC_XFORM_MODE, _0x2d45ef, _0x80824a);
                  },
                  "init": function (_0x23d860, _0xb5f732, _0x4a6a98) {
                    this.cfg = this.cfg.extend(_0x4a6a98);
                    this._xformMode = _0x23d860;
                    this._key = _0xb5f732;
                    this.reset();
                  },
                  "reset": function () {
                    _0x344b8e.reset.call(this);
                    this._doReset();
                  },
                  "process": function (_0x153680) {
                    this._append(_0x153680);
                    return this._process();
                  },
                  "finalize": function (_0x1800bf) {
                    if (_0x1800bf) {
                      this._append(_0x1800bf);
                    }
                    return this._doFinalize();
                  },
                  "keySize": 0x4,
                  "ivSize": 0x4,
                  "_ENC_XFORM_MODE": 0x1,
                  "_DEC_XFORM_MODE": 0x2,
                  "_createHelper": function () {
                    function _0x1a0a9e(_0x1b5817) {
                      return "string" == typeof _0x1b5817 ? _0x4d1e7d : _0x161eed;
                    }
                    return function (_0x2313bc) {
                      return {
                        "encrypt": function (_0x443b72, _0x4d736b, _0x3eb686) {
                          return ("string" == typeof _0x4d736b ? _0x4d1e7d : _0x161eed).encrypt(_0x2313bc, _0x443b72, _0x4d736b, _0x3eb686);
                        },
                        "decrypt": function (_0x57fac5, _0x4c9055, _0x324c38) {
                          return ("string" == typeof _0x4c9055 ? _0x4d1e7d : _0x161eed).decrypt(_0x2313bc, _0x57fac5, _0x4c9055, _0x324c38);
                        }
                      };
                    };
                  }()
                });
                _0xe22d0f.StreamCipher = _0x210391.extend({
                  "_doFinalize": function () {
                    return this._process(true);
                  },
                  "blockSize": 0x1
                });
                var _0x702b45 = _0x19ed35.mode = {};
                var _0x54c91b = _0xe22d0f.BlockCipherMode = _0x261717.extend({
                  "createEncryptor": function (_0x580f19, _0x50cf61) {
                    return this.Encryptor.create(_0x580f19, _0x50cf61);
                  },
                  "createDecryptor": function (_0x5f4dca, _0x1441c8) {
                    return this.Decryptor.create(_0x5f4dca, _0x1441c8);
                  },
                  "init": function (_0x4cea61, _0x3a5411) {
                    this._cipher = _0x4cea61;
                    this._iv = _0x3a5411;
                  }
                });
                var _0x1bb629 = _0x702b45.CBC = function () {
                  var _0x204951 = _0x54c91b.extend();
                  function _0x562c49(_0x157ed4, _0x3da810, _0x5bc1af) {
                    var _0x368606;
                    var _0x1c439a = this._iv;
                    if (_0x1c439a) {
                      _0x368606 = _0x1c439a;
                      this._iv = _0x33ae30;
                    } else {
                      _0x368606 = this._prevBlock;
                    }
                    for (var _0x830b39 = 0x0; _0x830b39 < _0x5bc1af; _0x830b39++) {
                      _0x157ed4[_0x3da810 + _0x830b39] ^= _0x368606[_0x830b39];
                    }
                  }
                  _0x204951.Encryptor = _0x204951.extend({
                    "processBlock": function (_0x4f46df, _0xe505d) {
                      var _0x50d328 = this._cipher;
                      var _0x4988d4 = _0x50d328.blockSize;
                      _0x562c49.call(this, _0x4f46df, _0xe505d, _0x4988d4);
                      _0x50d328.encryptBlock(_0x4f46df, _0xe505d);
                      this._prevBlock = _0x4f46df.slice(_0xe505d, _0xe505d + _0x4988d4);
                    }
                  });
                  _0x204951.Decryptor = _0x204951.extend({
                    "processBlock": function (_0x4bd09a, _0x5b3b94) {
                      var _0x4186a5 = this._cipher;
                      var _0x2b0693 = _0x4186a5.blockSize;
                      var _0x55af40 = _0x4bd09a.slice(_0x5b3b94, _0x5b3b94 + _0x2b0693);
                      _0x4186a5.decryptBlock(_0x4bd09a, _0x5b3b94);
                      _0x562c49.call(this, _0x4bd09a, _0x5b3b94, _0x2b0693);
                      this._prevBlock = _0x55af40;
                    }
                  });
                  return _0x204951;
                }();
                var _0x80fc91 = (_0x19ed35.pad = {}).Pkcs7 = {
                  "pad": function (_0x10a4d7, _0x2e10fc) {
                    var _0x59f4bd = 0x4 * _0x2e10fc;
                    var _0x87ea41 = _0x59f4bd - _0x10a4d7.sigBytes % _0x59f4bd;
                    var _0x5c1285 = _0x87ea41 << 0x18 | _0x87ea41 << 0x10 | _0x87ea41 << 0x8 | _0x87ea41;
                    var _0x24c0ef = [];
                    for (var _0x176a64 = 0x0; _0x176a64 < _0x87ea41; _0x176a64 += 0x4) {
                      _0x24c0ef.push(_0x5c1285);
                    }
                    var _0x558573 = _0x262171.create(_0x24c0ef, _0x87ea41);
                    _0x10a4d7.concat(_0x558573);
                  },
                  "unpad": function (_0x593875) {
                    var _0x3f2081 = 0xff & _0x593875.words[_0x593875.sigBytes - 0x1 >>> 0x2];
                    _0x593875.sigBytes -= _0x3f2081;
                  }
                };
                _0xe22d0f.BlockCipher = _0x210391.extend({
                  "cfg": _0x210391.cfg.extend({
                    "mode": _0x1bb629,
                    "padding": _0x80fc91
                  }),
                  "reset": function () {
                    var _0x43700e;
                    _0x210391.reset.call(this);
                    var _0x1900e9 = this.cfg;
                    var _0x305b8d = _0x1900e9.iv;
                    var _0x2c9a76 = _0x1900e9.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                      _0x43700e = _0x2c9a76.createEncryptor;
                    } else {
                      _0x43700e = _0x2c9a76.createDecryptor;
                      this._minBufferSize = 0x1;
                    }
                    if (this._mode && this._mode.__creator == _0x43700e) {
                      this._mode.init(this, _0x305b8d && _0x305b8d.words);
                    } else {
                      this._mode = _0x43700e.call(_0x2c9a76, this, _0x305b8d && _0x305b8d.words);
                      this._mode.__creator = _0x43700e;
                    }
                  },
                  "_doProcessBlock": function (_0x3fcbbb, _0x38667c) {
                    this._mode.processBlock(_0x3fcbbb, _0x38667c);
                  },
                  "_doFinalize": function () {
                    var _0x5fe1ca;
                    var _0x4eaf56 = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                      _0x4eaf56.pad(this._data, this.blockSize);
                      _0x5fe1ca = this._process(true);
                    } else {
                      _0x5fe1ca = this._process(true);
                      _0x4eaf56.unpad(_0x5fe1ca);
                    }
                    return _0x5fe1ca;
                  },
                  "blockSize": 0x4
                });
                var _0x4a847b = _0xe22d0f.CipherParams = _0x261717.extend({
                  "init": function (_0x124565) {
                    this.mixIn(_0x124565);
                  },
                  "toString": function (_0x6803c9) {
                    return (_0x6803c9 || this.formatter).stringify(this);
                  }
                });
                var _0x1043b1 = (_0x19ed35.format = {}).OpenSSL = {
                  "stringify": function (_0x28c332) {
                    var _0x16f639 = _0x28c332.ciphertext;
                    var _0x12ddbb = _0x28c332.salt;
                    return (_0x12ddbb ? _0x262171.create([0x53616c74, 0x65645f5f]).concat(_0x12ddbb).concat(_0x16f639) : _0x16f639).toString(_0x1edde7);
                  },
                  "parse": function (_0x290e4c) {
                    var _0x66b282;
                    var _0x4b55f2 = _0x1edde7.parse(_0x290e4c);
                    var _0xf12c16 = _0x4b55f2.words;
                    if (0x53616c74 == _0xf12c16[0x0] && 0x65645f5f == _0xf12c16[0x1]) {
                      _0x66b282 = _0x262171.create(_0xf12c16.slice(0x2, 0x4));
                      _0xf12c16.splice(0x0, 0x4);
                      _0x4b55f2.sigBytes -= 0x10;
                    }
                    return _0x4a847b.create({
                      "ciphertext": _0x4b55f2,
                      "salt": _0x66b282
                    });
                  }
                };
                var _0x161eed = _0xe22d0f.SerializableCipher = _0x261717.extend({
                  "cfg": _0x261717.extend({
                    "format": _0x1043b1
                  }),
                  "encrypt": function (_0x2942cb, _0x3ef15b, _0x51f29d, _0xd59880) {
                    _0xd59880 = this.cfg.extend(_0xd59880);
                    var _0x4466ed = _0x2942cb.createEncryptor(_0x51f29d, _0xd59880);
                    var _0x489d5e = _0x4466ed.finalize(_0x3ef15b);
                    var _0x71296a = _0x4466ed.cfg;
                    return _0x4a847b.create({
                      "ciphertext": _0x489d5e,
                      "key": _0x51f29d,
                      "iv": _0x71296a.iv,
                      "algorithm": _0x2942cb,
                      "mode": _0x71296a.mode,
                      "padding": _0x71296a.padding,
                      "blockSize": _0x2942cb.blockSize,
                      "formatter": _0xd59880.format
                    });
                  },
                  "decrypt": function (_0x1f3d25, _0x10928c, _0x42eaa6, _0xcb1ab9) {
                    _0xcb1ab9 = this.cfg.extend(_0xcb1ab9);
                    _0x10928c = this._parse(_0x10928c, _0xcb1ab9.format);
                    return _0x1f3d25.createDecryptor(_0x42eaa6, _0xcb1ab9).finalize(_0x10928c.ciphertext);
                  },
                  "_parse": function (_0x537f65, _0x3060c1) {
                    return "string" == typeof _0x537f65 ? _0x3060c1.parse(_0x537f65, this) : _0x537f65;
                  }
                });
                var _0x1909f1 = (_0x19ed35.kdf = {}).OpenSSL = {
                  "execute": function (_0x938ec4, _0x7e7ac6, _0x52ebfd, _0xb2e63c) {
                    if (!_0xb2e63c) {
                      _0xb2e63c = _0x262171.random(0x8);
                    }
                    var _0x3db689 = _0x5ce1e9.create({
                      "keySize": _0x7e7ac6 + _0x52ebfd
                    }).compute(_0x938ec4, _0xb2e63c);
                    var _0x3f4e22 = _0x262171.create(_0x3db689.words.slice(_0x7e7ac6), 0x4 * _0x52ebfd);
                    _0x3db689.sigBytes = 0x4 * _0x7e7ac6;
                    return _0x4a847b.create({
                      "key": _0x3db689,
                      "iv": _0x3f4e22,
                      "salt": _0xb2e63c
                    });
                  }
                };
                var _0x4d1e7d = _0xe22d0f.PasswordBasedCipher = _0x161eed.extend({
                  "cfg": _0x161eed.cfg.extend({
                    "kdf": _0x1909f1
                  }),
                  "encrypt": function (_0x43874d, _0x58a2ef, _0x57e8f3, _0x2e54cb) {
                    var _0x5b57c3 = (_0x2e54cb = this.cfg.extend(_0x2e54cb)).kdf.execute(_0x57e8f3, _0x43874d.keySize, _0x43874d.ivSize);
                    _0x2e54cb.iv = _0x5b57c3.iv;
                    var _0x330964 = _0x161eed.encrypt.call(this, _0x43874d, _0x58a2ef, _0x5b57c3.key, _0x2e54cb);
                    _0x330964.mixIn(_0x5b57c3);
                    return _0x330964;
                  },
                  "decrypt": function (_0xf73f4e, _0x32faaf, _0x359b69, _0x45e3c2) {
                    _0x45e3c2 = this.cfg.extend(_0x45e3c2);
                    _0x32faaf = this._parse(_0x32faaf, _0x45e3c2.format);
                    var _0xf68632 = _0x45e3c2.kdf.execute(_0x359b69, _0xf73f4e.keySize, _0xf73f4e.ivSize, _0x32faaf.salt);
                    _0x45e3c2.iv = _0xf68632.iv;
                    return _0x161eed.decrypt.call(this, _0xf73f4e, _0x32faaf, _0xf68632.key, _0x45e3c2);
                  }
                });
              }());
            },
            0x1d06: function (_0x340980, _0x337fc5, _0x49c2ff) {
              var _0x5881e4;
              _0x5881e4 = _0x5881e4 || function (_0x4daf05, _0x445e80) {
                var _0x1d0e33;
                if ("undefined" != typeof window && window.crypto) {
                  _0x1d0e33 = window.crypto;
                }
                if ("undefined" != typeof self && self.crypto) {
                  _0x1d0e33 = self.crypto;
                }
                if ("undefined" != typeof globalThis && globalThis.crypto) {
                  _0x1d0e33 = globalThis.crypto;
                }
                if (!_0x1d0e33 && "undefined" != typeof window && window.msCrypto) {
                  _0x1d0e33 = window.msCrypto;
                }
                if (!_0x1d0e33 && undefined !== _0x49c2ff.g && _0x49c2ff.g.crypto) {
                  _0x1d0e33 = _0x49c2ff.g.crypto;
                }
                if (!_0x1d0e33) {
                  try {
                    _0x1d0e33 = _0x49c2ff(0x1c1c);
                  } catch (_0x2a0717) {}
                }
                var _0x566432 = function () {
                  if (_0x1d0e33) {
                    if ("function" == typeof _0x1d0e33.getRandomValues) {
                      try {
                        return _0x1d0e33.getRandomValues(new Uint32Array(0x1))[0x0];
                      } catch (_0x49bf39) {}
                    }
                    if ("function" == typeof _0x1d0e33.randomBytes) {
                      try {
                        return _0x1d0e33.randomBytes(0x4).readInt32LE();
                      } catch (_0x11e9ae) {}
                    }
                  }
                  throw new Error("Native crypto module could not be used to get secure random number.");
                };
                var _0x4c3daa = Object.create || function () {
                  function _0x5131ab() {}
                  return function (_0x5d724f) {
                    var _0x7af0de;
                    _0x5131ab.prototype = _0x5d724f;
                    _0x7af0de = new _0x5131ab();
                    _0x5131ab.prototype = null;
                    return _0x7af0de;
                  };
                }();
                var _0x5e22ba = {};
                var _0xa7b24d = _0x5e22ba.lib = {};
                var _0x5ef58c = _0xa7b24d.Base = {
                  "extend": function (_0x24406c) {
                    var _0x526dc8 = _0x4c3daa(this);
                    if (_0x24406c) {
                      _0x526dc8.mixIn(_0x24406c);
                    }
                    if (!(_0x526dc8.hasOwnProperty("init") && this.init !== _0x526dc8.init)) {
                      _0x526dc8.init = function () {
                        _0x526dc8.$super.init.apply(this, arguments);
                      };
                    }
                    _0x526dc8.init.prototype = _0x526dc8;
                    _0x526dc8.$super = this;
                    return _0x526dc8;
                  },
                  "create": function () {
                    var _0x2d6992 = this.extend();
                    _0x2d6992.init.apply(_0x2d6992, arguments);
                    return _0x2d6992;
                  },
                  "init": function () {},
                  "mixIn": function (_0x200f9e) {
                    for (var _0x5a6779 in _0x200f9e) if (_0x200f9e.hasOwnProperty(_0x5a6779)) {
                      this[_0x5a6779] = _0x200f9e[_0x5a6779];
                    }
                    if (_0x200f9e.hasOwnProperty("toString")) {
                      this.toString = _0x200f9e.toString;
                    }
                  },
                  "clone": function () {
                    return this.init.prototype.extend(this);
                  }
                };
                var _0x1f057e = _0xa7b24d.WordArray = _0x5ef58c.extend({
                  "init": function (_0x2a6a1a, _0x3e829f) {
                    _0x2a6a1a = this.words = _0x2a6a1a || [];
                    this.sigBytes = null != _0x3e829f ? _0x3e829f : 0x4 * _0x2a6a1a.length;
                  },
                  "toString": function (_0xa0bf40) {
                    return (_0xa0bf40 || _0x47e8c8).stringify(this);
                  },
                  "concat": function (_0x386332) {
                    var _0x3243e5 = this.words;
                    var _0x92481c = _0x386332.words;
                    var _0x5f5654 = this.sigBytes;
                    var _0x19b28b = _0x386332.sigBytes;
                    this.clamp();
                    if (_0x5f5654 % 0x4) {
                      for (var _0x5d083c = 0x0; _0x5d083c < _0x19b28b; _0x5d083c++) {
                        var _0x1e3bb0 = _0x92481c[_0x5d083c >>> 0x2] >>> 0x18 - _0x5d083c % 0x4 * 0x8 & 0xff;
                        _0x3243e5[_0x5f5654 + _0x5d083c >>> 0x2] |= _0x1e3bb0 << 0x18 - (_0x5f5654 + _0x5d083c) % 0x4 * 0x8;
                      }
                    } else {
                      for (var _0x1f6a83 = 0x0; _0x1f6a83 < _0x19b28b; _0x1f6a83 += 0x4) {
                        _0x3243e5[_0x5f5654 + _0x1f6a83 >>> 0x2] = _0x92481c[_0x1f6a83 >>> 0x2];
                      }
                    }
                    this.sigBytes += _0x19b28b;
                    return this;
                  },
                  "clamp": function () {
                    var _0x4799db = this.words;
                    var _0x394f8e = this.sigBytes;
                    _0x4799db[_0x394f8e >>> 0x2] &= 0xffffffff << 0x20 - _0x394f8e % 0x4 * 0x8;
                    _0x4799db.length = _0x4daf05.ceil(_0x394f8e / 0x4);
                  },
                  "clone": function () {
                    var _0x17d92f = _0x5ef58c.clone.call(this);
                    _0x17d92f.words = this.words.slice(0x0);
                    return _0x17d92f;
                  },
                  "random": function (_0x6f619a) {
                    var _0x4fe4d7 = [];
                    for (var _0x33139e = 0x0; _0x33139e < _0x6f619a; _0x33139e += 0x4) {
                      _0x4fe4d7.push(_0x566432());
                    }
                    return new _0x1f057e.init(_0x4fe4d7, _0x6f619a);
                  }
                });
                var _0x56713a = _0x5e22ba.enc = {};
                var _0x47e8c8 = _0x56713a.Hex = {
                  "stringify": function (_0x54f753) {
                    var _0x20c733 = _0x54f753.words;
                    var _0x519313 = _0x54f753.sigBytes;
                    var _0x2d56c5 = [];
                    for (var _0x281c6c = 0x0; _0x281c6c < _0x519313; _0x281c6c++) {
                      var _0x6dcc22 = _0x20c733[_0x281c6c >>> 0x2] >>> 0x18 - _0x281c6c % 0x4 * 0x8 & 0xff;
                      _0x2d56c5.push((_0x6dcc22 >>> 0x4).toString(0x10));
                      _0x2d56c5.push((0xf & _0x6dcc22).toString(0x10));
                    }
                    return _0x2d56c5.join('');
                  },
                  "parse": function (_0x3813fa) {
                    var _0x5e3f59 = _0x3813fa.length;
                    var _0x2e471d = [];
                    for (var _0x4f93d4 = 0x0; _0x4f93d4 < _0x5e3f59; _0x4f93d4 += 0x2) {
                      _0x2e471d[_0x4f93d4 >>> 0x3] |= parseInt(_0x3813fa.substr(_0x4f93d4, 0x2), 0x10) << 0x18 - _0x4f93d4 % 0x8 * 0x4;
                    }
                    return new _0x1f057e.init(_0x2e471d, _0x5e3f59 / 0x2);
                  }
                };
                var _0x5a5735 = _0x56713a.Latin1 = {
                  "stringify": function (_0x2d19d0) {
                    var _0x107c99 = _0x2d19d0.words;
                    var _0x1f3463 = _0x2d19d0.sigBytes;
                    var _0x52cbf2 = [];
                    for (var _0x25ccd5 = 0x0; _0x25ccd5 < _0x1f3463; _0x25ccd5++) {
                      var _0x1e627f = _0x107c99[_0x25ccd5 >>> 0x2] >>> 0x18 - _0x25ccd5 % 0x4 * 0x8 & 0xff;
                      _0x52cbf2.push(String.fromCharCode(_0x1e627f));
                    }
                    return _0x52cbf2.join('');
                  },
                  "parse": function (_0x498a35) {
                    var _0x4392da = _0x498a35.length;
                    var _0x5ce471 = [];
                    for (var _0x43f3a1 = 0x0; _0x43f3a1 < _0x4392da; _0x43f3a1++) {
                      _0x5ce471[_0x43f3a1 >>> 0x2] |= (0xff & _0x498a35.charCodeAt(_0x43f3a1)) << 0x18 - _0x43f3a1 % 0x4 * 0x8;
                    }
                    return new _0x1f057e.init(_0x5ce471, _0x4392da);
                  }
                };
                var _0x1dcff4 = _0x56713a.Utf8 = {
                  "stringify": function (_0x41265c) {
                    try {
                      return decodeURIComponent(escape(_0x5a5735.stringify(_0x41265c)));
                    } catch (_0x4898cb) {
                      throw new Error("Malformed UTF-8 data");
                    }
                  },
                  "parse": function (_0x283521) {
                    return _0x5a5735.parse(unescape(encodeURIComponent(_0x283521)));
                  }
                };
                var _0xe95ed7 = _0xa7b24d.BufferedBlockAlgorithm = _0x5ef58c.extend({
                  "reset": function () {
                    this._data = new _0x1f057e.init();
                    this._nDataBytes = 0x0;
                  },
                  "_append": function (_0xd9f514) {
                    if ("string" == typeof _0xd9f514) {
                      _0xd9f514 = _0x1dcff4.parse(_0xd9f514);
                    }
                    this._data.concat(_0xd9f514);
                    this._nDataBytes += _0xd9f514.sigBytes;
                  },
                  "_process": function (_0xf5026a) {
                    var _0x5380ae;
                    var _0x2c58bd = this._data;
                    var _0x2f44c9 = _0x2c58bd.words;
                    var _0x19f36f = _0x2c58bd.sigBytes;
                    var _0x12d715 = this.blockSize;
                    var _0x36bf6e = _0x19f36f / (0x4 * _0x12d715);
                    var _0x2cc009 = (_0x36bf6e = _0xf5026a ? _0x4daf05.ceil(_0x36bf6e) : _0x4daf05.max((0x0 | _0x36bf6e) - this._minBufferSize, 0x0)) * _0x12d715;
                    var _0x41eaed = _0x4daf05.min(0x4 * _0x2cc009, _0x19f36f);
                    if (_0x2cc009) {
                      for (var _0x30abe9 = 0x0; _0x30abe9 < _0x2cc009; _0x30abe9 += _0x12d715) {
                        this._doProcessBlock(_0x2f44c9, _0x30abe9);
                      }
                      _0x5380ae = _0x2f44c9.splice(0x0, _0x2cc009);
                      _0x2c58bd.sigBytes -= _0x41eaed;
                    }
                    return new _0x1f057e.init(_0x5380ae, _0x41eaed);
                  },
                  "clone": function () {
                    var _0x2c790f = _0x5ef58c.clone.call(this);
                    _0x2c790f._data = this._data.clone();
                    return _0x2c790f;
                  },
                  "_minBufferSize": 0x0
                });
                _0xa7b24d.Hasher = _0xe95ed7.extend({
                  "cfg": _0x5ef58c.extend(),
                  "init": function (_0x248a70) {
                    this.cfg = this.cfg.extend(_0x248a70);
                    this.reset();
                  },
                  "reset": function () {
                    _0xe95ed7.reset.call(this);
                    this._doReset();
                  },
                  "update": function (_0xd843c0) {
                    this._append(_0xd843c0);
                    this._process();
                    return this;
                  },
                  "finalize": function (_0x518fbb) {
                    if (_0x518fbb) {
                      this._append(_0x518fbb);
                    }
                    return this._doFinalize();
                  },
                  "blockSize": 0x10,
                  "_createHelper": function (_0x2256d) {
                    return function (_0x4c080c, _0x148104) {
                      return new _0x2256d.init(_0x148104).finalize(_0x4c080c);
                    };
                  },
                  "_createHmacHelper": function (_0x2e3d7a) {
                    return function (_0x1c2fe0, _0x41050c) {
                      return new _0x1799d9.HMAC.init(_0x2e3d7a, _0x41050c).finalize(_0x1c2fe0);
                    };
                  }
                });
                var _0x1799d9 = _0x5e22ba.algo = {};
                return _0x5e22ba;
              }(Math);
              _0x340980.exports = _0x5881e4;
            },
            0x1623: function (_0x3667df, _0x2b2391, _0x4f1fa7) {
              var _0x13bfed;
              var _0x35b4bf;
              _0x13bfed = _0x4f1fa7(0x1d06);
              _0x35b4bf = _0x13bfed.lib.WordArray;
              _0x13bfed.enc.Base64 = {
                "stringify": function (_0x95479d) {
                  var _0x87ea71 = _0x95479d.words;
                  var _0x48e6c7 = _0x95479d.sigBytes;
                  var _0x5f2391 = this._map;
                  _0x95479d.clamp();
                  var _0xcc8201 = [];
                  for (var _0x382d3e = 0x0; _0x382d3e < _0x48e6c7; _0x382d3e += 0x3) {
                    var _0x3921fd = (_0x87ea71[_0x382d3e >>> 0x2] >>> 0x18 - _0x382d3e % 0x4 * 0x8 & 0xff) << 0x10 | (_0x87ea71[_0x382d3e + 0x1 >>> 0x2] >>> 0x18 - (_0x382d3e + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | _0x87ea71[_0x382d3e + 0x2 >>> 0x2] >>> 0x18 - (_0x382d3e + 0x2) % 0x4 * 0x8 & 0xff;
                    for (var _0x5a9ec8 = 0x0; _0x5a9ec8 < 0x4 && _0x382d3e + 0.75 * _0x5a9ec8 < _0x48e6c7; _0x5a9ec8++) {
                      _0xcc8201.push(_0x5f2391.charAt(_0x3921fd >>> 0x6 * (0x3 - _0x5a9ec8) & 0x3f));
                    }
                  }
                  var _0x4e2fa4 = _0x5f2391.charAt(0x40);
                  if (_0x4e2fa4) {
                    for (; _0xcc8201.length % 0x4;) {
                      _0xcc8201.push(_0x4e2fa4);
                    }
                  }
                  return _0xcc8201.join('');
                },
                "parse": function (_0x4cd24a) {
                  var _0x1dffec = _0x4cd24a.length;
                  var _0x38c831 = this._map;
                  var _0x42dfa4 = this._reverseMap;
                  if (!_0x42dfa4) {
                    _0x42dfa4 = this._reverseMap = [];
                    for (var _0x723ac5 = 0x0; _0x723ac5 < _0x38c831.length; _0x723ac5++) {
                      _0x42dfa4[_0x38c831.charCodeAt(_0x723ac5)] = _0x723ac5;
                    }
                  }
                  var _0x50b2f5 = _0x38c831.charAt(0x40);
                  if (_0x50b2f5) {
                    var _0x38c6fa = _0x4cd24a.indexOf(_0x50b2f5);
                    if (-0x1 !== _0x38c6fa) {
                      _0x1dffec = _0x38c6fa;
                    }
                  }
                  return function (_0xfdf74b, _0x272d86, _0x1bfc7b) {
                    var _0x3c50f2 = [];
                    var _0x19351f = 0x0;
                    for (var _0x38613f = 0x0; _0x38613f < _0x272d86; _0x38613f++) {
                      if (_0x38613f % 0x4) {
                        var _0xa1bbdf = _0x1bfc7b[_0xfdf74b.charCodeAt(_0x38613f - 0x1)] << _0x38613f % 0x4 * 0x2 | _0x1bfc7b[_0xfdf74b.charCodeAt(_0x38613f)] >>> 0x6 - _0x38613f % 0x4 * 0x2;
                        _0x3c50f2[_0x19351f >>> 0x2] |= _0xa1bbdf << 0x18 - _0x19351f % 0x4 * 0x8;
                        _0x19351f++;
                      }
                    }
                    return _0x35b4bf.create(_0x3c50f2, _0x19351f);
                  }(_0x4cd24a, _0x1dffec, _0x42dfa4);
                },
                "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
              };
              _0x3667df.exports = _0x13bfed.enc.Base64;
            },
            0x1e40: function (_0x264bee, _0x5c786d, _0x5ef6cd) {
              var _0x57fc84;
              var _0x4f9fa1;
              _0x57fc84 = _0x5ef6cd(0x1d06);
              _0x4f9fa1 = _0x57fc84.lib.WordArray;
              _0x57fc84.enc.Base64url = {
                "stringify": function (_0x3d3d16, _0x6bb92b = true) {
                  var _0x1fe0bc = _0x3d3d16.words;
                  var _0x20ff59 = _0x3d3d16.sigBytes;
                  var _0x578db1 = _0x6bb92b ? this._safe_map : this._map;
                  _0x3d3d16.clamp();
                  var _0x59dd27 = [];
                  for (var _0x20d05d = 0x0; _0x20d05d < _0x20ff59; _0x20d05d += 0x3) {
                    var _0x23e5bd = (_0x1fe0bc[_0x20d05d >>> 0x2] >>> 0x18 - _0x20d05d % 0x4 * 0x8 & 0xff) << 0x10 | (_0x1fe0bc[_0x20d05d + 0x1 >>> 0x2] >>> 0x18 - (_0x20d05d + 0x1) % 0x4 * 0x8 & 0xff) << 0x8 | _0x1fe0bc[_0x20d05d + 0x2 >>> 0x2] >>> 0x18 - (_0x20d05d + 0x2) % 0x4 * 0x8 & 0xff;
                    for (var _0x5b4950 = 0x0; _0x5b4950 < 0x4 && _0x20d05d + 0.75 * _0x5b4950 < _0x20ff59; _0x5b4950++) {
                      _0x59dd27.push(_0x578db1.charAt(_0x23e5bd >>> 0x6 * (0x3 - _0x5b4950) & 0x3f));
                    }
                  }
                  var _0x210e43 = _0x578db1.charAt(0x40);
                  if (_0x210e43) {
                    for (; _0x59dd27.length % 0x4;) {
                      _0x59dd27.push(_0x210e43);
                    }
                  }
                  return _0x59dd27.join('');
                },
                "parse": function (_0x2c1cef, _0x3384e6 = true) {
                  var _0x5c2280 = _0x2c1cef.length;
                  var _0x139e18 = _0x3384e6 ? this._safe_map : this._map;
                  var _0x56be45 = this._reverseMap;
                  if (!_0x56be45) {
                    _0x56be45 = this._reverseMap = [];
                    for (var _0x179c2d = 0x0; _0x179c2d < _0x139e18.length; _0x179c2d++) {
                      _0x56be45[_0x139e18.charCodeAt(_0x179c2d)] = _0x179c2d;
                    }
                  }
                  var _0x2439ed = _0x139e18.charAt(0x40);
                  if (_0x2439ed) {
                    var _0x1d9920 = _0x2c1cef.indexOf(_0x2439ed);
                    if (-0x1 !== _0x1d9920) {
                      _0x5c2280 = _0x1d9920;
                    }
                  }
                  return function (_0x40d7cb, _0x131c4e, _0x52b86d) {
                    var _0x3992fc = [];
                    var _0x4394d6 = 0x0;
                    for (var _0x2a76cb = 0x0; _0x2a76cb < _0x131c4e; _0x2a76cb++) {
                      if (_0x2a76cb % 0x4) {
                        var _0x3c6be4 = _0x52b86d[_0x40d7cb.charCodeAt(_0x2a76cb - 0x1)] << _0x2a76cb % 0x4 * 0x2 | _0x52b86d[_0x40d7cb.charCodeAt(_0x2a76cb)] >>> 0x6 - _0x2a76cb % 0x4 * 0x2;
                        _0x3992fc[_0x4394d6 >>> 0x2] |= _0x3c6be4 << 0x18 - _0x4394d6 % 0x4 * 0x8;
                        _0x4394d6++;
                      }
                    }
                    return _0x4f9fa1.create(_0x3992fc, _0x4394d6);
                  }(_0x2c1cef, _0x5c2280, _0x56be45);
                },
                "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                "_safe_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
              };
              _0x264bee.exports = _0x57fc84.enc.Base64url;
            },
            0xb24: function (_0xd75e0f, _0x5b7af2, _0x202c31) {
              var _0x168210;
              _0x168210 = _0x202c31(0x1d06);
              (function () {
                var _0x24442a = _0x168210.lib.WordArray;
                var _0x412d2c = _0x168210.enc;
                function _0x35816d(_0x12b084) {
                  return _0x12b084 << 0x8 & 0xff00ff00 | _0x12b084 >>> 0x8 & 0xff00ff;
                }
                _0x412d2c.Utf16 = _0x412d2c.Utf16BE = {
                  "stringify": function (_0xcb0eec) {
                    var _0x3505bf = _0xcb0eec.words;
                    var _0x26de32 = _0xcb0eec.sigBytes;
                    var _0x3c9c75 = [];
                    for (var _0xc5cf20 = 0x0; _0xc5cf20 < _0x26de32; _0xc5cf20 += 0x2) {
                      var _0x15b012 = _0x3505bf[_0xc5cf20 >>> 0x2] >>> 0x10 - _0xc5cf20 % 0x4 * 0x8 & 0xffff;
                      _0x3c9c75.push(String.fromCharCode(_0x15b012));
                    }
                    return _0x3c9c75.join('');
                  },
                  "parse": function (_0x570917) {
                    var _0x673d77 = _0x570917.length;
                    var _0x5f40b7 = [];
                    for (var _0x3faf20 = 0x0; _0x3faf20 < _0x673d77; _0x3faf20++) {
                      _0x5f40b7[_0x3faf20 >>> 0x1] |= _0x570917.charCodeAt(_0x3faf20) << 0x10 - _0x3faf20 % 0x2 * 0x10;
                    }
                    return _0x24442a.create(_0x5f40b7, 0x2 * _0x673d77);
                  }
                };
                _0x412d2c.Utf16LE = {
                  "stringify": function (_0xd2c559) {
                    var _0x242cab = _0xd2c559.words;
                    var _0x40f384 = _0xd2c559.sigBytes;
                    var _0x402ec0 = [];
                    for (var _0x208dea = 0x0; _0x208dea < _0x40f384; _0x208dea += 0x2) {
                      var _0x51ef3e = (_0x242cab[_0x208dea >>> 0x2] >>> 0x10 - _0x208dea % 0x4 * 0x8 & 0xffff) << 0x8 & 0xff00ff00 | (_0x242cab[_0x208dea >>> 0x2] >>> 0x10 - _0x208dea % 0x4 * 0x8 & 0xffff) >>> 0x8 & 0xff00ff;
                      _0x402ec0.push(String.fromCharCode(_0x51ef3e));
                    }
                    return _0x402ec0.join('');
                  },
                  "parse": function (_0x239dc1) {
                    var _0x24b6da = _0x239dc1.length;
                    var _0x33beae = [];
                    for (var _0x21478b = 0x0; _0x21478b < _0x24b6da; _0x21478b++) {
                      _0x33beae[_0x21478b >>> 0x1] |= _0x239dc1.charCodeAt(_0x21478b) << 0x10 - _0x21478b % 0x2 * 0x10 << 0x8 & 0xff00ff00 | _0x239dc1.charCodeAt(_0x21478b) << 0x10 - _0x21478b % 0x2 * 0x10 >>> 0x8 & 0xff00ff;
                    }
                    return _0x24442a.create(_0x33beae, 0x2 * _0x24b6da);
                  }
                };
              })();
              _0xd75e0f.exports = _0x168210.enc.Utf16;
            },
            0x1f74: function (_0x4f983c, _0x1d6d94, _0x135b71) {
              var _0x3dbff6;
              var _0x3d6100;
              var _0x336b9c;
              var _0x4faefe;
              var _0x1af094;
              var _0x5759ae;
              var _0x17a7ac;
              _0x17a7ac = _0x135b71(0x1d06);
              _0x135b71(0x25bc);
              _0x135b71(0x596);
              _0x3d6100 = (_0x3dbff6 = _0x17a7ac.lib).Base;
              _0x336b9c = _0x3dbff6.WordArray;
              _0x1af094 = (_0x4faefe = _0x17a7ac.algo).MD5;
              _0x5759ae = _0x4faefe.EvpKDF = _0x3d6100.extend({
                "cfg": _0x3d6100.extend({
                  "keySize": 0x4,
                  "hasher": _0x1af094,
                  "iterations": 0x1
                }),
                "init": function (_0x444939) {
                  this.cfg = this.cfg.extend(_0x444939);
                },
                "compute": function (_0x187a39, _0x28e83c) {
                  var _0x13bc27;
                  var _0xad2bb4 = this.cfg;
                  var _0x4332da = _0xad2bb4.hasher.create();
                  var _0x4aeaf0 = _0x336b9c.create();
                  var _0x526346 = _0x4aeaf0.words;
                  var _0x46b60e = _0xad2bb4.keySize;
                  for (var _0x1b330f = _0xad2bb4.iterations; _0x526346.length < _0x46b60e;) {
                    if (_0x13bc27) {
                      _0x4332da.update(_0x13bc27);
                    }
                    _0x13bc27 = _0x4332da.update(_0x187a39).finalize(_0x28e83c);
                    _0x4332da.reset();
                    for (var _0x4514b9 = 0x1; _0x4514b9 < _0x1b330f; _0x4514b9++) {
                      _0x13bc27 = _0x4332da.finalize(_0x13bc27);
                      _0x4332da.reset();
                    }
                    _0x4aeaf0.concat(_0x13bc27);
                  }
                  _0x4aeaf0.sigBytes = 0x4 * _0x46b60e;
                  return _0x4aeaf0;
                }
              });
              _0x17a7ac.EvpKDF = function (_0x31e893, _0x475f97, _0x16bad5) {
                return _0x5759ae.create(_0x16bad5).compute(_0x31e893, _0x475f97);
              };
              _0x4f983c.exports = _0x17a7ac.EvpKDF;
            },
            0x2007: function (_0x215074, _0x5b1896, _0x7f8c51) {
              var _0xc8756f;
              var _0x5d5425;
              var _0x5881d6;
              _0x5881d6 = _0x7f8c51(0x1d06);
              _0x7f8c51(0x1c28);
              _0xc8756f = _0x5881d6.lib.CipherParams;
              _0x5d5425 = _0x5881d6.enc.Hex;
              _0x5881d6.format.Hex = {
                "stringify": function (_0x4da845) {
                  return _0x4da845.ciphertext.toString(_0x5d5425);
                },
                "parse": function (_0x5f278c) {
                  var _0x120cd7 = _0x5d5425.parse(_0x5f278c);
                  return _0xc8756f.create({
                    "ciphertext": _0x120cd7
                  });
                }
              };
              _0x215074.exports = _0x5881d6.format.Hex;
            },
            0x596: function (_0x59510d, _0x29b340, _0x4e5836) {
              var _0x438809;
              var _0x59a7f7;
              var _0x42da27;
              _0x59a7f7 = (_0x438809 = _0x4e5836(0x1d06)).lib.Base;
              _0x42da27 = _0x438809.enc.Utf8;
              _0x59510d.exports = void (_0x438809.algo.HMAC = _0x59a7f7.extend({
                "init": function (_0x3b6acb, _0x21d2f5) {
                  _0x3b6acb = this._hasher = new _0x3b6acb.init();
                  if ("string" == typeof _0x21d2f5) {
                    _0x21d2f5 = _0x42da27.parse(_0x21d2f5);
                  }
                  var _0x45870d = _0x3b6acb.blockSize;
                  var _0x1f0142 = 0x4 * _0x45870d;
                  if (_0x21d2f5.sigBytes > _0x1f0142) {
                    _0x21d2f5 = _0x3b6acb.finalize(_0x21d2f5);
                  }
                  _0x21d2f5.clamp();
                  var _0x280362 = this._oKey = _0x21d2f5.clone();
                  var _0x1841de = this._iKey = _0x21d2f5.clone();
                  var _0x3fec4a = _0x280362.words;
                  var _0xad8c96 = _0x1841de.words;
                  for (var _0x430f46 = 0x0; _0x430f46 < _0x45870d; _0x430f46++) {
                    _0x3fec4a[_0x430f46] ^= 0x5c5c5c5c;
                    _0xad8c96[_0x430f46] ^= 0x36363636;
                  }
                  _0x280362.sigBytes = _0x1841de.sigBytes = _0x1f0142;
                  this.reset();
                },
                "reset": function () {
                  var _0x56761b = this._hasher;
                  _0x56761b.reset();
                  _0x56761b.update(this._iKey);
                },
                "update": function (_0x31a8bf) {
                  this._hasher.update(_0x31a8bf);
                  return this;
                },
                "finalize": function (_0x4445e1) {
                  var _0x1b4dc3 = this._hasher;
                  var _0x231ba0 = _0x1b4dc3.finalize(_0x4445e1);
                  _0x1b4dc3.reset();
                  return _0x1b4dc3.finalize(this._oKey.clone().concat(_0x231ba0));
                }
              }));
            },
            0x1bd: function (_0x449517, _0xf467e2, _0x22303c) {
              var _0x5c0ba4;
              _0x5c0ba4 = _0x22303c(0x1d06);
              _0x22303c(0xa30);
              _0x22303c(0x8c6);
              _0x22303c(0xb24);
              _0x22303c(0x1623);
              _0x22303c(0x1e40);
              _0x22303c(0xc4a);
              _0x22303c(0x25bc);
              _0x22303c(0xb79);
              _0x22303c(0x749);
              _0x22303c(0x164b);
              _0x22303c(0x1bf7);
              _0x22303c(0x1045);
              _0x22303c(0x13be);
              _0x22303c(0x596);
              _0x22303c(0x1553);
              _0x22303c(0x1f74);
              _0x22303c(0x1c28);
              _0x22303c(0xc07);
              _0x22303c(0x14aa);
              _0x22303c(0x1516);
              _0x22303c(0x1e92);
              _0x22303c(0x82c);
              _0x22303c(0x12ee);
              _0x22303c(0x1243);
              _0x22303c(0x1a7f);
              _0x22303c(0x230d);
              _0x22303c(0x16c9);
              _0x22303c(0x2007);
              _0x22303c(0x8b1);
              _0x22303c(0x12e5);
              _0x22303c(0x1534);
              _0x22303c(0x9d3);
              _0x22303c(0x17f4);
              _0x449517.exports = _0x5c0ba4;
            },
            0x8c6: function (_0x527f99, _0x6fd7fe, _0x2d28f5) {
              var _0x325c12;
              _0x325c12 = _0x2d28f5(0x1d06);
              (function () {
                if ("function" == typeof ArrayBuffer) {
                  var _0x3aa7aa = _0x325c12.lib.WordArray;
                  var _0x306792 = _0x3aa7aa.init;
                  var _0x3834e5 = _0x3aa7aa.init = function (_0x23032f) {
                    if (_0x23032f instanceof ArrayBuffer) {
                      _0x23032f = new Uint8Array(_0x23032f);
                    }
                    if (_0x23032f instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && _0x23032f instanceof Uint8ClampedArray || _0x23032f instanceof Int16Array || _0x23032f instanceof Uint16Array || _0x23032f instanceof Int32Array || _0x23032f instanceof Uint32Array || _0x23032f instanceof Float32Array || _0x23032f instanceof Float64Array) {
                      _0x23032f = new Uint8Array(_0x23032f.buffer, _0x23032f.byteOffset, _0x23032f.byteLength);
                    }
                    if (_0x23032f instanceof Uint8Array) {
                      var _0x295acc = _0x23032f.byteLength;
                      var _0x2d91d2 = [];
                      for (var _0x57a219 = 0x0; _0x57a219 < _0x295acc; _0x57a219++) {
                        _0x2d91d2[_0x57a219 >>> 0x2] |= _0x23032f[_0x57a219] << 0x18 - _0x57a219 % 0x4 * 0x8;
                      }
                      _0x306792.call(this, _0x2d91d2, _0x295acc);
                    } else {
                      _0x306792.apply(this, arguments);
                    }
                  };
                  _0x3834e5.prototype = _0x3aa7aa;
                }
              })();
              _0x527f99.exports = _0x325c12.lib.WordArray;
            },
            0xc4a: function (_0xd8c3af, _0x44d520, _0x1532f5) {
              var _0x1ee274;
              _0x1ee274 = _0x1532f5(0x1d06);
              (function (_0x5e611f) {
                var _0x23d7f5 = _0x1ee274.lib;
                var _0x2fbe2d = _0x23d7f5.WordArray;
                var _0x116204 = _0x23d7f5.Hasher;
                var _0x232e50 = _0x1ee274.algo;
                var _0x2b6514 = [];
                !function () {
                  for (var _0x5a1df6 = 0x0; _0x5a1df6 < 0x40; _0x5a1df6++) {
                    _0x2b6514[_0x5a1df6] = 0x100000000 * _0x5e611f.abs(_0x5e611f.sin(_0x5a1df6 + 0x1)) | 0x0;
                  }
                }();
                var _0x1a0575 = _0x232e50.MD5 = _0x116204.extend({
                  "_doReset": function () {
                    this._hash = new _0x2fbe2d.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
                  },
                  "_doProcessBlock": function (_0x3a635b, _0xf1aece) {
                    for (var _0x856bc = 0x0; _0x856bc < 0x10; _0x856bc++) {
                      var _0x48e6b0 = _0xf1aece + _0x856bc;
                      var _0x3ec96f = _0x3a635b[_0x48e6b0];
                      _0x3a635b[_0x48e6b0] = 0xff00ff & (_0x3ec96f << 0x8 | _0x3ec96f >>> 0x18) | 0xff00ff00 & (_0x3ec96f << 0x18 | _0x3ec96f >>> 0x8);
                    }
                    var _0x35dd70 = this._hash.words;
                    var _0x1a1c71 = _0x3a635b[_0xf1aece + 0x0];
                    var _0x6eca72 = _0x3a635b[_0xf1aece + 0x1];
                    var _0x1bb099 = _0x3a635b[_0xf1aece + 0x2];
                    var _0x5d3ef6 = _0x3a635b[_0xf1aece + 0x3];
                    var _0x43cd24 = _0x3a635b[_0xf1aece + 0x4];
                    var _0xfa34e = _0x3a635b[_0xf1aece + 0x5];
                    var _0xb1ae91 = _0x3a635b[_0xf1aece + 0x6];
                    var _0x553c23 = _0x3a635b[_0xf1aece + 0x7];
                    var _0x4fdd3c = _0x3a635b[_0xf1aece + 0x8];
                    var _0x2bacb2 = _0x3a635b[_0xf1aece + 0x9];
                    var _0x168dab = _0x3a635b[_0xf1aece + 0xa];
                    var _0x1506f4 = _0x3a635b[_0xf1aece + 0xb];
                    var _0x46063e = _0x3a635b[_0xf1aece + 0xc];
                    var _0x8da3a4 = _0x3a635b[_0xf1aece + 0xd];
                    var _0x2899e5 = _0x3a635b[_0xf1aece + 0xe];
                    var _0x4ecf2d = _0x3a635b[_0xf1aece + 0xf];
                    var _0x283f89 = _0x35dd70[0x0];
                    var _0x646dc2 = _0x35dd70[0x1];
                    var _0x3c9d94 = _0x35dd70[0x2];
                    var _0x203dda = _0x35dd70[0x3];
                    _0x283f89 = _0x29089c(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x1a1c71, 0x7, _0x2b6514[0x0]);
                    _0x203dda = _0x29089c(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x6eca72, 0xc, _0x2b6514[0x1]);
                    _0x3c9d94 = _0x29089c(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x1bb099, 0x11, _0x2b6514[0x2]);
                    _0x646dc2 = _0x29089c(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x5d3ef6, 0x16, _0x2b6514[0x3]);
                    _0x283f89 = _0x29089c(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x43cd24, 0x7, _0x2b6514[0x4]);
                    _0x203dda = _0x29089c(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0xfa34e, 0xc, _0x2b6514[0x5]);
                    _0x3c9d94 = _0x29089c(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0xb1ae91, 0x11, _0x2b6514[0x6]);
                    _0x646dc2 = _0x29089c(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x553c23, 0x16, _0x2b6514[0x7]);
                    _0x283f89 = _0x29089c(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x4fdd3c, 0x7, _0x2b6514[0x8]);
                    _0x203dda = _0x29089c(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x2bacb2, 0xc, _0x2b6514[0x9]);
                    _0x3c9d94 = _0x29089c(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x168dab, 0x11, _0x2b6514[0xa]);
                    _0x646dc2 = _0x29089c(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x1506f4, 0x16, _0x2b6514[0xb]);
                    _0x283f89 = _0x29089c(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x46063e, 0x7, _0x2b6514[0xc]);
                    _0x203dda = _0x29089c(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x8da3a4, 0xc, _0x2b6514[0xd]);
                    _0x3c9d94 = _0x29089c(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x2899e5, 0x11, _0x2b6514[0xe]);
                    _0x283f89 = _0x2961c3(_0x283f89, _0x646dc2 = _0x29089c(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x4ecf2d, 0x16, _0x2b6514[0xf]), _0x3c9d94, _0x203dda, _0x6eca72, 0x5, _0x2b6514[0x10]);
                    _0x203dda = _0x2961c3(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0xb1ae91, 0x9, _0x2b6514[0x11]);
                    _0x3c9d94 = _0x2961c3(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x1506f4, 0xe, _0x2b6514[0x12]);
                    _0x646dc2 = _0x2961c3(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x1a1c71, 0x14, _0x2b6514[0x13]);
                    _0x283f89 = _0x2961c3(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0xfa34e, 0x5, _0x2b6514[0x14]);
                    _0x203dda = _0x2961c3(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x168dab, 0x9, _0x2b6514[0x15]);
                    _0x3c9d94 = _0x2961c3(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x4ecf2d, 0xe, _0x2b6514[0x16]);
                    _0x646dc2 = _0x2961c3(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x43cd24, 0x14, _0x2b6514[0x17]);
                    _0x283f89 = _0x2961c3(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x2bacb2, 0x5, _0x2b6514[0x18]);
                    _0x203dda = _0x2961c3(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x2899e5, 0x9, _0x2b6514[0x19]);
                    _0x3c9d94 = _0x2961c3(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x5d3ef6, 0xe, _0x2b6514[0x1a]);
                    _0x646dc2 = _0x2961c3(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x4fdd3c, 0x14, _0x2b6514[0x1b]);
                    _0x283f89 = _0x2961c3(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x8da3a4, 0x5, _0x2b6514[0x1c]);
                    _0x203dda = _0x2961c3(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x1bb099, 0x9, _0x2b6514[0x1d]);
                    _0x3c9d94 = _0x2961c3(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x553c23, 0xe, _0x2b6514[0x1e]);
                    _0x283f89 = _0x1186bf(_0x283f89, _0x646dc2 = _0x2961c3(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x46063e, 0x14, _0x2b6514[0x1f]), _0x3c9d94, _0x203dda, _0xfa34e, 0x4, _0x2b6514[0x20]);
                    _0x203dda = _0x1186bf(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x4fdd3c, 0xb, _0x2b6514[0x21]);
                    _0x3c9d94 = _0x1186bf(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x1506f4, 0x10, _0x2b6514[0x22]);
                    _0x646dc2 = _0x1186bf(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x2899e5, 0x17, _0x2b6514[0x23]);
                    _0x283f89 = _0x1186bf(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x6eca72, 0x4, _0x2b6514[0x24]);
                    _0x203dda = _0x1186bf(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x43cd24, 0xb, _0x2b6514[0x25]);
                    _0x3c9d94 = _0x1186bf(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x553c23, 0x10, _0x2b6514[0x26]);
                    _0x646dc2 = _0x1186bf(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x168dab, 0x17, _0x2b6514[0x27]);
                    _0x283f89 = _0x1186bf(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x8da3a4, 0x4, _0x2b6514[0x28]);
                    _0x203dda = _0x1186bf(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x1a1c71, 0xb, _0x2b6514[0x29]);
                    _0x3c9d94 = _0x1186bf(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x5d3ef6, 0x10, _0x2b6514[0x2a]);
                    _0x646dc2 = _0x1186bf(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0xb1ae91, 0x17, _0x2b6514[0x2b]);
                    _0x283f89 = _0x1186bf(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x2bacb2, 0x4, _0x2b6514[0x2c]);
                    _0x203dda = _0x1186bf(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x46063e, 0xb, _0x2b6514[0x2d]);
                    _0x3c9d94 = _0x1186bf(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x4ecf2d, 0x10, _0x2b6514[0x2e]);
                    _0x283f89 = _0x287bc5(_0x283f89, _0x646dc2 = _0x1186bf(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x1bb099, 0x17, _0x2b6514[0x2f]), _0x3c9d94, _0x203dda, _0x1a1c71, 0x6, _0x2b6514[0x30]);
                    _0x203dda = _0x287bc5(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x553c23, 0xa, _0x2b6514[0x31]);
                    _0x3c9d94 = _0x287bc5(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x2899e5, 0xf, _0x2b6514[0x32]);
                    _0x646dc2 = _0x287bc5(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0xfa34e, 0x15, _0x2b6514[0x33]);
                    _0x283f89 = _0x287bc5(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x46063e, 0x6, _0x2b6514[0x34]);
                    _0x203dda = _0x287bc5(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x5d3ef6, 0xa, _0x2b6514[0x35]);
                    _0x3c9d94 = _0x287bc5(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x168dab, 0xf, _0x2b6514[0x36]);
                    _0x646dc2 = _0x287bc5(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x6eca72, 0x15, _0x2b6514[0x37]);
                    _0x283f89 = _0x287bc5(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x4fdd3c, 0x6, _0x2b6514[0x38]);
                    _0x203dda = _0x287bc5(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x4ecf2d, 0xa, _0x2b6514[0x39]);
                    _0x3c9d94 = _0x287bc5(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0xb1ae91, 0xf, _0x2b6514[0x3a]);
                    _0x646dc2 = _0x287bc5(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x8da3a4, 0x15, _0x2b6514[0x3b]);
                    _0x283f89 = _0x287bc5(_0x283f89, _0x646dc2, _0x3c9d94, _0x203dda, _0x43cd24, 0x6, _0x2b6514[0x3c]);
                    _0x203dda = _0x287bc5(_0x203dda, _0x283f89, _0x646dc2, _0x3c9d94, _0x1506f4, 0xa, _0x2b6514[0x3d]);
                    _0x3c9d94 = _0x287bc5(_0x3c9d94, _0x203dda, _0x283f89, _0x646dc2, _0x1bb099, 0xf, _0x2b6514[0x3e]);
                    _0x646dc2 = _0x287bc5(_0x646dc2, _0x3c9d94, _0x203dda, _0x283f89, _0x2bacb2, 0x15, _0x2b6514[0x3f]);
                    _0x35dd70[0x0] = _0x35dd70[0x0] + _0x283f89 | 0x0;
                    _0x35dd70[0x1] = _0x35dd70[0x1] + _0x646dc2 | 0x0;
                    _0x35dd70[0x2] = _0x35dd70[0x2] + _0x3c9d94 | 0x0;
                    _0x35dd70[0x3] = _0x35dd70[0x3] + _0x203dda | 0x0;
                  },
                  "_doFinalize": function () {
                    var _0x208924 = this._data;
                    var _0x40f498 = _0x208924.words;
                    var _0x14b0d9 = 0x8 * this._nDataBytes;
                    var _0x344696 = 0x8 * _0x208924.sigBytes;
                    _0x40f498[_0x344696 >>> 0x5] |= 0x80 << 0x18 - _0x344696 % 0x20;
                    var _0xdddccf = _0x5e611f.floor(_0x14b0d9 / 0x100000000);
                    _0x40f498[0xf + (_0x344696 + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0xdddccf << 0x8 | _0xdddccf >>> 0x18) | 0xff00ff00 & (_0xdddccf << 0x18 | _0xdddccf >>> 0x8);
                    _0x40f498[0xe + (_0x344696 + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x14b0d9 << 0x8 | _0x14b0d9 >>> 0x18) | 0xff00ff00 & (_0x14b0d9 << 0x18 | _0x14b0d9 >>> 0x8);
                    _0x208924.sigBytes = 0x4 * (_0x40f498.length + 0x1);
                    this._process();
                    var _0x5acc04 = this._hash;
                    var _0x54dc57 = _0x5acc04.words;
                    for (var _0x4f0778 = 0x0; _0x4f0778 < 0x4; _0x4f0778++) {
                      var _0x2913db = _0x54dc57[_0x4f0778];
                      _0x54dc57[_0x4f0778] = 0xff00ff & (_0x2913db << 0x8 | _0x2913db >>> 0x18) | 0xff00ff00 & (_0x2913db << 0x18 | _0x2913db >>> 0x8);
                    }
                    return _0x5acc04;
                  },
                  "clone": function () {
                    var _0x449976 = _0x116204.clone.call(this);
                    _0x449976._hash = this._hash.clone();
                    return _0x449976;
                  }
                });
                function _0x29089c(_0x22d848, _0xcca878, _0x3a5564, _0x21ed63, _0x4165eb, _0x2955b9, _0x5eafdd) {
                  var _0x214dd8 = _0x22d848 + (_0xcca878 & _0x3a5564 | ~_0xcca878 & _0x21ed63) + _0x4165eb + _0x5eafdd;
                  return (_0x214dd8 << _0x2955b9 | _0x214dd8 >>> 0x20 - _0x2955b9) + _0xcca878;
                }
                function _0x2961c3(_0x4bb867, _0x492354, _0x5ee3f9, _0x2b9450, _0x5671c3, _0x10ff66, _0x492b32) {
                  var _0xca1bac = _0x4bb867 + (_0x492354 & _0x2b9450 | _0x5ee3f9 & ~_0x2b9450) + _0x5671c3 + _0x492b32;
                  return (_0xca1bac << _0x10ff66 | _0xca1bac >>> 0x20 - _0x10ff66) + _0x492354;
                }
                function _0x1186bf(_0x25149f, _0x160c08, _0xedbfe2, _0x1e28c9, _0x32d8ce, _0x40f304, _0x166eef) {
                  var _0x138963 = _0x25149f + (_0x160c08 ^ _0xedbfe2 ^ _0x1e28c9) + _0x32d8ce + _0x166eef;
                  return (_0x138963 << _0x40f304 | _0x138963 >>> 0x20 - _0x40f304) + _0x160c08;
                }
                function _0x287bc5(_0x598400, _0x4df47c, _0x562853, _0x585f83, _0x54ded6, _0x1489bf, _0x217c51) {
                  var _0x49ae49 = _0x598400 + (_0x562853 ^ (_0x4df47c | ~_0x585f83)) + _0x54ded6 + _0x217c51;
                  return (_0x49ae49 << _0x1489bf | _0x49ae49 >>> 0x20 - _0x1489bf) + _0x4df47c;
                }
                _0x1ee274.MD5 = _0x116204._createHelper(_0x1a0575);
                _0x1ee274.HmacMD5 = _0x116204._createHmacHelper(_0x1a0575);
              })(Math);
              _0xd8c3af.exports = _0x1ee274.MD5;
            },
            0xc07: function (_0x2aa3cf, _0x1e42e2, _0x49755c) {
              var _0x55ea29;
              _0x55ea29 = _0x49755c(0x1d06);
              _0x49755c(0x1c28);
              _0x55ea29.mode.CFB = function () {
                var _0x55bd5d = _0x55ea29.lib.BlockCipherMode.extend();
                function _0x456ba5(_0x58ca8a, _0x1712fd, _0x9c265e, _0x44cb3c) {
                  var _0x4acdf9;
                  var _0x30898a = this._iv;
                  if (_0x30898a) {
                    _0x4acdf9 = _0x30898a.slice(0x0);
                    this._iv = undefined;
                  } else {
                    _0x4acdf9 = this._prevBlock;
                  }
                  _0x44cb3c.encryptBlock(_0x4acdf9, 0x0);
                  for (var _0x2664db = 0x0; _0x2664db < _0x9c265e; _0x2664db++) {
                    _0x58ca8a[_0x1712fd + _0x2664db] ^= _0x4acdf9[_0x2664db];
                  }
                }
                _0x55bd5d.Encryptor = _0x55bd5d.extend({
                  "processBlock": function (_0x1ac358, _0x3ed022) {
                    var _0x57885a = this._cipher;
                    var _0x5f4e40 = _0x57885a.blockSize;
                    _0x456ba5.call(this, _0x1ac358, _0x3ed022, _0x5f4e40, _0x57885a);
                    this._prevBlock = _0x1ac358.slice(_0x3ed022, _0x3ed022 + _0x5f4e40);
                  }
                });
                _0x55bd5d.Decryptor = _0x55bd5d.extend({
                  "processBlock": function (_0x43b3bf, _0x4d6da7) {
                    var _0x5d2014 = this._cipher;
                    var _0x4a1572 = _0x5d2014.blockSize;
                    var _0x126505 = _0x43b3bf.slice(_0x4d6da7, _0x4d6da7 + _0x4a1572);
                    _0x456ba5.call(this, _0x43b3bf, _0x4d6da7, _0x4a1572, _0x5d2014);
                    this._prevBlock = _0x126505;
                  }
                });
                return _0x55bd5d;
              }();
              _0x2aa3cf.exports = _0x55ea29.mode.CFB;
            },
            0x1516: function (_0x2d6f23, _0x5ef765, _0xba45de) {
              var _0x1a124e;
              _0x1a124e = _0xba45de(0x1d06);
              _0xba45de(0x1c28);
              _0x1a124e.mode.CTRGladman = function () {
                var _0x178604 = _0x1a124e.lib.BlockCipherMode.extend();
                function _0x197f78(_0x206096) {
                  if (0xff == (_0x206096 >> 0x18 & 0xff)) {
                    var _0x14766b = _0x206096 >> 0x10 & 0xff;
                    var _0x1ecd75 = _0x206096 >> 0x8 & 0xff;
                    var _0x51719c = 0xff & _0x206096;
                    if (0xff === _0x14766b) {
                      _0x14766b = 0x0;
                      if (0xff === _0x1ecd75) {
                        _0x1ecd75 = 0x0;
                        if (0xff === _0x51719c) {
                          _0x51719c = 0x0;
                        } else {
                          ++_0x51719c;
                        }
                      } else {
                        ++_0x1ecd75;
                      }
                    } else {
                      ++_0x14766b;
                    }
                    _0x206096 = 0x0;
                    _0x206096 += _0x14766b << 0x10;
                    _0x206096 += _0x1ecd75 << 0x8;
                    _0x206096 += _0x51719c;
                  } else {
                    _0x206096 += 16777216;
                  }
                  return _0x206096;
                }
                var _0x2c1ae9 = _0x178604.Encryptor = _0x178604.extend({
                  "processBlock": function (_0x48982f, _0x56800c) {
                    var _0x3b8c28 = this._cipher;
                    var _0x9cd7d2 = _0x3b8c28.blockSize;
                    var _0x5d45da = this._iv;
                    var _0x1d7018 = this._counter;
                    if (_0x5d45da) {
                      _0x1d7018 = this._counter = _0x5d45da.slice(0x0);
                      this._iv = undefined;
                    }
                    (function (_0x1dc461) {
                      if (0x0 === (_0x1dc461[0x0] = _0x197f78(_0x1dc461[0x0]))) {
                        _0x1dc461[0x1] = _0x197f78(_0x1dc461[0x1]);
                      }
                    })(_0x1d7018);
                    var _0x3de110 = _0x1d7018.slice(0x0);
                    _0x3b8c28.encryptBlock(_0x3de110, 0x0);
                    for (var _0x4007ac = 0x0; _0x4007ac < _0x9cd7d2; _0x4007ac++) {
                      _0x48982f[_0x56800c + _0x4007ac] ^= _0x3de110[_0x4007ac];
                    }
                  }
                });
                _0x178604.Decryptor = _0x2c1ae9;
                return _0x178604;
              }();
              _0x2d6f23.exports = _0x1a124e.mode.CTRGladman;
            },
            0x14aa: function (_0x4713d4, _0xb7a3f0, _0x55e6ce) {
              var _0x4654d1;
              var _0xc68f33;
              var _0x1673c1;
              _0x1673c1 = _0x55e6ce(0x1d06);
              _0x55e6ce(0x1c28);
              _0xc68f33 = (_0x4654d1 = _0x1673c1.lib.BlockCipherMode.extend()).Encryptor = _0x4654d1.extend({
                "processBlock": function (_0x42f6f8, _0x58a477) {
                  var _0xb419ff = this._cipher;
                  var _0x17a3d1 = _0xb419ff.blockSize;
                  var _0x4d799c = this._iv;
                  var _0x5f059a = this._counter;
                  if (_0x4d799c) {
                    _0x5f059a = this._counter = _0x4d799c.slice(0x0);
                    this._iv = undefined;
                  }
                  var _0x2b9b53 = _0x5f059a.slice(0x0);
                  _0xb419ff.encryptBlock(_0x2b9b53, 0x0);
                  _0x5f059a[_0x17a3d1 - 0x1] = _0x5f059a[_0x17a3d1 - 0x1] + 0x1 | 0x0;
                  for (var _0x498adb = 0x0; _0x498adb < _0x17a3d1; _0x498adb++) {
                    _0x42f6f8[_0x58a477 + _0x498adb] ^= _0x2b9b53[_0x498adb];
                  }
                }
              });
              _0x4654d1.Decryptor = _0xc68f33;
              _0x1673c1.mode.CTR = _0x4654d1;
              _0x4713d4.exports = _0x1673c1.mode.CTR;
            },
            0x82c: function (_0x1c1050, _0x1d5bdb, _0x298ae1) {
              var _0x191d8c;
              var _0x3cbb9f;
              _0x3cbb9f = _0x298ae1(0x1d06);
              _0x298ae1(0x1c28);
              (_0x191d8c = _0x3cbb9f.lib.BlockCipherMode.extend()).Encryptor = _0x191d8c.extend({
                "processBlock": function (_0x18cdae, _0x5c37e3) {
                  this._cipher.encryptBlock(_0x18cdae, _0x5c37e3);
                }
              });
              _0x191d8c.Decryptor = _0x191d8c.extend({
                "processBlock": function (_0x4a8fcb, _0x1c4631) {
                  this._cipher.decryptBlock(_0x4a8fcb, _0x1c4631);
                }
              });
              _0x3cbb9f.mode.ECB = _0x191d8c;
              _0x1c1050.exports = _0x3cbb9f.mode.ECB;
            },
            0x1e92: function (_0x1f50bf, _0x3543b7, _0x2ef4f4) {
              var _0x4b60f5;
              var _0x510ef2;
              var _0xf5baa7;
              _0xf5baa7 = _0x2ef4f4(0x1d06);
              _0x2ef4f4(0x1c28);
              _0x510ef2 = (_0x4b60f5 = _0xf5baa7.lib.BlockCipherMode.extend()).Encryptor = _0x4b60f5.extend({
                "processBlock": function (_0x53ba20, _0x31632c) {
                  var _0x3ed30e = this._cipher;
                  var _0x5ad6d0 = _0x3ed30e.blockSize;
                  var _0x586df3 = this._iv;
                  var _0x1ff08b = this._keystream;
                  if (_0x586df3) {
                    _0x1ff08b = this._keystream = _0x586df3.slice(0x0);
                    this._iv = undefined;
                  }
                  _0x3ed30e.encryptBlock(_0x1ff08b, 0x0);
                  for (var _0x28d729 = 0x0; _0x28d729 < _0x5ad6d0; _0x28d729++) {
                    _0x53ba20[_0x31632c + _0x28d729] ^= _0x1ff08b[_0x28d729];
                  }
                }
              });
              _0x4b60f5.Decryptor = _0x510ef2;
              _0xf5baa7.mode.OFB = _0x4b60f5;
              _0x1f50bf.exports = _0xf5baa7.mode.OFB;
            },
            0x12ee: function (_0x1d36ec, _0x5ed305, _0x188127) {
              var _0x1bbd04;
              _0x1bbd04 = _0x188127(0x1d06);
              _0x188127(0x1c28);
              _0x1bbd04.pad.AnsiX923 = {
                "pad": function (_0x37c91b, _0x43f935) {
                  var _0x59f208 = _0x37c91b.sigBytes;
                  var _0x1ffdf6 = 0x4 * _0x43f935;
                  var _0x55f85c = _0x1ffdf6 - _0x59f208 % _0x1ffdf6;
                  var _0x283131 = _0x59f208 + _0x55f85c - 0x1;
                  _0x37c91b.clamp();
                  _0x37c91b.words[_0x283131 >>> 0x2] |= _0x55f85c << 0x18 - _0x283131 % 0x4 * 0x8;
                  _0x37c91b.sigBytes += _0x55f85c;
                },
                "unpad": function (_0xc0dbb8) {
                  var _0x476254 = 0xff & _0xc0dbb8.words[_0xc0dbb8.sigBytes - 0x1 >>> 0x2];
                  _0xc0dbb8.sigBytes -= _0x476254;
                }
              };
              _0x1d36ec.exports = _0x1bbd04.pad.Ansix923;
            },
            0x1243: function (_0x4837d6, _0x53aeda, _0x52d2a9) {
              var _0x2efc4f;
              _0x2efc4f = _0x52d2a9(0x1d06);
              _0x52d2a9(0x1c28);
              _0x2efc4f.pad.Iso10126 = {
                "pad": function (_0x3865a6, _0x46813d) {
                  var _0x2b36d6 = 0x4 * _0x46813d;
                  var _0x28f643 = _0x2b36d6 - _0x3865a6.sigBytes % _0x2b36d6;
                  _0x3865a6.concat(_0x2efc4f.lib.WordArray.random(_0x28f643 - 0x1)).concat(_0x2efc4f.lib.WordArray.create([_0x28f643 << 0x18], 0x1));
                },
                "unpad": function (_0x5a936a) {
                  var _0x28d58d = 0xff & _0x5a936a.words[_0x5a936a.sigBytes - 0x1 >>> 0x2];
                  _0x5a936a.sigBytes -= _0x28d58d;
                }
              };
              _0x4837d6.exports = _0x2efc4f.pad.Iso10126;
            },
            0x1a7f: function (_0x1c7b65, _0x532696, _0x4ea58b) {
              var _0x21f344;
              _0x21f344 = _0x4ea58b(0x1d06);
              _0x4ea58b(0x1c28);
              _0x21f344.pad.Iso97971 = {
                "pad": function (_0x36d177, _0x132aeb) {
                  _0x36d177.concat(_0x21f344.lib.WordArray.create([0x80000000], 0x1));
                  _0x21f344.pad.ZeroPadding.pad(_0x36d177, _0x132aeb);
                },
                "unpad": function (_0x79716d) {
                  _0x21f344.pad.ZeroPadding.unpad(_0x79716d);
                  _0x79716d.sigBytes--;
                }
              };
              _0x1c7b65.exports = _0x21f344.pad.Iso97971;
            },
            0x16c9: function (_0x51e557, _0x453c87, _0x1efdba) {
              var _0x45a161;
              _0x45a161 = _0x1efdba(0x1d06);
              _0x1efdba(0x1c28);
              _0x45a161.pad.NoPadding = {
                "pad": function () {},
                "unpad": function () {}
              };
              _0x51e557.exports = _0x45a161.pad.NoPadding;
            },
            0x230d: function (_0x3fe6db, _0x368872, _0x3ed15b) {
              var _0x25d26f;
              _0x25d26f = _0x3ed15b(0x1d06);
              _0x3ed15b(0x1c28);
              _0x25d26f.pad.ZeroPadding = {
                "pad": function (_0x47ae75, _0x167ee2) {
                  var _0x4b7d22 = 0x4 * _0x167ee2;
                  _0x47ae75.clamp();
                  _0x47ae75.sigBytes += _0x4b7d22 - (_0x47ae75.sigBytes % _0x4b7d22 || _0x4b7d22);
                },
                "unpad": function (_0x4657c3) {
                  var _0x57defb = _0x4657c3.words;
                  var _0x564763 = _0x4657c3.sigBytes - 0x1;
                  for (_0x564763 = _0x4657c3.sigBytes - 0x1; _0x564763 >= 0x0; _0x564763--) {
                    if (_0x57defb[_0x564763 >>> 0x2] >>> 0x18 - _0x564763 % 0x4 * 0x8 & 0xff) {
                      _0x4657c3.sigBytes = _0x564763 + 0x1;
                      break;
                    }
                  }
                }
              };
              _0x3fe6db.exports = _0x25d26f.pad.ZeroPadding;
            },
            0x1553: function (_0x420e9e, _0x314eb0, _0x335d2a) {
              var _0x11aadb;
              var _0x20f3ca;
              var _0x288b0a;
              var _0x4d4de3;
              var _0xefd697;
              var _0x2e214b;
              var _0x461cc8;
              var _0x2106b9;
              _0x2106b9 = _0x335d2a(0x1d06);
              _0x335d2a(0x25bc);
              _0x335d2a(0x596);
              _0x20f3ca = (_0x11aadb = _0x2106b9.lib).Base;
              _0x288b0a = _0x11aadb.WordArray;
              _0xefd697 = (_0x4d4de3 = _0x2106b9.algo).SHA1;
              _0x2e214b = _0x4d4de3.HMAC;
              _0x461cc8 = _0x4d4de3.PBKDF2 = _0x20f3ca.extend({
                "cfg": _0x20f3ca.extend({
                  "keySize": 0x4,
                  "hasher": _0xefd697,
                  "iterations": 0x1
                }),
                "init": function (_0x5d2c5d) {
                  this.cfg = this.cfg.extend(_0x5d2c5d);
                },
                "compute": function (_0x3c066b, _0x2da355) {
                  var _0x445ab1 = this.cfg;
                  var _0x8bab38 = _0x2e214b.create(_0x445ab1.hasher, _0x3c066b);
                  var _0xd05785 = _0x288b0a.create();
                  var _0x5806b7 = _0x288b0a.create([0x1]);
                  var _0x24cd56 = _0xd05785.words;
                  var _0x199f15 = _0x5806b7.words;
                  var _0x34b1c0 = _0x445ab1.keySize;
                  for (var _0x214262 = _0x445ab1.iterations; _0x24cd56.length < _0x34b1c0;) {
                    var _0x355aa1 = _0x8bab38.update(_0x2da355).finalize(_0x5806b7);
                    _0x8bab38.reset();
                    var _0x5b2285 = _0x355aa1.words;
                    var _0x1fe352 = _0x5b2285.length;
                    var _0x5082b6 = _0x355aa1;
                    for (var _0xa0a456 = 0x1; _0xa0a456 < _0x214262; _0xa0a456++) {
                      _0x5082b6 = _0x8bab38.finalize(_0x5082b6);
                      _0x8bab38.reset();
                      var _0x1aa7bf = _0x5082b6.words;
                      for (var _0x48f16e = 0x0; _0x48f16e < _0x1fe352; _0x48f16e++) {
                        _0x5b2285[_0x48f16e] ^= _0x1aa7bf[_0x48f16e];
                      }
                    }
                    _0xd05785.concat(_0x355aa1);
                    _0x199f15[0x0]++;
                  }
                  _0xd05785.sigBytes = 0x4 * _0x34b1c0;
                  return _0xd05785;
                }
              });
              _0x2106b9.PBKDF2 = function (_0x3355f6, _0xd31119, _0x2304fe) {
                return _0x461cc8.create(_0x2304fe).compute(_0x3355f6, _0xd31119);
              };
              _0x420e9e.exports = _0x2106b9.PBKDF2;
            },
            0x17f4: function (_0x1390ce, _0x5b52a4, _0x5ad668) {
              var _0x1271ab;
              _0x1271ab = _0x5ad668(0x1d06);
              _0x5ad668(0x1623);
              _0x5ad668(0xc4a);
              _0x5ad668(0x1f74);
              _0x5ad668(0x1c28);
              (function () {
                var _0x3b7075 = _0x1271ab.lib.StreamCipher;
                var _0x5117bc = _0x1271ab.algo;
                var _0x200c7d = [];
                var _0x1bc2a7 = [];
                var _0x19f775 = [];
                var _0x23e505 = _0x5117bc.RabbitLegacy = _0x3b7075.extend({
                  "_doReset": function () {
                    var _0x78b048 = this._key.words;
                    var _0x308412 = this.cfg.iv;
                    var _0x4d83d8 = this._X = [_0x78b048[0x0], _0x78b048[0x3] << 0x10 | _0x78b048[0x2] >>> 0x10, _0x78b048[0x1], _0x78b048[0x0] << 0x10 | _0x78b048[0x3] >>> 0x10, _0x78b048[0x2], _0x78b048[0x1] << 0x10 | _0x78b048[0x0] >>> 0x10, _0x78b048[0x3], _0x78b048[0x2] << 0x10 | _0x78b048[0x1] >>> 0x10];
                    var _0x253d3e = this._C = [_0x78b048[0x2] << 0x10 | _0x78b048[0x2] >>> 0x10, 0xffff0000 & _0x78b048[0x0] | 0xffff & _0x78b048[0x1], _0x78b048[0x3] << 0x10 | _0x78b048[0x3] >>> 0x10, 0xffff0000 & _0x78b048[0x1] | 0xffff & _0x78b048[0x2], _0x78b048[0x0] << 0x10 | _0x78b048[0x0] >>> 0x10, 0xffff0000 & _0x78b048[0x2] | 0xffff & _0x78b048[0x3], _0x78b048[0x1] << 0x10 | _0x78b048[0x1] >>> 0x10, 0xffff0000 & _0x78b048[0x3] | 0xffff & _0x78b048[0x0]];
                    this._b = 0x0;
                    for (var _0x3d7fa1 = 0x0; _0x3d7fa1 < 0x4; _0x3d7fa1++) {
                      _0x4efee6.call(this);
                    }
                    for (_0x3d7fa1 = 0x0; _0x3d7fa1 < 0x8; _0x3d7fa1++) {
                      _0x253d3e[_0x3d7fa1] ^= _0x4d83d8[_0x3d7fa1 + 0x4 & 0x7];
                    }
                    if (_0x308412) {
                      var _0x51b238 = _0x308412.words;
                      var _0x1c7a2b = _0x51b238[0x0];
                      var _0x4ddc65 = _0x51b238[0x1];
                      var _0x6cac80 = 0xff00ff & (_0x1c7a2b << 0x8 | _0x1c7a2b >>> 0x18) | 0xff00ff00 & (_0x1c7a2b << 0x18 | _0x1c7a2b >>> 0x8);
                      var _0x36d14f = 0xff00ff & (_0x4ddc65 << 0x8 | _0x4ddc65 >>> 0x18) | 0xff00ff00 & (_0x4ddc65 << 0x18 | _0x4ddc65 >>> 0x8);
                      var _0x5e8b1f = _0x6cac80 >>> 0x10 | 0xffff0000 & _0x36d14f;
                      var _0x4281ce = _0x36d14f << 0x10 | 0xffff & _0x6cac80;
                      _0x253d3e[0x0] ^= _0x6cac80;
                      _0x253d3e[0x1] ^= _0x5e8b1f;
                      _0x253d3e[0x2] ^= _0x36d14f;
                      _0x253d3e[0x3] ^= _0x4281ce;
                      _0x253d3e[0x4] ^= _0x6cac80;
                      _0x253d3e[0x5] ^= _0x5e8b1f;
                      _0x253d3e[0x6] ^= _0x36d14f;
                      _0x253d3e[0x7] ^= _0x4281ce;
                      for (_0x3d7fa1 = 0x0; _0x3d7fa1 < 0x4; _0x3d7fa1++) {
                        _0x4efee6.call(this);
                      }
                    }
                  },
                  "_doProcessBlock": function (_0x478971, _0x40b000) {
                    var _0x5e892c = this._X;
                    _0x4efee6.call(this);
                    _0x200c7d[0x0] = _0x5e892c[0x0] ^ _0x5e892c[0x5] >>> 0x10 ^ _0x5e892c[0x3] << 0x10;
                    _0x200c7d[0x1] = _0x5e892c[0x2] ^ _0x5e892c[0x7] >>> 0x10 ^ _0x5e892c[0x5] << 0x10;
                    _0x200c7d[0x2] = _0x5e892c[0x4] ^ _0x5e892c[0x1] >>> 0x10 ^ _0x5e892c[0x7] << 0x10;
                    _0x200c7d[0x3] = _0x5e892c[0x6] ^ _0x5e892c[0x3] >>> 0x10 ^ _0x5e892c[0x1] << 0x10;
                    for (var _0x3b3580 = 0x0; _0x3b3580 < 0x4; _0x3b3580++) {
                      _0x200c7d[_0x3b3580] = 0xff00ff & (_0x200c7d[_0x3b3580] << 0x8 | _0x200c7d[_0x3b3580] >>> 0x18) | 0xff00ff00 & (_0x200c7d[_0x3b3580] << 0x18 | _0x200c7d[_0x3b3580] >>> 0x8);
                      _0x478971[_0x40b000 + _0x3b3580] ^= _0x200c7d[_0x3b3580];
                    }
                  },
                  "blockSize": 0x4,
                  "ivSize": 0x2
                });
                function _0x4efee6() {
                  var _0x3fe8d7 = this._X;
                  var _0x481970 = this._C;
                  for (var _0x1171ca = 0x0; _0x1171ca < 0x8; _0x1171ca++) {
                    _0x1bc2a7[_0x1171ca] = _0x481970[_0x1171ca];
                  }
                  _0x481970[0x0] = _0x481970[0x0] + 0x4d34d34d + this._b | 0x0;
                  _0x481970[0x1] = _0x481970[0x1] + 0xd34d34d3 + (_0x481970[0x0] >>> 0x0 < _0x1bc2a7[0x0] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x2] = _0x481970[0x2] + 0x34d34d34 + (_0x481970[0x1] >>> 0x0 < _0x1bc2a7[0x1] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x3] = _0x481970[0x3] + 0x4d34d34d + (_0x481970[0x2] >>> 0x0 < _0x1bc2a7[0x2] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x4] = _0x481970[0x4] + 0xd34d34d3 + (_0x481970[0x3] >>> 0x0 < _0x1bc2a7[0x3] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x5] = _0x481970[0x5] + 0x34d34d34 + (_0x481970[0x4] >>> 0x0 < _0x1bc2a7[0x4] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x6] = _0x481970[0x6] + 0x4d34d34d + (_0x481970[0x5] >>> 0x0 < _0x1bc2a7[0x5] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x481970[0x7] = _0x481970[0x7] + 0xd34d34d3 + (_0x481970[0x6] >>> 0x0 < _0x1bc2a7[0x6] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  this._b = _0x481970[0x7] >>> 0x0 < _0x1bc2a7[0x7] >>> 0x0 ? 0x1 : 0x0;
                  for (_0x1171ca = 0x0; _0x1171ca < 0x8; _0x1171ca++) {
                    var _0x58eabc = _0x3fe8d7[_0x1171ca] + _0x481970[_0x1171ca];
                    var _0x2cb503 = 0xffff & _0x58eabc;
                    var _0x3810f2 = _0x58eabc >>> 0x10;
                    var _0x585420 = ((_0x2cb503 * _0x2cb503 >>> 0x11) + _0x2cb503 * _0x3810f2 >>> 0xf) + _0x3810f2 * _0x3810f2;
                    var _0x3a45c3 = ((0xffff0000 & _0x58eabc) * _0x58eabc | 0x0) + ((0xffff & _0x58eabc) * _0x58eabc | 0x0);
                    _0x19f775[_0x1171ca] = _0x585420 ^ _0x3a45c3;
                  }
                  _0x3fe8d7[0x0] = _0x19f775[0x0] + (_0x19f775[0x7] << 0x10 | _0x19f775[0x7] >>> 0x10) + (_0x19f775[0x6] << 0x10 | _0x19f775[0x6] >>> 0x10) | 0x0;
                  _0x3fe8d7[0x1] = _0x19f775[0x1] + (_0x19f775[0x0] << 0x8 | _0x19f775[0x0] >>> 0x18) + _0x19f775[0x7] | 0x0;
                  _0x3fe8d7[0x2] = _0x19f775[0x2] + (_0x19f775[0x1] << 0x10 | _0x19f775[0x1] >>> 0x10) + (_0x19f775[0x0] << 0x10 | _0x19f775[0x0] >>> 0x10) | 0x0;
                  _0x3fe8d7[0x3] = _0x19f775[0x3] + (_0x19f775[0x2] << 0x8 | _0x19f775[0x2] >>> 0x18) + _0x19f775[0x1] | 0x0;
                  _0x3fe8d7[0x4] = _0x19f775[0x4] + (_0x19f775[0x3] << 0x10 | _0x19f775[0x3] >>> 0x10) + (_0x19f775[0x2] << 0x10 | _0x19f775[0x2] >>> 0x10) | 0x0;
                  _0x3fe8d7[0x5] = _0x19f775[0x5] + (_0x19f775[0x4] << 0x8 | _0x19f775[0x4] >>> 0x18) + _0x19f775[0x3] | 0x0;
                  _0x3fe8d7[0x6] = _0x19f775[0x6] + (_0x19f775[0x5] << 0x10 | _0x19f775[0x5] >>> 0x10) + (_0x19f775[0x4] << 0x10 | _0x19f775[0x4] >>> 0x10) | 0x0;
                  _0x3fe8d7[0x7] = _0x19f775[0x7] + (_0x19f775[0x6] << 0x8 | _0x19f775[0x6] >>> 0x18) + _0x19f775[0x5] | 0x0;
                }
                _0x1271ab.RabbitLegacy = _0x3b7075._createHelper(_0x23e505);
              })();
              _0x1390ce.exports = _0x1271ab.RabbitLegacy;
            },
            0x9d3: function (_0x37aa90, _0x54de1e, _0x24dc07) {
              var _0x564ae9;
              _0x564ae9 = _0x24dc07(0x1d06);
              _0x24dc07(0x1623);
              _0x24dc07(0xc4a);
              _0x24dc07(0x1f74);
              _0x24dc07(0x1c28);
              (function () {
                var _0x50ccc5 = _0x564ae9.lib.StreamCipher;
                var _0x465190 = _0x564ae9.algo;
                var _0x2d9cf0 = [];
                var _0x4bc401 = [];
                var _0x19a4a8 = [];
                var _0x456391 = _0x465190.Rabbit = _0x50ccc5.extend({
                  "_doReset": function () {
                    var _0x1d85bd = this._key.words;
                    var _0xbac3b4 = this.cfg.iv;
                    for (var _0x460052 = 0x0; _0x460052 < 0x4; _0x460052++) {
                      _0x1d85bd[_0x460052] = 0xff00ff & (_0x1d85bd[_0x460052] << 0x8 | _0x1d85bd[_0x460052] >>> 0x18) | 0xff00ff00 & (_0x1d85bd[_0x460052] << 0x18 | _0x1d85bd[_0x460052] >>> 0x8);
                    }
                    var _0x18d100 = this._X = [_0x1d85bd[0x0], _0x1d85bd[0x3] << 0x10 | _0x1d85bd[0x2] >>> 0x10, _0x1d85bd[0x1], _0x1d85bd[0x0] << 0x10 | _0x1d85bd[0x3] >>> 0x10, _0x1d85bd[0x2], _0x1d85bd[0x1] << 0x10 | _0x1d85bd[0x0] >>> 0x10, _0x1d85bd[0x3], _0x1d85bd[0x2] << 0x10 | _0x1d85bd[0x1] >>> 0x10];
                    var _0x475b85 = this._C = [_0x1d85bd[0x2] << 0x10 | _0x1d85bd[0x2] >>> 0x10, 0xffff0000 & _0x1d85bd[0x0] | 0xffff & _0x1d85bd[0x1], _0x1d85bd[0x3] << 0x10 | _0x1d85bd[0x3] >>> 0x10, 0xffff0000 & _0x1d85bd[0x1] | 0xffff & _0x1d85bd[0x2], _0x1d85bd[0x0] << 0x10 | _0x1d85bd[0x0] >>> 0x10, 0xffff0000 & _0x1d85bd[0x2] | 0xffff & _0x1d85bd[0x3], _0x1d85bd[0x1] << 0x10 | _0x1d85bd[0x1] >>> 0x10, 0xffff0000 & _0x1d85bd[0x3] | 0xffff & _0x1d85bd[0x0]];
                    this._b = 0x0;
                    for (_0x460052 = 0x0; _0x460052 < 0x4; _0x460052++) {
                      _0x10f0d5.call(this);
                    }
                    for (_0x460052 = 0x0; _0x460052 < 0x8; _0x460052++) {
                      _0x475b85[_0x460052] ^= _0x18d100[_0x460052 + 0x4 & 0x7];
                    }
                    if (_0xbac3b4) {
                      var _0x4f3620 = _0xbac3b4.words;
                      var _0x10e57 = _0x4f3620[0x0];
                      var _0x46a18b = _0x4f3620[0x1];
                      var _0x2d0fd8 = 0xff00ff & (_0x10e57 << 0x8 | _0x10e57 >>> 0x18) | 0xff00ff00 & (_0x10e57 << 0x18 | _0x10e57 >>> 0x8);
                      var _0x4857ae = 0xff00ff & (_0x46a18b << 0x8 | _0x46a18b >>> 0x18) | 0xff00ff00 & (_0x46a18b << 0x18 | _0x46a18b >>> 0x8);
                      var _0x2ee909 = _0x2d0fd8 >>> 0x10 | 0xffff0000 & _0x4857ae;
                      var _0x35fb6d = _0x4857ae << 0x10 | 0xffff & _0x2d0fd8;
                      _0x475b85[0x0] ^= _0x2d0fd8;
                      _0x475b85[0x1] ^= _0x2ee909;
                      _0x475b85[0x2] ^= _0x4857ae;
                      _0x475b85[0x3] ^= _0x35fb6d;
                      _0x475b85[0x4] ^= _0x2d0fd8;
                      _0x475b85[0x5] ^= _0x2ee909;
                      _0x475b85[0x6] ^= _0x4857ae;
                      _0x475b85[0x7] ^= _0x35fb6d;
                      for (_0x460052 = 0x0; _0x460052 < 0x4; _0x460052++) {
                        _0x10f0d5.call(this);
                      }
                    }
                  },
                  "_doProcessBlock": function (_0x263063, _0x2bde3a) {
                    var _0xd0fca6 = this._X;
                    _0x10f0d5.call(this);
                    _0x2d9cf0[0x0] = _0xd0fca6[0x0] ^ _0xd0fca6[0x5] >>> 0x10 ^ _0xd0fca6[0x3] << 0x10;
                    _0x2d9cf0[0x1] = _0xd0fca6[0x2] ^ _0xd0fca6[0x7] >>> 0x10 ^ _0xd0fca6[0x5] << 0x10;
                    _0x2d9cf0[0x2] = _0xd0fca6[0x4] ^ _0xd0fca6[0x1] >>> 0x10 ^ _0xd0fca6[0x7] << 0x10;
                    _0x2d9cf0[0x3] = _0xd0fca6[0x6] ^ _0xd0fca6[0x3] >>> 0x10 ^ _0xd0fca6[0x1] << 0x10;
                    for (var _0x488e88 = 0x0; _0x488e88 < 0x4; _0x488e88++) {
                      _0x2d9cf0[_0x488e88] = 0xff00ff & (_0x2d9cf0[_0x488e88] << 0x8 | _0x2d9cf0[_0x488e88] >>> 0x18) | 0xff00ff00 & (_0x2d9cf0[_0x488e88] << 0x18 | _0x2d9cf0[_0x488e88] >>> 0x8);
                      _0x263063[_0x2bde3a + _0x488e88] ^= _0x2d9cf0[_0x488e88];
                    }
                  },
                  "blockSize": 0x4,
                  "ivSize": 0x2
                });
                function _0x10f0d5() {
                  var _0x2e8dff = this._X;
                  var _0x38d13c = this._C;
                  for (var _0x394c03 = 0x0; _0x394c03 < 0x8; _0x394c03++) {
                    _0x4bc401[_0x394c03] = _0x38d13c[_0x394c03];
                  }
                  _0x38d13c[0x0] = _0x38d13c[0x0] + 0x4d34d34d + this._b | 0x0;
                  _0x38d13c[0x1] = _0x38d13c[0x1] + 0xd34d34d3 + (_0x38d13c[0x0] >>> 0x0 < _0x4bc401[0x0] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x2] = _0x38d13c[0x2] + 0x34d34d34 + (_0x38d13c[0x1] >>> 0x0 < _0x4bc401[0x1] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x3] = _0x38d13c[0x3] + 0x4d34d34d + (_0x38d13c[0x2] >>> 0x0 < _0x4bc401[0x2] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x4] = _0x38d13c[0x4] + 0xd34d34d3 + (_0x38d13c[0x3] >>> 0x0 < _0x4bc401[0x3] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x5] = _0x38d13c[0x5] + 0x34d34d34 + (_0x38d13c[0x4] >>> 0x0 < _0x4bc401[0x4] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x6] = _0x38d13c[0x6] + 0x4d34d34d + (_0x38d13c[0x5] >>> 0x0 < _0x4bc401[0x5] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  _0x38d13c[0x7] = _0x38d13c[0x7] + 0xd34d34d3 + (_0x38d13c[0x6] >>> 0x0 < _0x4bc401[0x6] >>> 0x0 ? 0x1 : 0x0) | 0x0;
                  this._b = _0x38d13c[0x7] >>> 0x0 < _0x4bc401[0x7] >>> 0x0 ? 0x1 : 0x0;
                  for (_0x394c03 = 0x0; _0x394c03 < 0x8; _0x394c03++) {
                    var _0x41f237 = _0x2e8dff[_0x394c03] + _0x38d13c[_0x394c03];
                    var _0x3aab3e = 0xffff & _0x41f237;
                    var _0x4f90f6 = _0x41f237 >>> 0x10;
                    var _0x236cf2 = ((_0x3aab3e * _0x3aab3e >>> 0x11) + _0x3aab3e * _0x4f90f6 >>> 0xf) + _0x4f90f6 * _0x4f90f6;
                    var _0x13c809 = ((0xffff0000 & _0x41f237) * _0x41f237 | 0x0) + ((0xffff & _0x41f237) * _0x41f237 | 0x0);
                    _0x19a4a8[_0x394c03] = _0x236cf2 ^ _0x13c809;
                  }
                  _0x2e8dff[0x0] = _0x19a4a8[0x0] + (_0x19a4a8[0x7] << 0x10 | _0x19a4a8[0x7] >>> 0x10) + (_0x19a4a8[0x6] << 0x10 | _0x19a4a8[0x6] >>> 0x10) | 0x0;
                  _0x2e8dff[0x1] = _0x19a4a8[0x1] + (_0x19a4a8[0x0] << 0x8 | _0x19a4a8[0x0] >>> 0x18) + _0x19a4a8[0x7] | 0x0;
                  _0x2e8dff[0x2] = _0x19a4a8[0x2] + (_0x19a4a8[0x1] << 0x10 | _0x19a4a8[0x1] >>> 0x10) + (_0x19a4a8[0x0] << 0x10 | _0x19a4a8[0x0] >>> 0x10) | 0x0;
                  _0x2e8dff[0x3] = _0x19a4a8[0x3] + (_0x19a4a8[0x2] << 0x8 | _0x19a4a8[0x2] >>> 0x18) + _0x19a4a8[0x1] | 0x0;
                  _0x2e8dff[0x4] = _0x19a4a8[0x4] + (_0x19a4a8[0x3] << 0x10 | _0x19a4a8[0x3] >>> 0x10) + (_0x19a4a8[0x2] << 0x10 | _0x19a4a8[0x2] >>> 0x10) | 0x0;
                  _0x2e8dff[0x5] = _0x19a4a8[0x5] + (_0x19a4a8[0x4] << 0x8 | _0x19a4a8[0x4] >>> 0x18) + _0x19a4a8[0x3] | 0x0;
                  _0x2e8dff[0x6] = _0x19a4a8[0x6] + (_0x19a4a8[0x5] << 0x10 | _0x19a4a8[0x5] >>> 0x10) + (_0x19a4a8[0x4] << 0x10 | _0x19a4a8[0x4] >>> 0x10) | 0x0;
                  _0x2e8dff[0x7] = _0x19a4a8[0x7] + (_0x19a4a8[0x6] << 0x8 | _0x19a4a8[0x6] >>> 0x18) + _0x19a4a8[0x5] | 0x0;
                }
                _0x564ae9.Rabbit = _0x50ccc5._createHelper(_0x456391);
              })();
              _0x37aa90.exports = _0x564ae9.Rabbit;
            },
            0x1534: function (_0x213b86, _0x569cb7, _0x5921aa) {
              var _0x56dc3b;
              _0x56dc3b = _0x5921aa(0x1d06);
              _0x5921aa(0x1623);
              _0x5921aa(0xc4a);
              _0x5921aa(0x1f74);
              _0x5921aa(0x1c28);
              (function () {
                var _0x3dc9b2 = _0x56dc3b.lib.StreamCipher;
                var _0x3e6cb5 = _0x56dc3b.algo;
                var _0x1c114e = _0x3e6cb5.RC4 = _0x3dc9b2.extend({
                  "_doReset": function () {
                    var _0x5e2014 = this._key;
                    var _0x3438a2 = _0x5e2014.words;
                    var _0x46fd0f = _0x5e2014.sigBytes;
                    var _0x2c7a90 = this._S = [];
                    for (var _0x402503 = 0x0; _0x402503 < 0x100; _0x402503++) {
                      _0x2c7a90[_0x402503] = _0x402503;
                    }
                    _0x402503 = 0x0;
                    for (var _0x569aad = 0x0; _0x402503 < 0x100; _0x402503++) {
                      var _0x3b77ed = _0x402503 % _0x46fd0f;
                      var _0x46f617 = _0x3438a2[_0x3b77ed >>> 0x2] >>> 0x18 - _0x3b77ed % 0x4 * 0x8 & 0xff;
                      _0x569aad = (_0x569aad + _0x2c7a90[_0x402503] + _0x46f617) % 0x100;
                      var _0x4f7782 = _0x2c7a90[_0x402503];
                      _0x2c7a90[_0x402503] = _0x2c7a90[_0x569aad];
                      _0x2c7a90[_0x569aad] = _0x4f7782;
                    }
                    this._i = this._j = 0x0;
                  },
                  "_doProcessBlock": function (_0x51a642, _0x2bcae4) {
                    _0x51a642[_0x2bcae4] ^= _0x8934a2.call(this);
                  },
                  "keySize": 0x8,
                  "ivSize": 0x0
                });
                function _0x8934a2() {
                  var _0x526261 = this._S;
                  var _0x582536 = this._i;
                  var _0x21aaad = this._j;
                  var _0x2f726d = 0x0;
                  for (var _0x5e1663 = 0x0; _0x5e1663 < 0x4; _0x5e1663++) {
                    _0x21aaad = (_0x21aaad + _0x526261[_0x582536 = (_0x582536 + 0x1) % 0x100]) % 0x100;
                    var _0x583a54 = _0x526261[_0x582536];
                    _0x526261[_0x582536] = _0x526261[_0x21aaad];
                    _0x526261[_0x21aaad] = _0x583a54;
                    _0x2f726d |= _0x526261[(_0x526261[_0x582536] + _0x526261[_0x21aaad]) % 0x100] << 0x18 - 0x8 * _0x5e1663;
                  }
                  this._i = _0x582536;
                  this._j = _0x21aaad;
                  return _0x2f726d;
                }
                _0x56dc3b.RC4 = _0x3dc9b2._createHelper(_0x1c114e);
                var _0x4c1bff = _0x3e6cb5.RC4Drop = _0x1c114e.extend({
                  "cfg": _0x1c114e.cfg.extend({
                    "drop": 0xc0
                  }),
                  "_doReset": function () {
                    _0x1c114e._doReset.call(this);
                    for (var _0x50879c = this.cfg.drop; _0x50879c > 0x0; _0x50879c--) {
                      _0x8934a2.call(this);
                    }
                  }
                });
                _0x56dc3b.RC4Drop = _0x3dc9b2._createHelper(_0x4c1bff);
              })();
              _0x213b86.exports = _0x56dc3b.RC4;
            },
            0x13be: function (_0x4b57d1, _0x3bd93c, _0x541b68) {
              var _0x124f75;
              _0x124f75 = _0x541b68(0x1d06);
              (function (_0x19a9d4) {
                var _0x2fd922 = _0x124f75.lib;
                var _0x57ffc4 = _0x2fd922.WordArray;
                var _0x4793ed = _0x2fd922.Hasher;
                var _0x28195d = _0x124f75.algo;
                var _0x2ba479 = _0x57ffc4.create([0x0, 0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x7, 0x4, 0xd, 0x1, 0xa, 0x6, 0xf, 0x3, 0xc, 0x0, 0x9, 0x5, 0x2, 0xe, 0xb, 0x8, 0x3, 0xa, 0xe, 0x4, 0x9, 0xf, 0x8, 0x1, 0x2, 0x7, 0x0, 0x6, 0xd, 0xb, 0x5, 0xc, 0x1, 0x9, 0xb, 0xa, 0x0, 0x8, 0xc, 0x4, 0xd, 0x3, 0x7, 0xf, 0xe, 0x5, 0x6, 0x2, 0x4, 0x0, 0x5, 0x9, 0x7, 0xc, 0x2, 0xa, 0xe, 0x1, 0x3, 0x8, 0xb, 0x6, 0xf, 0xd]);
                var _0x162bab = _0x57ffc4.create([0x5, 0xe, 0x7, 0x0, 0x9, 0x2, 0xb, 0x4, 0xd, 0x6, 0xf, 0x8, 0x1, 0xa, 0x3, 0xc, 0x6, 0xb, 0x3, 0x7, 0x0, 0xd, 0x5, 0xa, 0xe, 0xf, 0x8, 0xc, 0x4, 0x9, 0x1, 0x2, 0xf, 0x5, 0x1, 0x3, 0x7, 0xe, 0x6, 0x9, 0xb, 0x8, 0xc, 0x2, 0xa, 0x0, 0x4, 0xd, 0x8, 0x6, 0x4, 0x1, 0x3, 0xb, 0xf, 0x0, 0x5, 0xc, 0x2, 0xd, 0x9, 0x7, 0xa, 0xe, 0xc, 0xf, 0xa, 0x4, 0x1, 0x5, 0x8, 0x7, 0x6, 0x2, 0xd, 0xe, 0x0, 0x3, 0x9, 0xb]);
                var _0x43c4c7 = _0x57ffc4.create([0xb, 0xe, 0xf, 0xc, 0x5, 0x8, 0x7, 0x9, 0xb, 0xd, 0xe, 0xf, 0x6, 0x7, 0x9, 0x8, 0x7, 0x6, 0x8, 0xd, 0xb, 0x9, 0x7, 0xf, 0x7, 0xc, 0xf, 0x9, 0xb, 0x7, 0xd, 0xc, 0xb, 0xd, 0x6, 0x7, 0xe, 0x9, 0xd, 0xf, 0xe, 0x8, 0xd, 0x6, 0x5, 0xc, 0x7, 0x5, 0xb, 0xc, 0xe, 0xf, 0xe, 0xf, 0x9, 0x8, 0x9, 0xe, 0x5, 0x6, 0x8, 0x6, 0x5, 0xc, 0x9, 0xf, 0x5, 0xb, 0x6, 0x8, 0xd, 0xc, 0x5, 0xc, 0xd, 0xe, 0xb, 0x8, 0x5, 0x6]);
                var _0x6350c1 = _0x57ffc4.create([0x8, 0x9, 0x9, 0xb, 0xd, 0xf, 0xf, 0x5, 0x7, 0x7, 0x8, 0xb, 0xe, 0xe, 0xc, 0x6, 0x9, 0xd, 0xf, 0x7, 0xc, 0x8, 0x9, 0xb, 0x7, 0x7, 0xc, 0x7, 0x6, 0xf, 0xd, 0xb, 0x9, 0x7, 0xf, 0xb, 0x8, 0x6, 0x6, 0xe, 0xc, 0xd, 0x5, 0xe, 0xd, 0xd, 0x7, 0x5, 0xf, 0x5, 0x8, 0xb, 0xe, 0xe, 0x6, 0xe, 0x6, 0x9, 0xc, 0x9, 0xc, 0x5, 0xf, 0x8, 0x8, 0x5, 0xc, 0x9, 0xc, 0x5, 0xe, 0x6, 0x8, 0xd, 0x6, 0x5, 0xf, 0xd, 0xb, 0xb]);
                var _0x57566d = _0x57ffc4.create([0x0, 0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xa953fd4e]);
                var _0x444f6d = _0x57ffc4.create([0x50a28be6, 0x5c4dd124, 0x6d703ef3, 0x7a6d76e9, 0x0]);
                var _0x542e32 = _0x28195d.RIPEMD160 = _0x4793ed.extend({
                  "_doReset": function () {
                    this._hash = _0x57ffc4.create([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                  },
                  "_doProcessBlock": function (_0x13003f, _0xf7fea0) {
                    for (var _0x104c33 = 0x0; _0x104c33 < 0x10; _0x104c33++) {
                      var _0x27d311 = _0xf7fea0 + _0x104c33;
                      var _0x30a9ac = _0x13003f[_0x27d311];
                      _0x13003f[_0x27d311] = 0xff00ff & (_0x30a9ac << 0x8 | _0x30a9ac >>> 0x18) | 0xff00ff00 & (_0x30a9ac << 0x18 | _0x30a9ac >>> 0x8);
                    }
                    var _0x4db2c9;
                    var _0x4c93b4;
                    var _0xee0f64;
                    var _0xb44b8a;
                    var _0x13c140;
                    var _0x24092b;
                    var _0x666408;
                    var _0x6e5b06;
                    var _0x34307c;
                    var _0x4b883e;
                    var _0x5d68ed;
                    var _0x5b59de = this._hash.words;
                    var _0x1d1448 = _0x57566d.words;
                    var _0x5b5e57 = _0x444f6d.words;
                    var _0x558d63 = _0x2ba479.words;
                    var _0x8a2b5f = _0x162bab.words;
                    var _0x1050d6 = _0x43c4c7.words;
                    var _0x436c90 = _0x6350c1.words;
                    _0x24092b = _0x4db2c9 = _0x5b59de[0x0];
                    _0x666408 = _0x4c93b4 = _0x5b59de[0x1];
                    _0x6e5b06 = _0xee0f64 = _0x5b59de[0x2];
                    _0x34307c = _0xb44b8a = _0x5b59de[0x3];
                    _0x4b883e = _0x13c140 = _0x5b59de[0x4];
                    for (_0x104c33 = 0x0; _0x104c33 < 0x50; _0x104c33 += 0x1) {
                      _0x5d68ed = _0x4db2c9 + _0x13003f[_0xf7fea0 + _0x558d63[_0x104c33]] | 0x0;
                      _0x5d68ed += _0x104c33 < 0x10 ? (_0x4c93b4 ^ _0xee0f64 ^ _0xb44b8a) + _0x1d1448[0x0] : _0x104c33 < 0x20 ? (_0x4c93b4 & _0xee0f64 | ~_0x4c93b4 & _0xb44b8a) + _0x1d1448[0x1] : _0x104c33 < 0x30 ? ((_0x4c93b4 | ~_0xee0f64) ^ _0xb44b8a) + _0x1d1448[0x2] : _0x104c33 < 0x40 ? (_0x4c93b4 & _0xb44b8a | _0xee0f64 & ~_0xb44b8a) + _0x1d1448[0x3] : (_0x4c93b4 ^ (_0xee0f64 | ~_0xb44b8a)) + _0x1d1448[0x4];
                      _0x5d68ed = (_0x5d68ed = (_0x5d68ed |= 0x0) << _0x1050d6[_0x104c33] | (_0x5d68ed |= 0x0) >>> 0x20 - _0x1050d6[_0x104c33]) + _0x13c140 | 0x0;
                      _0x4db2c9 = _0x13c140;
                      _0x13c140 = _0xb44b8a;
                      _0xb44b8a = _0xee0f64 << 0xa | _0xee0f64 >>> 22;
                      _0xee0f64 = _0x4c93b4;
                      _0x4c93b4 = _0x5d68ed;
                      _0x5d68ed = _0x24092b + _0x13003f[_0xf7fea0 + _0x8a2b5f[_0x104c33]] | 0x0;
                      _0x5d68ed += _0x104c33 < 0x10 ? (_0x666408 ^ (_0x6e5b06 | ~_0x34307c)) + _0x5b5e57[0x0] : _0x104c33 < 0x20 ? (_0x666408 & _0x34307c | _0x6e5b06 & ~_0x34307c) + _0x5b5e57[0x1] : _0x104c33 < 0x30 ? ((_0x666408 | ~_0x6e5b06) ^ _0x34307c) + _0x5b5e57[0x2] : _0x104c33 < 0x40 ? (_0x666408 & _0x6e5b06 | ~_0x666408 & _0x34307c) + _0x5b5e57[0x3] : (_0x666408 ^ _0x6e5b06 ^ _0x34307c) + _0x5b5e57[0x4];
                      _0x5d68ed = (_0x5d68ed = (_0x5d68ed |= 0x0) << _0x436c90[_0x104c33] | (_0x5d68ed |= 0x0) >>> 0x20 - _0x436c90[_0x104c33]) + _0x4b883e | 0x0;
                      _0x24092b = _0x4b883e;
                      _0x4b883e = _0x34307c;
                      _0x34307c = _0x6e5b06 << 0xa | _0x6e5b06 >>> 22;
                      _0x6e5b06 = _0x666408;
                      _0x666408 = _0x5d68ed;
                    }
                    _0x5d68ed = _0x5b59de[0x1] + _0xee0f64 + _0x34307c | 0x0;
                    _0x5b59de[0x1] = _0x5b59de[0x2] + _0xb44b8a + _0x4b883e | 0x0;
                    _0x5b59de[0x2] = _0x5b59de[0x3] + _0x13c140 + _0x24092b | 0x0;
                    _0x5b59de[0x3] = _0x5b59de[0x4] + _0x4db2c9 + _0x666408 | 0x0;
                    _0x5b59de[0x4] = _0x5b59de[0x0] + _0x4c93b4 + _0x6e5b06 | 0x0;
                    _0x5b59de[0x0] = _0x5d68ed;
                  },
                  "_doFinalize": function () {
                    var _0xafcad2 = this._data;
                    var _0x3f7569 = _0xafcad2.words;
                    var _0x3635b5 = 0x8 * this._nDataBytes;
                    var _0x77ddb8 = 0x8 * _0xafcad2.sigBytes;
                    _0x3f7569[_0x77ddb8 >>> 0x5] |= 0x80 << 0x18 - _0x77ddb8 % 0x20;
                    _0x3f7569[0xe + (_0x77ddb8 + 0x40 >>> 0x9 << 0x4)] = 0xff00ff & (_0x3635b5 << 0x8 | _0x3635b5 >>> 0x18) | 0xff00ff00 & (_0x3635b5 << 0x18 | _0x3635b5 >>> 0x8);
                    _0xafcad2.sigBytes = 0x4 * (_0x3f7569.length + 0x1);
                    this._process();
                    var _0x2e6bc1 = this._hash;
                    var _0x547e2d = _0x2e6bc1.words;
                    for (var _0x3c615f = 0x0; _0x3c615f < 0x5; _0x3c615f++) {
                      var _0x3de3b3 = _0x547e2d[_0x3c615f];
                      _0x547e2d[_0x3c615f] = 0xff00ff & (_0x3de3b3 << 0x8 | _0x3de3b3 >>> 0x18) | 0xff00ff00 & (_0x3de3b3 << 0x18 | _0x3de3b3 >>> 0x8);
                    }
                    return _0x2e6bc1;
                  },
                  "clone": function () {
                    var _0x5705e2 = _0x4793ed.clone.call(this);
                    _0x5705e2._hash = this._hash.clone();
                    return _0x5705e2;
                  }
                });
                function _0x10da55(_0x2efb8f, _0x348d43, _0x345b23) {
                  return _0x2efb8f ^ _0x348d43 ^ _0x345b23;
                }
                function _0xb5461e(_0x3e4800, _0x230cc6, _0x217308) {
                  return _0x3e4800 & _0x230cc6 | ~_0x3e4800 & _0x217308;
                }
                function _0x5bc787(_0x47bfa0, _0x4929c8, _0x2da6f8) {
                  return (_0x47bfa0 | ~_0x4929c8) ^ _0x2da6f8;
                }
                function _0x103c05(_0x3e586c, _0x203497, _0x2f77dc) {
                  return _0x3e586c & _0x2f77dc | _0x203497 & ~_0x2f77dc;
                }
                function _0x98f33a(_0x1b4682, _0x26ad95, _0x1c7267) {
                  return _0x1b4682 ^ (_0x26ad95 | ~_0x1c7267);
                }
                function _0x2e661b(_0x49d0f9, _0x12dee0) {
                  return _0x49d0f9 << _0x12dee0 | _0x49d0f9 >>> 0x20 - _0x12dee0;
                }
                _0x124f75.RIPEMD160 = _0x4793ed._createHelper(_0x542e32);
                _0x124f75.HmacRIPEMD160 = _0x4793ed._createHmacHelper(_0x542e32);
              })(Math);
              _0x4b57d1.exports = _0x124f75.RIPEMD160;
            },
            0x25bc: function (_0x30d391, _0x2f229f, _0xf58abb) {
              var _0x3e95b1;
              var _0x2d040b;
              var _0x3fa868;
              var _0x44cf97;
              var _0x2fa6da;
              var _0x4040f1;
              var _0x24fb84;
              var _0x543f6e;
              _0x2d040b = (_0x3e95b1 = _0x543f6e = _0xf58abb(0x1d06)).lib;
              _0x3fa868 = _0x2d040b.WordArray;
              _0x44cf97 = _0x2d040b.Hasher;
              _0x2fa6da = _0x3e95b1.algo;
              _0x4040f1 = [];
              _0x24fb84 = _0x2fa6da.SHA1 = _0x44cf97.extend({
                "_doReset": function () {
                  this._hash = new _0x3fa868.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0]);
                },
                "_doProcessBlock": function (_0x447b5c, _0x2cda1e) {
                  var _0x295170 = this._hash.words;
                  var _0x4e3d63 = _0x295170[0x0];
                  var _0x3dfc95 = _0x295170[0x1];
                  var _0x3acab6 = _0x295170[0x2];
                  var _0x4dd043 = _0x295170[0x3];
                  var _0x368c8e = _0x295170[0x4];
                  for (var _0x34b8fb = 0x0; _0x34b8fb < 0x50; _0x34b8fb++) {
                    if (_0x34b8fb < 0x10) {
                      _0x4040f1[_0x34b8fb] = 0x0 | _0x447b5c[_0x2cda1e + _0x34b8fb];
                    } else {
                      var _0x445302 = _0x4040f1[_0x34b8fb - 0x3] ^ _0x4040f1[_0x34b8fb - 0x8] ^ _0x4040f1[_0x34b8fb - 0xe] ^ _0x4040f1[_0x34b8fb - 0x10];
                      _0x4040f1[_0x34b8fb] = _0x445302 << 0x1 | _0x445302 >>> 0x1f;
                    }
                    var _0x11f369 = (_0x4e3d63 << 0x5 | _0x4e3d63 >>> 0x1b) + _0x368c8e + _0x4040f1[_0x34b8fb];
                    _0x11f369 += _0x34b8fb < 0x14 ? 0x5a827999 + (_0x3dfc95 & _0x3acab6 | ~_0x3dfc95 & _0x4dd043) : _0x34b8fb < 0x28 ? 0x6ed9eba1 + (_0x3dfc95 ^ _0x3acab6 ^ _0x4dd043) : _0x34b8fb < 0x3c ? (_0x3dfc95 & _0x3acab6 | _0x3dfc95 & _0x4dd043 | _0x3acab6 & _0x4dd043) - 0x70e44324 : (_0x3dfc95 ^ _0x3acab6 ^ _0x4dd043) - 0x359d3e2a;
                    _0x368c8e = _0x4dd043;
                    _0x4dd043 = _0x3acab6;
                    _0x3acab6 = _0x3dfc95 << 0x1e | _0x3dfc95 >>> 0x2;
                    _0x3dfc95 = _0x4e3d63;
                    _0x4e3d63 = _0x11f369;
                  }
                  _0x295170[0x0] = _0x295170[0x0] + _0x4e3d63 | 0x0;
                  _0x295170[0x1] = _0x295170[0x1] + _0x3dfc95 | 0x0;
                  _0x295170[0x2] = _0x295170[0x2] + _0x3acab6 | 0x0;
                  _0x295170[0x3] = _0x295170[0x3] + _0x4dd043 | 0x0;
                  _0x295170[0x4] = _0x295170[0x4] + _0x368c8e | 0x0;
                },
                "_doFinalize": function () {
                  var _0x282df5 = this._data;
                  var _0x39e728 = _0x282df5.words;
                  var _0x22dc13 = 0x8 * this._nDataBytes;
                  var _0x3fadaf = 0x8 * _0x282df5.sigBytes;
                  _0x39e728[_0x3fadaf >>> 0x5] |= 0x80 << 0x18 - _0x3fadaf % 0x20;
                  _0x39e728[0xe + (_0x3fadaf + 0x40 >>> 0x9 << 0x4)] = Math.floor(_0x22dc13 / 0x100000000);
                  _0x39e728[0xf + (_0x3fadaf + 0x40 >>> 0x9 << 0x4)] = _0x22dc13;
                  _0x282df5.sigBytes = 0x4 * _0x39e728.length;
                  this._process();
                  return this._hash;
                },
                "clone": function () {
                  var _0x1d532b = _0x44cf97.clone.call(this);
                  _0x1d532b._hash = this._hash.clone();
                  return _0x1d532b;
                }
              });
              _0x3e95b1.SHA1 = _0x44cf97._createHelper(_0x24fb84);
              _0x3e95b1.HmacSHA1 = _0x44cf97._createHmacHelper(_0x24fb84);
              _0x30d391.exports = _0x543f6e.SHA1;
            },
            0x749: function (_0x237c12, _0x14a137, _0x3ceaaa) {
              var _0x487e26;
              var _0x2f2e3d;
              var _0x126e4e;
              var _0x41b2e4;
              var _0x5d1d0b;
              _0x5d1d0b = _0x3ceaaa(0x1d06);
              _0x3ceaaa(0xb79);
              _0x487e26 = _0x5d1d0b.lib.WordArray;
              _0x2f2e3d = _0x5d1d0b.algo;
              _0x126e4e = _0x2f2e3d.SHA256;
              _0x41b2e4 = _0x2f2e3d.SHA224 = _0x126e4e.extend({
                "_doReset": function () {
                  this._hash = new _0x487e26.init([0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4]);
                },
                "_doFinalize": function () {
                  var _0x40d573 = _0x126e4e._doFinalize.call(this);
                  _0x40d573.sigBytes -= 0x4;
                  return _0x40d573;
                }
              });
              _0x5d1d0b.SHA224 = _0x126e4e._createHelper(_0x41b2e4);
              _0x5d1d0b.HmacSHA224 = _0x126e4e._createHmacHelper(_0x41b2e4);
              _0x237c12.exports = _0x5d1d0b.SHA224;
            },
            0xb79: function (_0x5ad95c, _0xe202b5, _0x1df8e5) {
              var _0x2d424b;
              _0x2d424b = _0x1df8e5(0x1d06);
              (function (_0x4892fb) {
                var _0x5b7afb = _0x2d424b.lib;
                var _0x5cdb4d = _0x5b7afb.WordArray;
                var _0x559be9 = _0x5b7afb.Hasher;
                var _0x277a30 = _0x2d424b.algo;
                var _0x1f0f1c = [];
                var _0x52cf9c = [];
                !function () {
                  function _0x387de9(_0x4d0d03) {
                    var _0x45ac2c = _0x4892fb.sqrt(_0x4d0d03);
                    for (var _0x78386f = 0x2; _0x78386f <= _0x45ac2c; _0x78386f++) {
                      if (!(_0x4d0d03 % _0x78386f)) {
                        return false;
                      }
                    }
                    return true;
                  }
                  function _0x3655b4(_0x1d4f09) {
                    return 0x100000000 * (_0x1d4f09 - (0x0 | _0x1d4f09)) | 0x0;
                  }
                  var _0x29e8a7 = 0x2;
                  for (var _0x3e5ee3 = 0x0; _0x3e5ee3 < 0x40;) {
                    if (_0x387de9(_0x29e8a7)) {
                      if (_0x3e5ee3 < 0x8) {
                        _0x1f0f1c[_0x3e5ee3] = 0x100000000 * (_0x4892fb.pow(_0x29e8a7, 0.5) - (0x0 | _0x4892fb.pow(_0x29e8a7, 0.5))) | 0x0;
                      }
                      _0x52cf9c[_0x3e5ee3] = 0x100000000 * (_0x4892fb.pow(_0x29e8a7, 0.3333333333333333) - (0x0 | _0x4892fb.pow(_0x29e8a7, 0.3333333333333333))) | 0x0;
                      _0x3e5ee3++;
                    }
                    _0x29e8a7++;
                  }
                }();
                var _0x1460e9 = [];
                var _0x18c548 = _0x277a30.SHA256 = _0x559be9.extend({
                  "_doReset": function () {
                    this._hash = new _0x5cdb4d.init(_0x1f0f1c.slice(0x0));
                  },
                  "_doProcessBlock": function (_0x11a98a, _0x5a1778) {
                    var _0x4fde49 = this._hash.words;
                    var _0x25e0a3 = _0x4fde49[0x0];
                    var _0xe8aee6 = _0x4fde49[0x1];
                    var _0x3db07c = _0x4fde49[0x2];
                    var _0x4e3af1 = _0x4fde49[0x3];
                    var _0x1a9912 = _0x4fde49[0x4];
                    var _0x3fc213 = _0x4fde49[0x5];
                    var _0x9c5179 = _0x4fde49[0x6];
                    var _0x100df5 = _0x4fde49[0x7];
                    for (var _0x3f8450 = 0x0; _0x3f8450 < 0x40; _0x3f8450++) {
                      if (_0x3f8450 < 0x10) {
                        _0x1460e9[_0x3f8450] = 0x0 | _0x11a98a[_0x5a1778 + _0x3f8450];
                      } else {
                        var _0x37e184 = _0x1460e9[_0x3f8450 - 0xf];
                        var _0x285e87 = (_0x37e184 << 0x19 | _0x37e184 >>> 0x7) ^ (_0x37e184 << 0xe | _0x37e184 >>> 0x12) ^ _0x37e184 >>> 0x3;
                        var _0x4d5446 = _0x1460e9[_0x3f8450 - 0x2];
                        var _0xee3a28 = (_0x4d5446 << 0xf | _0x4d5446 >>> 0x11) ^ (_0x4d5446 << 0xd | _0x4d5446 >>> 0x13) ^ _0x4d5446 >>> 0xa;
                        _0x1460e9[_0x3f8450] = _0x285e87 + _0x1460e9[_0x3f8450 - 0x7] + _0xee3a28 + _0x1460e9[_0x3f8450 - 0x10];
                      }
                      var _0x44316a = _0x25e0a3 & _0xe8aee6 ^ _0x25e0a3 & _0x3db07c ^ _0xe8aee6 & _0x3db07c;
                      var _0x1c693e = (_0x25e0a3 << 0x1e | _0x25e0a3 >>> 0x2) ^ (_0x25e0a3 << 0x13 | _0x25e0a3 >>> 0xd) ^ (_0x25e0a3 << 0xa | _0x25e0a3 >>> 0x16);
                      var _0xaa7c8c = _0x100df5 + ((_0x1a9912 << 0x1a | _0x1a9912 >>> 0x6) ^ (_0x1a9912 << 0x15 | _0x1a9912 >>> 0xb) ^ (_0x1a9912 << 0x7 | _0x1a9912 >>> 0x19)) + (_0x1a9912 & _0x3fc213 ^ ~_0x1a9912 & _0x9c5179) + _0x52cf9c[_0x3f8450] + _0x1460e9[_0x3f8450];
                      _0x100df5 = _0x9c5179;
                      _0x9c5179 = _0x3fc213;
                      _0x3fc213 = _0x1a9912;
                      _0x1a9912 = _0x4e3af1 + _0xaa7c8c | 0x0;
                      _0x4e3af1 = _0x3db07c;
                      _0x3db07c = _0xe8aee6;
                      _0xe8aee6 = _0x25e0a3;
                      _0x25e0a3 = _0xaa7c8c + (_0x1c693e + _0x44316a) | 0x0;
                    }
                    _0x4fde49[0x0] = _0x4fde49[0x0] + _0x25e0a3 | 0x0;
                    _0x4fde49[0x1] = _0x4fde49[0x1] + _0xe8aee6 | 0x0;
                    _0x4fde49[0x2] = _0x4fde49[0x2] + _0x3db07c | 0x0;
                    _0x4fde49[0x3] = _0x4fde49[0x3] + _0x4e3af1 | 0x0;
                    _0x4fde49[0x4] = _0x4fde49[0x4] + _0x1a9912 | 0x0;
                    _0x4fde49[0x5] = _0x4fde49[0x5] + _0x3fc213 | 0x0;
                    _0x4fde49[0x6] = _0x4fde49[0x6] + _0x9c5179 | 0x0;
                    _0x4fde49[0x7] = _0x4fde49[0x7] + _0x100df5 | 0x0;
                  },
                  "_doFinalize": function () {
                    var _0x51cbe8 = this._data;
                    var _0x15e687 = _0x51cbe8.words;
                    var _0xe4a464 = 0x8 * this._nDataBytes;
                    var _0x19d79b = 0x8 * _0x51cbe8.sigBytes;
                    _0x15e687[_0x19d79b >>> 0x5] |= 0x80 << 0x18 - _0x19d79b % 0x20;
                    _0x15e687[0xe + (_0x19d79b + 0x40 >>> 0x9 << 0x4)] = _0x4892fb.floor(_0xe4a464 / 0x100000000);
                    _0x15e687[0xf + (_0x19d79b + 0x40 >>> 0x9 << 0x4)] = _0xe4a464;
                    _0x51cbe8.sigBytes = 0x4 * _0x15e687.length;
                    this._process();
                    return this._hash;
                  },
                  "clone": function () {
                    var _0x889752 = _0x559be9.clone.call(this);
                    _0x889752._hash = this._hash.clone();
                    return _0x889752;
                  }
                });
                _0x2d424b.SHA256 = _0x559be9._createHelper(_0x18c548);
                _0x2d424b.HmacSHA256 = _0x559be9._createHmacHelper(_0x18c548);
              })(Math);
              _0x5ad95c.exports = _0x2d424b.SHA256;
            },
            0x1045: function (_0x37f0ec, _0x27fb37, _0x50da5e) {
              var _0x47eef3;
              _0x47eef3 = _0x50da5e(0x1d06);
              _0x50da5e(0xa30);
              (function (_0x49eb53) {
                var _0x3d85ae = _0x47eef3.lib;
                var _0x586a4c = _0x3d85ae.WordArray;
                var _0x3d59fa = _0x3d85ae.Hasher;
                var _0x53a9b4 = _0x47eef3.x64.Word;
                var _0x52781d = _0x47eef3.algo;
                var _0x508854 = [];
                var _0x2b0d70 = [];
                var _0x322755 = [];
                !function () {
                  var _0x7b3b1c = 0x1;
                  var _0xaed27b = 0x0;
                  for (var _0xe2a5cd = 0x0; _0xe2a5cd < 0x18; _0xe2a5cd++) {
                    _0x508854[_0x7b3b1c + 0x5 * _0xaed27b] = (_0xe2a5cd + 0x1) * (_0xe2a5cd + 0x2) / 0x2 % 0x40;
                    var _0x4e7562 = (0x2 * _0x7b3b1c + 0x3 * _0xaed27b) % 0x5;
                    _0x7b3b1c = _0xaed27b % 0x5;
                    _0xaed27b = _0x4e7562;
                  }
                  for (_0x7b3b1c = 0x0; _0x7b3b1c < 0x5; _0x7b3b1c++) {
                    for (_0xaed27b = 0x0; _0xaed27b < 0x5; _0xaed27b++) {
                      _0x2b0d70[_0x7b3b1c + 0x5 * _0xaed27b] = _0xaed27b + (0x2 * _0x7b3b1c + 0x3 * _0xaed27b) % 0x5 * 0x5;
                    }
                  }
                  var _0x5a7cfb = 0x1;
                  for (var _0x26d72f = 0x0; _0x26d72f < 0x18; _0x26d72f++) {
                    var _0x533337 = 0x0;
                    var _0x4a6f1e = 0x0;
                    for (var _0x129825 = 0x0; _0x129825 < 0x7; _0x129825++) {
                      if (0x1 & _0x5a7cfb) {
                        var _0x49dfcf = (0x1 << _0x129825) - 0x1;
                        if (_0x49dfcf < 0x20) {
                          _0x4a6f1e ^= 0x1 << _0x49dfcf;
                        } else {
                          _0x533337 ^= 0x1 << _0x49dfcf - 0x20;
                        }
                      }
                      if (0x80 & _0x5a7cfb) {
                        _0x5a7cfb = _0x5a7cfb << 0x1 ^ 0x71;
                      } else {
                        _0x5a7cfb <<= 0x1;
                      }
                    }
                    _0x322755[_0x26d72f] = _0x53a9b4.create(_0x533337, _0x4a6f1e);
                  }
                }();
                var _0x3ae67f = [];
                !function () {
                  for (var _0x46aa9b = 0x0; _0x46aa9b < 0x19; _0x46aa9b++) {
                    _0x3ae67f[_0x46aa9b] = _0x53a9b4.create();
                  }
                }();
                var _0x3c8f17 = _0x52781d.SHA3 = _0x3d59fa.extend({
                  "cfg": _0x3d59fa.cfg.extend({
                    "outputLength": 0x200
                  }),
                  "_doReset": function () {
                    var _0x173657 = this._state = [];
                    for (var _0x31c39b = 0x0; _0x31c39b < 0x19; _0x31c39b++) {
                      _0x173657[_0x31c39b] = new _0x53a9b4.init();
                    }
                    this.blockSize = (0x640 - 0x2 * this.cfg.outputLength) / 0x20;
                  },
                  "_doProcessBlock": function (_0x59cd18, _0x50b157) {
                    var _0x70663e = this._state;
                    var _0x456fa8 = this.blockSize / 0x2;
                    for (var _0x5e2f80 = 0x0; _0x5e2f80 < _0x456fa8; _0x5e2f80++) {
                      var _0xe06f21 = _0x59cd18[_0x50b157 + 0x2 * _0x5e2f80];
                      var _0x3e866e = _0x59cd18[_0x50b157 + 0x2 * _0x5e2f80 + 0x1];
                      _0xe06f21 = 0xff00ff & (_0xe06f21 << 0x8 | _0xe06f21 >>> 0x18) | 0xff00ff00 & (_0xe06f21 << 0x18 | _0xe06f21 >>> 0x8);
                      _0x3e866e = 0xff00ff & (_0x3e866e << 0x8 | _0x3e866e >>> 0x18) | 0xff00ff00 & (_0x3e866e << 0x18 | _0x3e866e >>> 0x8);
                      (_0x12970c = _0x70663e[_0x5e2f80]).high ^= _0x3e866e;
                      _0x12970c.low ^= _0xe06f21;
                    }
                    for (var _0x1326a2 = 0x0; _0x1326a2 < 0x18; _0x1326a2++) {
                      for (var _0x4d1faf = 0x0; _0x4d1faf < 0x5; _0x4d1faf++) {
                        var _0x325d07 = 0x0;
                        var _0x1a48b3 = 0x0;
                        for (var _0x3218b0 = 0x0; _0x3218b0 < 0x5; _0x3218b0++) {
                          _0x325d07 ^= (_0x12970c = _0x70663e[_0x4d1faf + 0x5 * _0x3218b0]).high;
                          _0x1a48b3 ^= _0x12970c.low;
                        }
                        var _0x1a967d = _0x3ae67f[_0x4d1faf];
                        _0x1a967d.high = _0x325d07;
                        _0x1a967d.low = _0x1a48b3;
                      }
                      for (_0x4d1faf = 0x0; _0x4d1faf < 0x5; _0x4d1faf++) {
                        var _0x161248 = _0x3ae67f[(_0x4d1faf + 0x4) % 0x5];
                        var _0x236244 = _0x3ae67f[(_0x4d1faf + 0x1) % 0x5];
                        var _0x48c76e = _0x236244.high;
                        var _0x57c8fb = _0x236244.low;
                        _0x325d07 = _0x161248.high ^ (_0x48c76e << 0x1 | _0x57c8fb >>> 0x1f);
                        _0x1a48b3 = _0x161248.low ^ (_0x57c8fb << 0x1 | _0x48c76e >>> 0x1f);
                        for (_0x3218b0 = 0x0; _0x3218b0 < 0x5; _0x3218b0++) {
                          (_0x12970c = _0x70663e[_0x4d1faf + 0x5 * _0x3218b0]).high ^= _0x325d07;
                          _0x12970c.low ^= _0x1a48b3;
                        }
                      }
                      for (var _0x3641d7 = 0x1; _0x3641d7 < 0x19; _0x3641d7++) {
                        var _0x415d00 = (_0x12970c = _0x70663e[_0x3641d7]).high;
                        var _0x387d3a = _0x12970c.low;
                        var _0x2c89c3 = _0x508854[_0x3641d7];
                        if (_0x2c89c3 < 0x20) {
                          _0x325d07 = _0x415d00 << _0x2c89c3 | _0x387d3a >>> 0x20 - _0x2c89c3;
                          _0x1a48b3 = _0x387d3a << _0x2c89c3 | _0x415d00 >>> 0x20 - _0x2c89c3;
                        } else {
                          _0x325d07 = _0x387d3a << _0x2c89c3 - 0x20 | _0x415d00 >>> 0x40 - _0x2c89c3;
                          _0x1a48b3 = _0x415d00 << _0x2c89c3 - 0x20 | _0x387d3a >>> 0x40 - _0x2c89c3;
                        }
                        var _0x19155e = _0x3ae67f[_0x2b0d70[_0x3641d7]];
                        _0x19155e.high = _0x325d07;
                        _0x19155e.low = _0x1a48b3;
                      }
                      var _0x2b6072 = _0x3ae67f[0x0];
                      var _0x22e53a = _0x70663e[0x0];
                      _0x2b6072.high = _0x22e53a.high;
                      _0x2b6072.low = _0x22e53a.low;
                      for (_0x4d1faf = 0x0; _0x4d1faf < 0x5; _0x4d1faf++) {
                        for (_0x3218b0 = 0x0; _0x3218b0 < 0x5; _0x3218b0++) {
                          var _0x12970c = _0x70663e[_0x3641d7 = _0x4d1faf + 0x5 * _0x3218b0];
                          var _0x17eb66 = _0x3ae67f[_0x3641d7];
                          var _0x5f3235 = _0x3ae67f[(_0x4d1faf + 0x1) % 0x5 + 0x5 * _0x3218b0];
                          var _0x3a980a = _0x3ae67f[(_0x4d1faf + 0x2) % 0x5 + 0x5 * _0x3218b0];
                          _0x12970c.high = _0x17eb66.high ^ ~_0x5f3235.high & _0x3a980a.high;
                          _0x12970c.low = _0x17eb66.low ^ ~_0x5f3235.low & _0x3a980a.low;
                        }
                      }
                      _0x12970c = _0x70663e[0x0];
                      var _0x1812f1 = _0x322755[_0x1326a2];
                      _0x12970c.high ^= _0x1812f1.high;
                      _0x12970c.low ^= _0x1812f1.low;
                    }
                  },
                  "_doFinalize": function () {
                    var _0x346352 = this._data;
                    var _0xac7b9 = _0x346352.words;
                    this._nDataBytes;
                    var _0x4753ac = 0x8 * _0x346352.sigBytes;
                    var _0x3bb9e3 = 0x20 * this.blockSize;
                    _0xac7b9[_0x4753ac >>> 0x5] |= 0x1 << 0x18 - _0x4753ac % 0x20;
                    _0xac7b9[(_0x49eb53.ceil((_0x4753ac + 0x1) / _0x3bb9e3) * _0x3bb9e3 >>> 0x5) - 0x1] |= 0x80;
                    _0x346352.sigBytes = 0x4 * _0xac7b9.length;
                    this._process();
                    var _0x10896b = this._state;
                    var _0x3e0081 = this.cfg.outputLength / 0x8;
                    var _0x268218 = _0x3e0081 / 0x8;
                    var _0x5d425a = [];
                    for (var _0xa2aeab = 0x0; _0xa2aeab < _0x268218; _0xa2aeab++) {
                      var _0x2057f4 = _0x10896b[_0xa2aeab];
                      var _0x561d2b = _0x2057f4.high;
                      var _0x8d3a96 = _0x2057f4.low;
                      _0x561d2b = 0xff00ff & (_0x561d2b << 0x8 | _0x561d2b >>> 0x18) | 0xff00ff00 & (_0x561d2b << 0x18 | _0x561d2b >>> 0x8);
                      _0x8d3a96 = 0xff00ff & (_0x8d3a96 << 0x8 | _0x8d3a96 >>> 0x18) | 0xff00ff00 & (_0x8d3a96 << 0x18 | _0x8d3a96 >>> 0x8);
                      _0x5d425a.push(_0x8d3a96);
                      _0x5d425a.push(_0x561d2b);
                    }
                    return new _0x586a4c.init(_0x5d425a, _0x3e0081);
                  },
                  "clone": function () {
                    var _0x193003 = _0x3d59fa.clone.call(this);
                    var _0x427b6d = _0x193003._state = this._state.slice(0x0);
                    for (var _0x579948 = 0x0; _0x579948 < 0x19; _0x579948++) {
                      _0x427b6d[_0x579948] = _0x427b6d[_0x579948].clone();
                    }
                    return _0x193003;
                  }
                });
                _0x47eef3.SHA3 = _0x3d59fa._createHelper(_0x3c8f17);
                _0x47eef3.HmacSHA3 = _0x3d59fa._createHmacHelper(_0x3c8f17);
              })(Math);
              _0x37f0ec.exports = _0x47eef3.SHA3;
            },
            0x1bf7: function (_0x27fcd7, _0x1928a8, _0x260782) {
              var _0x4c7ca6;
              var _0x52bce6;
              var _0x59d22f;
              var _0x6755e1;
              var _0x35d3fe;
              var _0x36f971;
              var _0x395aab;
              _0x395aab = _0x260782(0x1d06);
              _0x260782(0xa30);
              _0x260782(0x164b);
              _0x4c7ca6 = _0x395aab.x64;
              _0x52bce6 = _0x4c7ca6.Word;
              _0x59d22f = _0x4c7ca6.WordArray;
              _0x6755e1 = _0x395aab.algo;
              _0x35d3fe = _0x6755e1.SHA512;
              _0x36f971 = _0x6755e1.SHA384 = _0x35d3fe.extend({
                "_doReset": function () {
                  this._hash = new _0x59d22f.init([new _0x52bce6.init(0xcbbb9d5d, 0xc1059ed8), new _0x52bce6.init(0x629a292a, 0x367cd507), new _0x52bce6.init(0x9159015a, 0x3070dd17), new _0x52bce6.init(0x152fecd8, 0xf70e5939), new _0x52bce6.init(0x67332667, 0xffc00b31), new _0x52bce6.init(0x8eb44a87, 0x68581511), new _0x52bce6.init(0xdb0c2e0d, 0x64f98fa7), new _0x52bce6.init(0x47b5481d, 0xbefa4fa4)]);
                },
                "_doFinalize": function () {
                  var _0x48e04a = _0x35d3fe._doFinalize.call(this);
                  _0x48e04a.sigBytes -= 0x10;
                  return _0x48e04a;
                }
              });
              _0x395aab.SHA384 = _0x35d3fe._createHelper(_0x36f971);
              _0x395aab.HmacSHA384 = _0x35d3fe._createHmacHelper(_0x36f971);
              _0x27fcd7.exports = _0x395aab.SHA384;
            },
            0x164b: function (_0x4b9476, _0x5cfa03, _0x248bb4) {
              var _0x1ff5c3;
              _0x1ff5c3 = _0x248bb4(0x1d06);
              _0x248bb4(0xa30);
              (function () {
                var _0x4c3100 = _0x1ff5c3.lib.Hasher;
                var _0x5c4e2c = _0x1ff5c3.x64;
                var _0x40d769 = _0x5c4e2c.Word;
                var _0x84190f = _0x5c4e2c.WordArray;
                var _0x47487f = _0x1ff5c3.algo;
                function _0x1948c1() {
                  return _0x40d769.create.apply(_0x40d769, arguments);
                }
                var _0x1f1c7b = [_0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments), _0x40d769.create.apply(_0x40d769, arguments)];
                var _0x59c4d4 = [];
                !function () {
                  for (var _0x56bb57 = 0x0; _0x56bb57 < 0x50; _0x56bb57++) {
                    _0x59c4d4[_0x56bb57] = _0x40d769.create.apply(_0x40d769, arguments);
                  }
                }();
                var _0x373938 = _0x47487f.SHA512 = _0x4c3100.extend({
                  "_doReset": function () {
                    this._hash = new _0x84190f.init([new _0x40d769.init(0x6a09e667, 0xf3bcc908), new _0x40d769.init(0xbb67ae85, 0x84caa73b), new _0x40d769.init(0x3c6ef372, 0xfe94f82b), new _0x40d769.init(0xa54ff53a, 0x5f1d36f1), new _0x40d769.init(0x510e527f, 0xade682d1), new _0x40d769.init(0x9b05688c, 0x2b3e6c1f), new _0x40d769.init(0x1f83d9ab, 0xfb41bd6b), new _0x40d769.init(0x5be0cd19, 0x137e2179)]);
                  },
                  "_doProcessBlock": function (_0x3b6096, _0x2c9fb1) {
                    var _0x35ec7e = this._hash.words;
                    var _0x4c564f = _0x35ec7e[0x0];
                    var _0x1969a1 = _0x35ec7e[0x1];
                    var _0x11169e = _0x35ec7e[0x2];
                    var _0x8a1a9 = _0x35ec7e[0x3];
                    var _0x349ba6 = _0x35ec7e[0x4];
                    var _0x33e924 = _0x35ec7e[0x5];
                    var _0x1ab42e = _0x35ec7e[0x6];
                    var _0x3694f9 = _0x35ec7e[0x7];
                    var _0x32f9bc = _0x4c564f.high;
                    var _0x1e18a6 = _0x4c564f.low;
                    var _0x5b0de8 = _0x1969a1.high;
                    var _0x5a4578 = _0x1969a1.low;
                    var _0x10ad39 = _0x11169e.high;
                    var _0x5dfcc1 = _0x11169e.low;
                    var _0x54f580 = _0x8a1a9.high;
                    var _0x460ca6 = _0x8a1a9.low;
                    var _0x25478b = _0x349ba6.high;
                    var _0x5f362a = _0x349ba6.low;
                    var _0x4bc1ee = _0x33e924.high;
                    var _0x56f522 = _0x33e924.low;
                    var _0x12930b = _0x1ab42e.high;
                    var _0xd293a9 = _0x1ab42e.low;
                    var _0x2b7f35 = _0x3694f9.high;
                    var _0x5f40a8 = _0x3694f9.low;
                    var _0x119b12 = _0x32f9bc;
                    var _0x2b6338 = _0x1e18a6;
                    var _0x368364 = _0x5b0de8;
                    var _0x14867f = _0x5a4578;
                    var _0x4650ae = _0x10ad39;
                    var _0x3aeffa = _0x5dfcc1;
                    var _0x2e4b64 = _0x54f580;
                    var _0x7bbd7 = _0x460ca6;
                    var _0x210670 = _0x25478b;
                    var _0x124537 = _0x5f362a;
                    var _0x1371e8 = _0x4bc1ee;
                    var _0x4c717c = _0x56f522;
                    var _0x4f4cfa = _0x12930b;
                    var _0x4cb98e = _0xd293a9;
                    var _0x1325f4 = _0x2b7f35;
                    var _0x5db78c = _0x5f40a8;
                    for (var _0x310791 = 0x0; _0x310791 < 0x50; _0x310791++) {
                      var _0x11890e;
                      var _0x351d52;
                      var _0x6dfc64 = _0x59c4d4[_0x310791];
                      if (_0x310791 < 0x10) {
                        _0x351d52 = _0x6dfc64.high = 0x0 | _0x3b6096[_0x2c9fb1 + 0x2 * _0x310791];
                        _0x11890e = _0x6dfc64.low = 0x0 | _0x3b6096[_0x2c9fb1 + 0x2 * _0x310791 + 0x1];
                      } else {
                        var _0x3c2106 = _0x59c4d4[_0x310791 - 0xf];
                        var _0x3e4af7 = _0x3c2106.high;
                        var _0x149b39 = _0x3c2106.low;
                        var _0x40a598 = (_0x3e4af7 >>> 0x1 | _0x149b39 << 0x1f) ^ (_0x3e4af7 >>> 0x8 | _0x149b39 << 0x18) ^ _0x3e4af7 >>> 0x7;
                        var _0x1d0293 = (_0x149b39 >>> 0x1 | _0x3e4af7 << 0x1f) ^ (_0x149b39 >>> 0x8 | _0x3e4af7 << 0x18) ^ (_0x149b39 >>> 0x7 | _0x3e4af7 << 0x19);
                        var _0x26a3cf = _0x59c4d4[_0x310791 - 0x2];
                        var _0x2fecea = _0x26a3cf.high;
                        var _0x37cc6c = _0x26a3cf.low;
                        var _0xfbe596 = (_0x2fecea >>> 0x13 | _0x37cc6c << 0xd) ^ (_0x2fecea << 0x3 | _0x37cc6c >>> 0x1d) ^ _0x2fecea >>> 0x6;
                        var _0xdea6a8 = (_0x37cc6c >>> 0x13 | _0x2fecea << 0xd) ^ (_0x37cc6c << 0x3 | _0x2fecea >>> 0x1d) ^ (_0x37cc6c >>> 0x6 | _0x2fecea << 0x1a);
                        var _0x37aed9 = _0x59c4d4[_0x310791 - 0x7];
                        var _0x5560d1 = _0x37aed9.high;
                        var _0x480e12 = _0x37aed9.low;
                        var _0x3a833d = _0x59c4d4[_0x310791 - 0x10];
                        var _0x604b93 = _0x3a833d.high;
                        var _0x130ad6 = _0x3a833d.low;
                        _0x351d52 = (_0x351d52 = (_0x351d52 = _0x40a598 + _0x5560d1 + ((_0x11890e = _0x1d0293 + _0x480e12) >>> 0x0 < _0x1d0293 >>> 0x0 ? 0x1 : 0x0)) + _0xfbe596 + ((_0x11890e += _0xdea6a8) >>> 0x0 < _0xdea6a8 >>> 0x0 ? 0x1 : 0x0)) + _0x604b93 + ((_0x11890e += _0x130ad6) >>> 0x0 < _0x130ad6 >>> 0x0 ? 0x1 : 0x0);
                        _0x6dfc64.high = _0x351d52;
                        _0x6dfc64.low = _0x11890e;
                      }
                      var _0x42aa92;
                      var _0x1fda9b = _0x210670 & _0x1371e8 ^ ~_0x210670 & _0x4f4cfa;
                      var _0x32246b = _0x124537 & _0x4c717c ^ ~_0x124537 & _0x4cb98e;
                      var _0x9693ef = _0x119b12 & _0x368364 ^ _0x119b12 & _0x4650ae ^ _0x368364 & _0x4650ae;
                      var _0x402b73 = _0x2b6338 & _0x14867f ^ _0x2b6338 & _0x3aeffa ^ _0x14867f & _0x3aeffa;
                      var _0x3c38ab = (_0x119b12 >>> 0x1c | _0x2b6338 << 0x4) ^ (_0x119b12 << 0x1e | _0x2b6338 >>> 0x2) ^ (_0x119b12 << 0x19 | _0x2b6338 >>> 0x7);
                      var _0x1acaef = (_0x2b6338 >>> 0x1c | _0x119b12 << 0x4) ^ (_0x2b6338 << 0x1e | _0x119b12 >>> 0x2) ^ (_0x2b6338 << 0x19 | _0x119b12 >>> 0x7);
                      var _0x4e3625 = (_0x210670 >>> 0xe | _0x124537 << 0x12) ^ (_0x210670 >>> 0x12 | _0x124537 << 0xe) ^ (_0x210670 << 0x17 | _0x124537 >>> 0x9);
                      var _0x15cccb = (_0x124537 >>> 0xe | _0x210670 << 0x12) ^ (_0x124537 >>> 0x12 | _0x210670 << 0xe) ^ (_0x124537 << 0x17 | _0x210670 >>> 0x9);
                      var _0x53140c = _0x1f1c7b[_0x310791];
                      var _0x30b5e2 = _0x53140c.high;
                      var _0x36f267 = _0x53140c.low;
                      var _0x1f2ffc = _0x1325f4 + _0x4e3625 + ((_0x42aa92 = _0x5db78c + _0x15cccb) >>> 0x0 < _0x5db78c >>> 0x0 ? 0x1 : 0x0);
                      var _0x19c6db = _0x1acaef + _0x402b73;
                      _0x1325f4 = _0x4f4cfa;
                      _0x5db78c = _0x4cb98e;
                      _0x4f4cfa = _0x1371e8;
                      _0x4cb98e = _0x4c717c;
                      _0x1371e8 = _0x210670;
                      _0x4c717c = _0x124537;
                      _0x210670 = _0x2e4b64 + (_0x1f2ffc = (_0x1f2ffc = (_0x1f2ffc = _0x1f2ffc + _0x1fda9b + ((_0x42aa92 += _0x32246b) >>> 0x0 < _0x32246b >>> 0x0 ? 0x1 : 0x0)) + _0x30b5e2 + ((_0x42aa92 += _0x36f267) >>> 0x0 < _0x36f267 >>> 0x0 ? 0x1 : 0x0)) + _0x351d52 + ((_0x42aa92 += _0x11890e) >>> 0x0 < _0x11890e >>> 0x0 ? 0x1 : 0x0)) + ((_0x124537 = _0x7bbd7 + _0x42aa92 | 0x0) >>> 0x0 < _0x7bbd7 >>> 0x0 ? 0x1 : 0x0) | 0x0;
                      _0x2e4b64 = _0x4650ae;
                      _0x7bbd7 = _0x3aeffa;
                      _0x4650ae = _0x368364;
                      _0x3aeffa = _0x14867f;
                      _0x368364 = _0x119b12;
                      _0x14867f = _0x2b6338;
                      _0x119b12 = _0x1f2ffc + (_0x3c38ab + _0x9693ef + (_0x19c6db >>> 0x0 < _0x1acaef >>> 0x0 ? 0x1 : 0x0)) + ((_0x2b6338 = _0x42aa92 + _0x19c6db | 0x0) >>> 0x0 < _0x42aa92 >>> 0x0 ? 0x1 : 0x0) | 0x0;
                    }
                    _0x1e18a6 = _0x4c564f.low = _0x1e18a6 + _0x2b6338;
                    _0x4c564f.high = _0x32f9bc + _0x119b12 + (_0x1e18a6 >>> 0x0 < _0x2b6338 >>> 0x0 ? 0x1 : 0x0);
                    _0x5a4578 = _0x1969a1.low = _0x5a4578 + _0x14867f;
                    _0x1969a1.high = _0x5b0de8 + _0x368364 + (_0x5a4578 >>> 0x0 < _0x14867f >>> 0x0 ? 0x1 : 0x0);
                    _0x5dfcc1 = _0x11169e.low = _0x5dfcc1 + _0x3aeffa;
                    _0x11169e.high = _0x10ad39 + _0x4650ae + (_0x5dfcc1 >>> 0x0 < _0x3aeffa >>> 0x0 ? 0x1 : 0x0);
                    _0x460ca6 = _0x8a1a9.low = _0x460ca6 + _0x7bbd7;
                    _0x8a1a9.high = _0x54f580 + _0x2e4b64 + (_0x460ca6 >>> 0x0 < _0x7bbd7 >>> 0x0 ? 0x1 : 0x0);
                    _0x5f362a = _0x349ba6.low = _0x5f362a + _0x124537;
                    _0x349ba6.high = _0x25478b + _0x210670 + (_0x5f362a >>> 0x0 < _0x124537 >>> 0x0 ? 0x1 : 0x0);
                    _0x56f522 = _0x33e924.low = _0x56f522 + _0x4c717c;
                    _0x33e924.high = _0x4bc1ee + _0x1371e8 + (_0x56f522 >>> 0x0 < _0x4c717c >>> 0x0 ? 0x1 : 0x0);
                    _0xd293a9 = _0x1ab42e.low = _0xd293a9 + _0x4cb98e;
                    _0x1ab42e.high = _0x12930b + _0x4f4cfa + (_0xd293a9 >>> 0x0 < _0x4cb98e >>> 0x0 ? 0x1 : 0x0);
                    _0x5f40a8 = _0x3694f9.low = _0x5f40a8 + _0x5db78c;
                    _0x3694f9.high = _0x2b7f35 + _0x1325f4 + (_0x5f40a8 >>> 0x0 < _0x5db78c >>> 0x0 ? 0x1 : 0x0);
                  },
                  "_doFinalize": function () {
                    var _0x4b0c9a = this._data;
                    var _0x32689e = _0x4b0c9a.words;
                    var _0x172167 = 0x8 * this._nDataBytes;
                    var _0x4b04d4 = 0x8 * _0x4b0c9a.sigBytes;
                    _0x32689e[_0x4b04d4 >>> 0x5] |= 0x80 << 0x18 - _0x4b04d4 % 0x20;
                    _0x32689e[0x1e + (_0x4b04d4 + 0x80 >>> 0xa << 0x5)] = Math.floor(_0x172167 / 0x100000000);
                    _0x32689e[0x1f + (_0x4b04d4 + 0x80 >>> 0xa << 0x5)] = _0x172167;
                    _0x4b0c9a.sigBytes = 0x4 * _0x32689e.length;
                    this._process();
                    return this._hash.toX32();
                  },
                  "clone": function () {
                    var _0x5e86a9 = _0x4c3100.clone.call(this);
                    _0x5e86a9._hash = this._hash.clone();
                    return _0x5e86a9;
                  },
                  "blockSize": 0x20
                });
                _0x1ff5c3.SHA512 = _0x4c3100._createHelper(_0x373938);
                _0x1ff5c3.HmacSHA512 = _0x4c3100._createHmacHelper(_0x373938);
              })();
              _0x4b9476.exports = _0x1ff5c3.SHA512;
            },
            0x12e5: function (_0x20c9bc, _0x49dc01, _0x50d47f) {
              var _0x16dfa1;
              _0x16dfa1 = _0x50d47f(0x1d06);
              _0x50d47f(0x1623);
              _0x50d47f(0xc4a);
              _0x50d47f(0x1f74);
              _0x50d47f(0x1c28);
              (function () {
                var _0x332a5b = _0x16dfa1.lib;
                var _0x5421c4 = _0x332a5b.WordArray;
                var _0x5578a5 = _0x332a5b.BlockCipher;
                var _0x2a8d90 = _0x16dfa1.algo;
                var _0x2dc9e5 = [0x39, 0x31, 0x29, 0x21, 0x19, 0x11, 0x9, 0x1, 0x3a, 0x32, 0x2a, 0x22, 0x1a, 0x12, 0xa, 0x2, 0x3b, 0x33, 0x2b, 0x23, 0x1b, 0x13, 0xb, 0x3, 0x3c, 0x34, 0x2c, 0x24, 0x3f, 0x37, 0x2f, 0x27, 0x1f, 0x17, 0xf, 0x7, 0x3e, 0x36, 0x2e, 0x26, 0x1e, 0x16, 0xe, 0x6, 0x3d, 0x35, 0x2d, 0x25, 0x1d, 0x15, 0xd, 0x5, 0x1c, 0x14, 0xc, 0x4];
                var _0x203783 = [0xe, 0x11, 0xb, 0x18, 0x1, 0x5, 0x3, 0x1c, 0xf, 0x6, 0x15, 0xa, 0x17, 0x13, 0xc, 0x4, 0x1a, 0x8, 0x10, 0x7, 0x1b, 0x14, 0xd, 0x2, 0x29, 0x34, 0x1f, 0x25, 0x2f, 0x37, 0x1e, 0x28, 0x33, 0x2d, 0x21, 0x30, 0x2c, 0x31, 0x27, 0x38, 0x22, 0x35, 0x2e, 0x2a, 0x32, 0x24, 0x1d, 0x20];
                var _0x49d181 = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0xf, 0x11, 0x13, 0x15, 0x17, 0x19, 0x1b, 0x1c];
                var _0x2ac62b = [{
                  0x0: 0x808200,
                  0x10000000: 0x8000,
                  0x20000000: 0x808002,
                  0x30000000: 0x2,
                  0x40000000: 0x200,
                  0x50000000: 0x808202,
                  0x60000000: 0x800202,
                  0x70000000: 0x800000,
                  0x80000000: 0x202,
                  0x90000000: 0x800200,
                  0xa0000000: 0x8200,
                  0xb0000000: 0x808000,
                  0xc0000000: 0x8002,
                  0xd0000000: 0x800002,
                  0xe0000000: 0x0,
                  0xf0000000: 0x8202,
                  0x8000000: 0x0,
                  0x18000000: 0x808202,
                  0x28000000: 0x8202,
                  0x38000000: 0x8000,
                  0x48000000: 0x808200,
                  0x58000000: 0x200,
                  0x68000000: 0x808002,
                  0x78000000: 0x2,
                  0x88000000: 0x800200,
                  0x98000000: 0x8200,
                  0xa8000000: 0x808000,
                  0xb8000000: 0x800202,
                  0xc8000000: 0x800002,
                  0xd8000000: 0x8002,
                  0xe8000000: 0x202,
                  0xf8000000: 0x800000,
                  0x1: 0x8000,
                  0x10000001: 0x2,
                  0x20000001: 0x808200,
                  0x30000001: 0x800000,
                  0x40000001: 0x808002,
                  0x50000001: 0x8200,
                  0x60000001: 0x200,
                  0x70000001: 0x800202,
                  0x80000001: 0x808202,
                  0x90000001: 0x808000,
                  0xa0000001: 0x800002,
                  0xb0000001: 0x8202,
                  0xc0000001: 0x202,
                  0xd0000001: 0x800200,
                  0xe0000001: 0x8002,
                  0xf0000001: 0x0,
                  0x8000001: 0x808202,
                  0x18000001: 0x808000,
                  0x28000001: 0x800000,
                  0x38000001: 0x200,
                  0x48000001: 0x8000,
                  0x58000001: 0x800002,
                  0x68000001: 0x2,
                  0x78000001: 0x8202,
                  0x88000001: 0x8002,
                  0x98000001: 0x800202,
                  0xa8000001: 0x202,
                  0xb8000001: 0x808200,
                  0xc8000001: 0x800200,
                  0xd8000001: 0x0,
                  0xe8000001: 0x8200,
                  0xf8000001: 0x808002
                }, {
                  0x0: 0x40084010,
                  0x1000000: 0x4000,
                  0x2000000: 0x80000,
                  0x3000000: 0x40080010,
                  0x4000000: 0x40000010,
                  0x5000000: 0x40084000,
                  0x6000000: 0x40004000,
                  0x7000000: 0x10,
                  0x8000000: 0x84000,
                  0x9000000: 0x40004010,
                  0xa000000: 0x40000000,
                  0xb000000: 0x84010,
                  0xc000000: 0x80010,
                  0xd000000: 0x0,
                  0xe000000: 0x4010,
                  0xf000000: 0x40080000,
                  0x800000: 0x40004000,
                  0x1800000: 0x84010,
                  0x2800000: 0x10,
                  0x3800000: 0x40004010,
                  0x4800000: 0x40084010,
                  0x5800000: 0x40000000,
                  0x6800000: 0x80000,
                  0x7800000: 0x40080010,
                  0x8800000: 0x80010,
                  0x9800000: 0x0,
                  0xa800000: 0x4000,
                  0xb800000: 0x40080000,
                  0xc800000: 0x40000010,
                  0xd800000: 0x84000,
                  0xe800000: 0x40084000,
                  0xf800000: 0x4010,
                  0x10000000: 0x0,
                  0x11000000: 0x40080010,
                  0x12000000: 0x40004010,
                  0x13000000: 0x40084000,
                  0x14000000: 0x40080000,
                  0x15000000: 0x10,
                  0x16000000: 0x84010,
                  0x17000000: 0x4000,
                  0x18000000: 0x4010,
                  0x19000000: 0x80000,
                  0x1a000000: 0x80010,
                  0x1b000000: 0x40000010,
                  0x1c000000: 0x84000,
                  0x1d000000: 0x40004000,
                  0x1e000000: 0x40000000,
                  0x1f000000: 0x40084010,
                  0x10800000: 0x84010,
                  0x11800000: 0x80000,
                  0x12800000: 0x40080000,
                  0x13800000: 0x4000,
                  0x14800000: 0x40004000,
                  0x15800000: 0x40084010,
                  0x16800000: 0x10,
                  0x17800000: 0x40000000,
                  0x18800000: 0x40084000,
                  0x19800000: 0x40000010,
                  0x1a800000: 0x40004010,
                  0x1b800000: 0x80010,
                  0x1c800000: 0x0,
                  0x1d800000: 0x4010,
                  0x1e800000: 0x40080010,
                  0x1f800000: 0x84000
                }, {
                  0x0: 0x104,
                  0x100000: 0x0,
                  0x200000: 0x4000100,
                  0x300000: 0x10104,
                  0x400000: 0x10004,
                  0x500000: 0x4000004,
                  0x600000: 0x4010104,
                  0x700000: 0x4010000,
                  0x800000: 0x4000000,
                  0x900000: 0x4010100,
                  0xa00000: 0x10100,
                  0xb00000: 0x4010004,
                  0xc00000: 0x4000104,
                  0xd00000: 0x10000,
                  0xe00000: 0x4,
                  0xf00000: 0x100,
                  0x80000: 0x4010100,
                  0x180000: 0x4010004,
                  0x280000: 0x0,
                  0x380000: 0x4000100,
                  0x480000: 0x4000004,
                  0x580000: 0x10000,
                  0x680000: 0x10004,
                  0x780000: 0x104,
                  0x880000: 0x4,
                  0x980000: 0x100,
                  0xa80000: 0x4010000,
                  0xb80000: 0x10104,
                  0xc80000: 0x10100,
                  0xd80000: 0x4000104,
                  0xe80000: 0x4010104,
                  0xf80000: 0x4000000,
                  0x1000000: 0x4010100,
                  0x1100000: 0x10004,
                  0x1200000: 0x10000,
                  0x1300000: 0x4000100,
                  0x1400000: 0x100,
                  0x1500000: 0x4010104,
                  0x1600000: 0x4000004,
                  0x1700000: 0x0,
                  0x1800000: 0x4000104,
                  0x1900000: 0x4000000,
                  0x1a00000: 0x4,
                  0x1b00000: 0x10100,
                  0x1c00000: 0x4010000,
                  0x1d00000: 0x104,
                  0x1e00000: 0x10104,
                  0x1f00000: 0x4010004,
                  0x1080000: 0x4000000,
                  0x1180000: 0x104,
                  0x1280000: 0x4010100,
                  0x1380000: 0x0,
                  0x1480000: 0x10004,
                  0x1580000: 0x4000100,
                  0x1680000: 0x100,
                  0x1780000: 0x4010004,
                  0x1880000: 0x10000,
                  0x1980000: 0x4010104,
                  0x1a80000: 0x10104,
                  0x1b80000: 0x4000004,
                  0x1c80000: 0x4000104,
                  0x1d80000: 0x4010000,
                  0x1e80000: 0x4,
                  0x1f80000: 0x10100
                }, {
                  0x0: 0x80401000,
                  0x10000: 0x80001040,
                  0x20000: 0x401040,
                  0x30000: 0x80400000,
                  0x40000: 0x0,
                  0x50000: 0x401000,
                  0x60000: 0x80000040,
                  0x70000: 0x400040,
                  0x80000: 0x80000000,
                  0x90000: 0x400000,
                  0xa0000: 0x40,
                  0xb0000: 0x80001000,
                  0xc0000: 0x80400040,
                  0xd0000: 0x1040,
                  0xe0000: 0x1000,
                  0xf0000: 0x80401040,
                  0x8000: 0x80001040,
                  0x18000: 0x40,
                  0x28000: 0x80400040,
                  0x38000: 0x80001000,
                  0x48000: 0x401000,
                  0x58000: 0x80401040,
                  0x68000: 0x0,
                  0x78000: 0x80400000,
                  0x88000: 0x1000,
                  0x98000: 0x80401000,
                  0xa8000: 0x400000,
                  0xb8000: 0x1040,
                  0xc8000: 0x80000000,
                  0xd8000: 0x400040,
                  0xe8000: 0x401040,
                  0xf8000: 0x80000040,
                  0x100000: 0x400040,
                  0x110000: 0x401000,
                  0x120000: 0x80000040,
                  0x130000: 0x0,
                  0x140000: 0x1040,
                  0x150000: 0x80400040,
                  0x160000: 0x80401000,
                  0x170000: 0x80001040,
                  0x180000: 0x80401040,
                  0x190000: 0x80000000,
                  0x1a0000: 0x80400000,
                  0x1b0000: 0x401040,
                  0x1c0000: 0x80001000,
                  0x1d0000: 0x400000,
                  0x1e0000: 0x40,
                  0x1f0000: 0x1000,
                  0x108000: 0x80400000,
                  0x118000: 0x80401040,
                  0x128000: 0x0,
                  0x138000: 0x401000,
                  0x148000: 0x400040,
                  0x158000: 0x80000000,
                  0x168000: 0x80001040,
                  0x178000: 0x40,
                  0x188000: 0x80000040,
                  0x198000: 0x1000,
                  0x1a8000: 0x80001000,
                  0x1b8000: 0x80400040,
                  0x1c8000: 0x1040,
                  0x1d8000: 0x80401000,
                  0x1e8000: 0x400000,
                  0x1f8000: 0x401040
                }, {
                  0x0: 0x80,
                  0x1000: 0x1040000,
                  0x2000: 0x40000,
                  0x3000: 0x20000000,
                  0x4000: 0x20040080,
                  0x5000: 0x1000080,
                  0x6000: 0x21000080,
                  0x7000: 0x40080,
                  0x8000: 0x1000000,
                  0x9000: 0x20040000,
                  0xa000: 0x20000080,
                  0xb000: 0x21040080,
                  0xc000: 0x21040000,
                  0xd000: 0x0,
                  0xe000: 0x1040080,
                  0xf000: 0x21000000,
                  0x800: 0x1040080,
                  0x1800: 0x21000080,
                  0x2800: 0x80,
                  0x3800: 0x1040000,
                  0x4800: 0x40000,
                  0x5800: 0x20040080,
                  0x6800: 0x21040000,
                  0x7800: 0x20000000,
                  0x8800: 0x20040000,
                  0x9800: 0x0,
                  0xa800: 0x21040080,
                  0xb800: 0x1000080,
                  0xc800: 0x20000080,
                  0xd800: 0x21000000,
                  0xe800: 0x1000000,
                  0xf800: 0x40080,
                  0x10000: 0x40000,
                  0x11000: 0x80,
                  0x12000: 0x20000000,
                  0x13000: 0x21000080,
                  0x14000: 0x1000080,
                  0x15000: 0x21040000,
                  0x16000: 0x20040080,
                  0x17000: 0x1000000,
                  0x18000: 0x21040080,
                  0x19000: 0x21000000,
                  0x1a000: 0x1040000,
                  0x1b000: 0x20040000,
                  0x1c000: 0x40080,
                  0x1d000: 0x20000080,
                  0x1e000: 0x0,
                  0x1f000: 0x1040080,
                  0x10800: 0x21000080,
                  0x11800: 0x1000000,
                  0x12800: 0x1040000,
                  0x13800: 0x20040080,
                  0x14800: 0x20000000,
                  0x15800: 0x1040080,
                  0x16800: 0x80,
                  0x17800: 0x21040000,
                  0x18800: 0x40080,
                  0x19800: 0x21040080,
                  0x1a800: 0x0,
                  0x1b800: 0x21000000,
                  0x1c800: 0x1000080,
                  0x1d800: 0x40000,
                  0x1e800: 0x20040000,
                  0x1f800: 0x20000080
                }, {
                  0x0: 0x10000008,
                  0x100: 0x2000,
                  0x200: 0x10200000,
                  0x300: 0x10202008,
                  0x400: 0x10002000,
                  0x500: 0x200000,
                  0x600: 0x200008,
                  0x700: 0x10000000,
                  0x800: 0x0,
                  0x900: 0x10002008,
                  0xa00: 0x202000,
                  0xb00: 0x8,
                  0xc00: 0x10200008,
                  0xd00: 0x202008,
                  0xe00: 0x2008,
                  0xf00: 0x10202000,
                  0x80: 0x10200000,
                  0x180: 0x10202008,
                  0x280: 0x8,
                  0x380: 0x200000,
                  0x480: 0x202008,
                  0x580: 0x10000008,
                  0x680: 0x10002000,
                  0x780: 0x2008,
                  0x880: 0x200008,
                  0x980: 0x2000,
                  0xa80: 0x10002008,
                  0xb80: 0x10200008,
                  0xc80: 0x0,
                  0xd80: 0x10202000,
                  0xe80: 0x202000,
                  0xf80: 0x10000000,
                  0x1000: 0x10002000,
                  0x1100: 0x10200008,
                  0x1200: 0x10202008,
                  0x1300: 0x2008,
                  0x1400: 0x200000,
                  0x1500: 0x10000000,
                  0x1600: 0x10000008,
                  0x1700: 0x202000,
                  0x1800: 0x202008,
                  0x1900: 0x0,
                  0x1a00: 0x8,
                  0x1b00: 0x10200000,
                  0x1c00: 0x2000,
                  0x1d00: 0x10002008,
                  0x1e00: 0x10202000,
                  0x1f00: 0x200008,
                  0x1080: 0x8,
                  0x1180: 0x202000,
                  0x1280: 0x200000,
                  0x1380: 0x10000008,
                  0x1480: 0x10002000,
                  0x1580: 0x2008,
                  0x1680: 0x10202008,
                  0x1780: 0x10200000,
                  0x1880: 0x10202000,
                  0x1980: 0x10200008,
                  0x1a80: 0x2000,
                  0x1b80: 0x202008,
                  0x1c80: 0x200008,
                  0x1d80: 0x0,
                  0x1e80: 0x10000000,
                  0x1f80: 0x10002008
                }, {
                  0x0: 0x100000,
                  0x10: 0x2000401,
                  0x20: 0x400,
                  0x30: 0x100401,
                  0x40: 0x2100401,
                  0x50: 0x0,
                  0x60: 0x1,
                  0x70: 0x2100001,
                  0x80: 0x2000400,
                  0x90: 0x100001,
                  0xa0: 0x2000001,
                  0xb0: 0x2100400,
                  0xc0: 0x2100000,
                  0xd0: 0x401,
                  0xe0: 0x100400,
                  0xf0: 0x2000000,
                  0x8: 0x2100001,
                  0x18: 0x0,
                  0x28: 0x2000401,
                  0x38: 0x2100400,
                  0x48: 0x100000,
                  0x58: 0x2000001,
                  0x68: 0x2000000,
                  0x78: 0x401,
                  0x88: 0x100401,
                  0x98: 0x2000400,
                  0xa8: 0x2100000,
                  0xb8: 0x100001,
                  0xc8: 0x400,
                  0xd8: 0x2100401,
                  0xe8: 0x1,
                  0xf8: 0x100400,
                  0x100: 0x2000000,
                  0x110: 0x100000,
                  0x120: 0x2000401,
                  0x130: 0x2100001,
                  0x140: 0x100001,
                  0x150: 0x2000400,
                  0x160: 0x2100400,
                  0x170: 0x100401,
                  0x180: 0x401,
                  0x190: 0x2100401,
                  0x1a0: 0x100400,
                  0x1b0: 0x1,
                  0x1c0: 0x0,
                  0x1d0: 0x2100000,
                  0x1e0: 0x2000001,
                  0x1f0: 0x400,
                  0x108: 0x100400,
                  0x118: 0x2000401,
                  0x128: 0x2100001,
                  0x138: 0x1,
                  0x148: 0x2000000,
                  0x158: 0x100000,
                  0x168: 0x401,
                  0x178: 0x2100400,
                  0x188: 0x2000001,
                  0x198: 0x2100000,
                  0x1a8: 0x0,
                  0x1b8: 0x2100401,
                  0x1c8: 0x100401,
                  0x1d8: 0x400,
                  0x1e8: 0x2000400,
                  0x1f8: 0x100001
                }, {
                  0x0: 0x8000820,
                  0x1: 0x20000,
                  0x2: 0x8000000,
                  0x3: 0x20,
                  0x4: 0x20020,
                  0x5: 0x8020820,
                  0x6: 0x8020800,
                  0x7: 0x800,
                  0x8: 0x8020000,
                  0x9: 0x8000800,
                  0xa: 0x20800,
                  0xb: 0x8020020,
                  0xc: 0x820,
                  0xd: 0x0,
                  0xe: 0x8000020,
                  0xf: 0x20820,
                  0x80000000: 0x800,
                  0x80000001: 0x8020820,
                  0x80000002: 0x8000820,
                  0x80000003: 0x8000000,
                  0x80000004: 0x8020000,
                  0x80000005: 0x20800,
                  0x80000006: 0x20820,
                  0x80000007: 0x20,
                  0x80000008: 0x8000020,
                  0x80000009: 0x820,
                  0x8000000a: 0x20020,
                  0x8000000b: 0x8020800,
                  0x8000000c: 0x0,
                  0x8000000d: 0x8020020,
                  0x8000000e: 0x8000800,
                  0x8000000f: 0x20000,
                  0x10: 0x20820,
                  0x11: 0x8020800,
                  0x12: 0x20,
                  0x13: 0x800,
                  0x14: 0x8000800,
                  0x15: 0x8000020,
                  0x16: 0x8020020,
                  0x17: 0x20000,
                  0x18: 0x0,
                  0x19: 0x20020,
                  0x1a: 0x8020000,
                  0x1b: 0x8000820,
                  0x1c: 0x8020820,
                  0x1d: 0x20800,
                  0x1e: 0x820,
                  0x1f: 0x8000000,
                  0x80000010: 0x20000,
                  0x80000011: 0x800,
                  0x80000012: 0x8020020,
                  0x80000013: 0x20820,
                  0x80000014: 0x20,
                  0x80000015: 0x8020000,
                  0x80000016: 0x8000000,
                  0x80000017: 0x8000820,
                  0x80000018: 0x8020820,
                  0x80000019: 0x8000020,
                  0x8000001a: 0x8000800,
                  0x8000001b: 0x0,
                  0x8000001c: 0x20800,
                  0x8000001d: 0x820,
                  0x8000001e: 0x20020,
                  0x8000001f: 0x8020800
                }];
                var _0x49fbc1 = [0xf8000001, 0x1f800000, 0x1f80000, 0x1f8000, 0x1f800, 0x1f80, 0x1f8, 0x8000001f];
                var _0x465c42 = _0x2a8d90.DES = _0x5578a5.extend({
                  "_doReset": function () {
                    var _0x5f3585 = this._key.words;
                    var _0x506091 = [];
                    for (var _0x56505e = 0x0; _0x56505e < 0x38; _0x56505e++) {
                      var _0x8b86e5 = _0x2dc9e5[_0x56505e] - 0x1;
                      _0x506091[_0x56505e] = _0x5f3585[_0x8b86e5 >>> 0x5] >>> 0x1f - _0x8b86e5 % 0x20 & 0x1;
                    }
                    var _0x1ced1c = this._subKeys = [];
                    for (var _0x4da279 = 0x0; _0x4da279 < 0x10; _0x4da279++) {
                      var _0x2f9602 = _0x1ced1c[_0x4da279] = [];
                      var _0x2711f2 = _0x49d181[_0x4da279];
                      for (_0x56505e = 0x0; _0x56505e < 0x18; _0x56505e++) {
                        _0x2f9602[_0x56505e / 0x6 | 0x0] |= _0x506091[(_0x203783[_0x56505e] - 0x1 + _0x2711f2) % 0x1c] << 0x1f - _0x56505e % 0x6;
                        _0x2f9602[0x4 + (_0x56505e / 0x6 | 0x0)] |= _0x506091[0x1c + (_0x203783[_0x56505e + 0x18] - 0x1 + _0x2711f2) % 0x1c] << 0x1f - _0x56505e % 0x6;
                      }
                      _0x2f9602[0x0] = _0x2f9602[0x0] << 0x1 | _0x2f9602[0x0] >>> 0x1f;
                      for (_0x56505e = 0x1; _0x56505e < 0x7; _0x56505e++) {
                        _0x2f9602[_0x56505e] = _0x2f9602[_0x56505e] >>> 0x4 * (_0x56505e - 0x1) + 0x3;
                      }
                      _0x2f9602[0x7] = _0x2f9602[0x7] << 0x5 | _0x2f9602[0x7] >>> 0x1b;
                    }
                    var _0x12e754 = this._invSubKeys = [];
                    for (_0x56505e = 0x0; _0x56505e < 0x10; _0x56505e++) {
                      _0x12e754[_0x56505e] = _0x1ced1c[0xf - _0x56505e];
                    }
                  },
                  "encryptBlock": function (_0x298ae8, _0x5da1e2) {
                    this._doCryptBlock(_0x298ae8, _0x5da1e2, this._subKeys);
                  },
                  "decryptBlock": function (_0x881d54, _0x297c8f) {
                    this._doCryptBlock(_0x881d54, _0x297c8f, this._invSubKeys);
                  },
                  "_doCryptBlock": function (_0x4a8fca, _0x4f2f55, _0x16b1a8) {
                    this._lBlock = _0x4a8fca[_0x4f2f55];
                    this._rBlock = _0x4a8fca[_0x4f2f55 + 0x1];
                    _0xa4ebef.call(this, 0x4, 0xf0f0f0f);
                    _0xa4ebef.call(this, 0x10, 0xffff);
                    _0x41dd6e.call(this, 0x2, 0x33333333);
                    _0x41dd6e.call(this, 0x8, 0xff00ff);
                    _0xa4ebef.call(this, 0x1, 0x55555555);
                    for (var _0x28dff8 = 0x0; _0x28dff8 < 0x10; _0x28dff8++) {
                      var _0x586594 = _0x16b1a8[_0x28dff8];
                      var _0x4822ea = this._lBlock;
                      var _0x4227e5 = this._rBlock;
                      var _0x5e03d4 = 0x0;
                      for (var _0x51e062 = 0x0; _0x51e062 < 0x8; _0x51e062++) {
                        _0x5e03d4 |= _0x2ac62b[_0x51e062][((_0x4227e5 ^ _0x586594[_0x51e062]) & _0x49fbc1[_0x51e062]) >>> 0x0];
                      }
                      this._lBlock = _0x4227e5;
                      this._rBlock = _0x4822ea ^ _0x5e03d4;
                    }
                    var _0x3ccc67 = this._lBlock;
                    this._lBlock = this._rBlock;
                    this._rBlock = _0x3ccc67;
                    _0xa4ebef.call(this, 0x1, 0x55555555);
                    _0x41dd6e.call(this, 0x8, 0xff00ff);
                    _0x41dd6e.call(this, 0x2, 0x33333333);
                    _0xa4ebef.call(this, 0x10, 0xffff);
                    _0xa4ebef.call(this, 0x4, 0xf0f0f0f);
                    _0x4a8fca[_0x4f2f55] = this._lBlock;
                    _0x4a8fca[_0x4f2f55 + 0x1] = this._rBlock;
                  },
                  "keySize": 0x2,
                  "ivSize": 0x2,
                  "blockSize": 0x2
                });
                function _0xa4ebef(_0x50329b, _0x49abf6) {
                  var _0x5e1088 = (this._lBlock >>> _0x50329b ^ this._rBlock) & _0x49abf6;
                  this._rBlock ^= _0x5e1088;
                  this._lBlock ^= _0x5e1088 << _0x50329b;
                }
                function _0x41dd6e(_0x3cc6b8, _0x480efd) {
                  var _0x258c89 = (this._rBlock >>> _0x3cc6b8 ^ this._lBlock) & _0x480efd;
                  this._lBlock ^= _0x258c89;
                  this._rBlock ^= _0x258c89 << _0x3cc6b8;
                }
                _0x16dfa1.DES = _0x5578a5._createHelper(_0x465c42);
                var _0x56e8da = _0x2a8d90.TripleDES = _0x5578a5.extend({
                  "_doReset": function () {
                    var _0x4e0a4f = this._key.words;
                    if (0x2 !== _0x4e0a4f.length && 0x4 !== _0x4e0a4f.length && _0x4e0a4f.length < 0x6) {
                      throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
                    }
                    var _0x56fcfd = _0x4e0a4f.slice(0x0, 0x2);
                    var _0x4a582b = _0x4e0a4f.length < 0x4 ? _0x4e0a4f.slice(0x0, 0x2) : _0x4e0a4f.slice(0x2, 0x4);
                    var _0x14ddb1 = _0x4e0a4f.length < 0x6 ? _0x4e0a4f.slice(0x0, 0x2) : _0x4e0a4f.slice(0x4, 0x6);
                    this._des1 = _0x465c42.createEncryptor(_0x5421c4.create(_0x56fcfd));
                    this._des2 = _0x465c42.createEncryptor(_0x5421c4.create(_0x4a582b));
                    this._des3 = _0x465c42.createEncryptor(_0x5421c4.create(_0x14ddb1));
                  },
                  "encryptBlock": function (_0x4d0394, _0x3f85ee) {
                    this._des1.encryptBlock(_0x4d0394, _0x3f85ee);
                    this._des2.decryptBlock(_0x4d0394, _0x3f85ee);
                    this._des3.encryptBlock(_0x4d0394, _0x3f85ee);
                  },
                  "decryptBlock": function (_0x5a7946, _0x30855f) {
                    this._des3.decryptBlock(_0x5a7946, _0x30855f);
                    this._des2.encryptBlock(_0x5a7946, _0x30855f);
                    this._des1.decryptBlock(_0x5a7946, _0x30855f);
                  },
                  "keySize": 0x6,
                  "ivSize": 0x2,
                  "blockSize": 0x2
                });
                _0x16dfa1.TripleDES = _0x5578a5._createHelper(_0x56e8da);
              })();
              _0x20c9bc.exports = _0x16dfa1.TripleDES;
            },
            0xa30: function (_0x507d3b, _0x5ef5ca, _0x208a9a) {
              var _0x8ccddd;
              var _0x1ee41e;
              var _0x184ff4;
              var _0x4663e7;
              var _0x437959;
              var _0x3547e4;
              _0x184ff4 = (_0x1ee41e = _0x8ccddd = _0x208a9a(0x1d06)).lib;
              _0x4663e7 = _0x184ff4.Base;
              _0x437959 = _0x184ff4.WordArray;
              (_0x3547e4 = _0x1ee41e.x64 = {}).Word = _0x4663e7.extend({
                "init": function (_0x5c4911, _0x2c7853) {
                  this.high = _0x5c4911;
                  this.low = _0x2c7853;
                }
              });
              _0x3547e4.WordArray = _0x4663e7.extend({
                "init": function (_0x2d9ec3, _0x1108a4) {
                  _0x2d9ec3 = this.words = _0x2d9ec3 || [];
                  this.sigBytes = null != _0x1108a4 ? _0x1108a4 : 0x8 * _0x2d9ec3.length;
                },
                "toX32": function () {
                  var _0x412541 = this.words;
                  var _0x499d22 = _0x412541.length;
                  var _0xd5867a = [];
                  for (var _0x82b538 = 0x0; _0x82b538 < _0x499d22; _0x82b538++) {
                    var _0x35618d = _0x412541[_0x82b538];
                    _0xd5867a.push(_0x35618d.high);
                    _0xd5867a.push(_0x35618d.low);
                  }
                  return _0x437959.create(_0xd5867a, this.sigBytes);
                },
                "clone": function () {
                  var _0x32a5c0 = _0x4663e7.clone.call(this);
                  var _0x2ce2e3 = _0x32a5c0.words = this.words.slice(0x0);
                  var _0x235d5a = _0x2ce2e3.length;
                  for (var _0x1157e7 = 0x0; _0x1157e7 < _0x235d5a; _0x1157e7++) {
                    _0x2ce2e3[_0x1157e7] = _0x2ce2e3[_0x1157e7].clone();
                  }
                  return _0x32a5c0;
                }
              });
              _0x507d3b.exports = _0x8ccddd;
            },
            0x2148: function (_0x3ef32d, _0x3ab7b1, _0x463d60) {
              'use strict';
  
              var _0x966564 = this && this.__importDefault || function (_0x19230e) {
                return _0x19230e && _0x19230e.__esModule ? _0x19230e : {
                  "default": _0x19230e
                };
              };
              Object.defineProperty(_0x3ab7b1, "__esModule", {
                "value": true
              });
              const _0x18ce99 = _0x966564(_0x463d60(0x15ea))["default"].getInstance();
              window.bundle = _0x18ce99;
              _0x3ef32d.exports = _0x18ce99;
            },
            0x109: (_0x3d00f2, _0x57c0f0) => {
              'use strict';
  
              Object.defineProperty(_0x57c0f0, "__esModule", {
                "value": true
              });
              class _0x54ff82 {}
              _0x57c0f0["default"] = _0x54ff82;
              _0x54ff82.pause = false;
              _0x54ff82.isShowAD = false;
            },
            0x15ea: function (_0x3f61d5, _0x36f919, _0xc0af3) {
              'use strict';
  
              var _0x22f422 = this && this.__importDefault || function (_0x2571b0) {
                return _0x2571b0 && _0x2571b0.__esModule ? _0x2571b0 : {
                  "default": _0x2571b0
                };
              };
              Object.defineProperty(_0x36f919, "__esModule", {
                "value": true
              });
              const _0x1f94f3 = _0x22f422(_0xc0af3(0x109));
              const _0x136da0 = _0x22f422(_0xc0af3(0x1447));
              const _0x16aa64 = _0x22f422(_0xc0af3(0x157c));
              const _0x2646ff = _0x22f422(_0xc0af3(0x8f1));
              const _0x50a890 = _0x22f422(_0xc0af3(0x1037));
              const _0x4b42bc = _0xc0af3(0x2235);
              class _0x4a88f5 extends _0x4b42bc.Singleton {
                get ["pf"]() {
                  if (!this._pf) {
                    if ("undefined" != typeof Laya) {
                      this._pf = new _0x16aa64["default"]();
                    } else if ("undefined" != typeof Phaser) {
                      this._pf = new _0x50a890["default"]();
                    } else if ("undefined" != typeof cc) {
                      this._pf = new _0x2646ff["default"]();
                    } else {
                      this._pf = new _0x136da0["default"]();
                    }
                    this._pf.initialization();
                  }
                  return this._pf;
                }
                ["load"](_0xf5831c, _0x297e2a) {
                  this.pf.load(_0xf5831c, _0x297e2a);
                }
                ["init"](_0x3630fa) {
                  if (_0x3630fa && "module" == _0x3630fa.type) {
                    _0x1f94f3["default"].type = "module";
                  }
                  return this.pf.init();
                }
              }
              _0x36f919["default"] = _0x4a88f5;
            },
            0x1447: function (_0x28f0a3, _0x36ee0c, _0x34cfdc) {
              'use strict';
  
              var _0x220783 = this && this.__importDefault || function (_0x24ed68) {
                return _0x24ed68 && _0x24ed68.__esModule ? _0x24ed68 : {
                  "default": _0x24ed68
                };
              };
              Object.defineProperty(_0x36ee0c, "__esModule", {
                "value": true
              });
              const _0x434e81 = _0x220783(_0x34cfdc(0x1866));
              const _0x366f13 = _0x220783(_0x34cfdc(0x1ba2));
              const _0x4b6c19 = _0x34cfdc(0x25e0);
              _0x36ee0c["default"] = class {
                ["initialization"]() {}
                async ["init"]() {}
                ["load"](_0x5c5708) {
                  if ("function" == typeof _0x5c5708) {
                    _0x5c5708;
                    _0x5c5708 = "bgm.mp3";
                  }
                  if (!('' != _0x5c5708 && null != _0x5c5708)) {
                    _0x5c5708 = "bgm.mp3";
                  }
                  const _0x3754bd = new XMLHttpRequest();
                  _0x3754bd.open("GET", _0x5c5708, true);
                  _0x3754bd.responseType = "arraybuffer";
                  _0x3754bd.onload = _0x282377 => {
                    this.onLoaded(_0x5c5708, _0x3754bd.response);
                  };
                  _0x3754bd.onerror = function (_0x56de18) {};
                  _0x3754bd.send();
                }
                ["onLoaded"](_0x24d9a8, _0x6db4ec) {
                  const _0x55a071 = new _0x434e81["default"](_0x6db4ec);
                  let _0x4ceef4;
                  let _0x137180;
                  let _0x1c17a0;
                  switch (_0x55a071.getInt16()) {
                    case _0x4b6c19.BundleType.PNG:
                      {
                        _0x55a071.getUTFString();
                        const _0x3a7de5 = _0x55a071.getInt32();
                        _0x55a071.getUTFString();
                        if (!Laya.ResourceVersion.manifest) {
                          Laya.ResourceVersion.type = 0x2;
                          Laya.ResourceVersion.manifest = {};
                        }
                        const _0x3db06a = Laya.ResourceVersion.manifest;
                        const _0xdea17 = Object.entries(_0x3db06a);
                        const _0xfda45a = {};
                        for (const _0x15aa69 of _0xdea17) _0xfda45a[_0x15aa69[0x1]] = _0x15aa69[0x0];
                        for (let _0x5bce2a = 0x0; _0x5bce2a < _0x3a7de5; _0x5bce2a++) {
                          _0x137180 = _0x55a071.getUTFString();
                          _0x4ceef4 = _0x55a071.getInt32();
                          _0x1c17a0 = _0x55a071.readArrayBuffer(_0x4ceef4);
                          var _0x5b7df4 = new Laya.Browser.window.Blob([_0x1c17a0], {
                            "type": "image/png"
                          });
                          const _0x21ce02 = Laya.Browser.window.URL.createObjectURL(_0x5b7df4);
                          if (_0xfda45a[_0x137180]) {
                            Laya.ResourceVersion.manifest[_0xfda45a[_0x137180]] = _0x21ce02;
                          } else {
                            Laya.ResourceVersion.manifest[_0x137180] = _0x21ce02;
                          }
                        }
                        if (_0x24d9a8) {
                          _0x24d9a8();
                        }
                      }
                      break;
                    case _0x4b6c19.BundleType.SCRIPT:
                      _0x55a071.getUTFString();
                      const _0x1a61d6 = _0x55a071.getUTFString();
                      const _0x3d5aa7 = _0x366f13["default"][_0x1a61d6];
                      if (_0x3d5aa7) {
                        _0x3d5aa7(_0x55a071);
                      }
                      if (_0x24d9a8) {
                        _0x24d9a8();
                      }
                      break;
                    case _0x4b6c19.BundleType.SCRIPT_YIV:
                      {
                        _0x55a071.getUTFString();
                        _0x55a071.getUTFString();
                        const _0x6d47e9 = _0x55a071.getInt32();
                        for (let _0x92e5c = 0x0; _0x92e5c < _0x6d47e9; _0x92e5c++) {
                          _0x4ceef4 = _0x55a071.getInt32();
                          _0x1c17a0 = _0x55a071.readArrayBuffer(_0x4ceef4);
                          let _0x2b216f = '';
                          const _0x278992 = new Uint8Array(_0x1c17a0);
                          for (const _0x56f4cd of _0x278992) _0x2b216f += String.fromCharCode(_0x56f4cd);
                          eval.call(window, _0x2b216f);
                        }
                        if (_0x24d9a8) {
                          _0x24d9a8();
                        }
                      }
                  }
                }
              };
            },
            0x157c: function (_0x2dc169, _0x1425f7, _0xb9e636) {
              'use strict';
  
              var _0x44b7e8 = this && this.__createBinding || (Object.create ? function (_0x4bb298, _0x3b1997, _0x455599) {
                if (undefined === _0x455599) {
                  _0x455599;
                }
                var _0x4be829 = Object.getOwnPropertyDescriptor(_0x3b1997, _0x455599);
                if (!(_0x4be829 && !("get" in _0x4be829 ? !_0x3b1997.__esModule : _0x4be829.writable || _0x4be829.configurable))) {
                  _0x4be829 = {
                    "enumerable": true,
                    "get": function () {
                      return _0x3b1997[_0x455599];
                    }
                  };
                }
                Object.defineProperty(_0x4bb298, _0x455599, _0x4be829);
              } : function (_0x189785, _0x1de857, _0x261a7a) {
                if (undefined === _0x261a7a) {
                  _0x261a7a;
                }
                _0x189785[_0x261a7a] = _0x1de857[_0x261a7a];
              });
              var _0x1fc708 = this && this.__setModuleDefault || (Object.create ? function (_0x12d436, _0x6cdc20) {
                Object.defineProperty(_0x12d436, "default", {
                  "enumerable": true,
                  "value": _0x6cdc20
                });
              } : function (_0x1f2533, _0x3aacba) {
                _0x1f2533["default"] = _0x3aacba;
              });
              var _0x2eae03 = this && this.__importStar || function (_0x1309d5) {
                if (_0x1309d5 && _0x1309d5.__esModule) {
                  return _0x1309d5;
                }
                var _0x26d4a6 = {};
                if (null != _0x1309d5) {
                  for (var _0x5aa596 in _0x1309d5) if ("default" !== _0x5aa596 && Object.prototype.hasOwnProperty.call(_0x1309d5, _0x5aa596)) {
                    _0x44b7e8(_0x26d4a6, _0x1309d5, _0x5aa596);
                  }
                }
                _0x1fc708(_0x26d4a6, _0x1309d5);
                return _0x26d4a6;
              };
              var _0x4cd8d3 = this && this.__importDefault || function (_0x5d90d1) {
                return _0x5d90d1 && _0x5d90d1.__esModule ? _0x5d90d1 : {
                  "default": _0x5d90d1
                };
              };
              Object.defineProperty(_0x1425f7, "__esModule", {
                "value": true
              });
              const _0x1be86d = _0x4cd8d3(_0xb9e636(0x1866));
              const _0x13a24c = _0xb9e636(0x25e0);
              const _0x2a63c7 = _0x4cd8d3(_0xb9e636(0x1ba2));
              const _0x32bc14 = _0x4cd8d3(_0xb9e636(0x190d));
              const _0x2b55ac = _0x2eae03(_0xb9e636(0x1bd));
              const _0x162719 = _0x4cd8d3(_0xb9e636(0x77b));
              const _0x1d3e50 = _0x2b55ac.enc.Utf8.parse("53D8DBC5DIK3436A");
              const _0x52ffd6 = _0x2b55ac.enc.Utf8.parse("KI5JL2SKE9883365");
              _0x1425f7["default"] = class {
                constructor() {
                  this.initializationed = false;
                  this.inited = false;
                }
                ["initialization"]() {
                  if (!this.initializationed) {
                    _0x162719["default"].formatURL();
                    this.initializationed = true;
                  }
                }
                async ["init"]() {
                  if (this.inited) {
                    return;
                  }
                  this.inited = true;
                  this.initialization();
                  if (await new Promise(async (_0x932ff6, _0x171d02) => {
                    if (!(await _0x32bc14["default"].urlExists("./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab"))) {
                      return void _0x932ff6(false);
                    }
                    const _0x34efd3 = await new Promise((_0x42bb21, _0x28da3a) => {
                      const _0x440e73 = new XMLHttpRequest();
                      _0x440e73.open("GET", "./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab", true);
                      _0x440e73.responseType = "arraybuffer";
                      _0x440e73.onload = _0x543af8 => {
                        _0x42bb21(_0x440e73.response);
                      };
                      _0x440e73.onerror = function (_0x225b38) {};
                      _0x440e73.send();
                    });
                    const _0x589d17 = new _0x1be86d["default"](_0x34efd3);
                    const _0x455a90 = _0x589d17.getInt32();
                    const _0xea2cf4 = _0x589d17.readArrayBuffer(_0x455a90);
                    const _0x360e32 = new Uint8Array(_0xea2cf4);
                    let _0x5b6e07 = '';
                    for (const _0x33c639 of _0x360e32) _0x5b6e07 += String.fromCharCode(~~_0x33c639);
                    const _0x5a9a48 = _0x2b55ac.AES.decrypt(_0x5b6e07, _0x1d3e50, {
                      "iv": _0x52ffd6,
                      "mode": _0x2b55ac.mode.CBC,
                      "padding": _0x2b55ac.pad.Pkcs7
                    }).toString(_0x2b55ac.enc.Utf8);
                    try {
                      const _0x49579b = JSON.parse(_0x5a9a48);
                      const _0x1e67fa = _0x49579b[_0x13a24c.BundleType.PNG];
                      const _0x4101f5 = [];
                      for (const _0x37d3e3 of _0x1e67fa) _0x4101f5.push(this.createBundle("./raw-assets/" + _0x37d3e3));
                      const _0x4de325 = _0x49579b[_0x13a24c.BundleType.PLFB];
                      for (const _0x4a8b5e of _0x4de325) _0x4101f5.push(this.createBundle("./raw-assets/" + _0x4a8b5e));
                      const _0xfe7f52 = _0x49579b[_0x13a24c.BundleType.PLF];
                      for (const _0x210ca8 of _0xfe7f52) _0x4101f5.push(this.createBundle("./raw-assets/" + _0x210ca8));
                      await Promise.all(_0x4101f5);
                      await this.createBundle("./raw-assets/" + _0x49579b[_0x13a24c.BundleType.SCRIPT][0x0]);
                      _0x932ff6(true);
                    } catch (_0x5398b6) {
                      _0x932ff6(false);
                    }
                  })) {
                    return;
                  }
                  const _0x48b8e9 = Object.values(_0x13a24c.BundleType).filter(_0x563f4c => "number" == typeof _0x563f4c);
                  for (const _0xba0bc7 of _0x48b8e9) {
                    if (_0xba0bc7 == _0x13a24c.BundleType.SCRIPT || _0xba0bc7 == _0x13a24c.BundleType.SCRIPT_YIV || _0xba0bc7 == _0x13a24c.BundleType.PLF) {
                      continue;
                    }
                    const _0x260826 = _0xba0bc7 + ".bundle";
                    if (await _0x32bc14["default"].urlExists(_0x260826)) {
                      await this.createBundle(_0x260826);
                    }
                  }
                  const _0x1ee6cf = _0x13a24c.BundleType.SCRIPT + ".bundle";
                  if (await _0x32bc14["default"].urlExists(_0x1ee6cf)) {
                    await this.createBundle(_0x1ee6cf);
                  }
                  const _0x322786 = _0x13a24c.BundleType.SCRIPT_YIV + ".bundle";
                  if (await _0x32bc14["default"].urlExists(_0x322786)) {
                    await this.createBundle(_0x322786);
                  }
                }
                ["createBundle"](_0x40a2a2) {
                  return new Promise((_0x360d68, _0x5231d4) => {
                    const _0x44eaa8 = new XMLHttpRequest();
                    _0x44eaa8.open("GET", _0x40a2a2, true);
                    _0x44eaa8.responseType = "arraybuffer";
                    _0x44eaa8.onload = _0x59dfee => {
                      this.onLoaded(() => {
                        _0x360d68();
                      }, _0x44eaa8.response);
                    };
                    _0x44eaa8.onerror = function (_0x380048) {};
                    _0x44eaa8.send();
                  });
                }
                ["load"](_0x44b37f) {
                  this.initialization();
                  if ("function" == typeof _0x44b37f) {
                    _0x44b37f;
                    _0x44b37f = "bgm.mp3";
                  }
                  if (!('' != _0x44b37f && null != _0x44b37f)) {
                    _0x44b37f = "bgm.mp3";
                  }
                  const _0x243466 = new XMLHttpRequest();
                  _0x243466.open("GET", _0x44b37f, true);
                  _0x243466.responseType = "arraybuffer";
                  _0x243466.onload = _0x29d8e0 => {
                    this.onLoaded(_0x44b37f, _0x243466.response);
                  };
                  _0x243466.onerror = function (_0x19d7ba) {};
                  _0x243466.send();
                }
                ["onLoaded"](_0x463806, _0x1d0e9c) {
                  const _0x3c3f24 = new _0x1be86d["default"](_0x1d0e9c);
                  let _0x28079d;
                  let _0x3af490;
                  let _0x4decc4;
                  switch (_0x3c3f24.getInt16()) {
                    case _0x13a24c.BundleType.PLFB:
                      {
                        const _0x414872 = _0x3c3f24.getInt32();
                        for (let _0x27912b = 0x0; _0x27912b < _0x414872; _0x27912b++) {
                          _0x3af490 = _0x3c3f24.getUTFString();
                          _0x28079d = _0x3c3f24.getInt32();
                          _0x4decc4 = _0x3c3f24.readArrayBuffer(_0x28079d);
                          if (Laya.Loader) {
                            Laya.Loader.preLoadedMap[Laya.URL.formatURL(_0x3af490)] = _0x4decc4;
                          }
                        }
                        if (_0x463806) {
                          _0x463806();
                        }
                      }
                      break;
                    case _0x13a24c.BundleType.PLF:
                      {
                        const _0x5fafb1 = _0x3c3f24.getInt32();
                        const _0x286fc7 = _0x3c3f24.readArrayBuffer(_0x5fafb1);
                        const _0x857f57 = new Uint8Array(_0x286fc7);
                        let _0x472b12 = '';
                        for (const _0x3b4591 of _0x857f57) _0x472b12 += String.fromCharCode(~~_0x3b4591);
                        const _0x3f1066 = _0x2b55ac.AES.decrypt(_0x472b12, _0x1d3e50, {
                          "iv": _0x52ffd6,
                          "mode": _0x2b55ac.mode.CBC,
                          "padding": _0x2b55ac.pad.Pkcs7
                        }).toString(_0x2b55ac.enc.Utf8);
                        const _0x3d61a7 = JSON.parse(_0x3f1066);
                        for (const [_0x24b80a, _0x19806f] of Object.entries(_0x3d61a7)) if (Laya.Loader) {
                          Laya.Loader.preLoadedMap[Laya.URL.formatURL(_0x24b80a)] = _0x19806f;
                        }
                        if (_0x463806) {
                          _0x463806();
                        }
                      }
                      break;
                    case _0x13a24c.BundleType.PNG:
                      {
                        _0x3c3f24.getUTFString();
                        const _0x453fb1 = _0x3c3f24.getInt32();
                        _0x3c3f24.getUTFString();
                        const _0x5a7386 = _0x162719["default"].manifest;
                        const _0x25e96a = Object.entries(_0x5a7386);
                        const _0x5aa3ad = {};
                        for (const _0x3ddcda of _0x25e96a) _0x5aa3ad[_0x3ddcda[0x1]] = _0x3ddcda[0x0];
                        for (let _0x9b9629 = 0x0; _0x9b9629 < _0x453fb1; _0x9b9629++) {
                          _0x3af490 = _0x3c3f24.getUTFString();
                          _0x28079d = _0x3c3f24.getInt32();
                          _0x4decc4 = _0x3c3f24.readArrayBuffer(_0x28079d);
                          var _0x4c5870 = new Blob([_0x4decc4], {
                            "type": "image/png"
                          });
                          const _0x4ffea7 = window.URL.createObjectURL(_0x4c5870);
                          if (_0x5aa3ad[_0x3af490]) {
                            _0x5a7386[_0x5aa3ad[_0x3af490]] = _0x4ffea7;
                          } else {
                            _0x5a7386[_0x3af490] = _0x4ffea7;
                          }
                        }
                        _0x162719["default"].formatURL();
                        if (_0x463806) {
                          _0x463806();
                        }
                      }
                      break;
                    case _0x13a24c.BundleType.SCRIPT:
                      {
                        _0x3c3f24.getUTFString();
                        const _0x3be6c6 = _0x3c3f24.getUTFString();
                        const _0x409c44 = _0x2a63c7["default"][_0x3be6c6];
                        console.log("decode version ", _0x3be6c6);
                        if (_0x409c44) {
                          _0x409c44(_0x3c3f24);
                        } else {
                          console.log(_0x3be6c6, "not func");
                        }
                        _0x162719["default"].formatURL();
                        if (_0x463806) {
                          _0x463806();
                        }
                      }
                  }
                }
              };
            },
            0x77b: (_0x10fd46, _0x308783) => {
              'use strict';
  
              Object.defineProperty(_0x308783, "__esModule", {
                "value": true
              });
              class _0x10b274 {
                static ["getBasePath"]() {
                  if (Laya.URL._basePath && '' !== Laya.URL._basePath) {
                    return Laya.URL._basePath;
                  }
                  if (Laya.URL.basePath && '' !== Laya.URL.basePath) {
                    return Laya.URL.basePath;
                  }
                  const _0x3c342c = location.protocol + "//" + location.host + location.pathname;
                  var _0x1605f0 = _0x3c342c.lastIndexOf("/");
                  return _0x1605f0 > 0x0 ? _0x3c342c.substr(0x0, _0x1605f0 + 0x1) : '';
                }
                static ["formatURL"]() {
                  if (!this.formated) {
                    if (Laya.URL && Laya.URL.formatURL) {
                      this.formated = true;
                      Laya.URL.formatURL = function (_0x56619f) {
                        const _0x32fefd = _0x10b274.getBasePath();
                        if (!_0x56619f) {
                          return "null path";
                        }
                        if (_0x56619f.indexOf(":") > 0x0) {
                          return _0x56619f;
                        }
                        if (Laya.URL.exportSceneToJson) {
                          _0x56619f = Laya.URL.getAdptedFilePath(_0x56619f);
                        }
                        if (null != Laya.URL.customFormat) {
                          _0x56619f = Laya.URL.customFormat(_0x56619f);
                        }
                        var _0x615b7c = (_0x56619f = _0x10b274.customFormat(_0x56619f)).charAt(0x0);
                        if ("." === _0x615b7c) {
                          return Laya.URL._formatRelativePath(_0x32fefd + _0x56619f);
                        }
                        if ("~" === _0x615b7c) {
                          return Laya.URL.rootPath + _0x56619f.substring(0x1);
                        }
                        if ("d" === _0x615b7c) {
                          if (0x0 === _0x56619f.indexOf("data:image")) {
                            return _0x56619f;
                          }
                        } else {
                          if ("/" === _0x615b7c) {
                            return _0x56619f;
                          }
                          if ("b" === _0x615b7c && 0x0 === _0x56619f.indexOf("blob")) {
                            return _0x56619f;
                          }
                        }
                        return _0x32fefd + _0x56619f;
                      };
                    }
                  }
                }
                static ["customFormat"](_0xacf961) {
                  this.formatURL();
                  return _0x10b274.manifest[_0xacf961] ? _0x10b274.manifest[_0xacf961] : _0xacf961;
                }
              }
              _0x308783["default"] = _0x10b274;
              _0x10b274.manifest = {};
              _0x10b274.formated = false;
            },
            0x8f1: function (_0x439400, _0x52f036, _0x4d8872) {
              'use strict';
  
              var _0x33c62b = this && this.__createBinding || (Object.create ? function (_0x5767ff, _0x2d1d49, _0x41d6c7) {
                if (undefined === _0x41d6c7) {
                  _0x41d6c7;
                }
                var _0x7a870b = Object.getOwnPropertyDescriptor(_0x2d1d49, _0x41d6c7);
                if (!(_0x7a870b && !("get" in _0x7a870b ? !_0x2d1d49.__esModule : _0x7a870b.writable || _0x7a870b.configurable))) {
                  _0x7a870b = {
                    "enumerable": true,
                    "get": function () {
                      return _0x2d1d49[_0x41d6c7];
                    }
                  };
                }
                Object.defineProperty(_0x5767ff, _0x41d6c7, _0x7a870b);
              } : function (_0x3bf70a, _0x7e77a, _0x21c5ad) {
                if (undefined === _0x21c5ad) {
                  _0x21c5ad;
                }
                _0x3bf70a[_0x21c5ad] = _0x7e77a[_0x21c5ad];
              });
              var _0x3dd822 = this && this.__setModuleDefault || (Object.create ? function (_0x28f7d3, _0x341084) {
                Object.defineProperty(_0x28f7d3, "default", {
                  "enumerable": true,
                  "value": _0x341084
                });
              } : function (_0x10a3bc, _0x207cb0) {
                _0x10a3bc["default"] = _0x207cb0;
              });
              var _0xa309b2 = this && this.__importStar || function (_0x316403) {
                if (_0x316403 && _0x316403.__esModule) {
                  return _0x316403;
                }
                var _0x3180aa = {};
                if (null != _0x316403) {
                  for (var _0x4adaa7 in _0x316403) if ("default" !== _0x4adaa7 && Object.prototype.hasOwnProperty.call(_0x316403, _0x4adaa7)) {
                    _0x33c62b(_0x3180aa, _0x316403, _0x4adaa7);
                  }
                }
                _0x3dd822(_0x3180aa, _0x316403);
                return _0x3180aa;
              };
              var _0x3dfd4a = this && this.__importDefault || function (_0x49a50a) {
                return _0x49a50a && _0x49a50a.__esModule ? _0x49a50a : {
                  "default": _0x49a50a
                };
              };
              Object.defineProperty(_0x52f036, "__esModule", {
                "value": true
              });
              const _0x56fd64 = _0xa309b2(_0x4d8872(0x1bd));
              const _0x39899e = _0x3dfd4a(_0x4d8872(0x1ba2));
              const _0x203852 = _0x3dfd4a(_0x4d8872(0x190d));
              const _0x30188a = _0x4d8872(0x25e0);
              const _0x17be1c = _0x3dfd4a(_0x4d8872(0x1866));
              const _0x241764 = _0x3dfd4a(_0x4d8872(0x1c89));
              const _0x2dc1d5 = _0x56fd64.enc.Utf8.parse("53D8DBC5DIK3436A");
              const _0x3b848c = _0x56fd64.enc.Utf8.parse("KI5JL2SKE9883365");
              _0x52f036["default"] = class {
                constructor() {
                  this.initializationed = false;
                  this.inited = false;
                }
                ["initialization"]() {
                  if (!this.initializationed) {
                    this.initializationed = true;
                  }
                }
                async ["init"]() {
                  if (!this.inited) {
                    this.inited = true;
                    this.initialization();
                    await new Promise(async (_0x3408a3, _0x414f50) => {
                      if (!(await _0x203852["default"].urlExists("./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab"))) {
                        return void _0x3408a3(false);
                      }
                      const _0x2356f9 = await new Promise((_0x564f0b, _0x4327b7) => {
                        const _0xe74ce6 = new XMLHttpRequest();
                        _0xe74ce6.open("GET", "./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab", true);
                        _0xe74ce6.responseType = "arraybuffer";
                        _0xe74ce6.onload = _0x8f819e => {
                          _0x564f0b(_0xe74ce6.response);
                        };
                        _0xe74ce6.onerror = function (_0x5e7668) {};
                        _0xe74ce6.send();
                      });
                      const _0x12679d = new _0x17be1c["default"](_0x2356f9);
                      const _0x26d7a6 = _0x12679d.getInt32();
                      const _0x5cc2a6 = _0x12679d.readArrayBuffer(_0x26d7a6);
                      const _0x46a7e = new Uint8Array(_0x5cc2a6);
                      let _0x42a945 = '';
                      for (const _0x3bed96 of _0x46a7e) _0x42a945 += String.fromCharCode(~~_0x3bed96);
                      const _0x2d82bc = _0x56fd64.AES.decrypt(_0x42a945, _0x2dc1d5, {
                        "iv": _0x3b848c,
                        "mode": _0x56fd64.mode.CBC,
                        "padding": _0x56fd64.pad.Pkcs7
                      }).toString(_0x56fd64.enc.Utf8);
                      try {
                        const _0x4d2259 = JSON.parse(_0x2d82bc);
                        const _0x173683 = _0x4d2259[_0x30188a.BundleType.PNG];
                        const _0x59ae2a = [];
                        for (const _0xc71928 of _0x173683) _0x59ae2a.push(this.createBundle("./raw-assets/" + _0xc71928));
                        const _0x23b735 = _0x4d2259[_0x30188a.BundleType.PLFB];
                        for (const _0xe6256a of _0x23b735) _0x59ae2a.push(this.createBundle("./raw-assets/" + _0xe6256a));
                        const _0x4cae2c = _0x4d2259[_0x30188a.BundleType.PLF];
                        for (const _0x18b041 of _0x4cae2c) _0x59ae2a.push(this.createBundle("./raw-assets/" + _0x18b041));
                        await Promise.all(_0x59ae2a);
                        await this.createBundle("./raw-assets/" + _0x4d2259[_0x30188a.BundleType.SCRIPT][0x0]);
                        _0x3408a3(true);
                      } catch (_0x6e6da9) {
                        _0x3408a3(false);
                      }
                    });
                  }
                }
                ["createBundle"](_0x452572) {
                  return new Promise((_0xac54f, _0x3de4f1) => {
                    const _0x4f2a32 = new XMLHttpRequest();
                    _0x4f2a32.open("GET", _0x452572, true);
                    _0x4f2a32.responseType = "arraybuffer";
                    _0x4f2a32.onload = _0x2ef68c => {
                      this.onLoaded(() => {
                        _0xac54f();
                      }, _0x4f2a32.response);
                    };
                    _0x4f2a32.onerror = function (_0x45e31d) {};
                    _0x4f2a32.send();
                  });
                }
                ["load"](_0x4fa94b) {
                  this.initialization();
                  if ("function" == typeof _0x4fa94b) {
                    _0x4fa94b;
                    _0x4fa94b = "bgm.mp3";
                  }
                  if (!('' != _0x4fa94b && null != _0x4fa94b)) {
                    _0x4fa94b = "bgm.mp3";
                  }
                  const _0x856db8 = new XMLHttpRequest();
                  _0x856db8.open("GET", _0x4fa94b, true);
                  _0x856db8.responseType = "arraybuffer";
                  _0x856db8.onload = _0x4d0349 => {
                    this.onLoaded(_0x4fa94b, _0x856db8.response);
                  };
                  _0x856db8.onerror = function (_0x47370e) {};
                  _0x856db8.send();
                }
                ["onLoaded"](_0x5c3d4f, _0x17be2b) {
                  const _0x334a42 = new _0x17be1c["default"](_0x17be2b);
                  let _0x3a9a38;
                  let _0x2d9e9c;
                  let _0x41ecc4;
                  switch (_0x334a42.getInt16()) {
                    case _0x30188a.BundleType.PLFB:
                      if (_0x5c3d4f) {
                        _0x5c3d4f();
                      }
                      break;
                    case _0x30188a.BundleType.PLF:
                      {
                        const _0x211482 = _0x334a42.getInt32();
                        const _0x4447c9 = _0x334a42.readArrayBuffer(_0x211482);
                        const _0x2cfc26 = new Uint8Array(_0x4447c9);
                        let _0x6d0011 = '';
                        for (const _0x2d4fb7 of _0x2cfc26) _0x6d0011 += String.fromCharCode(~~_0x2d4fb7);
                        const _0x206854 = _0x56fd64.AES.decrypt(_0x6d0011, _0x2dc1d5, {
                          "iv": _0x3b848c,
                          "mode": _0x56fd64.mode.CBC,
                          "padding": _0x56fd64.pad.Pkcs7
                        }).toString(_0x56fd64.enc.Utf8);
                        const _0x371ba7 = JSON.parse(_0x206854);
                        for (const [_0x494f98, _0x148b37] of Object.entries(_0x371ba7)) _0x241764["default"].jsondata[_0x494f98] = _0x148b37;
                        if (_0x5c3d4f) {
                          _0x5c3d4f();
                        }
                      }
                      break;
                    case _0x30188a.BundleType.PNG:
                      {
                        _0x334a42.getUTFString();
                        const _0x2ca584 = _0x334a42.getInt32();
                        _0x334a42.getUTFString();
                        const _0x54344d = _0x241764["default"].manifest;
                        const _0x275e9f = Object.entries(_0x54344d);
                        const _0x57b0ef = {};
                        for (const _0x2702c6 of _0x275e9f) _0x57b0ef[_0x2702c6[0x1]] = _0x2702c6[0x0];
                        for (let _0x39b8a1 = 0x0; _0x39b8a1 < _0x2ca584; _0x39b8a1++) {
                          _0x2d9e9c = _0x334a42.getUTFString();
                          _0x3a9a38 = _0x334a42.getInt32();
                          _0x41ecc4 = _0x334a42.readArrayBuffer(_0x3a9a38);
                          var _0x49412b = new Blob([_0x41ecc4], {
                            "type": "image/png"
                          });
                          const _0x3e229c = window.URL.createObjectURL(_0x49412b);
                          if (_0x57b0ef[_0x2d9e9c]) {
                            _0x54344d[_0x57b0ef[_0x2d9e9c]] = _0x3e229c;
                          } else {
                            _0x54344d[_0x2d9e9c] = _0x3e229c;
                          }
                        }
                        _0x241764["default"].formatURL();
                        if (_0x5c3d4f) {
                          _0x5c3d4f();
                        }
                      }
                      break;
                    case _0x30188a.BundleType.SCRIPT:
                      {
                        _0x334a42.getUTFString();
                        const _0x4e2ab7 = _0x334a42.getUTFString();
                        const _0x297a8f = _0x39899e["default"][_0x4e2ab7];
                        console.log("decode version ", _0x4e2ab7);
                        if (_0x297a8f) {
                          _0x297a8f(_0x334a42);
                        } else {
                          console.log(_0x4e2ab7, "not func");
                        }
                        _0x241764["default"].formatURL();
                        if (_0x5c3d4f) {
                          _0x5c3d4f();
                        }
                      }
                  }
                }
              };
            },
            0x1c89: (_0x3d0dab, _0xfc68a) => {
              'use strict';
  
              Object.defineProperty(_0xfc68a, "__esModule", {
                "value": true
              });
              class _0x377b22 {
                static ["formatURL"]() {
                  if (!this.formated && (this.formated = true, cc.loader && cc.loader.downloader)) {
                    if (cc.loader.downloader.extMap) {
                      const _0xede237 = cc.loader.downloader.extMap.json;
                      cc.loader.downloader.extMap.json = function (_0x1d6ec9, _0x595afb) {
                        if (_0x377b22.jsondata[_0x1d6ec9.url]) {
                          _0x595afb(null, JSON.stringify(_0x377b22.jsondata[_0x1d6ec9.url]));
                        } else {
                          _0xede237(...arguments);
                        }
                      };
                      const _0x238240 = cc.loader.downloader.extMap.png;
                      cc.loader.downloader.extMap.png = function (_0x527c72, _0x37e4dd, _0x1c381d, _0x2e64f3) {
                        if (_0x377b22.manifest[_0x527c72.url]) {
                          _0x527c72.url = _0x377b22.manifest[_0x527c72.url];
                        }
                        _0x238240(...arguments);
                      };
                    } else {
                      if (cc.loader.downloader._downloaders) {
                        const _0x4b7d5c = cc.loader.downloader._downloaders[".json"];
                        cc.loader.downloader._downloaders[".json"] = function (_0x5db20d, _0xc1d1ec, _0x11eadd) {
                          if (_0x377b22.jsondata[_0x5db20d]) {
                            _0x11eadd(null, JSON.parse(JSON.stringify(_0x377b22.jsondata[_0x5db20d])));
                          } else {
                            _0x4b7d5c(...arguments);
                          }
                        };
                        const _0x25a3de = cc.loader.downloader._downloaders[".png"];
                        cc.loader.downloader._downloaders[".png"] = function (_0x38a5e0, _0x14278a, _0x46d148) {
                          if (_0x377b22.manifest[_0x38a5e0]) {
                            _0x38a5e0 = _0x377b22.manifest[_0x38a5e0];
                          }
                          _0x25a3de(_0x38a5e0, _0x14278a, _0x46d148);
                        };
                      }
                    }
                  }
                }
              }
              _0xfc68a["default"] = _0x377b22;
              _0x377b22.manifest = {};
              _0x377b22.jsondata = {};
              _0x377b22.formated = false;
            },
            0x25e0: (_0x1dc8da, _0x3ca39a) => {
              'use strict';
  
              var _0xb0b203;
              Object.defineProperty(_0x3ca39a, "__esModule", {
                "value": true
              });
              _0x3ca39a.BundleType = undefined;
              (_0xb0b203 = _0x3ca39a.BundleType || (_0x3ca39a.BundleType = {}))[_0xb0b203.PNG = 0x3e8] = "PNG";
              _0xb0b203[_0xb0b203.SCRIPT = 0x3e9] = "SCRIPT";
              _0xb0b203[_0xb0b203.SCRIPT_YIV = 0x3ea] = "SCRIPT_YIV";
              _0xb0b203[_0xb0b203.PLFB = 0x3eb] = "PLFB";
              _0xb0b203[_0xb0b203.PLF = 0x3ec] = "PLF";
            },
            0x1037: function (_0x23d36a, _0x4bb9f1, _0x4e3c4b) {
              'use strict';
  
              var _0x3b669a = this && this.__createBinding || (Object.create ? function (_0x5278d8, _0x1bb428, _0x375ddb) {
                if (undefined === _0x375ddb) {
                  _0x375ddb;
                }
                var _0x4d41c1 = Object.getOwnPropertyDescriptor(_0x1bb428, _0x375ddb);
                if (!(_0x4d41c1 && !("get" in _0x4d41c1 ? !_0x1bb428.__esModule : _0x4d41c1.writable || _0x4d41c1.configurable))) {
                  _0x4d41c1 = {
                    "enumerable": true,
                    "get": function () {
                      return _0x1bb428[_0x375ddb];
                    }
                  };
                }
                Object.defineProperty(_0x5278d8, _0x375ddb, _0x4d41c1);
              } : function (_0x4c89e9, _0x122c5c, _0x31e6d3) {
                if (undefined === _0x31e6d3) {
                  _0x31e6d3;
                }
                _0x4c89e9[_0x31e6d3] = _0x122c5c[_0x31e6d3];
              });
              var _0x118312 = this && this.__setModuleDefault || (Object.create ? function (_0x4de886, _0x46e469) {
                Object.defineProperty(_0x4de886, "default", {
                  "enumerable": true,
                  "value": _0x46e469
                });
              } : function (_0x490b1e, _0x4d23c8) {
                _0x490b1e["default"] = _0x4d23c8;
              });
              var _0x440e74 = this && this.__importStar || function (_0x303525) {
                if (_0x303525 && _0x303525.__esModule) {
                  return _0x303525;
                }
                var _0x1b6276 = {};
                if (null != _0x303525) {
                  for (var _0x97499f in _0x303525) if ("default" !== _0x97499f && Object.prototype.hasOwnProperty.call(_0x303525, _0x97499f)) {
                    _0x3b669a(_0x1b6276, _0x303525, _0x97499f);
                  }
                }
                _0x118312(_0x1b6276, _0x303525);
                return _0x1b6276;
              };
              var _0x242db1 = this && this.__importDefault || function (_0x509cb8) {
                return _0x509cb8 && _0x509cb8.__esModule ? _0x509cb8 : {
                  "default": _0x509cb8
                };
              };
              Object.defineProperty(_0x4bb9f1, "__esModule", {
                "value": true
              });
              const _0x1b0e4f = _0x440e74(_0x4e3c4b(0x1bd));
              const _0x414037 = _0x242db1(_0x4e3c4b(0x1ba2));
              const _0x5c52ec = _0x242db1(_0x4e3c4b(0x190d));
              const _0x41054c = _0x4e3c4b(0x25e0);
              const _0x1bd539 = _0x242db1(_0x4e3c4b(0x1866));
              const _0x24dba9 = _0x242db1(_0x4e3c4b(0x119f));
              const _0x3237e8 = _0x1b0e4f.enc.Utf8.parse("53D8DBC5DIK3436A");
              const _0x4c346a = _0x1b0e4f.enc.Utf8.parse("KI5JL2SKE9883365");
              _0x4bb9f1["default"] = class {
                constructor() {
                  this.initializationed = false;
                  this.inited = false;
                }
                ["initialization"]() {
                  if (!this.initializationed) {
                    this.initializationed = true;
                  }
                }
                async ["init"]() {
                  if (this.inited) {
                    return;
                  }
                  this.inited = true;
                  this.initialization();
                  if (await new Promise(async (_0x55dc1a, _0x4a1cd3) => {
                    if (!(await _0x5c52ec["default"].urlExists("./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab"))) {
                      return void _0x55dc1a(false);
                    }
                    const _0x385cd7 = await new Promise((_0x267ad0, _0x340b26) => {
                      const _0x4800f8 = new XMLHttpRequest();
                      _0x4800f8.open("GET", "./raw-assets/8dc1182c-6f45-44dd-964f-ed137ddb15eab", true);
                      _0x4800f8.responseType = "arraybuffer";
                      _0x4800f8.onload = _0x55b729 => {
                        _0x267ad0(_0x4800f8.response);
                      };
                      _0x4800f8.onerror = function (_0x5e9564) {};
                      _0x4800f8.send();
                    });
                    const _0x24c32b = new _0x1bd539["default"](_0x385cd7);
                    const _0x371294 = _0x24c32b.getInt32();
                    const _0x1599b = _0x24c32b.readArrayBuffer(_0x371294);
                    const _0x2b3bfc = new Uint8Array(_0x1599b);
                    let _0x5ae40 = '';
                    for (const _0x5c91a1 of _0x2b3bfc) _0x5ae40 += String.fromCharCode(~~_0x5c91a1);
                    const _0x3f2e8a = _0x1b0e4f.AES.decrypt(_0x5ae40, _0x3237e8, {
                      "iv": _0x4c346a,
                      "mode": _0x1b0e4f.mode.CBC,
                      "padding": _0x1b0e4f.pad.Pkcs7
                    }).toString(_0x1b0e4f.enc.Utf8);
                    try {
                      const _0x4be71f = JSON.parse(_0x3f2e8a);
                      const _0x1de66d = _0x4be71f[_0x41054c.BundleType.PNG];
                      const _0xdef6fd = [];
                      for (const _0xe27d35 of _0x1de66d) _0xdef6fd.push(this.createBundle("./raw-assets/" + _0xe27d35));
                      const _0x3a9084 = _0x4be71f[_0x41054c.BundleType.PLFB];
                      for (const _0x1f50c3 of _0x3a9084) _0xdef6fd.push(this.createBundle("./raw-assets/" + _0x1f50c3));
                      const _0x75273d = _0x4be71f[_0x41054c.BundleType.PLF];
                      for (const _0x155669 of _0x75273d) _0xdef6fd.push(this.createBundle("./raw-assets/" + _0x155669));
                      await Promise.all(_0xdef6fd);
                      await this.createBundle("./raw-assets/" + _0x4be71f[_0x41054c.BundleType.SCRIPT][0x0]);
                      _0x55dc1a(true);
                    } catch (_0x2d5559) {
                      _0x55dc1a(false);
                    }
                  })) {
                    return;
                  }
                  const _0x6f36a8 = Object.values(_0x41054c.BundleType).filter(_0x48bd61 => "number" == typeof _0x48bd61);
                  for (const _0x13b699 of _0x6f36a8) {
                    if (_0x13b699 == _0x41054c.BundleType.SCRIPT || _0x13b699 == _0x41054c.BundleType.SCRIPT_YIV || _0x13b699 == _0x41054c.BundleType.PLF) {
                      continue;
                    }
                    const _0x26517a = _0x13b699 + ".bundle";
                    if (await _0x5c52ec["default"].urlExists(_0x26517a)) {
                      await this.createBundle(_0x26517a);
                    }
                  }
                  const _0x126f31 = _0x41054c.BundleType.SCRIPT + ".bundle";
                  if (await _0x5c52ec["default"].urlExists(_0x126f31)) {
                    await this.createBundle(_0x126f31);
                  }
                  const _0x5ceb48 = _0x41054c.BundleType.SCRIPT_YIV + ".bundle";
                  if (await _0x5c52ec["default"].urlExists(_0x5ceb48)) {
                    await this.createBundle(_0x5ceb48);
                  }
                }
                ["createBundle"](_0x219e63) {
                  return new Promise((_0x373c1f, _0x5a3c8e) => {
                    const _0x2d24cd = new XMLHttpRequest();
                    _0x2d24cd.open("GET", _0x219e63, true);
                    _0x2d24cd.responseType = "arraybuffer";
                    _0x2d24cd.onload = _0x3ba250 => {
                      this.onLoaded(() => {
                        _0x373c1f();
                      }, _0x2d24cd.response);
                    };
                    _0x2d24cd.onerror = function (_0x39bc2a) {};
                    _0x2d24cd.send();
                  });
                }
                ["load"](_0x4d636e) {
                  this.initialization();
                  if ("function" == typeof _0x4d636e) {
                    _0x4d636e;
                    _0x4d636e = "bgm.mp3";
                  }
                  if (!('' != _0x4d636e && null != _0x4d636e)) {
                    _0x4d636e = "bgm.mp3";
                  }
                  const _0x26342c = new XMLHttpRequest();
                  _0x26342c.open("GET", _0x4d636e, true);
                  _0x26342c.responseType = "arraybuffer";
                  _0x26342c.onload = _0x2957d5 => {
                    this.onLoaded(_0x4d636e, _0x26342c.response);
                  };
                  _0x26342c.onerror = function (_0x3aebd1) {};
                  _0x26342c.send();
                }
                ["onLoaded"](_0x4f51bd, _0x24e8b9) {
                  const _0x234631 = new _0x1bd539["default"](_0x24e8b9);
                  let _0x273bba;
                  let _0x45484c;
                  let _0x3deb2e;
                  switch (_0x234631.getInt16()) {
                    case _0x41054c.BundleType.PLFB:
                      if (_0x4f51bd) {
                        _0x4f51bd();
                      }
                      break;
                    case _0x41054c.BundleType.PLF:
                      {
                        const _0x5aad5c = _0x234631.getInt32();
                        const _0x100055 = _0x234631.readArrayBuffer(_0x5aad5c);
                        const _0x11b622 = new Uint8Array(_0x100055);
                        let _0x219a3d = '';
                        for (const _0x99ab97 of _0x11b622) _0x219a3d += String.fromCharCode(~~_0x99ab97);
                        const _0x112e96 = _0x1b0e4f.AES.decrypt(_0x219a3d, _0x3237e8, {
                          "iv": _0x4c346a,
                          "mode": _0x1b0e4f.mode.CBC,
                          "padding": _0x1b0e4f.pad.Pkcs7
                        }).toString(_0x1b0e4f.enc.Utf8);
                        const _0x2a62a6 = JSON.parse(_0x112e96);
                        for (const [_0x288eda, _0x19fa78] of Object.entries(_0x2a62a6)) _0x24dba9["default"].manifest[_0x288eda] = _0x19fa78;
                        if (_0x4f51bd) {
                          _0x4f51bd();
                        }
                      }
                      break;
                    case _0x41054c.BundleType.PNG:
                      {
                        _0x234631.getUTFString();
                        const _0x269933 = _0x234631.getInt32();
                        _0x234631.getUTFString();
                        const _0x497281 = _0x24dba9["default"].manifest;
                        const _0x3f8980 = Object.entries(_0x497281);
                        const _0x41d015 = {};
                        for (const _0xf3029a of _0x3f8980) _0x41d015[_0xf3029a[0x1]] = _0xf3029a[0x0];
                        for (let _0x24eae2 = 0x0; _0x24eae2 < _0x269933; _0x24eae2++) {
                          _0x45484c = _0x234631.getUTFString();
                          _0x273bba = _0x234631.getInt32();
                          _0x3deb2e = _0x234631.readArrayBuffer(_0x273bba);
                          var _0x4dffc8 = new Blob([_0x3deb2e], {
                            "type": "image/png"
                          });
                          const _0x1f0d48 = window.URL.createObjectURL(_0x4dffc8);
                          if (_0x41d015[_0x45484c]) {
                            _0x497281[_0x41d015[_0x45484c]] = _0x1f0d48;
                          } else {
                            _0x497281[_0x45484c] = _0x1f0d48;
                          }
                        }
                        _0x24dba9["default"].formatURL();
                        if (_0x4f51bd) {
                          _0x4f51bd();
                        }
                      }
                      break;
                    case _0x41054c.BundleType.SCRIPT:
                      {
                        _0x234631.getUTFString();
                        const _0xc9db30 = _0x234631.getUTFString();
                        const _0x3aad75 = _0x414037["default"][_0xc9db30];
                        console.log("decode version ", _0xc9db30);
                        if (_0x3aad75) {
                          _0x3aad75(_0x234631);
                        } else {
                          console.log(_0xc9db30, "not func");
                        }
                        _0x24dba9["default"].formatURL();
                        if (_0x4f51bd) {
                          _0x4f51bd();
                        }
                      }
                  }
                }
              };
            },
            0x119f: (_0x208b9c, _0x16f682) => {
              'use strict';
  
              Object.defineProperty(_0x16f682, "__esModule", {
                "value": true
              });
              class _0x27aae5 {
                static ["formatURL"]() {
                  if (!this.formated) {
                    this.formated = true;
                    Phaser.Loader.FileTypesManager.register("image", function (_0x1ad4a0, _0x18aff8, _0x1dc865) {
                      const _0x14fc43 = Phaser.Loader.FileTypes.ImageFile;
                      if (Array.isArray(_0x1ad4a0)) {
                        for (var _0xeb87 = 0x0; _0xeb87 < _0x1ad4a0.length; _0xeb87++) {
                          this.addFile(new _0x14fc43(this, _0x1ad4a0[_0xeb87]));
                        }
                      } else {
                        if (_0x27aae5.manifest[_0x18aff8]) {
                          _0x18aff8 = _0x27aae5.manifest[_0x18aff8];
                        }
                        this.addFile(new _0x14fc43(this, _0x1ad4a0, _0x18aff8, _0x1dc865));
                      }
                      return this;
                    });
                  }
                }
              }
              _0x16f682["default"] = _0x27aae5;
              _0x27aae5.manifest = {};
              _0x27aae5.formated = false;
            },
            0x1866: function (_0xf33f40, _0x4a6aef, _0x3809c1) {
              'use strict';
  
              var _0x36c8f1 = this && this.__importDefault || function (_0x2cf34c) {
                return _0x2cf34c && _0x2cf34c.__esModule ? _0x2cf34c : {
                  "default": _0x2cf34c
                };
              };
              Object.defineProperty(_0x4a6aef, "__esModule", {
                "value": true
              });
              const _0x3c8976 = _0x36c8f1(_0x3809c1(0xe1e));
              class _0xc5c0c {
                constructor(_0x3b0bce = null) {
                  this._xd_ = true;
                  this._allocated_ = 0x8;
                  this._pos_ = 0x0;
                  this._length = 0x0;
                  if (_0x3b0bce) {
                    this._u8d_ = new Uint8Array(_0x3b0bce);
                    this._d_ = new DataView(this._u8d_.buffer);
                    this._length = this._d_.byteLength;
                  } else {
                    this._resizeBuffer(this._allocated_);
                  }
                }
                static ["getSystemEndian"]() {
                  if (!_0xc5c0c._sysEndian) {
                    var _0x5a95e7 = new ArrayBuffer(0x2);
                    new DataView(_0x5a95e7).setInt16(0x0, 0x100, true);
                    _0xc5c0c._sysEndian = 0x100 === new Int16Array(_0x5a95e7)[0x0] ? _0xc5c0c.LITTLE_ENDIAN : _0xc5c0c.BIG_ENDIAN;
                  }
                  return _0xc5c0c._sysEndian;
                }
                get ["buffer"]() {
                  var _0x40b444 = this._d_.buffer;
                  return _0x40b444.byteLength === this._length ? _0x40b444 : _0x40b444.slice(0x0, this._length);
                }
                get ["endian"]() {
                  return this._xd_ ? _0xc5c0c.LITTLE_ENDIAN : _0xc5c0c.BIG_ENDIAN;
                }
                set ["endian"](_0xe979c9) {
                  this._xd_ = _0xe979c9 === _0xc5c0c.LITTLE_ENDIAN;
                }
                set ["length"](_0x4b3674) {
                  if (this._allocated_ < _0x4b3674) {
                    this._resizeBuffer(this._allocated_ = Math.floor(Math.max(_0x4b3674, 0x2 * this._allocated_)));
                  } else if (this._allocated_ > _0x4b3674) {
                    this._resizeBuffer(this._allocated_ = _0x4b3674);
                  }
                  this._length = _0x4b3674;
                }
                get ["length"]() {
                  return this._length;
                }
                ["_resizeBuffer"](_0x5c2b0a) {
                  try {
                    var _0x3127ab = new Uint8Array(_0x5c2b0a);
                    if (null != this._u8d_) {
                      if (this._u8d_.length <= _0x5c2b0a) {
                        _0x3127ab.set(this._u8d_);
                      } else {
                        _0x3127ab.set(this._u8d_.subarray(0x0, _0x5c2b0a));
                      }
                    }
                    this._u8d_ = _0x3127ab;
                    this._d_ = new DataView(_0x3127ab.buffer);
                  } catch (_0x4e5053) {
                    throw "Invalid typed array length:" + _0x5c2b0a;
                  }
                }
                ["getString"]() {
                  return this.readString();
                }
                ["readString"]() {
                  return this._rUTF(this.getUint16());
                }
                ["getFloat32Array"](_0x58ba46, _0x3f4e01) {
                  return this.readFloat32Array(_0x58ba46, _0x3f4e01);
                }
                ["readFloat32Array"](_0xd9b50b, _0x3d939c) {
                  var _0x49cf5e = _0xd9b50b + _0x3d939c;
                  _0x49cf5e = _0x49cf5e > this._length ? this._length : _0x49cf5e;
                  var _0x31761b = new Float32Array(this._d_.buffer.slice(_0xd9b50b, _0x49cf5e));
                  this._pos_ = _0x49cf5e;
                  return _0x31761b;
                }
                ["getUint8Array"](_0x26ca59, _0x81e7d4) {
                  return this.readUint8Array(_0x26ca59, _0x81e7d4);
                }
                ["readUint8Array"](_0x334bb7, _0x103b92) {
                  var _0x148166 = _0x334bb7 + _0x103b92;
                  _0x148166 = _0x148166 > this._length ? this._length : _0x148166;
                  var _0x4c8fb3 = new Uint8Array(this._d_.buffer.slice(_0x334bb7, _0x148166));
                  this._pos_ = _0x148166;
                  return _0x4c8fb3;
                }
                ["getInt16Array"](_0x5e0c60, _0x4701e2) {
                  return this.readInt16Array(_0x5e0c60, _0x4701e2);
                }
                ["readInt16Array"](_0x186446, _0xad12bc) {
                  var _0x38a9c2 = _0x186446 + _0xad12bc;
                  _0x38a9c2 = _0x38a9c2 > this._length ? this._length : _0x38a9c2;
                  var _0x1458e2 = new Int16Array(this._d_.buffer.slice(_0x186446, _0x38a9c2));
                  this._pos_ = _0x38a9c2;
                  return _0x1458e2;
                }
                ["getFloat32"]() {
                  return this.readFloat32();
                }
                ["readFloat32"]() {
                  var _0x918dc2 = this._d_.getFloat32(this._pos_, this._xd_);
                  this._pos_ += 0x4;
                  return _0x918dc2;
                }
                ["getFloat64"]() {
                  return this.readFloat64();
                }
                ["readFloat64"]() {
                  if (this._pos_ + 0x8 > this._length) {
                    throw "getFloat64 error - Out of bounds";
                  }
                  var _0x45f891 = this._d_.getFloat64(this._pos_, this._xd_);
                  this._pos_ += 0x8;
                  return _0x45f891;
                }
                ["writeFloat32"](_0x20d555) {
                  this._ensureWrite(this._pos_ + 0x4);
                  this._d_.setFloat32(this._pos_, _0x20d555, this._xd_);
                  this._pos_ += 0x4;
                }
                ["writeFloat64"](_0x1ecd48) {
                  this._ensureWrite(this._pos_ + 0x8);
                  this._d_.setFloat64(this._pos_, _0x1ecd48, this._xd_);
                  this._pos_ += 0x8;
                }
                ["getInt32"]() {
                  return this.readInt32();
                }
                ["readInt32"]() {
                  if (this._pos_ + 0x4 > this._length) {
                    throw "getInt32 error - Out of bounds";
                  }
                  var _0x8e461a = this._d_.getInt32(this._pos_, this._xd_);
                  this._pos_ += 0x4;
                  return _0x8e461a;
                }
                ["getUint32"]() {
                  return this.readUint32();
                }
                ["readUint32"]() {
                  if (this._pos_ + 0x4 > this._length) {
                    throw "getUint32 error - Out of bounds";
                  }
                  var _0x216f14 = this._d_.getUint32(this._pos_, this._xd_);
                  this._pos_ += 0x4;
                  return _0x216f14;
                }
                ["writeInt32"](_0x575425) {
                  this._ensureWrite(this._pos_ + 0x4);
                  this._d_.setInt32(this._pos_, _0x575425, this._xd_);
                  this._pos_ += 0x4;
                }
                ["writeUint32"](_0x152514) {
                  this._ensureWrite(this._pos_ + 0x4);
                  this._d_.setUint32(this._pos_, _0x152514, this._xd_);
                  this._pos_ += 0x4;
                }
                ["getInt16"]() {
                  return this.readInt16();
                }
                ["readInt16"]() {
                  this._pos_;
                  this._length;
                  var _0x181972 = this._d_.getInt16(this._pos_, this._xd_);
                  this._pos_ += 0x2;
                  return _0x181972;
                }
                ["getUint16"]() {
                  return this.readUint16();
                }
                ["readUint16"]() {
                  if (this._pos_ + 0x2 > this._length) {
                    throw "getUint16 error - Out of bounds";
                  }
                  var _0xf6068a = this._d_.getUint16(this._pos_, this._xd_);
                  this._pos_ += 0x2;
                  return _0xf6068a;
                }
                ["writeUint16"](_0x5d8c1) {
                  this._ensureWrite(this._pos_ + 0x2);
                  this._d_.setUint16(this._pos_, _0x5d8c1, this._xd_);
                  this._pos_ += 0x2;
                }
                ["writeInt16"](_0x568e6c) {
                  this._ensureWrite(this._pos_ + 0x2);
                  this._d_.setInt16(this._pos_, _0x568e6c, this._xd_);
                  this._pos_ += 0x2;
                }
                ["getUint8"]() {
                  return this.readUint8();
                }
                ["readUint8"]() {
                  if (this._pos_ + 0x1 > this._length) {
                    throw "getUint8 error - Out of bounds";
                  }
                  return this._u8d_[this._pos_++];
                }
                ["writeUint8"](_0x4e22f5) {
                  this._ensureWrite(this._pos_ + 0x1);
                  this._d_.setUint8(this._pos_, _0x4e22f5);
                  this._pos_++;
                }
                ["_getUInt8"](_0x4c2ef1) {
                  return this._readUInt8(_0x4c2ef1);
                }
                ["_readUInt8"](_0x5731be) {
                  return this._d_.getUint8(_0x5731be);
                }
                ["_getUint16"](_0x91465d) {
                  return this._readUint16(_0x91465d);
                }
                ["_readUint16"](_0x1f4418) {
                  return this._d_.getUint16(_0x1f4418, this._xd_);
                }
                ["_getMatrix"]() {
                  return this._readMatrix();
                }
                ["_readMatrix"]() {
                  return new _0x3c8976["default"](this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32(), this.getFloat32());
                }
                ["_rUTF"](_0x5a85fa) {
                  var _0x2ec743;
                  var _0x7c905a;
                  var _0xf1b4de = this._pos_ + _0x5a85fa;
                  var _0x1cc525 = String.fromCharCode;
                  var _0x43d6bb = this._u8d_;
                  var _0x32016d = [];
                  var _0x3b3b9f = 0x0;
                  for (_0x32016d.length = 0x3e8; this._pos_ < _0xf1b4de;) {
                    if ((_0x2ec743 = _0x43d6bb[this._pos_++]) < 0x80) {
                      if (0x0 != _0x2ec743) {
                        _0x32016d[_0x3b3b9f++] = _0x1cc525(_0x2ec743);
                      }
                    } else {
                      if (_0x2ec743 < 0xe0) {
                        _0x32016d[_0x3b3b9f++] = _0x1cc525((0x3f & _0x2ec743) << 0x6 | 0x7f & _0x43d6bb[this._pos_++]);
                      } else {
                        if (_0x2ec743 < 0xf0) {
                          _0x7c905a = _0x43d6bb[this._pos_++];
                          _0x32016d[_0x3b3b9f++] = _0x1cc525((0x1f & _0x2ec743) << 0xc | (0x7f & _0x7c905a) << 0x6 | 0x7f & _0x43d6bb[this._pos_++]);
                        } else {
                          const _0xa65072 = (0xf & _0x2ec743) << 0x12 | (0x7f & (_0x7c905a = _0x43d6bb[this._pos_++])) << 0xc | (0x7f & _0x43d6bb[this._pos_++]) << 0x6 | 0x7f & _0x43d6bb[this._pos_++];
                          if (_0xa65072 >= 0x10000) {
                            const _0x5c9afa = _0xa65072 - 0x10000;
                            const _0x364392 = 0xd800 | _0x5c9afa >> 0xa;
                            const _0x4b117c = 0xdc00 | 0x3ff & _0x5c9afa;
                            _0x32016d[_0x3b3b9f++] = _0x1cc525(_0x364392);
                            _0x32016d[_0x3b3b9f++] = _0x1cc525(_0x4b117c);
                          } else {
                            _0x32016d[_0x3b3b9f++] = _0x1cc525(_0xa65072);
                          }
                        }
                      }
                    }
                  }
                  _0x32016d.length = _0x3b3b9f;
                  return _0x32016d.join('');
                }
                ["getCustomString"](_0x256551) {
                  return this.readCustomString(_0x256551);
                }
                ["readCustomString"](_0x5bc52f) {
                  var _0x4dcee3;
                  var _0x1394ce = '';
                  var _0x2d929b = 0x0;
                  var _0x5aa289 = String.fromCharCode;
                  for (var _0x413705 = this._u8d_; _0x5bc52f > 0x0;) {
                    if ((_0x4dcee3 = _0x413705[this._pos_]) < 0x80) {
                      _0x1394ce += _0x5aa289(_0x4dcee3);
                      this._pos_++;
                      _0x5bc52f--;
                    } else {
                      _0x2d929b = _0x4dcee3 - 0x80;
                      this._pos_++;
                      for (_0x5bc52f -= _0x2d929b; _0x2d929b > 0x0;) {
                        _0x4dcee3 = _0x413705[this._pos_++];
                        _0x1394ce += _0x5aa289(_0x413705[this._pos_++] << 0x8 | _0x4dcee3);
                        _0x2d929b--;
                      }
                    }
                  }
                  return _0x1394ce;
                }
                get ["pos"]() {
                  return this._pos_;
                }
                set ["pos"](_0xa03920) {
                  this._pos_ = _0xa03920;
                }
                get ["bytesAvailable"]() {
                  return this._length - this._pos_;
                }
                ["clear"]() {
                  this._pos_ = 0x0;
                  this.length = 0x0;
                }
                ["__getBuffer"]() {
                  return this._d_.buffer;
                }
                ["writeUTFBytes"](_0x2e4b6d) {
                  var _0x1a1453 = 0x0;
                  for (var _0x46bf04 = (_0x2e4b6d += '').length; _0x1a1453 < _0x46bf04; _0x1a1453++) {
                    var _0x12ca44 = _0x2e4b6d.charCodeAt(_0x1a1453);
                    if (_0x12ca44 <= 0x7f) {
                      this.writeByte(_0x12ca44);
                    } else {
                      if (_0x12ca44 <= 0x7ff) {
                        this._ensureWrite(this._pos_ + 0x2);
                        this._u8d_.set([0xc0 | _0x12ca44 >> 0x6, 0x80 | 0x3f & _0x12ca44], this._pos_);
                        this._pos_ += 0x2;
                      } else {
                        if (_0x12ca44 >= 0xd800 && _0x12ca44 <= 0xdbff) {
                          _0x1a1453++;
                          const _0x368b51 = _0x2e4b6d.charCodeAt(_0x1a1453);
                          if (!Number.isNaN(_0x368b51) && _0x368b51 >= 0xdc00 && _0x368b51 <= 0xdfff) {
                            const _0x3158e7 = 0x40 + (0x3ff & _0x12ca44);
                            const _0x10f247 = 0x3ff & _0x368b51;
                            const _0x2b2eb0 = 0xf0 | _0x3158e7 >> 0x8 & 0x3f;
                            const _0x127522 = 0x80 | _0x3158e7 >> 0x2 & 0x3f;
                            const _0x38ae00 = 0x80 | (0x3 & _0x3158e7) << 0x4 | _0x10f247 >> 0x6 & 0xf;
                            const _0x195dd4 = 0x80 | 0x3f & _0x10f247;
                            this._ensureWrite(this._pos_ + 0x4);
                            this._u8d_.set([_0x2b2eb0, _0x127522, _0x38ae00, _0x195dd4], this._pos_);
                            this._pos_ += 0x4;
                          }
                        } else if (_0x12ca44 <= 0xffff) {
                          this._ensureWrite(this._pos_ + 0x3);
                          this._u8d_.set([0xe0 | _0x12ca44 >> 0xc, 0x80 | _0x12ca44 >> 0x6 & 0x3f, 0x80 | 0x3f & _0x12ca44], this._pos_);
                          this._pos_ += 0x3;
                        } else {
                          this._ensureWrite(this._pos_ + 0x4);
                          this._u8d_.set([0xf0 | _0x12ca44 >> 0x12, 0x80 | _0x12ca44 >> 0xc & 0x3f, 0x80 | _0x12ca44 >> 0x6 & 0x3f, 0x80 | 0x3f & _0x12ca44], this._pos_);
                          this._pos_ += 0x4;
                        }
                      }
                    }
                  }
                }
                ["writeUTFString"](_0xedd945) {
                  var _0x5cf6a5 = this.pos;
                  this.writeUint16(0x1);
                  this.writeUTFBytes(_0xedd945);
                  var _0x201e68 = this.pos - _0x5cf6a5 - 0x2;
                  this._d_.setUint16(_0x5cf6a5, _0x201e68, this._xd_);
                }
                ["readUTFString"]() {
                  return this.readUTFBytes(this.getUint16());
                }
                ["getUTFString"]() {
                  return this.readUTFString();
                }
                ["readUTFBytes"](_0x1c3909 = -0x1) {
                  if (0x0 === _0x1c3909) {
                    return '';
                  }
                  var _0x1bfa90 = this.bytesAvailable;
                  if (_0x1c3909 > _0x1bfa90) {
                    throw "readUTFBytes error - Out of bounds";
                  }
                  _0x1c3909 = _0x1c3909 > 0x0 ? _0x1c3909 : _0x1bfa90;
                  return this._rUTF(_0x1c3909);
                }
                ["getUTFBytes"](_0x2265e1 = -0x1) {
                  return this.readUTFBytes(_0x2265e1);
                }
                ["writeByte"](_0x6cff69) {
                  this._ensureWrite(this._pos_ + 0x1);
                  this._d_.setInt8(this._pos_, _0x6cff69);
                  this._pos_ += 0x1;
                }
                ["readByte"]() {
                  if (this._pos_ + 0x1 > this._length) {
                    throw "readByte error - Out of bounds";
                  }
                  return this._d_.getInt8(this._pos_++);
                }
                ["getByte"]() {
                  return this.readByte();
                }
                ["_ensureWrite"](_0x3cb968) {
                  if (this._length < _0x3cb968) {
                    this._length = _0x3cb968;
                  }
                  if (this._allocated_ < _0x3cb968) {
                    this.length = _0x3cb968;
                  }
                }
                ["writeArrayBuffer"](_0x8fceec, _0x5e9269 = 0x0, _0x1610d3 = 0x0) {
                  if (_0x5e9269 < 0x0 || _0x1610d3 < 0x0) {
                    throw "writeArrayBuffer error - Out of bounds";
                  }
                  if (0x0 == _0x1610d3) {
                    _0x1610d3 = _0x8fceec.byteLength - _0x5e9269;
                  }
                  this._ensureWrite(this._pos_ + _0x1610d3);
                  var _0x350086 = new Uint8Array(_0x8fceec);
                  this._u8d_.set(_0x350086.subarray(_0x5e9269, _0x5e9269 + _0x1610d3), this._pos_);
                  this._pos_ += _0x1610d3;
                }
                ["readArrayBuffer"](_0x52d993) {
                  var _0x45cdcb;
                  _0x45cdcb = this._u8d_.buffer.slice(this._pos_, this._pos_ + _0x52d993);
                  this._pos_ = this._pos_ + _0x52d993;
                  return _0x45cdcb;
                }
              }
              _0x4a6aef["default"] = _0xc5c0c;
              _0xc5c0c.BIG_ENDIAN = "bigEndian";
              _0xc5c0c.LITTLE_ENDIAN = "littleEndian";
              _0xc5c0c._sysEndian = null;
            },
            0xe1e: (_0x20eb64, _0x24191f) => {
              'use strict';
  
              Object.defineProperty(_0x24191f, "__esModule", {
                "value": true
              });
              class _0xbf1fce {
                constructor(_0x412f06 = 0x1, _0x57ead8 = 0x0, _0x6653af = 0x0, _0x34d916 = 0x1, _0x3887a1 = 0x0, _0x3c667c = 0x0, _0x575262 = 0x0) {
                  this._bTransform = false;
                  if (null != _0xbf1fce._createFun) {
                    return _0xbf1fce._createFun(_0x412f06, _0x57ead8, _0x6653af, _0x34d916, _0x3887a1, _0x3c667c, _0x575262);
                  }
                  this.a = _0x412f06;
                  this.b = _0x57ead8;
                  this.c = _0x6653af;
                  this.d = _0x34d916;
                  this.tx = _0x3887a1;
                  this.ty = _0x3c667c;
                  this._checkTransform();
                }
                ["identity"]() {
                  this.a = this.d = 0x1;
                  this.b = this.tx = this.ty = this.c = 0x0;
                  this._bTransform = false;
                  return this;
                }
                ["_checkTransform"]() {
                  return this._bTransform = 0x1 !== this.a || 0x0 !== this.b || 0x0 !== this.c || 0x1 !== this.d;
                }
                ["setTranslate"](_0x2f398c, _0x267cee) {
                  this.tx = _0x2f398c;
                  this.ty = _0x267cee;
                  return this;
                }
                ["translate"](_0x11ca79, _0x171a88) {
                  this.tx += _0x11ca79;
                  this.ty += _0x171a88;
                  return this;
                }
                ["scale"](_0x1b23fa, _0x291091) {
                  this.a *= _0x1b23fa;
                  this.d *= _0x291091;
                  this.c *= _0x1b23fa;
                  this.b *= _0x291091;
                  this.tx *= _0x1b23fa;
                  this.ty *= _0x291091;
                  this._bTransform = true;
                  return this;
                }
                ["rotate"](_0x5a16fa) {
                  var _0x2ccc4e = Math.cos(_0x5a16fa);
                  var _0x26b734 = Math.sin(_0x5a16fa);
                  var _0x4c9334 = this.a;
                  var _0x1a3f8d = this.c;
                  var _0x2872a7 = this.tx;
                  this.a = _0x4c9334 * _0x2ccc4e - this.b * _0x26b734;
                  this.b = _0x4c9334 * _0x26b734 + this.b * _0x2ccc4e;
                  this.c = _0x1a3f8d * _0x2ccc4e - this.d * _0x26b734;
                  this.d = _0x1a3f8d * _0x26b734 + this.d * _0x2ccc4e;
                  this.tx = _0x2872a7 * _0x2ccc4e - this.ty * _0x26b734;
                  this.ty = _0x2872a7 * _0x26b734 + this.ty * _0x2ccc4e;
                  this._bTransform = true;
                  return this;
                }
                ["skew"](_0x1e1c87, _0x30aca0) {
                  var _0x145700 = Math.tan(_0x1e1c87);
                  var _0x1bd443 = Math.tan(_0x30aca0);
                  var _0x679a8d = this.a;
                  var _0x2c7d5f = this.b;
                  this.a += _0x1bd443 * this.c;
                  this.b += _0x1bd443 * this.d;
                  this.c += _0x145700 * _0x679a8d;
                  this.d += _0x145700 * _0x2c7d5f;
                  return this;
                }
                ["invertTransformPoint"](_0x1eb13b) {
                  var _0x5e1343 = this.a;
                  var _0x352789 = this.b;
                  var _0x48c172 = this.c;
                  var _0x5255dc = this.d;
                  var _0x35e3e6 = this.tx;
                  var _0x3eaa28 = _0x5e1343 * _0x5255dc - _0x352789 * _0x48c172;
                  var _0x471c1e = _0x5255dc / _0x3eaa28;
                  var _0x2a6d8a = -_0x352789 / _0x3eaa28;
                  var _0x1024dd = -_0x48c172 / _0x3eaa28;
                  var _0x1df47b = _0x5e1343 / _0x3eaa28;
                  var _0x1a2409 = (_0x48c172 * this.ty - _0x5255dc * _0x35e3e6) / _0x3eaa28;
                  var _0x1070fc = -(_0x5e1343 * this.ty - _0x352789 * _0x35e3e6) / _0x3eaa28;
                  return _0x1eb13b.setTo(_0x471c1e * _0x1eb13b.x + _0x1024dd * _0x1eb13b.y + _0x1a2409, _0x2a6d8a * _0x1eb13b.x + _0x1df47b * _0x1eb13b.y + _0x1070fc);
                }
                ["transformPoint"](_0x5426da) {
                  return _0x5426da.setTo(this.a * _0x5426da.x + this.c * _0x5426da.y + this.tx, this.b * _0x5426da.x + this.d * _0x5426da.y + this.ty);
                }
                ["transformPointN"](_0x11dd77) {
                  return _0x11dd77.setTo(this.a * _0x11dd77.x + this.c * _0x11dd77.y, this.b * _0x11dd77.x + this.d * _0x11dd77.y);
                }
                ["getScaleX"]() {
                  return 0x0 === this.b ? this.a : Math.sqrt(this.a * this.a + this.b * this.b);
                }
                ["getScaleY"]() {
                  return 0x0 === this.c ? this.d : Math.sqrt(this.c * this.c + this.d * this.d);
                }
                ["invert"]() {
                  var _0x5630ad = this.a;
                  var _0x6aeae4 = this.b;
                  var _0x272e46 = this.c;
                  var _0xe1dc8f = this.d;
                  var _0x43a96c = this.tx;
                  var _0x5b16b5 = _0x5630ad * _0xe1dc8f - _0x6aeae4 * _0x272e46;
                  this.a = _0xe1dc8f / _0x5b16b5;
                  this.b = -_0x6aeae4 / _0x5b16b5;
                  this.c = -_0x272e46 / _0x5b16b5;
                  this.d = _0x5630ad / _0x5b16b5;
                  this.tx = (_0x272e46 * this.ty - _0xe1dc8f * _0x43a96c) / _0x5b16b5;
                  this.ty = -(_0x5630ad * this.ty - _0x6aeae4 * _0x43a96c) / _0x5b16b5;
                  return this;
                }
                ["setTo"](_0x4b2fbd, _0xb3da0, _0x553db0, _0x5f28ff, _0x68aca7, _0x40bc26) {
                  this.a = _0x4b2fbd;
                  this.b = _0xb3da0;
                  this.c = _0x553db0;
                  this.d = _0x5f28ff;
                  this.tx = _0x68aca7;
                  this.ty = _0x40bc26;
                  return this;
                }
                ["concat"](_0x507e2f) {
                  var _0x3201ce = this.a;
                  var _0x546ad4 = this.c;
                  var _0x1f7266 = this.tx;
                  this.a = _0x3201ce * _0x507e2f.a + this.b * _0x507e2f.c;
                  this.b = _0x3201ce * _0x507e2f.b + this.b * _0x507e2f.d;
                  this.c = _0x546ad4 * _0x507e2f.a + this.d * _0x507e2f.c;
                  this.d = _0x546ad4 * _0x507e2f.b + this.d * _0x507e2f.d;
                  this.tx = _0x1f7266 * _0x507e2f.a + this.ty * _0x507e2f.c + _0x507e2f.tx;
                  this.ty = _0x1f7266 * _0x507e2f.b + this.ty * _0x507e2f.d + _0x507e2f.ty;
                  return this;
                }
                static ["mul"](_0x2a1e74, _0x2f8738, _0x4e7d81) {
                  var _0x3af00e = _0x2a1e74.a;
                  var _0xbf5c52 = _0x2a1e74.b;
                  var _0x1fcc92 = _0x2a1e74.c;
                  var _0x40bd8 = _0x2a1e74.d;
                  var _0x13463f = _0x2a1e74.tx;
                  var _0x199e48 = _0x2a1e74.ty;
                  var _0x57b23a = _0x2f8738.a;
                  var _0x94ccb1 = _0x2f8738.b;
                  var _0x3e873e = _0x2f8738.c;
                  var _0x3799b1 = _0x2f8738.d;
                  var _0x5927a5 = _0x2f8738.tx;
                  var _0x37dea7 = _0x2f8738.ty;
                  if (0x0 !== _0x94ccb1 || 0x0 !== _0x3e873e) {
                    _0x4e7d81.a = _0x3af00e * _0x57b23a + _0xbf5c52 * _0x3e873e;
                    _0x4e7d81.b = _0x3af00e * _0x94ccb1 + _0xbf5c52 * _0x3799b1;
                    _0x4e7d81.c = _0x1fcc92 * _0x57b23a + _0x40bd8 * _0x3e873e;
                    _0x4e7d81.d = _0x1fcc92 * _0x94ccb1 + _0x40bd8 * _0x3799b1;
                    _0x4e7d81.tx = _0x57b23a * _0x13463f + _0x3e873e * _0x199e48 + _0x5927a5;
                    _0x4e7d81.ty = _0x94ccb1 * _0x13463f + _0x3799b1 * _0x199e48 + _0x37dea7;
                  } else {
                    _0x4e7d81.a = _0x3af00e * _0x57b23a;
                    _0x4e7d81.b = _0xbf5c52 * _0x3799b1;
                    _0x4e7d81.c = _0x1fcc92 * _0x57b23a;
                    _0x4e7d81.d = _0x40bd8 * _0x3799b1;
                    _0x4e7d81.tx = _0x57b23a * _0x13463f + _0x5927a5;
                    _0x4e7d81.ty = _0x3799b1 * _0x199e48 + _0x37dea7;
                  }
                  return _0x4e7d81;
                }
                static ["mul16"](_0x2cb7eb, _0x1962c9, _0x3e28cf) {
                  var _0x749a87 = _0x2cb7eb.a;
                  var _0x5b48f3 = _0x2cb7eb.b;
                  var _0x3ff2a1 = _0x2cb7eb.c;
                  var _0x20791e = _0x2cb7eb.d;
                  var _0x202319 = _0x2cb7eb.tx;
                  var _0x1b8a5c = _0x2cb7eb.ty;
                  var _0x457b2a = _0x1962c9.a;
                  var _0x4b2e1f = _0x1962c9.b;
                  var _0xbe7f43 = _0x1962c9.c;
                  var _0x4acd74 = _0x1962c9.d;
                  var _0x4b6ff9 = _0x1962c9.tx;
                  var _0x3a9a6f = _0x1962c9.ty;
                  if (0x0 !== _0x4b2e1f || 0x0 !== _0xbe7f43) {
                    _0x3e28cf[0x0] = _0x749a87 * _0x457b2a + _0x5b48f3 * _0xbe7f43;
                    _0x3e28cf[0x1] = _0x749a87 * _0x4b2e1f + _0x5b48f3 * _0x4acd74;
                    _0x3e28cf[0x4] = _0x3ff2a1 * _0x457b2a + _0x20791e * _0xbe7f43;
                    _0x3e28cf[0x5] = _0x3ff2a1 * _0x4b2e1f + _0x20791e * _0x4acd74;
                    _0x3e28cf[0xc] = _0x457b2a * _0x202319 + _0xbe7f43 * _0x1b8a5c + _0x4b6ff9;
                    _0x3e28cf[0xd] = _0x4b2e1f * _0x202319 + _0x4acd74 * _0x1b8a5c + _0x3a9a6f;
                  } else {
                    _0x3e28cf[0x0] = _0x749a87 * _0x457b2a;
                    _0x3e28cf[0x1] = _0x5b48f3 * _0x4acd74;
                    _0x3e28cf[0x4] = _0x3ff2a1 * _0x457b2a;
                    _0x3e28cf[0x5] = _0x20791e * _0x4acd74;
                    _0x3e28cf[0xc] = _0x457b2a * _0x202319 + _0x4b6ff9;
                    _0x3e28cf[0xd] = _0x4acd74 * _0x1b8a5c + _0x3a9a6f;
                  }
                  return _0x3e28cf;
                }
                ["scaleEx"](_0x22f78b, _0x2dd382) {
                  var _0x195016 = this.a;
                  var _0x44f85a = this.b;
                  var _0x21e7e9 = this.c;
                  var _0x7358bf = this.d;
                  if (0x0 !== _0x44f85a || 0x0 !== _0x21e7e9) {
                    this.a = _0x22f78b * _0x195016;
                    this.b = _0x22f78b * _0x44f85a;
                    this.c = _0x2dd382 * _0x21e7e9;
                    this.d = _0x2dd382 * _0x7358bf;
                  } else {
                    this.a = _0x22f78b * _0x195016;
                    this.b = 0x0 * _0x7358bf;
                    this.c = 0x0 * _0x195016;
                    this.d = _0x2dd382 * _0x7358bf;
                  }
                  this._bTransform = true;
                }
                ["rotateEx"](_0x368e16) {
                  var _0x95adc0 = Math.cos(_0x368e16);
                  var _0x463cf2 = Math.sin(_0x368e16);
                  var _0x3aae74 = this.a;
                  var _0x2d4b52 = this.b;
                  var _0x86b75d = this.c;
                  var _0x49a3a2 = this.d;
                  if (0x0 !== _0x2d4b52 || 0x0 !== _0x86b75d) {
                    this.a = _0x95adc0 * _0x3aae74 + _0x463cf2 * _0x86b75d;
                    this.b = _0x95adc0 * _0x2d4b52 + _0x463cf2 * _0x49a3a2;
                    this.c = -_0x463cf2 * _0x3aae74 + _0x95adc0 * _0x86b75d;
                    this.d = -_0x463cf2 * _0x2d4b52 + _0x95adc0 * _0x49a3a2;
                  } else {
                    this.a = _0x95adc0 * _0x3aae74;
                    this.b = _0x463cf2 * _0x49a3a2;
                    this.c = -_0x463cf2 * _0x3aae74;
                    this.d = _0x95adc0 * _0x49a3a2;
                  }
                  this._bTransform = true;
                }
                ["clone"]() {
                  var _0x124828 = _0xbf1fce.create();
                  _0x124828.a = this.a;
                  _0x124828.b = this.b;
                  _0x124828.c = this.c;
                  _0x124828.d = this.d;
                  _0x124828.tx = this.tx;
                  _0x124828.ty = this.ty;
                  _0x124828._bTransform = this._bTransform;
                  return _0x124828;
                }
                ["copyTo"](_0x3e7944) {
                  _0x3e7944.a = this.a;
                  _0x3e7944.b = this.b;
                  _0x3e7944.c = this.c;
                  _0x3e7944.d = this.d;
                  _0x3e7944.tx = this.tx;
                  _0x3e7944.ty = this.ty;
                  _0x3e7944._bTransform = this._bTransform;
                  return _0x3e7944;
                }
                ["toString"]() {
                  return this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.tx + "," + this.ty;
                }
                ["destroy"]() {
                  this.recover();
                }
                ["recover"]() {}
                static ["create"]() {
                  return new _0xbf1fce();
                }
              }
              _0x24191f["default"] = _0xbf1fce;
              _0xbf1fce.EMPTY = new _0xbf1fce();
              _0xbf1fce.TEMP = new _0xbf1fce();
              _0xbf1fce._createFun = null;
            },
            0x1ba2: function (_0x2a55f2, _0x461da4, _0x5b5701) {
              'use strict';
  
              var _0x13e912 = this && this.__createBinding || (Object.create ? function (_0x24f971, _0x2c395e, _0x414eec) {
                if (undefined === _0x414eec) {
                  _0x414eec;
                }
                var _0x1bcf99 = Object.getOwnPropertyDescriptor(_0x2c395e, _0x414eec);
                if (!(_0x1bcf99 && !("get" in _0x1bcf99 ? !_0x2c395e.__esModule : _0x1bcf99.writable || _0x1bcf99.configurable))) {
                  _0x1bcf99 = {
                    "enumerable": true,
                    "get": function () {
                      return _0x2c395e[_0x414eec];
                    }
                  };
                }
                Object.defineProperty(_0x24f971, _0x414eec, _0x1bcf99);
              } : function (_0x4acf0b, _0x167c88, _0x5a3d2b) {
                if (undefined === _0x5a3d2b) {
                  _0x5a3d2b;
                }
                _0x4acf0b[_0x5a3d2b] = _0x167c88[_0x5a3d2b];
              });
              var _0x12ff5b = this && this.__setModuleDefault || (Object.create ? function (_0x798252, _0x11b598) {
                Object.defineProperty(_0x798252, "default", {
                  "enumerable": true,
                  "value": _0x11b598
                });
              } : function (_0x25f6d6, _0x13c2ee) {
                _0x25f6d6["default"] = _0x13c2ee;
              });
              var _0x3d1706 = this && this.__importStar || function (_0x748141) {
                if (_0x748141 && _0x748141.__esModule) {
                  return _0x748141;
                }
                var _0x2df1ac = {};
                if (null != _0x748141) {
                  for (var _0x830bb0 in _0x748141) if ("default" !== _0x830bb0 && Object.prototype.hasOwnProperty.call(_0x748141, _0x830bb0)) {
                    _0x13e912(_0x2df1ac, _0x748141, _0x830bb0);
                  }
                }
                _0x12ff5b(_0x2df1ac, _0x748141);
                return _0x2df1ac;
              };
              var _0x5aeef9 = this && this.__importDefault || function (_0x96b375) {
                return _0x96b375 && _0x96b375.__esModule ? _0x96b375 : {
                  "default": _0x96b375
                };
              };
              Object.defineProperty(_0x461da4, "__esModule", {
                "value": true
              });
              const _0x5241a4 = _0x5aeef9(_0x5b5701(0x109));
              const _0x1b8a42 = _0x3d1706(_0x5b5701(0x1bd));
              const _0x53598a = _0x1b8a42.enc.Utf8.parse("53D8DBC5DIK3436A");
              const _0x8823fc = _0x1b8a42.enc.Utf8.parse("KI5JL2SKE9883365");
              function _0x38a8f3(_0x43ddf9) {
                _0x43ddf9.getInt32();
                _0x43ddf9.getInt32();
                _0x43ddf9.getInt16();
                _0x43ddf9.getInt16();
                _0x43ddf9.getUint8();
                const _0x1614a5 = _0x43ddf9.getInt32();
                const _0x561c93 = _0x43ddf9.readArrayBuffer(_0x1614a5);
                let _0x4bfa7f = '';
                const _0x55a158 = new Uint8Array(_0x561c93);
                for (const _0xe67eba of _0x55a158) _0x4bfa7f += String.fromCharCode(_0xe67eba);
                const _0x336847 = _0x4bfa7f.split(",");
                _0x336847.pop();
                let _0x5d400c = '';
                for (const _0x42b810 of _0x336847) _0x5d400c += String.fromCharCode(~~_0x42b810);
                eval.call(window, _0x5d400c);
              }
              function _0x108198(_0x5a2137) {
                _0x5a2137.getInt32();
                _0x5a2137.getInt32();
                _0x5a2137.getInt16();
                _0x5a2137.getInt16();
                _0x5a2137.getUint8();
                const _0x353e3f = _0x5a2137.getInt32();
                const _0x7dd562 = _0x5a2137.readArrayBuffer(_0x353e3f);
                const _0x45f0c9 = new Uint8Array(_0x7dd562);
                let _0x1a9858 = '';
                for (const _0x31c07a of _0x45f0c9) _0x1a9858 += String.fromCharCode(~~_0x31c07a);
                const _0x412668 = _0x1b8a42.AES.decrypt(_0x1a9858, _0x53598a, {
                  "iv": _0x8823fc,
                  "mode": _0x1b8a42.mode.CBC,
                  "padding": _0x1b8a42.pad.Pkcs7
                }).toString(_0x1b8a42.enc.Utf8);
                if ("module" == _0x5241a4["default"].type) {
                  const _0x31c410 = document.createElement("script");
                  _0x31c410.type = "module";
                  _0x31c410.innerHTML = _0x412668;
                  document.body.appendChild(_0x31c410);
                } else {
                  eval.call(window, _0x412668);
                }
              }
              _0x461da4["default"] = {
                "1.0.0": function (_0x16f0d0) {
                  const _0x2df505 = _0x16f0d0.getInt32();
                  for (let _0x4f4c9c = 0x0; _0x4f4c9c < _0x2df505; _0x4f4c9c++) {
                    const _0x21198b = _0x16f0d0.getInt32();
                    const _0x2e9acc = _0x16f0d0.readArrayBuffer(_0x21198b);
                    let _0x401a3e = '';
                    const _0x5687af = new Uint8Array(_0x2e9acc);
                    for (const _0x399585 of _0x5687af) _0x401a3e += String.fromCharCode(_0x399585);
                    const _0x1878c0 = _0x401a3e.split(",");
                    let _0x3db3bf = '';
                    for (let _0x1129af = 0x0; _0x1129af < _0x1878c0.length - 0x1; _0x1129af++) {
                      _0x3db3bf += String.fromCharCode(~~_0x1878c0[_0x1129af]);
                    }
                    eval.call(window, _0x3db3bf);
                  }
                },
                "1.0.1": _0x38a8f3,
                "1.0.2": _0x38a8f3,
                "2.0.0": _0x108198,
                "2.0.1": _0x108198,
                "2.0.2": _0x108198
              };
            },
            0x2235: (_0xf2afac, _0x5d2583) => {
              'use strict';
  
              Object.defineProperty(_0x5d2583, "__esModule", {
                "value": true
              });
              _0x5d2583.Singleton = undefined;
              _0x5d2583.Singleton = class {
                static ["getInstance"]() {
                  if (!this.instance) {
                    this.instance = new this();
                  }
                  return this.instance;
                }
              };
            },
            0x190d: (_0x35fd85, _0x5638d3) => {
              'use strict';
  
              Object.defineProperty(_0x5638d3, "__esModule", {
                "value": true
              });
              _0x5638d3["default"] = class {
                static ["urlExists"](_0x1f16c6) {
                  return new Promise((_0x3881e8, _0x132161) => {
                    const _0x1cb920 = new XMLHttpRequest();
                    _0x1cb920.open("HEAD", _0x1f16c6, true);
                    _0x1cb920.onload = _0x504739 => {
                      switch (_0x1cb920.status) {
                        case 0xc8:
                        case 0x193:
                          _0x3881e8(true);
                          break;
                        default:
                          _0x3881e8(false);
                      }
                    };
                    _0x1cb920.send();
                  });
                }
              };
            },
            0x1c1c: () => {}
          };
          var _0x378960 = {};
          function _0x1cae67(_0x326779) {
            var _0x544589 = _0x378960[_0x326779];
            if (undefined !== _0x544589) {
              return _0x544589.exports;
            }
            var _0x5ad664 = _0x378960[_0x326779] = {
              "exports": {}
            };
            _0x264028[_0x326779].call(_0x5ad664.exports, _0x5ad664, _0x5ad664.exports, _0x1cae67);
            return _0x5ad664.exports;
          }
          _0x1cae67.g = function () {
            if ("object" == typeof globalThis) {
              return globalThis;
            }
            try {
              return this || new Function("return this")();
            } catch (_0x45a5c2) {
              if ("object" == typeof window) {
                return window;
              }
            }
          }();
          return _0x1cae67(0x2148);
        })();
        _0x56cdc8.exports = _0x44a6b9();
      }
    };
    _0x1af2fa = {};
    return function _0x27b749(_0x1ecf71) {
      var _0x3e6e4c = _0x1af2fa[_0x1ecf71];
      if (undefined !== _0x3e6e4c) {
        return _0x3e6e4c.exports;
      }
      var _0x391401 = _0x1af2fa[_0x1ecf71] = {
        "exports": {}
      };
      _0x4bede1[_0x1ecf71].call(_0x391401.exports, _0x391401, _0x391401.exports, _0x27b749);
      return _0x391401.exports;
    }(0x2148);
    var _0x4bede1;
    var _0x1af2fa;
  });

  
  var a  =  10;