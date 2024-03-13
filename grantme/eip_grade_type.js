(function() {
  "use strict";
  const De = (t, i, a, l = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: i,
      event_type: a,
      event_loc: l
    }), console.log(`Event: ${t} | ${i} | ${a} | ${l}`);
  }, Er = ({ name: t, dev: i }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  function ie(t) {
    return {
      elements: typeof t == "string" ? document.querySelectorAll(t) : t instanceof Element || t instanceof HTMLElement ? [t] : t,
      on: function(l, s, u) {
        return typeof s == "function" && (u = s, s = ""), this.elements.forEach(function(x) {
          x.addEventListener(l, function(b) {
            var _;
            if (s) {
              let V = (_ = b.target) == null ? void 0 : _.closest(s);
              x.contains(V) && (u == null || u.call(V, b));
            } else
              u == null || u.call(x, b);
          });
        }), this;
      },
      addClass: function(l) {
        return this.elements.forEach(function(s) {
          s.classList.add(l);
        }), this;
      },
      removeClass: function(l) {
        return this.elements.forEach(function(s) {
          s.classList.remove(l);
        }), this;
      },
      toggleClass: function(l) {
        return this.elements.forEach(function(s) {
          s.classList.toggle(l);
        }), this;
      },
      each: function(l) {
        return this.elements.forEach((s, u) => {
          l(s, u);
        }), this;
      }
    };
  }
  const Mr = async (t) => {
    const i = (a) => new Promise((l, s) => {
      const u = a.split(".").pop();
      if (u === "js") {
        if (Array.from(document.scripts).map((_) => _.src.toLowerCase()).includes(a.toLowerCase()))
          return console.log(`Script ${a} allready downloaded!`), l("");
        const b = document.createElement("script");
        b.src = a, b.onload = l, b.onerror = s, document.head.appendChild(b);
      } else if (u === "css") {
        if (Array.from(document.styleSheets).map((_) => {
          var V;
          return (V = _.href) == null ? void 0 : V.toLowerCase();
        }).includes(a.toLowerCase()))
          return console.log(`Style ${a} allready downloaded!`), l("");
        const b = document.createElement("link");
        b.rel = "stylesheet", b.href = a, b.onload = l, b.onerror = s, document.head.appendChild(b);
      }
    });
    for (const a of t)
      console.log(a), await i(a), console.log(`Loaded librari ${a}`);
    console.log("All libraries loaded!");
  }, hi = (t, i, a, l, s = 1e3, u = 0.5) => {
    let x, b;
    if (x = new IntersectionObserver(
      function(_) {
        _[0].isIntersecting === !0 ? b = setTimeout(() => {
          De(
            i,
            _[0].target.dataset.visible || l || "",
            "view",
            a
          ), x.disconnect();
        }, s) : (console.log("Element is not fully visible"), clearTimeout(b));
      },
      { threshold: [u] }
    ), typeof t == "string") {
      const _ = document.querySelector(t);
      _ && x.observe(_);
    } else
      x.observe(t);
  }, Sr = (t) => {
    const i = document.querySelector(t);
    if (!i)
      return;
    const l = i.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: l,
      behavior: "smooth"
    });
  }, Lr = (t, i) => {
    const a = t === window ? window : document.querySelector(t);
    let l, s, u, x;
    function b() {
      l = null, x = 0;
    }
    b(), a.addEventListener("scroll", function() {
      s = t === window ? this.scrollY : this.scrollTop, l != null && (x = s - l), l = s, clearTimeout(u), u = setTimeout(b, 50), i(Math.abs(x));
    });
  };
  var Ut = window, Ne = Ut.requestAnimationFrame || Ut.webkitRequestAnimationFrame || Ut.mozRequestAnimationFrame || Ut.msRequestAnimationFrame || function(t) {
    return setTimeout(t, 16);
  }, gi = window, Ln = gi.cancelAnimationFrame || gi.mozCancelAnimationFrame || function(t) {
    clearTimeout(t);
  };
  function An() {
    for (var t, i, a, l = arguments[0] || {}, s = 1, u = arguments.length; s < u; s++)
      if ((t = arguments[s]) !== null)
        for (i in t)
          a = t[i], l !== a && a !== void 0 && (l[i] = a);
    return l;
  }
  function be(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
  }
  function we(t, i, a, l) {
    if (l)
      try {
        t.setItem(i, a);
      } catch {
      }
    return a;
  }
  function Ar() {
    var t = window.tnsId;
    return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId;
  }
  function Kt() {
    var t = document, i = t.body;
    return i || (i = t.createElement("body"), i.fake = !0), i;
  }
  var wt = document.documentElement;
  function Zt(t) {
    var i = "";
    return t.fake && (i = wt.style.overflow, t.style.background = "", t.style.overflow = wt.style.overflow = "hidden", wt.appendChild(t)), i;
  }
  function Qt(t, i) {
    t.fake && (t.remove(), wt.style.overflow = i, wt.offsetHeight);
  }
  function zr() {
    var t = document, i = Kt(), a = Zt(i), l = t.createElement("div"), s = !1;
    i.appendChild(l);
    try {
      for (var u = "(10px * 10)", x = ["calc" + u, "-moz-calc" + u, "-webkit-calc" + u], b, _ = 0; _ < 3; _++)
        if (b = x[_], l.style.width = b, l.offsetWidth === 100) {
          s = b.replace(u, "");
          break;
        }
    } catch {
    }
    return i.fake ? Qt(i, a) : l.remove(), s;
  }
  function Or() {
    var t = document, i = Kt(), a = Zt(i), l = t.createElement("div"), s = t.createElement("div"), u = "", x = 70, b = 3, _ = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var V = 0; V < x; V++)
      u += "<div></div>";
    return s.innerHTML = u, l.appendChild(s), i.appendChild(l), _ = Math.abs(l.getBoundingClientRect().left - s.children[x - b].getBoundingClientRect().left) < 2, i.fake ? Qt(i, a) : l.remove(), _;
  }
  function Dr() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var t = document, i = Kt(), a = Zt(i), l = t.createElement("div"), s = t.createElement("style"), u = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", x;
    return s.type = "text/css", l.className = "tns-mq-test", i.appendChild(s), i.appendChild(l), s.styleSheet ? s.styleSheet.cssText = u : s.appendChild(t.createTextNode(u)), x = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, i.fake ? Qt(i, a) : l.remove(), x === "absolute";
  }
  function Nr(t, i) {
    var a = document.createElement("style");
    return t && a.setAttribute("media", t), i && a.setAttribute("nonce", i), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function Le(t, i, a, l) {
    "insertRule" in t ? t.insertRule(i + "{" + a + "}", l) : t.addRule(i, a, l);
  }
  function Rr(t, i) {
    "deleteRule" in t ? t.deleteRule(i) : t.removeRule(i);
  }
  function _e(t) {
    var i = "insertRule" in t ? t.cssRules : t.rules;
    return i.length;
  }
  function $r(t, i) {
    return Math.atan2(t, i) * (180 / Math.PI);
  }
  function Pr(t, i) {
    var a = !1, l = Math.abs(90 - Math.abs(t));
    return l >= 90 - i ? a = "horizontal" : l <= i && (a = "vertical"), a;
  }
  function Re(t, i, a) {
    for (var l = 0, s = t.length; l < s; l++)
      i.call(a, t[l], l);
  }
  var zn = "classList" in document.createElement("_"), st = zn ? function(t, i) {
    return t.classList.contains(i);
  } : function(t, i) {
    return t.className.indexOf(i) >= 0;
  }, P = zn ? function(t, i) {
    st(t, i) || t.classList.add(i);
  } : function(t, i) {
    st(t, i) || (t.className += " " + i);
  }, re = zn ? function(t, i) {
    st(t, i) && t.classList.remove(i);
  } : function(t, i) {
    st(t, i) && (t.className = t.className.replace(i, ""));
  };
  function xt(t, i) {
    return t.hasAttribute(i);
  }
  function Bt(t, i) {
    return t.getAttribute(i);
  }
  function vi(t) {
    return typeof t.item < "u";
  }
  function fe(t, i) {
    if (t = vi(t) || t instanceof Array ? t : [t], Object.prototype.toString.call(i) === "[object Object]")
      for (var a = t.length; a--; )
        for (var l in i)
          t[a].setAttribute(l, i[l]);
  }
  function $e(t, i) {
    t = vi(t) || t instanceof Array ? t : [t], i = i instanceof Array ? i : [i];
    for (var a = i.length, l = t.length; l--; )
      for (var s = a; s--; )
        t[l].removeAttribute(i[s]);
  }
  function mi(t) {
    for (var i = [], a = 0, l = t.length; a < l; a++)
      i.push(t[a]);
    return i;
  }
  function ue(t, i) {
    t.style.display !== "none" && (t.style.display = "none");
  }
  function ce(t, i) {
    t.style.display === "none" && (t.style.display = "");
  }
  function yi(t) {
    return window.getComputedStyle(t).display !== "none";
  }
  function _t(t) {
    if (typeof t == "string") {
      var i = [t], a = t.charAt(0).toUpperCase() + t.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(b) {
        (b !== "ms" || t === "transform") && i.push(b + a);
      }), t = i;
    }
    var s = document.createElement("fakeelement");
    t.length;
    for (var u = 0; u < t.length; u++) {
      var x = t[u];
      if (s.style[x] !== void 0)
        return x;
    }
    return !1;
  }
  function Wr(t) {
    if (!t || !window.getComputedStyle)
      return !1;
    var i = document, a = Kt(), l = Zt(a), s = i.createElement("p"), u, x = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
    return x += "transform", a.insertBefore(s, null), s.style[t] = "translate3d(1px,1px,1px)", u = window.getComputedStyle(s).getPropertyValue(x), a.fake ? Qt(a, l) : s.remove(), u !== void 0 && u.length > 0 && u !== "none";
  }
  function bi(t, i) {
    var a = !1;
    return /^Webkit/.test(t) ? a = "webkit" + i + "End" : /^O/.test(t) ? a = "o" + i + "End" : t && (a = i.toLowerCase() + "end"), a;
  }
  var wi = !1;
  try {
    var Hr = Object.defineProperty({}, "passive", {
      get: function() {
        wi = !0;
      }
    });
    window.addEventListener("test", null, Hr);
  } catch {
  }
  var xi = wi ? { passive: !0 } : !1;
  function $(t, i, a) {
    for (var l in i) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !a ? xi : !1;
      t.addEventListener(l, i[l], s);
    }
  }
  function q(t, i) {
    for (var a in i) {
      var l = ["touchstart", "touchmove"].indexOf(a) >= 0 ? xi : !1;
      t.removeEventListener(a, i[a], l);
    }
  }
  function Fr() {
    return {
      topics: {},
      on: function(t, i) {
        this.topics[t] = this.topics[t] || [], this.topics[t].push(i);
      },
      off: function(t, i) {
        if (this.topics[t]) {
          for (var a = 0; a < this.topics[t].length; a++)
            if (this.topics[t][a] === i) {
              this.topics[t].splice(a, 1);
              break;
            }
        }
      },
      emit: function(t, i) {
        i.type = t, this.topics[t] && this.topics[t].forEach(function(a) {
          a(i, t);
        });
      }
    };
  }
  function Yr(t, i, a, l, V, u, x) {
    var b = Math.min(u, 10), _ = V.indexOf("%") >= 0 ? "%" : "px", V = V.replace(_, ""), I = Number(t.style[i].replace(a, "").replace(l, "").replace(_, "")), X = (V - I) / u * b;
    setTimeout(Ae, b);
    function Ae() {
      u -= b, I += X, t.style[i] = a + I + _ + l, u > 0 ? setTimeout(Ae, b) : x();
    }
  }
  Object.keys || (Object.keys = function(t) {
    var i = [];
    for (var a in t)
      Object.prototype.hasOwnProperty.call(t, a) && i.push(a);
    return i;
  }), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this);
  });
  var _i = function(t) {
    t = An({
      container: ".slider",
      mode: "carousel",
      axis: "horizontal",
      items: 1,
      gutter: 0,
      edgePadding: 0,
      fixedWidth: !1,
      autoWidth: !1,
      viewportMax: !1,
      slideBy: 1,
      center: !1,
      controls: !0,
      controlsPosition: "top",
      controlsText: ["prev", "next"],
      controlsContainer: !1,
      prevButton: !1,
      nextButton: !1,
      nav: !0,
      navPosition: "top",
      navContainer: !1,
      navAsThumbnails: !1,
      arrowKeys: !1,
      speed: 300,
      autoplay: !1,
      autoplayPosition: "top",
      autoplayTimeout: 5e3,
      autoplayDirection: "forward",
      autoplayText: ["start", "stop"],
      autoplayHoverPause: !1,
      autoplayButton: !1,
      autoplayButtonOutput: !0,
      autoplayResetOnVisibility: !0,
      animateIn: "tns-fadeIn",
      animateOut: "tns-fadeOut",
      animateNormal: "tns-normal",
      animateDelay: !1,
      loop: !0,
      rewind: !1,
      autoHeight: !1,
      responsive: !1,
      lazyload: !1,
      lazyloadSelector: ".tns-lazy-img",
      touch: !0,
      mouseDrag: !1,
      swipeAngle: 15,
      nested: !1,
      preventActionWhenRunning: !1,
      preventScrollOnTouch: !1,
      freezable: !0,
      onInit: !1,
      useLocalStorage: !0,
      nonce: !1
    }, t || {});
    var i = document, a = window, l = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, s = {}, u = t.useLocalStorage;
    if (u) {
      var x = navigator.userAgent, b = /* @__PURE__ */ new Date();
      try {
        s = a.localStorage, s ? (s.setItem(b, b), u = s.getItem(b) == b, s.removeItem(b)) : u = !1, u || (s = {});
      } catch {
        u = !1;
      }
      u && (s.tnsApp && s.tnsApp !== x && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
        s.removeItem(e);
      }), localStorage.tnsApp = x);
    }
    var _ = s.tC ? be(s.tC) : we(s, "tC", zr(), u), V = s.tPL ? be(s.tPL) : we(s, "tPL", Or(), u), I = s.tMQ ? be(s.tMQ) : we(s, "tMQ", Dr(), u), X = s.tTf ? be(s.tTf) : we(s, "tTf", _t("transform"), u), Ae = s.t3D ? be(s.t3D) : we(s, "t3D", Wr(X), u), L = s.tTDu ? be(s.tTDu) : we(s, "tTDu", _t("transitionDuration"), u), Qe = s.tTDe ? be(s.tTDe) : we(s, "tTDe", _t("transitionDelay"), u), Be = s.tADu ? be(s.tADu) : we(s, "tADu", _t("animationDuration"), u), lt = s.tADe ? be(s.tADe) : we(s, "tADe", _t("animationDelay"), u), Xe = s.tTE ? be(s.tTE) : we(s, "tTE", bi(L, "Transition"), u), Ti = s.tAE ? be(s.tAE) : we(s, "tAE", bi(Be, "Animation"), u), Ci = a.console && typeof a.console.warn == "function", On = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ei = {};
    if (On.forEach(function(e) {
      if (typeof t[e] == "string") {
        var n = t[e], r = i.querySelector(n);
        if (Ei[e] = n, r && r.nodeName)
          t[e] = r;
        else {
          Ci && console.warn("Can't find", t[e]);
          return;
        }
      }
    }), t.container.children.length < 1) {
      Ci && console.warn("No slides found in", t.container);
      return;
    }
    var O = t.responsive, ft = t.nested, d = t.mode === "carousel";
    if (O) {
      0 in O && (t = An(t, O[0]), delete O[0]);
      var Dn = {};
      for (var Mi in O) {
        var kt = O[Mi];
        kt = typeof kt == "number" ? { items: kt } : kt, Dn[Mi] = kt;
      }
      O = Dn, Dn = null;
    }
    function Si(e) {
      for (var n in e)
        d || (n === "slideBy" && (e[n] = "page"), n === "edgePadding" && (e[n] = !1), n === "autoHeight" && (e[n] = !1)), n === "responsive" && Si(e[n]);
    }
    if (d || Si(t), !d) {
      t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
      var Pe = t.animateIn, Jt = t.animateOut, Nn = t.animateDelay, ke = t.animateNormal;
    }
    var M = t.axis === "horizontal", te = i.createElement("div"), ne = i.createElement("div"), oe, g = t.container, Rn = g.parentNode, Li = g.outerHTML, C = g.children, v = C.length, Tt, en = Yi(), Ct = !1;
    O && Ji(), d && (g.className += " tns-vpfix");
    var y = t.autoWidth, p = m("fixedWidth"), N = m("edgePadding"), k = m("gutter"), Y = ji(), U = m("center"), w = y ? 1 : Math.floor(m("items")), ut = m("slideBy"), $n = t.viewportMax || t.fixedWidthViewportWidth, We = m("arrowKeys"), ge = m("speed"), Et = t.rewind, K = Et ? !1 : t.loop, ae = m("autoHeight"), Te = m("controls"), He = m("controlsText"), Ce = m("nav"), Fe = m("touch"), Ye = m("mouseDrag"), J = m("autoplay"), Pn = m("autoplayTimeout"), Ge = m("autoplayText"), je = m("autoplayHoverPause"), qe = m("autoplayResetOnVisibility"), S = Nr(null, m("nonce")), Mt = t.lazyload, Kr = t.lazyloadSelector, W, ct = [], Z = K ? Xr() : 0, E = d ? v + Z * 2 : v + Z, Ai = !!((p || y) && !K), dt = p ? ni() : null, Wn = !d || !K, Je = M ? "left" : "top", Ve = "", pt = "", St = /* @__PURE__ */ function() {
      return p ? function() {
        return U && !K ? v - 1 : Math.ceil(-dt / (p + k));
      } : y ? function() {
        for (var e = 0; e < E; e++)
          if (W[e] >= -dt)
            return e;
      } : function() {
        return U && d && !K ? v - 1 : K || d ? Math.max(0, E - Math.ceil(w)) : E - 1;
      };
    }(), f = Hi(m("startIndex")), Ie = f;
    Wi();
    var Ee = 0, de = y ? null : St(), tn = t.preventActionWhenRunning, nn = t.swipeAngle, Me = nn ? "?" : !0, Ue = !1, Hn = t.onInit, G = new Fr(), Ke = " tns-slider tns-" + t.mode, D = g.id || Ar(), se = m("disable"), Lt = !1, rn = t.freezable, ve = rn && !y ? Zn() : !1, At = !1, zt = {
      click: Ze,
      keydown: xo
    }, Fn = {
      click: ho,
      keydown: _o
    }, Ot = {
      mouseover: yo,
      mouseout: bo
    }, Dt = { visibilitychange: mo }, Nt = { keydown: wo }, Rt = {
      touchstart: xr,
      touchmove: _r,
      touchend: Sn,
      touchcancel: Sn
    }, $t = {
      mousedown: xr,
      mousemove: _r,
      mouseup: Sn,
      mouseleave: Sn
    }, on = ze("controls"), Yn = ze("nav"), Pt = y ? !0 : t.navAsThumbnails, Gn = ze("autoplay"), zi = ze("touch"), Oi = ze("mouseDrag"), jn = "tns-slide-active", Di = "tns-slide-cloned", an = "tns-complete", sn = {
      load: oo,
      error: ao
    }, qn, Vn, Wt = t.preventScrollOnTouch === "force";
    if (on)
      var H = t.controlsContainer, Ni = t.controlsContainer ? t.controlsContainer.outerHTML : "", A = t.prevButton, z = t.nextButton, Zr = t.prevButton ? t.prevButton.outerHTML : "", Qr = t.nextButton ? t.nextButton.outerHTML : "", Ht, Ft;
    if (Yn)
      var Q = t.navContainer, Ri = t.navContainer ? t.navContainer.outerHTML : "", pe, me = y ? v : Tr(), et = 0, tt = -1, he = Fi(), ht = he, ln = "tns-nav-active", gt = "Carousel Page ", In = " (Current Slide)";
    if (Gn)
      var $i = t.autoplayDirection === "forward" ? 1 : -1, R = t.autoplayButton, Pi = t.autoplayButton ? t.autoplayButton.outerHTML : "", Yt = ["<span class='tns-visually-hidden'>", " animation</span>"], fn, le, un, vt, cn;
    if (zi || Oi)
      var nt = {}, xe = {}, dn, it = !1, ye, Un = M ? function(e, n) {
        return e.x - n.x;
      } : function(e, n) {
        return e.y - n.y;
      };
    y || pn(se || ve), X && (Je = X, Ve = "translate", Ae ? (Ve += M ? "3d(" : "3d(0px, ", pt = M ? ", 0px, 0px)" : ", 0px)") : (Ve += M ? "X(" : "Y(", pt = ")")), d && (g.className = g.className.replace("tns-vpfix", "")), eo(), to(), Ii();
    function pn(e) {
      e && (Te = Ce = Fe = Ye = We = J = je = qe = !1);
    }
    function Wi() {
      for (var e = d ? f - Z : f; e < 0; )
        e += v;
      return e % v + 1;
    }
    function Hi(e) {
      return e = e ? Math.max(0, Math.min(K ? v - 1 : v - w, e)) : 0, d ? e + Z : e;
    }
    function hn(e) {
      for (e == null && (e = f), d && (e -= Z); e < 0; )
        e += v;
      return Math.floor(e % v);
    }
    function Fi() {
      var e = hn(), n;
      return n = Pt ? e : p || y ? Math.ceil((e + 1) * me / v - 1) : Math.floor(e / w), !K && d && f === de && (n = me - 1), n;
    }
    function Br() {
      if (y || p && !$n)
        return v - 1;
      var e = p ? "fixedWidth" : "items", n = [];
      if ((p || t[e] < v) && n.push(t[e]), O)
        for (var r in O) {
          var o = O[r][e];
          o && (p || o < v) && n.push(o);
        }
      return n.length || n.push(0), Math.ceil(p ? $n / Math.min.apply(null, n) : Math.max.apply(null, n));
    }
    function Xr() {
      var e = Br(), n = d ? Math.ceil((e * 5 - v) / 2) : e * 4 - v;
      return n = Math.max(e, n), ze("edgePadding") ? n + 1 : n;
    }
    function Yi() {
      return a.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function Kn(e) {
      return e === "top" ? "afterbegin" : "beforeend";
    }
    function Gi(e) {
      if (e != null) {
        var n = i.createElement("div"), r, o;
        return e.appendChild(n), r = n.getBoundingClientRect(), o = r.right - r.left, n.remove(), o || Gi(e.parentNode);
      }
    }
    function ji() {
      var e = N ? N * 2 - k : 0;
      return Gi(Rn) - e;
    }
    function ze(e) {
      if (t[e])
        return !0;
      if (O) {
        for (var n in O)
          if (O[n][e])
            return !0;
      }
      return !1;
    }
    function m(e, n) {
      if (n == null && (n = en), e === "items" && p)
        return Math.floor((Y + k) / (p + k)) || 1;
      var r = t[e];
      if (O)
        for (var o in O)
          n >= parseInt(o) && e in O[o] && (r = O[o][e]);
      return e === "slideBy" && r === "page" && (r = m("items")), !d && (e === "slideBy" || e === "items") && (r = Math.floor(r)), r;
    }
    function Jr(e) {
      return _ ? _ + "(" + e * 100 + "% / " + E + ")" : e * 100 / E + "%";
    }
    function gn(e, n, r, o, c) {
      var h = "";
      if (e !== void 0) {
        var T = e;
        n && (T -= n), h = M ? "margin: 0 " + T + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + T + "px 0;";
      } else if (n && !r) {
        var j = "-" + n + "px", B = M ? j + " 0 0" : "0 " + j + " 0";
        h = "margin: 0 " + B + ";";
      }
      return !d && c && L && o && (h += rt(o)), h;
    }
    function vn(e, n, r) {
      return e ? (e + n) * E + "px" : _ ? _ + "(" + E * 100 + "% / " + r + ")" : E * 100 / r + "%";
    }
    function mn(e, n, r) {
      var o;
      if (e)
        o = e + n + "px";
      else {
        d || (r = Math.floor(r));
        var c = d ? E : r;
        o = _ ? _ + "(100% / " + c + ")" : 100 / c + "%";
      }
      return o = "width:" + o, ft !== "inner" ? o + ";" : o + " !important;";
    }
    function yn(e) {
      var n = "";
      if (e !== !1) {
        var r = M ? "padding-" : "margin-", o = M ? "right" : "bottom";
        n = r + o + ": " + e + "px;";
      }
      return n;
    }
    function qi(e, n) {
      var r = e.substring(0, e.length - n).toLowerCase();
      return r && (r = "-" + r + "-"), r;
    }
    function rt(e) {
      return qi(L, 18) + "transition-duration:" + e / 1e3 + "s;";
    }
    function Vi(e) {
      return qi(Be, 17) + "animation-duration:" + e / 1e3 + "s;";
    }
    function eo() {
      var e = "tns-outer", n = "tns-inner";
      if (ze("gutter"), te.className = e, ne.className = n, te.id = D + "-ow", ne.id = D + "-iw", g.id === "" && (g.id = D), Ke += V || y ? " tns-subpixel" : " tns-no-subpixel", Ke += _ ? " tns-calc" : " tns-no-calc", y && (Ke += " tns-autowidth"), Ke += " tns-" + t.axis, g.className += Ke, d ? (oe = i.createElement("div"), oe.id = D + "-mw", oe.className = "tns-ovh", te.appendChild(oe), oe.appendChild(ne)) : te.appendChild(ne), ae) {
        var r = oe || ne;
        r.className += " tns-ah";
      }
      if (Rn.insertBefore(te, g), ne.appendChild(g), Re(C, function(F, yt) {
        P(F, "tns-item"), F.id || (F.id = D + "-item" + yt), !d && ke && P(F, ke), fe(F, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), Z) {
        for (var o = i.createDocumentFragment(), c = i.createDocumentFragment(), h = Z; h--; ) {
          var T = h % v, j = C[T].cloneNode(!0);
          if (P(j, Di), $e(j, "id"), c.insertBefore(j, c.firstChild), d) {
            var B = C[v - 1 - T].cloneNode(!0);
            P(B, Di), $e(B, "id"), o.appendChild(B);
          }
        }
        g.insertBefore(o, g.firstChild), g.appendChild(c), C = g.children;
      }
    }
    function Ii() {
      if (ze("autoHeight") || y || !M) {
        var e = g.querySelectorAll("img");
        Re(e, function(n) {
          var r = n.src;
          Mt || (r && r.indexOf("data:image") < 0 ? (n.src = "", $(n, sn), P(n, "loading"), n.src = r) : or(n));
        }), Ne(function() {
          xn(mi(e), function() {
            qn = !0;
          });
        }), ze("autoHeight") && (e = ei(f, Math.min(f + w - 1, E - 1))), Mt ? Ui() : Ne(function() {
          xn(mi(e), Ui);
        });
      } else
        d && jt(), Zi(), Qi();
    }
    function Ui() {
      if (y && v > 1) {
        var e = K ? f : v - 1;
        (function n() {
          var r = C[e].getBoundingClientRect().left, o = C[e - 1].getBoundingClientRect().right;
          Math.abs(r - o) <= 1 ? Ki() : setTimeout(function() {
            n();
          }, 16);
        })();
      } else
        Ki();
    }
    function Ki() {
      (!M || y) && (fr(), y ? (dt = ni(), rn && (ve = Zn()), de = St(), pn(se || ve)) : oi()), d && jt(), Zi(), Qi();
    }
    function to() {
      if (!d)
        for (var e = f, n = f + Math.min(v, w); e < n; e++) {
          var r = C[e];
          r.style.left = (e - f) * 100 / w + "%", P(r, Pe), re(r, ke);
        }
      if (M && (V || y ? (Le(S, "#" + D + " > .tns-item", "font-size:" + a.getComputedStyle(C[0]).fontSize + ";", _e(S)), Le(S, "#" + D, "font-size:0;", _e(S))) : d && Re(C, function(fi, ui) {
        fi.style.marginLeft = Jr(ui);
      })), I) {
        if (L) {
          var o = oe && t.autoHeight ? rt(t.speed) : "";
          Le(S, "#" + D + "-mw", o, _e(S));
        }
        o = gn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), Le(S, "#" + D + "-iw", o, _e(S)), d && (o = M && !y ? "width:" + vn(t.fixedWidth, t.gutter, t.items) + ";" : "", L && (o += rt(ge)), Le(S, "#" + D, o, _e(S))), o = M && !y ? mn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (o += yn(t.gutter)), d || (L && (o += rt(ge)), Be && (o += Vi(ge))), o && Le(S, "#" + D + " > .tns-item", o, _e(S));
      } else {
        lo(), ne.style.cssText = gn(N, k, p, ae), d && M && !y && (g.style.width = vn(p, k, w));
        var o = M && !y ? mn(p, k, w) : "";
        k && (o += yn(k)), o && Le(S, "#" + D + " > .tns-item", o, _e(S));
      }
      if (O && I)
        for (var c in O) {
          c = parseInt(c);
          var h = O[c], o = "", T = "", j = "", B = "", F = "", yt = y ? null : m("items", c), It = m("fixedWidth", c), at = m("speed", c), si = m("edgePadding", c), li = m("autoHeight", c), bt = m("gutter", c);
          L && oe && m("autoHeight", c) && "speed" in h && (T = "#" + D + "-mw{" + rt(at) + "}"), ("edgePadding" in h || "gutter" in h) && (j = "#" + D + "-iw{" + gn(si, bt, It, at, li) + "}"), d && M && !y && ("fixedWidth" in h || "items" in h || p && "gutter" in h) && (B = "width:" + vn(It, bt, yt) + ";"), L && "speed" in h && (B += rt(at)), B && (B = "#" + D + "{" + B + "}"), ("fixedWidth" in h || p && "gutter" in h || !d && "items" in h) && (F += mn(It, bt, yt)), "gutter" in h && (F += yn(bt)), !d && "speed" in h && (L && (F += rt(at)), Be && (F += Vi(at))), F && (F = "#" + D + " > .tns-item{" + F + "}"), o = T + j + B + F, o && S.insertRule("@media (min-width: " + c / 16 + "em) {" + o + "}", S.cssRules.length);
        }
    }
    function Zi() {
      if (ti(), te.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + rr() + "</span>  of " + v + "</div>"), Vn = te.querySelector(".tns-liveregion .current"), Gn) {
        var e = J ? "stop" : "start";
        R ? fe(R, { "data-action": e }) : t.autoplayButtonOutput && (te.insertAdjacentHTML(Kn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Yt[0] + e + Yt[1] + Ge[0] + "</button>"), R = te.querySelector("[data-action]")), R && $(R, { click: mr }), J && (Mn(), je && $(g, Ot), qe && $(g, Dt));
      }
      if (Yn) {
        if (Q)
          fe(Q, { "aria-label": "Carousel Pagination" }), pe = Q.children, Re(pe, function(T, j) {
            fe(T, {
              "data-nav": j,
              tabindex: "-1",
              "aria-label": gt + (j + 1),
              "aria-controls": D
            });
          });
        else {
          for (var n = "", r = Pt ? "" : 'style="display:none"', o = 0; o < v; o++)
            n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + D + '" ' + r + ' aria-label="' + gt + (o + 1) + '"></button>';
          n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", te.insertAdjacentHTML(Kn(t.navPosition), n), Q = te.querySelector(".tns-nav"), pe = Q.children;
        }
        if (ai(), L) {
          var c = L.substring(0, L.length - 18).toLowerCase(), h = "transition: all " + ge / 1e3 + "s";
          c && (h = "-" + c + "-" + h), Le(S, "[aria-controls^=" + D + "-item]", h, _e(S));
        }
        fe(pe[he], { "aria-label": gt + (he + 1) + In }), $e(pe[he], "tabindex"), P(pe[he], ln), $(Q, Fn);
      }
      on && (!H && (!A || !z) && (te.insertAdjacentHTML(Kn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + D + '">' + He[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + D + '">' + He[1] + "</button></div>"), H = te.querySelector(".tns-controls")), (!A || !z) && (A = H.children[0], z = H.children[1]), t.controlsContainer && fe(H, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (t.controlsContainer || t.prevButton && t.nextButton) && fe([A, z], {
        "aria-controls": D,
        tabindex: "-1"
      }), (t.controlsContainer || t.prevButton && t.nextButton) && (fe(A, { "data-controls": "prev" }), fe(z, { "data-controls": "next" })), Ht = cr(A), Ft = cr(z), pr(), H ? $(H, zt) : ($(A, zt), $(z, zt))), Bn();
    }
    function Qi() {
      if (d && Xe) {
        var e = {};
        e[Xe] = Se, $(g, e);
      }
      Fe && $(g, Rt, t.preventScrollOnTouch), Ye && $(g, $t), We && $(i, Nt), ft === "inner" ? G.on("outerResized", function() {
        Xi(), G.emit("innerLoaded", ee());
      }) : (O || p || y || ae || !M) && $(a, { resize: Bi }), ae && (ft === "outer" ? G.on("innerLoaded", wn) : se || wn()), Xn(), se ? nr() : ve && tr(), G.on("indexChanged", ar), ft === "inner" && G.emit("innerLoaded", ee()), typeof Hn == "function" && Hn(ee()), Ct = !0;
    }
    function no() {
      if (S.disabled = !0, S.ownerNode && S.ownerNode.remove(), q(a, { resize: Bi }), We && q(i, Nt), H && q(H, zt), Q && q(Q, Fn), q(g, Ot), q(g, Dt), R && q(R, { click: mr }), J && clearInterval(fn), d && Xe) {
        var e = {};
        e[Xe] = Se, q(g, e);
      }
      Fe && q(g, Rt), Ye && q(g, $t);
      var n = [Li, Ni, Zr, Qr, Ri, Pi];
      On.forEach(function(o, c) {
        var h = o === "container" ? te : t[o];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, j = h.parentNode;
          h.outerHTML = n[c], t[o] = T ? T.nextElementSibling : j.firstElementChild;
        }
      }), On = Pe = Jt = Nn = ke = M = te = ne = g = Rn = Li = C = v = Tt = en = y = p = N = k = Y = w = ut = $n = We = ge = Et = K = ae = S = Mt = W = ct = Z = E = Ai = dt = Wn = Je = Ve = pt = St = f = Ie = Ee = de = nn = Me = Ue = Hn = G = Ke = D = se = Lt = rn = ve = At = zt = Fn = Ot = Dt = Nt = Rt = $t = on = Yn = Pt = Gn = zi = Oi = jn = an = sn = qn = Te = He = H = Ni = A = z = Ht = Ft = Ce = Q = Ri = pe = me = et = tt = he = ht = ln = gt = In = J = Pn = $i = Ge = je = R = Pi = qe = Yt = fn = le = un = vt = cn = nt = xe = dn = it = ye = Un = Fe = Ye = null;
      for (var r in this)
        r !== "rebuild" && (this[r] = null);
      Ct = !1;
    }
    function Bi(e) {
      Ne(function() {
        Xi(Oe(e));
      });
    }
    function Xi(e) {
      if (Ct) {
        ft === "outer" && G.emit("outerResized", ee(e)), en = Yi();
        var n, r = Tt, o = !1;
        O && (Ji(), n = r !== Tt, n && G.emit("newBreakpointStart", ee(e)));
        var c, h, T = w, j = se, B = ve, F = We, yt = Te, It = Ce, at = Fe, si = Ye, li = J, bt = je, fi = qe, ui = f;
        if (n) {
          var ko = p, To = ae, Co = He, Eo = U, ci = Ge;
          if (!I)
            var Mo = k, So = N;
        }
        if (We = m("arrowKeys"), Te = m("controls"), Ce = m("nav"), Fe = m("touch"), U = m("center"), Ye = m("mouseDrag"), J = m("autoplay"), je = m("autoplayHoverPause"), qe = m("autoplayResetOnVisibility"), n && (se = m("disable"), p = m("fixedWidth"), ge = m("speed"), ae = m("autoHeight"), He = m("controlsText"), Ge = m("autoplayText"), Pn = m("autoplayTimeout"), I || (N = m("edgePadding"), k = m("gutter"))), pn(se), Y = ji(), (!M || y) && !se && (fr(), M || (oi(), o = !0)), (p || y) && (dt = ni(), de = St()), (n || p) && (w = m("items"), ut = m("slideBy"), h = w !== T, h && (!p && !y && (de = St()), Qn())), n && se !== j && (se ? nr() : ro()), rn && (n || p || y) && (ve = Zn(), ve !== B && (ve ? (ii(Tn(Hi(0))), tr()) : (io(), o = !0))), pn(se || ve), J || (je = qe = !1), We !== F && (We ? $(i, Nt) : q(i, Nt)), Te !== yt && (Te ? H ? ce(H) : (A && ce(A), z && ce(z)) : H ? ue(H) : (A && ue(A), z && ue(z))), Ce !== It && (Ce ? (ce(Q), ai()) : ue(Q)), Fe !== at && (Fe ? $(g, Rt, t.preventScrollOnTouch) : q(g, Rt)), Ye !== si && (Ye ? $(g, $t) : q(g, $t)), J !== li && (J ? (R && ce(R), !le && !vt && Mn()) : (R && ue(R), le && Vt())), je !== bt && (je ? $(g, Ot) : q(g, Ot)), qe !== fi && (qe ? $(i, Dt) : q(i, Dt)), n) {
          if ((p !== ko || U !== Eo) && (o = !0), ae !== To && (ae || (ne.style.height = "")), Te && He !== Co && (A.innerHTML = He[0], z.innerHTML = He[1]), R && Ge !== ci) {
            var di = J ? 1 : 0, pi = R.innerHTML, Cr = pi.length - ci[di].length;
            pi.substring(Cr) === ci[di] && (R.innerHTML = pi.substring(0, Cr) + Ge[di]);
          }
        } else
          U && (p || y) && (o = !0);
        if ((h || p && !y) && (me = Tr(), ai()), c = f !== ui, c ? (G.emit("indexChanged", ee()), o = !0) : h ? c || ar() : (p || y) && (Xn(), ti(), ir()), h && !d && fo(), !se && !ve) {
          if (n && !I && ((N !== So || k !== Mo) && (ne.style.cssText = gn(N, k, p, ge, ae)), M)) {
            d && (g.style.width = vn(p, k, w));
            var Lo = mn(p, k, w) + yn(k);
            Rr(S, _e(S) - 1), Le(S, "#" + D + " > .tns-item", Lo, _e(S));
          }
          ae && wn(), o && (jt(), Ie = f);
        }
        n && G.emit("newBreakpointEnd", ee(e));
      }
    }
    function Zn() {
      if (!p && !y) {
        var e = U ? w - (w - 1) / 2 : w;
        return v <= e;
      }
      var n = p ? (p + k) * v : W[v], r = N ? Y + N * 2 : Y + k;
      return U && (r -= p ? (Y - p) / 2 : (Y - (W[f + 1] - W[f] - k)) / 2), n <= r;
    }
    function Ji() {
      Tt = 0;
      for (var e in O)
        e = parseInt(e), en >= e && (Tt = e);
    }
    var Qn = /* @__PURE__ */ function() {
      return K ? d ? (
        // loop + carousel
        function() {
          var e = Ee, n = de;
          e += ut, n -= ut, N ? (e += 1, n -= 1) : p && (Y + k) % (p + k) && (n -= 1), Z && (f > n ? f -= v : f < e && (f += v));
        }
      ) : (
        // loop + gallery
        function() {
          if (f > de)
            for (; f >= Ee + v; )
              f -= v;
          else if (f < Ee)
            for (; f <= de - v; )
              f += v;
        }
      ) : (
        // non-loop
        function() {
          f = Math.max(Ee, Math.min(de, f));
        }
      );
    }();
    function Bn() {
      !J && R && ue(R), !Ce && Q && ue(Q), Te || (H ? ue(H) : (A && ue(A), z && ue(z)));
    }
    function er() {
      J && R && ce(R), Ce && Q && ce(Q), Te && (H ? ce(H) : (A && ce(A), z && ce(z)));
    }
    function tr() {
      if (!At) {
        if (N && (ne.style.margin = "0px"), Z)
          for (var e = "tns-transparent", n = Z; n--; )
            d && P(C[n], e), P(C[E - n - 1], e);
        Bn(), At = !0;
      }
    }
    function io() {
      if (At) {
        if (N && I && (ne.style.margin = ""), Z)
          for (var e = "tns-transparent", n = Z; n--; )
            d && re(C[n], e), re(C[E - n - 1], e);
        er(), At = !1;
      }
    }
    function nr() {
      if (!Lt) {
        if (S.disabled = !0, g.className = g.className.replace(Ke.substring(1), ""), $e(g, ["style"]), K)
          for (var e = Z; e--; )
            d && ue(C[e]), ue(C[E - e - 1]);
        if ((!M || !d) && $e(ne, ["style"]), !d)
          for (var n = f, r = f + v; n < r; n++) {
            var o = C[n];
            $e(o, ["style"]), re(o, Pe), re(o, ke);
          }
        Bn(), Lt = !0;
      }
    }
    function ro() {
      if (Lt) {
        if (S.disabled = !1, g.className += Ke, jt(), K)
          for (var e = Z; e--; )
            d && ce(C[e]), ce(C[E - e - 1]);
        if (!d)
          for (var n = f, r = f + v; n < r; n++) {
            var o = C[n], c = n < f + w ? Pe : ke;
            o.style.left = (n - f) * 100 / w + "%", P(o, c);
          }
        er(), Lt = !1;
      }
    }
    function ir() {
      var e = rr();
      Vn.innerHTML !== e && (Vn.innerHTML = e);
    }
    function rr() {
      var e = bn(), n = e[0] + 1, r = e[1] + 1;
      return n === r ? n + "" : n + " to " + r;
    }
    function bn(e) {
      e == null && (e = Tn());
      var n = f, r, o, c;
      if (U || N ? (y || p) && (o = -(parseFloat(e) + N), c = o + Y + N * 2) : y && (o = W[f], c = o + Y), y)
        W.forEach(function(B, F) {
          F < E && ((U || N) && B <= o + 0.5 && (n = F), c - B >= 0.5 && (r = F));
        });
      else {
        if (p) {
          var h = p + k;
          U || N ? (n = Math.floor(o / h), r = Math.ceil(c / h - 1)) : r = n + Math.ceil(Y / h) - 1;
        } else if (U || N) {
          var T = w - 1;
          if (U ? (n -= T / 2, r = f + T / 2) : r = f + T, N) {
            var j = N * w / Y;
            n -= j, r += j;
          }
          n = Math.floor(n), r = Math.ceil(r);
        } else
          r = n + w - 1;
        n = Math.max(n, 0), r = Math.min(r, E - 1);
      }
      return [n, r];
    }
    function Xn() {
      if (Mt && !se) {
        var e = bn();
        e.push(Kr), ei.apply(null, e).forEach(function(n) {
          if (!st(n, an)) {
            var r = {};
            r[Xe] = function(c) {
              c.stopPropagation();
            }, $(n, r), $(n, sn), n.src = Bt(n, "data-src");
            var o = Bt(n, "data-srcset");
            o && (n.srcset = o), P(n, "loading");
          }
        });
      }
    }
    function oo(e) {
      or(mt(e));
    }
    function ao(e) {
      so(mt(e));
    }
    function or(e) {
      P(e, "loaded"), Jn(e);
    }
    function so(e) {
      P(e, "failed"), Jn(e);
    }
    function Jn(e) {
      P(e, an), re(e, "loading"), q(e, sn);
    }
    function ei(e, n, r) {
      var o = [];
      for (r || (r = "img"); e <= n; )
        Re(C[e].querySelectorAll(r), function(c) {
          o.push(c);
        }), e++;
      return o;
    }
    function wn() {
      var e = ei.apply(null, bn());
      Ne(function() {
        xn(e, lr);
      });
    }
    function xn(e, n) {
      if (qn || (e.forEach(function(r, o) {
        !Mt && r.complete && Jn(r), st(r, an) && e.splice(o, 1);
      }), !e.length))
        return n();
      Ne(function() {
        xn(e, n);
      });
    }
    function ar() {
      Xn(), ti(), ir(), pr(), uo();
    }
    function lo() {
      d && ae && (oe.style[L] = ge / 1e3 + "s");
    }
    function sr(e, n) {
      for (var r = [], o = e, c = Math.min(e + n, E); o < c; o++)
        r.push(C[o].offsetHeight);
      return Math.max.apply(null, r);
    }
    function lr() {
      var e = ae ? sr(f, w) : sr(Z, v), n = oe || ne;
      n.style.height !== e && (n.style.height = e + "px");
    }
    function fr() {
      W = [0];
      var e = M ? "left" : "top", n = M ? "right" : "bottom", r = C[0].getBoundingClientRect()[e];
      Re(C, function(o, c) {
        c && W.push(o.getBoundingClientRect()[e] - r), c === E - 1 && W.push(o.getBoundingClientRect()[n] - r);
      });
    }
    function ti() {
      var e = bn(), n = e[0], r = e[1];
      Re(C, function(o, c) {
        c >= n && c <= r ? xt(o, "aria-hidden") && ($e(o, ["aria-hidden", "tabindex"]), P(o, jn)) : xt(o, "aria-hidden") || (fe(o, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), re(o, jn));
      });
    }
    function fo() {
      for (var e = f + Math.min(v, w), n = E; n--; ) {
        var r = C[n];
        n >= f && n < e ? (P(r, "tns-moving"), r.style.left = (n - f) * 100 / w + "%", P(r, Pe), re(r, ke)) : r.style.left && (r.style.left = "", P(r, ke), re(r, Pe)), re(r, Jt);
      }
      setTimeout(function() {
        Re(C, function(o) {
          re(o, "tns-moving");
        });
      }, 300);
    }
    function uo() {
      if (Ce && (he = tt >= 0 ? tt : Fi(), tt = -1, he !== ht)) {
        var e = pe[ht], n = pe[he];
        fe(e, {
          tabindex: "-1",
          "aria-label": gt + (ht + 1)
        }), re(e, ln), fe(n, { "aria-label": gt + (he + 1) + In }), $e(n, "tabindex"), P(n, ln), ht = he;
      }
    }
    function ur(e) {
      return e.nodeName.toLowerCase();
    }
    function cr(e) {
      return ur(e) === "button";
    }
    function dr(e) {
      return e.getAttribute("aria-disabled") === "true";
    }
    function _n(e, n, r) {
      e ? n.disabled = r : n.setAttribute("aria-disabled", r.toString());
    }
    function pr() {
      if (!(!Te || Et || K)) {
        var e = Ht ? A.disabled : dr(A), n = Ft ? z.disabled : dr(z), r = f <= Ee, o = !Et && f >= de;
        r && !e && _n(Ht, A, !0), !r && e && _n(Ht, A, !1), o && !n && _n(Ft, z, !0), !o && n && _n(Ft, z, !1);
      }
    }
    function kn(e, n) {
      L && (e.style[L] = n);
    }
    function co() {
      return p ? (p + k) * E : W[E];
    }
    function Gt(e) {
      e == null && (e = f);
      var n = N ? k : 0;
      return y ? (Y - n - (W[e + 1] - W[e] - k)) / 2 : p ? (Y - p) / 2 : (w - 1) / 2;
    }
    function ni() {
      var e = N ? k : 0, n = Y + e - co();
      return U && !K && (n = p ? -(p + k) * (E - 1) - Gt() : Gt(E - 1) - W[E - 1]), n > 0 && (n = 0), n;
    }
    function Tn(e) {
      e == null && (e = f);
      var n;
      if (M && !y)
        if (p)
          n = -(p + k) * e, U && (n += Gt());
        else {
          var r = X ? E : w;
          U && (e -= Gt()), n = -e * 100 / r;
        }
      else
        n = -W[e], U && y && (n += Gt());
      return Ai && (n = Math.max(n, dt)), n += M && !y && !p ? "%" : "px", n;
    }
    function jt(e) {
      kn(g, "0s"), ii(e);
    }
    function ii(e) {
      e == null && (e = Tn()), g.style[Je] = Ve + e + pt;
    }
    function hr(e, n, r, o) {
      var c = e + w;
      K || (c = Math.min(c, E));
      for (var h = e; h < c; h++) {
        var T = C[h];
        o || (T.style.left = (h - f) * 100 / w + "%"), Nn && Qe && (T.style[Qe] = T.style[lt] = Nn * (h - e) / 1e3 + "s"), re(T, n), P(T, r), o && ct.push(T);
      }
    }
    var po = /* @__PURE__ */ function() {
      return d ? function() {
        kn(g, ""), L || !ge ? (ii(), (!ge || !yi(g)) && Se()) : Yr(g, Je, Ve, pt, Tn(), ge, Se), M || oi();
      } : function() {
        ct = [];
        var e = {};
        e[Xe] = e[Ti] = Se, q(C[Ie], e), $(C[f], e), hr(Ie, Pe, Jt, !0), hr(f, ke, Pe), (!Xe || !Ti || !ge || !yi(g)) && Se();
      };
    }();
    function ri(e, n) {
      Wn && Qn(), (f !== Ie || n) && (G.emit("indexChanged", ee()), G.emit("transitionStart", ee()), ae && wn(), le && e && ["click", "keydown"].indexOf(e.type) >= 0 && Vt(), Ue = !0, po());
    }
    function gr(e) {
      return e.toLowerCase().replace(/-/g, "");
    }
    function Se(e) {
      if (d || Ue) {
        if (G.emit("transitionEnd", ee(e)), !d && ct.length > 0)
          for (var n = 0; n < ct.length; n++) {
            var r = ct[n];
            r.style.left = "", lt && Qe && (r.style[lt] = "", r.style[Qe] = ""), re(r, Jt), P(r, ke);
          }
        if (!e || !d && e.target.parentNode === g || e.target === g && gr(e.propertyName) === gr(Je)) {
          if (!Wn) {
            var o = f;
            Qn(), f !== o && (G.emit("indexChanged", ee()), jt());
          }
          ft === "inner" && G.emit("innerLoaded", ee()), Ue = !1, Ie = f;
        }
      }
    }
    function qt(e, n) {
      if (!ve)
        if (e === "prev")
          Ze(n, -1);
        else if (e === "next")
          Ze(n, 1);
        else {
          if (Ue) {
            if (tn)
              return;
            Se();
          }
          var r = hn(), o = 0;
          if (e === "first" ? o = -r : e === "last" ? o = d ? v - w - r : v - 1 - r : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (n || (e = Math.max(0, Math.min(v - 1, e))), o = e - r)), !d && o && Math.abs(o) < w) {
            var c = o > 0 ? 1 : -1;
            o += f + o - v >= Ee ? v * c : v * 2 * c * -1;
          }
          f += o, d && K && (f < Ee && (f += v), f > de && (f -= v)), hn(f) !== hn(Ie) && ri(n);
        }
    }
    function Ze(e, n) {
      if (Ue) {
        if (tn)
          return;
        Se();
      }
      var r;
      if (!n) {
        e = Oe(e);
        for (var o = mt(e); o !== H && [A, z].indexOf(o) < 0; )
          o = o.parentNode;
        var c = [A, z].indexOf(o);
        c >= 0 && (r = !0, n = c === 0 ? -1 : 1);
      }
      if (Et) {
        if (f === Ee && n === -1) {
          qt("last", e);
          return;
        } else if (f === de && n === 1) {
          qt("first", e);
          return;
        }
      }
      n && (f += ut * n, y && (f = Math.floor(f)), ri(r || e && e.type === "keydown" ? e : null));
    }
    function ho(e) {
      if (Ue) {
        if (tn)
          return;
        Se();
      }
      e = Oe(e);
      for (var n = mt(e), r; n !== Q && !xt(n, "data-nav"); )
        n = n.parentNode;
      if (xt(n, "data-nav")) {
        var r = tt = Number(Bt(n, "data-nav")), o = p || y ? r * v / me : r * w, c = Pt ? r : Math.min(Math.ceil(o), v - 1);
        qt(c, e), he === r && (le && Vt(), tt = -1);
      }
    }
    function Cn() {
      fn = setInterval(function() {
        Ze(null, $i);
      }, Pn), le = !0;
    }
    function En() {
      clearInterval(fn), le = !1;
    }
    function vr(e, n) {
      fe(R, { "data-action": e }), R.innerHTML = Yt[0] + e + Yt[1] + n;
    }
    function Mn() {
      Cn(), R && vr("stop", Ge[1]);
    }
    function Vt() {
      En(), R && vr("start", Ge[0]);
    }
    function go() {
      J && !le && (Mn(), vt = !1);
    }
    function vo() {
      le && (Vt(), vt = !0);
    }
    function mr() {
      le ? (Vt(), vt = !0) : (Mn(), vt = !1);
    }
    function mo() {
      i.hidden ? le && (En(), cn = !0) : cn && (Cn(), cn = !1);
    }
    function yo() {
      le && (En(), un = !0);
    }
    function bo() {
      un && (Cn(), un = !1);
    }
    function wo(e) {
      e = Oe(e);
      var n = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
      n >= 0 && Ze(e, n === 0 ? -1 : 1);
    }
    function xo(e) {
      e = Oe(e);
      var n = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
      n >= 0 && (n === 0 ? A.disabled || Ze(e, -1) : z.disabled || Ze(e, 1));
    }
    function yr(e) {
      e.focus();
    }
    function _o(e) {
      e = Oe(e);
      var n = i.activeElement;
      if (xt(n, "data-nav")) {
        var r = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(e.keyCode), o = Number(Bt(n, "data-nav"));
        r >= 0 && (r === 0 ? o > 0 && yr(pe[o - 1]) : r === 1 ? o < me - 1 && yr(pe[o + 1]) : (tt = o, qt(o, e)));
      }
    }
    function Oe(e) {
      return e = e || a.event, ot(e) ? e.changedTouches[0] : e;
    }
    function mt(e) {
      return e.target || a.event.srcElement;
    }
    function ot(e) {
      return e.type.indexOf("touch") >= 0;
    }
    function br(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }
    function wr() {
      return Pr($r(xe.y - nt.y, xe.x - nt.x), nn) === t.axis;
    }
    function xr(e) {
      if (Ue) {
        if (tn)
          return;
        Se();
      }
      J && le && En(), it = !0, ye && (Ln(ye), ye = null);
      var n = Oe(e);
      G.emit(ot(e) ? "touchStart" : "dragStart", ee(e)), !ot(e) && ["img", "a"].indexOf(ur(mt(e))) >= 0 && br(e), xe.x = nt.x = n.clientX, xe.y = nt.y = n.clientY, d && (dn = parseFloat(g.style[Je].replace(Ve, "")), kn(g, "0s"));
    }
    function _r(e) {
      if (it) {
        var n = Oe(e);
        xe.x = n.clientX, xe.y = n.clientY, d ? ye || (ye = Ne(function() {
          kr(e);
        })) : (Me === "?" && (Me = wr()), Me && (Wt = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Wt && e.preventDefault();
      }
    }
    function kr(e) {
      if (!Me) {
        it = !1;
        return;
      }
      if (Ln(ye), it && (ye = Ne(function() {
        kr(e);
      })), Me === "?" && (Me = wr()), Me) {
        !Wt && ot(e) && (Wt = !0);
        try {
          e.type && G.emit(ot(e) ? "touchMove" : "dragMove", ee(e));
        } catch {
        }
        var n = dn, r = Un(xe, nt);
        if (!M || p || y)
          n += r, n += "px";
        else {
          var o = X ? r * w * 100 / ((Y + k) * E) : r * 100 / (Y + k);
          n += o, n += "%";
        }
        g.style[Je] = Ve + n + pt;
      }
    }
    function Sn(e) {
      if (it) {
        ye && (Ln(ye), ye = null), d && kn(g, ""), it = !1;
        var n = Oe(e);
        xe.x = n.clientX, xe.y = n.clientY;
        var r = Un(xe, nt);
        if (Math.abs(r)) {
          if (!ot(e)) {
            var o = mt(e);
            $(o, { click: function c(h) {
              br(h), q(o, { click: c });
            } });
          }
          d ? ye = Ne(function() {
            if (M && !y) {
              var c = -r * w / (Y + k);
              c = r > 0 ? Math.floor(c) : Math.ceil(c), f += c;
            } else {
              var h = -(dn + r);
              if (h <= 0)
                f = Ee;
              else if (h >= W[E - 1])
                f = de;
              else
                for (var T = 0; T < E && h >= W[T]; )
                  f = T, h > W[T] && r < 0 && (f += 1), T++;
            }
            ri(e, r), G.emit(ot(e) ? "touchEnd" : "dragEnd", ee(e));
          }) : Me && Ze(e, r > 0 ? -1 : 1);
        }
      }
      t.preventScrollOnTouch === "auto" && (Wt = !1), nn && (Me = "?"), J && !le && Cn();
    }
    function oi() {
      var e = oe || ne;
      e.style.height = W[f + w] - W[f] + "px";
    }
    function Tr() {
      var e = p ? (p + k) * v / Y : v / w;
      return Math.min(Math.ceil(e), v);
    }
    function ai() {
      if (!(!Ce || Pt) && me !== et) {
        var e = et, n = me, r = ce;
        for (et > me && (e = me, n = et, r = ue); e < n; )
          r(pe[e]), e++;
        et = me;
      }
    }
    function ee(e) {
      return {
        container: g,
        slideItems: C,
        navContainer: Q,
        navItems: pe,
        controlsContainer: H,
        hasControls: on,
        prevButton: A,
        nextButton: z,
        items: w,
        slideBy: ut,
        cloneCount: Z,
        slideCount: v,
        slideCountNew: E,
        index: f,
        indexCached: Ie,
        displayIndex: Wi(),
        navCurrentIndex: he,
        navCurrentIndexCached: ht,
        pages: me,
        pagesCached: et,
        sheet: S,
        isOn: Ct,
        event: e || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: ee,
      events: G,
      goTo: qt,
      play: go,
      pause: vo,
      isOn: Ct,
      updateSliderHeight: lr,
      refresh: Ii,
      destroy: no,
      rebuild: function() {
        return _i(An(t, Ei));
      }
    };
  };
  const Gr = `.crs_popup_wrapper {\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100dvh;\r
  z-index: 9999;\r
  background: rgba(60, 60, 60, 0.4);\r
  backdrop-filter: blur(38px);\r
  display: none;\r
  justify-content: center;\r
  align-items: start;\r
  padding: 62px 16px;\r
  overflow-y: auto;\r
}\r
.crs_popup_wrapper.show {\r
  display: flex !important;\r
}\r
.popup_root {\r
  background: #fff;\r
  border-radius: 10px;\r
  display: flex;\r
  position: relative;\r
  max-width: 760px;\r
}\r
.popup_root .popup_close {\r
  position: absolute;\r
  width: 30px;\r
  height: 30px;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  top: -37px;\r
  right: 0;\r
  cursor: pointer;\r
}\r
.slider_desktop {\r
  width: 320px;\r
  display: flex;\r
  flex-direction: column;\r
  justify-content: center;\r
  align-items: center;\r
  padding: 40px;\r
  background: url(https://grantme.ca/wp-content/uploads/2022/01/landing-hero-image.jpg) center bottom no-repeat;\r
  background-size: cover;\r
  border-radius: 0 10px 10px 0;\r
}\r
.slider_desktop h3 {\r
  font-family: 'Bitter', serif;\r
  font-weight: 700;\r
  font-size: 22px;\r
  line-height: 1.3;\r
  margin-bottom: 20px;\r
  color: #fff;\r
  text-align: center;\r
}\r
.slider_desktop .thumbs {\r
  display: flex;\r
  margin-bottom: 12px;\r
  justify-content: center;\r
  align-items: center;\r
  gap: 14px;\r
  padding: 0;\r
}\r
.slider_desktop .thumbs li {\r
  width: 24px;\r
  height: 24px;\r
  border-radius: 50%;\r
  overflow: hidden;\r
  border: 2px solid rgba(255, 255, 255, 0.3);\r
  cursor: pointer;\r
}\r
.slider_desktop .thumbs li.tns-nav-active {\r
  border-color: #fff;\r
}\r
.slider_desktop .thumbs li img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: cover;\r
}\r
.slider_desktop .slider_stories,\r
.slider_desktop .tns-outer {\r
  width: 100%;\r
}\r
.slider_desktop .slider_stories .slide {\r
  padding: 0 3px;\r
}\r
.slider_desktop .slider_stories .slide .inner {\r
  padding: 14px 18px;\r
  background-color: #fff;\r
  border-radius: 12px;\r
  flex-shrink: 0;\r
}\r
.slider_desktop .slider_stories .slide .flx {\r
  display: flex;\r
  gap: 12px;\r
  align-items: center;\r
  margin-bottom: 12px;\r
}\r
.slider_desktop .slider_stories .slide .flx > * {\r
  flex-shrink: 0;\r
}\r
.slider_desktop .slider_stories .slide .flx .img {\r
  height: 70px;\r
  width: 70px;\r
}\r
.slider_desktop .slider_stories .slide .flx .img img {\r
  width: 100%;\r
  height: 100%;\r
  object-fit: contain;\r
}\r
.slider_desktop .slider_stories .slide .flx .name {\r
  font-family: 'Bitter', serif;\r
  font-weight: 600;\r
  font-size: 14px;\r
  line-height: 1.4;\r
  color: #2b3e51;\r
}\r
.slider_desktop .slider_stories .slide .flx .university {\r
  font-size: 12px;\r
  line-height: 1.5;\r
  color: #3e78ba;\r
}\r
.slider_desktop .slider_stories .slide .flx p {\r
  margin: 0;\r
}\r
.slider_desktop .slider_stories .slide .flx .received {\r
  font-size: 12px;\r
  line-height: 1.5;\r
  color: #2b3e51;\r
}\r
.slider_desktop .slider_stories .slide .description {\r
  font-size: 14px;\r
  line-height: 1.5;\r
}\r
.slider_desktop .tns-outer [data-action] {\r
  display: none;\r
}\r
.popup_content {\r
  padding: 24px;\r
}\r
.popup_content h2 {\r
  font-size: 25px;\r
  font-family: 'Bitter', serif;\r
  font-weight: 700;\r
  line-height: 1.3;\r
  margin-bottom: 8px;\r
  color: #2b3e51;\r
}\r
.popup_content h2 + p {\r
  color: #676767;\r
  font-size: 16px;\r
  line-height: 1.5;\r
}\r
.popup_content .points {\r
  margin: 16px 0;\r
  border-radius: 6px;\r
  border: 1.5px solid #1f72da;\r
  padding: 16px;\r
}\r
.popup_content .points > p {\r
  padding-bottom: 16px;\r
  border-bottom: 1px solid #ccc;\r
  display: flex;\r
  gap: 12px;\r
  color: #2b3e51;\r
  align-items: center;\r
  font-size: 18px;\r
  line-height: 1.3;\r
  font-family: 'Bitter', serif;\r
  font-weight: 700;\r
}\r
.popup_content .points > p svg {\r
  width: 48px;\r
  height: 48px;\r
}\r
.popup_content .points ul {\r
  margin: 16px 0 0;\r
  display: flex;\r
  flex-direction: column;\r
  gap: 16px;\r
  padding: 0;\r
}\r
.popup_content .points ul li {\r
  display: flex;\r
  gap: 10px;\r
  align-items: start;\r
}\r
.popup_content .points ul li svg {\r
  flex-shrink: 0;\r
}\r
.popup_content .points ul li.more {\r
  margin-top: -8px;\r
  padding-left: 30px;\r
}\r
.popup_content .points ul li p {\r
  margin: 0;\r
  font-size: 14px;\r
  line-height: 1.5;\r
  color: #676767;\r
}\r
.popup_content .points ul li p b {\r
  color: #2b3e51;\r
}\r
.popup_content .note {\r
  display: flex;\r
  gap: 10px;\r
}\r
.popup_content .note p {\r
  margin: 0;\r
  font-size: 14px;\r
  line-height: 1.5;\r
  color: #2b3e51;\r
}\r
.popup_content .note svg {\r
  flex-shrink: 0;\r
}\r
.popup_content .main {\r
  font-size: 20px;\r
  line-height: 1;\r
  padding: 11px;\r
  border-radius: 6px;\r
  background: #ebbd45;\r
  color: #2b3e51;\r
  text-transform: capitalize;\r
  border: none;\r
  cursor: pointer;\r
  margin-top: 16px;\r
  width: 100%;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.popup_content button.secondary {\r
  display: flex;\r
  margin: 16px auto 0;\r
  font-size: 14px;\r
  line-height: 1.5;\r
  text-transform: uppercase;\r
  color: #2b3e51;\r
  text-decoration: underline;\r
  border: none;\r
  background: transparent;\r
  cursor: pointer;\r
  padding: 0;\r
}\r
.popup_content .back {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 1px;\r
  margin-bottom: 16px;\r
  font-size: 12px;\r
  line-height: 1.75;\r
  color: #2b3e51;\r
  cursor: pointer;\r
  padding: 0 9px 0 4px;\r
  border-radius: 36px;\r
  background: #e9f3fa;\r
}\r
.popup_content .satisfaction {\r
  border-radius: 6px;\r
  border: 1.5px dashed var(--primary-yellow, #ebbd45);\r
  background: rgba(235, 189, 69, 0.1);\r
  margin: 16px 0;\r
  padding: 14px;\r
  text-align: center;\r
}\r
.popup_content .satisfaction h4 {\r
  font-size: 16px;\r
  line-height: 1.4;\r
  color: #2b3e51;\r
  margin-bottom: 4px;\r
  text-transform: uppercase;\r
  font-weight: 700;\r
}\r
.popup_content .satisfaction h4 + p {\r
  color: #676767;\r
  font-size: 14px;\r
  line-height: 1.5;\r
  margin-bottom: 10px;\r
}\r
.popup_content .satisfaction .guarenteed {\r
  padding: 4px 60px;\r
  gap: 4px;\r
  display: inline-flex;\r
  justify-content: center;\r
  align-items: center;\r
  background: linear-gradient(292deg, #1f72da 13.92%, #a25bb6 43.93%, #e6ad19 72.11%);\r
  color: #fff;\r
  font-family: 'Bitter', serif;\r
  text-transform: uppercase;\r
  font-weight: 600;\r
  letter-spacing: 0.98px;\r
  font-size: 14px;\r
  position: relative;\r
  margin: 0;\r
}\r
.popup4 ul > li:last-of-type p {\r
  text-transform: uppercase;\r
}\r
\r
.popup_main {\r
  display: none;\r
\r
  &.active {\r
    display: block;\r
  }\r
\r
  & h3 {\r
    color: #2b3e51;\r
    font-size: 25px;\r
    font-weight: 700;\r
    line-height: 32px;\r
    margin: 0 0 8px;\r
\r
    & + p {\r
      color: #676767;\r
      font-size: 16px;\r
      font-weight: 400;\r
      line-height: 24px;\r
      margin-bottom: 20px;\r
    }\r
  }\r
\r
  & > div {\r
    border-radius: 6px;\r
    border: 2px dashed #ebbd45;\r
    background: rgba(235, 189, 69, 0.1);\r
    padding: 20px;\r
    text-align: center;\r
\r
    & img {\r
      height: 45px;\r
      margin-bottom: 16px;\r
    }\r
\r
    & p {\r
      color: #2b3e51;\r
      text-align: center;\r
      font-size: 16px;\r
      font-weight: 500;\r
      line-height: 24px;\r
      padding-top: 16px;\r
      border-top: 2px dashed #ebbd45;\r
    }\r
\r
    & + p {\r
      color: #2b3e51;\r
      text-align: center;\r
      font-family: 'Bitter', serif;\r
      font-size: 16px;\r
      font-weight: 600;\r
      line-height: 22px;\r
      margin: 20px 0;\r
    }\r
  }\r
}\r
\r
@media (max-width: 768px) {\r
  .crs_popup_wrapper {\r
    background: rgba(43, 62, 81, 0.75);\r
    backdrop-filter: unset;\r
    align-items: flex-start;\r
  }\r
  .popup_root {\r
    width: 100%;\r
  }\r
  .slider_desktop {\r
    display: none;\r
  }\r
\r
  .popup_main {\r
    & h3 + p {\r
      margin-bottom: 16px;\r
    }\r
\r
    & > div img {\r
      height: 33px;\r
    }\r
\r
    & > div + p {\r
      margin: 16px 0;\r
    }\r
  }\r
}\r
`, jr = "https://conversionratestore.github.io/projects/grantme", Xt = {
    close: (
      /*html*/
      `
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path d="M6.60303 23.3972L23.3968 6.60343" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M23.3968 23.3966L6.60303 6.60278" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  `
    ),
    back: (
      /*html*/
      `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path d="M8.75007 12.12L4.60986 7.50003L8.75007 2.88" stroke="#2B3E51" stroke-width="1.5" stroke-miterlimit="16" stroke-linecap="round"/>
  </svg>
  `
    ),
    mail: (
      /*html*/
      `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.45562 1.3393L6.85875 6.74477C8.03719 7.92094 9.96352 7.92195 11.1429 6.74477L16.5461 1.3393C16.6005 1.28488 16.5925 1.19527 16.5294 1.15125C15.9783 0.766914 15.3078 0.539062 14.5855 0.539062H3.41617C2.69387 0.539062 2.02336 0.766953 1.47227 1.15125C1.40914 1.19527 1.40121 1.28488 1.45562 1.3393ZM0.0117188 3.94348C0.0117188 3.37551 0.152539 2.83887 0.400586 2.36719C0.439375 2.2934 0.537695 2.27848 0.596641 2.33742L5.93137 7.67215C7.6207 9.36395 10.38 9.36492 12.0704 7.67215L17.4051 2.33742C17.464 2.27848 17.5623 2.2934 17.6011 2.36719C17.8491 2.83887 17.99 3.37555 17.99 3.94348V11.0504C17.99 12.929 16.4618 14.4548 14.5855 14.4548H3.41617C1.53992 14.4548 0.0117188 12.929 0.0117188 11.0504V3.94348Z" fill="#CCCCCC"/>
  </svg>`
    ),
    phone: (
      /*html*/
      `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <g clip-path="url(#clip0_2559_10251)">
  <path d="M19.4561 15.178L16.6651 12.3869C15.6683 11.3901 13.9737 11.7889 13.575 13.0847C13.2759 13.9819 12.2791 14.4803 11.382 14.2809C9.38839 13.7825 6.69701 11.1908 6.1986 9.09746C5.89956 8.2003 6.49765 7.20349 7.39477 6.90448C8.69062 6.50576 9.08934 4.81119 8.09254 3.81438L5.30148 1.02332C4.50403 0.325559 3.30786 0.325559 2.6101 1.02332L0.716166 2.91726C-1.17777 4.91087 0.915528 10.1939 5.60052 14.8789C10.2855 19.5639 15.5686 21.7569 17.5622 19.7633L19.4561 17.8694C20.1539 17.0719 20.1539 15.8757 19.4561 15.178Z" fill="#CCCCCC"/>
  </g>
  <defs>
  <clipPath id="clip0_2559_10251">
  <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
  </clipPath>
  </defs>
  </svg>`
    )
  }, ki = [
    {
      name: "Salwa",
      university: "UBC",
      received: "$75,000",
      description: "I have realized financially that I do have the ability to control my future. I can take responsibility for my finances",
      img: "https://grantme.ca/wp-content/uploads/2023/02/Frame-1362.png",
      thumb: "https://grantme.ca/wp-content/uploads/2020/03/Salwa-Nimir.png"
    },
    {
      name: "Leyton",
      university: "University of Alberta",
      received: "$140,500",
      description: "After enrolling, I no longer had to worry about my next steps. GrantMe's team was always there to guide me.",
      img: "https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-1.png",
      thumb: "https://grantme.ca/wp-content/uploads/2022/09/Leyton-4.jpeg"
    },
    {
      name: "Ashleigh",
      university: "Queen’s University",
      received: "$30,000",
      description: "Everything that I could possibly be worrying about with university and saving money ... have been answered ... it’s been tons of fun!",
      img: "https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-2.png",
      thumb: "https://grantme.ca/wp-content/uploads/2020/03/Ashleigh-W..png"
    },
    {
      name: "Lauren",
      university: "Western University",
      received: "$65,000",
      description: "GrantMe did not just improve my writing abilities and applications but also equipped me with the skills to be a successful student",
      img: "https://grantme.ca/wp-content/uploads/2023/02/Frame-1362-3.png",
      thumb: "https://grantme.ca/wp-content/uploads/2022/09/Lauren-5-1.jpg"
    }
  ], qr = {
    student: {
      grade10: {
        h3: "Avoid Academic Regret",
        p1: "Feeling unsure about your future? Without guidance, you could miss out on education that leads to the career of your dreams. ",
        p2: "GrantMe helps you navigate complex academic processes, so you can claim a better future. Best suited for students in grade 9-10.",
        p3: "Start your journey with a personalized consultation.",
        btn: "Book Your Consultation Now"
      },
      grade11: {
        h3: "Map Your Path to University!",
        p1: "Overwhelmed by university choices and scholarship options? Without help, you might miss out on the best opportunities.",
        p2: "GrantMe provides essential information and support. Best suited for students in grade 11.",
        p3: "Begin with a personalized consultation.",
        btn: "Book Your Consultation"
      },
      grade12: {
        h3: "Step Towards Your Dream University!",
        p1: "Close to university but unsure about scholarships and applications? Without support, key opportunities could slip away.",
        p2: "GrantMe helps you win scholarships and get into top schools.",
        p3: "Your first step is a consultation.",
        btn: "Book My Consultation Now"
      },
      gapYear: {
        h3: "Get the Most From Your Gap Year!",
        p1: "Taking a gap year but unsure how to plan for the future? Without direction, time can slip away.",
        p2: "GrantMe helps you utilize this time effectively for future success.",
        p3: "Start with a consultation to map out your path.",
        btn: "Schedule My Consultation"
      },
      university: {
        h3: "Enhance Your University Experience!",
        p1: "Navigating your first year and feeling overwhelmed? Missing out on support can affect your university success.",
        p2: "GrantMe helps with scholarships and skill development.",
        p3: "Start with a consultation to stay ahead.",
        btn: "Book Your Consultation"
      }
    },
    parent: {
      grade10: {
        h3: "Guide Your Child Towards Success!",
        p1: "Worried about your child's future? Without proper support, they might struggle in planning for university.",
        p2: "The first step is a consultation with our experts. Best suited for students in grade 9-10.",
        p3: "The first step is a consultation with our experts.",
        btn: "Schedule a Call Today"
      },
      grade11: {
        h3: "Improve Your Child Odds At College Admissions!",
        p1: "Concerned about your child's university decisions? Lack of guidance can lead to uncertain choices.",
        p2: "GrantMe offers expert advice to navigate these crucial decisions. Best suited for students in grade 11.",
        p3: "Start with a consultation to explore how we can help.",
        btn: "Schedule Your Consultation"
      },
      grade12: {
        h3: "Give Your Child a Brighter Future!",
        p1: "As university approaches, ensure your child doesn't miss out on scholarships and top university spots.",
        p2: "GrantMe provides the guidance they need.",
        p3: "It all starts with a consultation.",
        btn: "Book a Consultation Today"
      },
      gapYear: {
        h3: "Give Your Child a Dream Gap Year!",
        p1: "Concerned about your child's productivity during their gap year? Without a plan, they might not fully benefit from this time.",
        p2: "GrantMe can guide them towards meaningful goals.",
        p3: "Begin with a consultation.",
        btn: "Book a Consultation Now"
      },
      university: {
        h3: "Support Your Child Through University!",
        p1: "Is your child making the most of their university experience? Without guidance, they might miss key opportunities.",
        p2: "GrantMe offers continued support for scholarships and planning.",
        p3: "Begin with a consultation.",
        btn: "Schedule a Call Today"
      }
    }
  }, Vr = (
    /*html*/
    `
<div class="popup2_1">
  <style>
    .popup2_1 {
      display: none;
    }
    .popup2_1.active {
      display: block;
    }
    .popup2_1 label {
      padding: 13px;
      display: block;
      border-radius: 6px;
      border: 1px solid #CCC;
      background: #FFF;
      margin-bottom: 12px;
      width: 100%;
      position: relative;
    }
    .popup2_1 label::after {
      content: '*';
      color: #EB6F2D;
      position: absolute;
      top: 6px;
      right: 6px;
      font-size: 16px;
      line-height: 1;
      z-index: 5;
    }
    .popup2_1 label::before {
      height: 100%;
      right: 13px;
      top: 0;
      width: 20px;
      content: '';
      position: absolute;
      background: #FFF;
      z-index: 4;
      pointer-events: none;
    }
    .popup2_1 label input {
      font-size: 16px;
      color: #676767;
      border: none;
      outline: none;
      width: 100%;
      background: transparent;
      font-weight: 400;
    }
    .popup2_1 label.error {
      border-color: #EB6F2D;
    }
    .popup2_1 label input::placeholder {
      color: #676767;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
    .popup2_1 label svg {
      position: absolute;
      top: 50%;
      right: 13px;
      transform: translateY(-50%);
      z-index: 6;
    }
    .popup2_1 label:first-of-type svg {
      pointer-events: none;
    }
  </style>
  <span class="back">${Xt.back}Back</span>
  <h2>When is the best time to remind you?</h2>
  <p>We'll email you a link to access the FREE webinar at your convenience.</p>
  <div class="popup_form">
  <label>
    <input type="email" placeholder="Your parents email">
    ${Xt.mail}
  </label>
  <label>
    <input type="tel" placeholder="Your parents phone">
    ${Xt.phone}
  </label>
  </div>
  <button class="main">Get a Reminder</button>
</div>
`
  ), Ir = (t, i) => {
    const a = qr[t][i], l = (
      /*HTML*/
      `
    <div class="popup_main active">
      <h3>${a.h3}</h3>
      <p>${a.p1}</p>
      <div >
        <img src="${jr}/img/grantme_logo.png" alt="logo" />
        <p>
          ${a.p2}
        </p>
      </div>
      <p>${a.p3}</p>
      <button class="main">${a.btn}</button>
      ${t === "student" ? (
        /*HTML*/
        '<button class="secondary">Share results with parents/Guardians</button>'
      ) : ""}
    </div>
    ${t === "student" ? Vr : ""}
  `
    );
    return (
      /*HTML*/
      `
  <div class="crs_popup_wrapper">
    <style>
      ${Gr}
    </style>
    <div class="popup_root">
      <span class="popup_close">${Xt.close}</span>
      <div class="popup_content">
        ${l}
      </div>
      <div class="slider_desktop">
        <h3>Our Student Success Stories</h3>
        <ul class="thumbs">
          ${ki.map((u) => (
        /*HTML*/
        `
                <li>
                  <img src="${u.thumb}" alt="photo">
                </li>
              `
      )).join("")}
        </ul>
        <div class="slider_stories">
          ${ki.map((u) => (
        /*HTML*/
        `
                <div class="slide">
                  <div class="inner">
                    <div class="flx">
                      <div class="img">
                        <img src="${u.img}" alt="photo"> 
                      </div>
                      <div>
                        <p class="name">${u.name}</p>
                        <p class="university">${u.university}</p>
                        <p class="received">Received ${u.received}</p>
                      </div>
                    </div>
                    <p class="description">
                      "${u.description}"
                    </p>
                  </div>
                </div>
              `
      )).join("")}
        </div>
      </div>
    </div>
  </div>
  `
    );
  };
  Er({ name: "EIP Grade Type", dev: "YK" }), Mr(["https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css"]);
  class Ur {
    constructor() {
      this.grade = this.checkGrade(), this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.userType = window.location.href.includes("parent") ? "parent" : "student", this.init();
    }
    init() {
      this.renderPopup(), this.bindEvents(), this.bindTriggers(), this.bindTracking();
    }
    renderPopup() {
      document.body.insertAdjacentHTML("beforeend", Ir(this.userType, this.grade)), this.slider = _i({
        container: ".slider_stories",
        items: 1,
        autoplay: !0,
        mouseDrag: !0,
        controls: !1,
        nav: !0,
        navContainer: ".thumbs"
      });
    }
    checkGrade() {
      const i = decodeURI(window.location.search.split("YOS=")[1].split("&")[0]) || "";
      return i.includes("Grade 9") ? "grade10" : i.includes("Grade 11") ? "grade11" : i.includes("Grade 12") ? "grade12" : i.includes("Gap Year") ? "gapYear" : i.includes("University") ? "university" : "grade10";
    }
    bindEvents() {
      const i = ie(".crs_popup_wrapper .popup_close"), a = ie(".crs_popup_wrapper"), l = ie(".popup_main button.main");
      if (i.on("click", () => {
        a.removeClass("show"), De(`exp_eip_grade_type_close_${this.userType}_${this.grade}`, "Close button", "click", "Main Popup");
      }), a.on("click", (I) => {
        I.target === a.elements[0] && (a.removeClass("show"), De(`exp_eip_grade_type_close_bg_${this.userType}_${this.grade}`, "Close bg", "click", "Main Popup"));
      }), l.on("click", () => {
        a.removeClass("show"), Sr("#newScheduleBox"), De(`exp_eip_grade_type_main_btn_${this.userType}_${this.grade}`, "Main button", "click", "Main Popup");
      }), this.userType === "parent")
        return;
      const s = ie(".popup2_1 button.main"), u = ie(".crs_popup_wrapper span.back"), x = ie(".crs_popup_wrapper button.secondary"), b = ie(".popup_main"), _ = ie(".popup2_1");
      ie(".popup2_1 input").each((I) => {
        const X = I;
        ie(I).on("input", () => {
          var Ae;
          X.value && ((Ae = X.closest("label")) == null || Ae.classList.remove("error"));
        }), I.addEventListener("click", () => {
          De(
            `exp_eip_grade_type_input_${this.userType}_${this.grade}`,
            `${X.type} input`,
            "input",
            "Second Popup"
          );
        });
      }), x.on("click", () => {
        b.removeClass("active"), _.addClass("active"), De(`exp_eip_grade_type_share_${this.userType}_${this.grade}`, "Share button", "click", "Main Popup");
      }), u.on("click", () => {
        b.addClass("active"), _.removeClass("active"), De(`exp_eip_grade_type_back_${this.userType}_${this.grade}`, "Back button", "click", "Second Popup");
      }), s.on("click", () => {
        const I = ie(".popup2_1 input");
        let X = !0;
        I.each((Ae) => {
          var Qe, Be, lt;
          let L = Ae;
          !L.value && L && ((Qe = L.closest("label")) == null || Qe.classList.add("error"), X = !1), L.type === "email" && !L.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) && ((Be = L.closest("label")) == null || Be.classList.add("error"), X = !1), L.type === "tel" && !L.value.match(/^\d{8,12}$/) && ((lt = L.closest("label")) == null || lt.classList.add("error"), X = !1);
        }), X && (a.removeClass("show"), console.log("send"), De(
          `exp_eip_grade_type_submit_form_${this.userType}_${this.grade}`,
          "Submit form",
          "submit",
          "Second Popup"
        ));
      });
    }
    bindTriggers() {
      ie(".crs_popup_wrapper"), document.body.addEventListener("mouseleave", (l) => {
        this.showPopup();
      }), this.device === "mobile" && Lr(window, (l) => {
        l > 150 && this.showPopup();
      });
      const i = this.device === "desktop" ? 20 : 30, a = setTimeout(() => {
        this.showPopup();
      }, i * 1e3);
      ie("body").on("click", ".day.has-event", () => {
        clearTimeout(a);
      }), setInterval(() => {
        console.log(a);
      }, 1e3);
    }
    showPopup() {
      if (localStorage.getItem("showPopup"))
        return;
      ie(".crs_popup_wrapper").addClass("show"), localStorage.setItem("showPopup", "true");
    }
    bindTracking() {
      hi(
        ".crs_popup_wrapper .popup_main",
        `exp_eip_grade_type_main_${this.userType}_${this.grade}`,
        "Main Popup",
        "Visibulity of Main Popup"
      ), hi(
        ".crs_popup_wrapper .popup2_1",
        `exp_eip_grade_type_second_${this.userType}_${this.grade}`,
        "Second Popup",
        "Visibulity of Second Popup"
      );
    }
  }
  new Ur();
})();
//# sourceMappingURL=index.js.map
