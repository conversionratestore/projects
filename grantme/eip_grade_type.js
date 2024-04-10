(function() {
  "use strict";
  const Ne = (n, i, a, s = "") => {
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
        l.addEventListener(i, function(c) {
          var x;
          if (a) {
            let b = (x = c.target) == null ? void 0 : x.closest(a);
            l.contains(b) && (s == null || s.call(b, c));
          } else
            s == null || s.call(l, c);
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
    style(i, a) {
      const s = i.split("-").map((l, c) => c === 0 ? l : l.charAt(0).toUpperCase() + l.slice(1)).join("");
      return this.elements.forEach(function(l) {
        l.style[s] = a;
      }), this;
    }
  }
  const G = (n) => new Mr(n), Lr = async (n) => {
    const i = (a) => new Promise((s, l) => {
      const c = a.split(".").pop();
      if (c === "js") {
        if (Array.from(document.scripts).map((_) => _.src.toLowerCase()).includes(a.toLowerCase()))
          return console.log(`Script ${a} allready downloaded!`), s("");
        const b = document.createElement("script");
        b.src = a, b.onload = s, b.onerror = l, document.head.appendChild(b);
      } else if (c === "css") {
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
  }, hi = (n, i, a, s, l = 1e3, c = 0.5) => {
    let x, b;
    if (x = new IntersectionObserver(
      function(_) {
        _[0].isIntersecting === !0 ? b = setTimeout(() => {
          Ne(
            i,
            _[0].target.dataset.visible || s || "",
            "view",
            a
          ), x.disconnect();
        }, l) : (console.log("Element is not fully visible"), clearTimeout(b));
      },
      { threshold: [c] }
    ), typeof n == "string") {
      const _ = document.querySelector(n);
      _ && x.observe(_);
    } else
      x.observe(n);
  }, Sr = (n) => {
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
    let s, l, c, x, b;
    function _() {
      s = null, x = 0;
    }
    _(), a.addEventListener("scroll", function() {
      l = n === window ? this.scrollY : this.scrollTop, b = l > s ? "down" : "up", s != null && (x = l - s), s = l, clearTimeout(c), c = setTimeout(_, 50), i(Math.abs(x), b);
    });
  };
  var Zn = window, Oe = Zn.requestAnimationFrame || Zn.webkitRequestAnimationFrame || Zn.mozRequestAnimationFrame || Zn.msRequestAnimationFrame || function(n) {
    return setTimeout(n, 16);
  }, gi = window, St = gi.cancelAnimationFrame || gi.mozCancelAnimationFrame || function(n) {
    clearTimeout(n);
  };
  function At() {
    for (var n, i, a, s = arguments[0] || {}, l = 1, c = arguments.length; l < c; l++)
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
  function Xn(n) {
    var i = "";
    return n.fake && (i = xn.style.overflow, n.style.background = "", n.style.overflow = xn.style.overflow = "hidden", xn.appendChild(n)), i;
  }
  function Jn(n, i) {
    n.fake && (n.remove(), xn.style.overflow = i, xn.offsetHeight);
  }
  function zr() {
    var n = document, i = Qn(), a = Xn(i), s = n.createElement("div"), l = !1;
    i.appendChild(s);
    try {
      for (var c = "(10px * 10)", x = ["calc" + c, "-moz-calc" + c, "-webkit-calc" + c], b, _ = 0; _ < 3; _++)
        if (b = x[_], s.style.width = b, s.offsetWidth === 100) {
          l = b.replace(c, "");
          break;
        }
    } catch {
    }
    return i.fake ? Jn(i, a) : s.remove(), l;
  }
  function Nr() {
    var n = document, i = Qn(), a = Xn(i), s = n.createElement("div"), l = n.createElement("div"), c = "", x = 70, b = 3, _ = !1;
    s.className = "tns-t-subp2", l.className = "tns-t-ct";
    for (var ne = 0; ne < x; ne++)
      c += "<div></div>";
    return l.innerHTML = c, s.appendChild(l), i.appendChild(s), _ = Math.abs(s.getBoundingClientRect().left - l.children[x - b].getBoundingClientRect().left) < 2, i.fake ? Jn(i, a) : s.remove(), _;
  }
  function Or() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var n = document, i = Qn(), a = Xn(i), s = n.createElement("div"), l = n.createElement("style"), c = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", x;
    return l.type = "text/css", s.className = "tns-mq-test", i.appendChild(l), i.appendChild(s), l.styleSheet ? l.styleSheet.cssText = c : l.appendChild(n.createTextNode(c)), x = window.getComputedStyle ? window.getComputedStyle(s).position : s.currentStyle.position, i.fake ? Jn(i, a) : s.remove(), x === "absolute";
  }
  function Rr(n, i) {
    var a = document.createElement("style");
    return n && a.setAttribute("media", n), i && a.setAttribute("nonce", i), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function Se(n, i, a, s) {
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
  }, W = Dt ? function(n, i) {
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
  function Bn(n, i) {
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
    for (var c = 0; c < n.length; c++) {
      var x = n[c];
      if (l.style[x] !== void 0)
        return x;
    }
    return !1;
  }
  function Hr(n) {
    if (!n || !window.getComputedStyle)
      return !1;
    var i = document, a = Qn(), s = Xn(a), l = i.createElement("p"), c, x = n.length > 9 ? "-" + n.slice(0, -9).toLowerCase() + "-" : "";
    return x += "transform", a.insertBefore(l, null), l.style[n] = "translate3d(1px,1px,1px)", c = window.getComputedStyle(l).getPropertyValue(x), a.fake ? Jn(a, s) : l.remove(), c !== void 0 && c.length > 0 && c !== "none";
  }
  function bi(n, i) {
    var a = !1;
    return /^Webkit/.test(n) ? a = "webkit" + i + "End" : /^O/.test(n) ? a = "o" + i + "End" : n && (a = i.toLowerCase() + "end"), a;
  }
  var wi = !1;
  try {
    var Fr = Object.defineProperty({}, "passive", {
      get: function() {
        wi = !0;
      }
    });
    window.addEventListener("test", null, Fr);
  } catch {
  }
  var xi = wi ? { passive: !0 } : !1;
  function P(n, i, a) {
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
  function qr(n, i, a, s, ne, c, x) {
    var b = Math.min(c, 10), _ = ne.indexOf("%") >= 0 ? "%" : "px", ne = ne.replace(_, ""), O = Number(n.style[i].replace(a, "").replace(s, "").replace(_, "")), J = (ne - O) / c * b;
    setTimeout(Ae, b);
    function Ae() {
      c -= b, O += J, n.style[i] = a + O + _ + s, c > 0 ? setTimeout(Ae, b) : x();
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
    }, l = {}, c = n.useLocalStorage;
    if (c) {
      var x = navigator.userAgent, b = /* @__PURE__ */ new Date();
      try {
        l = a.localStorage, l ? (l.setItem(b, b), c = l.getItem(b) == b, l.removeItem(b)) : c = !1, c || (l = {});
      } catch {
        c = !1;
      }
      c && (l.tnsApp && l.tnsApp !== x && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
        l.removeItem(e);
      }), localStorage.tnsApp = x);
    }
    var _ = l.tC ? be(l.tC) : we(l, "tC", zr(), c), ne = l.tPL ? be(l.tPL) : we(l, "tPL", Nr(), c), O = l.tMQ ? be(l.tMQ) : we(l, "tMQ", Or(), c), J = l.tTf ? be(l.tTf) : we(l, "tTf", kn("transform"), c), Ae = l.t3D ? be(l.t3D) : we(l, "t3D", Hr(J), c), S = l.tTDu ? be(l.tTDu) : we(l, "tTDu", kn("transitionDuration"), c), Qe = l.tTDe ? be(l.tTDe) : we(l, "tTDe", kn("transitionDelay"), c), Xe = l.tADu ? be(l.tADu) : we(l, "tADu", kn("animationDuration"), c), fn = l.tADe ? be(l.tADe) : we(l, "tADe", kn("animationDelay"), c), Je = l.tTE ? be(l.tTE) : we(l, "tTE", bi(S, "Transition"), c), Ci = l.tAE ? be(l.tAE) : we(l, "tAE", bi(Xe, "Animation"), c), Ti = a.console && typeof a.console.warn == "function", zt = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Ei = {};
    if (zt.forEach(function(e) {
      if (typeof n[e] == "string") {
        var t = n[e], r = i.querySelector(t);
        if (Ei[e] = t, r && r.nodeName)
          n[e] = r;
        else {
          Ti && console.warn("Can't find", n[e]);
          return;
        }
      }
    }), n.container.children.length < 1) {
      Ti && console.warn("No slides found in", n.container);
      return;
    }
    var z = n.responsive, cn = n.nested, d = n.mode === "carousel";
    if (z) {
      0 in z && (n = At(n, z[0]), delete z[0]);
      var Nt = {};
      for (var Mi in z) {
        var Tn = z[Mi];
        Tn = typeof Tn == "number" ? { items: Tn } : Tn, Nt[Mi] = Tn;
      }
      z = Nt, Nt = null;
    }
    function Li(e) {
      for (var t in e)
        d || (t === "slideBy" && (e[t] = "page"), t === "edgePadding" && (e[t] = !1), t === "autoHeight" && (e[t] = !1)), t === "responsive" && Li(e[t]);
    }
    if (d || Li(n), !d) {
      n.axis = "horizontal", n.slideBy = "page", n.edgePadding = !1;
      var Pe = n.animateIn, et = n.animateOut, Ot = n.animateDelay, ke = n.animateNormal;
    }
    var M = n.axis === "horizontal", te = i.createElement("div"), ie = i.createElement("div"), oe, g = n.container, Rt = g.parentNode, Si = g.outerHTML, T = g.children, v = T.length, En, nt = ji(), Mn = !1;
    z && Bi(), d && (g.className += " tns-vpfix");
    var y = n.autoWidth, p = m("fixedWidth"), R = m("edgePadding"), k = m("gutter"), q = Yi(), K = m("center"), w = y ? 1 : Math.floor(m("items")), un = m("slideBy"), $t = n.viewportMax || n.fixedWidthViewportWidth, We = m("arrowKeys"), ge = m("speed"), Ln = n.rewind, U = Ln ? !1 : n.loop, ae = m("autoHeight"), Ce = m("controls"), He = m("controlsText"), Te = m("nav"), Fe = m("touch"), je = m("mouseDrag"), B = m("autoplay"), Pt = m("autoplayTimeout"), qe = m("autoplayText"), Ye = m("autoplayHoverPause"), Ve = m("autoplayResetOnVisibility"), L = Rr(null, m("nonce")), Sn = n.lazyload, Qr = n.lazyloadSelector, H, dn = [], Z = U ? eo() : 0, E = d ? v + Z * 2 : v + Z, Ai = !!((p || y) && !U), pn = p ? ti() : null, Wt = !d || !U, Be = M ? "left" : "top", Ie = "", hn = "", An = /* @__PURE__ */ function() {
      return p ? function() {
        return K && !U ? v - 1 : Math.ceil(-pn / (p + k));
      } : y ? function() {
        for (var e = 0; e < E; e++)
          if (H[e] >= -pn)
            return e;
      } : function() {
        return K && d && !U ? v - 1 : U || d ? Math.max(0, E - Math.ceil(w)) : E - 1;
      };
    }(), f = Hi(m("startIndex")), Ge = f;
    Wi();
    var Ee = 0, de = y ? null : An(), tt = n.preventActionWhenRunning, it = n.swipeAngle, Me = it ? "?" : !0, Ke = !1, Ht = n.onInit, Y = new jr(), Ue = " tns-slider tns-" + n.mode, N = g.id || Dr(), se = m("disable"), Dn = !1, rt = n.freezable, ve = rt && !y ? Zt() : !1, zn = !1, Nn = {
      click: Ze,
      keydown: ko
    }, Ft = {
      click: vo,
      keydown: Co
    }, On = {
      mouseover: wo,
      mouseout: xo
    }, Rn = { visibilitychange: bo }, $n = { keydown: _o }, Pn = {
      touchstart: xr,
      touchmove: _r,
      touchend: Lt,
      touchcancel: Lt
    }, Wn = {
      mousedown: xr,
      mousemove: _r,
      mouseup: Lt,
      mouseleave: Lt
    }, ot = De("controls"), jt = De("nav"), Hn = y ? !0 : n.navAsThumbnails, qt = De("autoplay"), Di = De("touch"), zi = De("mouseDrag"), Yt = "tns-slide-active", Ni = "tns-slide-cloned", at = "tns-complete", st = {
      load: so,
      error: lo
    }, Vt, It, Fn = n.preventScrollOnTouch === "force";
    if (ot)
      var F = n.controlsContainer, Oi = n.controlsContainer ? n.controlsContainer.outerHTML : "", A = n.prevButton, D = n.nextButton, Xr = n.prevButton ? n.prevButton.outerHTML : "", Jr = n.nextButton ? n.nextButton.outerHTML : "", jn, qn;
    if (jt)
      var Q = n.navContainer, Ri = n.navContainer ? n.navContainer.outerHTML : "", pe, me = y ? v : Cr(), en = 0, nn = -1, he = Fi(), gn = he, lt = "tns-nav-active", vn = "Carousel Page ", Gt = " (Current Slide)";
    if (qt)
      var $i = n.autoplayDirection === "forward" ? 1 : -1, $ = n.autoplayButton, Pi = n.autoplayButton ? n.autoplayButton.outerHTML : "", Yn = ["<span class='tns-visually-hidden'>", " animation</span>"], ft, le, ct, mn, ut;
    if (Di || zi)
      var tn = {}, xe = {}, dt, rn = !1, ye, Kt = M ? function(e, t) {
        return e.x - t.x;
      } : function(e, t) {
        return e.y - t.y;
      };
    y || pt(se || ve), J && (Be = J, Ie = "translate", Ae ? (Ie += M ? "3d(" : "3d(0px, ", hn = M ? ", 0px, 0px)" : ", 0px)") : (Ie += M ? "X(" : "Y(", hn = ")")), d && (g.className = g.className.replace("tns-vpfix", "")), to(), io(), Gi();
    function pt(e) {
      e && (Ce = Te = Fe = je = We = B = Ye = Ve = !1);
    }
    function Wi() {
      for (var e = d ? f - Z : f; e < 0; )
        e += v;
      return e % v + 1;
    }
    function Hi(e) {
      return e = e ? Math.max(0, Math.min(U ? v - 1 : v - w, e)) : 0, d ? e + Z : e;
    }
    function ht(e) {
      for (e == null && (e = f), d && (e -= Z); e < 0; )
        e += v;
      return Math.floor(e % v);
    }
    function Fi() {
      var e = ht(), t;
      return t = Hn ? e : p || y ? Math.ceil((e + 1) * me / v - 1) : Math.floor(e / w), !U && d && f === de && (t = me - 1), t;
    }
    function Br() {
      if (y || p && !$t)
        return v - 1;
      var e = p ? "fixedWidth" : "items", t = [];
      if ((p || n[e] < v) && t.push(n[e]), z)
        for (var r in z) {
          var o = z[r][e];
          o && (p || o < v) && t.push(o);
        }
      return t.length || t.push(0), Math.ceil(p ? $t / Math.min.apply(null, t) : Math.max.apply(null, t));
    }
    function eo() {
      var e = Br(), t = d ? Math.ceil((e * 5 - v) / 2) : e * 4 - v;
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
      var e = R ? R * 2 - k : 0;
      return qi(Rt) - e;
    }
    function De(e) {
      if (n[e])
        return !0;
      if (z) {
        for (var t in z)
          if (z[t][e])
            return !0;
      }
      return !1;
    }
    function m(e, t) {
      if (t == null && (t = nt), e === "items" && p)
        return Math.floor((q + k) / (p + k)) || 1;
      var r = n[e];
      if (z)
        for (var o in z)
          t >= parseInt(o) && e in z[o] && (r = z[o][e]);
      return e === "slideBy" && r === "page" && (r = m("items")), !d && (e === "slideBy" || e === "items") && (r = Math.floor(r)), r;
    }
    function no(e) {
      return _ ? _ + "(" + e * 100 + "% / " + E + ")" : e * 100 / E + "%";
    }
    function gt(e, t, r, o, u) {
      var h = "";
      if (e !== void 0) {
        var C = e;
        t && (C -= t), h = M ? "margin: 0 " + C + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + C + "px 0;";
      } else if (t && !r) {
        var V = "-" + t + "px", X = M ? V + " 0 0" : "0 " + V + " 0";
        h = "margin: 0 " + X + ";";
      }
      return !d && u && S && o && (h += on(o)), h;
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
        var u = d ? E : r;
        o = _ ? _ + "(100% / " + u + ")" : 100 / u + "%";
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
      return Vi(S, 18) + "transition-duration:" + e / 1e3 + "s;";
    }
    function Ii(e) {
      return Vi(Xe, 17) + "animation-duration:" + e / 1e3 + "s;";
    }
    function to() {
      var e = "tns-outer", t = "tns-inner";
      if (De("gutter"), te.className = e, ie.className = t, te.id = N + "-ow", ie.id = N + "-iw", g.id === "" && (g.id = N), Ue += ne || y ? " tns-subpixel" : " tns-no-subpixel", Ue += _ ? " tns-calc" : " tns-no-calc", y && (Ue += " tns-autowidth"), Ue += " tns-" + n.axis, g.className += Ue, d ? (oe = i.createElement("div"), oe.id = N + "-mw", oe.className = "tns-ovh", te.appendChild(oe), oe.appendChild(ie)) : te.appendChild(ie), ae) {
        var r = oe || ie;
        r.className += " tns-ah";
      }
      if (Rt.insertBefore(te, g), ie.appendChild(g), Re(T, function(j, bn) {
        W(j, "tns-item"), j.id || (j.id = N + "-item" + bn), !d && ke && W(j, ke), fe(j, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), Z) {
        for (var o = i.createDocumentFragment(), u = i.createDocumentFragment(), h = Z; h--; ) {
          var C = h % v, V = T[C].cloneNode(!0);
          if (W(V, Ni), $e(V, "id"), u.insertBefore(V, u.firstChild), d) {
            var X = T[v - 1 - C].cloneNode(!0);
            W(X, Ni), $e(X, "id"), o.appendChild(X);
          }
        }
        g.insertBefore(o, g.firstChild), g.appendChild(u), T = g.children;
      }
    }
    function Gi() {
      if (De("autoHeight") || y || !M) {
        var e = g.querySelectorAll("img");
        Re(e, function(t) {
          var r = t.src;
          Sn || (r && r.indexOf("data:image") < 0 ? (t.src = "", P(t, st), W(t, "loading"), t.src = r) : or(t));
        }), Oe(function() {
          xt(mi(e), function() {
            Vt = !0;
          });
        }), De("autoHeight") && (e = ei(f, Math.min(f + w - 1, E - 1))), Sn ? Ki() : Oe(function() {
          xt(mi(e), Ki);
        });
      } else
        d && In(), Zi(), Qi();
    }
    function Ki() {
      if (y && v > 1) {
        var e = U ? f : v - 1;
        (function t() {
          var r = T[e].getBoundingClientRect().left, o = T[e - 1].getBoundingClientRect().right;
          Math.abs(r - o) <= 1 ? Ui() : setTimeout(function() {
            t();
          }, 16);
        })();
      } else
        Ui();
    }
    function Ui() {
      (!M || y) && (fr(), y ? (pn = ti(), rt && (ve = Zt()), de = An(), pt(se || ve)) : oi()), d && In(), Zi(), Qi();
    }
    function io() {
      if (!d)
        for (var e = f, t = f + Math.min(v, w); e < t; e++) {
          var r = T[e];
          r.style.left = (e - f) * 100 / w + "%", W(r, Pe), re(r, ke);
        }
      if (M && (ne || y ? (Se(L, "#" + N + " > .tns-item", "font-size:" + a.getComputedStyle(T[0]).fontSize + ";", _e(L)), Se(L, "#" + N, "font-size:0;", _e(L))) : d && Re(T, function(fi, ci) {
        fi.style.marginLeft = no(ci);
      })), O) {
        if (S) {
          var o = oe && n.autoHeight ? on(n.speed) : "";
          Se(L, "#" + N + "-mw", o, _e(L));
        }
        o = gt(n.edgePadding, n.gutter, n.fixedWidth, n.speed, n.autoHeight), Se(L, "#" + N + "-iw", o, _e(L)), d && (o = M && !y ? "width:" + vt(n.fixedWidth, n.gutter, n.items) + ";" : "", S && (o += on(ge)), Se(L, "#" + N, o, _e(L))), o = M && !y ? mt(n.fixedWidth, n.gutter, n.items) : "", n.gutter && (o += yt(n.gutter)), d || (S && (o += on(ge)), Xe && (o += Ii(ge))), o && Se(L, "#" + N + " > .tns-item", o, _e(L));
      } else {
        co(), ie.style.cssText = gt(R, k, p, ae), d && M && !y && (g.style.width = vt(p, k, w));
        var o = M && !y ? mt(p, k, w) : "";
        k && (o += yt(k)), o && Se(L, "#" + N + " > .tns-item", o, _e(L));
      }
      if (z && O)
        for (var u in z) {
          u = parseInt(u);
          var h = z[u], o = "", C = "", V = "", X = "", j = "", bn = y ? null : m("items", u), Un = m("fixedWidth", u), sn = m("speed", u), si = m("edgePadding", u), li = m("autoHeight", u), wn = m("gutter", u);
          S && oe && m("autoHeight", u) && "speed" in h && (C = "#" + N + "-mw{" + on(sn) + "}"), ("edgePadding" in h || "gutter" in h) && (V = "#" + N + "-iw{" + gt(si, wn, Un, sn, li) + "}"), d && M && !y && ("fixedWidth" in h || "items" in h || p && "gutter" in h) && (X = "width:" + vt(Un, wn, bn) + ";"), S && "speed" in h && (X += on(sn)), X && (X = "#" + N + "{" + X + "}"), ("fixedWidth" in h || p && "gutter" in h || !d && "items" in h) && (j += mt(Un, wn, bn)), "gutter" in h && (j += yt(wn)), !d && "speed" in h && (S && (j += on(sn)), Xe && (j += Ii(sn))), j && (j = "#" + N + " > .tns-item{" + j + "}"), o = C + V + X + j, o && L.insertRule("@media (min-width: " + u / 16 + "em) {" + o + "}", L.cssRules.length);
        }
    }
    function Zi() {
      if (ni(), te.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + rr() + "</span>  of " + v + "</div>"), It = te.querySelector(".tns-liveregion .current"), qt) {
        var e = B ? "stop" : "start";
        $ ? fe($, { "data-action": e }) : n.autoplayButtonOutput && (te.insertAdjacentHTML(Ut(n.autoplayPosition), '<button type="button" data-action="' + e + '">' + Yn[0] + e + Yn[1] + qe[0] + "</button>"), $ = te.querySelector("[data-action]")), $ && P($, { click: mr }), B && (Mt(), Ye && P(g, On), Ve && P(g, Rn));
      }
      if (jt) {
        if (Q)
          fe(Q, { "aria-label": "Carousel Pagination" }), pe = Q.children, Re(pe, function(C, V) {
            fe(C, {
              "data-nav": V,
              tabindex: "-1",
              "aria-label": vn + (V + 1),
              "aria-controls": N
            });
          });
        else {
          for (var t = "", r = Hn ? "" : 'style="display:none"', o = 0; o < v; o++)
            t += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + N + '" ' + r + ' aria-label="' + vn + (o + 1) + '"></button>';
          t = '<div class="tns-nav" aria-label="Carousel Pagination">' + t + "</div>", te.insertAdjacentHTML(Ut(n.navPosition), t), Q = te.querySelector(".tns-nav"), pe = Q.children;
        }
        if (ai(), S) {
          var u = S.substring(0, S.length - 18).toLowerCase(), h = "transition: all " + ge / 1e3 + "s";
          u && (h = "-" + u + "-" + h), Se(L, "[aria-controls^=" + N + "-item]", h, _e(L));
        }
        fe(pe[he], { "aria-label": vn + (he + 1) + Gt }), $e(pe[he], "tabindex"), W(pe[he], lt), P(Q, Ft);
      }
      ot && (!F && (!A || !D) && (te.insertAdjacentHTML(Ut(n.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + N + '">' + He[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + N + '">' + He[1] + "</button></div>"), F = te.querySelector(".tns-controls")), (!A || !D) && (A = F.children[0], D = F.children[1]), n.controlsContainer && fe(F, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && fe([A, D], {
        "aria-controls": N,
        tabindex: "-1"
      }), (n.controlsContainer || n.prevButton && n.nextButton) && (fe(A, { "data-controls": "prev" }), fe(D, { "data-controls": "next" })), jn = ur(A), qn = ur(D), pr(), F ? P(F, Nn) : (P(A, Nn), P(D, Nn))), Xt();
    }
    function Qi() {
      if (d && Je) {
        var e = {};
        e[Je] = Le, P(g, e);
      }
      Fe && P(g, Pn, n.preventScrollOnTouch), je && P(g, Wn), We && P(i, $n), cn === "inner" ? Y.on("outerResized", function() {
        Ji(), Y.emit("innerLoaded", ee());
      }) : (z || p || y || ae || !M) && P(a, { resize: Xi }), ae && (cn === "outer" ? Y.on("innerLoaded", wt) : se || wt()), Jt(), se ? tr() : ve && nr(), Y.on("indexChanged", ar), cn === "inner" && Y.emit("innerLoaded", ee()), typeof Ht == "function" && Ht(ee()), Mn = !0;
    }
    function ro() {
      if (L.disabled = !0, L.ownerNode && L.ownerNode.remove(), I(a, { resize: Xi }), We && I(i, $n), F && I(F, Nn), Q && I(Q, Ft), I(g, On), I(g, Rn), $ && I($, { click: mr }), B && clearInterval(ft), d && Je) {
        var e = {};
        e[Je] = Le, I(g, e);
      }
      Fe && I(g, Pn), je && I(g, Wn);
      var t = [Si, Oi, Xr, Jr, Ri, Pi];
      zt.forEach(function(o, u) {
        var h = o === "container" ? te : n[o];
        if (typeof h == "object" && h) {
          var C = h.previousElementSibling ? h.previousElementSibling : !1, V = h.parentNode;
          h.outerHTML = t[u], n[o] = C ? C.nextElementSibling : V.firstElementChild;
        }
      }), zt = Pe = et = Ot = ke = M = te = ie = g = Rt = Si = T = v = En = nt = y = p = R = k = q = w = un = $t = We = ge = Ln = U = ae = L = Sn = H = dn = Z = E = Ai = pn = Wt = Be = Ie = hn = An = f = Ge = Ee = de = it = Me = Ke = Ht = Y = Ue = N = se = Dn = rt = ve = zn = Nn = Ft = On = Rn = $n = Pn = Wn = ot = jt = Hn = qt = Di = zi = Yt = at = st = Vt = Ce = He = F = Oi = A = D = jn = qn = Te = Q = Ri = pe = me = en = nn = he = gn = lt = vn = Gt = B = Pt = $i = qe = Ye = $ = Pi = Ve = Yn = ft = le = ct = mn = ut = tn = xe = dt = rn = ye = Kt = Fe = je = null;
      for (var r in this)
        r !== "rebuild" && (this[r] = null);
      Mn = !1;
    }
    function Xi(e) {
      Oe(function() {
        Ji(ze(e));
      });
    }
    function Ji(e) {
      if (Mn) {
        cn === "outer" && Y.emit("outerResized", ee(e)), nt = ji();
        var t, r = En, o = !1;
        z && (Bi(), t = r !== En, t && Y.emit("newBreakpointStart", ee(e)));
        var u, h, C = w, V = se, X = ve, j = We, bn = Ce, Un = Te, sn = Fe, si = je, li = B, wn = Ye, fi = Ve, ci = f;
        if (t) {
          var To = p, Eo = ae, Mo = He, Lo = K, ui = qe;
          if (!O)
            var So = k, Ao = R;
        }
        if (We = m("arrowKeys"), Ce = m("controls"), Te = m("nav"), Fe = m("touch"), K = m("center"), je = m("mouseDrag"), B = m("autoplay"), Ye = m("autoplayHoverPause"), Ve = m("autoplayResetOnVisibility"), t && (se = m("disable"), p = m("fixedWidth"), ge = m("speed"), ae = m("autoHeight"), He = m("controlsText"), qe = m("autoplayText"), Pt = m("autoplayTimeout"), O || (R = m("edgePadding"), k = m("gutter"))), pt(se), q = Yi(), (!M || y) && !se && (fr(), M || (oi(), o = !0)), (p || y) && (pn = ti(), de = An()), (t || p) && (w = m("items"), un = m("slideBy"), h = w !== C, h && (!p && !y && (de = An()), Qt())), t && se !== V && (se ? tr() : ao()), rt && (t || p || y) && (ve = Zt(), ve !== X && (ve ? (ii(Ct(Hi(0))), nr()) : (oo(), o = !0))), pt(se || ve), B || (Ye = Ve = !1), We !== j && (We ? P(i, $n) : I(i, $n)), Ce !== bn && (Ce ? F ? ue(F) : (A && ue(A), D && ue(D)) : F ? ce(F) : (A && ce(A), D && ce(D))), Te !== Un && (Te ? (ue(Q), ai()) : ce(Q)), Fe !== sn && (Fe ? P(g, Pn, n.preventScrollOnTouch) : I(g, Pn)), je !== si && (je ? P(g, Wn) : I(g, Wn)), B !== li && (B ? ($ && ue($), !le && !mn && Mt()) : ($ && ce($), le && Kn())), Ye !== wn && (Ye ? P(g, On) : I(g, On)), Ve !== fi && (Ve ? P(i, Rn) : I(i, Rn)), t) {
          if ((p !== To || K !== Lo) && (o = !0), ae !== Eo && (ae || (ie.style.height = "")), Ce && He !== Mo && (A.innerHTML = He[0], D.innerHTML = He[1]), $ && qe !== ui) {
            var di = B ? 1 : 0, pi = $.innerHTML, Tr = pi.length - ui[di].length;
            pi.substring(Tr) === ui[di] && ($.innerHTML = pi.substring(0, Tr) + qe[di]);
          }
        } else
          K && (p || y) && (o = !0);
        if ((h || p && !y) && (me = Cr(), ai()), u = f !== ci, u ? (Y.emit("indexChanged", ee()), o = !0) : h ? u || ar() : (p || y) && (Jt(), ni(), ir()), h && !d && uo(), !se && !ve) {
          if (t && !O && ((R !== Ao || k !== So) && (ie.style.cssText = gt(R, k, p, ge, ae)), M)) {
            d && (g.style.width = vt(p, k, w));
            var Do = mt(p, k, w) + yt(k);
            $r(L, _e(L) - 1), Se(L, "#" + N + " > .tns-item", Do, _e(L));
          }
          ae && wt(), o && (In(), Ge = f);
        }
        t && Y.emit("newBreakpointEnd", ee(e));
      }
    }
    function Zt() {
      if (!p && !y) {
        var e = K ? w - (w - 1) / 2 : w;
        return v <= e;
      }
      var t = p ? (p + k) * v : H[v], r = R ? q + R * 2 : q + k;
      return K && (r -= p ? (q - p) / 2 : (q - (H[f + 1] - H[f] - k)) / 2), t <= r;
    }
    function Bi() {
      En = 0;
      for (var e in z)
        e = parseInt(e), nt >= e && (En = e);
    }
    var Qt = /* @__PURE__ */ function() {
      return U ? d ? (
        // loop + carousel
        function() {
          var e = Ee, t = de;
          e += un, t -= un, R ? (e += 1, t -= 1) : p && (q + k) % (p + k) && (t -= 1), Z && (f > t ? f -= v : f < e && (f += v));
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
      !B && $ && ce($), !Te && Q && ce(Q), Ce || (F ? ce(F) : (A && ce(A), D && ce(D)));
    }
    function er() {
      B && $ && ue($), Te && Q && ue(Q), Ce && (F ? ue(F) : (A && ue(A), D && ue(D)));
    }
    function nr() {
      if (!zn) {
        if (R && (ie.style.margin = "0px"), Z)
          for (var e = "tns-transparent", t = Z; t--; )
            d && W(T[t], e), W(T[E - t - 1], e);
        Xt(), zn = !0;
      }
    }
    function oo() {
      if (zn) {
        if (R && O && (ie.style.margin = ""), Z)
          for (var e = "tns-transparent", t = Z; t--; )
            d && re(T[t], e), re(T[E - t - 1], e);
        er(), zn = !1;
      }
    }
    function tr() {
      if (!Dn) {
        if (L.disabled = !0, g.className = g.className.replace(Ue.substring(1), ""), $e(g, ["style"]), U)
          for (var e = Z; e--; )
            d && ce(T[e]), ce(T[E - e - 1]);
        if ((!M || !d) && $e(ie, ["style"]), !d)
          for (var t = f, r = f + v; t < r; t++) {
            var o = T[t];
            $e(o, ["style"]), re(o, Pe), re(o, ke);
          }
        Xt(), Dn = !0;
      }
    }
    function ao() {
      if (Dn) {
        if (L.disabled = !1, g.className += Ue, In(), U)
          for (var e = Z; e--; )
            d && ue(T[e]), ue(T[E - e - 1]);
        if (!d)
          for (var t = f, r = f + v; t < r; t++) {
            var o = T[t], u = t < f + w ? Pe : ke;
            o.style.left = (t - f) * 100 / w + "%", W(o, u);
          }
        er(), Dn = !1;
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
      e == null && (e = Ct());
      var t = f, r, o, u;
      if (K || R ? (y || p) && (o = -(parseFloat(e) + R), u = o + q + R * 2) : y && (o = H[f], u = o + q), y)
        H.forEach(function(X, j) {
          j < E && ((K || R) && X <= o + 0.5 && (t = j), u - X >= 0.5 && (r = j));
        });
      else {
        if (p) {
          var h = p + k;
          K || R ? (t = Math.floor(o / h), r = Math.ceil(u / h - 1)) : r = t + Math.ceil(q / h) - 1;
        } else if (K || R) {
          var C = w - 1;
          if (K ? (t -= C / 2, r = f + C / 2) : r = f + C, R) {
            var V = R * w / q;
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
            r[Je] = function(u) {
              u.stopPropagation();
            }, P(t, r), P(t, st), t.src = Bn(t, "data-src");
            var o = Bn(t, "data-srcset");
            o && (t.srcset = o), W(t, "loading");
          }
        });
      }
    }
    function so(e) {
      or(yn(e));
    }
    function lo(e) {
      fo(yn(e));
    }
    function or(e) {
      W(e, "loaded"), Bt(e);
    }
    function fo(e) {
      W(e, "failed"), Bt(e);
    }
    function Bt(e) {
      W(e, at), re(e, "loading"), I(e, st);
    }
    function ei(e, t, r) {
      var o = [];
      for (r || (r = "img"); e <= t; )
        Re(T[e].querySelectorAll(r), function(u) {
          o.push(u);
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
      Jt(), ni(), ir(), pr(), po();
    }
    function co() {
      d && ae && (oe.style[S] = ge / 1e3 + "s");
    }
    function sr(e, t) {
      for (var r = [], o = e, u = Math.min(e + t, E); o < u; o++)
        r.push(T[o].offsetHeight);
      return Math.max.apply(null, r);
    }
    function lr() {
      var e = ae ? sr(f, w) : sr(Z, v), t = oe || ie;
      t.style.height !== e && (t.style.height = e + "px");
    }
    function fr() {
      H = [0];
      var e = M ? "left" : "top", t = M ? "right" : "bottom", r = T[0].getBoundingClientRect()[e];
      Re(T, function(o, u) {
        u && H.push(o.getBoundingClientRect()[e] - r), u === E - 1 && H.push(o.getBoundingClientRect()[t] - r);
      });
    }
    function ni() {
      var e = bt(), t = e[0], r = e[1];
      Re(T, function(o, u) {
        u >= t && u <= r ? _n(o, "aria-hidden") && ($e(o, ["aria-hidden", "tabindex"]), W(o, Yt)) : _n(o, "aria-hidden") || (fe(o, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), re(o, Yt));
      });
    }
    function uo() {
      for (var e = f + Math.min(v, w), t = E; t--; ) {
        var r = T[t];
        t >= f && t < e ? (W(r, "tns-moving"), r.style.left = (t - f) * 100 / w + "%", W(r, Pe), re(r, ke)) : r.style.left && (r.style.left = "", W(r, ke), re(r, Pe)), re(r, et);
      }
      setTimeout(function() {
        Re(T, function(o) {
          re(o, "tns-moving");
        });
      }, 300);
    }
    function po() {
      if (Te && (he = nn >= 0 ? nn : Fi(), nn = -1, he !== gn)) {
        var e = pe[gn], t = pe[he];
        fe(e, {
          tabindex: "-1",
          "aria-label": vn + (gn + 1)
        }), re(e, lt), fe(t, { "aria-label": vn + (he + 1) + Gt }), $e(t, "tabindex"), W(t, lt), gn = he;
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
      if (!(!Ce || Ln || U)) {
        var e = jn ? A.disabled : dr(A), t = qn ? D.disabled : dr(D), r = f <= Ee, o = !Ln && f >= de;
        r && !e && _t(jn, A, !0), !r && e && _t(jn, A, !1), o && !t && _t(qn, D, !0), !o && t && _t(qn, D, !1);
      }
    }
    function kt(e, t) {
      S && (e.style[S] = t);
    }
    function ho() {
      return p ? (p + k) * E : H[E];
    }
    function Vn(e) {
      e == null && (e = f);
      var t = R ? k : 0;
      return y ? (q - t - (H[e + 1] - H[e] - k)) / 2 : p ? (q - p) / 2 : (w - 1) / 2;
    }
    function ti() {
      var e = R ? k : 0, t = q + e - ho();
      return K && !U && (t = p ? -(p + k) * (E - 1) - Vn() : Vn(E - 1) - H[E - 1]), t > 0 && (t = 0), t;
    }
    function Ct(e) {
      e == null && (e = f);
      var t;
      if (M && !y)
        if (p)
          t = -(p + k) * e, K && (t += Vn());
        else {
          var r = J ? E : w;
          K && (e -= Vn()), t = -e * 100 / r;
        }
      else
        t = -H[e], K && y && (t += Vn());
      return Ai && (t = Math.max(t, pn)), t += M && !y && !p ? "%" : "px", t;
    }
    function In(e) {
      kt(g, "0s"), ii(e);
    }
    function ii(e) {
      e == null && (e = Ct()), g.style[Be] = Ie + e + hn;
    }
    function hr(e, t, r, o) {
      var u = e + w;
      U || (u = Math.min(u, E));
      for (var h = e; h < u; h++) {
        var C = T[h];
        o || (C.style.left = (h - f) * 100 / w + "%"), Ot && Qe && (C.style[Qe] = C.style[fn] = Ot * (h - e) / 1e3 + "s"), re(C, t), W(C, r), o && dn.push(C);
      }
    }
    var go = /* @__PURE__ */ function() {
      return d ? function() {
        kt(g, ""), S || !ge ? (ii(), (!ge || !yi(g)) && Le()) : qr(g, Be, Ie, hn, Ct(), ge, Le), M || oi();
      } : function() {
        dn = [];
        var e = {};
        e[Je] = e[Ci] = Le, I(T[Ge], e), P(T[f], e), hr(Ge, Pe, et, !0), hr(f, ke, Pe), (!Je || !Ci || !ge || !yi(g)) && Le();
      };
    }();
    function ri(e, t) {
      Wt && Qt(), (f !== Ge || t) && (Y.emit("indexChanged", ee()), Y.emit("transitionStart", ee()), ae && wt(), le && e && ["click", "keydown"].indexOf(e.type) >= 0 && Kn(), Ke = !0, go());
    }
    function gr(e) {
      return e.toLowerCase().replace(/-/g, "");
    }
    function Le(e) {
      if (d || Ke) {
        if (Y.emit("transitionEnd", ee(e)), !d && dn.length > 0)
          for (var t = 0; t < dn.length; t++) {
            var r = dn[t];
            r.style.left = "", fn && Qe && (r.style[fn] = "", r.style[Qe] = ""), re(r, et), W(r, ke);
          }
        if (!e || !d && e.target.parentNode === g || e.target === g && gr(e.propertyName) === gr(Be)) {
          if (!Wt) {
            var o = f;
            Qt(), f !== o && (Y.emit("indexChanged", ee()), In());
          }
          cn === "inner" && Y.emit("innerLoaded", ee()), Ke = !1, Ge = f;
        }
      }
    }
    function Gn(e, t) {
      if (!ve)
        if (e === "prev")
          Ze(t, -1);
        else if (e === "next")
          Ze(t, 1);
        else {
          if (Ke) {
            if (tt)
              return;
            Le();
          }
          var r = ht(), o = 0;
          if (e === "first" ? o = -r : e === "last" ? o = d ? v - w - r : v - 1 - r : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (t || (e = Math.max(0, Math.min(v - 1, e))), o = e - r)), !d && o && Math.abs(o) < w) {
            var u = o > 0 ? 1 : -1;
            o += f + o - v >= Ee ? v * u : v * 2 * u * -1;
          }
          f += o, d && U && (f < Ee && (f += v), f > de && (f -= v)), ht(f) !== ht(Ge) && ri(t);
        }
    }
    function Ze(e, t) {
      if (Ke) {
        if (tt)
          return;
        Le();
      }
      var r;
      if (!t) {
        e = ze(e);
        for (var o = yn(e); o !== F && [A, D].indexOf(o) < 0; )
          o = o.parentNode;
        var u = [A, D].indexOf(o);
        u >= 0 && (r = !0, t = u === 0 ? -1 : 1);
      }
      if (Ln) {
        if (f === Ee && t === -1) {
          Gn("last", e);
          return;
        } else if (f === de && t === 1) {
          Gn("first", e);
          return;
        }
      }
      t && (f += un * t, y && (f = Math.floor(f)), ri(r || e && e.type === "keydown" ? e : null));
    }
    function vo(e) {
      if (Ke) {
        if (tt)
          return;
        Le();
      }
      e = ze(e);
      for (var t = yn(e), r; t !== Q && !_n(t, "data-nav"); )
        t = t.parentNode;
      if (_n(t, "data-nav")) {
        var r = nn = Number(Bn(t, "data-nav")), o = p || y ? r * v / me : r * w, u = Hn ? r : Math.min(Math.ceil(o), v - 1);
        Gn(u, e), he === r && (le && Kn(), nn = -1);
      }
    }
    function Tt() {
      ft = setInterval(function() {
        Ze(null, $i);
      }, Pt), le = !0;
    }
    function Et() {
      clearInterval(ft), le = !1;
    }
    function vr(e, t) {
      fe($, { "data-action": e }), $.innerHTML = Yn[0] + e + Yn[1] + t;
    }
    function Mt() {
      Tt(), $ && vr("stop", qe[1]);
    }
    function Kn() {
      Et(), $ && vr("start", qe[0]);
    }
    function mo() {
      B && !le && (Mt(), mn = !1);
    }
    function yo() {
      le && (Kn(), mn = !0);
    }
    function mr() {
      le ? (Kn(), mn = !0) : (Mt(), mn = !1);
    }
    function bo() {
      i.hidden ? le && (Et(), ut = !0) : ut && (Tt(), ut = !1);
    }
    function wo() {
      le && (Et(), ct = !0);
    }
    function xo() {
      ct && (Tt(), ct = !1);
    }
    function _o(e) {
      e = ze(e);
      var t = [s.LEFT, s.RIGHT].indexOf(e.keyCode);
      t >= 0 && Ze(e, t === 0 ? -1 : 1);
    }
    function ko(e) {
      e = ze(e);
      var t = [s.LEFT, s.RIGHT].indexOf(e.keyCode);
      t >= 0 && (t === 0 ? A.disabled || Ze(e, -1) : D.disabled || Ze(e, 1));
    }
    function yr(e) {
      e.focus();
    }
    function Co(e) {
      e = ze(e);
      var t = i.activeElement;
      if (_n(t, "data-nav")) {
        var r = [s.LEFT, s.RIGHT, s.ENTER, s.SPACE].indexOf(e.keyCode), o = Number(Bn(t, "data-nav"));
        r >= 0 && (r === 0 ? o > 0 && yr(pe[o - 1]) : r === 1 ? o < me - 1 && yr(pe[o + 1]) : (nn = o, Gn(o, e)));
      }
    }
    function ze(e) {
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
        Le();
      }
      B && le && Et(), rn = !0, ye && (St(ye), ye = null);
      var t = ze(e);
      Y.emit(an(e) ? "touchStart" : "dragStart", ee(e)), !an(e) && ["img", "a"].indexOf(cr(yn(e))) >= 0 && br(e), xe.x = tn.x = t.clientX, xe.y = tn.y = t.clientY, d && (dt = parseFloat(g.style[Be].replace(Ie, "")), kt(g, "0s"));
    }
    function _r(e) {
      if (rn) {
        var t = ze(e);
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
      if (St(ye), rn && (ye = Oe(function() {
        kr(e);
      })), Me === "?" && (Me = wr()), Me) {
        !Fn && an(e) && (Fn = !0);
        try {
          e.type && Y.emit(an(e) ? "touchMove" : "dragMove", ee(e));
        } catch {
        }
        var t = dt, r = Kt(xe, tn);
        if (!M || p || y)
          t += r, t += "px";
        else {
          var o = J ? r * w * 100 / ((q + k) * E) : r * 100 / (q + k);
          t += o, t += "%";
        }
        g.style[Be] = Ie + t + hn;
      }
    }
    function Lt(e) {
      if (rn) {
        ye && (St(ye), ye = null), d && kt(g, ""), rn = !1;
        var t = ze(e);
        xe.x = t.clientX, xe.y = t.clientY;
        var r = Kt(xe, tn);
        if (Math.abs(r)) {
          if (!an(e)) {
            var o = yn(e);
            P(o, { click: function u(h) {
              br(h), I(o, { click: u });
            } });
          }
          d ? ye = Oe(function() {
            if (M && !y) {
              var u = -r * w / (q + k);
              u = r > 0 ? Math.floor(u) : Math.ceil(u), f += u;
            } else {
              var h = -(dt + r);
              if (h <= 0)
                f = Ee;
              else if (h >= H[E - 1])
                f = de;
              else
                for (var C = 0; C < E && h >= H[C]; )
                  f = C, h > H[C] && r < 0 && (f += 1), C++;
            }
            ri(e, r), Y.emit(an(e) ? "touchEnd" : "dragEnd", ee(e));
          }) : Me && Ze(e, r > 0 ? -1 : 1);
        }
      }
      n.preventScrollOnTouch === "auto" && (Fn = !1), it && (Me = "?"), B && !le && Tt();
    }
    function oi() {
      var e = oe || ie;
      e.style.height = H[f + w] - H[f] + "px";
    }
    function Cr() {
      var e = p ? (p + k) * v / q : v / w;
      return Math.min(Math.ceil(e), v);
    }
    function ai() {
      if (!(!Te || Hn) && me !== en) {
        var e = en, t = me, r = ue;
        for (en > me && (e = me, t = en, r = ce); e < t; )
          r(pe[e]), e++;
        en = me;
      }
    }
    function ee(e) {
      return {
        container: g,
        slideItems: T,
        navContainer: Q,
        navItems: pe,
        controlsContainer: F,
        hasControls: ot,
        prevButton: A,
        nextButton: D,
        items: w,
        slideBy: un,
        cloneCount: Z,
        slideCount: v,
        slideCountNew: E,
        index: f,
        indexCached: Ge,
        displayIndex: Wi(),
        navCurrentIndex: he,
        navCurrentIndexCached: gn,
        pages: me,
        pagesCached: en,
        sheet: L,
        isOn: Mn,
        event: e || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: ee,
      events: Y,
      goTo: Gn,
      play: mo,
      pause: yo,
      isOn: Mn,
      updateSliderHeight: lr,
      refresh: Gi,
      destroy: ro,
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
}\r
.popup_main.active {\r
  display: block;\r
}\r
\r
.popup_main h3 {\r
  color: #2b3e51;\r
  font-size: 25px;\r
  font-weight: 700;\r
  line-height: 32px;\r
  margin: 0 0 8px;\r
}\r
.popup_main h3 + p {\r
  color: #676767;\r
  font-size: 16px;\r
  font-weight: 400;\r
  line-height: 24px;\r
  margin-bottom: 20px;\r
}\r
\r
.popup_main > div {\r
  border-radius: 6px;\r
  border: 2px dashed #ebbd45;\r
  background: rgba(235, 189, 69, 0.1);\r
  padding: 16px;\r
  text-align: center;\r
}\r
.popup_main > div img {\r
  height: 45px;\r
  margin-bottom: 16px;\r
}\r
\r
.popup_main > div p {\r
  color: #2b3e51;\r
  text-align: center;\r
  font-size: 16px;\r
  font-weight: 500;\r
  line-height: 24px;\r
  padding-top: 16px;\r
  border-top: 2px dashed #ebbd45;\r
}\r
\r
.popup_main > div + p {\r
  color: #2b3e51;\r
  text-align: center;\r
  font-family: 'Bitter', serif;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 22px;\r
  margin: 20px 0;\r
}\r
\r
.notify {\r
  display: flex;\r
  gap: 8px;\r
  align-items: center;\r
  width: calc(100vw - 28px);\r
  position: fixed;\r
  top: 20px;\r
  right: 14px;\r
  max-width: 350px;\r
  padding: 10px 15px;\r
  color: #fff;\r
  font-size: 16px;\r
  font-weight: 600;\r
  line-height: 1.5;\r
  border-radius: 5px;\r
  background: #499557;\r
  box-shadow: 0px 4px 14px 0px rgba(73, 149, 87, 0.2);\r
  z-index: 9999;\r
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
  .popup_main h3 + p {\r
    margin-bottom: 16px;\r
  }\r
\r
  .popup_main > div img {\r
    height: 33px;\r
  }\r
\r
  .popup_main > div + p {\r
    margin: 16px 0;\r
  }\r
}\r
`, Vr = "https://conversionratestore.github.io/projects/grantme", Cn = {
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
    ),
    check: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M15 2.5C8.1125 2.5 2.5 8.1125 2.5 15C2.5 21.8875 8.1125 27.5 15 27.5C21.8875 27.5 27.5 21.8875 27.5 15C27.5 8.1125 21.8875 2.5 15 2.5ZM20.975 12.125L13.8875 19.2125C13.7125 19.3875 13.475 19.4875 13.225 19.4875C12.975 19.4875 12.7375 19.3875 12.5625 19.2125L9.025 15.675C8.6625 15.3125 8.6625 14.7125 9.025 14.35C9.3875 13.9875 9.9875 13.9875 10.35 14.35L13.225 17.225L19.65 10.8C20.0125 10.4375 20.6125 10.4375 20.975 10.8C21.3375 11.1625 21.3375 11.75 20.975 12.125Z" fill="white"/>
  </svg>`
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
  <span class="back">${Cn.back}Back</span>
  <h2>Share My Results with Parents/Guardians</h2>
  <p>We'll email a link to your parents or guardians for accessing the page with your assessment results, or we can call them to provide more details.</p>
  <div class="popup_form">
  <label>
    <input type="email" placeholder="Your parents email">
    ${Cn.mail}
  </label>
  <label>
    <input type="tel" placeholder="Your parents phone">
    ${Cn.phone}
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
      <span class="popup_close">${Cn.close}</span>
      <div class="popup_content">
        ${s}
      </div>
      <div class="slider_desktop">
        <h3>Our Student Success Stories</h3>
        <ul class="thumbs">
          ${ki.map((c) => (
        /*HTML*/
        `
                <li>
                  <img src="${c.thumb}" alt="photo">
                </li>
              `
      )).join("")}
        </ul>
        <div class="slider_stories">
          ${ki.map((c) => (
        /*HTML*/
        `
                <div class="slide">
                  <div class="inner">
                    <div class="flx">
                      <div class="img">
                        <img src="${c.img}" alt="photo"> 
                      </div>
                      <div>
                        <p class="name">${c.name}</p>
                        <p class="university">${c.university}</p>
                        <p class="received">Received ${c.received}</p>
                      </div>
                    </div>
                    <p class="description">
                      "${c.description}"
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
  }, Ur = (
    /*html*/
    `
  <div class="notify">
    ${Cn.check}The results have been sent.
  </div>
`
  );
  Er({ name: "EIP Grade Type", dev: "YK" }), Lr(["https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css"]);
  class Zr {
    constructor() {
      this.grade = this.checkGrade(), this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.userType = window.location.href.includes("parent") ? "parent" : "student", this.grade !== "none_grade" && this.init();
    }
    init() {
      this.renderPopup(), window.location.pathname.includes("assessment-outcome") && document.head.insertAdjacentHTML("beforeend", "<style>.greetings_box {display: none;}</style>"), this.bindEvents(), this.bindTriggers(), this.bindTracking();
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
      const i = G(".crs_popup_wrapper .popup_close"), a = G(".crs_popup_wrapper"), s = G(".popup_main button.main");
      if (i.on("click", () => {
        a.removeClass("show"), Ne(`exp_eip_grade_type_close_${this.userType}_${this.grade}`, "Close button", "click", "Main Popup");
      }), a.on("click", (O) => {
        console.log(G(O.target) === a), O.target === a.elements[0] && (a.removeClass("show"), Ne(`exp_eip_grade_type_close_bg_${this.userType}_${this.grade}`, "Close bg", "click", "Main Popup"));
      }), s.on("click", () => {
        if (a.removeClass("show"), G("#newScheduleBox").elements[0])
          Sr("#newScheduleBox");
        else {
          const O = window.location.search;
          window.location.href = `https://app.grantme.com/assessment-outcome${O}`;
        }
        Ne(`exp_eip_grade_type_main_btn_${this.userType}_${this.grade}`, "Main button", "click", "Main Popup");
      }), this.userType === "parent")
        return;
      const l = G(".popup2_1 button.main"), c = G(".crs_popup_wrapper span.back"), x = G(".crs_popup_wrapper button.secondary"), b = G(".popup_main"), _ = G(".popup2_1");
      G(".popup2_1 input").each((O) => {
        const J = O;
        G(O).on("input", () => {
          var Ae;
          J.value && ((Ae = J.closest("label")) == null || Ae.classList.remove("error"));
        }), O.addEventListener("click", () => {
          Ne(
            `exp_eip_grade_type_input_${this.userType}_${this.grade}`,
            `${J.type} input`,
            "input",
            "Second Popup"
          );
        });
      }), x.on("click", () => {
        b.removeClass("active"), _.addClass("active"), Ne(`exp_eip_grade_type_share_${this.userType}_${this.grade}`, "Share button", "click", "Main Popup");
      }), c.on("click", () => {
        b.addClass("active"), _.removeClass("active"), Ne(`exp_eip_grade_type_back_${this.userType}_${this.grade}`, "Back button", "click", "Second Popup");
      }), l.on("click", () => {
        const O = G(".popup2_1 input");
        let J = !0;
        O.each((Ae) => {
          var Qe, Xe, fn;
          let S = Ae;
          !S.value && S && ((Qe = S.closest("label")) == null || Qe.classList.add("error"), J = !1), S.type === "email" && !S.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/) && ((Xe = S.closest("label")) == null || Xe.classList.add("error"), J = !1), S.type === "tel" && !S.value.match(/^\d{8,12}$/) && ((fn = S.closest("label")) == null || fn.classList.add("error"), J = !1);
        }), J && (a.removeClass("show"), document.body.insertAdjacentHTML("beforeend", Ur), setTimeout(() => {
          G(".notify").elements[0].remove();
        }, 3e3), Ne(
          `exp_eip_grade_type_submit_form_${this.userType}_${this.grade}`,
          `Email: ${O.elements[0].value}, Phone: ${O.elements[1].value}`,
          "submit",
          "Second Popup"
        ));
      });
    }
    bindTriggers() {
      G(".crs_popup_wrapper"), document.body.addEventListener("mouseleave", (s) => {
        this.showPopup();
      }), this.device === "mobile" && Ar(window, (s, l) => {
        s > 150 && l === "up" && this.showPopup();
      });
      const i = this.device === "desktop" ? 60 : 60, a = setTimeout(() => {
        this.showPopup();
      }, i * 1e3);
      G("body").on("click", ".day.has-event", () => {
        clearTimeout(a);
      }), setInterval(() => {
        console.log(a);
      }, 1e3);
    }
    showPopup() {
      if (localStorage.getItem("showPopup"))
        return;
      G(".crs_popup_wrapper").addClass("show"), localStorage.setItem("showPopup", "true");
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
  new Zr();
})();
//# sourceMappingURL=index.js.map
