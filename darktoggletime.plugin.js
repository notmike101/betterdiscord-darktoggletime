/**

 * @version 1.0.0
 * @source https://github.com/notmike101/betterdiscord-darktoggletime
 * @website https://mikeorozco.dev
 * @author DeNial
 * @donate https://buymeacoffee.com/mikeorozcodev
 * @updateUrl https://raw.githubusercontent.com/notmike101/betterdiscord-darktoggletime/release/darktoggletime.plugin.js
 * @authorLink https://mikeorozco.dev
 * @description Toggles between a light and a dark theme based on your local time settings
 * @name DarkToggleTime
 * @authorId 142347724392497152
 */

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.tsx
var main_exports = {};
__export(main_exports, {
  DarkToggleTime: () => DarkToggleTime
});
module.exports = __toCommonJS(main_exports);
var import_bdapi3 = require("betterdiscord/bdapi");

// node_modules/betterdiscord-plugin-libs/dist/index.esm.js
var import_bdapi = require("betterdiscord/bdapi");
var oe = Object.create;
var M = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ce = Object.getOwnPropertyNames;
var le = Object.getPrototypeOf;
var he = Object.prototype.hasOwnProperty;
var pe = ((e) => typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, { get: (t, i) => (typeof require != "undefined" ? require : t)[i] }) : e)(function(e) {
  if (typeof require != "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + e + '" is not supported');
});
var E = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var ue = (e, t, i, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of ce(t))
      !he.call(e, r) && r !== i && M(e, r, { get: () => t[r], enumerable: !(n = ae(t, r)) || n.enumerable });
  return e;
};
var fe = (e, t, i) => (i = e != null ? oe(le(e)) : {}, ue(t || !e || !e.__esModule ? M(i, "default", { value: e, enumerable: true }) : i, e));
var x = E((qe, F) => {
  var Ee = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  };
  F.exports = Ee;
});
var $ = E((ze, U) => {
  var ge = "2.0.0", Ie = Number.MAX_SAFE_INTEGER || 9007199254740991, me = 16;
  U.exports = { SEMVER_SPEC_VERSION: ge, MAX_LENGTH: 256, MAX_SAFE_INTEGER: Ie, MAX_SAFE_COMPONENT_LENGTH: me };
});
var H = E((g, G) => {
  var { MAX_SAFE_COMPONENT_LENGTH: P } = $(), be = x();
  g = G.exports = {};
  var Te = g.re = [], s = g.src = [], o = g.t = {}, Ne = 0, l = (e, t, i) => {
    let n = Ne++;
    be(e, n, t), o[e] = n, s[n] = t, Te[n] = new RegExp(t, i ? "g" : void 0);
  };
  l("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  l("NUMERICIDENTIFIERLOOSE", "[0-9]+");
  l("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
  l("MAINVERSION", `(${s[o.NUMERICIDENTIFIER]})\\.(${s[o.NUMERICIDENTIFIER]})\\.(${s[o.NUMERICIDENTIFIER]})`);
  l("MAINVERSIONLOOSE", `(${s[o.NUMERICIDENTIFIERLOOSE]})\\.(${s[o.NUMERICIDENTIFIERLOOSE]})\\.(${s[o.NUMERICIDENTIFIERLOOSE]})`);
  l("PRERELEASEIDENTIFIER", `(?:${s[o.NUMERICIDENTIFIER]}|${s[o.NONNUMERICIDENTIFIER]})`);
  l("PRERELEASEIDENTIFIERLOOSE", `(?:${s[o.NUMERICIDENTIFIERLOOSE]}|${s[o.NONNUMERICIDENTIFIER]})`);
  l("PRERELEASE", `(?:-(${s[o.PRERELEASEIDENTIFIER]}(?:\\.${s[o.PRERELEASEIDENTIFIER]})*))`);
  l("PRERELEASELOOSE", `(?:-?(${s[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${s[o.PRERELEASEIDENTIFIERLOOSE]})*))`);
  l("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
  l("BUILD", `(?:\\+(${s[o.BUILDIDENTIFIER]}(?:\\.${s[o.BUILDIDENTIFIER]})*))`);
  l("FULLPLAIN", `v?${s[o.MAINVERSION]}${s[o.PRERELEASE]}?${s[o.BUILD]}?`);
  l("FULL", `^${s[o.FULLPLAIN]}$`);
  l("LOOSEPLAIN", `[v=\\s]*${s[o.MAINVERSIONLOOSE]}${s[o.PRERELEASELOOSE]}?${s[o.BUILD]}?`);
  l("LOOSE", `^${s[o.LOOSEPLAIN]}$`);
  l("GTLT", "((?:<|>)?=?)");
  l("XRANGEIDENTIFIERLOOSE", `${s[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  l("XRANGEIDENTIFIER", `${s[o.NUMERICIDENTIFIER]}|x|X|\\*`);
  l("XRANGEPLAIN", `[v=\\s]*(${s[o.XRANGEIDENTIFIER]})(?:\\.(${s[o.XRANGEIDENTIFIER]})(?:\\.(${s[o.XRANGEIDENTIFIER]})(?:${s[o.PRERELEASE]})?${s[o.BUILD]}?)?)?`);
  l("XRANGEPLAINLOOSE", `[v=\\s]*(${s[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${s[o.XRANGEIDENTIFIERLOOSE]})(?:${s[o.PRERELEASELOOSE]})?${s[o.BUILD]}?)?)?`);
  l("XRANGE", `^${s[o.GTLT]}\\s*${s[o.XRANGEPLAIN]}$`);
  l("XRANGELOOSE", `^${s[o.GTLT]}\\s*${s[o.XRANGEPLAINLOOSE]}$`);
  l("COERCE", `(^|[^\\d])(\\d{1,${P}})(?:\\.(\\d{1,${P}}))?(?:\\.(\\d{1,${P}}))?(?:$|[^\\d])`);
  l("COERCERTL", s[o.COERCE], true);
  l("LONETILDE", "(?:~>?)");
  l("TILDETRIM", `(\\s*)${s[o.LONETILDE]}\\s+`, true);
  g.tildeTrimReplace = "$1~";
  l("TILDE", `^${s[o.LONETILDE]}${s[o.XRANGEPLAIN]}$`);
  l("TILDELOOSE", `^${s[o.LONETILDE]}${s[o.XRANGEPLAINLOOSE]}$`);
  l("LONECARET", "(?:\\^)");
  l("CARETTRIM", `(\\s*)${s[o.LONECARET]}\\s+`, true);
  g.caretTrimReplace = "$1^";
  l("CARET", `^${s[o.LONECARET]}${s[o.XRANGEPLAIN]}$`);
  l("CARETLOOSE", `^${s[o.LONECARET]}${s[o.XRANGEPLAINLOOSE]}$`);
  l("COMPARATORLOOSE", `^${s[o.GTLT]}\\s*(${s[o.LOOSEPLAIN]})$|^$`);
  l("COMPARATOR", `^${s[o.GTLT]}\\s*(${s[o.FULLPLAIN]})$|^$`);
  l("COMPARATORTRIM", `(\\s*)${s[o.GTLT]}\\s*(${s[o.LOOSEPLAIN]}|${s[o.XRANGEPLAIN]})`, true);
  g.comparatorTrimReplace = "$1$2$3";
  l("HYPHENRANGE", `^\\s*(${s[o.XRANGEPLAIN]})\\s+-\\s+(${s[o.XRANGEPLAIN]})\\s*$`);
  l("HYPHENRANGELOOSE", `^\\s*(${s[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${s[o.XRANGEPLAINLOOSE]})\\s*$`);
  l("STAR", "(<|>)?=?\\s*\\*");
  l("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  l("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
var j = E((Qe, X) => {
  var Ce = ["includePrerelease", "loose", "rtl"], ye = (e) => e ? typeof e != "object" ? { loose: true } : Ce.filter((t) => e[t]).reduce((t, i) => (t[i] = true, t), {}) : {};
  X.exports = ye;
});
var Y = E((Ye, Q) => {
  var q = /^[0-9]+$/, z = (e, t) => {
    let i = q.test(e), n = q.test(t);
    return i && n && (e = +e, t = +t), e === t ? 0 : i && !n ? -1 : n && !i ? 1 : e < t ? -1 : 1;
  }, Re = (e, t) => z(t, e);
  Q.exports = { compareIdentifiers: z, rcompareIdentifiers: Re };
});
var K = E((Ze, J) => {
  var R = x(), { MAX_LENGTH: Z, MAX_SAFE_INTEGER: L } = $(), { re: W, t: V } = H(), Le = j(), { compareIdentifiers: T } = Y(), u = class {
    constructor(t, i) {
      if (i = Le(i), t instanceof u) {
        if (t.loose === !!i.loose && t.includePrerelease === !!i.includePrerelease)
          return t;
        t = t.version;
      } else if (typeof t != "string")
        throw new TypeError(`Invalid Version: ${t}`);
      if (t.length > Z)
        throw new TypeError(`version is longer than ${Z} characters`);
      R("SemVer", t, i), this.options = i, this.loose = !!i.loose, this.includePrerelease = !!i.includePrerelease;
      let n = t.trim().match(i.loose ? W[V.LOOSE] : W[V.FULL]);
      if (!n)
        throw new TypeError(`Invalid Version: ${t}`);
      if (this.raw = t, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > L || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > L || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > L || this.patch < 0)
        throw new TypeError("Invalid patch version");
      n[4] ? this.prerelease = n[4].split(".").map((r) => {
        if (/^[0-9]+$/.test(r)) {
          let a = +r;
          if (a >= 0 && a < L)
            return a;
        }
        return r;
      }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(t) {
      if (R("SemVer.compare", this.version, this.options, t), !(t instanceof u)) {
        if (typeof t == "string" && t === this.version)
          return 0;
        t = new u(t, this.options);
      }
      return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t);
    }
    compareMain(t) {
      return t instanceof u || (t = new u(t, this.options)), T(this.major, t.major) || T(this.minor, t.minor) || T(this.patch, t.patch);
    }
    comparePre(t) {
      if (t instanceof u || (t = new u(t, this.options)), this.prerelease.length && !t.prerelease.length)
        return -1;
      if (!this.prerelease.length && t.prerelease.length)
        return 1;
      if (!this.prerelease.length && !t.prerelease.length)
        return 0;
      let i = 0;
      do {
        let n = this.prerelease[i], r = t.prerelease[i];
        if (R("prerelease compare", i, n, r), n === void 0 && r === void 0)
          return 0;
        if (r === void 0)
          return 1;
        if (n === void 0)
          return -1;
        if (n === r)
          continue;
        return T(n, r);
      } while (++i);
    }
    compareBuild(t) {
      t instanceof u || (t = new u(t, this.options));
      let i = 0;
      do {
        let n = this.build[i], r = t.build[i];
        if (R("prerelease compare", i, n, r), n === void 0 && r === void 0)
          return 0;
        if (r === void 0)
          return 1;
        if (n === void 0)
          return -1;
        if (n === r)
          continue;
        return T(n, r);
      } while (++i);
    }
    inc(t, i) {
      switch (t) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", i);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", i);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", i), this.inc("pre", i);
          break;
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", i), this.inc("pre", i);
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        case "pre":
          if (this.prerelease.length === 0)
            this.prerelease = [0];
          else {
            let n = this.prerelease.length;
            for (; --n >= 0; )
              typeof this.prerelease[n] == "number" && (this.prerelease[n]++, n = -2);
            n === -1 && this.prerelease.push(0);
          }
          i && (T(this.prerelease[0], i) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [i, 0]) : this.prerelease = [i, 0]);
          break;
        default:
          throw new Error(`invalid increment argument: ${t}`);
      }
      return this.format(), this.raw = this.version, this;
    }
  };
  J.exports = u;
});
var ie = E((We, te) => {
  var ee = K(), _e = (e, t, i) => new ee(e, i).compare(new ee(t, i));
  te.exports = _e;
});
var re = E((Ve, ne) => {
  var ve = ie(), Oe = (e, t, i) => ve(e, t, i) > 0;
  ne.exports = Oe;
});
var b = { Linear: { None: function(e) {
  return e;
} }, Quadratic: { In: function(e) {
  return e * e;
}, Out: function(e) {
  return e * (2 - e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
} }, Cubic: { In: function(e) {
  return e * e * e;
}, Out: function(e) {
  return --e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
} }, Quartic: { In: function(e) {
  return e * e * e * e;
}, Out: function(e) {
  return 1 - --e * e * e * e;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
} }, Quintic: { In: function(e) {
  return e * e * e * e * e;
}, Out: function(e) {
  return --e * e * e * e * e + 1;
}, InOut: function(e) {
  return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
} }, Sinusoidal: { In: function(e) {
  return 1 - Math.cos(e * Math.PI / 2);
}, Out: function(e) {
  return Math.sin(e * Math.PI / 2);
}, InOut: function(e) {
  return 0.5 * (1 - Math.cos(Math.PI * e));
} }, Exponential: { In: function(e) {
  return e === 0 ? 0 : Math.pow(1024, e - 1);
}, Out: function(e) {
  return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
} }, Circular: { In: function(e) {
  return 1 - Math.sqrt(1 - e * e);
}, Out: function(e) {
  return Math.sqrt(1 - --e * e);
}, InOut: function(e) {
  return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
} }, Elastic: { In: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : -Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI);
}, Out: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : Math.pow(2, -10 * e) * Math.sin((e - 0.1) * 5 * Math.PI) + 1;
}, InOut: function(e) {
  return e === 0 ? 0 : e === 1 ? 1 : (e *= 2, e < 1 ? -0.5 * Math.pow(2, 10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (e - 1)) * Math.sin((e - 1.1) * 5 * Math.PI) + 1);
} }, Back: { In: function(e) {
  var t = 1.70158;
  return e * e * ((t + 1) * e - t);
}, Out: function(e) {
  var t = 1.70158;
  return --e * e * ((t + 1) * e + t) + 1;
}, InOut: function(e) {
  var t = 2.5949095;
  return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
} }, Bounce: { In: function(e) {
  return 1 - b.Bounce.Out(1 - e);
}, Out: function(e) {
  return e < 0.36363636363636365 ? 7.5625 * e * e : e < 0.7272727272727273 ? 7.5625 * (e -= 0.5454545454545454) * e + 0.75 : e < 0.9090909090909091 ? 7.5625 * (e -= 0.8181818181818182) * e + 0.9375 : 7.5625 * (e -= 0.9545454545454546) * e + 0.984375;
}, InOut: function(e) {
  return e < 0.5 ? b.Bounce.In(e * 2) * 0.5 : b.Bounce.Out(e * 2 - 1) * 0.5 + 0.5;
} } };
var N;
typeof self > "u" && typeof process < "u" && process.hrtime ? N = function() {
  var e = process.hrtime();
  return e[0] * 1e3 + e[1] / 1e6;
} : typeof self < "u" && self.performance !== void 0 && self.performance.now !== void 0 ? N = self.performance.now.bind(self.performance) : Date.now !== void 0 ? N = Date.now : N = function() {
  return new Date().getTime();
};
var m = N;
var de = function() {
  function e() {
    this._tweens = {}, this._tweensAddedDuringUpdate = {};
  }
  return e.prototype.getAll = function() {
    var t = this;
    return Object.keys(this._tweens).map(function(i) {
      return t._tweens[i];
    });
  }, e.prototype.removeAll = function() {
    this._tweens = {};
  }, e.prototype.add = function(t) {
    this._tweens[t.getId()] = t, this._tweensAddedDuringUpdate[t.getId()] = t;
  }, e.prototype.remove = function(t) {
    delete this._tweens[t.getId()], delete this._tweensAddedDuringUpdate[t.getId()];
  }, e.prototype.update = function(t, i) {
    t === void 0 && (t = m()), i === void 0 && (i = false);
    var n = Object.keys(this._tweens);
    if (n.length === 0)
      return false;
    for (; n.length > 0; ) {
      this._tweensAddedDuringUpdate = {};
      for (var r = 0; r < n.length; r++) {
        var a = this._tweens[n[r]], c = !i;
        a && a.update(t, c) === false && !i && delete this._tweens[n[r]];
      }
      n = Object.keys(this._tweensAddedDuringUpdate);
    }
    return true;
  }, e;
}();
var C = { Linear: function(e, t) {
  var i = e.length - 1, n = i * t, r = Math.floor(n), a = C.Utils.Linear;
  return t < 0 ? a(e[0], e[1], n) : t > 1 ? a(e[i], e[i - 1], i - n) : a(e[r], e[r + 1 > i ? i : r + 1], n - r);
}, Bezier: function(e, t) {
  for (var i = 0, n = e.length - 1, r = Math.pow, a = C.Utils.Bernstein, c = 0; c <= n; c++)
    i += r(1 - t, n - c) * r(t, c) * e[c] * a(n, c);
  return i;
}, CatmullRom: function(e, t) {
  var i = e.length - 1, n = i * t, r = Math.floor(n), a = C.Utils.CatmullRom;
  return e[0] === e[i] ? (t < 0 && (r = Math.floor(n = i * (1 + t))), a(e[(r - 1 + i) % i], e[r], e[(r + 1) % i], e[(r + 2) % i], n - r)) : t < 0 ? e[0] - (a(e[0], e[0], e[1], e[1], -n) - e[0]) : t > 1 ? e[i] - (a(e[i], e[i], e[i - 1], e[i - 1], n - i) - e[i]) : a(e[r ? r - 1 : 0], e[r], e[i < r + 1 ? i : r + 1], e[i < r + 2 ? i : r + 2], n - r);
}, Utils: { Linear: function(e, t, i) {
  return (t - e) * i + e;
}, Bernstein: function(e, t) {
  var i = C.Utils.Factorial;
  return i(e) / i(t) / i(e - t);
}, Factorial: function() {
  var e = [1];
  return function(t) {
    var i = 1;
    if (e[t])
      return e[t];
    for (var n = t; n > 1; n--)
      i *= n;
    return e[t] = i, i;
  };
}(), CatmullRom: function(e, t, i, n, r) {
  var a = (i - e) * 0.5, c = (n - t) * 0.5, h = r * r, p = r * h;
  return (2 * t - 2 * i + a + c) * p + (-3 * t + 3 * i - 2 * a - c) * h + a * r + t;
} } };
var S = function() {
  function e() {
  }
  return e.nextId = function() {
    return e._nextId++;
  }, e._nextId = 0, e;
}();
var B = new de();
var D = function() {
  function e(t, i) {
    i === void 0 && (i = B), this._object = t, this._group = i, this._isPaused = false, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._initialRepeat = 0, this._repeat = 0, this._yoyo = false, this._isPlaying = false, this._reversed = false, this._delayTime = 0, this._startTime = 0, this._easingFunction = b.Linear.None, this._interpolationFunction = C.Linear, this._chainedTweens = [], this._onStartCallbackFired = false, this._id = S.nextId(), this._isChainStopped = false, this._goToEnd = false;
  }
  return e.prototype.getId = function() {
    return this._id;
  }, e.prototype.isPlaying = function() {
    return this._isPlaying;
  }, e.prototype.isPaused = function() {
    return this._isPaused;
  }, e.prototype.to = function(t, i) {
    return this._valuesEnd = Object.create(t), i !== void 0 && (this._duration = i), this;
  }, e.prototype.duration = function(t) {
    return this._duration = t, this;
  }, e.prototype.start = function(t) {
    if (this._isPlaying)
      return this;
    if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed) {
      this._reversed = false;
      for (var i in this._valuesStartRepeat)
        this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
    }
    return this._isPlaying = true, this._isPaused = false, this._onStartCallbackFired = false, this._isChainStopped = false, this._startTime = t !== void 0 ? typeof t == "string" ? m() + parseFloat(t) : t : m(), this._startTime += this._delayTime, this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat), this;
  }, e.prototype._setupProperties = function(t, i, n, r) {
    for (var a in n) {
      var c = t[a], h = Array.isArray(c), p = h ? "array" : typeof c, d = !h && Array.isArray(n[a]);
      if (!(p === "undefined" || p === "function")) {
        if (d) {
          var I = n[a];
          if (I.length === 0)
            continue;
          I = I.map(this._handleRelativeValue.bind(this, c)), n[a] = [c].concat(I);
        }
        if ((p === "object" || h) && c && !d) {
          i[a] = h ? [] : {};
          for (var w in c)
            i[a][w] = c[w];
          r[a] = h ? [] : {}, this._setupProperties(c, i[a], n[a], r[a]);
        } else
          typeof i[a] > "u" && (i[a] = c), h || (i[a] *= 1), d ? r[a] = n[a].slice().reverse() : r[a] = i[a] || 0;
      }
    }
  }, e.prototype.stop = function() {
    return this._isChainStopped || (this._isChainStopped = true, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = false, this._isPaused = false, this._onStopCallback && this._onStopCallback(this._object), this) : this;
  }, e.prototype.end = function() {
    return this._goToEnd = true, this.update(1 / 0), this;
  }, e.prototype.pause = function(t) {
    return t === void 0 && (t = m()), this._isPaused || !this._isPlaying ? this : (this._isPaused = true, this._pauseStart = t, this._group && this._group.remove(this), this);
  }, e.prototype.resume = function(t) {
    return t === void 0 && (t = m()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = false, this._startTime += t - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this);
  }, e.prototype.stopChainedTweens = function() {
    for (var t = 0, i = this._chainedTweens.length; t < i; t++)
      this._chainedTweens[t].stop();
    return this;
  }, e.prototype.group = function(t) {
    return this._group = t, this;
  }, e.prototype.delay = function(t) {
    return this._delayTime = t, this;
  }, e.prototype.repeat = function(t) {
    return this._initialRepeat = t, this._repeat = t, this;
  }, e.prototype.repeatDelay = function(t) {
    return this._repeatDelayTime = t, this;
  }, e.prototype.yoyo = function(t) {
    return this._yoyo = t, this;
  }, e.prototype.easing = function(t) {
    return this._easingFunction = t, this;
  }, e.prototype.interpolation = function(t) {
    return this._interpolationFunction = t, this;
  }, e.prototype.chain = function() {
    for (var t = [], i = 0; i < arguments.length; i++)
      t[i] = arguments[i];
    return this._chainedTweens = t, this;
  }, e.prototype.onStart = function(t) {
    return this._onStartCallback = t, this;
  }, e.prototype.onUpdate = function(t) {
    return this._onUpdateCallback = t, this;
  }, e.prototype.onRepeat = function(t) {
    return this._onRepeatCallback = t, this;
  }, e.prototype.onComplete = function(t) {
    return this._onCompleteCallback = t, this;
  }, e.prototype.onStop = function(t) {
    return this._onStopCallback = t, this;
  }, e.prototype.update = function(t, i) {
    if (t === void 0 && (t = m()), i === void 0 && (i = true), this._isPaused)
      return true;
    var n, r, a = this._startTime + this._duration;
    if (!this._goToEnd && !this._isPlaying) {
      if (t > a)
        return false;
      i && this.start(t);
    }
    if (this._goToEnd = false, t < this._startTime)
      return true;
    this._onStartCallbackFired === false && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = true), r = (t - this._startTime) / this._duration, r = this._duration === 0 || r > 1 ? 1 : r;
    var c = this._easingFunction(r);
    if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, c), this._onUpdateCallback && this._onUpdateCallback(this._object, r), r === 1)
      if (this._repeat > 0) {
        isFinite(this._repeat) && this._repeat--;
        for (n in this._valuesStartRepeat)
          !this._yoyo && typeof this._valuesEnd[n] == "string" && (this._valuesStartRepeat[n] = this._valuesStartRepeat[n] + parseFloat(this._valuesEnd[n])), this._yoyo && this._swapEndStartRepeatValues(n), this._valuesStart[n] = this._valuesStartRepeat[n];
        return this._yoyo && (this._reversed = !this._reversed), this._repeatDelayTime !== void 0 ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), true;
      } else {
        this._onCompleteCallback && this._onCompleteCallback(this._object);
        for (var h = 0, p = this._chainedTweens.length; h < p; h++)
          this._chainedTweens[h].start(this._startTime + this._duration);
        return this._isPlaying = false, false;
      }
    return true;
  }, e.prototype._updateProperties = function(t, i, n, r) {
    for (var a in n)
      if (i[a] !== void 0) {
        var c = i[a] || 0, h = n[a], p = Array.isArray(t[a]), d = Array.isArray(h), I = !p && d;
        I ? t[a] = this._interpolationFunction(h, r) : typeof h == "object" && h ? this._updateProperties(t[a], c, h, r) : (h = this._handleRelativeValue(c, h), typeof h == "number" && (t[a] = c + (h - c) * r));
      }
  }, e.prototype._handleRelativeValue = function(t, i) {
    return typeof i != "string" ? i : i.charAt(0) === "+" || i.charAt(0) === "-" ? t + parseFloat(i) : parseFloat(i);
  }, e.prototype._swapEndStartRepeatValues = function(t) {
    var i = this._valuesStartRepeat[t], n = this._valuesEnd[t];
    typeof n == "string" ? this._valuesStartRepeat[t] = this._valuesStartRepeat[t] + parseFloat(n) : this._valuesStartRepeat[t] = this._valuesEnd[t], this._valuesEnd[t] = i;
  }, e;
}();
var Se = S.nextId;
var f = B;
var Be = f.getAll.bind(f);
var De = f.removeAll.bind(f);
var ke = f.add.bind(f);
var Fe = f.remove.bind(f);
var k = f.update.bind(f);
var O = class {
  bannerContainer;
  banners;
  constructor(t) {
    this.banners = [];
    let i = document.querySelector("#plugin-banner-container-c81mc1");
    if (i)
      this.bannerContainer = i;
    else {
      let n = document.createElement("div");
      this.bannerContainer = n, this.bannerContainer.style.cssText = `
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
          align-items: center;
          justify-content: center;
        `, this.bannerContainer.id = "plugin-banner-container-c81mc1", t && t.prepend(this.bannerContainer);
    }
  }
  createBanner(t, i = {}) {
    let n = document.createElement("div"), r = document.createElement("span"), a = document.createElement("button"), c = document.createElement("button"), h = this.banners.length;
    return n.style.cssText = `
      display: flex;
      flex: 1;
      background-color: ${i.backgroundColor ?? "var(--info-help-background)"};
      color: ${i.fontColor ?? "var(--info-help-text)"};
      padding: 6px 0;
      font-size: 12px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      margin: 0 15px;
    `, a.style.cssText = `
      color: ${i.acceptButtonFontColor ?? "#ffffff"};
      background-color: ${i.acceptButtonBackgroundColor ?? "var(--button-positive-background)"};
      border: 1px solid ${i.acceptButtonBorderColor ?? "var(--button-positive-border)"};
      outline: none;
      margin: 0 15px;
    `, c.style.cssText = `
      color: ${i.dismissButtonFontColor ?? "#ffffff"};
      background-color: ${i.dismissButtonBackgroundColor ?? "var(--button-danger-background)"};
      border: 1px solid ${i.dismissButtonBorderColor ?? "var(--button-danger-border)"};
      outline: none;
    `, a.textContent = i.acceptButtonString ?? "Accept", c.textContent = i.dismissButtonString ?? "Dismiss", r.textContent = t, a.addEventListener("pointerup", () => {
      this.dismissBanner(h), i.acceptCallback && i.acceptCallback();
    }), c.addEventListener("pointerup", () => {
      this.dismissBanner(h), i.dismissCallback && i.dismissCallback();
    }), n.append(r, a, c), this.bannerContainer.append(n), this.banners.push(n), h;
  }
  dismissBanner(t) {
    this.banners[t] && this.banners[t].remove();
  }
};
var y = class {
  logPrefix;
  logPrefixColor;
  logColor;
  constructor(t, i = "lightblue", n = "white") {
    this.logPrefix = t, this.logPrefixColor = i, this.logColor = n;
  }
  log(...t) {
    console.log(`%c[${this.logPrefix}] %c${t.join(" ")}`, `color: ${this.logPrefixColor};`, `color: ${this.logColor}`);
  }
  warn(...t) {
    console.warn(`%c[${this.logPrefix}] %c${t.join(" ")}`, `color: ${this.logPrefixColor};`, `color: ${this.logColor}`);
  }
  error(...t) {
    console.error(`%c[${this.logPrefix}] %c${t.join(" ")}`, `color: ${this.logPrefixColor};`, `color: ${this.logColor}`);
  }
  info(...t) {
    console.info(`%c[${this.logPrefix}] %c${t.join(" ")}`, `color: ${this.logPrefixColor};`, `color: ${this.logColor}`);
  }
};
var se = fe(re());
var A = class {
  updatePath;
  storagePath;
  currentVersion;
  remotePluginInfo;
  logger;
  constructor(t) {
    this.updatePath = t.updatePath, this.storagePath = t.storagePath, this.currentVersion = t.currentVersion, this.remotePluginInfo = {}, this.logger = new y("PluginUpdater", "lightblue", "white");
  }
  async downloadPluginFile() {
    try {
      let i = await (await fetch(this.updatePath)).text();
      this.remotePluginInfo.fileName = this.updatePath.split("/").slice(-1)[0], this.remotePluginInfo.name = i.match(/@name (.*)/)[1], this.remotePluginInfo.version = i.match(/@version (.*)/)[1], this.remotePluginInfo.content = i;
    } catch (t) {
      this.logger.log("Failed to download plugin file", t.message);
    }
  }
  async isUpdateAvailable() {
    try {
      if (!this.updatePath)
        throw new Error("No update path defined for this plugin");
      if (!this.currentVersion)
        throw new Error("Current version of plugin unknown");
      return await this.downloadPluginFile(), (0, se.default)(this.remotePluginInfo.version, this.currentVersion);
    } catch (t) {
      return this.logger.log("Failed to check for updates", t.message), false;
    }
  }
  async installUpdate() {
    try {
      let t = pe("fs");
      if (!t)
        throw new Error("Unable to load `fs` module");
      return await new Promise((i, n) => {
        t.writeFile(`${this.storagePath}/${this.remotePluginInfo.fileName}`, this.remotePluginInfo.content, (r) => {
          r && n(r), i(true);
        });
      }), true;
    } catch (t) {
      return this.logger.log("Failed to install update", t.message), false;
    }
  }
};
var xe = (0, import_bdapi.findModuleByProps)("getLastSelectedGuildId");
var $e = (0, import_bdapi.findModuleByProps)("getGuilds");
var Pe = (0, import_bdapi.findModuleByProps)("app", "layers");
var Ae = (0, import_bdapi.findModuleByProps)("DeveloperMode");
var we = Object.freeze({ selectedGuildStore: xe, guildStore: $e, app: Pe, developerMode: Ae });

// src/SettingsPanel/index.tsx
var import_bdapi2 = require("betterdiscord/bdapi");

// src/SettingsPanel/style.scss
var style_default = `
.darktoggletime-settings-panel {
  display: flex;
  flex-direction: column;
}
.darktoggletime-settings-panel .input-group {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.darktoggletime-settings-panel .input-group:not(:last-of-type) {
  margin-bottom: 5px;
}
.darktoggletime-settings-panel .input-group span {
  margin-right: 5px;
  color: var(--text-normal);
}`;

// src/SettingsPanel/index.tsx
var SettingsPanel = (props) => {
  const isMounted = import_bdapi2.React.useRef(false);
  const themes = import_bdapi2.Themes.getAll().map((theme) => theme.name);
  const [startTime, setStartTime] = import_bdapi2.React.useState("00:00");
  const [endTime, setEndTime] = import_bdapi2.React.useState("00:00");
  const [darkTheme, setDarkTheme] = import_bdapi2.React.useState("default");
  const [lightTheme, setLightTheme] = import_bdapi2.React.useState("default");
  const mountHandler = () => {
    const startTime2 = (0, import_bdapi2.getData)("darktoggletime", "startTime");
    const endTime2 = (0, import_bdapi2.getData)("darktoggletime", "endTime");
    const darkTheme2 = (0, import_bdapi2.getData)("darktoggletime", "darkTheme");
    const lightTheme2 = (0, import_bdapi2.getData)("darktoggletime", "lightTheme");
    isMounted.current = true;
    if (startTime2) {
      setStartTime(startTime2);
    }
    if (endTime2) {
      setEndTime(endTime2);
    }
    if (darkTheme2) {
      setDarkTheme(darkTheme2);
    }
    if (lightTheme2) {
      setLightTheme(lightTheme2);
    }
    (0, import_bdapi2.injectCSS)("darktoggletime-settings-panel", style_default);
  };
  const unmountHandler = () => {
    isMounted.current = false;
    (0, import_bdapi2.clearCSS)("darktoggletime-settings-panel");
  };
  const startTimeChangeHandler = (event) => {
    const startTime2 = event.target.value;
    setStartTime(startTime2);
    (0, import_bdapi2.setData)("darktoggletime", "startTime", startTime2);
  };
  const endTimeChangeHandler = (event) => {
    const endTime2 = event.target.value;
    setEndTime(endTime2);
    (0, import_bdapi2.setData)("darktoggletime", "endTime", endTime2);
  };
  const darkThemeChangeHandler = (event) => {
    const darkTheme2 = event.target.value;
    setDarkTheme(darkTheme2);
    (0, import_bdapi2.setData)("darktoggletime", "darkTheme", darkTheme2);
  };
  const lightThemeChangeHandler = (event) => {
    const lightTheme2 = event.target.value;
    setLightTheme(lightTheme2);
    (0, import_bdapi2.setData)("darktoggletime", "lightTheme", lightTheme2);
  };
  import_bdapi2.React.useEffect(() => {
    if (isMounted.current === false) {
      mountHandler();
    }
    if (props.updateCallback) {
      props.updateCallback({ startTime, endTime, darkTheme, lightTheme });
    }
    return unmountHandler;
  }, [startTime, endTime, lightTheme, darkTheme]);
  return /* @__PURE__ */ import_bdapi2.React.createElement("div", {
    className: "darktoggletime-settings-panel"
  }, /* @__PURE__ */ import_bdapi2.React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ import_bdapi2.React.createElement("span", null, "Dark Theme:"), /* @__PURE__ */ import_bdapi2.React.createElement("select", {
    onChange: darkThemeChangeHandler,
    value: darkTheme
  }, /* @__PURE__ */ import_bdapi2.React.createElement("option", {
    value: "default"
  }, "Default"), themes.map((theme) => /* @__PURE__ */ import_bdapi2.React.createElement("option", {
    key: theme
  }, theme)))), /* @__PURE__ */ import_bdapi2.React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ import_bdapi2.React.createElement("span", null, "Light Theme:"), /* @__PURE__ */ import_bdapi2.React.createElement("select", {
    onChange: lightThemeChangeHandler,
    value: lightTheme
  }, /* @__PURE__ */ import_bdapi2.React.createElement("option", {
    value: "default"
  }, "Default"), themes.map((theme) => /* @__PURE__ */ import_bdapi2.React.createElement("option", {
    key: theme
  }, theme)))), /* @__PURE__ */ import_bdapi2.React.createElement("hr", null), /* @__PURE__ */ import_bdapi2.React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ import_bdapi2.React.createElement("span", null, "Start Time:"), /* @__PURE__ */ import_bdapi2.React.createElement("input", {
    type: "time",
    onChange: startTimeChangeHandler,
    value: startTime
  })), /* @__PURE__ */ import_bdapi2.React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ import_bdapi2.React.createElement("span", null, "End Time:"), /* @__PURE__ */ import_bdapi2.React.createElement("input", {
    type: "time",
    onChange: endTimeChangeHandler,
    value: endTime
  })));
};

// src/main.tsx
var DarkToggleTime = class {
  logger;
  updater;
  banners;
  now;
  startTime;
  endTime;
  tickInterval;
  darkTheme;
  lightTheme;
  activeTheme;
  modules;
  updateBannerId;
  constructor() {
    this.startTime = (0, import_bdapi3.getData)("darktoggletime", "startTime");
    this.endTime = (0, import_bdapi3.getData)("darktoggletime", "endTime");
    this.darkTheme = (0, import_bdapi3.getData)("darktoggletime", "darkTheme");
    this.lightTheme = (0, import_bdapi3.getData)("darktoggletime", "lightTheme");
    if (!this.startTime) {
      (0, import_bdapi3.setData)("darktoggletime", "startTime", "00:00");
      this.startTime = "00:00";
    }
    if (!this.endTime) {
      (0, import_bdapi3.setData)("darktoggletime", "endTime", "00:00");
      this.endTime = "00:00";
    }
    if (!this.darkTheme) {
      (0, import_bdapi3.setData)("darktoggletime", "darkTheme", "default");
      this.darkTheme = "default";
    }
    if (!this.lightTheme) {
      (0, import_bdapi3.setData)("darktoggletime", "lightTheme", "default");
      this.lightTheme = "default";
    }
    this.logger = new y("DarkToggleTime v1.0.0");
    this.tickInterval = setInterval(this.tick.bind(this), 1e3);
  }
  loadModules() {
    this.modules = {
      app: we.app,
      developerMode: we.developerMode
    };
  }
  tick() {
    const now = new Date();
    this.now = {
      date: now,
      hours: now.getHours(),
      minutes: now.getMinutes()
    };
    this.handleThemeChange();
  }
  start() {
    this.loadModules();
    this.banners = new O(document.querySelector("." + this.modules.app.app));
    this.updater = new A({
      storagepath: import_bdapi3.Plugins.folder,
      currentVersion: "1.0.0",
      updatePath: "https://raw.githubusercontent.com/notmike101/betterdiscord-darktoggletime/release/darktoggletime.plugin.js"
    });
    this.update();
    this.logger.log("Started plugin");
  }
  stop() {
    clearInterval(this.tickInterval);
    if (this.updateBannerId !== null) {
      this.banners.dismissBanner(this.updateBannerId);
    }
    this.logger.log("Stopped plugin");
  }
  handleThemeChange() {
    if (!this.startTime || !this.endTime)
      return;
    const startTime = this.startTime.split(":");
    const endTime = this.endTime.split(":");
    const startHour = Number(startTime[0]);
    const startMinute = Number(startTime[1]);
    const endHour = Number(endTime[0]);
    const endMinute = Number(endTime[1]);
    if (this.now.hours === startHour && this.now.minutes === startMinute)
      this.changeToDarkTheme();
    if (this.now.hours === endHour && this.now.minutes === endMinute)
      this.changeToLightTheme();
  }
  settingsChangeCallback(settings) {
    this.startTime = settings.startTime;
    this.endTime = settings.endTime;
    this.darkTheme = settings.darkTheme;
    this.lightTheme = settings.lightTheme;
  }
  changeToLightTheme() {
    if (this.activeTheme === "light")
      return;
    this.logger.log("Changing to configured light theme");
    if (this.darkTheme && this.darkTheme !== "default") {
      import_bdapi3.Themes.disable(this.darkTheme);
    }
    if (this.lightTheme && this.lightTheme !== "default") {
      import_bdapi3.Themes.enable(this.lightTheme);
    }
    this.modules.developerMode.ThemeDoNotUseYet.updateSetting("light");
    this.activeTheme = "light";
  }
  changeToDarkTheme() {
    if (this.activeTheme === "dark")
      return;
    this.logger.log("Changing to configured dark theme");
    if (this.lightTheme && this.lightTheme !== "default") {
      import_bdapi3.Themes.disable(this.lightTheme);
    }
    if (this.darkTheme && this.darkTheme !== "default") {
      import_bdapi3.Themes.enable(this.darkTheme);
    }
    this.modules.developerMode.ThemeDoNotUseYet.updateSetting("dark");
    this.activeTheme = "dark";
  }
  async update() {
    const isUpdateAvailable = await this.updater.isUpdateAvailable();
    if (isUpdateAvailable) {
      this.updateBannerId = this.banners.createBanner("Update available for GoogleFonts", {
        acceptCallback: async () => {
          const updateSuccess = await this.updater.installUpdate();
          if (updateSuccess) {
            (0, import_bdapi3.showToast)("GoogleFonts successfully updated", { type: "success" });
          } else {
            (0, import_bdapi3.showToast)("Failed to update GoogleFonts", { type: "error" });
          }
        }
      });
    }
  }
  getSettingsPanel() {
    return /* @__PURE__ */ import_bdapi3.React.createElement(SettingsPanel, {
      updateCallback: this.settingsChangeCallback.bind(this)
    });
  }
};
