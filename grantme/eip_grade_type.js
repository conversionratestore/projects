(function() {
  "use strict";
  const ze = (n, i, a, s = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: n,
      event_desc: i,
      event_type: a,
      event_loc: s
    }), console.log(`Event: ${n} | ${i} | ${a} | ${s}`);
  }, Er = ({ name: n, dev: i }) => {
    console.log(
      `%c EXP: ${n} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class Mr {
    constructor(i) {
      this.elements = typeof i == "string" ? document.querySelectorAll(i) : i instanceof Element ? [i] : i;
    }
    on(i, a, s) {
      return typeof a == "function" && (s = a, a = ""), this.elements.forEach(function(l) {
        l.addEventListener(i, function(u) {
          var x;
          if (a) {
            let b = (x = u.target) == null ? void 0 : x.closest(a);
            l.contains(b) && (s == null || s.call(b, u));
          } else
            s == null || s.call(l, u);
        });
      }), this;
    }
    addClass(i) {
      return this.elements.forEach(function(a) {
        a.classList.add(i);
      }), this;
    }
    removeClass(i) {
      return this.elements.forEach(function(a) {
        a.classList.remove(i);
      }), this;
    }
    toggleClass(i) {
      return this.elements.forEach(function(a) {
        a.classList.toggle(i);
      }), this;
    }
    each(i) {
      return this.elements.forEach((a, s) => {
        i(a, s);
      }), this;
    }
  }
  const ee = (n) => new Mr(n), Sr = async (n) => {
    const i = (a) => new Promise((s, l) => {
      const u = a.split(".").pop();
      if (u === "js") {
        if (Array.from(document.scripts).map((_) => _.src.toLowerCase()).includes(a.toLowerCase()))
          return console.log(`Script ${a} allready downloaded!`), s("");
        const b = document.createElement("script");
        b.src = a, b.onload = s, b.onerror = l, document.head.appendChild(b);
      } else if (u === "css") {
        if (Array.from(document.styleSheets).map((_) => {
          var ne;
          return (ne = _.href) == null ? void 0 : ne.toLowerCase();
        }).includes(a.toLowerCase()))
          return console.log(`Style ${a} allready downloaded!`), s("");
        const b = document.createElement("link");
        b.rel = "stylesheet", b.href = a, b.onload = s, b.onerror = l, document.head.appendChild(b);
      }
    });
    for (const a of n)
      console.log(a), await i(a), console.log(`Loaded librari ${a}`);
    console.log("All libraries loaded!");
  }, hi = (n, i, a, s, l = 1e3, u = 0.5) => {
    let x, b;
    if (x = new IntersectionObserver(
      function(_) {
        _[0].isIntersecting === !0 ? b = setTimeout(() => {
          ze(
            i,
            _[0].target.dataset.visible || s || "",
            "view",
            a
          ), x.disconnect();
        }, l) : (console.log("Element is not fully visible"), clearTimeout(b));
      },
      { threshold: [u] }
    ), typeof n == "string") {
      const _ = document.querySelector(n);
      _ && x.observe(_);
    } else
      x.observe(n);
  }, Lr = (n) => {
    const i = document.querySelector(n);
    if (!i)
      return;
    const s = i.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: s,
      behavior: "smooth"
    });
  }, Ar = (n, i) => {
    const a = n === window ? window : document.querySelector(n);
    let s, l, u, x, b;
    function _() {
      s = null, x = 0;
    }
    _(), a.addEventListener("scroll", function() {
      l = n === window ? this.scrollY : this.scrollTop, b = l > s ? "down" : "up", s != null && (x = l - s), s = l, clearTimeout(u), u = setTimeout(_, 50), i(Math.abs(x), b);
    });
  };
  var Un = window, Oe = Un.requestAnimationFrame || Un.webkitRequestAnimationFrame || Un.mozRequestAnimationFrame || Un.msRequestAnimationFrame || function(n) {
    return setTimeout(n, 16);
  }, gi = window, Lt = gi.cancelAnimationFrame || gi.mozCancelAnimationFrame || function(n) {
    clearTimeout(n);
  };
  function At() {
    for (var n, i, a, s = arguments[0] || {}, l = 1, u = arguments.length; l < u; l++)
      if ((n = arguments[l]) !== null)
        for (i in n)
          a = n[i], s !== a && a !== void 0 && (s[i] = a);
    return s;
  }
  function be(n) {
    return ["true", "false"].indexOf(n) >= 0 ? JSON.parse(n) : n;
  }
  function we(n, i, a, s) {
    if (s)
      try {
        n.setItem(i, a);
      } catch {
      }
    return a;
  }
  function Dr() {
    var n = window.tnsId;
    return window.tnsId = n ? n + 1 : 1, "tns" + window.tnsId;
  }
  function Qn() {
    var n = document, i = n.body;
    return i || (i = n.createElement("body"), i.fake = !0), i;
  }
  var xn = document.documentElement;
  function Zn(n) {
    var i = "";
    return n.fake && (i = xn.style.overflow, n.style.background = "", n.style.overflow = xn.style.overflow = "hidden", xn.appendChild(n)), i;
  }
  function Xn(n, i) {
    n.fake && (n.remove(), xn.style.overflow = i, xn.offsetHeight);
  }
  function Nr() {
    var n = document, i = Qn(), a = Zn(i), s = n.createElement("div"), l = !1;
    i.appendChild(s);
    try {
      for (var u = "(10px * 10)", x = ["calc" + u, "-moz-calc" + u, "-webkit-calc" + u], b, _ = 0; _ < 3; _++)
        if (b = x[_], s.style.width = b, s.offsetWidth === 100) {
          l = b.replace(u, "");
          break;
        }
    } catch {
    }
    return i.fake ? Xn(i, a) : s.remove(), l;
  }
  function zr() {
    var n = document, i = Qn(), a = Zn(i), s = n.createElement("div"), l = n.createElement("div"), u = "", x = 70, b = 3, _ = !1;
    s.className = "tns-t-subp2", l.className = "tns-t-ct";
    for (var ne = 0; ne < x; ne++)
      u += "<div></div>";
    return l.innerHTML = u, s.appendChild(l), i.appendChild(s), _ = Math.abs(s.getBoundingClientRect().left - l.children[x - b].getBoundingClientRect().left) < 2, i.fake ? Xn(i, a) : s.remove(), _;
  }
  function Or() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var n = document, i = Qn(), a = Zn(i), s = n.createElement("div"), l = n.createElement("style"), u = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", x;
    return l.type = "text/css", s.className = "tns-mq-test", i.appendChild(l), i.appendChild(s), l.styleSheet ? l.styleSheet.cssText = u : l.appendChild(n.createTextNode(u)), x = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, i.fake ? Xn(i, a) : s.remove(), x === "absolute";
  }
  function Rr(n, i) {
    var a = document.createElement("style");
    return n && a.setAttribute("media", n), i && a.setAttribute("nonce", i), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function Le(n, i, a, s) {
    "insertRule" in n ? n.insertRule(i + "{" + a + "}", s) : n.addRule(i, a, s);
  }
  function $r(n, i) {
    "deleteRule" in n ? n.deleteRule(i) : n.removeRule(i);
  }
  function _e(n) {
    var i = "insertRule" in n ? n.cssRules : n.rules;
    return i.length;
  }
  function Pr(n, i) {
    return Math.atan2(n, i) * (180 / Math.PI);
  }
  function Wr(n, i) {
    var a = !1, s = Math.abs(90 - Math.abs(n));
    return s >= 90 - i ? a = "horizontal" : s <= i && (a = "vertical"), a;
  }
  function Re(n, i, a) {
    for (var s = 0, l = n.length; s < l; s++)
      i.call(a, n[s], s);
  }
  var Dt = "classList" in document.createElement("_"), ln = Dt ? function(n, i) {
    return n.classList.contains(i);
  } : function(n, i) {
    return n.className.indexOf(i) >= 0;
  }, P = Dt ? function(n, i) {
    ln(n, i) || n.classList.add(i);
  } : function(n, i) {
    ln(n, i) || (n.className += " " + i);
  }, re = Dt ? function(n, i) {
    ln(n, i) && n.classList.remove(i);
  } : function(n, i) {
    ln(n, i) && (n.className = n.className.replace(i, ""));
  };
  function _n(n, i) {
    return n.hasAttribute(i);
  }
  function Jn(n, i) {
    return n.getAttribute(i);
  }
  function vi(n) {
    return typeof n.item < "u";
  }
  function fe(n, i) {
    if (n = vi(n) || n instanceof Array ? n : [n], Object.prototype.toString.call(i) === "[object Object]")
      for (var a = n.length; a--; )
        for (var s in i)
          n[a].setAttribute(s, i[s]);
  }
  function $e(n, i) {
    n = vi(n) || n instanceof Array ? n : [n], i = i instanceof Array ? i : [i];
    for (var a = i.length, s = n.length; s--; )
      for (var l = a; l--; )
        n[s].removeAttribute(i[l]);
  }
  function mi(n) {
    for (var i = [], a = 0, s = n.length; a < s; a++)
      i.push(n[a]);
    return i;
  }
  function ce(n, i) {
    n.style.display !== "none" && (n.style.display = "none");
  }
  function ue(n, i) {
    n.style.display === "none" && (n.style.display = "");
  }
  function yi(n) {
    return window.getComputedStyle(n).display !== "none";
  }
  function kn(n) {
    if (typeof n == "string") {
      var i = [n], a = n.charAt(0).toUpperCase() + n.substr(1), s = ["Webkit", "Moz", "ms", "O"];
      s.forEach(function(b) {
        (b !== "ms" || n === "transform") && i.push(b + a);
      }), n = i;
    }
    var l = document.createElement("fakeelement");
    n.length;
    for (var u = 0; u < n.length; u++) {
      var x = n[u];
      if (l.style[x] !== void 0)
        return x;
    }
    return !1;
  }
  function Fr(n) {
    if (!n || !window.getComputedStyle)
      return !1;
    var i = document, a = Qn(), s = Zn(a), l = i.createElement("p"), u, x = n.length > 9 ? "-" + n.slice(0, -9).toLowerCase() + "-" : "";
    return x += "transform", a.insertBefore(l, null), l.style[n] = "translate3d(1px,1px,1px)", u = window.getComputedStyle(l).getPropertyValue(x), a.fake ? Xn(a, s) : l.remove(), u !== void 0 && u.length > 0 && u !== "none";
  }
  function bi(n, i) {
    var a = !1;
    return /^Webkit/.test(n) ? a = "webkit" + i + "End" : /^O/.test(n) ? a = "o" + i + "End" : n && (a = i.toLowerCase() + "end"), a;
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
  function $(n, i, a) {
    for (var s in i) {
      var l = ["touchstart", "touchmove"].indexOf(s) >= 0 && !a ? xi : !1;
      n.addEventListener(s, i[s], l);
    }
  }
  function I(n, i) {
    for (var a in i) {
      var s = ["touchstart", "touchmove"].indexOf(a) >= 0 ? xi : !1;
      n.removeEventListener(a, i[a], s);
    }
  }
  function jr() {
    return {
      topics: {},
      on: function(n, i) {
        this.topics[n] = this.topics[n] || [], this.topics[n].push(i);
      },
      off: function(n, i) {
        if (this.topics[n]) {
          for (var a = 0; a < this.topics[n].length; a++)
            if (this.topics[n][a] === i) {
              this.topics[n].splice(a, 1);
              break;
            }
        }
      },
      emit: function(n, i) {
        i.type = n, this.topics[n] && this.topics[n].forEach(function(a) {
          a(i, n);
        });
      }
    };
  }
  function qr(n, i, a, s, ne, u, x) {
    var b = Math.min(u, 10), _ = ne.indexOf("%") >= 0 ? "%" : "px", ne = ne.replace(_, ""), W = Number(n.style[i].replace(a, "").replace(s, "").replace(_, "")), X = (ne - W) / u * b;
    setTimeout(Ae, b);
    function Ae() {
      u -= b, W += X, n.style[i] = a + W + _ + s, u > 0 ? setTimeout(Ae, b) : x();
    }
  }
  Object.keys || (Object.keys = function(n) {
    var i = [];
    for (var a in n)
      Object.prototype.hasOwnProperty.call(n, a) && i.push(a);
    return i;
  }), "remove" in Element.prototype || (Element.prototype.remove = function() {
    this.parentNode && this.parentNode.removeChild(this);
  });
  var _i = function(n) {
    n = At({
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
    }, n || {});
    var i = document, a = window, s = {
      ENTER: 13,
      SPACE: 32,
      LEFT: 37,
      RIGHT: 39
    }, l = {}, u = n.useLocalStorage;
    if (u) {
      var x = navigator.userAgent, b = /* @__PURE__ */ new Date();
      try {
        l = a.localStorage, l ? (l.setItem(b, b), u = l.getItem(b) == b, l.removeItem(b)) : u = !1, u || (l = {});
      } catch {
        u = !1;
      }
      u && (l.tnsApp && l.tnsApp !== x && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
        l.removeItem(e);
      }), localStorage.tnsApp = x);
    }
    var _ = l.tC ? be(l.tC) : we(l, "tC", Nr(), u), ne = l.tPL ? be(l.tPL) : we(l, "tPL", zr(), u), W = l.tMQ ? be(l.tMQ) : we(l, "tMQ", Or(), u), X = l.tTf ? be(l.tTf) : we(l, "tTf", kn("transform"), u), Ae = l.t3D ? be(l.t3D) : we(l, "t3D", Fr(X), u), L = l.tTDu ? be(l.tTDu) : we(l, "tTDu", kn("transitionDuration"), u), Ze = l.tTDe ? be(l.tTDe) : we(l, "tTDe", kn("transitionDelay"), u), Xe = l.tADu ? be(l.tADu) : we(l, "tADu", kn("animationDuration"), u), fn = l.tADe ? be(l.tADe) : we(l, "tADe", kn("animationDelay"), u), Je = l.tTE ? be(l.tTE) : we(l, "tTE", bi(L, "Transition"), u), Ti = l.tAE ? be(l.tAE) : we(l, "tAE", bi(Xe, "Animation"), u), Ci = a.console && typeof a.console.warn == "function", Nt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ei = {};
    if (Nt.forEach(function(e) {
      if (typeof n[e] == "string") {
        var t = n[e], r = i.querySelector(t);
        if (Ei[e] = t, r && r.nodeName)
          n[e] = r;
        else {
          Ci && console.warn("Can't find", n[e]);
          return;
        }
      }
    }), n.container.children.length < 1) {
      Ci && console.warn("No slides found in", n.container);
      return;
    }
    var N = n.responsive, cn = n.nested, d = n.mode === "carousel";
    if (N) {
      0 in N && (n = At(n, N[0]), delete N[0]);
      var zt = {};
      for (var Mi in N) {
        var Tn = N[Mi];
        Tn = typeof Tn == "number" ? { items: Tn } : Tn, zt[Mi] = Tn;
      }
      N = zt, zt = null;
    }
    function Si(e) {
      for (var t in e)
        d || (t === "slideBy" && (e[t] = "page"), t === "edgePadding" && (e[t] = !1), t === "autoHeight" && (e[t] = !1)), t === "responsive" && Si(e[t]);
    }
    if (d || Si(n), !d) {
      n.axis = "horizontal", n.slideBy = "page", n.edgePadding = !1;
      var Pe = n.animateIn, et = n.animateOut, Ot = n.animateDelay, ke = n.animateNormal;
    }
    var M = n.axis === "horizontal", te = i.createElement("div"), ie = i.createElement("div"), oe, g = n.container, Rt = g.parentNode, Li = g.outerHTML, C = g.children, v = C.length, Cn, nt = ji(), En = !1;
    N && Bi(), d && (g.className += " tns-vpfix");
    var y = n.autoWidth, p = m("fixedWidth"), O = m("edgePadding"), k = m("gutter"), q = Yi(), G = m("center"), w = y ? 1 : Math.floor(m("items")), un = m("slideBy"), $t = n.viewportMax || n.fixedWidthViewportWidth, We = m("arrowKeys"), ge = m("speed"), Mn = n.rewind, K = Mn ? !1 : n.loop, ae = m("autoHeight"), Te = m("controls"), Fe = m("controlsText"), Ce = m("nav"), He = m("touch"), je = m("mouseDrag"), J = m("autoplay"), Pt = m("autoplayTimeout"), qe = m("autoplayText"), Ye = m("autoplayHoverPause"), Ve = m("autoplayResetOnVisibility"), S = Rr(null, m("nonce")), Sn = n.lazyload, Qr = n.lazyloadSelector, F, dn = [], U = K ? Br() : 0, E = d ? v + U * 2 : v + U, Ai = !!((p || y) && !K), pn = p ? ti() : null, Wt = !d || !K, Be = M ? "left" : "top", Ie = "", hn = "", Ln = /* @__PURE__ */ function() {
      return p ? function() {
        return G && !K ? v - 1 : Math.ceil(-pn / (p + k));
      } : y ? function() {
        for (var e = 0; e < E; e++)
          if (F[e] >= -pn)
            return e;
      } : function() {
        return G && d && !K ? v - 1 : K || d ? Math.max(0, E - Math.ceil(w)) : E - 1;
      };
    }(), f = Fi(m("startIndex")), Ge = f;
    Wi();
    var Ee = 0, de = y ? null : Ln(), tt = n.preventActionWhenRunning, it = n.swipeAngle, Me = it ? "?" : !0, Ke = !1, Ft = n.onInit, Y = new jr(), Ue = " tns-slider tns-" + n.mode, z = g.id || Dr(), se = m("disable"), An = !1, rt = n.freezable, ve = rt && !y ? Qt() : !1, Dn = !1, Nn = {
      click: Qe,
      keydown: _o
    }, Ht = {
      click: go,
      keydown: ko
    }, zn = {
      mouseover: bo,
      mouseout: wo
    }, On = { visibilitychange: yo }, Rn = { keydown: xo }, $n = {
      touchstart: xr,
      touchmove: _r,
      touchend: St,
      touchcancel: St
    }, Pn = {
      mousedown: xr,
      mousemove: _r,
      mouseup: St,
      mouseleave: St
    }, ot = De("controls"), jt = De("nav"), Wn = y ? !0 : n.navAsThumbnails, qt = De("autoplay"), Di = De("touch"), Ni = De("mouseDrag"), Yt = "tns-slide-active", zi = "tns-slide-cloned", at = "tns-complete", st = {
      load: ao,
      error: so
    }, Vt, It, Fn = n.preventScrollOnTouch === "force";
    if (ot)
      var H = n.controlsContainer, Oi = n.controlsContainer ? n.controlsContainer.outerHTML : "", A = n.prevButton, D = n.nextButton, Zr = n.prevButton ? n.prevButton.outerHTML : "", Xr = n.nextButton ? n.nextButton.outerHTML : "", Hn, jn;
    if (jt)
      var Q = n.navContainer, Ri = n.navContainer ? n.navContainer.outerHTML : "", pe, me = y ? v : Tr(), en = 0, nn = -1, he = Hi(), gn = he, lt = "tns-nav-active", vn = "Carousel Page ", Gt = " (Current Slide)";
    if (qt)
      var $i = n.autoplayDirection === "forward" ? 1 : -1, R = n.autoplayButton, Pi = n.autoplayButton ? n.autoplayButton.outerHTML : "", qn = ["<span class='tns-visually-hidden'>", " animation</span>"], ft, le, ct, mn, ut;
    if (Di || Ni)
      var tn = {}, xe = {}, dt, rn = !1, ye, Kt = M ? function(e, t) {
        return e.x - t.x;
      } : function(e, t) {
        return e.y - t.y;
      };
    y || pt(se || ve), X && (Be = X, Ie = "translate", Ae ? (Ie += M ? "3d(" : "3d(0px, ", hn = M ? ", 0px, 0px)" : ", 0px)") : (Ie += M ? "X(" : "Y(", hn = ")")), d && (g.className = g.className.replace("tns-vpfix", "")), no(), to(), Gi();
    function pt(e) {
      e && (Te = Ce = He = je = We = J = Ye = Ve = !1);
    }
    function Wi() {
      for (var e = d ? f - U : f; e < 0; )
        e += v;
      return e % v + 1;
    }
    function Fi(e) {
      return e = e ? Math.max(0, Math.min(K ? v - 1 : v - w, e)) : 0, d ? e + U : e;
    }
    function ht(e) {
      for (e == null && (e = f), d && (e -= U); e < 0; )
        e += v;
      return Math.floor(e % v);
    }
    function Hi() {
      var e = ht(), t;
      return t = Wn ? e : p || y ? Math.ceil((e + 1) * me / v - 1) : Math.floor(e / w), !K && d && f === de && (t = me - 1), t;
    }
    function Jr() {
      if (y || p && !$t)
        return v - 1;
      var e = p ? "fixedWidth" : "items", t = [];
      if ((p || n[e] < v) && t.push(n[e]), N)
        for (var r in N) {
          var o = N[r][e];
          o && (p || o < v) && t.push(o);
        }
      return t.length || t.push(0), Math.ceil(p ? $t / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function Br() {
      var e = Jr(), t = d ? Math.ceil((e * 5 - v) / 2) : e * 4 - v;
      return t = Math.max(e, t), De("edgePadding") ? t + 1 : t;
    }
    function ji() {
      return a.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function Ut(e) {
      return e === "top" ? "afterbegin" : "beforeend";
    }
    function qi(e) {
      if (e != null) {
        var t = i.createElement("div"), r, o;
        return e.appendChild(t), r = t.getBoundingClientRect(), o = r.right - r.left, t.remove(), o || qi(e.parentNode);
      }
    }
    function Yi() {
      var e = O ? O * 2 - k : 0;
      return qi(Rt) - e;
    }
    function De(e) {
      if (n[e])
        return !0;
      if (N) {
        for (var t in N)
          if (N[t][e])
            return !0;
      }
      return !1;
    }
    function m(e, t) {
      if (t == null && (t = nt), e === "items" && p)
        return Math.floor((q + k) / (p + k)) || 1;
      var r = n[e];
      if (N)
        for (var o in N)
          t >= parseInt(o) && e in N[o] && (r = N[o][e]);
      return e === "slideBy" && r === "page" && (r = m("items")), !d && (e === "slideBy" || e === "items") && (r = Math.floor(r)), r;
    }
    function eo(e) {
      return _ ? _ + "(" + e * 100 + "% / " + E + ")" : e * 100 / E + "%";
    }
    function gt(e, t, r, o, c) {
      var h = "";
      if (e !== void 0) {
        var T = e;
        t && (T -= t), h = M ? "margin: 0 " + T + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + T + "px 0;";
      } else if (t && !r) {
        var V = "-" + t + "px", Z = M ? V + " 0 0" : "0 " + V + " 0";
        h = "margin: 0 " + Z + ";";
      }
      return !d && c && L && o && (h += on(o)), h;
    }
    function vt(e, t, r) {
      return e ? (e + t) * E + "px" : _ ? _ + "(" + E * 100 + "% / " + r + ")" : E * 100 / r + "%";
    }
    function mt(e, t, r) {
      var o;
      if (e)
        o = e + t + "px";
      else {
        d || (r = Math.floor(r));
        var c = d ? E : r;
        o = _ ? _ + "(100% / " + c + ")" : 100 / c + "%";
      }
      return o = "width:" + o, cn !== "inner" ? o + ";" : o + " !important;";
    }
    function yt(e) {
      var t = "";
      if (e !== !1) {
        var r = M ? "padding-" : "margin-", o = M ? "right" : "bottom";
        t = r + o + ": " + e + "px;";
      }
      return t;
    }
    function Vi(e, t) {
      var r = e.substring(0, e.length - t).toLowerCase();
      return r && (r = "-" + r + "-"), r;
    }
    function on(e) {
      return Vi(L, 18) + "transition-duration:" + e / 1e3 + "s;";
    }
    function Ii(e) {
      return Vi(Xe, 17) + "animation-duration:" + e / 1e3 + "s;";
    }
    function no() {
      var e = "tns-outer", t = "tns-inner";
      if (De("gutter"), te.className = e, ie.className = t, te.id = z + "-ow", ie.id = z + "-iw", g.id === "" && (g.id = z), Ue += ne || y ? " tns-subpixel" : " tns-no-subpixel", Ue += _ ? " tns-calc" : " tns-no-calc", y && (Ue += " tns-autowidth"), Ue += " tns-" + n.axis, g.className += Ue, d ? (oe = i.createElement("div"), oe.id = z + "-mw", oe.className = "tns-ovh", te.appendChild(oe), oe.appendChild(ie)) : te.appendChild(ie), ae) {
        var r = oe || ie;
        r.className += " tns-ah";
      }
      if (Rt.insertBefore(te, g), ie.appendChild(g), Re(C, function(j, bn) {
        P(j, "tns-item"), j.id || (j.id = z + "-item" + bn), !d && ke && P(j, ke), fe(j, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), U) {
        for (var o = i.createDocumentFragment(), c = i.createDocumentFragment(), h = U; h--; ) {
          var T = h % v, V = C[T].cloneNode(!0);
          if (P(V, zi), $e(V, "id"), c.insertBefore(V, c.firstChild), d) {
            var Z = C[v - 1 - T].cloneNode(!0);
            P(Z, zi), $e(Z, "id"), o.appendChild(Z);
          }
        }
        g.insertBefore(o, g.firstChild), g.appendChild(c), C = g.children;
      }
    }
    function Gi() {
      if (De("autoHeight") || y || !M) {
        var e = g.querySelectorAll("img");
        Re(e, function(t) {
          var r = t.src;
          Sn || (r && r.indexOf("data:image") < 0 ? (t.src = "", $(t, st), P(t, "loading"), t.src = r) : or(t));
        }), Oe(function() {
          xt(mi(e), function() {
            Vt = !0;
          });
        }), De("autoHeight") && (e = ei(f, Math.min(f + w - 1, E - 1))), Sn ? Ki() : Oe(function() {
          xt(mi(e), Ki);
        });
      } else
        d && Vn(), Qi(), Zi();
    }
    function Ki() {
      if (y && v > 1) {
        var e = K ? f : v - 1;
        (function t() {
          var r = C[e].getBoundingClientRect().left, o = C[e - 1].getBoundingClientRect().right;
          Math.abs(r - o) <= 1 ? Ui() : setTimeout(function() {
            t();
          }, 16);
        })();
      } else
        Ui();
    }
    function Ui() {
      (!M || y) && (fr(), y ? (pn = ti(), rt && (ve = Qt()), de = Ln(), pt(se || ve)) : oi()), d && Vn(), Qi(), Zi();
    }
    function to() {
      if (!d)
        for (var e = f, t = f + Math.min(v, w); e < t; e++) {
          var r = C[e];
          r.style.left = (e - f) * 100 / w + "%", P(r, Pe), re(r, ke);
        }
      if (M && (ne || y ? (Le(S, "#" + z + " > .tns-item", "font-size:" + a.getComputedStyle(C[0]).fontSize + ";", _e(S)), Le(S, "#" + z, "font-size:0;", _e(S))) : d && Re(C, function(fi, ci) {
        fi.style.marginLeft = eo(ci);
      })), W) {
        if (L) {
          var o = oe && n.autoHeight ? on(n.speed) : "";
          Le(S, "#" + z + "-mw", o, _e(S));
        }
        o = gt(n.edgePadding, n.gutter, n.fixedWidth, n.speed, n.autoHeight), Le(S, "#" + z + "-iw", o, _e(S)), d && (o = M && !y ? "width:" + vt(n.fixedWidth, n.gutter, n.items) + ";" : "", L && (o += on(ge)), Le(S, "#" + z, o, _e(S))), o = M && !y ? mt(n.fixedWidth, n.gutter, n.items) : "", n.gutter && (o += yt(n.gutter)), d || (L && (o += on(ge)), Xe && (o += Ii(ge))), o && Le(S, "#" + z + " > .tns-item", o, _e(S));
      } else {
        fo(), ie.style.cssText = gt(O, k, p, ae), d && M && !y && (g.style.width = vt(p, k, w));
        var o = M && !y ? mt(p, k, w) : "";
        k && (o += yt(k)), o && Le(S, "#" + z + " > .tns-item", o, _e(S));
      }
      if (N && W)
        for (var c in N) {
          c = parseInt(c);
          var h = N[c], o = "", T = "", V = "", Z = "", j = "", bn = y ? null : m("items", c), Kn = m("fixedWidth", c), sn = m("speed", c), si = m("edgePadding", c), li = m("autoHeight", c), wn = m("gutter", c);
          L && oe && m("autoHeight", c) && "speed" in h && (T = "#" + z + "-mw{" + on(sn) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + z + "-iw{" + gt(si, wn, Kn, sn, li) + "}"), d && M && !y && ("fixedWidth" in h || "items" in h || p && "gutter" in h) && (Z = "width:" + vt(Kn, wn, bn) + ";"), L && "speed" in h && (Z += on(sn)), Z && (Z = "#" + z + "{" + Z + "}"), ("fixedWidth" in h || p && "gutter" in h || !d && "items" in h) && (j += mt(Kn, wn, bn)), "gutter" in h && (j += yt(wn)), !d && "speed" in h && (L && (j += on(sn)), Xe && (j += Ii(sn))), j && (j = "#" + z + " > .tns-item{" + j + "}"), o = T + V + Z + j, o && S.insertRule("@media (min-width: " + c / 16 + "em) {" + o + "}", S.cssRules.length);
        }
    }
    function Qi() {
      if (ni(), te.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + rr() + "</span>  of " + v + "</div>"), It = te.querySelector(".tns-liveregion .current"), qt) {
        var e = J ? "stop" : "start";
        R ? fe(R, { "data-action": e }) : n.autoplayButtonOutput && (te.insertAdjacentHTML(Ut(n.autoplayPosition), '<button type="button" data-action="' + e + '">' + qn[0] + e + qn[1] + qe[0] + "</button>"), R = te.querySelector("[data-action]")), R && $(R, { click: mr }), J && (Mt(), Ye && $(g, zn), Ve && $(g, On));
      }
      if (jt) {
        if (Q)
          fe(Q, { "aria-label": "Carousel Pagination" }), pe = Q.children, Re(pe, function(T, V) {
            fe(T, {
              "data-nav": V,
              tabindex: "-1",
              "aria-label": vn + (V + 1),
              "aria-controls": z
            });
          });
        else {
          for (var t = "", r = Wn ? "" : 'style="display:none"', o = 0; o < v; o++)
            t += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + z + '" ' + r + ' aria-label="' + vn + (o + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", te.insertAdjacentHTML(Ut(n.navPosition), t), Q = te.querySelector(".tns-nav"), pe = Q.children;
        }
        if (ai(), L) {
          var c = L.substring(0, L.length - 18).toLowerCase(), h = "transition: all " + ge / 1e3 + "s";
          c && (h = "-" + c + "-" + h), Le(S, "[aria-controls^=" + z + "-item]", h, _e(S));
        }
        fe(pe[he], { "aria-label": vn + (he + 1) + Gt }), $e(pe[he], "tabindex"), P(pe[he], lt), $(Q, Ht);
      }
      ot && (!H && (!A || !D) && (te.insertAdjacentHTML(Ut(n.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + z + '">' + Fe[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + z + '">' + Fe[1] + "</button></div>"), H = te.querySelector(".tns-controls")), (!A || !D) && (A = H.children[0], D = H.children[1]), n.controlsContainer && fe(H, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && fe([A, D], {
        "aria-controls": z,
        tabindex: "-1"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && (fe(A, { "data-controls": "prev" }), fe(D, { "data-controls": "next" })), Hn = ur(A), jn = ur(D), pr(), H ? $(H, Nn) : ($(A, Nn), $(D, Nn))), Xt();
    }
    function Zi() {
      if (d && Je) {
        var e = {};
        e[Je] = Se, $(g, e);
      }
      He && $(g, $n, n.preventScrollOnTouch), je && $(g, Pn), We && $(i, Rn), cn === "inner" ? Y.on("outerResized", function() {
        Ji(), Y.emit("innerLoaded", B());
      }) : (N || p || y || ae || !M) && $(a, { resize: Xi }), ae && (cn === "outer" ? Y.on("innerLoaded", wt) : se || wt()), Jt(), se ? tr() : ve && nr(), Y.on("indexChanged", ar), cn === "inner" && Y.emit("innerLoaded", B()), typeof Ft == "function" && Ft(B()), En = !0;
    }
    function io() {
      if (S.disabled = !0, S.ownerNode && S.ownerNode.remove(), I(a, { resize: Xi }), We && I(i, Rn), H && I(H, Nn), Q && I(Q, Ht), I(g, zn), I(g, On), R && I(R, { click: mr }), J && clearInterval(ft), d && Je) {
        var e = {};
        e[Je] = Se, I(g, e);
      }
      He && I(g, $n), je && I(g, Pn);
      var t = [Li, Oi, Zr, Xr, Ri, Pi];
      Nt.forEach(function(o, c) {
        var h = o === "container" ? te : n[o];
        if (typeof h == "object" && h) {
          var T = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
          h.outerHTML = t[c], n[o] = T ? T.nextElementSibling : V.firstElementChild;
        }
      }), Nt = Pe = et = Ot = ke = M = te = ie = g = Rt = Li = C = v = Cn = nt = y = p = O = k = q = w = un = $t = We = ge = Mn = K = ae = S = Sn = F = dn = U = E = Ai = pn = Wt = Be = Ie = hn = Ln = f = Ge = Ee = de = it = Me = Ke = Ft = Y = Ue = z = se = An = rt = ve = Dn = Nn = Ht = zn = On = Rn = $n = Pn = ot = jt = Wn = qt = Di = Ni = Yt = at = st = Vt = Te = Fe = H = Oi = A = D = Hn = jn = Ce = Q = Ri = pe = me = en = nn = he = gn = lt = vn = Gt = J = Pt = $i = qe = Ye = R = Pi = Ve = qn = ft = le = ct = mn = ut = tn = xe = dt = rn = ye = Kt = He = je = null;
      for (var r in this)
        r !== "rebuild" && (this[r] = null);
      En = !1;
    }
    function Xi(e) {
      Oe(function() {
        Ji(Ne(e));
      });
    }
    function Ji(e) {
      if (En) {
        cn === "outer" && Y.emit("outerResized", B(e)), nt = ji();
        var t, r = Cn, o = !1;
        N && (Bi(), t = r !== Cn, t && Y.emit("newBreakpointStart", B(e)));
        var c, h, T = w, V = se, Z = ve, j = We, bn = Te, Kn = Ce, sn = He, si = je, li = J, wn = Ye, fi = Ve, ci = f;
        if (t) {
          var To = p, Co = ae, Eo = Fe, Mo = G, ui = qe;
          if (!W)
            var So = k, Lo = O;
        }
        if (We = m("arrowKeys"), Te = m("controls"), Ce = m("nav"), He = m("touch"), G = m("center"), je = m("mouseDrag"), J = m("autoplay"), Ye = m("autoplayHoverPause"), Ve = m("autoplayResetOnVisibility"), t && (se = m("disable"), p = m("fixedWidth"), ge = m("speed"), ae = m("autoHeight"), Fe = m("controlsText"), qe = m("autoplayText"), Pt = m("autoplayTimeout"), W || (O = m("edgePadding"), k = m("gutter"))), pt(se), q = Yi(), (!M || y) && !se && (fr(), M || (oi(), o = !0)), (p || y) && (pn = ti(), de = Ln()), (t || p) && (w = m("items"), un = m("slideBy"), h = w !== T, h && (!p && !y && (de = Ln()), Zt())), t && se !== V && (se ? tr() : oo()), rt && (t || p || y) && (ve = Qt(), ve !== Z && (ve ? (ii(Tt(Fi(0))), nr()) : (ro(), o = !0))), pt(se || ve), J || (Ye = Ve = !1), We !== j && (We ? $(i, Rn) : I(i, Rn)), Te !== bn && (Te ? H ? ue(H) : (A && ue(A), D && ue(D)) : H ? ce(H) : (A && ce(A), D && ce(D))), Ce !== Kn && (Ce ? (ue(Q), ai()) : ce(Q)), He !== sn && (He ? $(g, $n, n.preventScrollOnTouch) : I(g, $n)), je !== si && (je ? $(g, Pn) : I(g, Pn)), J !== li && (J ? (R && ue(R), !le && !mn && Mt()) : (R && ce(R), le && Gn())), Ye !== wn && (Ye ? $(g, zn) : I(g, zn)), Ve !== fi && (Ve ? $(i, On) : I(i, On)), t) {
          if ((p !== To || G !== Mo) && (o = !0), ae !== Co && (ae || (ie.style.height = "")), Te && Fe !== Eo && (A.innerHTML = Fe[0], D.innerHTML = Fe[1]), R && qe !== ui) {
            var di = J ? 1 : 0, pi = R.innerHTML, Cr = pi.length - ui[di].length;
            pi.substring(Cr) === ui[di] && (R.innerHTML = pi.substring(0, Cr) + qe[di]);
          }
        } else
          G && (p || y) && (o = !0);
        if ((h || p && !y) && (me = Tr(), ai()), c = f !== ci, c ? (Y.emit("indexChanged", B()), o = !0) : h ? c || ar() : (p || y) && (Jt(), ni(), ir()), h && !d && co(), !se && !ve) {
          if (t && !W && ((O !== Lo || k !== So) && (ie.style.cssText = gt(O, k, p, ge, ae)), M)) {
            d && (g.style.width = vt(p, k, w));
            var Ao = mt(p, k, w) + yt(k);
            $r(S, _e(S) - 1), Le(S, "#" + z + " > .tns-item", Ao, _e(S));
          }
          ae && wt(), o && (Vn(), Ge = f);
        }
        t && Y.emit("newBreakpointEnd", B(e));
      }
    }
    function Qt() {
      if (!p && !y) {
        var e = G ? w - (w - 1) / 2 : w;
        return v <= e;
      }
      var t = p ? (p + k) * v : F[v], r = O ? q + O * 2 : q + k;
      return G && (r -= p ? (q - p) / 2 : (q - (F[f + 1] - F[f] - k)) / 2), t <= r;
    }
    function Bi() {
      Cn = 0;
      for (var e in N)
        e = parseInt(e), nt >= e && (Cn = e);
    }
    var Zt = /* @__PURE__ */ function() {
      return K ? d ? (
        // loop + carousel
        function() {
          var e = Ee, t = de;
          e += un, t -= un, O ? (e += 1, t -= 1) : p && (q + k) % (p + k) && (t -= 1), U && (f > t ? f -= v : f < e && (f += v));
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
    function Xt() {
      !J && R && ce(R), !Ce && Q && ce(Q), Te || (H ? ce(H) : (A && ce(A), D && ce(D)));
    }
    function er() {
      J && R && ue(R), Ce && Q && ue(Q), Te && (H ? ue(H) : (A && ue(A), D && ue(D)));
    }
    function nr() {
      if (!Dn) {
        if (O && (ie.style.margin = "0px"), U)
          for (var e = "tns-transparent", t = U; t--; )
            d && P(C[t], e), P(C[E - t - 1], e);
        Xt(), Dn = !0;
      }
    }
    function ro() {
      if (Dn) {
        if (O && W && (ie.style.margin = ""), U)
          for (var e = "tns-transparent", t = U; t--; )
            d && re(C[t], e), re(C[E - t - 1], e);
        er(), Dn = !1;
      }
    }
    function tr() {
      if (!An) {
        if (S.disabled = !0, g.className = g.className.replace(Ue.substring(1), ""), $e(g, ["style"]), K)
          for (var e = U; e--; )
            d && ce(C[e]), ce(C[E - e - 1]);
        if ((!M || !d) && $e(ie, ["style"]), !d)
          for (var t = f, r = f + v; t < r; t++) {
            var o = C[t];
            $e(o, ["style"]), re(o, Pe), re(o, ke);
          }
        Xt(), An = !0;
      }
    }
    function oo() {
      if (An) {
        if (S.disabled = !1, g.className += Ue, Vn(), K)
          for (var e = U; e--; )
            d && ue(C[e]), ue(C[E - e - 1]);
        if (!d)
          for (var t = f, r = f + v; t < r; t++) {
            var o = C[t], c = t < f + w ? Pe : ke;
            o.style.left = (t - f) * 100 / w + "%", P(o, c);
          }
        er(), An = !1;
      }
    }
    function ir() {
      var e = rr();
      It.innerHTML !== e && (It.innerHTML = e);
    }
    function rr() {
      var e = bt(), t = e[0] + 1, r = e[1] + 1;
      return t === r ? t + "" : t + " to " + r;
    }
    function bt(e) {
      e == null && (e = Tt());
      var t = f, r, o, c;
      if (G || O ? (y || p) && (o = -(parseFloat(e) + O), c = o + q + O * 2) : y && (o = F[f], c = o + q), y)
        F.forEach(function(Z, j) {
          j < E && ((G || O) && Z <= o + 0.5 && (t = j), c - Z >= 0.5 && (r = j));
        });
      else {
        if (p) {
          var h = p + k;
          G || O ? (t = Math.floor(o / h), r = Math.ceil(c / h - 1)) : r = t + Math.ceil(q / h) - 1;
        } else if (G || O) {
          var T = w - 1;
          if (G ? (t -= T / 2, r = f + T / 2) : r = f + T, O) {
            var V = O * w / q;
            t -= V, r += V;
          }
          t = Math.floor(t), r = Math.ceil(r);
        } else
          r = t + w - 1;
        t = Math.max(t, 0), r = Math.min(r, E - 1);
      }
      return [t, r];
    }
    function Jt() {
      if (Sn && !se) {
        var e = bt();
        e.push(Qr), ei.apply(null, e).forEach(function(t) {
          if (!ln(t, at)) {
            var r = {};
            r[Je] = function(c) {
              c.stopPropagation();
            }, $(t, r), $(t, st), t.src = Jn(t, "data-src");
            var o = Jn(t, "data-srcset");
            o && (t.srcset = o), P(t, "loading");
          }
        });
      }
    }
    function ao(e) {
      or(yn(e));
    }
    function so(e) {
      lo(yn(e));
    }
    function or(e) {
      P(e, "loaded"), Bt(e);
    }
    function lo(e) {
      P(e, "failed"), Bt(e);
    }
    function Bt(e) {
      P(e, at), re(e, "loading"), I(e, st);
    }
    function ei(e, t, r) {
      var o = [];
      for (r || (r = "img"); e <= t; )
        Re(C[e].querySelectorAll(r), function(c) {
          o.push(c);
        }), e++;
      return o;
    }
    function wt() {
      var e = ei.apply(null, bt());
      Oe(function() {
        xt(e, lr);
      });
    }
    function xt(e, t) {
      if (Vt || (e.forEach(function(r, o) {
        !Sn && r.complete && Bt(r), ln(r, at) && e.splice(o, 1);
      }), !e.length))
        return t();
      Oe(function() {
        xt(e, t);
      });
    }
    function ar() {
      Jt(), ni(), ir(), pr(), uo();
    }
    function fo() {
      d && ae && (oe.style[L] = ge / 1e3 + "s");
    }
    function sr(e, t) {
      for (var r = [], o = e, c = Math.min(e + t, E); o < c; o++)
        r.push(C[o].offsetHeight);
      return Math.max.apply(null, r);
    }
    function lr() {
      var e = ae ? sr(f, w) : sr(U, v), t = oe || ie;
      t.style.height !== e && (t.style.height = e + "px");
    }
    function fr() {
      F = [0];
      var e = M ? "left" : "top", t = M ? "right" : "bottom", r = C[0].getBoundingClientRect()[e];
      Re(C, function(o, c) {
        c && F.push(o.getBoundingClientRect()[e] - r), c === E - 1 && F.push(o.getBoundingClientRect()[t] - r);
      });
    }
    function ni() {
      var e = bt(), t = e[0], r = e[1];
      Re(C, function(o, c) {
        c >= t && c <= r ? _n(o, "aria-hidden") && ($e(o, ["aria-hidden", "tabindex"]), P(o, Yt)) : _n(o, "aria-hidden") || (fe(o, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), re(o, Yt));
      });
    }
    function co() {
      for (var e = f + Math.min(v, w), t = E; t--; ) {
        var r = C[t];
        t >= f && t < e ? (P(r, "tns-moving"), r.style.left = (t - f) * 100 / w + "%", P(r, Pe), re(r, ke)) : r.style.left && (r.style.left = "", P(r, ke), re(r, Pe)), re(r, et);
      }
      setTimeout(function() {
        Re(C, function(o) {
          re(o, "tns-moving");
        });
      }, 300);
    }
    function uo() {
      if (Ce && (he = nn >= 0 ? nn : Hi(), nn = -1, he !== gn)) {
        var e = pe[gn], t = pe[he];
        fe(e, {
          tabindex: "-1",
          "aria-label": vn + (gn + 1)
        }), re(e, lt), fe(t, { "aria-label": vn + (he + 1) + Gt }), $e(t, "tabindex"), P(t, lt), gn = he;
      }
    }
    function cr(e) {
      return e.nodeName.toLowerCase();
    }
    function ur(e) {
      return cr(e) === "button";
    }
    function dr(e) {
      return e.getAttribute("aria-disabled") === "true";
    }
    function _t(e, t, r) {
      e ? t.disabled = r : t.setAttribute("aria-disabled", r.toString());
    }
    function pr() {
      if (!(!Te || Mn || K)) {
        var e = Hn ? A.disabled : dr(A), t = jn ? D.disabled : dr(D), r = f <= Ee, o = !Mn && f >= de;
        r && !e && _t(Hn, A, !0), !r && e && _t(Hn, A, !1), o && !t && _t(jn, D, !0), !o && t && _t(jn, D, !1);
      }
    }
    function kt(e, t) {
      L && (e.style[L] = t);
    }
    function po() {
      return p ? (p + k) * E : F[E];
    }
    function Yn(e) {
      e == null && (e = f);
      var t = O ? k : 0;
      return y ? (q - t - (F[e + 1] - F[e] - k)) / 2 : p ? (q - p) / 2 : (w - 1) / 2;
    }
    function ti() {
      var e = O ? k : 0, t = q + e - po();
      return G && !K && (t = p ? -(p + k) * (E - 1) - Yn() : Yn(E - 1) - F[E - 1]), t > 0 && (t = 0), t;
    }
    function Tt(e) {
      e == null && (e = f);
      var t;
      if (M && !y)
        if (p)
          t = -(p + k) * e, G && (t += Yn());
        else {
          var r = X ? E : w;
          G && (e -= Yn()), t = -e * 100 / r;
        }
      else
        t = -F[e], G && y && (t += Yn());
      return Ai && (t = Math.max(t, pn)), t += M && !y && !p ? "%" : "px", t;
    }
    function Vn(e) {
      kt(g, "0s"), ii(e);
    }
    function ii(e) {
      e == null && (e = Tt()), g.style[Be] = Ie + e + hn;
    }
    function hr(e, t, r, o) {
      var c = e + w;
      K || (c = Math.min(c, E));
      for (var h = e; h < c; h++) {
        var T = C[h];
        o || (T.style.left = (h - f) * 100 / w + "%"), Ot && Ze && (T.style[Ze] = T.style[fn] = Ot * (h - e) / 1e3 + "s"), re(T, t), P(T, r), o && dn.push(T);
      }
    }
    var ho = /* @__PURE__ */ function() {
      return d ? function() {
        kt(g, ""), L || !ge ? (ii(), (!ge || !yi(g)) && Se()) : qr(g, Be, Ie, hn, Tt(), ge, Se), M || oi();
      } : function() {
        dn = [];
        var e = {};
        e[Je] = e[Ti] = Se, I(C[Ge], e), $(C[f], e), hr(Ge, Pe, et, !0), hr(f, ke, Pe), (!Je || !Ti || !ge || !yi(g)) && Se();
      };
    }();
    function ri(e, t) {
      Wt && Zt(), (f !== Ge || t) && (Y.emit("indexChanged", B()), Y.emit("transitionStart", B()), ae && wt(), le && e && ["click", "keydown"].indexOf(e.type) >= 0 && Gn(), Ke = !0, ho());
    }
    function gr(e) {
      return e.toLowerCase().replace(/-/g, "");
    }
    function Se(e) {
      if (d || Ke) {
        if (Y.emit("transitionEnd", B(e)), !d && dn.length > 0)
          for (var t = 0; t < dn.length; t++) {
            var r = dn[t];
            r.style.left = "", fn && Ze && (r.style[fn] = "", r.style[Ze] = ""), re(r, et), P(r, ke);
          }
        if (!e || !d && e.target.parentNode === g || e.target === g && gr(e.propertyName) === gr(Be)) {
          if (!Wt) {
            var o = f;
            Zt(), f !== o && (Y.emit("indexChanged", B()), Vn());
          }
          cn === "inner" && Y.emit("innerLoaded", B()), Ke = !1, Ge = f;
        }
      }
    }
    function In(e, t) {
      if (!ve)
        if (e === "prev")
          Qe(t, -1);
        else if (e === "next")
          Qe(t, 1);
        else {
          if (Ke) {
            if (tt)
              return;
            Se();
          }
          var r = ht(), o = 0;
          if (e === "first" ? o = -r : e === "last" ? o = d ? v - w - r : v - 1 - r : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(v - 1, e))), o = e - r)), !d && o && Math.abs(o) < w) {
            var c = o > 0 ? 1 : -1;
            o += f + o - v >= Ee ? v * c : v * 2 * c * -1;
          }
          f += o, d && K && (f < Ee && (f += v), f > de && (f -= v)), ht(f) !== ht(Ge) && ri(t);
        }
    }
    function Qe(e, t) {
      if (Ke) {
        if (tt)
          return;
        Se();
      }
      var r;
      if (!t) {
        e = Ne(e);
        for (var o = yn(e); o !== H && [A, D].indexOf(o) < 0; )
          o = o.parentNode;
        var c = [A, D].indexOf(o);
        c >= 0 && (r = !0, t = c === 0 ? -1 : 1);
      }
      if (Mn) {
        if (f === Ee && t === -1) {
          In("last", e);
          return;
        } else if (f === de && t === 1) {
          In("first", e);
          return;
        }
      }
      t && (f += un * t, y && (f = Math.floor(f)), ri(r || e && e.type === "keydown" ? e : null));
    }
    function go(e) {
      if (Ke) {
        if (tt)
          return;
        Se();
      }
      e = Ne(e);
      for (var t = yn(e), r; t !== Q && !_n(t, "data-nav"); )
        t = t.parentNode;
      if (_n(t, "data-nav")) {
        var r = nn = Number(Jn(t, "data-nav")), o = p || y ? r * v / me : r * w, c = Wn ? r : Math.min(Math.ceil(o), v - 1);
        In(c, e), he === r && (le && Gn(), nn = -1);
      }
    }
    function Ct() {
      ft = setInterval(function() {
        Qe(null, $i);
      }, Pt), le = !0;
    }
    function Et() {
      clearInterval(ft), le = !1;
    }
    function vr(e, t) {
      fe(R, { "data-action": e }), R.innerHTML = qn[0] + e + qn[1] + t;
    }
    function Mt() {
      Ct(), R && vr("stop", qe[1]);
    }
    function Gn() {
      Et(), R && vr("start", qe[0]);
    }
    function vo() {
      J && !le && (Mt(), mn = !1);
    }
    function mo() {
      le && (Gn(), mn = !0);
    }
    function mr() {
      le ? (Gn(), mn = !0) : (Mt(), mn = !1);
    }
    function yo() {
      i.hidden ? le && (Et(), ut = !0) : ut && (Ct(), ut = !1);
    }
    function bo() {
      le && (Et(), ct = !0);
    }
    function wo() {
      ct && (Ct(), ct = !1);
    }
    function xo(e) {
      e = Ne(e);
      var t = [s.LEFT, s.RIGHT].indexOf(e.keyCode);
      t >= 0 && Qe(e, t === 0 ? -1 : 1);
    }
    function _o(e) {
      e = Ne(e);
      var t = [s.LEFT, s.RIGHT].indexOf(e.keyCode);
      t >= 0 && (t === 0 ? A.disabled || Qe(e, -1) : D.disabled || Qe(e, 1));
    }
    function yr(e) {
      e.focus();
    }
    function ko(e) {
      e = Ne(e);
      var t = i.activeElement;
      if (_n(t, "data-nav")) {
        var r = [s.LEFT, s.RIGHT, s.ENTER, s.SPACE].indexOf(e.keyCode), o = Number(Jn(t, "data-nav"));
        r >= 0 && (r === 0 ? o > 0 && yr(pe[o - 1]) : r === 1 ? o < me - 1 && yr(pe[o + 1]) : (nn = o, In(o, e)));
      }
    }
    function Ne(e) {
      return e = e || a.event, an(e) ? e.changedTouches[0] : e;
    }
    function yn(e) {
      return e.target || a.event.srcElement;
    }
    function an(e) {
      return e.type.indexOf("touch") >= 0;
    }
    function br(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }
    function wr() {
      return Wr(Pr(xe.y - tn.y, xe.x - tn.x), it) === n.axis;
    }
    function xr(e) {
      if (Ke) {
        if (tt)
          return;
        Se();
      }
      J && le && Et(), rn = !0, ye && (Lt(ye), ye = null);
      var t = Ne(e);
      Y.emit(an(e) ? "touchStart" : "dragStart", B(e)), !an(e) && ["img", "a"].indexOf(cr(yn(e))) >= 0 && br(e), xe.x = tn.x = t.clientX, xe.y = tn.y = t.clientY, d && (dt = parseFloat(g.style[Be].replace(Ie, "")), kt(g, "0s"));
    }
    function _r(e) {
      if (rn) {
        var t = Ne(e);
        xe.x = t.clientX, xe.y = t.clientY, d ? ye || (ye = Oe(function() {
          kr(e);
        })) : (Me === "?" && (Me = wr()), Me && (Fn = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Fn && e.preventDefault();
      }
    }
    function kr(e) {
      if (!Me) {
        rn = !1;
        return;
      }
      if (Lt(ye), rn && (ye = Oe(function() {
        kr(e);
      })), Me === "?" && (Me = wr()), Me) {
        !Fn && an(e) && (Fn = !0);
        try {
          e.type && Y.emit(an(e) ? "touchMove" : "dragMove", B(e));
        } catch {
        }
        var t = dt, r = Kt(xe, tn);
        if (!M || p || y)
          t += r, t += "px";
        else {
          var o = X ? r * w * 100 / ((q + k) * E) : r * 100 / (q + k);
          t += o, t += "%";
        }
        g.style[Be] = Ie + t + hn;
      }
    }
    function St(e) {
      if (rn) {
        ye && (Lt(ye), ye = null), d && kt(g, ""), rn = !1;
        var t = Ne(e);
        xe.x = t.clientX, xe.y = t.clientY;
        var r = Kt(xe, tn);
        if (Math.abs(r)) {
          if (!an(e)) {
            var o = yn(e);
            $(o, { click: function c(h) {
              br(h), I(o, { click: c });
            } });
          }
          d ? ye = Oe(function() {
            if (M && !y) {
              var c = -r * w / (q + k);
              c = r > 0 ? Math.floor(c) : Math.ceil(c), f += c;
            } else {
              var h = -(dt + r);
              if (h <= 0)
                f = Ee;
              else if (h >= F[E - 1])
                f = de;
              else
                for (var T = 0; T < E && h >= F[T]; )
                  f = T, h > F[T] && r < 0 && (f += 1), T++;
            }
            ri(e, r), Y.emit(an(e) ? "touchEnd" : "dragEnd", B(e));
          }) : Me && Qe(e, r > 0 ? -1 : 1);
        }
      }
      n.preventScrollOnTouch === "auto" && (Fn = !1), it && (Me = "?"), J && !le && Ct();
    }
    function oi() {
      var e = oe || ie;
      e.style.height = F[f + w] - F[f] + "px";
    }
    function Tr() {
      var e = p ? (p + k) * v / q : v / w;
      return Math.min(Math.ceil(e), v);
    }
    function ai() {
      if (!(!Ce || Wn) && me !== en) {
        var e = en, t = me, r = ue;
        for (en > me && (e = me, t = en, r = ce); e < t; )
          r(pe[e]), e++;
        en = me;
      }
    }
    function B(e) {
      return {
        container: g,
        slideItems: C,
        navContainer: Q,
        navItems: pe,
        controlsContainer: H,
        hasControls: ot,
        prevButton: A,
        nextButton: D,
        items: w,
        slideBy: un,
        cloneCount: U,
        slideCount: v,
        slideCountNew: E,
        index: f,
        indexCached: Ge,
        displayIndex: Wi(),
        navCurrentIndex: he,
        navCurrentIndexCached: gn,
        pages: me,
        pagesCached: en,
        sheet: S,
        isOn: En,
        event: e || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: B,
      events: Y,
      goTo: In,
      play: vo,
      pause: mo,
      isOn: En,
      updateSliderHeight: lr,
      refresh: Gi,
      destroy: io,
      rebuild: function() {
        return _i(At(n, Ei));
      }
    };
  };
  const Yr = `.crs_popup_wrapper {\r
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
  overflow: hidden;\r
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
  padding: 20px 10px;\r
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
  font-weight: 700;\r
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
  .popup_content {\r
    padding: 16px;\r
  }\r
\r
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
`, Vr = "https://conversionratestore.github.io/projects/grantme", Bn = {
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
  ], Ir = {
    student: {
      grade10: {
        h3: "Are You Ready For University Yet?",
        p1: "Students who start preparing in <b>Grades 9 and 10</b> are more likely to gain admission to their top-choice school and secure funding.",
        p2: "We’ll help you create your education plan, prepare extracurriculars, establish initiator roles, get into the right courses, and achieve all your goals.",
        p3: "Start with a free consultation.",
        btn: "Book My Consultation Now"
      },
      grade11: {
        h3: "Are You Ready For University?",
        p1: `Developing a stand-out student resume can take <b>up to 24 months</b>, and applications open in ${8 - (/* @__PURE__ */ new Date()).getMonth()} months!`,
        p2: "We'll help you catch up and excel in your university and scholarship applications.",
        p3: "Get ahead of the bell curve with a free consultation.",
        btn: "Book My Consultation Now"
      },
      grade12: {
        h3: "Don’t Be Late For Early Admissions!",
        p1: `Developing a stand-out student resume can take <b>up to 24 months</b>, and applications open in ${8 - (/* @__PURE__ */ new Date()).getMonth()} months!`,
        p2: "We’ll help you apply faster so you can win scholarships and get into top universities.",
        p3: "Start with a free consultation.",
        btn: "Book My Consultation Now"
      }
    },
    parent: {
      grade10: {
        h3: "Is Your Child Ready For University?",
        p1: "Students who start preparing in <b>Grades 9 and 10</b> are more likely to gain admission to their top-choice school and secure funding.",
        p2: "We’ll help your child create an education plan, prepare extracurriculars, establish initiator roles, get into the right courses, and achieve all their goals.",
        p3: "Start with a free consultation.",
        btn: "Book My Consultation Now"
      },
      grade11: {
        h3: "Is Your Child Ready For University?",
        p1: `Developing a stand-out student resume can take <b>up to 24 months</b>, and applications open in ${8 - (/* @__PURE__ */ new Date()).getMonth()} months!`,
        p2: "We’ll help your child catch up quickly so they can excel in their university and scholarship applications.",
        p3: "Get ahead of the bell curve with a free consultation.",
        btn: "Book My Consultation Now"
      },
      grade12: {
        h3: "Is Your Child Late For Early Admissions?",
        p1: `Developing a stand-out student resume can take <b>up to 24 months</b>, and applications open in ${8 - (/* @__PURE__ */ new Date()).getMonth()} months!`,
        p2: "We’ll help your child apply faster so they can win scholarships and get into top universities.",
        p3: "Start with a free consultation.",
        btn: "Book My Consultation Now"
      }
    }
  }, Gr = (
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
  <span class="back">${Bn.back}Back</span>
  <h2>Share My Results with Parents/Guardians</h2>
  <p>We'll email a link to your parents or guardians for accessing the page with your assessment results, or we can call them to provide more details.</p>
  <div class="popup_form">
  <label>
    <input type="email" placeholder="Your parents email">
    ${Bn.mail}
  </label>
  <label>
    <input type="tel" placeholder="Your parents phone">
    ${Bn.phone}
  </label>
  </div>
  <button class="main">Share Results</button>
</div>
`
  ), Kr = (n, i) => {
    const a = Ir[n][i], s = (
      /*HTML*/
      `
    <div class="popup_main active">
      <h3>${a.h3}</h3>
      <p>${a.p1}</p>
      <div >
        <img src="${Vr}/img/grantme_logo.png" alt="logo" />
        <p>
          ${a.p2}
        </p>
      </div>
      <p>${a.p3}</p>
      <button class="main">${a.btn}</button>
      ${n === "student" ? (
        /*HTML*/
        '<button class="secondary">Share results with parents/Guardians</button>'
      ) : ""}
    </div>
    ${n === "student" ? Gr : ""}
  `
    );
    return (
      /*HTML*/
      `
  <div class="crs_popup_wrapper">
    <style>
      ${Yr}
    </style>
    <div class="popup_root">
      <span class="popup_close">${Bn.close}</span>
      <div class="popup_content">
        ${s}
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
  Er({ name: "EIP Grade Type", dev: "YK" }), Sr(["https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css"]);
  class Ur {
    constructor() {
      this.grade = this.checkGrade(), this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.userType = window.location.href.includes("parent") ? "parent" : "student", this.grade !== "none_grade" && this.init();
    }
    init() {
      this.renderPopup(), this.bindEvents(), this.bindTriggers(), this.bindTracking();
    }
    renderPopup() {
      document.body.insertAdjacentHTML("beforeend", Kr(this.userType, this.grade)), this.slider = _i({
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
      return i.includes("Grade 9") ? "grade10" : i.includes("Grade 11") ? "grade11" : i.includes("Grade 12") ? "grade12" : "none_grade";
    }
    bindEvents() {
      const i = ee(".crs_popup_wrapper .popup_close"), a = ee(".crs_popup_wrapper"), s = ee(".popup_main button.main");
      if (i.on("click", () => {
        a.removeClass("show"), ze(`exp_eip_grade_type_close_${this.userType}_${this.grade}`, "Close button", "click", "Main Popup");
      }), a.on("click", (W) => {
        console.log(ee(W.target) === a), W.target === a.elements[0] && (a.removeClass("show"), ze(`exp_eip_grade_type_close_bg_${this.userType}_${this.grade}`, "Close bg", "click", "Main Popup"));
      }), s.on("click", () => {
        a.removeClass("show"), Lr("#newScheduleBox"), ze(`exp_eip_grade_type_main_btn_${this.userType}_${this.grade}`, "Main button", "click", "Main Popup");
      }), this.userType === "parent")
        return;
      const l = ee(".popup2_1 button.main"), u = ee(".crs_popup_wrapper span.back"), x = ee(".crs_popup_wrapper button.secondary"), b = ee(".popup_main"), _ = ee(".popup2_1");
      ee(".popup2_1 input").each((W) => {
        const X = W;
        ee(W).on("input", () => {
          var Ae;
          X.value && ((Ae = X.closest("label")) == null || Ae.classList.remove("error"));
        }), W.addEventListener("click", () => {
          ze(
            `exp_eip_grade_type_input_${this.userType}_${this.grade}`,
            `${X.type} input`,
            "input",
            "Second Popup"
          );
        });
      }), x.on("click", () => {
        b.removeClass("active"), _.addClass("active"), ze(`exp_eip_grade_type_share_${this.userType}_${this.grade}`, "Share button", "click", "Main Popup");
      }), u.on("click", () => {
        b.addClass("active"), _.removeClass("active"), ze(`exp_eip_grade_type_back_${this.userType}_${this.grade}`, "Back button", "click", "Second Popup");
      }), l.on("click", () => {
        const W = ee(".popup2_1 input");
        let X = !0;
        W.each((Ae) => {
          var Ze, Xe, fn;
          let L = Ae;
          !L.value && L && ((Ze = L.closest("label")) == null || Ze.classList.add("error"), X = !1), L.type === "email" && !L.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) && ((Xe = L.closest("label")) == null || Xe.classList.add("error"), X = !1), L.type === "tel" && !L.value.match(/^\d{8,12}$/) && ((fn = L.closest("label")) == null || fn.classList.add("error"), X = !1);
        }), X && (a.removeClass("show"), ze(
          `exp_eip_grade_type_submit_form_${this.userType}_${this.grade}`,
          `Email: ${W[0].value}, Phone: ${W[1].value}`,
          "submit",
          "Second Popup"
        ));
      });
    }
    bindTriggers() {
      ee(".crs_popup_wrapper"), document.body.addEventListener("mouseleave", (s) => {
        this.showPopup();
      }), this.device === "mobile" && Ar(window, (s, l) => {
        s > 150 && l === "up" && this.showPopup();
      });
      const i = this.device === "desktop" ? 20 : 30, a = setTimeout(() => {
        this.showPopup();
      }, i * 1e3);
      ee("body").on("click", ".day.has-event", () => {
        clearTimeout(a);
      }), setInterval(() => {
        console.log(a);
      }, 1e3);
    }
    showPopup() {
      if (localStorage.getItem("showPopup"))
        return;
      ee(".crs_popup_wrapper").addClass("show"), localStorage.setItem("showPopup", "true");
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
