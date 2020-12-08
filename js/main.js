function viewport() {
    var a = window,
        b = "inner";
    return "innerWidth" in window || (b = "client", a = document.documentElement || document.body), {
        width: a[b + "Width"],
        height: a[b + "Height"]
    }
}

function manipulateDesign() {}

function rearrangeObjects() {
    for (currWidth = viewport().width, $j(".section").outerHeight(viewport().height), i = 0; i < scenes.length; i++) scenes[i].offset(viewport().height / 2), scenes[i].refresh()
}

function setEqualHeight_CommonClass(a) {
    var b = new Array([]);
    $j(a).each(function(a) {
        $j(this).height("auto"), b[a] = $j(this).outerHeight()
    }), Max_Value = Array.max(b), $j(a).each(function(a) {
        $j(this).outerHeight(Max_Value)
    })
}

function setEqualHeight(a) {
    var b = new Array([]);
    for (i = 0; i < a.length; i++) b[i] = $j(a[i]).height("auto"), b[i] = $j(a[i]).outerHeight();
    for (Max_Value = Array.max(b), i = 0; i < a.length; i++) b[i] = $j(a[i]).outerHeight(Max_Value)
}
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    e = function(a, b, d) {
                        c.call(this, a, b, d), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = e.prototype.render
                    },
                    f = 1e-10,
                    g = c._internals,
                    h = g.isSelector,
                    i = g.isArray,
                    j = e.prototype = c.to({}, .1, {}),
                    k = [];
                e.version = "1.15.1", j.constructor = e, j.kill()._gc = !1, e.killTweensOf = e.killDelayedCallsTo = c.killTweensOf, e.getTweensOf = c.getTweensOf, e.lagSmoothing = c.lagSmoothing, e.ticker = c.ticker, e.render = c.render, j.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), c.prototype.invalidate.call(this)
                }, j.updateTo = function(a, b) {
                    var d, e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) this._initted = !1, f && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var g = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(g, !0, !1)
                    } else if (this._time > 0 || f) {
                        this._initted = !1, this._init();
                        for (var h, i = 1 / (1 - e), j = this._firstPT; j;) h = j.s + j.c, j.c *= i, j.s = h - j.c, j = j._next
                    }
                    return this
                }, j.render = function(a, b, c) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var d, e, h, i, j, l, m, n, o = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        q = this._totalTime,
                        r = this._cycle,
                        s = this._duration,
                        t = this._rawPrevTime;
                    if (a >= o ? (this._totalTime = o, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = s, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (d = !0, e = "onComplete"), 0 === s && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > t || t === f) && t !== a && (c = !0, t > f && (e = "onReverseComplete")), this._rawPrevTime = n = !b || a || t === a ? a : f)) : 1e-7 > a ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== q || 0 === s && t > 0 && t !== f) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === s && (this._initted || !this.vars.lazy || c) && (t >= 0 && (c = !0), this._rawPrevTime = n = !b || a || t === a ? a : f)), this._initted || (c = !0)) : (this._totalTime = this._time = a, 0 !== this._repeat && (i = s + this._repeatDelay, this._cycle = this._totalTime / i >> 0, 0 !== this._cycle && this._cycle === this._totalTime / i && this._cycle--, this._time = this._totalTime - this._cycle * i, this._yoyo && 0 !== (1 & this._cycle) && (this._time = s - this._time), this._time > s ? this._time = s : 0 > this._time && (this._time = 0)), this._easeType ? (j = this._time / s, l = this._easeType, m = this._easePower, (1 === l || 3 === l && j >= .5) && (j = 1 - j), 3 === l && (j *= 2), 1 === m ? j *= j : 2 === m ? j *= j * j : 3 === m ? j *= j * j * j : 4 === m && (j *= j * j * j * j), this.ratio = 1 === l ? 1 - j : 2 === l ? j : .5 > this._time / s ? j / 2 : 1 - j / 2) : this.ratio = this._ease.getRatio(this._time / s)), p === this._time && !c && r === this._cycle) return void(q !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = p, this._totalTime = q, this._rawPrevTime = t, this._cycle = r, g.lazyTweens.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / s) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== p && a >= 0 && (this._active = !0), 0 === q && (2 === this._initted && a > 0 && this._init(), this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === s) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || k))), h = this._firstPT; h;) h.f ? h.t[h.p](h.c * this.ratio + h.s) : h.t[h.p] = h.c * this.ratio + h.s, h = h._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._totalTime !== q || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || k)), this._cycle !== r && (b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || k)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || k), 0 === s && this._rawPrevTime === f && n !== f && (this._rawPrevTime = 0))
                }, e.to = function(a, b, c) {
                    return new e(a, b, c)
                }, e.from = function(a, b, c) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new e(a, b, c)
                }, e.fromTo = function(a, b, c, d) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new e(a, b, d)
                }, e.staggerTo = e.allTo = function(a, b, f, g, j, l, m) {
                    g = g || 0;
                    var n, o, p, q, r = f.delay || 0,
                        s = [],
                        t = function() {
                            f.onComplete && f.onComplete.apply(f.onCompleteScope || this, arguments), j.apply(m || this, l || k)
                        };
                    for (i(a) || ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d(a))), a = a || [], 0 > g && (a = d(a), a.reverse(), g *= -1), n = a.length - 1, p = 0; n >= p; p++) {
                        o = {};
                        for (q in f) o[q] = f[q];
                        o.delay = r, p === n && j && (o.onComplete = t), s[p] = new e(a[p], b, o), r += g
                    }
                    return s
                }, e.staggerFrom = e.allFrom = function(a, b, c, d, f, g, h) {
                    return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, e.staggerTo(a, b, c, d, f, g, h)
                }, e.staggerFromTo = e.allFromTo = function(a, b, c, d, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, e.staggerTo(a, b, d, f, g, h, i)
                }, e.delayedCall = function(a, b, c, d, f) {
                    return new e(b, 0, {
                        delay: a,
                        onComplete: b,
                        onCompleteParams: c,
                        onCompleteScope: d,
                        onReverseComplete: b,
                        onReverseCompleteParams: c,
                        onReverseCompleteScope: d,
                        immediateRender: !1,
                        useFrames: f,
                        overwrite: 0
                    })
                }, e.set = function(a, b) {
                    return new e(a, 0, b)
                }, e.isTweening = function(a) {
                    return c.getTweensOf(a, !0).length > 0
                };
                var l = function(a, b) {
                        for (var d = [], e = 0, f = a._first; f;) f instanceof c ? d[e++] = f : (b && (d[e++] = f), d = d.concat(l(f, b)), e = d.length), f = f._next;
                        return d
                    },
                    m = e.getAllTweens = function(b) {
                        return l(a._rootTimeline, b).concat(l(a._rootFramesTimeline, b))
                    };
                e.killAll = function(a, c, d, e) {
                    null == c && (c = !0), null == d && (d = !0);
                    var f, g, h, i = m(0 != e),
                        j = i.length,
                        k = c && d && e;
                    for (h = 0; j > h; h++) g = i[h], (k || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
                }, e.killChildTweensOf = function(a, b) {
                    if (null != a) {
                        var f, j, k, l, m, n = g.tweenLookup;
                        if ("string" == typeof a && (a = c.selector(a) || a), h(a) && (a = d(a)), i(a))
                            for (l = a.length; --l > -1;) e.killChildTweensOf(a[l], b);
                        else {
                            f = [];
                            for (k in n)
                                for (j = n[k].target.parentNode; j;) j === a && (f = f.concat(n[k].tweens)), j = j.parentNode;
                            for (m = f.length, l = 0; m > l; l++) b && f[l].totalTime(f[l].totalDuration()), f[l]._enabled(!1, !1)
                        }
                    }
                };
                var n = function(a, c, d, e) {
                    c = c !== !1, d = d !== !1, e = e !== !1;
                    for (var f, g, h = m(e), i = c && d && e, j = h.length; --j > -1;) g = h[j], (i || g instanceof b || (f = g.target === g.vars.onComplete) && d || c && !f) && g.paused(a)
                };
                return e.pauseAll = function(a, b, c) {
                    n(!0, a, b, c)
                }, e.resumeAll = function(a, b, c) {
                    n(!1, a, b, c)
                }, e.globalTimeScale = function(b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length ? (b = b || f, d._startTime = e - (e - d._startTime) * d._timeScale / b, d = a._rootFramesTimeline, e = c.ticker.frame, d._startTime = e - (e - d._startTime) * d._timeScale / b, d._timeScale = a._rootTimeline._timeScale = b, b) : d._timeScale
                }, j.progress = function(a) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, j.totalProgress = function(a) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, !1) : this._totalTime / this.totalDuration()
                }, j.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, j.duration = function(b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration
                }, j.totalDuration = function(a) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, j.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, j.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, j.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, e
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(a, b, c) {
                var d = function(a) {
                        b.call(this, a), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var c, d, e = this.vars;
                        for (d in e) c = e[d], i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger)
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = d._internals = {},
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = [],
                    m = _gsScope._gsDefine.globals,
                    n = function(a) {
                        var b, c = {};
                        for (b in a) c[b] = a[b];
                        return c
                    },
                    o = g.pauseCallback = function(a, b, c, d) {
                        var e = a._timeline,
                            f = e._totalTime;
                        !b && this._forcingPlayhead || e._rawPrevTime === a._startTime || (e.pause(a._startTime), b && b.apply(d || e, c || l), this._forcingPlayhead && e.seek(f))
                    },
                    p = function(a) {
                        var b, c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c
                    },
                    q = d.prototype = new b;
                return d.version = "1.15.1", q.constructor = d, q.kill()._gc = q._forcingPlayhead = !1, q.to = function(a, b, d, e) {
                    var f = d.repeat && m.TweenMax || c;
                    return b ? this.add(new f(a, b, d), e) : this.set(a, d, e)
                }, q.from = function(a, b, d, e) {
                    return this.add((d.repeat && m.TweenMax || c).from(a, b, d), e)
                }, q.fromTo = function(a, b, d, e, f) {
                    var g = e.repeat && m.TweenMax || c;
                    return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f)
                }, q.staggerTo = function(a, b, e, f, g, i, j, k) {
                    var l, m = new d({
                        onComplete: i,
                        onCompleteParams: j,
                        onCompleteScope: k,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && (a = p(a), a.reverse(), f *= -1), l = 0; a.length > l; l++) e.startAt && (e.startAt = n(e.startAt)), m.to(a[l], b, n(e), l * f);
                    return this.add(m, g)
                }, q.staggerFrom = function(a, b, c, d, e, f, g, h) {
                    return c.immediateRender = 0 != c.immediateRender, c.runBackwards = !0, this.staggerTo(a, b, c, d, e, f, g, h)
                }, q.staggerFromTo = function(a, b, c, d, e, f, g, h, i) {
                    return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, this.staggerTo(a, b, d, e, f, g, h, i)
                }, q.call = function(a, b, d, e) {
                    return this.add(c.delayedCall(0, a, b, d), e)
                }, q.set = function(a, b, d) {
                    return d = this._parseTimeOrLabel(d, 0, !0), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d)
                }, d.exportRoot = function(a, b) {
                    a = a || {}, null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                    var e, f, g = new d(a),
                        h = g._timeline;
                    for (null == b && (b = !0), h._remove(g, !0), g._startTime = 0, g._rawPrevTime = g._time = g._totalTime = h._time, e = h._first; e;) f = e._next, b && e instanceof c && e.target === e.vars.onComplete || g.add(e, e._startTime - e._delay), e = f;
                    return h.add(g, 0), g
                }, q.add = function(e, f, g, h) {
                    var j, k, l, m, n, o;
                    if ("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a)) {
                        if (e instanceof Array || e && e.push && i(e)) {
                            for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++) i(m = e[l]) && (m = new d({
                                tweens: m
                            })), this.add(m, j), "string" != typeof m && "function" != typeof m && ("sequence" === g ? j = m._startTime + m.totalDuration() / m._timeScale : "start" === g && (m._startTime -= m.delay())), j += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof e) return this.addLabel(e, f);
                        if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                        e = c.delayedCall(0, e)
                    }
                    if (b.prototype.add.call(this, e, f), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (n = this, o = n.rawTime() > e._startTime; n._timeline;) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), n = n._timeline;
                    return this
                }, q.remove = function(b) {
                    if (b instanceof a) return this._remove(b, !1);
                    if (b instanceof Array || b && b.push && i(b)) {
                        for (var c = b.length; --c > -1;) this.remove(b[c]);
                        return this
                    }
                    return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b)
                }, q._remove = function(a, c) {
                    b.prototype._remove.call(this, a, c);
                    var d = this._last;
                    return d ? this._time > d._startTime + d._totalDuration / d._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, q.append = function(a, b) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a))
                }, q.insert = q.insertMultiple = function(a, b, c, d) {
                    return this.add(a, b || 0, c, d)
                }, q.appendMultiple = function(a, b, c, d) {
                    return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d)
                }, q.addLabel = function(a, b) {
                    return this._labels[a] = this._parseTimeOrLabel(b), this
                }, q.addPause = function(a, b, d, e) {
                    var f = c.delayedCall(0, o, ["{self}", b, d, e], this);
                    return f.data = "isPause", this.add(f, a)
                }, q.removeLabel = function(a) {
                    return delete this._labels[a], this
                }, q.getLabelTime = function(a) {
                    return null != this._labels[a] ? this._labels[a] : -1
                }, q._parseTimeOrLabel = function(b, c, d, e) {
                    var f;
                    if (e instanceof a && e.timeline === this) this.remove(e);
                    else if (e && (e instanceof Array || e.push && i(e)))
                        for (f = e.length; --f > -1;) e[f] instanceof a && e[f].timeline === this && this.remove(e[f]);
                    if ("string" == typeof c) return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - this.duration() : 0, d);
                    if (c = c || 0, "string" != typeof b || !isNaN(b) && null == this._labels[b]) null == b && (b = this.duration());
                    else {
                        if (f = b.indexOf("="), -1 === f) return null == this._labels[b] ? d ? this._labels[b] = this.duration() + c : c : this._labels[b] + c;
                        c = parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1)), b = f > 1 ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d) : this.duration()
                    }
                    return Number(b) + c
                }, q.seek = function(a, b) {
                    return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1)
                }, q.stop = function() {
                    return this.paused(!0)
                }, q.gotoAndPlay = function(a, b) {
                    return this.play(a, b)
                }, q.gotoAndStop = function(a, b) {
                    return this.pause(a, b)
                }, q.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, f, g, h, i, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        n = this._time,
                        o = this._startTime,
                        p = this._timeScale,
                        q = this._paused;
                    if (a >= m ? (this._totalTime = this._time = m, this._reversed || this._hasPausedChild() || (f = !0, h = "onComplete", 0 === this._duration && (0 === a || 0 > this._rawPrevTime || this._rawPrevTime === e) && this._rawPrevTime !== a && this._first && (i = !0, this._rawPrevTime > e && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = m + 1e-4) : 1e-7 > a ? (this._totalTime = this._time = 0, (0 !== n || 0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || 0 > a && this._rawPrevTime >= 0)) && (h = "onReverseComplete", f = this._reversed), 0 > a ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (i = !0), this._rawPrevTime = a) : (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, a = 0, this._initted || (i = !0))) : this._totalTime = this._time = this._rawPrevTime = a, this._time !== n && this._first || c || i) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== n && a > 0 && (this._active = !0), 0 === n && this.vars.onStart && 0 !== this._time && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || l)), this._time >= n)
                            for (d = this._first; d && (g = d._next, !this._paused || q);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        else
                            for (d = this._last; d && (g = d._prev, !this._paused || q);)(d._active || n >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = g;
                        this._onUpdate && (b || (j.length && k(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || l))), h && (this._gc || (o === this._startTime || p !== this._timeScale) && (0 === this._time || m >= this.totalDuration()) && (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[h] && this.vars[h].apply(this.vars[h + "Scope"] || this, this.vars[h + "Params"] || l)))
                    }
                }, q._hasPausedChild = function() {
                    for (var a = this._first; a;) {
                        if (a._paused || a instanceof d && a._hasPausedChild()) return !0;
                        a = a._next
                    }
                    return !1
                }, q.getChildren = function(a, b, d, e) {
                    e = e || -9999999999;
                    for (var f = [], g = this._first, h = 0; g;) e > g._startTime || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && (f = f.concat(g.getChildren(!0, b, d)), h = f.length))), g = g._next;
                    return f
                }, q.getTweensOf = function(a, b) {
                    var d, e, f = this._gc,
                        g = [],
                        h = 0;
                    for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1;)(d[e].timeline === this || b && this._contains(d[e])) && (g[h++] = d[e]);
                    return f && this._enabled(!1, !0), g
                }, q.recent = function() {
                    return this._recent
                }, q._contains = function(a) {
                    for (var b = a.timeline; b;) {
                        if (b === this) return !0;
                        b = b.timeline
                    }
                    return !1
                }, q.shiftChildren = function(a, b, c) {
                    c = c || 0;
                    for (var d, e = this._first, f = this._labels; e;) e._startTime >= c && (e._startTime += a), e = e._next;
                    if (b)
                        for (d in f) f[d] >= c && (f[d] += a);
                    return this._uncache(!0)
                }, q._kill = function(a, b) {
                    if (!a && !b) return this._enabled(!1, !1);
                    for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1;) c[d]._kill(a, b) && (e = !0);
                    return e
                }, q.clear = function(a) {
                    var b = this.getChildren(!1, !0, !0),
                        c = b.length;
                    for (this._time = this._totalTime = 0; --c > -1;) b[c]._enabled(!1, !1);
                    return a !== !1 && (this._labels = {}), this._uncache(!0)
                }, q.invalidate = function() {
                    for (var b = this._first; b;) b.invalidate(), b = b._next;
                    return a.prototype.invalidate.call(this)
                }, q._enabled = function(a, c) {
                    if (a === this._gc)
                        for (var d = this._first; d;) d._enabled(a, !0), d = d._next;
                    return b.prototype._enabled.call(this, a, c)
                }, q.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var b = a.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, b
                }, q.duration = function(a) {
                    return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration)
                }, q.totalDuration = function(a) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var b, c, d = 0, e = this._last, f = 999999999999; e;) b = e._prev, e._dirty && e.totalDuration(), e._startTime > f && this._sortChildren && !e._paused ? this.add(e, e._startTime - e._delay) : f = e._startTime, 0 > e._startTime && !e._paused && (d -= e._startTime, this._timeline.smoothChildTiming && (this._startTime += e._startTime / this._timeScale), this.shiftChildren(-e._startTime, !1, -9999999999), f = 0), c = e._startTime + e._totalDuration / e._timeScale, c > d && (d = c), e = b;
                            this._duration = this._totalDuration = d, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== a && this.timeScale(this._totalDuration / a), this
                }, q.usesFrames = function() {
                    for (var b = this._timeline; b._timeline;) b = b._timeline;
                    return b === a._rootFramesTimeline
                }, q.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, d
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(a, b, c) {
                var d = function(b) {
                        a.call(this, b), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    e = 1e-10,
                    f = [],
                    g = b._internals,
                    h = g.lazyTweens,
                    i = g.lazyRender,
                    j = new c(null, null, 1, 0),
                    k = d.prototype = new a;
                return k.constructor = d, k.kill()._gc = !1, d.version = "1.15.1", k.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), a.prototype.invalidate.call(this)
                }, k.addCallback = function(a, c, d, e) {
                    return this.add(b.delayedCall(0, a, d, e), c)
                }, k.removeCallback = function(a, b) {
                    if (a)
                        if (null == b) this._kill(null, a);
                        else
                            for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1;) c[d]._startTime === e && c[d]._enabled(!1, !1);
                    return this
                }, k.removePause = function(b) {
                    return this.removeCallback(a._internals.pauseCallback, b)
                }, k.tweenTo = function(a, c) {
                    c = c || {};
                    var d, e, g, h = {
                        ease: j,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (e in c) h[e] = c[e];
                    return h.time = this._parseTimeOrLabel(a), d = Math.abs(Number(h.time) - this._time) / this._timeScale || .001, g = new b(this, d, h), h.onStart = function() {
                        g.target.paused(!0), g.vars.time !== g.target.time() && d === g.duration() && g.duration(Math.abs(g.vars.time - g.target.time()) / g.target._timeScale), c.onStart && c.onStart.apply(c.onStartScope || g, c.onStartParams || f)
                    }, g
                }, k.tweenFromTo = function(a, b, c) {
                    c = c || {}, a = this._parseTimeOrLabel(a), c.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [a],
                        onCompleteScope: this
                    }, c.immediateRender = c.immediateRender !== !1;
                    var d = this.tweenTo(b, c);
                    return d.duration(Math.abs(d.vars.time - a) / this._timeScale || .001)
                }, k.render = function(a, b, c) {
                    this._gc && this._enabled(!0, !1);
                    var d, g, j, k, l, m, n = this._dirty ? this.totalDuration() : this._totalDuration,
                        o = this._duration,
                        p = this._time,
                        q = this._totalTime,
                        r = this._startTime,
                        s = this._timeScale,
                        t = this._rawPrevTime,
                        u = this._paused,
                        v = this._cycle;
                    if (a >= n ? (this._locked || (this._totalTime = n, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (g = !0, k = "onComplete", 0 === this._duration && (0 === a || 0 > t || t === e) && t !== a && this._first && (l = !0, t > e && (k = "onReverseComplete"))), this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e, this._yoyo && 0 !== (1 & this._cycle) ? this._time = a = 0 : (this._time = o, a = o + 1e-4)) : 1e-7 > a ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === o && t !== e && (t > 0 || 0 > a && t >= 0) && !this._locked) && (k = "onReverseComplete", g = this._reversed), 0 > a ? (this._active = !1, t >= 0 && this._first && (l = !0), this._rawPrevTime = a) : (this._rawPrevTime = o || !b || a || this._rawPrevTime === a ? a : e, a = 0, this._initted || (l = !0))) : (0 === o && 0 > t && (l = !0), this._time = this._rawPrevTime = a, this._locked || (this._totalTime = a, 0 !== this._repeat && (m = o + this._repeatDelay, this._cycle = this._totalTime / m >> 0, 0 !== this._cycle && this._cycle === this._totalTime / m && this._cycle--, this._time = this._totalTime - this._cycle * m, this._yoyo && 0 !== (1 & this._cycle) && (this._time = o - this._time), this._time > o ? (this._time = o, a = o + 1e-4) : 0 > this._time ? this._time = a = 0 : a = this._time))), this._cycle !== v && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & v),
                            x = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            y = this._totalTime,
                            z = this._cycle,
                            A = this._rawPrevTime,
                            B = this._time;
                        if (this._totalTime = v * o, v > this._cycle ? w = !w : this._totalTime += o, this._time = p, this._rawPrevTime = 0 === o ? t - 1e-4 : t, this._cycle = v, this._locked = !0, p = w ? 0 : o, this.render(p, b, 0 === o), b || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || f), x && (p = w ? o + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !u) return;
                        this._time = B, this._totalTime = y, this._cycle = z, this._rawPrevTime = A
                    }
                    if (!(this._time !== p && this._first || c || l)) return void(q !== this._totalTime && this._onUpdate && (b || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== q && a > 0 && (this._active = !0), 0 === q && this.vars.onStart && 0 !== this._totalTime && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || f)), this._time >= p)
                        for (d = this._first; d && (j = d._next, !this._paused || u);)(d._active || d._startTime <= this._time && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = j;
                    else
                        for (d = this._last; d && (j = d._prev, !this._paused || u);)(d._active || p >= d._startTime && !d._paused && !d._gc) && (d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)), d = j;
                    this._onUpdate && (b || (h.length && i(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || f))), k && (this._locked || this._gc || (r === this._startTime || s !== this._timeScale) && (0 === this._time || n >= this.totalDuration()) && (g && (h.length && i(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[k] && this.vars[k].apply(this.vars[k + "Scope"] || this, this.vars[k + "Params"] || f)))
                }, k.getActive = function(a, b, c) {
                    null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                    var d, e, f = [],
                        g = this.getChildren(a, b, c),
                        h = 0,
                        i = g.length;
                    for (d = 0; i > d; d++) e = g[d], e.isActive() && (f[h++] = e);
                    return f
                }, k.getLabelAfter = function(a) {
                    a || 0 !== a && (a = this._time);
                    var b, c = this.getLabelsArray(),
                        d = c.length;
                    for (b = 0; d > b; b++)
                        if (c[b].time > a) return c[b].name;
                    return null
                }, k.getLabelBefore = function(a) {
                    null == a && (a = this._time);
                    for (var b = this.getLabelsArray(), c = b.length; --c > -1;)
                        if (a > b[c].time) return b[c].name;
                    return null
                }, k.getLabelsArray = function() {
                    var a, b = [],
                        c = 0;
                    for (a in this._labels) b[c++] = {
                        time: this._labels[a],
                        name: a
                    };
                    return b.sort(function(a, b) {
                        return a.time - b.time
                    }), b
                }, k.progress = function(a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration()
                }, k.totalProgress = function(a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration()
                }, k.totalDuration = function(b) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((b - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (a.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, k.time = function(a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), a > this._duration && (a = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? a = this._duration - a + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(a, b)) : this._time
                }, k.repeat = function(a) {
                    return arguments.length ? (this._repeat = a, this._uncache(!0)) : this._repeat
                }, k.repeatDelay = function(a) {
                    return arguments.length ? (this._repeatDelay = a, this._uncache(!0)) : this._repeatDelay
                }, k.yoyo = function(a) {
                    return arguments.length ? (this._yoyo = a, this) : this._yoyo
                }, k.currentLabel = function(a) {
                    return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8)
                }, d
            }, !0),
            function() {
                var a = 180 / Math.PI,
                    b = [],
                    c = [],
                    d = [],
                    e = {},
                    f = _gsScope._gsDefine.globals,
                    g = function(a, b, c, d) {
                        this.a = a, this.b = b, this.c = c, this.d = d, this.da = d - a, this.ca = c - a, this.ba = b - a
                    },
                    h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    i = function(a, b, c, d) {
                        var e = {
                                a: a
                            },
                            f = {},
                            g = {},
                            h = {
                                c: d
                            },
                            i = (a + b) / 2,
                            j = (b + c) / 2,
                            k = (c + d) / 2,
                            l = (i + j) / 2,
                            m = (j + k) / 2,
                            n = (m - l) / 8;
                        return e.b = i + (a - i) / 4, f.b = l + n, e.c = f.a = (e.b + f.b) / 2, f.c = g.a = (l + m) / 2, g.b = m - n, h.b = k + (d - k) / 4, g.c = h.a = (g.b + h.b) / 2, [e, f, g, h]
                    },
                    j = function(a, e, f, g, h) {
                        var j, k, l, m, n, o, p, q, r, s, t, u, v, w = a.length - 1,
                            x = 0,
                            y = a[0].a;
                        for (j = 0; w > j; j++) n = a[x], k = n.a, l = n.d, m = a[x + 1].d, h ? (t = b[j], u = c[j], v = .25 * (u + t) * e / (g ? .5 : d[j] || .5), o = l - (l - k) * (g ? .5 * e : 0 !== t ? v / t : 0), p = l + (m - l) * (g ? .5 * e : 0 !== u ? v / u : 0), q = l - (o + ((p - o) * (3 * t / (t + u) + .5) / 4 || 0))) : (o = l - .5 * (l - k) * e, p = l + .5 * (m - l) * e, q = l - (o + p) / 2), o += q, p += q, n.c = r = o, n.b = 0 !== j ? y : y = n.a + .6 * (n.c - n.a), n.da = l - k, n.ca = r - k, n.ba = y - k, f ? (s = i(k, y, r, l), a.splice(x, 1, s[0], s[1], s[2], s[3]), x += 4) : x++, y = p;
                        n = a[x], n.b = y, n.c = y + .4 * (n.d - y), n.da = n.d - n.a, n.ca = n.c - n.a, n.ba = y - n.a, f && (s = i(n.a, y, n.c, n.d), a.splice(x, 1, s[0], s[1], s[2], s[3]))
                    },
                    k = function(a, d, e, f) {
                        var h, i, j, k, l, m, n = [];
                        if (f)
                            for (a = [f].concat(a), i = a.length; --i > -1;) "string" == typeof(m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                        if (h = a.length - 2, 0 > h) return n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d]), n;
                        for (i = 0; h > i; i++) j = a[i][d], k = a[i + 1][d], n[i] = new g(j, 0, 0, k), e && (l = a[i + 2][d], b[i] = (b[i] || 0) + (k - j) * (k - j), c[i] = (c[i] || 0) + (l - k) * (l - k));
                        return n[i] = new g(a[i][d], 0, 0, a[i + 1][d]), n
                    },
                    l = function(a, f, g, i, l, m) {
                        var n, o, p, q, r, s, t, u, v = {},
                            w = [],
                            x = m || a[0];
                        l = "string" == typeof l ? "," + l + "," : h, null == f && (f = 1);
                        for (o in a[0]) w.push(o);
                        if (a.length > 1) {
                            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1;)
                                if (o = w[n], Math.abs(x[o] - u[o]) > .05) {
                                    t = !1;
                                    break
                                } t && (a = a.concat(), m && a.unshift(m), a.push(a[1]), m = a[a.length - 3])
                        }
                        for (b.length = c.length = d.length = 0, n = w.length; --n > -1;) o = w[n], e[o] = -1 !== l.indexOf("," + o + ","), v[o] = k(a, o, e[o], m);
                        for (n = b.length; --n > -1;) b[n] = Math.sqrt(b[n]), c[n] = Math.sqrt(c[n]);
                        if (!i) {
                            for (n = w.length; --n > -1;)
                                if (e[o])
                                    for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) r = p[q + 1].da / c[q] + p[q].da / b[q], d[q] = (d[q] || 0) + r * r;
                            for (n = d.length; --n > -1;) d[n] = Math.sqrt(d[n])
                        }
                        for (n = w.length, q = g ? 4 : 1; --n > -1;) o = w[n], p = v[o], j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                        return v
                    },
                    m = function(a, b, c) {
                        b = b || "soft";
                        var d, e, f, h, i, j, k, l, m, n, o, p = {},
                            q = "cubic" === b ? 3 : 2,
                            r = "soft" === b,
                            s = [];
                        if (r && c && (a = [c].concat(a)), null == a || q + 1 > a.length) throw "invalid Bezier data";
                        for (m in a[0]) s.push(m);
                        for (j = s.length; --j > -1;) {
                            for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++) d = null == c ? a[k][m] : "string" == typeof(o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), i[n++] = d;
                            for (l = n - q + 1, n = 0, k = 0; l > k; k += q) d = i[k], e = i[k + 1], f = i[k + 2], h = 2 === q ? 0 : i[k + 3], i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f);
                            i.length = n
                        }
                        return p
                    },
                    n = function(a, b, c) {
                        for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1;)
                            for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++) j = o * k, l = 1 - j, d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j), n = p * c + k - 1, b[n] = (b[n] || 0) + d * d
                    },
                    o = function(a, b) {
                        b = b >> 0 || 6;
                        var c, d, e, f, g = [],
                            h = [],
                            i = 0,
                            j = 0,
                            k = b - 1,
                            l = [],
                            m = [];
                        for (c in a) n(a[c], g, b);
                        for (e = g.length, d = 0; e > d; d++) i += Math.sqrt(g[d]), f = d % b, m[f] = i, f === k && (j += i, f = d / b >> 0, l[f] = m, h[f] = j, i = 0, m = []);
                        return {
                            length: j,
                            lengths: h,
                            segments: l
                        }
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(a, b, c) {
                            this._target = a, b instanceof Array && (b = {
                                values: b
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10);
                            var d, e, f, g, h, i = b.values || [],
                                j = {},
                                k = i[0],
                                n = b.autoRotate || c.vars.orientToBezier;
                            this._autoRotate = n ? n instanceof Array ? n : [
                                ["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]
                            ] : null;
                            for (d in k) this._props.push(d);
                            for (f = this._props.length; --f > -1;) d = this._props[f], this._overwriteProps.push(d), e = this._func[d] = "function" == typeof a[d], j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d]), h || j[d] !== i[0][d] && (h = j);
                            if (this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j), this._segCount = this._beziers[d].length, this._timeRes) {
                                var p = o(this._beziers, this._timeRes);
                                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (n = this._autoRotate)
                                for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]),
                                    f = n.length; --f > -1;) {
                                    for (g = 0; 3 > g; g++) d = n[f][g], this._func[d] = "function" == typeof a[d] && a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)];
                                    d = n[f][2], this._initialRotations[f] = this._func[d] ? this._func[d].call(this._target) : this._target[d]
                                }
                            return this._startRatio = c.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(b) {
                            var c, d, e, f, g, h, i, j, k, l, m = this._segCount,
                                n = this._func,
                                o = this._target,
                                p = b !== this._startRatio;
                            if (this._timeRes) {
                                if (k = this._lengths, l = this._curSeg, b *= this._length, e = this._li, b > this._l2 && m - 1 > e) {
                                    for (j = m - 1; j > e && b >= (this._l2 = k[++e]););
                                    this._l1 = k[e - 1], this._li = e, this._curSeg = l = this._segments[e], this._s2 = l[this._s1 = this._si = 0]
                                } else if (this._l1 > b && e > 0) {
                                    for (; e > 0 && (this._l1 = k[--e]) >= b;);
                                    0 === e && this._l1 > b ? this._l1 = 0 : e++, this._l2 = k[e], this._li = e, this._curSeg = l = this._segments[e], this._s1 = l[(this._si = l.length - 1) - 1] || 0, this._s2 = l[this._si]
                                }
                                if (c = e, b -= this._l1, e = this._si, b > this._s2 && l.length - 1 > e) {
                                    for (j = l.length - 1; j > e && b >= (this._s2 = l[++e]););
                                    this._s1 = l[e - 1], this._si = e
                                } else if (this._s1 > b && e > 0) {
                                    for (; e > 0 && (this._s1 = l[--e]) >= b;);
                                    0 === e && this._s1 > b ? this._s1 = 0 : e++, this._s2 = l[e], this._si = e
                                }
                                h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else c = 0 > b ? 0 : b >= 1 ? m - 1 : m * b >> 0, h = (b - c * (1 / m)) * m;
                            for (d = 1 - h, e = this._props.length; --e > -1;) f = this._props[e], g = this._beziers[f][c], i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a, this._round[f] && (i = Math.round(i)), n[f] ? o[f](i) : o[f] = i;
                            if (this._autoRotate) {
                                var q, r, s, t, u, v, w, x = this._autoRotate;
                                for (e = x.length; --e > -1;) f = x[e][2], v = x[e][3] || 0, w = x[e][4] === !0 ? 1 : a, g = this._beziers[x[e][0]], q = this._beziers[x[e][1]], g && q && (g = g[c], q = q[c], r = g.a + (g.b - g.a) * h, t = g.b + (g.c - g.b) * h, r += (t - r) * h, t += (g.c + (g.d - g.c) * h - t) * h, s = q.a + (q.b - q.a) * h, u = q.b + (q.c - q.b) * h, s += (u - s) * h, u += (q.c + (q.d - q.c) * h - u) * h, i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e], n[f] ? o[f](i) : o[f] = i)
                            }
                        }
                    }),
                    q = p.prototype;
                p.bezierThrough = l, p.cubicToQuadratic = i, p._autoCSS = !0, p.quadraticToCubic = function(a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c)
                }, p._cssRegister = function() {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function(a, b, f, g, h, i) {
                                b instanceof Array && (b = {
                                    values: b
                                }), i = new p;
                                var j, k, l, m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) l = c(a, m[j], g, h, i, n !== j), o[j] = l.end;
                                for (k in b) q[k] = b[k];
                                return q.values = o, h = new e(a, "bezier", 0, 0, l.pt, 2), h.data = l, h.plugin = i, h.setRatio = d, 0 === q.autoRotate && (q.autoRotate = !0), !q.autoRotate || q.autoRotate instanceof Array || (j = q.autoRotate === !0 ? 0 : Number(q.autoRotate), q.autoRotate = null != l.end.left ? [
                                    ["left", "top", "rotation", j, !1]
                                ] : null != l.end.x && [
                                    ["x", "y", "rotation", j, !1]
                                ]), q.autoRotate && (g._transform || g._enableTransforms(!1), l.autoRotate = g._target._gsTransform), i._onInitTween(l.proxy, q, g._tween), h
                            }
                        })
                    }
                }, q._roundProps = function(a, b) {
                    for (var c = this._overwriteProps, d = c.length; --d > -1;)(a[c[d]] || a.bezier || a.bezierThrough) && (this._round[c[d]] = b)
                }, q._kill = function(a) {
                    var b, c, d = this._props;
                    for (b in this._beziers)
                        if (b in a)
                            for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1;) d[c] === b && d.splice(c, 1);
                    return this._super._kill.call(this, a)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(a, b) {
                var c, d, e, f, g = function() {
                        a.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = g.prototype.setRatio
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = g.prototype = new a("css");
                j.constructor = g, g.version = "1.15.1", g.API = 2, g.defaultTransformPerspective = 0, g.defaultSkewType = "compensated", j = "px", g.suffixMap = {
                    top: j,
                    right: j,
                    bottom: j,
                    left: j,
                    width: j,
                    height: j,
                    fontSize: j,
                    padding: j,
                    margin: j,
                    perspective: j,
                    lineHeight: ""
                };
                var k, l, m, n, o, p, q = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    r = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    s = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    t = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    u = /(?:\d|\-|\+|=|#|\.)*/g,
                    v = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    y = /^(rgb|hsl)/,
                    z = /([A-Z])/g,
                    A = /-([a-z])/gi,
                    B = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    C = function(a, b) {
                        return b.toUpperCase()
                    },
                    D = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    G = /,(?=[^\)]*(?:\(|$))/gi,
                    H = Math.PI / 180,
                    I = 180 / Math.PI,
                    J = {},
                    K = document,
                    L = function(a) {
                        return K.createElementNS ? K.createElementNS("http://www.w3.org/1999/xhtml", a) : K.createElement(a)
                    },
                    M = L("div"),
                    N = L("img"),
                    O = g._internals = {
                        _specialProps: i
                    },
                    P = navigator.userAgent,
                    Q = function() {
                        var a = P.indexOf("Android"),
                            b = L("a");
                        return m = -1 !== P.indexOf("Safari") && -1 === P.indexOf("Chrome") && (-1 === a || Number(P.substr(a + 8, 1)) > 3), o = m && 6 > Number(P.substr(P.indexOf("Version/") + 8, 1)), n = -1 !== P.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P)) && (p = parseFloat(RegExp.$1)), !!b && (b.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(b.style.opacity))
                    }(),
                    R = function(a) {
                        return v.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    S = function(a) {
                        window.console && console.log(a)
                    },
                    T = "",
                    U = "",
                    V = function(a, b) {
                        b = b || M;
                        var c, d, e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a];);
                        return d >= 0 ? (U = 3 === d ? "ms" : c[d], T = "-" + U.toLowerCase() + "-", U + a) : null
                    },
                    W = K.defaultView ? K.defaultView.getComputedStyle : function() {},
                    X = g.getStyle = function(a, b, c, d, e) {
                        var f;
                        return Q || "opacity" !== b ? (!d && a.style[b] ? f = a.style[b] : (c = c || W(a)) ? f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(z, "-$1").toLowerCase()) : a.currentStyle && (f = a.currentStyle[b]), null == e || f && "none" !== f && "auto" !== f && "auto auto" !== f ? f : e) : R(a)
                    },
                    Y = O.convertToPixels = function(a, c, d, e, f) {
                        if ("px" === e || !e) return d;
                        if ("auto" === e || !d) return 0;
                        var h, i, j, k = D.test(c),
                            l = a,
                            m = M.style,
                            n = 0 > d;
                        if (n && (d = -d), "%" === e && -1 !== c.indexOf("border")) h = d / 100 * (k ? a.clientWidth : a.clientHeight);
                        else {
                            if (m.cssText = "border:0 solid red;position:" + X(a, "position") + ";line-height:0;", "%" !== e && l.appendChild) m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                            else {
                                if (l = a.parentNode || K.body, i = l._gsCache, j = b.ticker.frame, i && k && i.time === j) return i.width * d / 100;
                                m[k ? "width" : "height"] = d + e
                            }
                            l.appendChild(M), h = parseFloat(M[k ? "offsetWidth" : "offsetHeight"]), l.removeChild(M), k && "%" === e && g.cacheWidths !== !1 && (i = l._gsCache = l._gsCache || {}, i.time = j, i.width = 100 * (h / d)), 0 !== h || f || (h = Y(a, c, d, e, !0))
                        }
                        return n ? -h : h
                    },
                    Z = O.calculateOffset = function(a, b, c) {
                        if ("absolute" !== X(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = X(a, "margin" + d, c);
                        return a["offset" + d] - (Y(a, b, parseFloat(e), e.replace(u, "")) || 0)
                    },
                    $ = function(a, b) {
                        var c, d, e = {};
                        if (b = b || W(a, null))
                            for (c in b)(-1 === c.indexOf("Transform") || wa === c) && (e[c] = b[c]);
                        else if (b = a.currentStyle || a.style)
                            for (c in b) "string" == typeof c && void 0 === e[c] && (e[c.replace(A, C)] = b[c]);
                        return Q || (e.opacity = R(a)), d = Ga(a, b, !1), e.rotation = d.rotation, e.skewX = d.skewX, e.scaleX = d.scaleX, e.scaleY = d.scaleY, e.x = d.x, e.y = d.y, za && (e.z = d.z, e.rotationX = d.rotationX, e.rotationY = d.rotationY, e.scaleZ = d.scaleZ), e.filters && delete e.filters, e
                    },
                    _ = function(a, b, c, d, e) {
                        var f, g, h, i = {},
                            j = a.style;
                        for (g in c) "cssText" !== g && "length" !== g && isNaN(g) && (b[g] !== (f = c[g]) || e && e[g]) && -1 === g.indexOf("Origin") && ("number" == typeof f || "string" == typeof f) && (i[g] = "auto" !== f || "left" !== g && "top" !== g ? "" !== f && "auto" !== f && "none" !== f || "string" != typeof b[g] || "" === b[g].replace(t, "") ? f : 0 : Z(a, g), void 0 !== j[g] && (h = new na(j, g, j[g], h)));
                        if (d)
                            for (g in d) "className" !== g && (i[g] = d[g]);
                        return {
                            difs: i,
                            firstMPT: h
                        }
                    },
                    aa = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    ba = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ca = function(a, b, c) {
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = aa[b],
                            f = e.length;
                        for (c = c || W(a, null); --f > -1;) d -= parseFloat(X(a, "padding" + e[f], c, !0)) || 0, d -= parseFloat(X(a, "border" + e[f] + "Width", c, !0)) || 0;
                        return d
                    },
                    da = function(a, b) {
                        (null == a || "" === a || "auto" === a || "auto auto" === a) && (a = "0 0");
                        var c = a.split(" "),
                            d = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : c[0],
                            e = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : c[1];
                        return null == e ? e = "center" === d ? "50%" : "0" : "center" === e && (e = "50%"), ("center" === d || isNaN(parseFloat(d)) && -1 === (d + "").indexOf("=")) && (d = "50%"), b && (b.oxp = -1 !== d.indexOf("%"), b.oyp = -1 !== e.indexOf("%"), b.oxr = "=" === d.charAt(1), b.oyr = "=" === e.charAt(1), b.ox = parseFloat(d.replace(t, "")), b.oy = parseFloat(e.replace(t, ""))), d + " " + e + (c.length > 2 ? " " + c[2] : "")
                    },
                    ea = function(a, b) {
                        return "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b)
                    },
                    fa = function(a, b) {
                        return null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a)
                    },
                    ga = function(a, b, c, d) {
                        var e, f, g, h, i, j = 1e-6;
                        return null == a ? h = b : "number" == typeof a ? h = a : (e = 360, f = a.split("_"), i = "=" === a.charAt(1), g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : I) - (i ? 0 : b), f.length && (d && (d[c] = b + g), -1 !== a.indexOf("short") && (g %= e, g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)), -1 !== a.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * e) % e - (0 | g / e) * e : -1 !== a.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * e) % e - (0 | g / e) * e)), h = b + g), j > h && h > -j && (h = 0), h
                    },
                    ha = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ia = function(a, b, c) {
                        return a = 0 > a ? a + 1 : a > 1 ? a - 1 : a, 0 | 255 * (1 > 6 * a ? b + 6 * (c - b) * a : .5 > a ? c : 2 > 3 * a ? b + 6 * (c - b) * (2 / 3 - a) : b) + .5
                    },
                    ja = g.parseColor = function(a) {
                        var b, c, d, e, f, g;
                        return a && "" !== a ? "number" == typeof a ? [a >> 16, 255 & a >> 8, 255 & a] : ("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), ha[a] ? ha[a] : "#" === a.charAt(0) ? (4 === a.length && (b = a.charAt(1), c = a.charAt(2), d = a.charAt(3), a = "#" + b + b + c + c + d + d), a = parseInt(a.substr(1), 16), [a >> 16, 255 & a >> 8, 255 & a]) : "hsl" === a.substr(0, 3) ? (a = a.match(q), e = Number(a[0]) % 360 / 360, f = Number(a[1]) / 100, g = Number(a[2]) / 100, c = .5 >= g ? g * (f + 1) : g + f - g * f, b = 2 * g - c, a.length > 3 && (a[3] = Number(a[3])), a[0] = ia(e + 1 / 3, b, c), a[1] = ia(e, b, c), a[2] = ia(e - 1 / 3, b, c), a) : (a = a.match(q) || ha.transparent, a[0] = Number(a[0]), a[1] = Number(a[1]), a[2] = Number(a[2]), a.length > 3 && (a[3] = Number(a[3])), a)) : ha.black
                    },
                    ka = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (j in ha) ka += "|" + j + "\\b";
                ka = RegExp(ka + ")", "gi");
                var la = function(a, b, c, d) {
                        if (null == a) return function(a) {
                            return a
                        };
                        var e, f = b ? (a.match(ka) || [""])[0] : "",
                            g = a.split(f).join("").match(s) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(q, "") : "";
                        return k ? e = b ? function(a) {
                            var b, m, n, o;
                            if ("number" == typeof a) a += l;
                            else if (d && G.test(a)) {
                                for (o = a.replace(G, "|").split("|"), n = 0; o.length > n; n++) o[n] = e(o[n]);
                                return o.join(",")
                            }
                            if (b = (a.match(ka) || [f])[0], m = a.split(b).join("").match(s) || [], n = m.length, k > n--)
                                for (; k > ++n;) m[n] = c ? m[0 | (n - 1) / 2] : g[n];
                            return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "")
                        } : function(a) {
                            var b, f, m;
                            if ("number" == typeof a) a += l;
                            else if (d && G.test(a)) {
                                for (f = a.replace(G, "|").split("|"), m = 0; f.length > m; m++) f[m] = e(f[m]);
                                return f.join(",")
                            }
                            if (b = a.match(s) || [], m = b.length, k > m--)
                                for (; k > ++m;) b[m] = c ? b[0 | (m - 1) / 2] : g[m];
                            return h + b.join(j) + i
                        } : function(a) {
                            return a
                        }
                    },
                    ma = function(a) {
                        return a = a.split(","),
                            function(b, c, d, e, f, g, h) {
                                var i, j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[(i - 1) / 2 >> 0];
                                return e.parse(b, h, f, g)
                            }
                    },
                    na = (O._setPluginRatio = function(a) {
                        this.plugin.setRatio(a);
                        for (var b, c, d, e, f = this.data, g = f.proxy, h = f.firstMPT, i = 1e-6; h;) b = g[h.v], h.r ? b = Math.round(b) : i > b && b > -i && (b = 0), h.t[h.p] = b, h = h._next;
                        if (f.autoRotate && (f.autoRotate.rotation = g.rotation), 1 === a)
                            for (h = f.firstMPT; h;) {
                                if (c = h.t, c.type) {
                                    if (1 === c.type) {
                                        for (e = c.xs0 + c.s + c.xs1, d = 1; c.l > d; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                        c.e = e
                                    }
                                } else c.e = c.s + c.xs0;
                                h = h._next
                            }
                    }, function(a, b, c, d, e) {
                        this.t = a, this.p = b, this.v = c, this.r = e, d && (d._prev = this, this._next = d)
                    }),
                    oa = (O._parseToProxy = function(a, b, c, d, e, f) {
                        var g, h, i, j, k, l = d,
                            m = {},
                            n = {},
                            o = c._transform,
                            p = J;
                        for (c._transform = null, J = b, d = k = c.parse(a, b, d, e), J = p, f && (c._transform = o, l && (l._prev = null, l._prev && (l._prev._next = null))); d && d !== l;) {
                            if (1 >= d.type && (h = d.p, n[h] = d.s + d.c, m[h] = d.s, f || (j = new na(d, "s", h, j, d.r), d.c = 0), 1 === d.type))
                                for (g = d.l; --g > 0;) i = "xn" + g, h = d.p + "_" + i, n[h] = d.data[i], m[h] = d[i], f || (j = new na(d, i, h, j, d.rxp[i]));
                            d = d._next
                        }
                        return {
                            proxy: m,
                            end: n,
                            firstMPT: j,
                            pt: k
                        }
                    }, O.CSSPropTween = function(a, b, d, e, g, h, i, j, k, l, m) {
                        this.t = a, this.p = b, this.s = d, this.c = e, this.n = i || b, a instanceof oa || f.push(this.n), this.r = j, this.type = h || 0, k && (this.pr = k, c = !0), this.b = void 0 === l ? d : l, this.e = void 0 === m ? d + e : m, g && (this._next = g, g._prev = this)
                    }),
                    pa = g.parseComplex = function(a, b, c, d, e, f, g, h, i, j) {
                        c = c || f || "", g = new oa(a, b, 0, 0, g, j ? 2 : 1, null, !1, h, c, d), d += "";
                        var l, m, n, o, p, s, t, u, v, w, x, z, A = c.split(", ").join(",").split(" "),
                            B = d.split(", ").join(",").split(" "),
                            C = A.length,
                            D = k !== !1;
                        for ((-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) && (A = A.join(" ").replace(G, ", ").split(" "), B = B.join(" ").replace(G, ", ").split(" "), C = A.length), C !== B.length && (A = (f || "").split(" "), C = A.length), g.plugin = i, g.setRatio = j, l = 0; C > l; l++)
                            if (o = A[l], p = B[l], u = parseFloat(o), u || 0 === u) g.appendXtra("", u, ea(p, u), p.replace(r, ""), D && -1 !== p.indexOf("px"), !0);
                            else if (e && ("#" === o.charAt(0) || ha[o] || y.test(o))) z = "," === p.charAt(p.length - 1) ? ")," : ")", o = ja(o), p = ja(p), v = o.length + p.length > 6, v && !Q && 0 === p[3] ? (g["xs" + g.l] += g.l ? " transparent" : "transparent", g.e = g.e.split(B[l]).join("transparent")) : (Q || (v = !1), g.appendXtra(v ? "rgba(" : "rgb(", o[0], p[0] - o[0], ",", !0, !0).appendXtra("", o[1], p[1] - o[1], ",", !0).appendXtra("", o[2], p[2] - o[2], v ? "," : z, !0), v && (o = 4 > o.length ? 1 : o[3], g.appendXtra("", o, (4 > p.length ? 1 : p[3]) - o, z, !1)));
                        else if (s = o.match(q)) {
                            if (t = p.match(r), !t || t.length !== s.length) return g;
                            for (n = 0, m = 0; s.length > m; m++) x = s[m], w = o.indexOf(x, n), g.appendXtra(o.substr(n, w - n), Number(x), ea(t[m], x), "", D && "px" === o.substr(w + x.length, 2), 0 === m), n = w + x.length;
                            g["xs" + g.l] += o.substr(n)
                        } else g["xs" + g.l] += g.l ? " " + o : o;
                        if (-1 !== d.indexOf("=") && g.data) {
                            for (z = g.xs0 + g.data.s, l = 1; g.l > l; l++) z += g["xs" + l] + g.data["xn" + l];
                            g.e = z + g["xs" + l]
                        }
                        return g.l || (g.type = -1, g.xs0 = g.e), g.xfirst || g
                    },
                    qa = 9;
                for (j = oa.prototype, j.l = j.pr = 0; --qa > 0;) j["xn" + qa] = 0, j["xs" + qa] = "";
                j.xs0 = "", j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null, j.appendXtra = function(a, b, c, d, e, f) {
                    var g = this,
                        h = g.l;
                    return g["xs" + h] += f && h ? " " + a : a || "", c || 0 === h || g.plugin ? (g.l++, g.type = g.setRatio ? 2 : 1, g["xs" + g.l] = d || "", h > 0 ? (g.data["xn" + h] = b + c, g.rxp["xn" + h] = e, g["xn" + h] = b, g.plugin || (g.xfirst = new oa(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr), g.xfirst.xs0 = 0), g) : (g.data = {
                        s: b + c
                    }, g.rxp = {}, g.s = b, g.c = c, g.r = e, g)) : (g["xs" + h] += b + (d || ""), g)
                };
                var ra = function(a, b) {
                        b = b || {}, this.p = b.prefix ? V(a) || a : a, i[a] = i[this.p] = this, this.format = b.formatter || la(b.defaultValue, b.color, b.collapsible, b.multi), b.parser && (this.parse = b.parser), this.clrs = b.color, this.multi = b.multi, this.keyword = b.keyword, this.dflt = b.defaultValue, this.pr = b.priority || 0
                    },
                    sa = O._registerComplexSpecialProp = function(a, b, c) {
                        "object" != typeof b && (b = {
                            parser: c
                        });
                        var d, e, f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; f.length > d; d++) b.prefix = 0 === d && b.prefix, b.defaultValue = c[d] || g, e = new ra(f[d], b)
                    },
                    ta = function(a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            sa(a, {
                                parser: function(a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (S("Error: " + b + " js file not loaded."), f)
                                }
                            })
                        }
                    };
                j = ra.prototype, j.parseComplex = function(a, b, c, d, e, f) {
                    var g, h, i, j, k, l, m = this.keyword;
                    if (this.multi && (G.test(c) || G.test(b) ? (h = b.replace(G, "|").split("|"), i = c.replace(G, "|").split("|")) : m && (h = [b], i = [c])), i) {
                        for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++) b = h[g] = h[g] || this.dflt, c = i[g] = i[g] || this.dflt, m && (k = b.indexOf(m), l = c.indexOf(m), k !== l && (c = -1 === l ? i : h, c[g] += " " + m));
                        b = h.join(", "), c = i.join(", ")
                    }
                    return pa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f)
                }, j.parse = function(a, b, c, d, f, g) {
                    return this.parseComplex(a.style, this.format(X(a, this.p, e, !1, this.dflt)), this.format(b), f, g)
                }, g.registerSpecialProp = function(a, b, c) {
                    sa(a, {
                        parser: function(a, d, e, f, g, h) {
                            var i = new oa(a, e, 0, 0, g, 2, e, !1, c);
                            return i.plugin = h, i.setRatio = b(a, d, f._tween, e), i
                        },
                        priority: c
                    })
                };
                var ua, va = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    wa = V("transform"),
                    xa = T + "transform",
                    ya = V("transformOrigin"),
                    za = null !== V("perspective"),
                    Aa = O.Transform = function() {
                        this.perspective = parseFloat(g.defaultTransformPerspective) || 0, this.force3D = !(g.defaultForce3D === !1 || !za) && (g.defaultForce3D || "auto")
                    },
                    Ba = window.SVGElement,
                    Ca = function(a, b, c) {
                        var d, e = K.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e
                    },
                    Da = document.documentElement,
                    Ea = function() {
                        var a, b, c, d = p || /Android/i.test(P) && !window.chrome;
                        return K.createElementNS && !d && (a = Ca("svg", Da), b = Ca("rect", a, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), c = b.getBoundingClientRect().width, b.style[ya] = "50% 50%", b.style[wa] = "scaleX(0.5)", d = c === b.getBoundingClientRect().width && !(n && za), Da.removeChild(a)), d
                    }(),
                    Fa = function(a, b, c) {
                        var d = a.getBBox();
                        b = da(b).split(" "), c.xOrigin = (-1 !== b[0].indexOf("%") ? parseFloat(b[0]) / 100 * d.width : parseFloat(b[0])) + d.x, c.yOrigin = (-1 !== b[1].indexOf("%") ? parseFloat(b[1]) / 100 * d.height : parseFloat(b[1])) + d.y
                    },
                    Ga = O.getTransform = function(a, b, c, d) {
                        if (a._gsTransform && c && !d) return a._gsTransform;
                        var f, h, i, j, k, l, m, n, o, p, q = c ? a._gsTransform || new Aa : new Aa,
                            r = 0 > q.scaleX,
                            s = 2e-5,
                            t = 1e5,
                            u = za ? parseFloat(X(a, ya, b, !1, "0 0 0").split(" ")[2]) || q.zOrigin || 0 : 0,
                            v = parseFloat(g.defaultTransformPerspective) || 0;
                        if (wa ? h = X(a, xa, b, !0) : a.currentStyle && (h = a.currentStyle.filter.match(E), h = h && 4 === h.length ? [h[0].substr(4), Number(h[2].substr(4)), Number(h[1].substr(4)), h[3].substr(4), q.x || 0, q.y || 0].join(",") : ""), f = !h || "none" === h || "matrix(1, 0, 0, 1, 0, 0)" === h, q.svg = !!(Ba && "function" == typeof a.getBBox && a.getCTM && (!a.parentNode || a.parentNode.getBBox && a.parentNode.getCTM)), q.svg && (Fa(a, X(a, ya, e, !1, "50% 50%") + "", q), ua = g.useSVGTransformAttr || Ea, i = a.getAttribute("transform"), f && i && -1 !== i.indexOf("matrix") && (h = i, f = 0)), !f) {
                            for (i = (h || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], j = i.length; --j > -1;) k = Number(i[j]), i[j] = (l = k - (k |= 0)) ? (0 | l * t + (0 > l ? -.5 : .5)) / t + k : k;
                            if (16 === i.length) {
                                var w, x, y, z, A, B = i[0],
                                    C = i[1],
                                    D = i[2],
                                    F = i[3],
                                    G = i[4],
                                    H = i[5],
                                    J = i[6],
                                    K = i[7],
                                    L = i[8],
                                    M = i[9],
                                    N = i[10],
                                    O = i[12],
                                    P = i[13],
                                    Q = i[14],
                                    R = i[11],
                                    S = Math.atan2(J, N);
                                q.zOrigin && (Q = -q.zOrigin, O = L * Q - i[12], P = M * Q - i[13], Q = N * Q + q.zOrigin - i[14]), q.rotationX = S * I, S && (z = Math.cos(-S), A = Math.sin(-S), w = G * z + L * A, x = H * z + M * A, y = J * z + N * A, L = G * -A + L * z, M = H * -A + M * z, N = J * -A + N * z, R = K * -A + R * z, G = w, H = x, J = y), S = Math.atan2(L, N), q.rotationY = S * I, S && (z = Math.cos(-S), A = Math.sin(-S), w = B * z - L * A, x = C * z - M * A, y = D * z - N * A, M = C * A + M * z, N = D * A + N * z, R = F * A + R * z, B = w, C = x, D = y), S = Math.atan2(C, B), q.rotation = S * I, S && (z = Math.cos(-S), A = Math.sin(-S), B = B * z + G * A, x = C * z + H * A, H = C * -A + H * z, J = D * -A + J * z, C = x), q.rotationX && Math.abs(q.rotationX) + Math.abs(q.rotation) > 359.9 && (q.rotationX = q.rotation = 0, q.rotationY += 180), q.scaleX = (0 | Math.sqrt(B * B + C * C) * t + .5) / t, q.scaleY = (0 | Math.sqrt(H * H + M * M) * t + .5) / t, q.scaleZ = (0 | Math.sqrt(J * J + N * N) * t + .5) / t, q.skewX = 0, q.perspective = R ? 1 / (0 > R ? -R : R) : 0, q.x = O, q.y = P, q.z = Q
                            } else if (!(za && !d && i.length && q.x === i[4] && q.y === i[5] && (q.rotationX || q.rotationY) || void 0 !== q.x && "none" === X(a, "display", b))) {
                                var T = i.length >= 6,
                                    U = T ? i[0] : 1,
                                    V = i[1] || 0,
                                    W = i[2] || 0,
                                    Y = T ? i[3] : 1;
                                q.x = i[4] || 0, q.y = i[5] || 0, m = Math.sqrt(U * U + V * V), n = Math.sqrt(Y * Y + W * W), o = U || V ? Math.atan2(V, U) * I : q.rotation || 0, p = W || Y ? Math.atan2(W, Y) * I + o : q.skewX || 0, Math.abs(p) > 90 && 270 > Math.abs(p) && (r ? (m *= -1, p += 0 >= o ? 180 : -180, o += 0 >= o ? 180 : -180) : (n *= -1, p += 0 >= p ? 180 : -180)), q.scaleX = m, q.scaleY = n, q.rotation = o, q.skewX = p, za && (q.rotationX = q.rotationY = q.z = 0, q.perspective = v, q.scaleZ = 1)
                            }
                            q.zOrigin = u;
                            for (j in q) s > q[j] && q[j] > -s && (q[j] = 0)
                        }
                        return c && (a._gsTransform = q), q
                    },
                    Ha = function(a) {
                        var b, c, d = this.data,
                            e = -d.rotation * H,
                            f = e + d.skewX * H,
                            g = 1e5,
                            h = (0 | Math.cos(e) * d.scaleX * g) / g,
                            i = (0 | Math.sin(e) * d.scaleX * g) / g,
                            j = (0 | Math.sin(f) * -d.scaleY * g) / g,
                            k = (0 | Math.cos(f) * d.scaleY * g) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            c = i, i = -j, j = -c, b = m.filter, l.filter = "";
                            var n, o, q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                w = d.x + q * d.xPercent / 100,
                                x = d.y + r * d.yPercent / 100;
                            if (null != d.ox && (n = (d.oxp ? .01 * q * d.ox : d.ox) - q / 2, o = (d.oyp ? .01 * r * d.oy : d.oy) - r / 2, w += n - (n * h + o * i), x += o - (n * j + o * k)), s ? (n = q / 2, o = r / 2, t += ", Dx=" + (n - (n * h + o * i) + w) + ", Dy=" + (o - (n * j + o * k) + x) + ")") : t += ", sizingMethod='auto expand')", l.filter = -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? b.replace(F, t) : t + " " + b, (0 === a || 1 === a) && 1 === h && 0 === i && 0 === j && 1 === k && (s && -1 === t.indexOf("Dx=0, Dy=0") || v.test(b) && 100 !== parseFloat(RegExp.$1) || -1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter")), !s) {
                                var y, z, A, B = 8 > p ? 1 : -1;
                                for (n = d.ieOffsetX || 0, o = d.ieOffsetY || 0, d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + w), d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + x), qa = 0; 4 > qa; qa++) z = ba[qa], y = m[z], c = -1 !== y.indexOf("px") ? parseFloat(y) : Y(this.t, z, parseFloat(y), y.replace(u, "")) || 0, A = c !== d[z] ? 2 > qa ? -d.ieOffsetX : -d.ieOffsetY : 2 > qa ? n - d.ieOffsetX : o - d.ieOffsetY, l[z] = (d[z] = Math.round(c - A * (0 === qa || 2 === qa ? 1 : B))) + "px"
                            }
                        }
                    },
                    Ia = O.set3DTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m, o, p, q, r, s, t, u, v, w, x = this.data,
                            y = this.t.style,
                            z = x.rotation * H,
                            A = x.scaleX,
                            B = x.scaleY,
                            C = x.scaleZ,
                            D = x.x,
                            E = x.y,
                            F = x.z,
                            G = x.perspective;
                        if (!(1 !== a && 0 !== a && x.force3D || x.force3D === !0 || x.rotationY || x.rotationX || 1 !== C || G || F)) return void Ja.call(this, a);
                        if (n && (p = 1e-4, p > A && A > -p && (A = C = 2e-5), p > B && B > -p && (B = C = 2e-5), !G || x.z || x.rotationX || x.rotationY || (G = 0)), z || x.skewX) q = b = Math.cos(z), r = e = Math.sin(z), x.skewX && (z -= x.skewX * H, q = Math.cos(z), r = Math.sin(z), "simple" === x.skewType && (s = Math.tan(x.skewX * H), s = Math.sqrt(1 + s * s), q *= s, r *= s)), c = -r, f = q;
                        else {
                            if (!(x.rotationY || x.rotationX || 1 !== C || G || x.svg)) return void(y[wa] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + E + "px," + F + "px)" + (1 !== A || 1 !== B ? " scale(" + A + "," + B + ")" : ""));
                            b = f = 1, c = e = 0
                        }
                        j = 1, d = g = h = i = k = l = 0, m = G ? -1 / G : 0, o = x.zOrigin, p = 1e-6, v = ",", w = "0", z = x.rotationY * H, z && (q = Math.cos(z), r = Math.sin(z), h = -r, k = m * -r, d = b * r, g = e * r, j = q, m *= q, b *= q, e *= q), z = x.rotationX * H, z && (q = Math.cos(z), r = Math.sin(z), s = c * q + d * r, t = f * q + g * r, i = j * r, l = m * r, d = c * -r + d * q, g = f * -r + g * q, j *= q, m *= q, c = s, f = t), 1 !== C && (d *= C, g *= C, j *= C, m *= C), 1 !== B && (c *= B, f *= B, i *= B, l *= B), 1 !== A && (b *= A, e *= A, h *= A, k *= A), (o || x.svg) && (o && (D += d * -o, E += g * -o, F += j * -o + o), x.svg && (D += x.xOrigin - (x.xOrigin * b + x.yOrigin * c), E += x.yOrigin - (x.xOrigin * e + x.yOrigin * f)), p > D && D > -p && (D = w), p > E && E > -p && (E = w), p > F && F > -p && (F = 0)), u = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", u += (p > b && b > -p ? w : b) + v + (p > e && e > -p ? w : e) + v + (p > h && h > -p ? w : h), u += v + (p > k && k > -p ? w : k) + v + (p > c && c > -p ? w : c) + v + (p > f && f > -p ? w : f), x.rotationX || x.rotationY ? (u += v + (p > i && i > -p ? w : i) + v + (p > l && l > -p ? w : l) + v + (p > d && d > -p ? w : d), u += v + (p > g && g > -p ? w : g) + v + (p > j && j > -p ? w : j) + v + (p > m && m > -p ? w : m) + v) : u += ",0,0,0,0,1,0,", u += D + v + E + v + F + v + (G ? 1 + -F / G : 1) + ")", y[wa] = u
                    },
                    Ja = O.set2DTransformRatio = function(a) {
                        var b, c, d, e, f, g, h, i, j, k, l, m = this.data,
                            n = this.t,
                            o = n.style,
                            p = m.x,
                            q = m.y;
                        return !(m.rotationX || m.rotationY || m.z || m.force3D === !0 || "auto" === m.force3D && 1 !== a && 0 !== a) || m.svg && ua || !za ? (e = m.scaleX, f = m.scaleY, void(m.rotation || m.skewX || m.svg ? (b = m.rotation * H, c = b - m.skewX * H, d = 1e5, g = Math.cos(b) * e, h = Math.sin(b) * e, i = Math.sin(c) * -f, j = Math.cos(c) * f, m.svg && (p += m.xOrigin - (m.xOrigin * g + m.yOrigin * i), q += m.yOrigin - (m.xOrigin * h + m.yOrigin * j), l = 1e-6, l > p && p > -l && (p = 0), l > q && q > -l && (q = 0)), k = (0 | g * d) / d + "," + (0 | h * d) / d + "," + (0 | i * d) / d + "," + (0 | j * d) / d + "," + p + "," + q + ")", m.svg && ua ? n.setAttribute("transform", "matrix(" + k) : o[wa] = (m.xPercent || m.yPercent ? "translate(" + m.xPercent + "%," + m.yPercent + "%) matrix(" : "matrix(") + k) : o[wa] = (m.xPercent || m.yPercent ? "translate(" + m.xPercent + "%," + m.yPercent + "%) matrix(" : "matrix(") + e + ",0,0," + f + "," + p + "," + q + ")")) : (this.setRatio = Ia, void Ia.call(this, a))
                    };
                j = Aa.prototype, j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = 0, j.scaleX = j.scaleY = j.scaleZ = 1, sa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(a, b, c, d, f, h, i) {
                        if (d._lastParsedTransform === i) return f;
                        d._lastParsedTransform = i;
                        var j, k, l, m, n, o, p, q = d._transform = Ga(a, e, !0, i.parseTransform),
                            r = a.style,
                            s = 1e-6,
                            t = va.length,
                            u = i,
                            v = {};
                        if ("string" == typeof u.transform && wa) l = M.style, l[wa] = u.transform, l.display = "block", l.position = "absolute", K.body.appendChild(M), j = Ga(M, null, !1), K.body.removeChild(M);
                        else if ("object" == typeof u) {
                            if (j = {
                                    scaleX: fa(null != u.scaleX ? u.scaleX : u.scale, q.scaleX),
                                    scaleY: fa(null != u.scaleY ? u.scaleY : u.scale, q.scaleY),
                                    scaleZ: fa(u.scaleZ, q.scaleZ),
                                    x: fa(u.x, q.x),
                                    y: fa(u.y, q.y),
                                    z: fa(u.z, q.z),
                                    xPercent: fa(u.xPercent, q.xPercent),
                                    yPercent: fa(u.yPercent, q.yPercent),
                                    perspective: fa(u.transformPerspective, q.perspective)
                                }, p = u.directionalRotation, null != p)
                                if ("object" == typeof p)
                                    for (l in p) u[l] = p[l];
                                else u.rotation = p;
                            "string" == typeof u.x && -1 !== u.x.indexOf("%") && (j.x = 0, j.xPercent = fa(u.x, q.xPercent)), "string" == typeof u.y && -1 !== u.y.indexOf("%") && (j.y = 0, j.yPercent = fa(u.y, q.yPercent)), j.rotation = ga("rotation" in u ? u.rotation : "shortRotation" in u ? u.shortRotation + "_short" : "rotationZ" in u ? u.rotationZ : q.rotation, q.rotation, "rotation", v), za && (j.rotationX = ga("rotationX" in u ? u.rotationX : "shortRotationX" in u ? u.shortRotationX + "_short" : q.rotationX || 0, q.rotationX, "rotationX", v), j.rotationY = ga("rotationY" in u ? u.rotationY : "shortRotationY" in u ? u.shortRotationY + "_short" : q.rotationY || 0, q.rotationY, "rotationY", v)), j.skewX = null == u.skewX ? q.skewX : ga(u.skewX, q.skewX), j.skewY = null == u.skewY ? q.skewY : ga(u.skewY, q.skewY), (k = j.skewY - q.skewY) && (j.skewX += k, j.rotation += k)
                        }
                        for (za && null != u.force3D && (q.force3D = u.force3D, o = !0), q.skewType = u.skewType || q.skewType || g.defaultSkewType, n = q.force3D || q.z || q.rotationX || q.rotationY || j.z || j.rotationX || j.rotationY || j.perspective, n || null == u.scale || (j.scaleZ = 1); --t > -1;) c = va[t], m = j[c] - q[c], (m > s || -s > m || null != u[c] || null != J[c]) && (o = !0, f = new oa(q, c, q[c], m, f), c in v && (f.e = v[c]), f.xs0 = 0, f.plugin = h, d._overwriteProps.push(f.n));
                        return m = u.transformOrigin, m && q.svg && (Fa(a, da(m), j), f = new oa(q, "xOrigin", q.xOrigin, j.xOrigin - q.xOrigin, f, -1, "transformOrigin"), f.b = q.xOrigin, f.e = f.xs0 = j.xOrigin, f = new oa(q, "yOrigin", q.yOrigin, j.yOrigin - q.yOrigin, f, -1, "transformOrigin"), f.b = q.yOrigin, f.e = f.xs0 = j.yOrigin, m = "0px 0px"), (m || za && n && q.zOrigin) && (wa ? (o = !0, c = ya, m = (m || X(a, c, e, !1, "50% 50%")) + "", f = new oa(r, c, 0, 0, f, -1, "transformOrigin"), f.b = r[c], f.plugin = h, za ? (l = q.zOrigin, m = m.split(" "), q.zOrigin = (m.length > 2 && (0 === l || "0px" !== m[2]) ? parseFloat(m[2]) : l) || 0, f.xs0 = f.e = m[0] + " " + (m[1] || "50%") + " 0px", f = new oa(q, "zOrigin", 0, 0, f, -1, f.n), f.b = l, f.xs0 = f.e = q.zOrigin) : f.xs0 = f.e = m) : da(m + "", q)), o && (d._transformType = q.svg && ua || !n && 3 !== this._transformType ? 2 : 3), f
                    },
                    prefix: !0
                }), sa("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), sa("borderRadius", {
                    defaultValue: "0px",
                    parser: function(a, b, c, f, g) {
                        b = this.format(b);
                        var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            y = a.style;
                        for (p = parseFloat(a.offsetWidth), q = parseFloat(a.offsetHeight), h = b.split(" "), i = 0; x.length > i; i++) this.p.indexOf("border") && (x[i] = V(x[i])), l = k = X(a, x[i], e, !1, "0px"), -1 !== l.indexOf(" ") && (k = l.split(" "), l = k[0], k = k[1]), m = j = h[i], n = parseFloat(l), s = l.substr((n + "").length), t = "=" === m.charAt(1), t ? (o = parseInt(m.charAt(0) + "1", 10), m = m.substr(2), o *= parseFloat(m), r = m.substr((o + "").length - (0 > o ? 1 : 0)) || "") : (o = parseFloat(m), r = m.substr((o + "").length)), "" === r && (r = d[c] || s), r !== s && (u = Y(a, "borderLeft", n, s), v = Y(a, "borderTop", n, s), "%" === r ? (l = 100 * (u / p) + "%", k = 100 * (v / q) + "%") : "em" === r ? (w = Y(a, "borderLeft", 1, "em"), l = u / w + "em", k = v / w + "em") : (l = u + "px", k = v + "px"), t && (m = parseFloat(l) + o + r, j = parseFloat(k) + o + r)), g = pa(y, x[i], l + " " + k, m + " " + j, !1, "0px", g);
                        return g
                    },
                    prefix: !0,
                    formatter: la("0px 0px 0px 0px", !1, !0)
                }), sa("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j, k, l, m, n = "background-position",
                            o = e || W(a, null),
                            q = this.format((o ? p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                            r = this.format(b);
                        if (-1 !== q.indexOf("%") != (-1 !== r.indexOf("%")) && (m = X(a, "backgroundImage").replace(B, ""), m && "none" !== m)) {
                            for (h = q.split(" "), i = r.split(" "), N.setAttribute("src", m), j = 2; --j > -1;) q = h[j], k = -1 !== q.indexOf("%"), k !== (-1 !== i[j].indexOf("%")) && (l = 0 === j ? a.offsetWidth - N.width : a.offsetHeight - N.height, h[j] = k ? parseFloat(q) / 100 * l + "px" : 100 * (parseFloat(q) / l) + "%");
                            q = h.join(" ")
                        }
                        return this.parseComplex(a.style, q, r, f, g)
                    },
                    formatter: da
                }), sa("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: da
                }), sa("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), sa("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), sa("transformStyle", {
                    prefix: !0
                }), sa("backfaceVisibility", {
                    prefix: !0
                }), sa("userSelect", {
                    prefix: !0
                }), sa("margin", {
                    parser: ma("marginTop,marginRight,marginBottom,marginLeft")
                }), sa("padding", {
                    parser: ma("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), sa("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(a, b, c, d, f, g) {
                        var h, i, j;
                        return 9 > p ? (i = a.currentStyle, j = 8 > p ? " " : ",", h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")", b = this.format(b).split(",").join(j)) : (h = this.format(X(a, this.p, e, !1, this.dflt)), b = this.format(b)), this.parseComplex(a.style, h, b, f, g)
                    }
                }), sa("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), sa("autoRound,strictUnits", {
                    parser: function(a, b, c, d, e) {
                        return e
                    }
                }), sa("border", {
                    defaultValue: "0px solid #000",
                    parser: function(a, b, c, d, f, g) {
                        return this.parseComplex(a.style, this.format(X(a, "borderTopWidth", e, !1, "0px") + " " + X(a, "borderTopStyle", e, !1, "solid") + " " + X(a, "borderTopColor", e, !1, "#000")), this.format(b), f, g)
                    },
                    color: !0,
                    formatter: function(a) {
                        var b = a.split(" ");
                        return b[0] + " " + (b[1] || "solid") + " " + (a.match(ka) || ["#000"])[0]
                    }
                }), sa("borderWidth", {
                    parser: ma("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), sa("float,cssFloat,styleFloat", {
                    parser: function(a, b, c, d, e) {
                        var f = a.style,
                            g = "cssFloat" in f ? "cssFloat" : "styleFloat";
                        return new oa(f, g, 0, 0, e, -1, c, !1, 0, f[g], b)
                    }
                });
                var Ka = function(a) {
                    var b, c = this.t,
                        d = c.filter || X(this.data, "filter") || "",
                        e = 0 | this.s + this.c * a;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), b = !X(this.data, "filter")) : (c.filter = d.replace(x, ""), b = !0)), b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? 0 === e && this.xn1 || (c.filter = d + " alpha(opacity=" + e + ")") : c.filter = d.replace(v, "opacity=" + e))
                };
                sa("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(a, b, c, d, f, g) {
                        var h = parseFloat(X(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h), j && 1 === h && "hidden" === X(a, "visibility", e) && 0 !== b && (h = 0), Q ? f = new oa(i, "opacity", h, b - h, f) : (f = new oa(i, "opacity", 100 * h, 100 * (b - h), f), f.xn1 = j ? 1 : 0, i.zoom = 1, f.type = 2, f.b = "alpha(opacity=" + f.s + ")", f.e = "alpha(opacity=" + (f.s + f.c) + ")", f.data = a, f.plugin = g, f.setRatio = Ka), j && (f = new oa(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit"), f.xs0 = "inherit", d._overwriteProps.push(f.n), d._overwriteProps.push(c)), f
                    }
                });
                var La = function(a, b) {
                        b && (a.removeProperty ? ("ms" === b.substr(0, 2) && (b = "M" + b.substr(1)), a.removeProperty(b.replace(z, "-$1").toLowerCase())) : a.removeAttribute(b))
                    },
                    Ma = function(a) {
                        if (this.t._gsClassPT = this, 1 === a || 0 === a) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b;) b.v ? c[b.p] = b.v : La(c, b.p), b = b._next;
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                sa("className", {
                    parser: function(a, b, d, f, g, h, i) {
                        var j, k, l, m, n, o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (g = f._classNamePT = new oa(a, d, 0, 0, g, 2), g.setRatio = Ma, g.pr = -11, c = !0, g.b = o, k = $(a, e), l = a._gsClassPT) {
                            for (m = {}, n = l.data; n;) m[n.p] = 1, n = n._next;
                            l.setRatio(1)
                        }
                        return a._gsClassPT = g, g.e = "=" !== b.charAt(1) ? b : o.replace(RegExp("\\s*\\b" + b.substr(2) + "\\b"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : ""),
                            f._tween._duration && (a.setAttribute("class", g.e), j = _(a, k, $(a), i, m), a.setAttribute("class", o), g.data = j.firstMPT, a.style.cssText = p, g = g.xfirst = f.parse(a, j.difs, g, h)), g
                    }
                });
                var Na = function(a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b, c, d, e, f = this.t.style,
                            g = i.transform.parse;
                        if ("all" === this.e) f.cssText = "", e = !0;
                        else
                            for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1;) c = b[d], i[c] && (i[c].parse === g ? e = !0 : c = "transformOrigin" === c ? ya : i[c].p), La(f, c);
                        e && (La(f, wa), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (sa("clearProps", {
                        parser: function(a, b, d, e, f) {
                            return f = new oa(a, d, 0, 0, f, 2), f.setRatio = Na, f.e = b, f.pr = -10, f.data = e._tween, c = !0, f
                        }
                    }), j = "bezier,throwProps,physicsProps,physics2D".split(","), qa = j.length; qa--;) ta(j[qa]);
                j = g.prototype, j._firstPT = j._lastParsedTransform = j._transform = null, j._onInitTween = function(a, b, h) {
                    if (!a.nodeType) return !1;
                    this._target = a, this._tween = h, this._vars = b, k = b.autoRound, c = !1, d = b.suffixMap || g.suffixMap, e = W(a, ""), f = this._overwriteProps;
                    var i, j, n, p, q, r, s, t, u, v = a.style;
                    if (l && "" === v.zIndex && (i = X(a, "zIndex", e), ("auto" === i || "" === i) && this._addLazySet(v, "zIndex", 0)), "string" == typeof b && (p = v.cssText, i = $(a, e), v.cssText = p + ";" + b, i = _(a, i, $(a)).difs, !Q && w.test(b) && (i.opacity = parseFloat(RegExp.$1)), b = i, v.cssText = p), this._firstPT = j = this.parse(a, b, null), this._transformType) {
                        for (u = 3 === this._transformType, wa ? m && (l = !0, "" === v.zIndex && (s = X(a, "zIndex", e), ("auto" === s || "" === s) && this._addLazySet(v, "zIndex", 0)), o && this._addLazySet(v, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (u ? "visible" : "hidden"))) : v.zoom = 1, n = j; n && n._next;) n = n._next;
                        t = new oa(a, "transform", 0, 0, null, 2), this._linkCSSP(t, null, n), t.setRatio = u && za ? Ia : wa ? Ja : Ha, t.data = this._transform || Ga(a, e, !0), f.pop()
                    }
                    if (c) {
                        for (; j;) {
                            for (r = j._next, n = p; n && n.pr > j.pr;) n = n._next;
                            (j._prev = n ? n._prev : q) ? j._prev._next = j: p = j, (j._next = n) ? n._prev = j : q = j, j = r
                        }
                        this._firstPT = p
                    }
                    return !0
                }, j.parse = function(a, b, c, f) {
                    var g, h, j, l, m, n, o, p, q, r, s = a.style;
                    for (g in b) n = b[g], h = i[g], h ? c = h.parse(a, n, g, this, c, f, b) : (m = X(a, g, e) + "", q = "string" == typeof n, "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || q && y.test(n) ? (q || (n = ja(n), n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")"), c = pa(s, g, m, n, !0, "transparent", c, 0, f)) : !q || -1 === n.indexOf(" ") && -1 === n.indexOf(",") ? (j = parseFloat(m), o = j || 0 === j ? m.substr((j + "").length) : "", ("" === m || "auto" === m) && ("width" === g || "height" === g ? (j = ca(a, g, e), o = "px") : "left" === g || "top" === g ? (j = Z(a, g, e), o = "px") : (j = "opacity" !== g ? 0 : 1, o = "")), r = q && "=" === n.charAt(1), r ? (l = parseInt(n.charAt(0) + "1", 10), n = n.substr(2), l *= parseFloat(n), p = n.replace(u, "")) : (l = parseFloat(n), p = q ? n.replace(u, "") : ""), "" === p && (p = g in d ? d[g] : o), n = l || 0 === l ? (r ? l + j : l) + p : b[g], o !== p && "" !== p && (l || 0 === l) && j && (j = Y(a, g, j, o), "%" === p ? (j /= Y(a, g, 100, "%") / 100, b.strictUnits !== !0 && (m = j + "%")) : "em" === p ? j /= Y(a, g, 1, "em") : "px" !== p && (l = Y(a, g, l, p), p = "px"), r && (l || 0 === l) && (n = l + j + p)), r && (l += j), !j && 0 !== j || !l && 0 !== l ? void 0 !== s[g] && (n || "NaN" != n + "" && null != n) ? (c = new oa(s, g, l || j || 0, 0, c, -1, g, !1, 0, m, n), c.xs0 = "none" !== n || "display" !== g && -1 === g.indexOf("Style") ? n : m) : S("invalid " + g + " tween value: " + b[g]) : (c = new oa(s, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n), c.xs0 = p)) : c = pa(s, g, m, n, !0, null, c, 0, f)), f && c && !c.plugin && (c.plugin = f);
                    return c
                }, j.setRatio = function(a) {
                    var b, c, d, e = this._firstPT,
                        f = 1e-6;
                    if (1 !== a || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (a || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; e;) {
                                if (b = e.c * a + e.s, e.r ? b = Math.round(b) : f > b && b > -f && (b = 0), e.type)
                                    if (1 === e.type)
                                        if (d = e.l, 2 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                        else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                else {
                                    for (c = e.xs0 + b + e.xs1, d = 1; e.l > d; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                    e.t[e.p] = c
                                } else -1 === e.type ? e.t[e.p] = e.xs0 : e.setRatio && e.setRatio(a);
                                else e.t[e.p] = b + e.xs0;
                                e = e._next
                            } else
                                for (; e;) 2 !== e.type ? e.t[e.p] = e.b : e.setRatio(a), e = e._next;
                        else
                            for (; e;) 2 !== e.type ? e.t[e.p] = e.e : e.setRatio(a), e = e._next
                }, j._enableTransforms = function(a) {
                    this._transform = this._transform || Ga(this._target, e, !0), this._transformType = this._transform.svg && ua || !a && 3 !== this._transformType ? 2 : 3
                };
                var Oa = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                j._addLazySet = function(a, b, c) {
                    var d = this._firstPT = new oa(a, b, 0, 0, this._firstPT, 2);
                    d.e = c, d.setRatio = Oa, d.data = this
                }, j._linkCSSP = function(a, b, c, d) {
                    return a && (b && (b._prev = a), a._next && (a._next._prev = a._prev), a._prev ? a._prev._next = a._next : this._firstPT === a && (this._firstPT = a._next, d = !0), c ? c._next = a : d || null !== this._firstPT || (this._firstPT = a), a._next = b, a._prev = c), a
                }, j._kill = function(b) {
                    var c, d, e, f = b;
                    if (b.autoAlpha || b.alpha) {
                        f = {};
                        for (d in b) f[d] = b[d];
                        f.opacity = 1, f.autoAlpha && (f.visibility = 1)
                    }
                    return b.className && (c = this._classNamePT) && (e = c.xfirst, e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next), c._next && this._linkCSSP(c._next, c._next._next, e._prev), this._classNamePT = null), a.prototype._kill.call(this, f)
                };
                var Pa = function(a, b, c) {
                    var d, e, f, g;
                    if (a.slice)
                        for (e = a.length; --e > -1;) Pa(a[e], b, c);
                    else
                        for (d = a.childNodes, e = d.length; --e > -1;) f = d[e], g = f.type, f.style && (b.push($(f)), c && c.push(f)), 1 !== g && 9 !== g && 11 !== g || !f.childNodes.length || Pa(f, b, c)
                };
                return g.cascadeTo = function(a, c, d) {
                    var e, f, g, h = b.to(a, c, d),
                        i = [h],
                        j = [],
                        k = [],
                        l = [],
                        m = b._internals.reservedProps;
                    for (a = h._targets || h.target, Pa(a, j, l), h.render(c, !0), Pa(a, k), h.render(0, !0), h._enabled(!0), e = l.length; --e > -1;)
                        if (f = _(l[e], j[e], k[e]), f.firstMPT) {
                            f = f.difs;
                            for (g in d) m[g] && (f[g] = d[g]);
                            i.push(b.to(l[e], c, f))
                        } return i
                }, a.activate([g]), g
            }, !0),
            function() {
                var a = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(a, b, c) {
                            return this._tween = c, !0
                        }
                    }),
                    b = a.prototype;
                b._onInitAllProps = function() {
                    for (var a, b, c, d = this._tween, e = d.vars.roundProps instanceof Array ? d.vars.roundProps : d.vars.roundProps.split(","), f = e.length, g = {}, h = d._propLookup.roundProps; --f > -1;) g[e[f]] = 1;
                    for (f = e.length; --f > -1;)
                        for (a = e[f], b = d._firstPT; b;) c = b._next, b.pg ? b.t._roundProps(g, !0) : b.n === a && (this._add(b.t, a, b.s, b.c), c && (c._prev = b._prev), b._prev ? b._prev._next = c : d._firstPT === b && (d._firstPT = c), b._next = b._prev = null, d._propLookup[a] = h), b = c;
                    return !1
                }, b._add = function(a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, !0), this._overwriteProps.push(b)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(a, b) {
                    var c, d, e;
                    if ("function" != typeof a.setAttribute) return !1;
                    this._target = a, this._proxy = {}, this._start = {}, this._end = {};
                    for (c in b) this._start[c] = this._proxy[c] = d = a.getAttribute(c), e = this._addTween(this._proxy, c, parseFloat(d), b[c], c), this._end[c] = e ? e.s + e.c : b[c], this._overwriteProps.push(c);
                    return !0
                },
                set: function(a) {
                    this._super.setRatio.call(this, a);
                    for (var b, c = this._overwriteProps, d = c.length, e = 1 === a ? this._end : a ? this._proxy : this._start; --d > -1;) b = c[d], this._target.setAttribute(b, e[b] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(a, b) {
                    "object" != typeof b && (b = {
                        rotation: b
                    }), this.finals = {};
                    var c, d, e, f, g, h, i = b.useRadians === !0 ? 2 * Math.PI : 360,
                        j = 1e-6;
                    for (c in b) "useRadians" !== c && (h = (b[c] + "").split("_"), d = h[0], e = parseFloat("function" != typeof a[c] ? a[c] : a[c.indexOf("set") || "function" != typeof a["get" + c.substr(3)] ? c : "get" + c.substr(3)]()), f = this.finals[c] = "string" == typeof d && "=" === d.charAt(1) ? e + parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) || 0, g = f - e, h.length && (d = h.join("_"), -1 !== d.indexOf("short") && (g %= i, g !== g % (i / 2) && (g = 0 > g ? g + i : g - i)), -1 !== d.indexOf("_cw") && 0 > g ? g = (g + 9999999999 * i) % i - (0 | g / i) * i : -1 !== d.indexOf("ccw") && g > 0 && (g = (g - 9999999999 * i) % i - (0 | g / i) * i)), (g > j || -j > g) && (this._addTween(a, c, e, e + g, c), this._overwriteProps.push(c)));
                    return !0
                },
                set: function(a) {
                    var b;
                    if (1 !== a) this._super.setRatio.call(this, a);
                    else
                        for (b = this._firstPT; b;) b.f ? b.t[b.p](this.finals[b.p]) : b.t[b.p] = this.finals[b.p], b = b._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
                var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                    f = e.com.greensock,
                    g = 2 * Math.PI,
                    h = Math.PI / 2,
                    i = f._class,
                    j = function(b, c) {
                        var d = i("easing." + b, function() {}, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, d
                    },
                    k = a.register || function() {},
                    l = function(a, b, c, d) {
                        var e = i("easing." + a, {
                            easeOut: new b,
                            easeIn: new c,
                            easeInOut: new d
                        }, !0);
                        return k(e, a), e
                    },
                    m = function(a, b, c) {
                        this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                    },
                    n = function(b, c) {
                        var d = i("easing." + b, function(a) {
                                this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            e = d.prototype = new a;
                        return e.constructor = d, e.getRatio = c, e.config = function(a) {
                            return new d(a)
                        }, d
                    },
                    o = l("Back", n("BackOut", function(a) {
                        return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                    }), n("BackIn", function(a) {
                        return a * a * ((this._p1 + 1) * a - this._p1)
                    }), n("BackInOut", function(a) {
                        return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                    })),
                    p = i("easing.SlowMo", function(a, b, c) {
                        b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                    }, !0),
                    q = p.prototype = new a;
                return q.constructor = p, q.getRatio = function(a) {
                    var b = a + (.5 - a) * this._p;
                    return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
                }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                    return new p(a, b, c)
                }, b = i("easing.SteppedEase", function(a) {
                    a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
                }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                    return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
                }, q.config = b.config = function(a) {
                    return new b(a)
                }, c = i("easing.RoughEase", function(b) {
                    b = b || {};
                    for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                        x: c,
                        y: d
                    };
                    for (j.sort(function(a, b) {
                            return a.x - b.x
                        }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                    this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
                }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                    var b = this._prev;
                    if (a > b.t) {
                        for (; b.next && a >= b.t;) b = b.next;
                        b = b.prev
                    } else
                        for (; b.prev && b.t >= a;) b = b.prev;
                    return this._prev = b, b.v + (a - b.t) / b.gap * b.c
                }, q.config = function(a) {
                    return new c(a)
                }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                    return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
                }), j("BounceIn", function(a) {
                    return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
                }), j("BounceInOut", function(a) {
                    var b = .5 > a;
                    return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
                })), l("Circ", j("CircOut", function(a) {
                    return Math.sqrt(1 - (a -= 1) * a)
                }), j("CircIn", function(a) {
                    return -(Math.sqrt(1 - a * a) - 1)
                }), j("CircInOut", function(a) {
                    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
                })), d = function(b, c, d) {
                    var e = i("easing." + b, function(a, b) {
                            this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        f = e.prototype = new a;
                    return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                        return new e(a, b)
                    }, e
                }, l("Elastic", d("ElasticOut", function(a) {
                    return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .3), d("ElasticIn", function(a) {
                    return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
                }, .3), d("ElasticInOut", function(a) {
                    return 1 > (a *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
                }, .45)), l("Expo", j("ExpoOut", function(a) {
                    return 1 - Math.pow(2, -10 * a)
                }), j("ExpoIn", function(a) {
                    return Math.pow(2, 10 * (a - 1)) - .001
                }), j("ExpoInOut", function(a) {
                    return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
                })), l("Sine", j("SineOut", function(a) {
                    return Math.sin(a * h)
                }), j("SineIn", function(a) {
                    return -Math.cos(a * h) + 1
                }), j("SineInOut", function(a) {
                    return -.5 * (Math.cos(Math.PI * a) - 1)
                })), i("easing.EaseLookup", {
                    find: function(b) {
                        return a.map[b]
                    }
                }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(a, b) {
        "use strict";
        var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!c.TweenLite) {
            var d, e, f, g, h, i = function(a) {
                    var b, d = a.split("."),
                        e = c;
                    for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                    return e
                },
                j = i("com.greensock"),
                k = 1e-10,
                l = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                m = function() {},
                n = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                o = {},
                p = function(d, e, f, g) {
                    this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                    var h = [];
                    this.check = function(j) {
                        for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                        if (0 === r && f)
                            for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                    return n
                                }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                    }, this.check(!0)
                },
                q = a._gsDefine = function(a, b, c, d) {
                    return new p(a, b, c, d)
                },
                r = j._class = function(a, b, c) {
                    return b = b || function() {}, q(a, [], function() {
                        return b
                    }, c), b
                };
            q.globals = c;
            var s = [0, 0, 1, 1],
                t = [],
                u = r("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
                }, !0),
                v = u.map = {},
                w = u.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (f = u.prototype, f._calcEnd = !1, f.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
            v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
            var x = r("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            f = x.prototype, f.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== g || h || g.wake()
            }, f.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return void d.splice(c, 1)
            }, f.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d && (d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c))
            };
            var y = a.requestAnimationFrame,
                z = a.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                B = A();
            for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
            r("Ticker", function(a, b) {
                var c, d, e, f, i, j = this,
                    l = A(),
                    n = b !== !1 && y,
                    o = 500,
                    p = 33,
                    q = "tick",
                    r = function(a) {
                        var b, g, h = A() - B;
                        h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(r)), g && j.dispatchEvent(q)
                    };
                x.call(j), j.time = j.frame = 0, j.tick = function() {
                    r(!0)
                }, j.lagSmoothing = function(a, b) {
                    o = a || 1 / k, p = Math.min(b, o, 0)
                }, j.sleep = function() {
                    null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
                }, j.wake = function() {
                    null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function(a) {
                        return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                    }, j === g && (h = !0), r(2)
                }, j.fps = function(a) {
                    return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, void j.wake()) : c
                }, j.useRAF = function(a) {
                    return arguments.length ? (j.sleep(), n = a, void j.fps(c)) : n
                }, j.fps(a), setTimeout(function() {
                    n && (!e || 5 > j.frame) && j.useRAF(!1)
                }, 1500)
            }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
            var C = r("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, R) {
                    h || g.wake();
                    var c = this.vars.useFrames ? Q : R;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var D = function() {
                h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
            };
            D(), f.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, f.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, f.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, f.seek = function(a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, f.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, f.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, f.render = function() {}, f.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, f.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, f._enabled = function(a, b) {
                return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, f._kill = function() {
                return this._enabled(!1, !1)
            }, f.kill = function(a, b) {
                return this._kill(a, b), this
            }, f._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, f._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, f.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, f.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, f.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, f.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, f.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, f.totalTime = function(a, b, c) {
                if (h || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && S())
                }
                return this
            }, f.progress = f.totalProgress = function(a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, f.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, f.endTime = function(a) {
                return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
            }, f.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, f.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, f.paused = function(a) {
                if (!arguments.length) return this._paused;
                if (a != this._paused && this._timeline) {
                    h || a || g.wake();
                    var b = this._timeline,
                        c = b.rawTime(),
                        d = c - this._pauseTime;
                    !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !a && this._enabled(!0, !1), this
            };
            var E = r("core.SimpleTimeline", function(a) {
                C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._recent = a, this._timeline && this._uncache(!0), this
            }, f._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, a === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, f.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, f.rawTime = function() {
                return h || g.wake(), this._totalTime
            };
            var F = r("TweenLite", function(b, c, d) {
                    if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                        for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1), 1 === i && this._siblings[e].length > 1 && V(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = T(b, this, !1), 1 === i && this._siblings.length > 1 && V(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
                }, !0),
                G = function(b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                H = function(a, b) {
                    var c, d = {};
                    for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.15.1", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = !0, F.lagSmoothing = function(a, b) {
                g.lagSmoothing(a, b)
            }, F.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var I = [],
                J = {},
                K = F._internals = {
                    isArray: n,
                    isSelector: G,
                    lazyTweens: I
                },
                L = F._plugins = {},
                M = K.tweenLookup = {},
                N = 0,
                O = K.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1
                },
                P = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                Q = C._rootFramesTimeline = new E,
                R = C._rootTimeline = new E,
                S = K.lazyRender = function() {
                    var a, b = I.length;
                    for (J = {}; --b > -1;) a = I[b], a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), a._lazy = !1);
                    I.length = 0
                };
            R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(S, 1), C._updateRoot = F.render = function() {
                var a, b, c;
                if (I.length && S(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && S(), !(g.frame % 120)) {
                    for (c in M) {
                        for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete M[c]
                    }
                    if (c = R._first, (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || g.sleep()
                    }
                }
            }, g.addEventListener("tick", C._updateRoot);
            var T = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return M[f].tweens
                },
                U = function(a, b, c, d) {
                    var e, f, g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), g = F.onOverwrite, g && (f = g(a, b, c, d)), e !== !1 && f !== !1
                },
                V = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || U(h, b) && h._enabled(!1, !1) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, l = b._startTime + k,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || W(b, 0, o), 0 === W(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;)
                        if (h = m[f], 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || !h._firstPT && h._initted) {
                            if (2 !== d && !U(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0)
                        } return g
                },
                W = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
                };
            f._init = function() {
                var a, b, c, d, e, f = this.vars,
                    g = this._overwrittenProps,
                    h = this._duration,
                    i = !!f.immediateRender,
                    j = f.ease;
                if (f.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in f.startAt) e[d] = f.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (f.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (i = !1), c = {};
                        for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = f.onUpdate, this._initted = !0
            }, f._initProps = function(b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                J[b._gsTweenID] && S(), this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                                _next: this._firstPT,
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: f,
                                pg: !0,
                                pr: i._priority
                            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && V(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
            }, f.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k && "isPause" !== this.data) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete", d = this._reversed), 0 > a && (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== k || "isPause" !== this.data) && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)), this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var l = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), void(this._lazy = [a, b]);
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
                }
            }, f._kill = function(a, b, c) {
                if ("all" === a && (a = null), null == a && (null == b || b === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
                var d, e, f, g, h, i, j, k, l;
                if ((n(b) || G(b)) && "number" != typeof b[0])
                    for (d = b.length; --d > -1;) this._kill(a, b[d]) && (i = !0);
                else {
                    if (this._targets) {
                        for (d = this._targets.length; --d > -1;)
                            if (b === this._targets[d]) {
                                h = this._propLookup[d] || {}, this._overwrittenProps = this._overwrittenProps || [], e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all";
                                break
                            }
                    } else {
                        if (b !== this.target) return !1;
                        h = this._propLookup, e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                    }
                    if (h) {
                        if (j = a || h, k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill), c && (F.onOverwrite || this.vars.onOverwrite)) {
                            for (f in j) h[f] && (l || (l = []), l.push(f));
                            if (!U(this, c, b, l)) return !1
                        }
                        for (f in j)(g = h[f]) && (g.pg && g.t._kill(j) && (i = !0), g.pg && 0 !== g.t._overwriteProps.length || (g._prev ? g._prev._next = g._next : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), g._next = g._prev = null), delete h[f]), k && (e[f] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return i
            }, f.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], C.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -k, this.render(-this._delay)), this
            }, f._enabled = function(a, b) {
                if (h || g.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = T(d[c], this, !0);
                    else this._siblings = T(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, a, b), !(!this._notifyPluginsOfEnabled || !this._firstPT) && F._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
            }, F.to = function(a, b, c) {
                return new F(a, b, c)
            }, F.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
            }, F.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
            }, F.delayedCall = function(a, b, c, d, e) {
                return new F(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    onCompleteScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    onReverseCompleteScope: d,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, F.set = function(a, b) {
                return new F(a, 0, b)
            }, F.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : F.selector(a) || a;
                var c, d, e, f;
                if ((n(a) || G(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = T(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var X = r("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = X.prototype
            }, !0);
            if (f = X.prototype, X.version = "1.10.1", X.API = 2, f._firstPT = null, f._addTween = function(a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                        _next: this._firstPT,
                        t: a,
                        p: b,
                        s: c,
                        c: g,
                        f: "function" == typeof a[b],
                        n: e || b,
                        r: f
                    }, h._next && (h._next._prev = h), h) : void 0
                }, f.setRatio = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, f._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, f._roundProps = function(a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, F._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, X.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === X.API && (L[(new a[b])._propName] = a[b]);
                    return !0
                }, q.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            X.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new X(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, X.activate([g]), g
                }, d = a._gsQueue) {
                for (e = 0; d.length > e; e++) d[e]();
                for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(a, b) {
        "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.ScrollMagic = b()
    }(this, function() {
        "use strict";
        var a = function() {
            e.log(2, "(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")
        };
        a.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var b = "data-scrollmagic-pin-spacer";
        a.Controller = function(d) {
            var t, u, f = "ScrollMagic.Controller",
                g = "FORWARD",
                h = "REVERSE",
                i = "PAUSED",
                j = c.defaults,
                k = this,
                l = e.extend({}, j, d),
                m = [],
                n = !1,
                o = 0,
                p = i,
                q = !0,
                r = 0,
                s = !0,
                v = function() {
                    for (var b in l) j.hasOwnProperty(b) || (E(2, 'WARNING: Unknown option "' + b + '"'), delete l[b]);
                    if (l.container = e.get.elements(l.container)[0], !l.container) throw E(1, "ERROR creating object " + f + ": No valid scroll container supplied"), f + " init failed.";
                    q = l.container === window || l.container === document.body || !document.body.contains(l.container), q && (l.container = window), r = y(), l.container.addEventListener("resize", C), l.container.addEventListener("scroll", C), l.refreshInterval = parseInt(l.refreshInterval) || j.refreshInterval, w(), E(3, "added new " + f + " controller (v" + a.version + ")")
                },
                w = function() {
                    l.refreshInterval > 0 && (u = window.setTimeout(D, l.refreshInterval))
                },
                x = function() {
                    return l.vertical ? e.get.scrollTop(l.container) : e.get.scrollLeft(l.container)
                },
                y = function() {
                    return l.vertical ? e.get.height(l.container) : e.get.width(l.container)
                },
                z = this._setScrollPos = function(a) {
                    l.vertical ? q ? window.scrollTo(e.get.scrollLeft(), a) : l.container.scrollTop = a : q ? window.scrollTo(a, e.get.scrollTop()) : l.container.scrollLeft = a
                },
                A = function() {
                    if (s && n) {
                        var a = e.type.Array(n) ? n : m.slice(0);
                        n = !1;
                        var b = o;
                        o = k.scrollPos();
                        var c = o - b;
                        0 !== c && (p = c > 0 ? g : h), p === h && a.reverse(), a.forEach(function(b, c) {
                            E(3, "updating Scene " + (c + 1) + "/" + a.length + " (" + m.length + " total)"), b.update(!0)
                        }), 0 === a.length && l.loglevel >= 3 && E(3, "updating 0 Scenes (nothing added to controller)")
                    }
                },
                B = function() {
                    t = e.rAF(A)
                },
                C = function(a) {
                    E(3, "event fired causing an update:", a.type), "resize" == a.type && (r = y(), p = i), n !== !0 && (n = !0, B())
                },
                D = function() {
                    if (!q && r != y()) {
                        var a;
                        try {
                            a = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (b) {
                            a = document.createEvent("Event"), a.initEvent("resize", !1, !1)
                        }
                        l.container.dispatchEvent(a)
                    }
                    m.forEach(function(a, b) {
                        a.refresh()
                    }), w()
                },
                E = this._log = function(a, b) {
                    l.loglevel >= a && (Array.prototype.splice.call(arguments, 1, 0, "(" + f + ") ->"), e.log.apply(window, arguments))
                };
            this._options = l;
            var F = function(a) {
                if (a.length <= 1) return a;
                var b = a.slice(0);
                return b.sort(function(a, b) {
                    return a.scrollOffset() > b.scrollOffset() ? 1 : -1
                }), b
            };
            return this.addScene = function(b) {
                if (e.type.Array(b)) b.forEach(function(a, b) {
                    k.addScene(a)
                });
                else if (b instanceof a.Scene) {
                    if (b.controller() !== k) b.addTo(k);
                    else if (m.indexOf(b) < 0) {
                        m.push(b), m = F(m), b.on("shift.controller_sort", function() {
                            m = F(m)
                        });
                        for (var c in l.globalSceneOptions) b[c] && b[c].call(b, l.globalSceneOptions[c]);
                        E(3, "adding Scene (now " + m.length + " total)")
                    }
                } else E(1, "ERROR: invalid argument supplied for '.addScene()'");
                return k
            }, this.removeScene = function(a) {
                if (e.type.Array(a)) a.forEach(function(a, b) {
                    k.removeScene(a)
                });
                else {
                    var b = m.indexOf(a);
                    b > -1 && (a.off("shift.controller_sort"), m.splice(b, 1), E(3, "removing Scene (now " + m.length + " left)"), a.remove())
                }
                return k
            }, this.updateScene = function(b, c) {
                return e.type.Array(b) ? b.forEach(function(a, b) {
                    k.updateScene(a, c)
                }) : c ? b.update(!0) : n !== !0 && b instanceof a.Scene && (n = n || [], n.indexOf(b) == -1 && n.push(b), n = F(n), B()), k
            }, this.update = function(a) {
                return C({
                    type: "resize"
                }), a && A(), k
            }, this.scrollTo = function(c, d) {
                if (e.type.Number(c)) z.call(l.container, c, d);
                else if (c instanceof a.Scene) c.controller() === k ? k.scrollTo(c.scrollOffset(), d) : E(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", c);
                else if (e.type.Function(c)) z = c;
                else {
                    var f = e.get.elements(c)[0];
                    if (f) {
                        for (; f.parentNode.hasAttribute(b);) f = f.parentNode;
                        var g = l.vertical ? "top" : "left",
                            h = e.get.offset(l.container),
                            i = e.get.offset(f);
                        q || (h[g] -= k.scrollPos()), k.scrollTo(i[g] - h[g], d)
                    } else E(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", c)
                }
                return k
            }, this.scrollPos = function(a) {
                return arguments.length ? (e.type.Function(a) ? x = a : E(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."), k) : x.call(k)
            }, this.info = function(a) {
                var b = {
                    size: r,
                    vertical: l.vertical,
                    scrollPos: o,
                    scrollDirection: p,
                    container: l.container,
                    isDocument: q
                };
                return arguments.length ? void 0 !== b[a] ? b[a] : void E(1, 'ERROR: option "' + a + '" is not available') : b
            }, this.loglevel = function(a) {
                return arguments.length ? (l.loglevel != a && (l.loglevel = a), k) : l.loglevel
            }, this.enabled = function(a) {
                return arguments.length ? (s != a && (s = !!a, k.updateScene(m, !0)), k) : s
            }, this.destroy = function(a) {
                window.clearTimeout(u);
                for (var b = m.length; b--;) m[b].destroy(a);
                return l.container.removeEventListener("resize", C), l.container.removeEventListener("scroll", C), e.cAF(t), E(3, "destroyed " + f + " (reset: " + (a ? "true" : "false") + ")"), null
            }, v(), k
        };
        var c = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        a.Controller.addOption = function(a, b) {
            c.defaults[a] = b
        }, a.Controller.extend = function(b) {
            var c = this;
            a.Controller = function() {
                return c.apply(this, arguments), this.$super = e.extend({}, this), b.apply(this, arguments) || this
            }, e.extend(a.Controller, c), a.Controller.prototype = c.prototype, a.Controller.prototype.constructor = a.Controller
        }, a.Scene = function(c) {
            var r, s, f = "ScrollMagic.Scene",
                g = "BEFORE",
                h = "DURING",
                i = "AFTER",
                j = d.defaults,
                k = this,
                l = e.extend({}, j, c),
                m = g,
                n = 0,
                o = {
                    start: 0,
                    end: 0
                },
                p = 0,
                q = !0,
                t = function() {
                    for (var a in l) j.hasOwnProperty(a) || (v(2, 'WARNING: Unknown option "' + a + '"'), delete l[a]);
                    for (var b in j) D(b);
                    B()
                },
                u = {};
            this.on = function(a, b) {
                return e.type.Function(b) ? (a = a.trim().split(" "), a.forEach(function(a) {
                    var c = a.split("."),
                        d = c[0],
                        e = c[1];
                    "*" != d && (u[d] || (u[d] = []), u[d].push({
                        namespace: e || "",
                        callback: b
                    }))
                })) : v(1, "ERROR when calling '.on()': Supplied callback for '" + a + "' is not a valid function!"), k
            }, this.off = function(a, b) {
                return a ? (a = a.trim().split(" "), a.forEach(function(a, c) {
                    var d = a.split("."),
                        e = d[0],
                        f = d[1] || "",
                        g = "*" === e ? Object.keys(u) : [e];
                    g.forEach(function(a) {
                        for (var c = u[a] || [], d = c.length; d--;) {
                            var e = c[d];
                            !e || f !== e.namespace && "*" !== f || b && b != e.callback || c.splice(d, 1)
                        }
                        c.length || delete u[a]
                    })
                }), k) : (v(1, "ERROR: Invalid event name supplied."), k)
            }, this.trigger = function(b, c) {
                if (b) {
                    var d = b.trim().split("."),
                        e = d[0],
                        f = d[1],
                        g = u[e];
                    v(3, "event fired:", e, c ? "->" : "", c || ""), g && g.forEach(function(b, d) {
                        f && f !== b.namespace || b.callback.call(k, new a.Event(e, b.namespace, k, c))
                    })
                } else v(1, "ERROR: Invalid event name supplied.");
                return k
            }, k.on("change.internal", function(a) {
                "loglevel" !== a.what && "tweenChanges" !== a.what && ("triggerElement" === a.what ? y() : "reverse" === a.what && k.update())
            }).on("shift.internal", function(a) {
                w(), k.update()
            });
            var v = this._log = function(a, b) {
                l.loglevel >= a && (Array.prototype.splice.call(arguments, 1, 0, "(" + f + ") ->"), e.log.apply(window, arguments))
            };
            this.addTo = function(b) {
                return b instanceof a.Controller ? s != b && (s && s.removeScene(k), s = b, B(), x(!0), y(!0), w(), s.info("container").addEventListener("resize", z), b.addScene(k), k.trigger("add", {
                    controller: s
                }), v(3, "added " + f + " to controller"), k.update()) : v(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"), k
            }, this.enabled = function(a) {
                return arguments.length ? (q != a && (q = !!a, k.update(!0)), k) : q
            }, this.remove = function() {
                if (s) {
                    s.info("container").removeEventListener("resize", z);
                    var a = s;
                    s = void 0, a.removeScene(k), k.trigger("remove"), v(3, "removed " + f + " from controller")
                }
                return k
            }, this.destroy = function(a) {
                return k.trigger("destroy", {
                    reset: a
                }), k.remove(), k.off("*.*"), v(3, "destroyed " + f + " (reset: " + (a ? "true" : "false") + ")"), null
            }, this.update = function(a) {
                if (s)
                    if (a)
                        if (s.enabled() && q) {
                            var c, b = s.info("scrollPos");
                            c = l.duration > 0 ? (b - o.start) / (o.end - o.start) : b >= o.start ? 1 : 0, k.trigger("update", {
                                startPos: o.start,
                                endPos: o.end,
                                scrollPos: b
                            }), k.progress(c)
                        } else E && m === h && G(!0);
                else s.updateScene(k, !1);
                return k
            }, this.refresh = function() {
                return x(), y(), k
            }, this.progress = function(a) {
                if (arguments.length) {
                    var b = !1,
                        c = m,
                        d = s ? s.info("scrollDirection") : "PAUSED",
                        e = l.reverse || a >= n;
                    if (0 === l.duration ? (b = n != a, n = a < 1 && e ? 0 : 1, m = 0 === n ? g : h) : a < 0 && m !== g && e ? (n = 0, m = g, b = !0) : a >= 0 && a < 1 && e ? (n = a, m = h, b = !0) : a >= 1 && m !== i ? (n = 1, m = i, b = !0) : m !== h || e || G(), b) {
                        var f = {
                                progress: n,
                                state: m,
                                scrollDirection: d
                            },
                            j = m != c,
                            o = function(a) {
                                k.trigger(a, f)
                            };
                        j && c !== h && (o("enter"), o(c === g ? "start" : "end")), o("progress"), j && m !== h && (o(m === g ? "start" : "end"), o("leave"))
                    }
                    return k
                }
                return n
            };
            var w = function() {
                    o = {
                        start: p + l.offset
                    }, s && l.triggerElement && (o.start -= s.info("size") * l.triggerHook), o.end = o.start + l.duration
                },
                x = function(a) {
                    if (r) {
                        var b = "duration";
                        C(b, r.call(k)) && !a && (k.trigger("change", {
                            what: b,
                            newval: l[b]
                        }), k.trigger("shift", {
                            reason: b
                        }))
                    }
                },
                y = function(a) {
                    var c = 0,
                        d = l.triggerElement;
                    if (s && d) {
                        for (var f = s.info(), g = e.get.offset(f.container), h = f.vertical ? "top" : "left"; d.parentNode.hasAttribute(b);) d = d.parentNode;
                        var i = e.get.offset(d);
                        f.isDocument || (g[h] -= s.scrollPos()), c = i[h] - g[h]
                    }
                    var j = c != p;
                    p = c, j && !a && k.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                z = function(a) {
                    l.triggerHook > 0 && k.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                A = e.extend(d.validate, {
                    duration: function(a) {
                        if (e.type.String(a) && a.match(/^(\.|\d)*\d+%$/)) {
                            var b = parseFloat(a) / 100;
                            a = function() {
                                return s ? s.info("size") * b : 0
                            }
                        }
                        if (e.type.Function(a)) {
                            r = a;
                            try {
                                a = parseFloat(r())
                            } catch (b) {
                                a = -1
                            }
                        }
                        if (a = parseFloat(a), !e.type.Number(a) || a < 0) throw r ? (r = void 0, ['Invalid return value of supplied function for option "duration":', a]) : ['Invalid value for option "duration":', a];
                        return a
                    }
                }),
                B = function(a) {
                    a = arguments.length ? [a] : Object.keys(A), a.forEach(function(a, b) {
                        var c;
                        if (A[a]) try {
                            c = A[a](l[a])
                        } catch (b) {
                            c = j[a];
                            var d = e.type.String(b) ? [b] : b;
                            e.type.Array(d) ? (d[0] = "ERROR: " + d[0], d.unshift(1), v.apply(this, d)) : v(1, "ERROR: Problem executing validation callback for option '" + a + "':", b.message)
                        } finally {
                            l[a] = c
                        }
                    })
                },
                C = function(a, b) {
                    var c = !1,
                        d = l[a];
                    return l[a] != b && (l[a] = b, B(a), c = d != l[a]), c
                },
                D = function(a) {
                    k[a] || (k[a] = function(b) {
                        return arguments.length ? ("duration" === a && (r = void 0), C(a, b) && (k.trigger("change", {
                            what: a,
                            newval: l[a]
                        }), d.shifts.indexOf(a) > -1 && k.trigger("shift", {
                            reason: a
                        })), k) : l[a]
                    })
                };
            this.controller = function() {
                return s
            }, this.state = function() {
                return m
            }, this.scrollOffset = function() {
                return o.start
            }, this.triggerPosition = function() {
                var a = l.offset;
                return s && (a += l.triggerElement ? p : s.info("size") * k.triggerHook()), a
            };
            var E, F;
            k.on("shift.internal", function(a) {
                var b = "duration" === a.reason;
                (m === i && b || m === h && 0 === l.duration) && G(), b && H()
            }).on("progress.internal", function(a) {
                G()
            }).on("add.internal", function(a) {
                H()
            }).on("destroy.internal", function(a) {
                k.removePin(a.reset)
            });
            var G = function(a) {
                    if (E && s) {
                        var b = s.info(),
                            c = F.spacer.firstChild;
                        if (a || m !== h) {
                            var j = {
                                    position: F.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                k = e.css(c, "position") != j.position;
                            F.pushFollowers ? l.duration > 0 && (m === i && 0 === parseFloat(e.css(F.spacer, "padding-top")) ? k = !0 : m === g && 0 === parseFloat(e.css(F.spacer, "padding-bottom")) && (k = !0)) : j[b.vertical ? "top" : "left"] = l.duration * n, e.css(c, j), k && H()
                        } else {
                            "fixed" != e.css(c, "position") && (e.css(c, {
                                position: "fixed"
                            }), H());
                            var d = e.get.offset(F.spacer, !0),
                                f = l.reverse || 0 === l.duration ? b.scrollPos - o.start : Math.round(n * l.duration * 10) / 10;
                            d[b.vertical ? "top" : "left"] += f, e.css(F.spacer.firstChild, {
                                top: d.top,
                                left: d.left
                            })
                        }
                    }
                },
                H = function() {
                    if (E && s && F.inFlow) {
                        var c = m === h,
                            d = s.info("vertical"),
                            f = F.spacer.firstChild,
                            j = e.isMarginCollapseType(e.css(F.spacer, "display")),
                            k = {};
                        F.relSize.width || F.relSize.autoFullWidth ? c ? e.css(E, {
                            width: e.get.width(F.spacer)
                        }) : e.css(E, {
                            width: "100%"
                        }) : (k["min-width"] = e.get.width(d ? E : f, !0, !0), k.width = c ? k["min-width"] : "auto"), F.relSize.height ? c ? e.css(E, {
                            height: e.get.height(F.spacer) - (F.pushFollowers ? l.duration : 0)
                        }) : e.css(E, {
                            height: "100%"
                        }) : (k["min-height"] = e.get.height(d ? f : E, !0, !j), k.height = c ? k["min-height"] : "auto"), F.pushFollowers && (k["padding" + (d ? "Top" : "Left")] = l.duration * n, k["padding" + (d ? "Bottom" : "Right")] = l.duration * (1 - n)), e.css(F.spacer, k)
                    }
                },
                I = function() {
                    s && E && m === h && !s.info("isDocument") && G()
                },
                J = function() {
                    s && E && m === h && ((F.relSize.width || F.relSize.autoFullWidth) && e.get.width(window) != e.get.width(F.spacer.parentNode) || F.relSize.height && e.get.height(window) != e.get.height(F.spacer.parentNode)) && H()
                },
                K = function(a) {
                    s && E && m === h && !s.info("isDocument") && (a.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((a.wheelDelta || a[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -a.detail)))
                };
            this.setPin = function(a, c) {
                var d = {
                    pushFollowers: !0,
                    spacerClass: "scrollmagic-pin-spacer"
                };
                if (c = e.extend({}, d, c), a = e.get.elements(a)[0], !a) return v(1, "ERROR calling method 'setPin()': Invalid pin element supplied."), k;
                if ("fixed" === e.css(a, "position")) return v(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."), k;
                if (E) {
                    if (E === a) return k;
                    k.removePin()
                }
                E = a;
                var f = E.parentNode.style.display,
                    g = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                E.parentNode.style.display = "none";
                var h = "absolute" != e.css(E, "position"),
                    i = e.css(E, g.concat(["display"])),
                    j = e.css(E, ["width", "height"]);
                E.parentNode.style.display = f, !h && c.pushFollowers && (v(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."), c.pushFollowers = !1), window.setTimeout(function() {
                    E && 0 === l.duration && c.pushFollowers && v(2, "WARNING: pushFollowers =", !0, "has no effect, when scene duration is 0.")
                }, 0);
                var m = E.parentNode.insertBefore(document.createElement("div"), E),
                    n = e.extend(i, {
                        position: h ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (h || e.extend(n, e.css(E, ["width", "height"])), e.css(m, n), m.setAttribute(b, ""), e.addClass(m, c.spacerClass), F = {
                        spacer: m,
                        relSize: {
                            width: "%" === j.width.slice(-1),
                            height: "%" === j.height.slice(-1),
                            autoFullWidth: "auto" === j.width && h && e.isMarginCollapseType(i.display)
                        },
                        pushFollowers: c.pushFollowers,
                        inFlow: h
                    }, !E.___origStyle) {
                    E.___origStyle = {};
                    var o = E.style,
                        p = g.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    p.forEach(function(a) {
                        E.___origStyle[a] = o[a] || ""
                    })
                }
                return F.relSize.width && e.css(m, {
                    width: j.width
                }), F.relSize.height && e.css(m, {
                    height: j.height
                }), m.appendChild(E), e.css(E, {
                    position: h ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (F.relSize.width || F.relSize.autoFullWidth) && e.css(E, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", I), window.addEventListener("resize", I), window.addEventListener("resize", J), E.addEventListener("mousewheel", K), E.addEventListener("DOMMouseScroll", K), v(3, "added pin"), G(), k
            }, this.removePin = function(a) {
                if (E) {
                    if (m === h && G(!0), a || !s) {
                        var c = F.spacer.firstChild;
                        if (c.hasAttribute(b)) {
                            var d = F.spacer.style,
                                f = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                            margins = {}, f.forEach(function(a) {
                                margins[a] = d[a] || ""
                            }), e.css(c, margins)
                        }
                        F.spacer.parentNode.insertBefore(c, F.spacer), F.spacer.parentNode.removeChild(F.spacer), E.parentNode.hasAttribute(b) || (e.css(E, E.___origStyle), delete E.___origStyle)
                    }
                    window.removeEventListener("scroll", I), window.removeEventListener("resize", I), window.removeEventListener("resize", J), E.removeEventListener("mousewheel", K), E.removeEventListener("DOMMouseScroll", K), E = void 0, v(3, "removed pin (reset: " + (a ? "true" : "false") + ")")
                }
                return k
            };
            var L, M = [];
            return k.on("destroy.internal", function(a) {
                k.removeClassToggle(a.reset)
            }), this.setClassToggle = function(a, b) {
                var c = e.get.elements(a);
                return 0 !== c.length && e.type.String(b) ? (M.length > 0 && k.removeClassToggle(), L = b, M = c, k.on("enter.internal_class leave.internal_class", function(a) {
                    var b = "enter" === a.type ? e.addClass : e.removeClass;
                    M.forEach(function(a, c) {
                        b(a, L)
                    })
                }), k) : (v(1, "ERROR calling method 'setClassToggle()': Invalid " + (0 === c.length ? "element" : "classes") + " supplied."), k)
            }, this.removeClassToggle = function(a) {
                return a && M.forEach(function(a, b) {
                    e.removeClass(a, L)
                }), k.off("start.internal_class end.internal_class"), L = void 0, M = [], k
            }, t(), k
        };
        var d = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(a) {
                    if (a = parseFloat(a), !e.type.Number(a)) throw ['Invalid value for option "offset":', a];
                    return a
                },
                triggerElement: function(a) {
                    if (a = a || void 0) {
                        var b = e.get.elements(a)[0];
                        if (!b) throw ['Element defined in option "triggerElement" was not found:', a];
                        a = b
                    }
                    return a
                },
                triggerHook: function(a) {
                    var b = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (e.type.Number(a)) a = Math.max(0, Math.min(parseFloat(a), 1));
                    else {
                        if (!(a in b)) throw ['Invalid value for option "triggerHook": ', a];
                        a = b[a]
                    }
                    return a
                },
                reverse: function(a) {
                    return !!a
                },
                loglevel: function(a) {
                    if (a = parseInt(a), !e.type.Number(a) || a < 0 || a > 3) throw ['Invalid value for option "loglevel":', a];
                    return a
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        a.Scene.addOption = function(b, c, e, f) {
            b in d.defaults ? a._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + b + "', because it already exists.") : (d.defaults[b] = c, d.validate[b] = e, f && d.shifts.push(b))
        }, a.Scene.extend = function(b) {
            var c = this;
            a.Scene = function() {
                return c.apply(this, arguments), this.$super = e.extend({}, this), b.apply(this, arguments) || this
            }, e.extend(a.Scene, c), a.Scene.prototype = c.prototype, a.Scene.prototype.constructor = a.Scene
        }, a.Event = function(a, b, c, d) {
            d = d || {};
            for (var e in d) this[e] = d[e];
            return this.type = a, this.target = this.currentTarget = c, this.namespace = b || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var e = a._util = function(a) {
            var c, b = {},
                d = function(a) {
                    return parseFloat(a) || 0
                },
                e = function(b) {
                    return b.currentStyle ? b.currentStyle : a.getComputedStyle(b)
                },
                f = function(b, c, f, g) {
                    if (c = c === document ? a : c, c === a) g = !1;
                    else if (!o.DomElement(c)) return 0;
                    b = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase();
                    var h = (f ? c["offset" + b] || c["outer" + b] : c["client" + b] || c["inner" + b]) || 0;
                    if (f && g) {
                        var i = e(c);
                        h += "Height" === b ? d(i.marginTop) + d(i.marginBottom) : d(i.marginLeft) + d(i.marginRight)
                    }
                    return h
                },
                g = function(a) {
                    return a.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(a) {
                        return a[1].toUpperCase()
                    })
                };
            b.extend = function(a) {
                for (a = a || {}, c = 1; c < arguments.length; c++)
                    if (arguments[c])
                        for (var b in arguments[c]) arguments[c].hasOwnProperty(b) && (a[b] = arguments[c][b]);
                return a
            }, b.isMarginCollapseType = function(a) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(a) > -1
            };
            var h = 0,
                i = ["ms", "moz", "webkit", "o"],
                j = a.requestAnimationFrame,
                k = a.cancelAnimationFrame;
            for (c = 0; !j && c < i.length; ++c) j = a[i[c] + "RequestAnimationFrame"], k = a[i[c] + "CancelAnimationFrame"] || a[i[c] + "CancelRequestAnimationFrame"];
            j || (j = function(b) {
                var c = (new Date).getTime(),
                    d = Math.max(0, 16 - (c - h)),
                    e = a.setTimeout(function() {
                        b(c + d)
                    }, d);
                return h = c + d, e
            }), k || (k = function(b) {
                a.clearTimeout(b)
            }), b.rAF = j.bind(a), b.cAF = k.bind(a);
            var l = ["error", "warn", "log"],
                m = a.console || {};
            for (m.log = m.log || function() {}, c = 0; c < l.length; c++) {
                var n = l[c];
                m[n] || (m[n] = m.log)
            }
            b.log = function(a) {
                (a > l.length || a <= 0) && (a = l.length);
                var b = new Date,
                    c = ("0" + b.getHours()).slice(-2) + ":" + ("0" + b.getMinutes()).slice(-2) + ":" + ("0" + b.getSeconds()).slice(-2) + ":" + ("00" + b.getMilliseconds()).slice(-3),
                    d = l[a - 1],
                    e = Array.prototype.splice.call(arguments, 1),
                    f = Function.prototype.bind.call(m[d], m);
                e.unshift(c), f.apply(m, e)
            };
            var o = b.type = function(a) {
                return Object.prototype.toString.call(a).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            o.String = function(a) {
                return "string" === o(a)
            }, o.Function = function(a) {
                return "function" === o(a)
            }, o.Array = function(a) {
                return Array.isArray(a)
            }, o.Number = function(a) {
                return !o.Array(a) && a - parseFloat(a) + 1 >= 0
            }, o.DomElement = function(a) {
                return "object" == typeof HTMLElement ? a instanceof HTMLElement : a && "object" == typeof a && null !== a && 1 === a.nodeType && "string" == typeof a.nodeName
            };
            var p = b.get = {};
            return p.elements = function(b) {
                var c = [];
                if (o.String(b)) try {
                    b = document.querySelectorAll(b)
                } catch (a) {
                    return c
                }
                if ("nodelist" === o(b) || o.Array(b))
                    for (var d = 0, e = c.length = b.length; d < e; d++) {
                        var f = b[d];
                        c[d] = o.DomElement(f) ? f : p.elements(f)
                    } else(o.DomElement(b) || b === document || b === a) && (c = [b]);
                return c
            }, p.scrollTop = function(b) {
                return b && "number" == typeof b.scrollTop ? b.scrollTop : a.pageYOffset || 0
            }, p.scrollLeft = function(b) {
                return b && "number" == typeof b.scrollLeft ? b.scrollLeft : a.pageXOffset || 0
            }, p.width = function(a, b, c) {
                return f("width", a, b, c)
            }, p.height = function(a, b, c) {
                return f("height", a, b, c)
            }, p.offset = function(a, b) {
                var c = {
                    top: 0,
                    left: 0
                };
                if (a && a.getBoundingClientRect) {
                    var d = a.getBoundingClientRect();
                    c.top = d.top, c.left = d.left, b || (c.top += p.scrollTop(), c.left += p.scrollLeft())
                }
                return c
            }, b.addClass = function(a, b) {
                b && (a.classList ? a.classList.add(b) : a.className += " " + b)
            }, b.removeClass = function(a, b) {
                b && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, b.css = function(a, b) {
                if (o.String(b)) return e(a)[g(b)];
                if (o.Array(b)) {
                    var c = {},
                        d = e(a);
                    return b.forEach(function(a, b) {
                        c[a] = d[g(a)]
                    }), c
                }
                for (var f in b) {
                    var h = b[f];
                    h == parseFloat(h) && (h += "px"), a.style[g(f)] = h
                }
            }, b
        }(window || {});
        return a.Scene.prototype.addIndicators = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, a.Scene.prototype.removeIndicators = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"), this
        }, a.Scene.prototype.setTween = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, a.Scene.prototype.removeTween = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"), this
        }, a.Scene.prototype.setVelocity = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, a.Scene.prototype.removeVelocity = function() {
            return a._util.log(1, "(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"), this
        }, a
    }),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], b) : "object" == typeof exports ? (require("gsap"), b(require("scrollmagic"), TweenMax, TimelineMax)) : b(a.ScrollMagic || a.jQuery && a.jQuery.ScrollMagic, a.TweenMax || a.TweenLite, a.TimelineMax || a.TimelineLite)
    }(this, function(a, b, c) {
        "use strict";
        var d = "animation.gsap",
            e = window.console || {},
            f = Function.prototype.bind.call(e.error || e.log || function() {}, e);
        a || f("(" + d + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), b || f("(" + d + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), a.Scene.addOption("tweenChanges", !1, function(a) {
            return !!a
        }), a.Scene.extend(function() {
            var e, a = this,
                f = function() {
                    a._log && (Array.prototype.splice.call(arguments, 1, 0, "(" + d + ")", "->"), a._log.apply(this, arguments))
                };
            a.on("progress.plugin_gsap", function() {
                g()
            }), a.on("destroy.plugin_gsap", function(b) {
                a.removeTween(b.reset)
            });
            var g = function() {
                if (e) {
                    var b = a.progress(),
                        c = a.state();
                    e.repeat && e.repeat() === -1 ? "DURING" === c && e.paused() ? e.play() : "DURING" === c || e.paused() || e.pause() : b != e.progress() && (0 === a.duration() ? b > 0 ? e.play() : e.reverse() : a.tweenChanges() && e.tweenTo ? e.tweenTo(b * e.duration()) : e.progress(b).pause())
                }
            };
            a.setTween = function(d, h, i) {
                var j;
                arguments.length > 1 && (arguments.length < 3 && (i = h, h = 1), d = b.to(d, h, i));
                try {
                    j = c ? new c({
                        smoothChildTiming: !0
                    }).add(d) : d, j.pause()
                } catch (b) {
                    return f(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), a
                }
                if (e && a.removeTween(), e = j, d.repeat && d.repeat() === -1 && (e.repeat(-1), e.yoyo(d.yoyo())), a.tweenChanges() && !e.tweenTo && f(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), e && a.controller() && a.triggerElement() && a.loglevel() >= 2) {
                    var k = b.getTweensOf(a.triggerElement()),
                        l = a.controller().info("vertical");
                    k.forEach(function(a, b) {
                        var c = a.vars.css || a.vars,
                            d = l ? void 0 !== c.top || void 0 !== c.bottom : void 0 !== c.left || void 0 !== c.right;
                        if (d) return f(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                    })
                }
                if (parseFloat(TweenLite.version) >= 1.14)
                    for (var p, q, m = e.getChildren ? e.getChildren(!0, !0, !1) : [e], n = function() {
                            f(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                        }, o = 0; o < m.length; o++) p = m[o], q !== n && (q = p.vars.onOverwrite, p.vars.onOverwrite = function() {
                        q && q.apply(this, arguments), n.apply(this, arguments)
                    });
                return f(3, "added tween"), g(), a
            }, a.removeTween = function(b) {
                return e && (b && e.progress(0).pause(), e.kill(), e = void 0, f(3, "removed tween (reset: " + (b ? "true" : "false") + ")")), a
            }
        })
    });
var scenes = [];
$j(document).ready(function() {

    $j(this).scrollTop(0);
    $j(window).scrollTop(0);
        function e() {
            var a = window,
                b = "inner";
            return "innerWidth" in window || (b = "client", a = document.documentElement || document.body), {
                width: a[b + "Width"],
                height: a[b + "Height"]
            }
        }

        function h(a) {
            var b = $j(a).html(),
                c = "";
            for (i = 0; i < b.length; i++) c += " " == b[i] ? "<span class='autoSpan'>&nbsp;</span>" : "," == b[i] ? "<span class='autoSpan'>" + b[i] + "</span><span class='break'></span>" : "<span class='autoSpan'>" + b[i] + "</span>";
            $j(a).html(c)
        }
        var a = $j("body").find("img").length,
            b = function() {
                a--, 0 == a && (loaded = !0, $j(".flip-container").hasClass("clicked") && $j(".loader").fadeOut())
            };
        $j(".loader").click(function() {
            setTimeout(function() {
                $j(".flip-container").hasClass("clicked") && loaded && $j(".loader").fadeOut(1e3)
            }, 1500)
        }), $j(".flip-container").mouseleave(function() {
            $j(".flip-container").hasClass("clicked") && loaded && $j(".loader").fadeOut(1e3);
        }), $j("body").find("img").filter(function() {
            return this.complete
        }).each(b).end().load(b);
        var c = 0;
        setInterval(function() {
            var a = parseInt($j(".scroll").css("top"));
            c <= 40 && 0 == a ? c++ : 17 == a ? $j(".scroll").css("top", "-17px") : ($j(".scroll").css("top", a + 1), c = 0)
        }, 40), setInterval(function() {
            var a = parseInt($j(".scrollLine>span").css("top"));
            50 == a ? $j(".scrollLine>span").css("top", "-50px") : $j(".scrollLine>span").css("top", a + 1)
        }, 35);
        var d = {
                entry: {
                    curviness: 1.25,
                    autoRotate: !0,
                    values: [{
                        x: 100,
                        y: -20
                    }, {
                        x: 300,
                        y: 10
                    }]
                },
                looping: {
                    curviness: 1.25,
                    autoRotate: !0,
                    values: [{
                        x: 510,
                        y: 60
                    }, {
                        x: 620,
                        y: -60
                    }, {
                        x: 500,
                        y: -100
                    }, {
                        x: 380,
                        y: 20
                    }, {
                        x: 500,
                        y: 60
                    }, {
                        x: 580,
                        y: 20
                    }, {
                        x: 620,
                        y: 15
                    }]
                },
                leave: {
                    curviness: 1.25,
                    autoRotate: !0,
                    values: [{
                        x: 660,
                        y: 20
                    }, {
                        x: 800,
                        y: 130
                    }, {
                        x: $j(window).width() + 300,
                        y: -100
                    }]
                }
            },
            f = new ScrollMagic.Controller,
            g = e().height / 2;
        h(".salutation");
        var j = $j(".salutation").children(".autoSpan");
        tl = (new TimelineMax).add(TweenMax.from($j(".arabic"), 1, {
            css: {
                opacity: 0
            }
        })).staggerFrom(j, .05, {
            opacity: 0,
            scale: 2.5
        }, .05), scenes[0] = new ScrollMagic.Scene({
            triggerElement: "#salutation"
        }).setTween(tl).addTo(f);
        var k = (new TimelineMax).add(TweenMax.from($j(".groomParents .first"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j(".groomParents .small"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".groomParents .third"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j(".andC .c"), 1, {
            css: {
                opacity: 0,
                top: "-100%"
            }
        })).add(TweenMax.from($j(".brideParents .first"), 1, {
            css: {
                opacity: 0,
                right: "-100%"
            }
        })).add(TweenMax.from($j(".brideParents .small"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".brideParents .third"), 1, {
            css: {
                opacity: 0,
                right: "-100%"
            }
        }));
        scenes[1] = new ScrollMagic.Scene({
            triggerElement: "#parents",
            duration: 500,
            offset: g
        }).setPin("#parents").setTween(k).addTo(f);
        var m = (new TimelineMax).add(TweenMax.from($j(".one"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".two"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".bride"), 1, {
            css: {
                opacity: 0,
                scale: 1.5
            }
        })).add(TweenMax.from($j(".us"), 2, {
            css: {
                right: "-100%"
            }
        })).add(TweenMax.from($j(".three"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".confetti"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".groom"), 1, {
            css: {
                opacity: 0,
                scale: 1.5
            }
        })).add(TweenMax.from($j(".date"), 1, {
            css: {
                opacity: 0
            }
        }));
        scenes[2] = new ScrollMagic.Scene({
            triggerElement: "#invitation",
            duration: 500,
            offset: g
        }).setPin("#invitation").setTween(m).addTo(f);
        var n = (new TimelineMax).add(TweenMax.from($j("#schedule .a"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#schedule .b"), 2, {
            css: {
                opacity: 0,
                left: "-100%",
                scale: 2.5
            }
        })).add(TweenMax.from($j("#schedule .c"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#schedule .d"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#schedule .e"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#schedule .f"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        }));
        scenes[3] = new ScrollMagic.Scene({
            triggerElement: "#schedule",
            duration: 500,
            offset: g
        }).setPin("#schedule").setTween(n).addTo(f);
        var zA = (new TimelineMax).add(TweenMax.from($j("#venue .a"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .b"), 2, {
            css: {
                opacity: 0,
                left: "-100%",
                scale: 2.5
            }
        })).add(TweenMax.from($j("#venue .c"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .d"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .e"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .f"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .g"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        })).add(TweenMax.from($j("#venue .h"), 1, {
            css: {
                opacity: 0,
                left: "-100%"
            }
        }));
        scenes[4] = new ScrollMagic.Scene({
            triggerElement: "#venue",
            duration: 500,
            offset: g
        }).setPin("#venue").setTween(zA).addTo(f);
        var o = (new TimelineMax).add(TweenMax.from($j(".bestWishes"), 1, {
            css: {
                opacity: 0
            }
        })).add(TweenMax.from($j(".saif"), 1.5, {
            css: {
                opacity: 0,
                scale: 2.5
            }
        })).add(TweenMax.from($j(".sohail"), 1, {
            css: {
                opacity: 0,
                scale: 2.5
            }
        })).add(TweenMax.from($j(".suhana"), 1, {
            css: {
                opacity: 0,
                scale: 2.5
            }
        })).add(TweenMax.from($j(".bhabhi"), 1, {
            css: {
                opacity: 0,
                scale: 2.5
            }
        })).add(TweenMax.from($j(".family"), 1, {
            css: {
                opacity: 0,
                scale: 2.5
            }
        }));
        for (scenes[5] = new ScrollMagic.Scene({
                triggerElement: "#wishes",
                duration: 500,
                offset: g
            }).setPin("#wishes").setTween(o).addTo(f), i = 0; i < scenes.length; i++) scenes[i].on("enter", function(a) {
            $j(".section").outerHeight(e().height), a.target.offset(e().height / 2), a.target.refresh()
        })
    }),
    function(a, b, c, d) {
        a.responsiveWeb = function(c, d) {
            function j() {
                d = i.options;
                var c = a(b).width(),
                    e = a(b).height();
                g == c && h == e || (g = c, h = e, d.applyBodyClasses && l(), d.rearrangeObjects && rearrangeObjects())
            }

            function k() {
                b.clearTimeout(e), e = b.setTimeout(j, 100)
            }

            function l() {
                d = i.options, q();
                var b = "",
                    c = p(),
                    e = c.split(" ");
                c = e[0], d.applyPlatform && (b += n()), d.applyBrowser && (b += o()), d.applyResolution && (b += p()), a("body").addClass(b), a("body").attr("data-width", c.substr(1)), d.debug && m(g + "x" + h + " || " + a("body").attr("class"))
            }

            function m(b) {
                var c = '<div class="debugDiv" style="position:absolute;top:0;right:0;padding:2px;background:black;color:lime;font-size:9px;line-height:9px;"></div>';
                a(".debugDiv ul").length ? a(".debugDiv ul").append("<li>" + b + "</li>") : (a("body").append(c), a(".debugDiv").append("<ul></ul>"), a(".debugDiv ul").append("<li>" + b + "</li>"))
            }

            function n() {
                var a = "",
                    b = navigator.userAgent;
                return b.indexOf("Windows") > 0 ? a = "windows " : b.indexOf("Linux") > 0 && b.indexOf("Android") < 0 ? a = "linux " : b.indexOf("Mac") > 0 && (b.indexOf("iphone") < 0 || b.indexOf("ipad") < 0) ? a = "mac " : b.indexOf("iPhone") > 0 ? a = "iphone " : b.indexOf("iPad") > 0 ? a = "ipad " : b.indexOf("Android") > 0 && (a = "android "), a
            }

            function o() {
                var a = "";
                d = i.options;
                var h, j, k, c = (navigator.appVersion, navigator.userAgent),
                    e = navigator.appName,
                    f = "" + parseFloat(navigator.appVersion),
                    g = parseInt(navigator.appVersion, 10);
                return (j = c.indexOf("Opera")) != -1 ? (e = "opera", f = c.substring(j + 6), (j = c.indexOf("Version")) != -1 && (f = c.substring(j + 8))) : (j = c.indexOf("MSIE")) != -1 ? (e = "msie", f = c.substring(j + 5)) : (j = c.indexOf("Chrome")) != -1 ? (e = "chrome", f = c.substring(j + 7)) : (j = c.indexOf("Safari")) != -1 ? (e = "safari", f = c.substring(j + 7), (j = c.indexOf("Version")) != -1 && (f = c.substring(j + 8))) : (j = c.indexOf("Firefox")) != -1 ? (e = "firefox", f = c.substring(j + 8)) : (h = c.lastIndexOf(" ") + 1) < (j = c.lastIndexOf("/")) && (e = c.substring(h, j), f = c.substring(j + 1), e.toLowerCase() == e.toUpperCase() && (e = navigator.appName)), (k = f.indexOf(";")) != -1 && (f = f.substring(0, k)), (k = f.indexOf(" ")) != -1 && (f = f.substring(0, k)), g = parseInt("" + f, 10), isNaN(g) && (f = "" + parseFloat(navigator.appVersion), g = parseInt(navigator.appVersion, 10)), d.applyBrowser && (a += e + " "), d.applyBrowserVersion && (a += e + g + " "), a
            }

            function p() {
                var c = a(b).height(),
                    d = a(b).width(),
                    e = "";
                return e = d >= 1880 ? "w1920 " : d >= 1560 ? "w1600 " : d >= 1400 ? "w1440 " : d >= 1240 ? "w1280 " : d >= 984 ? "w1024 " : d >= 728 ? "w768 " : d >= 440 ? "w480 " : d >= 280 ? "w320 " : "wtiny ", e += c >= 864 ? "h1024 " : c >= 740 ? "h900 " : c >= 608 ? "h768 " : c >= 440 ? "h600 " : c >= 320 ? "h480 " : "htiny "
            }

            function q() {
                a("body").removeClass("w1920 w1600 w1440 w1280 w1024 w768 w480 w320 wtiny h1024 h900 h768 h600 h480 htiny")
            }
            var e, g, h;
            this.options = {};
            var i = this;
            c.data("responsiveWeb", this), this.init = function(b, c) {
                this.options = a.extend({}, a.responsiveWeb.defaultOptions, c), c = this.options, b.resize(k), k(), c.manipulateDesign && manipulateDesign()
            }, this.init(c, d)
        }, a.fn.responsiveWeb = function(b) {
            return this.each(function() {
                new a.responsiveWeb(a(this), b)
            })
        }, a.responsiveWeb.defaultOptions = {
            applyBodyClasses: !0,
            applyResolution: !0,
            applyPlatform: !0,
            applyBrowser: !0,
            applyBrowserVersion: !0,
            manipulateDesign: !0,
            rearrangeObjects: !0,
            debug: !1
        }
    }($j, window, document), $j(document).ready(function() {
        $j(window).responsiveWeb({
            applyBodyClasses: !0,
            applyResolution: !0,
            applyPlatform: !0,
            applyBrowser: !0,
            applyBrowserVersion: !1,
            manipulateDesign: !0,
            rearrangeObjects: !0
        });
        var a = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            any: function() {
                return a.Android() || a.BlackBerry() || a.Opera() || a.Windows() || a.iOS()
            }
        };
        a.any() || $j("a[href^=tel]").click(function(a) {
            a.preventDefault()
        })
    }), $j(window).load(function() {
        rearrangeObjects()
    }), Array.min = function(a) {
        return Math.min.apply(Math, a)
    }, Array.max = function(a) {
        return Math.max.apply(Math, a)
    };

    