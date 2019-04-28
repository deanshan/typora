!function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
        var i = e();
        for (var r in i) ("object" == typeof exports ? exports : t)[r] = i[r]
    }
}(window, function () {
    return function (t) {
        var e = {};

        function i(r) {
            if (e[r]) return e[r].exports;
            var s = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }

        return i.m = t, i.c = e, i.d = function (t, e, r) {
            i.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, i.t = function (t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (i.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var s in t) i.d(r, s, function (e) {
                return t[e]
            }.bind(null, s));
            return r
        }, i.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return i.d(e, "a", e), e
        }, i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, i.p = "", i(i.s = 5)
    }([function (t, e, i) {
        (function () {
            var e;

            function i(t, e, i) {
                null != t && ("number" == typeof t ? this.fromNumber(t, e, i) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e))
            }

            function r() {
                return new i(null)
            }

            var s = "undefined" != typeof navigator;
            s && "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = function (t, e, i, r, s, n) {
                for (var o = 32767 & e, h = e >> 15; --n >= 0;) {
                    var u = 32767 & this[t], f = this[t++] >> 15, a = h * u + f * o;
                    s = ((u = o * u + ((32767 & a) << 15) + i[r] + (1073741823 & s)) >>> 30) + (a >>> 15) + h * f + (s >>> 30), i[r++] = 1073741823 & u
                }
                return s
            }, e = 30) : s && "Netscape" != navigator.appName ? (i.prototype.am = function (t, e, i, r, s, n) {
                for (; --n >= 0;) {
                    var o = e * this[t++] + i[r] + s;
                    s = Math.floor(o / 67108864), i[r++] = 67108863 & o
                }
                return s
            }, e = 26) : (i.prototype.am = function (t, e, i, r, s, n) {
                for (var o = 16383 & e, h = e >> 14; --n >= 0;) {
                    var u = 16383 & this[t], f = this[t++] >> 14, a = h * u + f * o;
                    s = ((u = o * u + ((16383 & a) << 14) + i[r] + s) >> 28) + (a >> 14) + h * f, i[r++] = 268435455 & u
                }
                return s
            }, e = 28), i.prototype.DB = e, i.prototype.DM = (1 << e) - 1, i.prototype.DV = 1 << e;
            i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - e, i.prototype.F2 = 2 * e - 52;
            var n, o, h = "0123456789abcdefghijklmnopqrstuvwxyz", u = new Array;
            for (n = "0".charCodeAt(0), o = 0; o <= 9; ++o) u[n++] = o;
            for (n = "a".charCodeAt(0), o = 10; o < 36; ++o) u[n++] = o;
            for (n = "A".charCodeAt(0), o = 10; o < 36; ++o) u[n++] = o;

            function f(t) {
                return h.charAt(t)
            }

            function a(t, e) {
                var i = u[t.charCodeAt(e)];
                return null == i ? -1 : i
            }

            function l(t) {
                var e = r();
                return e.fromInt(t), e
            }

            function p(t) {
                var e, i = 1;
                return 0 != (e = t >>> 16) && (t = e, i += 16), 0 != (e = t >> 8) && (t = e, i += 8), 0 != (e = t >> 4) && (t = e, i += 4), 0 != (e = t >> 2) && (t = e, i += 2), 0 != (e = t >> 1) && (t = e, i += 1), i
            }

            function c(t) {
                this.m = t
            }

            function g(t) {
                this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
            }

            function y(t, e) {
                return t & e
            }

            function m(t, e) {
                return t | e
            }

            function d(t, e) {
                return t ^ e
            }

            function v(t, e) {
                return t & ~e
            }

            function T(t) {
                if (0 == t) return -1;
                var e = 0;
                return 0 == (65535 & t) && (t >>= 16, e += 16), 0 == (255 & t) && (t >>= 8, e += 8), 0 == (15 & t) && (t >>= 4, e += 4), 0 == (3 & t) && (t >>= 2, e += 2), 0 == (1 & t) && ++e, e
            }

            function b(t) {
                for (var e = 0; 0 != t;) t &= t - 1, ++e;
                return e
            }

            function F() {
            }

            function B(t) {
                return t
            }

            function x(t) {
                this.r2 = r(), this.q3 = r(), i.ONE.dlShiftTo(2 * t.t, this.r2), this.mu = this.r2.divide(t), this.m = t
            }

            c.prototype.convert = function (t) {
                return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
            }, c.prototype.revert = function (t) {
                return t
            }, c.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t)
            }, c.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, c.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            }, g.prototype.convert = function (t) {
                var e = r();
                return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e), e
            }, g.prototype.revert = function (t) {
                var e = r();
                return t.copyTo(e), this.reduce(e), e
            }, g.prototype.reduce = function (t) {
                for (; t.t <= this.mt2;) t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var i = 32767 & t[e],
                        r = i * this.mpl + ((i * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[i = e + this.m.t] += this.m.am(0, r, t, e, 0, this.m.t); t[i] >= t.DV;) t[i] -= t.DV, t[++i]++
                }
                t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
            }, g.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, g.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            }, i.prototype.copyTo = function (t) {
                for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                t.t = this.t, t.s = this.s
            }, i.prototype.fromInt = function (t) {
                this.t = 1, this.s = t < 0 ? -1 : 0, t > 0 ? this[0] = t : t < -1 ? this[0] = t + this.DV : this.t = 0
            }, i.prototype.fromString = function (t, e) {
                var r;
                if (16 == e) r = 4; else if (8 == e) r = 3; else if (256 == e) r = 8; else if (2 == e) r = 1; else if (32 == e) r = 5; else {
                    if (4 != e) return void this.fromRadix(t, e);
                    r = 2
                }
                this.t = 0, this.s = 0;
                for (var s = t.length, n = !1, o = 0; --s >= 0;) {
                    var h = 8 == r ? 255 & t[s] : a(t, s);
                    h < 0 ? "-" == t.charAt(s) && (n = !0) : (n = !1, 0 == o ? this[this.t++] = h : o + r > this.DB ? (this[this.t - 1] |= (h & (1 << this.DB - o) - 1) << o, this[this.t++] = h >> this.DB - o) : this[this.t - 1] |= h << o, (o += r) >= this.DB && (o -= this.DB))
                }
                8 == r && 0 != (128 & t[0]) && (this.s = -1, o > 0 && (this[this.t - 1] |= (1 << this.DB - o) - 1 << o)), this.clamp(), n && i.ZERO.subTo(this, this)
            }, i.prototype.clamp = function () {
                for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
            }, i.prototype.dlShiftTo = function (t, e) {
                var i;
                for (i = this.t - 1; i >= 0; --i) e[i + t] = this[i];
                for (i = t - 1; i >= 0; --i) e[i] = 0;
                e.t = this.t + t, e.s = this.s
            }, i.prototype.drShiftTo = function (t, e) {
                for (var i = t; i < this.t; ++i) e[i - t] = this[i];
                e.t = Math.max(this.t - t, 0), e.s = this.s
            }, i.prototype.lShiftTo = function (t, e) {
                var i, r = t % this.DB, s = this.DB - r, n = (1 << s) - 1, o = Math.floor(t / this.DB),
                    h = this.s << r & this.DM;
                for (i = this.t - 1; i >= 0; --i) e[i + o + 1] = this[i] >> s | h, h = (this[i] & n) << r;
                for (i = o - 1; i >= 0; --i) e[i] = 0;
                e[o] = h, e.t = this.t + o + 1, e.s = this.s, e.clamp()
            }, i.prototype.rShiftTo = function (t, e) {
                e.s = this.s;
                var i = Math.floor(t / this.DB);
                if (i >= this.t) e.t = 0; else {
                    var r = t % this.DB, s = this.DB - r, n = (1 << r) - 1;
                    e[0] = this[i] >> r;
                    for (var o = i + 1; o < this.t; ++o) e[o - i - 1] |= (this[o] & n) << s, e[o - i] = this[o] >> r;
                    r > 0 && (e[this.t - i - 1] |= (this.s & n) << s), e.t = this.t - i, e.clamp()
                }
            }, i.prototype.subTo = function (t, e) {
                for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s;) r += this[i] - t[i], e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r -= t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; i < t.t;) r -= t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r -= t.s
                }
                e.s = r < 0 ? -1 : 0, r < -1 ? e[i++] = this.DV + r : r > 0 && (e[i++] = r), e.t = i, e.clamp()
            }, i.prototype.multiplyTo = function (t, e) {
                var r = this.abs(), s = t.abs(), n = r.t;
                for (e.t = n + s.t; --n >= 0;) e[n] = 0;
                for (n = 0; n < s.t; ++n) e[n + r.t] = r.am(0, s[n], e, n, 0, r.t);
                e.s = 0, e.clamp(), this.s != t.s && i.ZERO.subTo(e, e)
            }, i.prototype.squareTo = function (t) {
                for (var e = this.abs(), i = t.t = 2 * e.t; --i >= 0;) t[i] = 0;
                for (i = 0; i < e.t - 1; ++i) {
                    var r = e.am(i, e[i], t, 2 * i, 0, 1);
                    (t[i + e.t] += e.am(i + 1, 2 * e[i], t, 2 * i + 1, r, e.t - i - 1)) >= e.DV && (t[i + e.t] -= e.DV, t[i + e.t + 1] = 1)
                }
                t.t > 0 && (t[t.t - 1] += e.am(i, e[i], t, 2 * i, 0, 1)), t.s = 0, t.clamp()
            }, i.prototype.divRemTo = function (t, e, s) {
                var n = t.abs();
                if (!(n.t <= 0)) {
                    var o = this.abs();
                    if (o.t < n.t) return null != e && e.fromInt(0), void(null != s && this.copyTo(s));
                    null == s && (s = r());
                    var h = r(), u = this.s, f = t.s, a = this.DB - p(n[n.t - 1]);
                    a > 0 ? (n.lShiftTo(a, h), o.lShiftTo(a, s)) : (n.copyTo(h), o.copyTo(s));
                    var l = h.t, c = h[l - 1];
                    if (0 != c) {
                        var g = c * (1 << this.F1) + (l > 1 ? h[l - 2] >> this.F2 : 0), y = this.FV / g,
                            m = (1 << this.F1) / g, d = 1 << this.F2, v = s.t, T = v - l, b = null == e ? r() : e;
                        for (h.dlShiftTo(T, b), s.compareTo(b) >= 0 && (s[s.t++] = 1, s.subTo(b, s)), i.ONE.dlShiftTo(l, b), b.subTo(h, h); h.t < l;) h[h.t++] = 0;
                        for (; --T >= 0;) {
                            var F = s[--v] == c ? this.DM : Math.floor(s[v] * y + (s[v - 1] + d) * m);
                            if ((s[v] += h.am(0, F, s, T, 0, l)) < F) for (h.dlShiftTo(T, b), s.subTo(b, s); s[v] < --F;) s.subTo(b, s)
                        }
                        null != e && (s.drShiftTo(l, e), u != f && i.ZERO.subTo(e, e)), s.t = l, s.clamp(), a > 0 && s.rShiftTo(a, s), u < 0 && i.ZERO.subTo(s, s)
                    }
                }
            }, i.prototype.invDigit = function () {
                if (this.t < 1) return 0;
                var t = this[0];
                if (0 == (1 & t)) return 0;
                var e = 3 & t;
                return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
            }, i.prototype.isEven = function () {
                return 0 == (this.t > 0 ? 1 & this[0] : this.s)
            }, i.prototype.exp = function (t, e) {
                if (t > 4294967295 || t < 1) return i.ONE;
                var s = r(), n = r(), o = e.convert(this), h = p(t) - 1;
                for (o.copyTo(s); --h >= 0;) if (e.sqrTo(s, n), (t & 1 << h) > 0) e.mulTo(n, o, s); else {
                    var u = s;
                    s = n, n = u
                }
                return e.revert(s)
            }, i.prototype.toString = function (t) {
                if (this.s < 0) return "-" + this.negate().toString(t);
                var e;
                if (16 == t) e = 4; else if (8 == t) e = 3; else if (2 == t) e = 1; else if (32 == t) e = 5; else {
                    if (4 != t) return this.toRadix(t);
                    e = 2
                }
                var i, r = (1 << e) - 1, s = !1, n = "", o = this.t, h = this.DB - o * this.DB % e;
                if (o-- > 0) for (h < this.DB && (i = this[o] >> h) > 0 && (s = !0, n = f(i)); o >= 0;) h < e ? (i = (this[o] & (1 << h) - 1) << e - h, i |= this[--o] >> (h += this.DB - e)) : (i = this[o] >> (h -= e) & r, h <= 0 && (h += this.DB, --o)), i > 0 && (s = !0), s && (n += f(i));
                return s ? n : "0"
            }, i.prototype.negate = function () {
                var t = r();
                return i.ZERO.subTo(this, t), t
            }, i.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this
            }, i.prototype.compareTo = function (t) {
                var e = this.s - t.s;
                if (0 != e) return e;
                var i = this.t;
                if (0 != (e = i - t.t)) return this.s < 0 ? -e : e;
                for (; --i >= 0;) if (0 != (e = this[i] - t[i])) return e;
                return 0
            }, i.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + p(this[this.t - 1] ^ this.s & this.DM)
            }, i.prototype.mod = function (t) {
                var e = r();
                return this.abs().divRemTo(t, null, e), this.s < 0 && e.compareTo(i.ZERO) > 0 && t.subTo(e, e), e
            }, i.prototype.modPowInt = function (t, e) {
                var i;
                return i = t < 256 || e.isEven() ? new c(e) : new g(e), this.exp(t, i)
            }, i.ZERO = l(0), i.ONE = l(1), F.prototype.convert = B, F.prototype.revert = B, F.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i)
            }, F.prototype.sqrTo = function (t, e) {
                t.squareTo(e)
            }, x.prototype.convert = function (t) {
                if (t.s < 0 || t.t > 2 * this.m.t) return t.mod(this.m);
                if (t.compareTo(this.m) < 0) return t;
                var e = r();
                return t.copyTo(e), this.reduce(e), e
            }, x.prototype.revert = function (t) {
                return t
            }, x.prototype.reduce = function (t) {
                for (t.drShiftTo(this.m.t - 1, this.r2), t.t > this.m.t + 1 && (t.t = this.m.t + 1, t.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); t.compareTo(this.r2) < 0;) t.dAddOffset(1, this.m.t + 1);
                for (t.subTo(this.r2, t); t.compareTo(this.m) >= 0;) t.subTo(this.m, t)
            }, x.prototype.mulTo = function (t, e, i) {
                t.multiplyTo(e, i), this.reduce(i)
            }, x.prototype.sqrTo = function (t, e) {
                t.squareTo(e), this.reduce(e)
            };
            var w, S, I,
                D = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
                E = (1 << 26) / D[D.length - 1];

            function q() {
                var t;
                t = (new Date).getTime(), S[I++] ^= 255 & t, S[I++] ^= t >> 8 & 255, S[I++] ^= t >> 16 & 255, S[I++] ^= t >> 24 & 255, I >= L && (I -= L)
            }

            if (i.prototype.chunkSize = function (t) {
                return Math.floor(Math.LN2 * this.DB / Math.log(t))
            }, i.prototype.toRadix = function (t) {
                if (null == t && (t = 10), 0 == this.signum() || t < 2 || t > 36) return "0";
                var e = this.chunkSize(t), i = Math.pow(t, e), s = l(i), n = r(), o = r(), h = "";
                for (this.divRemTo(s, n, o); n.signum() > 0;) h = (i + o.intValue()).toString(t).substr(1) + h, n.divRemTo(s, n, o);
                return o.intValue().toString(t) + h
            }, i.prototype.fromRadix = function (t, e) {
                this.fromInt(0), null == e && (e = 10);
                for (var r = this.chunkSize(e), s = Math.pow(e, r), n = !1, o = 0, h = 0, u = 0; u < t.length; ++u) {
                    var f = a(t, u);
                    f < 0 ? "-" == t.charAt(u) && 0 == this.signum() && (n = !0) : (h = e * h + f, ++o >= r && (this.dMultiply(s), this.dAddOffset(h, 0), o = 0, h = 0))
                }
                o > 0 && (this.dMultiply(Math.pow(e, o)), this.dAddOffset(h, 0)), n && i.ZERO.subTo(this, this)
            }, i.prototype.fromNumber = function (t, e, r) {
                if ("number" == typeof e) if (t < 2) this.fromInt(1); else for (this.fromNumber(t, r), this.testBit(t - 1) || this.bitwiseTo(i.ONE.shiftLeft(t - 1), m, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(e);) this.dAddOffset(2, 0), this.bitLength() > t && this.subTo(i.ONE.shiftLeft(t - 1), this); else {
                    var s = new Array, n = 7 & t;
                    s.length = 1 + (t >> 3), e.nextBytes(s), n > 0 ? s[0] &= (1 << n) - 1 : s[0] = 0, this.fromString(s, 256)
                }
            }, i.prototype.bitwiseTo = function (t, e, i) {
                var r, s, n = Math.min(t.t, this.t);
                for (r = 0; r < n; ++r) i[r] = e(this[r], t[r]);
                if (t.t < this.t) {
                    for (s = t.s & this.DM, r = n; r < this.t; ++r) i[r] = e(this[r], s);
                    i.t = this.t
                } else {
                    for (s = this.s & this.DM, r = n; r < t.t; ++r) i[r] = e(s, t[r]);
                    i.t = t.t
                }
                i.s = e(this.s, t.s), i.clamp()
            }, i.prototype.changeBit = function (t, e) {
                var r = i.ONE.shiftLeft(t);
                return this.bitwiseTo(r, e, r), r
            }, i.prototype.addTo = function (t, e) {
                for (var i = 0, r = 0, s = Math.min(t.t, this.t); i < s;) r += this[i] + t[i], e[i++] = r & this.DM, r >>= this.DB;
                if (t.t < this.t) {
                    for (r += t.s; i < this.t;) r += this[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += this.s
                } else {
                    for (r += this.s; i < t.t;) r += t[i], e[i++] = r & this.DM, r >>= this.DB;
                    r += t.s
                }
                e.s = r < 0 ? -1 : 0, r > 0 ? e[i++] = r : r < -1 && (e[i++] = this.DV + r), e.t = i, e.clamp()
            }, i.prototype.dMultiply = function (t) {
                this[this.t] = this.am(0, t - 1, this, 0, 0, this.t), ++this.t, this.clamp()
            }, i.prototype.dAddOffset = function (t, e) {
                if (0 != t) {
                    for (; this.t <= e;) this[this.t++] = 0;
                    for (this[e] += t; this[e] >= this.DV;) this[e] -= this.DV, ++e >= this.t && (this[this.t++] = 0), ++this[e]
                }
            }, i.prototype.multiplyLowerTo = function (t, e, i) {
                var r, s = Math.min(this.t + t.t, e);
                for (i.s = 0, i.t = s; s > 0;) i[--s] = 0;
                for (r = i.t - this.t; s < r; ++s) i[s + this.t] = this.am(0, t[s], i, s, 0, this.t);
                for (r = Math.min(t.t, e); s < r; ++s) this.am(0, t[s], i, s, 0, e - s);
                i.clamp()
            }, i.prototype.multiplyUpperTo = function (t, e, i) {
                --e;
                var r = i.t = this.t + t.t - e;
                for (i.s = 0; --r >= 0;) i[r] = 0;
                for (r = Math.max(e - this.t, 0); r < t.t; ++r) i[this.t + r - e] = this.am(e - r, t[r], i, 0, 0, this.t + r - e);
                i.clamp(), i.drShiftTo(1, i)
            }, i.prototype.modInt = function (t) {
                if (t <= 0) return 0;
                var e = this.DV % t, i = this.s < 0 ? t - 1 : 0;
                if (this.t > 0) if (0 == e) i = this[0] % t; else for (var r = this.t - 1; r >= 0; --r) i = (e * i + this[r]) % t;
                return i
            }, i.prototype.millerRabin = function (t) {
                var e = this.subtract(i.ONE), s = e.getLowestSetBit();
                if (s <= 0) return !1;
                var n = e.shiftRight(s);
                (t = t + 1 >> 1) > D.length && (t = D.length);
                for (var o = r(), h = 0; h < t; ++h) {
                    o.fromInt(D[Math.floor(Math.random() * D.length)]);
                    var u = o.modPow(n, this);
                    if (0 != u.compareTo(i.ONE) && 0 != u.compareTo(e)) {
                        for (var f = 1; f++ < s && 0 != u.compareTo(e);) if (0 == (u = u.modPowInt(2, this)).compareTo(i.ONE)) return !1;
                        if (0 != u.compareTo(e)) return !1
                    }
                }
                return !0
            }, i.prototype.clone = function () {
                var t = r();
                return this.copyTo(t), t
            }, i.prototype.intValue = function () {
                if (this.s < 0) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            }, i.prototype.byteValue = function () {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            }, i.prototype.shortValue = function () {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            }, i.prototype.signum = function () {
                return this.s < 0 ? -1 : this.t <= 0 || 1 == this.t && this[0] <= 0 ? 0 : 1
            }, i.prototype.toByteArray = function () {
                var t = this.t, e = new Array;
                e[0] = this.s;
                var i, r = this.DB - t * this.DB % 8, s = 0;
                if (t-- > 0) for (r < this.DB && (i = this[t] >> r) != (this.s & this.DM) >> r && (e[s++] = i | this.s << this.DB - r); t >= 0;) r < 8 ? (i = (this[t] & (1 << r) - 1) << 8 - r, i |= this[--t] >> (r += this.DB - 8)) : (i = this[t] >> (r -= 8) & 255, r <= 0 && (r += this.DB, --t)), 0 != (128 & i) && (i |= -256), 0 == s && (128 & this.s) != (128 & i) && ++s, (s > 0 || i != this.s) && (e[s++] = i);
                return e
            }, i.prototype.equals = function (t) {
                return 0 == this.compareTo(t)
            }, i.prototype.min = function (t) {
                return this.compareTo(t) < 0 ? this : t
            }, i.prototype.max = function (t) {
                return this.compareTo(t) > 0 ? this : t
            }, i.prototype.and = function (t) {
                var e = r();
                return this.bitwiseTo(t, y, e), e
            }, i.prototype.or = function (t) {
                var e = r();
                return this.bitwiseTo(t, m, e), e
            }, i.prototype.xor = function (t) {
                var e = r();
                return this.bitwiseTo(t, d, e), e
            }, i.prototype.andNot = function (t) {
                var e = r();
                return this.bitwiseTo(t, v, e), e
            }, i.prototype.not = function () {
                for (var t = r(), e = 0; e < this.t; ++e) t[e] = this.DM & ~this[e];
                return t.t = this.t, t.s = ~this.s, t
            }, i.prototype.shiftLeft = function (t) {
                var e = r();
                return t < 0 ? this.rShiftTo(-t, e) : this.lShiftTo(t, e), e
            }, i.prototype.shiftRight = function (t) {
                var e = r();
                return t < 0 ? this.lShiftTo(-t, e) : this.rShiftTo(t, e), e
            }, i.prototype.getLowestSetBit = function () {
                for (var t = 0; t < this.t; ++t) if (0 != this[t]) return t * this.DB + T(this[t]);
                return this.s < 0 ? this.t * this.DB : -1
            }, i.prototype.bitCount = function () {
                for (var t = 0, e = this.s & this.DM, i = 0; i < this.t; ++i) t += b(this[i] ^ e);
                return t
            }, i.prototype.testBit = function (t) {
                var e = Math.floor(t / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << t % this.DB)
            }, i.prototype.setBit = function (t) {
                return this.changeBit(t, m)
            }, i.prototype.clearBit = function (t) {
                return this.changeBit(t, v)
            }, i.prototype.flipBit = function (t) {
                return this.changeBit(t, d)
            }, i.prototype.add = function (t) {
                var e = r();
                return this.addTo(t, e), e
            }, i.prototype.subtract = function (t) {
                var e = r();
                return this.subTo(t, e), e
            }, i.prototype.multiply = function (t) {
                var e = r();
                return this.multiplyTo(t, e), e
            }, i.prototype.divide = function (t) {
                var e = r();
                return this.divRemTo(t, e, null), e
            }, i.prototype.remainder = function (t) {
                var e = r();
                return this.divRemTo(t, null, e), e
            }, i.prototype.divideAndRemainder = function (t) {
                var e = r(), i = r();
                return this.divRemTo(t, e, i), new Array(e, i)
            }, i.prototype.modPow = function (t, e) {
                var i, s, n = t.bitLength(), o = l(1);
                if (n <= 0) return o;
                i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6, s = n < 8 ? new c(e) : e.isEven() ? new x(e) : new g(e);
                var h = new Array, u = 3, f = i - 1, a = (1 << i) - 1;
                if (h[1] = s.convert(this), i > 1) {
                    var y = r();
                    for (s.sqrTo(h[1], y); u <= a;) h[u] = r(), s.mulTo(y, h[u - 2], h[u]), u += 2
                }
                var m, d, v = t.t - 1, T = !0, b = r();
                for (n = p(t[v]) - 1; v >= 0;) {
                    for (n >= f ? m = t[v] >> n - f & a : (m = (t[v] & (1 << n + 1) - 1) << f - n, v > 0 && (m |= t[v - 1] >> this.DB + n - f)), u = i; 0 == (1 & m);) m >>= 1, --u;
                    if ((n -= u) < 0 && (n += this.DB, --v), T) h[m].copyTo(o), T = !1; else {
                        for (; u > 1;) s.sqrTo(o, b), s.sqrTo(b, o), u -= 2;
                        u > 0 ? s.sqrTo(o, b) : (d = o, o = b, b = d), s.mulTo(b, h[m], o)
                    }
                    for (; v >= 0 && 0 == (t[v] & 1 << n);) s.sqrTo(o, b), d = o, o = b, b = d, --n < 0 && (n = this.DB - 1, --v)
                }
                return s.revert(o)
            }, i.prototype.modInverse = function (t) {
                var e = t.isEven();
                if (this.isEven() && e || 0 == t.signum()) return i.ZERO;
                for (var r = t.clone(), s = this.clone(), n = l(1), o = l(0), h = l(0), u = l(1); 0 != r.signum();) {
                    for (; r.isEven();) r.rShiftTo(1, r), e ? (n.isEven() && o.isEven() || (n.addTo(this, n), o.subTo(t, o)), n.rShiftTo(1, n)) : o.isEven() || o.subTo(t, o), o.rShiftTo(1, o);
                    for (; s.isEven();) s.rShiftTo(1, s), e ? (h.isEven() && u.isEven() || (h.addTo(this, h), u.subTo(t, u)), h.rShiftTo(1, h)) : u.isEven() || u.subTo(t, u), u.rShiftTo(1, u);
                    r.compareTo(s) >= 0 ? (r.subTo(s, r), e && n.subTo(h, n), o.subTo(u, o)) : (s.subTo(r, s), e && h.subTo(n, h), u.subTo(o, u))
                }
                return 0 != s.compareTo(i.ONE) ? i.ZERO : u.compareTo(t) >= 0 ? u.subtract(t) : u.signum() < 0 ? (u.addTo(t, u), u.signum() < 0 ? u.add(t) : u) : u
            }, i.prototype.pow = function (t) {
                return this.exp(t, new F)
            }, i.prototype.gcd = function (t) {
                var e = this.s < 0 ? this.negate() : this.clone(), i = t.s < 0 ? t.negate() : t.clone();
                if (e.compareTo(i) < 0) {
                    var r = e;
                    e = i, i = r
                }
                var s = e.getLowestSetBit(), n = i.getLowestSetBit();
                if (n < 0) return e;
                for (s < n && (n = s), n > 0 && (e.rShiftTo(n, e), i.rShiftTo(n, i)); e.signum() > 0;) (s = e.getLowestSetBit()) > 0 && e.rShiftTo(s, e), (s = i.getLowestSetBit()) > 0 && i.rShiftTo(s, i), e.compareTo(i) >= 0 ? (e.subTo(i, e), e.rShiftTo(1, e)) : (i.subTo(e, i), i.rShiftTo(1, i));
                return n > 0 && i.lShiftTo(n, i), i
            }, i.prototype.isProbablePrime = function (t) {
                var e, i = this.abs();
                if (1 == i.t && i[0] <= D[D.length - 1]) {
                    for (e = 0; e < D.length; ++e) if (i[0] == D[e]) return !0;
                    return !1
                }
                if (i.isEven()) return !1;
                for (e = 1; e < D.length;) {
                    for (var r = D[e], s = e + 1; s < D.length && r < E;) r *= D[s++];
                    for (r = i.modInt(r); e < s;) if (r % D[e++] == 0) return !1
                }
                return i.millerRabin(t)
            }, i.prototype.square = function () {
                var t = r();
                return this.squareTo(t), t
            }, i.prototype.Barrett = x, null == S) {
                var A;
                if (S = new Array, I = 0, "undefined" != typeof window && window.crypto) if (window.crypto.getRandomValues) {
                    var O = new Uint8Array(32);
                    for (window.crypto.getRandomValues(O), A = 0; A < 32; ++A) S[I++] = O[A]
                } else if ("Netscape" == navigator.appName && navigator.appVersion < "5") {
                    var R = window.crypto.random(32);
                    for (A = 0; A < R.length; ++A) S[I++] = 255 & R.charCodeAt(A)
                }
                for (; I < L;) A = Math.floor(65536 * Math.random()), S[I++] = A >>> 8, S[I++] = 255 & A;
                I = 0, q()
            }

            function V() {
                if (null == w) {
                    for (q(), (w = new k).init(S), I = 0; I < S.length; ++I) S[I] = 0;
                    I = 0
                }
                return w.next()
            }

            function M() {
            }

            function k() {
                this.i = 0, this.j = 0, this.S = new Array
            }

            M.prototype.nextBytes = function (t) {
                var e;
                for (e = 0; e < t.length; ++e) t[e] = V()
            }, k.prototype.init = function (t) {
                var e, i, r;
                for (e = 0; e < 256; ++e) this.S[e] = e;
                for (i = 0, e = 0; e < 256; ++e) i = i + this.S[e] + t[e % t.length] & 255, r = this.S[e], this.S[e] = this.S[i], this.S[i] = r;
                this.i = 0, this.j = 0
            }, k.prototype.next = function () {
                var t;
                return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, t = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = t, this.S[t + this.S[this.i] & 255]
            };
            var L = 256;
            t.exports = {default: i, BigInteger: i, SecureRandom: M}
        }).call(this)
    }, function (t, e, i) {
        (function (e) {
            try {
                window = window || {}
            } catch (t) {
                e.window = {}
            }
            t.exports = {sm2: i(7), sm3: i(10), sm4: i(11)}
        }).call(this, i(6))
    }, function (t, e, i) {
        const {BigInteger: r} = i(0), s = new r("3");

        class n {
            constructor(t, e) {
                this.x = e, this.q = t
            }

            equals(t) {
                return t === this || this.q.equals(t.q) && this.x.equals(t.x)
            }

            toBigInteger() {
                return this.x
            }

            negate() {
                return new n(this.q, this.x.negate().mod(this.q))
            }

            add(t) {
                return new n(this.q, this.x.add(t.toBigInteger()).mod(this.q))
            }

            subtract(t) {
                return new n(this.q, this.x.subtract(t.toBigInteger()).mod(this.q))
            }

            multiply(t) {
                return new n(this.q, this.x.multiply(t.toBigInteger()).mod(this.q))
            }

            square() {
                return new n(this.q, this.x.square().mod(this.q))
            }

            divide(t) {
                return new n(this.q, this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))
            }
        }

        class o {
            constructor(t, e, i, s) {
                this.curve = t, this.x = e, this.y = i, this.z = null == s ? r.ONE : s, this.zinv = null
            }

            getX() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }

            getY() {
                return null === this.zinv && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
            }

            equals(t) {
                if (t === this) return !0;
                if (this.isInfinity()) return t.isInfinity();
                if (t.isInfinity()) return this.isInfinity();
                return !!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(r.ZERO) && t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(r.ZERO)
            }

            isInfinity() {
                return null === this.x && null === this.y || this.z.equals(r.ZERO) && !this.y.toBigInteger().equals(r.ZERO)
            }

            negate() {
                return new o(this.curve, this.x, this.y.negate(), this.z)
            }

            add(t) {
                if (this.isInfinity()) return t;
                if (t.isInfinity()) return this;
                let e = t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),
                    i = t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);
                if (r.ZERO.equals(i)) return r.ZERO.equals(e) ? this.twice() : this.curve.getInfinity();
                let n = this.x.toBigInteger(), h = this.y.toBigInteger(), u = i.square(), f = u.multiply(i),
                    a = n.multiply(u), l = e.square().multiply(this.z),
                    p = l.subtract(a.shiftLeft(1)).multiply(t.z).subtract(f).multiply(i).mod(this.curve.q),
                    c = a.multiply(s).multiply(e).subtract(h.multiply(f)).subtract(l.multiply(e)).multiply(t.z).add(e.multiply(f)).mod(this.curve.q),
                    g = f.multiply(this.z).multiply(t.z).mod(this.curve.q);
                return new o(this.curve, this.curve.fromBigInteger(p), this.curve.fromBigInteger(c), g)
            }

            twice() {
                if (this.isInfinity()) return this;
                if (0 == this.y.toBigInteger().signum()) return this.curve.getInfinity();
                let t = this.x.toBigInteger(), e = this.y.toBigInteger(), i = e.multiply(this.z),
                    n = i.multiply(e).mod(this.curve.q), h = this.curve.a.toBigInteger(), u = t.square().multiply(s);
                r.ZERO.equals(h) || (u = u.add(this.z.square().multiply(h)));
                let f = (u = u.mod(this.curve.q)).square().subtract(t.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(i).mod(this.curve.q),
                    a = u.multiply(s).multiply(t).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(u.square().multiply(u)).mod(this.curve.q),
                    l = i.square().multiply(i).shiftLeft(3).mod(this.curve.q);
                return new o(this.curve, this.curve.fromBigInteger(f), this.curve.fromBigInteger(a), l)
            }

            multiply(t) {
                if (this.isInfinity()) return this;
                if (0 == t.signum()) return this.curve.getInfinity();
                let e = t, i = e.multiply(new r("3")), s = this.negate(), n = this;
                for (let t = i.bitLength() - 2; t > 0; --t) {
                    n = n.twice();
                    let r = i.testBit(t);
                    r != e.testBit(t) && (n = n.add(r ? this : s))
                }
                return n
            }

            multiplyTwo(t, e, i) {
                let r = t.bitLength() > i.bitLength() ? t.bitLength() - 1 : i.bitLength() - 1,
                    s = this.curve.getInfinity(), n = this.add(e);
                for (; r >= 0;) s = s.twice(), t.testBit(r) ? s = i.testBit(r) ? s.add(n) : s.add(this) : i.testBit(r) && (s = s.add(e)), --r;
                return s
            }

            static decodeFromHex(t, e) {
                let i = e.length - 2, s = e.substr(2, i / 2), n = e.substr(2 + i / 2, i / 2), h = new r(s, 16),
                    u = new r(n, 16);
                return new o(t, t.fromBigInteger(h), t.fromBigInteger(u))
            }
        }

        t.exports = {
            ECFieldElementFp: n, ECPointFp: o, ECCurveFp: class {
                constructor(t, e, i) {
                    this.q = t, this.a = this.fromBigInteger(e), this.b = this.fromBigInteger(i), this.infinity = new o(this, null, null)
                }

                getQ() {
                    return this.q
                }

                getA() {
                    return this.a
                }

                getB() {
                    return this.b
                }

                equals(t) {
                    return t === this || this.q.equals(t.q) && this.a.equals(t.a) && this.b.equals(t.b)
                }

                getInfinity() {
                    return this.infinity
                }

                fromBigInteger(t) {
                    return new n(this.q, t)
                }

                decodePointHex(t) {
                    switch (parseInt(t.substr(0, 2), 16)) {
                        case 0:
                            return this.infinity;
                        case 2:
                        case 3:
                            return null;
                        case 4:
                        case 6:
                        case 7:
                            let e = (t.length - 2) / 2, i = t.substr(2, e), s = t.substr(e + 2, e);
                            return new o(this, this.fromBigInteger(new r(i, 16)), this.fromBigInteger(new r(s, 16)));
                        default:
                            return null
                    }
                }
            }
        }
    }, function (t, e, i) {
        const {BigInteger: r, SecureRandom: s} = i(0), {ECCurveFp: n} = i(2);
        let o = new s, {G: h, n: u} = f();

        function f() {
            let t = new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16),
                e = new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16),
                i = new r("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16),
                s = new r("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16), o = new n(t, e, i),
                h = o.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0");
            return {curve: o, G: h, n: s}
        }

        function a(t, e) {
            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
        }

        t.exports = {
            generateEcparam: f, generateKeyPairHex: function () {
                let t = new r(u.bitLength(), o).mod(u.subtract(r.ONE)).add(r.ONE), e = a(t.toString(16), 64),
                    i = h.multiply(t);
                return {
                    privateKey: e,
                    publicKey: "04" + a(i.getX().toBigInteger().toString(16), 64) + a(i.getY().toBigInteger().toString(16), 64)
                }
            }, parseUtf8StringToHex: function (t) {
                let e = (t = unescape(encodeURIComponent(t))).length, i = [];
                for (let r = 0; r < e; r++) i[r >>> 2] |= (255 & t.charCodeAt(r)) << 24 - r % 4 * 8;
                let r = [];
                for (let t = 0; t < e; t++) {
                    let e = i[t >>> 2] >>> 24 - t % 4 * 8 & 255;
                    r.push((e >>> 4).toString(16)), r.push((15 & e).toString(16))
                }
                return r.join("")
            }, parseArrayBufferToHex: function (t) {
                return Array.prototype.map.call(new Uint8Array(t), t => ("00" + t.toString(16)).slice(-2)).join("")
            }, leftPad: a, arrayToHex: function (t) {
                let e = [], i = 0;
                for (let r = 0; r < 2 * t.length; r += 2) e[r >>> 3] |= parseInt(t[i]) << 24 - r % 8 * 4, i++;
                let r = [];
                for (let i = 0; i < t.length; i++) {
                    let t = e[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                    r.push((t >>> 4).toString(16)), r.push((15 & t).toString(16))
                }
                return r.join("")
            }, arrayToUtf8: function (t) {
                let e = [], i = 0;
                for (let r = 0; r < 2 * t.length; r += 2) e[r >>> 3] |= parseInt(t[i]) << 24 - r % 8 * 4, i++;
                try {
                    let i = [];
                    for (let r = 0; r < t.length; r++) {
                        let t = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        i.push(String.fromCharCode(t))
                    }
                    return decodeURIComponent(escape(i.join("")))
                } catch (t) {
                    throw new Error("Malformed UTF-8 data")
                }
            }, hexToArray: function (t) {
                let e = [], i = t.length;
                i % 2 != 0 && (t = a(t, i + 1)), i = t.length;
                for (let r = 0; r < i; r += 2) e.push(parseInt(t.substr(r, 2), 16));
                return e
            }
        }
    }, function (t, e, i) {
        const {BigInteger: r} = i(0), s = i(3);
        let n = function (t, e, i, r, s) {
            for (let n = 0; n < s; n++) i[r + n] = t[e + n]
        };
        const o = {
            minValue: -parseInt("10000000000000000000000000000000", 2),
            maxValue: parseInt("1111111111111111111111111111111", 2),
            parse: function (t) {
                if (t < this.minValue) {
                    let e = new Number(-t).toString(2), i = e.substr(e.length - 31, 31), r = "";
                    for (let t = 0; t < i.length; t++) {
                        r += "0" == i.substr(t, 1) ? "1" : "0"
                    }
                    return parseInt(r, 2) + 1
                }
                if (t > this.maxValue) {
                    let e = Number(t).toString(2), i = e.substr(e.length - 31, 31), r = "";
                    for (let t = 0; t < i.length; t++) {
                        r += "0" == i.substr(t, 1) ? "1" : "0"
                    }
                    return -(parseInt(r, 2) + 1)
                }
                return t
            },
            parseByte: function (t) {
                if (t < 0) {
                    let e = new Number(-t).toString(2), i = e.substr(e.length - 8, 8), r = "";
                    for (let t = 0; t < i.length; t++) {
                        r += "0" == i.substr(t, 1) ? "1" : "0"
                    }
                    return parseInt(r, 2) + 1
                }
                if (t > 255) {
                    let e = Number(t).toString(2);
                    return parseInt(e.substr(e.length - 8, 8), 2)
                }
                return t
            }
        };
        t.exports = class {
            constructor() {
                this.xBuf = new Array, this.xBufOff = 0, this.byteCount = 0, this.DIGEST_LENGTH = 32, this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214], this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082], this.v = new Array(8), this.v_ = new Array(8), this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.X = new Array(68), this.xOff = 0, this.T_00_15 = 2043430169, this.T_16_63 = 2055708042, arguments.length > 0 ? this.initDigest(arguments[0]) : this.init()
            }

            init() {
                this.xBuf = new Array(4), this.reset()
            }

            initDigest(t) {
                this.xBuf = [].concat(t.xBuf), this.xBufOff = t.xBufOff, this.byteCount = t.byteCount, n(t.X, 0, this.X, 0, t.X.length), this.xOff = t.xOff, n(t.v, 0, this.v, 0, t.v.length)
            }

            getDigestSize() {
                return this.DIGEST_LENGTH
            }

            reset() {
                this.byteCount = 0, this.xBufOff = 0;
                for (let t in this.xBuf) this.xBuf[t] = null;
                n(this.v0, 0, this.v, 0, this.v0.length), this.xOff = 0, n(this.X0, 0, this.X, 0, this.X0.length)
            }

            processBlock() {
                let t, e = this.X, i = new Array(64);
                for (t = 16; t < 68; t++) e[t] = this.p1(e[t - 16] ^ e[t - 9] ^ this.rotate(e[t - 3], 15)) ^ this.rotate(e[t - 13], 7) ^ e[t - 6];
                for (t = 0; t < 64; t++) i[t] = e[t] ^ e[t + 4];
                let r, s, h, u, f, a = this.v, l = this.v_;
                for (n(a, 0, l, 0, this.v0.length), t = 0; t < 16; t++) f = this.rotate(l[0], 12), r = o.parse(o.parse(f + l[4]) + this.rotate(this.T_00_15, t)), s = (r = this.rotate(r, 7)) ^ f, h = o.parse(o.parse(this.ff_00_15(l[0], l[1], l[2]) + l[3]) + s) + i[t], u = o.parse(o.parse(this.gg_00_15(l[4], l[5], l[6]) + l[7]) + r) + e[t], l[3] = l[2], l[2] = this.rotate(l[1], 9), l[1] = l[0], l[0] = h, l[7] = l[6], l[6] = this.rotate(l[5], 19), l[5] = l[4], l[4] = this.p0(u);
                for (t = 16; t < 64; t++) f = this.rotate(l[0], 12), r = o.parse(o.parse(f + l[4]) + this.rotate(this.T_16_63, t)), s = (r = this.rotate(r, 7)) ^ f, h = o.parse(o.parse(this.ff_16_63(l[0], l[1], l[2]) + l[3]) + s) + i[t], u = o.parse(o.parse(this.gg_16_63(l[4], l[5], l[6]) + l[7]) + r) + e[t], l[3] = l[2], l[2] = this.rotate(l[1], 9), l[1] = l[0], l[0] = h, l[7] = l[6], l[6] = this.rotate(l[5], 19), l[5] = l[4], l[4] = this.p0(u);
                for (t = 0; t < 8; t++) a[t] ^= o.parse(l[t]);
                this.xOff = 0, n(this.X0, 0, this.X, 0, this.X0.length)
            }

            processWord(t, e) {
                let i = t[e] << 24;
                i |= (255 & t[++e]) << 16, i |= (255 & t[++e]) << 8, i |= 255 & t[++e], this.X[this.xOff] = i, 16 == ++this.xOff && this.processBlock()
            }

            processLength(t) {
                this.xOff > 14 && this.processBlock(), this.X[14] = this.urShiftLong(t, 32), this.X[15] = 4294967295 & t
            }

            intToBigEndian(t, e, i) {
                e[i] = o.parseByte(this.urShift(t, 24)), e[++i] = o.parseByte(this.urShift(t, 16)), e[++i] = o.parseByte(this.urShift(t, 8)), e[++i] = o.parseByte(t)
            }

            doFinal(t, e) {
                this.finish();
                for (let i = 0; i < 8; i++) this.intToBigEndian(this.v[i], t, e + 4 * i);
                return this.reset(), this.DIGEST_LENGTH
            }

            update(t) {
                this.xBuf[this.xBufOff++] = t, this.xBufOff == this.xBuf.length && (this.processWord(this.xBuf, 0), this.xBufOff = 0), this.byteCount++
            }

            blockUpdate(t, e, i) {
                for (; 0 != this.xBufOff && i > 0;) this.update(t[e]), e++, i--;
                for (; i > this.xBuf.length;) this.processWord(t, e), e += this.xBuf.length, i -= this.xBuf.length, this.byteCount += this.xBuf.length;
                for (; i > 0;) this.update(t[e]), e++, i--
            }

            finish() {
                let t = this.byteCount << 3;
                for (this.update(128); 0 != this.xBufOff;) this.update(0);
                this.processLength(t), this.processBlock()
            }

            rotate(t, e) {
                return t << e | this.urShift(t, 32 - e)
            }

            p0(t) {
                return t ^ this.rotate(t, 9) ^ this.rotate(t, 17)
            }

            p1(t) {
                return t ^ this.rotate(t, 15) ^ this.rotate(t, 23)
            }

            ff_00_15(t, e, i) {
                return t ^ e ^ i
            }

            ff_16_63(t, e, i) {
                return t & e | t & i | e & i
            }

            gg_00_15(t, e, i) {
                return t ^ e ^ i
            }

            gg_16_63(t, e, i) {
                return t & e | ~t & i
            }

            urShift(t, e) {
                return (t > o.maxValue || t < o.minValue) && (t = o.parse(t)), t >= 0 ? t >> e : (t >> e) + (2 << ~e)
            }

            urShiftLong(t, e) {
                let i, s = new r;
                if (s.fromInt(t), s.signum() >= 0) i = s.shiftRight(e).intValue(); else {
                    let s = new r;
                    s.fromInt(2);
                    let n = ~e, o = "";
                    if (n < 0) {
                        let s = 64 + n;
                        for (let t = 0; t < s; t++) o += "0";
                        let h = new r;
                        h.fromInt(t >> e);
                        let u = new r("10" + o, 2);
                        o = u.toRadix(10), i = u.add(h).toRadix(10)
                    } else i = (t >> e) + (o = s.shiftLeft(~e).intValue())
                }
                return i
            }

            getZ(t, e) {
                let i = s.parseUtf8StringToHex("1234567812345678"), r = 4 * i.length;
                this.update(r >> 8 & 255), this.update(255 & r);
                let n = s.hexToArray(i);
                this.blockUpdate(n, 0, n.length);
                let o = s.hexToArray(t.curve.a.toBigInteger().toRadix(16)),
                    h = s.hexToArray(t.curve.b.toBigInteger().toRadix(16)),
                    u = s.hexToArray(t.getX().toBigInteger().toRadix(16)),
                    f = s.hexToArray(t.getY().toBigInteger().toRadix(16)), a = s.hexToArray(e.substr(0, 64)),
                    l = s.hexToArray(e.substr(64, 64));
                this.blockUpdate(o, 0, o.length), this.blockUpdate(h, 0, h.length), this.blockUpdate(u, 0, u.length), this.blockUpdate(f, 0, f.length), this.blockUpdate(a, 0, a.length), this.blockUpdate(l, 0, l.length);
                let p = new Array(this.getDigestSize());
                return this.doFinal(p, 0), p
            }
        }
    }, function (t, e, i) {
        "use strict";
        i.r(e), i.d(e, "smEncrypt", function () {
            return s
        });
        var r = i(1), s = {
            sm2Encrypt: function (t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                return "04" + r.sm2.doEncrypt(t, e, i)
            }, sm2Decrypt: function (t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = t.toLowerCase().replace(/^04/, "");
                return r.sm2.doDecrypt(s, e.toLowerCase(), i)
            }, sm2: r.sm2, sm3: r.sm3, sm4: r.sm4
        }
    }, function (t, e) {
        var i;
        i = function () {
            return this
        }();
        try {
            i = i || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (i = window)
        }
        t.exports = i
    }, function (t, e, i) {
        const {BigInteger: r} = i(0), {encodeDer: s, decodeDer: n} = i(8), {ECPointFp: o} = i(2), h = i(4), u = i(9),
            f = i(3);
        let {G: a, curve: l, n: p} = f.generateEcparam();
        const c = 0;

        function g(t, e) {
            let i = new h, r = (new h).getZ(a, e.substr(2, 128)), s = f.hexToArray(f.arrayToHex(r).toString()), n = t,
                o = f.hexToArray(n), u = new Array(i.getDigestSize());
            return i.blockUpdate(s, 0, s.length), i.blockUpdate(o, 0, o.length), i.doFinal(u, 0), f.arrayToHex(u).toString()
        }

        function y() {
            let t = f.generateKeyPairHex(), e = o.decodeFromHex(l, t.publicKey);
            return t.k = new r(t.privateKey, 16), t.x1 = e.getX().toBigInteger(), t
        }

        t.exports = {
            generateKeyPairHex: f.generateKeyPairHex, doEncrypt: function (t, e, i = 1) {
                let r = new u;
                t = f.hexToArray(f.parseUtf8StringToHex(t)), e.length > 128 && (e = e.substr(e.length - 128));
                let s = e.substr(0, 64), n = e.substr(64);
                e = r.createPoint(s, n);
                let o = r.initEncipher(e);
                r.encryptBlock(t);
                let h = f.arrayToHex(t), a = new Array(32);
                return r.doFinal(a), a = f.arrayToHex(a), i === c ? o + h + a : o + a + h
            }, doDecrypt: function (t, e, i = 1) {
                let s = new u(i);
                e = new r(e, 16);
                let n = t.substr(0, 64), o = t.substr(0 + n.length, 64), h = n.length + o.length, a = t.substr(h, 64),
                    l = t.substr(h + 64);
                i === c && (a = t.substr(t.length - 64), l = t.substr(h, t.length - h - 64));
                let p = f.hexToArray(l), g = s.createPoint(n, o);
                s.initDecipher(e, g), s.decryptBlock(p);
                let y = new Array(32);
                if (s.doFinal(y), f.arrayToHex(y) == a) return f.arrayToUtf8(p);
                return ""
            }, doSignature: function (t, e, {pointPool: i, der: n, hash: o, publicKey: h} = {}) {
                let u = "string" == typeof t ? f.parseUtf8StringToHex(t) : f.parseArrayBufferToHex(t);
                o && (u = g(u, h = h || function (t) {
                    let e = a.multiply(new r(t, 16)), i = f.leftPad(e.getX().toBigInteger().toString(16), 64),
                        s = f.leftPad(e.getY().toBigInteger().toString(16), 64);
                    return "04" + i + s
                }(e)));
                let l = new r(e, 16), c = new r(u, 16), m = null, d = null, v = null;
                do {
                    do {
                        let t;
                        m = (t = i && i.length ? i.pop() : y()).k, d = c.add(t.x1).mod(p)
                    } while (d.equals(r.ZERO) || d.add(m).equals(p));
                    v = l.add(r.ONE).modInverse(p).multiply(m.subtract(d.multiply(l))).mod(p)
                } while (v.equals(r.ZERO));
                return n ? s(d, v) : f.leftPad(d.toString(16), 64) + f.leftPad(v.toString(16), 64)
            }, doVerifySignature: function (t, e, i, {der: s, hash: h} = {}) {
                let u, c, y = "string" == typeof t ? f.parseUtf8StringToHex(t) : f.parseArrayBufferToHex(t);
                if (h && (y = g(y, i)), s) {
                    let t = n(e);
                    u = t.r, c = t.s
                } else u = new r(e.substring(0, 64), 16), c = new r(e.substring(64), 16);
                let m = o.decodeFromHex(l, i), d = new r(y, 16), v = u.add(c).mod(p);
                if (v.equals(r.ZERO)) return !1;
                let T = a.multiply(c).add(m.multiply(v)), b = d.add(T.getX().toBigInteger()).mod(p);
                return u.equals(b)
            }, getPoint: y
        }
    }, function (t, e, i) {
        const {BigInteger: r} = i(0);

        class s {
            constructor() {
                this.isModified = !0, this.hTLV = null, this.hT = "00", this.hL = "00", this.hV = ""
            }

            getLengthHexFromValue() {
                let t = this.hV.length / 2, e = t.toString(16);
                if (e.length % 2 == 1 && (e = "0" + e), t < 128) return e;
                return (128 + e.length / 2).toString(16) + e
            }

            getEncodedHex() {
                return (null == this.hTLV || this.isModified) && (this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1), this.hTLV
            }

            getFreshValueHex() {
                return ""
            }
        }

        class n extends s {
            constructor(t) {
                super(), this.hT = "02", t && t.bigint && (this.hTLV = null, this.isModified = !0, this.hV = function (t) {
                    let e = t.toString(16);
                    if ("-" !== e.substr(0, 1)) e.length % 2 == 1 ? e = "0" + e : e.match(/^[0-7]/) || (e = "00" + e); else {
                        let i = e.substr(1).length;
                        i % 2 == 1 ? i += 1 : e.match(/^[0-7]/) || (i += 2);
                        let s = "";
                        for (let t = 0; t < i; t++) s += "f";
                        e = new r(s, 16).xor(t).add(r.ONE).toString(16).replace(/^-/, "")
                    }
                    return e
                }(t.bigint))
            }

            getFreshValueHex() {
                return this.hV
            }
        }

        class o extends s {
            constructor(t) {
                super(), this.hT = "30", this.asn1Array = [], t && t.array && (this.asn1Array = t.array)
            }

            getFreshValueHex() {
                let t = "";
                for (let e = 0; e < this.asn1Array.length; e++) {
                    t += this.asn1Array[e].getEncodedHex()
                }
                return this.hV = t, this.hV
            }
        }

        function h(t, e) {
            if ("8" !== t.substring(e + 2, e + 3)) return 1;
            let i = parseInt(t.substring(e + 3, e + 4));
            return 0 === i ? -1 : 0 < i && i < 10 ? i + 1 : -2
        }

        function u(t, e) {
            let i, s = function (t, e) {
                let i = h(t, e);
                return i < 1 ? "" : t.substring(e + 2, e + 2 + 2 * i)
            }(t, e);
            return "" === s ? -1 : (i = parseInt(s.substring(0, 1)) < 8 ? new r(s, 16) : new r(s.substring(2), 16)).intValue()
        }

        function f(t, e) {
            let i = h(t, e);
            return i < 0 ? l_len : e + 2 * (i + 1)
        }

        function a(t, e) {
            let i = f(t, e), r = u(t, e);
            return t.substring(i, i + 2 * r)
        }

        function l(t, e) {
            return f(t, e) + 2 * u(t, e)
        }

        t.exports = {
            encodeDer(t, e) {
                let i = new n({bigint: t}), r = new n({bigint: e});
                return new o({array: [i, r]}).getEncodedHex()
            }, decodeDer(t) {
                let e = function (t, e) {
                    let i = [], r = f(t, e);
                    i.push(r);
                    let s = u(t, e), n = r, o = 0;
                    for (; ;) {
                        var h = l(t, n);
                        if (null === h || h - r >= 2 * s) break;
                        if (o >= 200) break;
                        i.push(h), n = h, o++
                    }
                    return i
                }(t, 0), i = e[0], s = e[1], n = a(t, i), o = a(t, s);
                return {r: new r(n, 16), s: new r(o, 16)}
            }
        }
    }, function (t, e, i) {
        const {BigInteger: r} = i(0), {ECPointFp: s} = i(2), n = i(4), o = i(3);
        t.exports = class {
            constructor() {
                this.ct = 1, this.p2 = null, this.sm3keybase = null, this.sm3c3 = null, this.key = new Array(32), this.keyOff = 0
            }

            reset() {
                this.sm3keybase = new n, this.sm3c3 = new n;
                let t = o.hexToArray(this.p2.getX().toBigInteger().toRadix(16)),
                    e = o.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                this.sm3keybase.blockUpdate(t, 0, t.length), this.sm3c3.blockUpdate(t, 0, t.length), this.sm3keybase.blockUpdate(e, 0, e.length), this.ct = 1, this.nextKey()
            }

            nextKey() {
                let t = new n(this.sm3keybase);
                t.update(this.ct >> 24 & 255), t.update(this.ct >> 16 & 255), t.update(this.ct >> 8 & 255), t.update(255 & this.ct), t.doFinal(this.key, 0), this.keyOff = 0, this.ct++
            }

            initEncipher(t) {
                let e = o.generateKeyPairHex(), i = new r(e.privateKey, 16), s = e.publicKey;
                return this.p2 = t.multiply(i), this.reset(), s.length > 128 && (s = s.substr(s.length - 128)), s
            }

            encryptBlock(t) {
                this.sm3c3.blockUpdate(t, 0, t.length);
                for (let e = 0; e < t.length; e++) this.keyOff === this.key.length && this.nextKey(), t[e] ^= this.key[this.keyOff++]
            }

            initDecipher(t, e) {
                this.p2 = e.multiply(t), this.reset()
            }

            decryptBlock(t) {
                for (let e = 0; e < t.length; e++) this.keyOff === this.key.length && this.nextKey(), t[e] ^= this.key[this.keyOff++];
                this.sm3c3.blockUpdate(t, 0, t.length)
            }

            doFinal(t) {
                let e = o.hexToArray(this.p2.getY().toBigInteger().toRadix(16));
                this.sm3c3.blockUpdate(e, 0, e.length), this.sm3c3.doFinal(t, 0), this.reset()
            }

            createPoint(t, e) {
                let i = "04" + t + e;
                return s.decodeFromHex(o.generateEcparam().curve, i)
            }
        }
    }, function (t, e, i) {
        function r(t, e) {
            return t.length >= e ? t : new Array(e - t.length + 1).join("0") + t
        }

        function s(t) {
            let e = "";
            for (let i = 0; i < t.length / 2; i++) e += r(parseInt(t.substr(2 * i, 2), 16).toString(2), 8);
            return e
        }

        function n(t, e) {
            return t.substring(e % t.length) + t.substr(0, e % t.length)
        }

        function o(t, e, i) {
            const r = t || "", s = e || "", n = [];
            let o;
            for (let t = r.length - 1; t >= 0; t--) o = i(r[t], s[t], o), n[t] = o[0];
            return n.join("")
        }

        function h(t, e) {
            return o(t, e, (t, e) => [t === e ? "0" : "1"])
        }

        function u(t, e) {
            return o(t, e, (t, e) => ["1" === t && "1" === e ? "1" : "0"])
        }

        function f(t, e) {
            return o(t, e, (t, e) => ["1" === t || "1" === e ? "1" : "0"])
        }

        function a(t, e) {
            return o(t, e, (t, e, i) => {
                const r = i ? i[1] : "0";
                return t !== e ? ["0" === r ? "1" : "0", r] : [r, t]
            })
        }

        function l(t) {
            return (...e) => e.reduce((e, i) => t(e, i))
        }

        function p(t) {
            return l(h)(t, n(t, 9), n(t, 17))
        }

        function c(t, e, i, r) {
            return r >= 0 && r <= 15 ? l(h)(t, e, i) : l(f)(u(t, e), u(t, i), u(e, i))
        }

        function g(t, e, i, r) {
            return r >= 0 && r <= 15 ? l(h)(t, e, i) : f(u(t, e), u(o(t, void 0, t => ["1" === t ? "0" : "1"]), i))
        }

        function y(t) {
            return s(t >= 0 && t <= 15 ? "79cc4519" : "7a879d8a")
        }

        function m(t, e) {
            const i = [], r = [];
            for (let t = 0; t < 16; t++) i.push(e.substr(32 * t, 32));
            for (let t = 16; t < 68; t++) i.push(l(h)((s = l(h)(i[t - 16], i[t - 9], n(i[t - 3], 15)), l(h)(s, n(s, 15), n(s, 23))), n(i[t - 13], 7), i[t - 6]));
            var s;
            for (let t = 0; t < 64; t++) r.push(h(i[t], i[t + 4]));
            const o = [];
            for (let e = 0; e < 8; e++) o.push(t.substr(32 * e, 32));
            let u, f, m, d, v = o[0], T = o[1], b = o[2], F = o[3], B = o[4], x = o[5], w = o[6], S = o[7];
            for (let t = 0; t < 64; t++) f = h(u = n(l(a)(n(v, 12), B, n(y(t), t)), 7), n(v, 12)), m = l(a)(c(v, T, b, t), F, f, r[t]), d = l(a)(g(B, x, w, t), S, u, i[t]), F = b, b = n(T, 9), T = v, v = m, S = w, w = n(x, 19), x = B, B = p(d);
            return h([v, T, b, F, B, x, w, S].join(""), t)
        }

        t.exports = function (t) {
            const e = function (t) {
                let e = "";
                for (const i of t) e += r(i.codePointAt(0).toString(2), 8);
                return e
            }(t), i = e.length;
            let n = i % 512;
            const o = `${e}1${r("", n = n >= 448 ? 512 - n % 448 - 1 : 448 - n - 1)}${r(i.toString(2), 64)}`.toString(),
                h = (i + n + 65) / 512;
            let u = s("7380166f4914b2b9172442d7da8a0600a96f30bc163138aae38dee4db0fb0e4e");
            for (let t = 0; t <= h - 1; t++) {
                u = m(u, o.substr(512 * t, 512))
            }
            return function (t) {
                let e = "";
                for (let i = 0; i < t.length / 8; i++) e += r(parseInt(t.substr(8 * i, 8), 2).toString(16), 2);
                return e
            }(u)
        }
    }, function (t, e) {
        const i = 0, r = 32, s = 16,
            n = [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5, 43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153, 156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98, 228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166, 71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168, 104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53, 30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135, 212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158, 234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161, 224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227, 29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111, 213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81, 141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216, 10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176, 137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132, 24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72],
            o = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257];

        function h(t, e) {
            return t << e | t >>> 32 - e
        }

        function u(t) {
            return (255 & n[t >>> 24 & 255]) << 24 | (255 & n[t >>> 16 & 255]) << 16 | (255 & n[t >>> 8 & 255]) << 8 | 255 & n[255 & t]
        }

        function f(t) {
            return t ^ h(t, 2) ^ h(t, 10) ^ h(t, 18) ^ h(t, 24)
        }

        function a(t) {
            return t ^ h(t, 13) ^ h(t, 23)
        }

        function l(t, e, i) {
            let r, s, n = new Array(4), o = new Array(4);
            for (let e = 0; e < 4; e++) o[0] = 255 & t[0 + 4 * e], o[1] = 255 & t[1 + 4 * e], o[2] = 255 & t[2 + 4 * e], o[3] = 255 & t[3 + 4 * e], n[e] = o[0] << 24 | o[1] << 16 | o[2] << 8 | o[3];
            for (r = 0; r < 32; r += 4) s = u(s = n[1] ^ n[2] ^ n[3] ^ i[r + 0]), n[0] = n[0] ^ f(s), s = u(s = n[2] ^ n[3] ^ n[0] ^ i[r + 1]), n[1] = n[1] ^ f(s), s = u(s = n[3] ^ n[0] ^ n[1] ^ i[r + 2]), n[2] = n[2] ^ f(s), s = u(s = n[0] ^ n[1] ^ n[2] ^ i[r + 3]), n[3] = n[3] ^ f(s);
            for (let t = 0; t < 16; t += 4) e[t] = n[3 - t / 4] >>> 24 & 255, e[t + 1] = n[3 - t / 4] >>> 16 & 255, e[t + 2] = n[3 - t / 4] >>> 8 & 255, e[t + 3] = 255 & n[3 - t / 4]
        }

        function p(t, e, n) {
            let h = [], f = 0, p = new Array(r);
            !function (t, e, r) {
                let s, n, h = new Array(4), f = new Array(4);
                for (let e = 0; e < 4; e++) f[0] = 255 & t[0 + 4 * e], f[1] = 255 & t[1 + 4 * e], f[2] = 255 & t[2 + 4 * e], f[3] = 255 & t[3 + 4 * e], h[e] = f[0] << 24 | f[1] << 16 | f[2] << 8 | f[3];
                for (h[0] ^= 2746333894, h[1] ^= 1453994832, h[2] ^= 1736282519, h[3] ^= 2993693404, s = 0; s < 32; s += 4) n = u(n = h[1] ^ h[2] ^ h[3] ^ o[s + 0]), e[s + 0] = h[0] ^= a(n), n = u(n = h[2] ^ h[3] ^ h[0] ^ o[s + 1]), e[s + 1] = h[1] ^= a(n), n = u(n = h[3] ^ h[0] ^ h[1] ^ o[s + 2]), e[s + 2] = h[2] ^= a(n), n = u(n = h[0] ^ h[1] ^ h[2] ^ o[s + 3]), e[s + 3] = h[3] ^= a(n);
                if (r === i) for (s = 0; s < 16; s++) n = e[s], e[s] = e[31 - s], e[31 - s] = n
            }(e, p, n);
            let c = new Array(16), g = new Array(16), y = t.length;
            for (; y >= s;) {
                l(c = t.slice(f, f + 16), g, p);
                for (let t = 0; t < s; t++) h[f + t] = g[t];
                y -= s, f += s
            }
            return h
        }

        t.exports = {encrypt: (t, e) => p(t, e, 1), decrypt: (t, e) => p(t, e, 0)}
    }])
});