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
  }, Mr = ({ name: t, dev: i }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${i})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, hi = (t) => document.querySelectorAll(t), be = (t) => document.querySelector(t), Sr = async (t) => {
    const i = (a) => new Promise((l, s) => {
      const u = a.split(".").pop();
      if (u === "js") {
        if (Array.from(document.scripts).map((E) => E.src.toLowerCase()).includes(a.toLowerCase()))
          return console.log(`Script ${a} allready downloaded!`), l("");
        const b = document.createElement("script");
        b.src = a, b.onload = l, b.onerror = s, document.head.appendChild(b);
      } else if (u === "css") {
        if (Array.from(document.styleSheets).map((E) => {
          var J;
          return (J = E.href) == null ? void 0 : J.toLowerCase();
        }).includes(a.toLowerCase()))
          return console.log(`Style ${a} allready downloaded!`), l("");
        const b = document.createElement("link");
        b.rel = "stylesheet", b.href = a, b.onload = l, b.onerror = s, document.head.appendChild(b);
      }
    });
    for (const a of t)
      console.log(a), await i(a), console.log(`Loaded librari ${a}`);
    console.log("All libraries loaded!");
  }, gi = (t, i, a, l, s = 1e3, u = 0.5) => {
    let k, b;
    if (k = new IntersectionObserver(
      function(E) {
        E[0].isIntersecting === !0 ? b = setTimeout(() => {
          De(
            i,
            E[0].target.dataset.visible || l || "",
            "view",
            a
          ), k.disconnect();
        }, s) : (console.log("Element is not fully visible"), clearTimeout(b));
      },
      { threshold: [u] }
    ), typeof t == "string") {
      const E = document.querySelector(t);
      E && k.observe(E);
    } else
      k.observe(t);
  }, Lr = (t) => {
    const i = document.querySelector(t);
    if (!i)
      return;
    const l = i.getBoundingClientRect().top - 100;
    window.scrollBy({
      top: l,
      behavior: "smooth"
    });
  }, Ar = (t, i) => {
    const a = t === window ? window : document.querySelector(t);
    let l, s, u, k;
    function b() {
      l = null, k = 0;
    }
    b(), a.addEventListener("scroll", function() {
      s = t === window ? this.scrollY : this.scrollTop, l != null && (k = s - l), l = s, clearTimeout(u), u = setTimeout(b, 50), i(Math.abs(k));
    });
  };
  var qt = window, Ne = qt.requestAnimationFrame || qt.webkitRequestAnimationFrame || qt.mozRequestAnimationFrame || qt.msRequestAnimationFrame || function(t) {
    return setTimeout(t, 16);
  }, vi = window, Sn = vi.cancelAnimationFrame || vi.mozCancelAnimationFrame || function(t) {
    clearTimeout(t);
  };
  function Ln() {
    for (var t, i, a, l = arguments[0] || {}, s = 1, u = arguments.length; s < u; s++)
      if ((t = arguments[s]) !== null)
        for (i in t)
          a = t[i], l !== a && a !== void 0 && (l[i] = a);
    return l;
  }
  function we(t) {
    return ["true", "false"].indexOf(t) >= 0 ? JSON.parse(t) : t;
  }
  function xe(t, i, a, l) {
    if (l)
      try {
        t.setItem(i, a);
      } catch {
      }
    return a;
  }
  function zr() {
    var t = window.tnsId;
    return window.tnsId = t ? t + 1 : 1, "tns" + window.tnsId;
  }
  function Vt() {
    var t = document, i = t.body;
    return i || (i = t.createElement("body"), i.fake = !0), i;
  }
  var mt = document.documentElement;
  function It(t) {
    var i = "";
    return t.fake && (i = mt.style.overflow, t.style.background = "", t.style.overflow = mt.style.overflow = "hidden", mt.appendChild(t)), i;
  }
  function Ut(t, i) {
    t.fake && (t.remove(), mt.style.overflow = i, mt.offsetHeight);
  }
  function Or() {
    var t = document, i = Vt(), a = It(i), l = t.createElement("div"), s = !1;
    i.appendChild(l);
    try {
      for (var u = "(10px * 10)", k = ["calc" + u, "-moz-calc" + u, "-webkit-calc" + u], b, E = 0; E < 3; E++)
        if (b = k[E], l.style.width = b, l.offsetWidth === 100) {
          s = b.replace(u, "");
          break;
        }
    } catch {
    }
    return i.fake ? Ut(i, a) : l.remove(), s;
  }
  function Dr() {
    var t = document, i = Vt(), a = It(i), l = t.createElement("div"), s = t.createElement("div"), u = "", k = 70, b = 3, E = !1;
    l.className = "tns-t-subp2", s.className = "tns-t-ct";
    for (var J = 0; J < k; J++)
      u += "<div></div>";
    return s.innerHTML = u, l.appendChild(s), i.appendChild(l), E = Math.abs(l.getBoundingClientRect().left - s.children[k - b].getBoundingClientRect().left) < 2, i.fake ? Ut(i, a) : l.remove(), E;
  }
  function Nr() {
    if (window.matchMedia || window.msMatchMedia)
      return !0;
    var t = document, i = Vt(), a = It(i), l = t.createElement("div"), s = t.createElement("style"), u = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", k;
    return s.type = "text/css", l.className = "tns-mq-test", i.appendChild(s), i.appendChild(l), s.styleSheet ? s.styleSheet.cssText = u : s.appendChild(t.createTextNode(u)), k = window.getComputedStyle ? window.getComputedStyle(l).position : l.currentStyle.position, i.fake ? Ut(i, a) : l.remove(), k === "absolute";
  }
  function Rr(t, i) {
    var a = document.createElement("style");
    return t && a.setAttribute("media", t), i && a.setAttribute("nonce", i), document.querySelector("head").appendChild(a), a.sheet ? a.sheet : a.styleSheet;
  }
  function Ae(t, i, a, l) {
    "insertRule" in t ? t.insertRule(i + "{" + a + "}", l) : t.addRule(i, a, l);
  }
  function $r(t, i) {
    "deleteRule" in t ? t.deleteRule(i) : t.removeRule(i);
  }
  function ke(t) {
    var i = "insertRule" in t ? t.cssRules : t.rules;
    return i.length;
  }
  function Pr(t, i) {
    return Math.atan2(t, i) * (180 / Math.PI);
  }
  function Wr(t, i) {
    var a = !1, l = Math.abs(90 - Math.abs(t));
    return l >= 90 - i ? a = "horizontal" : l <= i && (a = "vertical"), a;
  }
  function Re(t, i, a) {
    for (var l = 0, s = t.length; l < s; l++)
      i.call(a, t[l], l);
  }
  var An = "classList" in document.createElement("_"), ot = An ? function(t, i) {
    return t.classList.contains(i);
  } : function(t, i) {
    return t.className.indexOf(i) >= 0;
  }, $ = An ? function(t, i) {
    ot(t, i) || t.classList.add(i);
  } : function(t, i) {
    ot(t, i) || (t.className += " " + i);
  }, ne = An ? function(t, i) {
    ot(t, i) && t.classList.remove(i);
  } : function(t, i) {
    ot(t, i) && (t.className = t.className.replace(i, ""));
  };
  function yt(t, i) {
    return t.hasAttribute(i);
  }
  function Kt(t, i) {
    return t.getAttribute(i);
  }
  function mi(t) {
    return typeof t.item < "u";
  }
  function se(t, i) {
    if (t = mi(t) || t instanceof Array ? t : [t], Object.prototype.toString.call(i) === "[object Object]")
      for (var a = t.length; a--; )
        for (var l in i)
          t[a].setAttribute(l, i[l]);
  }
  function $e(t, i) {
    t = mi(t) || t instanceof Array ? t : [t], i = i instanceof Array ? i : [i];
    for (var a = i.length, l = t.length; l--; )
      for (var s = a; s--; )
        t[l].removeAttribute(i[s]);
  }
  function yi(t) {
    for (var i = [], a = 0, l = t.length; a < l; a++)
      i.push(t[a]);
    return i;
  }
  function le(t, i) {
    t.style.display !== "none" && (t.style.display = "none");
  }
  function fe(t, i) {
    t.style.display === "none" && (t.style.display = "");
  }
  function bi(t) {
    return window.getComputedStyle(t).display !== "none";
  }
  function bt(t) {
    if (typeof t == "string") {
      var i = [t], a = t.charAt(0).toUpperCase() + t.substr(1), l = ["Webkit", "Moz", "ms", "O"];
      l.forEach(function(b) {
        (b !== "ms" || t === "transform") && i.push(b + a);
      }), t = i;
    }
    var s = document.createElement("fakeelement");
    t.length;
    for (var u = 0; u < t.length; u++) {
      var k = t[u];
      if (s.style[k] !== void 0)
        return k;
    }
    return !1;
  }
  function Hr(t) {
    if (!t || !window.getComputedStyle)
      return !1;
    var i = document, a = Vt(), l = It(a), s = i.createElement("p"), u, k = t.length > 9 ? "-" + t.slice(0, -9).toLowerCase() + "-" : "";
    return k += "transform", a.insertBefore(s, null), s.style[t] = "translate3d(1px,1px,1px)", u = window.getComputedStyle(s).getPropertyValue(k), a.fake ? Ut(a, l) : s.remove(), u !== void 0 && u.length > 0 && u !== "none";
  }
  function wi(t, i) {
    var a = !1;
    return /^Webkit/.test(t) ? a = "webkit" + i + "End" : /^O/.test(t) ? a = "o" + i + "End" : t && (a = i.toLowerCase() + "end"), a;
  }
  var xi = !1;
  try {
    var Fr = Object.defineProperty({}, "passive", {
      get: function() {
        xi = !0;
      }
    });
    window.addEventListener("test", null, Fr);
  } catch {
  }
  var _i = xi ? { passive: !0 } : !1;
  function R(t, i, a) {
    for (var l in i) {
      var s = ["touchstart", "touchmove"].indexOf(l) >= 0 && !a ? _i : !1;
      t.addEventListener(l, i[l], s);
    }
  }
  function q(t, i) {
    for (var a in i) {
      var l = ["touchstart", "touchmove"].indexOf(a) >= 0 ? _i : !1;
      t.removeEventListener(a, i[a], l);
    }
  }
  function Yr() {
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
  function Gr(t, i, a, l, J, u, k) {
    var b = Math.min(u, 10), E = J.indexOf("%") >= 0 ? "%" : "px", J = J.replace(E, ""), P = Number(t.style[i].replace(a, "").replace(l, "").replace(E, "")), he = (J - P) / u * b;
    setTimeout(ce, b);
    function ce() {
      u -= b, P += he, t.style[i] = a + P + E + l, u > 0 ? setTimeout(ce, b) : k();
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
  var ki = function(t) {
    t = Ln({
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
      var k = navigator.userAgent, b = /* @__PURE__ */ new Date();
      try {
        s = a.localStorage, s ? (s.setItem(b, b), u = s.getItem(b) == b, s.removeItem(b)) : u = !1, u || (s = {});
      } catch {
        u = !1;
      }
      u && (s.tnsApp && s.tnsApp !== k && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function(e) {
        s.removeItem(e);
      }), localStorage.tnsApp = k);
    }
    var E = s.tC ? we(s.tC) : xe(s, "tC", Or(), u), J = s.tPL ? we(s.tPL) : xe(s, "tPL", Dr(), u), P = s.tMQ ? we(s.tMQ) : xe(s, "tMQ", Nr(), u), he = s.tTf ? we(s.tTf) : xe(s, "tTf", bt("transform"), u), ce = s.t3D ? we(s.t3D) : xe(s, "t3D", Hr(he), u), B = s.tTDu ? we(s.tTDu) : xe(s, "tTDu", bt("transitionDuration"), u), Bt = s.tTDe ? we(s.tTDe) : xe(s, "tTDe", bt("transitionDelay"), u), Qt = s.tADu ? we(s.tADu) : xe(s, "tADu", bt("animationDuration"), u), zn = s.tADe ? we(s.tADe) : xe(s, "tADe", bt("animationDelay"), u), Be = s.tTE ? we(s.tTE) : xe(s, "tTE", wi(B, "Transition"), u), Ei = s.tAE ? we(s.tAE) : xe(s, "tAE", wi(Qt, "Animation"), u), Ci = a.console && typeof a.console.warn == "function", On = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"], Mi = {};
    if (On.forEach(function(e) {
      if (typeof t[e] == "string") {
        var n = t[e], r = i.querySelector(n);
        if (Mi[e] = n, r && r.nodeName)
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
    var z = t.responsive, at = t.nested, d = t.mode === "carousel";
    if (z) {
      0 in z && (t = Ln(t, z[0]), delete z[0]);
      var Dn = {};
      for (var Si in z) {
        var wt = z[Si];
        wt = typeof wt == "number" ? { items: wt } : wt, Dn[Si] = wt;
      }
      z = Dn, Dn = null;
    }
    function Li(e) {
      for (var n in e)
        d || (n === "slideBy" && (e[n] = "page"), n === "edgePadding" && (e[n] = !1), n === "autoHeight" && (e[n] = !1)), n === "responsive" && Li(e[n]);
    }
    if (d || Li(t), !d) {
      t.axis = "horizontal", t.slideBy = "page", t.edgePadding = !1;
      var Pe = t.animateIn, Xt = t.animateOut, Nn = t.animateDelay, Te = t.animateNormal;
    }
    var M = t.axis === "horizontal", ee = i.createElement("div"), te = i.createElement("div"), ie, g = t.container, Rn = g.parentNode, Ai = g.outerHTML, T = g.children, v = T.length, xt, Jt = Gi(), _t = !1;
    z && er(), d && (g.className += " tns-vpfix");
    var y = t.autoWidth, p = m("fixedWidth"), D = m("edgePadding"), x = m("gutter"), Y = qi(), V = m("center"), w = y ? 1 : Math.floor(m("items")), st = m("slideBy"), $n = t.viewportMax || t.fixedWidthViewportWidth, We = m("arrowKeys"), ge = m("speed"), kt = t.rewind, I = kt ? !1 : t.loop, re = m("autoHeight"), Ee = m("controls"), He = m("controlsText"), Ce = m("nav"), Fe = m("touch"), Ye = m("mouseDrag"), Q = m("autoplay"), Pn = m("autoplayTimeout"), Ge = m("autoplayText"), je = m("autoplayHoverPause"), qe = m("autoplayResetOnVisibility"), S = Rr(null, m("nonce")), Tt = t.lazyload, Zr = t.lazyloadSelector, W, lt = [], U = I ? Jr() : 0, C = d ? v + U * 2 : v + U, zi = !!((p || y) && !I), ft = p ? ni() : null, Wn = !d || !I, Qe = M ? "left" : "top", Ve = "", ct = "", Et = /* @__PURE__ */ function() {
      return p ? function() {
        return V && !I ? v - 1 : Math.ceil(-ft / (p + x));
      } : y ? function() {
        for (var e = 0; e < C; e++)
          if (W[e] >= -ft)
            return e;
      } : function() {
        return V && d && !I ? v - 1 : I || d ? Math.max(0, C - Math.ceil(w)) : C - 1;
      };
    }(), f = Fi(m("startIndex")), Ie = f;
    Hi();
    var Me = 0, ue = y ? null : Et(), en = t.preventActionWhenRunning, tn = t.swipeAngle, Se = tn ? "?" : !0, Ue = !1, Hn = t.onInit, G = new Yr(), Ke = " tns-slider tns-" + t.mode, O = g.id || zr(), oe = m("disable"), Ct = !1, nn = t.freezable, ve = nn && !y ? Zn() : !1, Mt = !1, St = {
      click: Ze,
      keydown: _o
    }, Fn = {
      click: go,
      keydown: ko
    }, Lt = {
      mouseover: bo,
      mouseout: wo
    }, At = { visibilitychange: yo }, zt = { keydown: xo }, Ot = {
      touchstart: _r,
      touchmove: kr,
      touchend: Mn,
      touchcancel: Mn
    }, Dt = {
      mousedown: _r,
      mousemove: kr,
      mouseup: Mn,
      mouseleave: Mn
    }, rn = ze("controls"), Yn = ze("nav"), Nt = y ? !0 : t.navAsThumbnails, Gn = ze("autoplay"), Oi = ze("touch"), Di = ze("mouseDrag"), jn = "tns-slide-active", Ni = "tns-slide-cloned", on = "tns-complete", an = {
      load: ao,
      error: so
    }, qn, Vn, Rt = t.preventScrollOnTouch === "force";
    if (rn)
      var H = t.controlsContainer, Ri = t.controlsContainer ? t.controlsContainer.outerHTML : "", L = t.prevButton, A = t.nextButton, Br = t.prevButton ? t.prevButton.outerHTML : "", Qr = t.nextButton ? t.nextButton.outerHTML : "", $t, Pt;
    if (Yn)
      var K = t.navContainer, $i = t.navContainer ? t.navContainer.outerHTML : "", de, me = y ? v : Er(), Xe = 0, Je = -1, pe = Yi(), ut = pe, sn = "tns-nav-active", dt = "Carousel Page ", In = " (Current Slide)";
    if (Gn)
      var Pi = t.autoplayDirection === "forward" ? 1 : -1, N = t.autoplayButton, Wi = t.autoplayButton ? t.autoplayButton.outerHTML : "", Wt = ["<span class='tns-visually-hidden'>", " animation</span>"], ln, ae, fn, pt, cn;
    if (Oi || Di)
      var et = {}, _e = {}, un, tt = !1, ye, Un = M ? function(e, n) {
        return e.x - n.x;
      } : function(e, n) {
        return e.y - n.y;
      };
    y || dn(oe || ve), he && (Qe = he, Ve = "translate", ce ? (Ve += M ? "3d(" : "3d(0px, ", ct = M ? ", 0px, 0px)" : ", 0px)") : (Ve += M ? "X(" : "Y(", ct = ")")), d && (g.className = g.className.replace("tns-vpfix", "")), to(), no(), Ui();
    function dn(e) {
      e && (Ee = Ce = Fe = Ye = We = Q = je = qe = !1);
    }
    function Hi() {
      for (var e = d ? f - U : f; e < 0; )
        e += v;
      return e % v + 1;
    }
    function Fi(e) {
      return e = e ? Math.max(0, Math.min(I ? v - 1 : v - w, e)) : 0, d ? e + U : e;
    }
    function pn(e) {
      for (e == null && (e = f), d && (e -= U); e < 0; )
        e += v;
      return Math.floor(e % v);
    }
    function Yi() {
      var e = pn(), n;
      return n = Nt ? e : p || y ? Math.ceil((e + 1) * me / v - 1) : Math.floor(e / w), !I && d && f === ue && (n = me - 1), n;
    }
    function Xr() {
      if (y || p && !$n)
        return v - 1;
      var e = p ? "fixedWidth" : "items", n = [];
      if ((p || t[e] < v) && n.push(t[e]), z)
        for (var r in z) {
          var o = z[r][e];
          o && (p || o < v) && n.push(o);
        }
      return n.length || n.push(0), Math.ceil(p ? $n / Math.min.apply(null, n) : Math.max.apply(null, n));
    }
    function Jr() {
      var e = Xr(), n = d ? Math.ceil((e * 5 - v) / 2) : e * 4 - v;
      return n = Math.max(e, n), ze("edgePadding") ? n + 1 : n;
    }
    function Gi() {
      return a.innerWidth || i.documentElement.clientWidth || i.body.clientWidth;
    }
    function Kn(e) {
      return e === "top" ? "afterbegin" : "beforeend";
    }
    function ji(e) {
      if (e != null) {
        var n = i.createElement("div"), r, o;
        return e.appendChild(n), r = n.getBoundingClientRect(), o = r.right - r.left, n.remove(), o || ji(e.parentNode);
      }
    }
    function qi() {
      var e = D ? D * 2 - x : 0;
      return ji(Rn) - e;
    }
    function ze(e) {
      if (t[e])
        return !0;
      if (z) {
        for (var n in z)
          if (z[n][e])
            return !0;
      }
      return !1;
    }
    function m(e, n) {
      if (n == null && (n = Jt), e === "items" && p)
        return Math.floor((Y + x) / (p + x)) || 1;
      var r = t[e];
      if (z)
        for (var o in z)
          n >= parseInt(o) && e in z[o] && (r = z[o][e]);
      return e === "slideBy" && r === "page" && (r = m("items")), !d && (e === "slideBy" || e === "items") && (r = Math.floor(r)), r;
    }
    function eo(e) {
      return E ? E + "(" + e * 100 + "% / " + C + ")" : e * 100 / C + "%";
    }
    function hn(e, n, r, o, c) {
      var h = "";
      if (e !== void 0) {
        var _ = e;
        n && (_ -= n), h = M ? "margin: 0 " + _ + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + _ + "px 0;";
      } else if (n && !r) {
        var j = "-" + n + "px", Z = M ? j + " 0 0" : "0 " + j + " 0";
        h = "margin: 0 " + Z + ";";
      }
      return !d && c && B && o && (h += nt(o)), h;
    }
    function gn(e, n, r) {
      return e ? (e + n) * C + "px" : E ? E + "(" + C * 100 + "% / " + r + ")" : C * 100 / r + "%";
    }
    function vn(e, n, r) {
      var o;
      if (e)
        o = e + n + "px";
      else {
        d || (r = Math.floor(r));
        var c = d ? C : r;
        o = E ? E + "(100% / " + c + ")" : 100 / c + "%";
      }
      return o = "width:" + o, at !== "inner" ? o + ";" : o + " !important;";
    }
    function mn(e) {
      var n = "";
      if (e !== !1) {
        var r = M ? "padding-" : "margin-", o = M ? "right" : "bottom";
        n = r + o + ": " + e + "px;";
      }
      return n;
    }
    function Vi(e, n) {
      var r = e.substring(0, e.length - n).toLowerCase();
      return r && (r = "-" + r + "-"), r;
    }
    function nt(e) {
      return Vi(B, 18) + "transition-duration:" + e / 1e3 + "s;";
    }
    function Ii(e) {
      return Vi(Qt, 17) + "animation-duration:" + e / 1e3 + "s;";
    }
    function to() {
      var e = "tns-outer", n = "tns-inner";
      if (ze("gutter"), ee.className = e, te.className = n, ee.id = O + "-ow", te.id = O + "-iw", g.id === "" && (g.id = O), Ke += J || y ? " tns-subpixel" : " tns-no-subpixel", Ke += E ? " tns-calc" : " tns-no-calc", y && (Ke += " tns-autowidth"), Ke += " tns-" + t.axis, g.className += Ke, d ? (ie = i.createElement("div"), ie.id = O + "-mw", ie.className = "tns-ovh", ee.appendChild(ie), ie.appendChild(te)) : ee.appendChild(te), re) {
        var r = ie || te;
        r.className += " tns-ah";
      }
      if (Rn.insertBefore(ee, g), te.appendChild(g), Re(T, function(F, gt) {
        $(F, "tns-item"), F.id || (F.id = O + "-item" + gt), !d && Te && $(F, Te), se(F, {
          "aria-hidden": "true",
          tabindex: "-1"
        });
      }), U) {
        for (var o = i.createDocumentFragment(), c = i.createDocumentFragment(), h = U; h--; ) {
          var _ = h % v, j = T[_].cloneNode(!0);
          if ($(j, Ni), $e(j, "id"), c.insertBefore(j, c.firstChild), d) {
            var Z = T[v - 1 - _].cloneNode(!0);
            $(Z, Ni), $e(Z, "id"), o.appendChild(Z);
          }
        }
        g.insertBefore(o, g.firstChild), g.appendChild(c), T = g.children;
      }
    }
    function Ui() {
      if (ze("autoHeight") || y || !M) {
        var e = g.querySelectorAll("img");
        Re(e, function(n) {
          var r = n.src;
          Tt || (r && r.indexOf("data:image") < 0 ? (n.src = "", R(n, an), $(n, "loading"), n.src = r) : ar(n));
        }), Ne(function() {
          wn(yi(e), function() {
            qn = !0;
          });
        }), ze("autoHeight") && (e = ei(f, Math.min(f + w - 1, C - 1))), Tt ? Ki() : Ne(function() {
          wn(yi(e), Ki);
        });
      } else
        d && Ft(), Bi(), Qi();
    }
    function Ki() {
      if (y && v > 1) {
        var e = I ? f : v - 1;
        (function n() {
          var r = T[e].getBoundingClientRect().left, o = T[e - 1].getBoundingClientRect().right;
          Math.abs(r - o) <= 1 ? Zi() : setTimeout(function() {
            n();
          }, 16);
        })();
      } else
        Zi();
    }
    function Zi() {
      (!M || y) && (cr(), y ? (ft = ni(), nn && (ve = Zn()), ue = Et(), dn(oe || ve)) : oi()), d && Ft(), Bi(), Qi();
    }
    function no() {
      if (!d)
        for (var e = f, n = f + Math.min(v, w); e < n; e++) {
          var r = T[e];
          r.style.left = (e - f) * 100 / w + "%", $(r, Pe), ne(r, Te);
        }
      if (M && (J || y ? (Ae(S, "#" + O + " > .tns-item", "font-size:" + a.getComputedStyle(T[0]).fontSize + ";", ke(S)), Ae(S, "#" + O, "font-size:0;", ke(S))) : d && Re(T, function(fi, ci) {
        fi.style.marginLeft = eo(ci);
      })), P) {
        if (B) {
          var o = ie && t.autoHeight ? nt(t.speed) : "";
          Ae(S, "#" + O + "-mw", o, ke(S));
        }
        o = hn(t.edgePadding, t.gutter, t.fixedWidth, t.speed, t.autoHeight), Ae(S, "#" + O + "-iw", o, ke(S)), d && (o = M && !y ? "width:" + gn(t.fixedWidth, t.gutter, t.items) + ";" : "", B && (o += nt(ge)), Ae(S, "#" + O, o, ke(S))), o = M && !y ? vn(t.fixedWidth, t.gutter, t.items) : "", t.gutter && (o += mn(t.gutter)), d || (B && (o += nt(ge)), Qt && (o += Ii(ge))), o && Ae(S, "#" + O + " > .tns-item", o, ke(S));
      } else {
        fo(), te.style.cssText = hn(D, x, p, re), d && M && !y && (g.style.width = gn(p, x, w));
        var o = M && !y ? vn(p, x, w) : "";
        x && (o += mn(x)), o && Ae(S, "#" + O + " > .tns-item", o, ke(S));
      }
      if (z && P)
        for (var c in z) {
          c = parseInt(c);
          var h = z[c], o = "", _ = "", j = "", Z = "", F = "", gt = y ? null : m("items", c), jt = m("fixedWidth", c), rt = m("speed", c), si = m("edgePadding", c), li = m("autoHeight", c), vt = m("gutter", c);
          B && ie && m("autoHeight", c) && "speed" in h && (_ = "#" + O + "-mw{" + nt(rt) + "}"), ("edgePadding" in h || "gutter" in h) && (j = "#" + O + "-iw{" + hn(si, vt, jt, rt, li) + "}"), d && M && !y && ("fixedWidth" in h || "items" in h || p && "gutter" in h) && (Z = "width:" + gn(jt, vt, gt) + ";"), B && "speed" in h && (Z += nt(rt)), Z && (Z = "#" + O + "{" + Z + "}"), ("fixedWidth" in h || p && "gutter" in h || !d && "items" in h) && (F += vn(jt, vt, gt)), "gutter" in h && (F += mn(vt)), !d && "speed" in h && (B && (F += nt(rt)), Qt && (F += Ii(rt))), F && (F = "#" + O + " > .tns-item{" + F + "}"), o = _ + j + Z + F, o && S.insertRule("@media (min-width: " + c / 16 + "em) {" + o + "}", S.cssRules.length);
        }
    }
    function Bi() {
      if (ti(), ee.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + or() + "</span>  of " + v + "</div>"), Vn = ee.querySelector(".tns-liveregion .current"), Gn) {
        var e = Q ? "stop" : "start";
        N ? se(N, { "data-action": e }) : t.autoplayButtonOutput && (ee.insertAdjacentHTML(Kn(t.autoplayPosition), '<button type="button" data-action="' + e + '">' + Wt[0] + e + Wt[1] + Ge[0] + "</button>"), N = ee.querySelector("[data-action]")), N && R(N, { click: yr }), Q && (Cn(), je && R(g, Lt), qe && R(g, At));
      }
      if (Yn) {
        if (K)
          se(K, { "aria-label": "Carousel Pagination" }), de = K.children, Re(de, function(_, j) {
            se(_, {
              "data-nav": j,
              tabindex: "-1",
              "aria-label": dt + (j + 1),
              "aria-controls": O
            });
          });
        else {
          for (var n = "", r = Nt ? "" : 'style="display:none"', o = 0; o < v; o++)
            n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + O + '" ' + r + ' aria-label="' + dt + (o + 1) + '"></button>';
          n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>", ee.insertAdjacentHTML(Kn(t.navPosition), n), K = ee.querySelector(".tns-nav"), de = K.children;
        }
        if (ai(), B) {
          var c = B.substring(0, B.length - 18).toLowerCase(), h = "transition: all " + ge / 1e3 + "s";
          c && (h = "-" + c + "-" + h), Ae(S, "[aria-controls^=" + O + "-item]", h, ke(S));
        }
        se(de[pe], { "aria-label": dt + (pe + 1) + In }), $e(de[pe], "tabindex"), $(de[pe], sn), R(K, Fn);
      }
      rn && (!H && (!L || !A) && (ee.insertAdjacentHTML(Kn(t.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + O + '">' + He[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + O + '">' + He[1] + "</button></div>"), H = ee.querySelector(".tns-controls")), (!L || !A) && (L = H.children[0], A = H.children[1]), t.controlsContainer && se(H, {
        "aria-label": "Carousel Navigation",
        tabindex: "0"
      }), (t.controlsContainer || t.prevButton && t.nextButton) && se([L, A], {
        "aria-controls": O,
        tabindex: "-1"
      }), (t.controlsContainer || t.prevButton && t.nextButton) && (se(L, { "data-controls": "prev" }), se(A, { "data-controls": "next" })), $t = dr(L), Pt = dr(A), hr(), H ? R(H, St) : (R(L, St), R(A, St))), Qn();
    }
    function Qi() {
      if (d && Be) {
        var e = {};
        e[Be] = Le, R(g, e);
      }
      Fe && R(g, Ot, t.preventScrollOnTouch), Ye && R(g, Dt), We && R(i, zt), at === "inner" ? G.on("outerResized", function() {
        Ji(), G.emit("innerLoaded", X());
      }) : (z || p || y || re || !M) && R(a, { resize: Xi }), re && (at === "outer" ? G.on("innerLoaded", bn) : oe || bn()), Xn(), oe ? ir() : ve && nr(), G.on("indexChanged", sr), at === "inner" && G.emit("innerLoaded", X()), typeof Hn == "function" && Hn(X()), _t = !0;
    }
    function io() {
      if (S.disabled = !0, S.ownerNode && S.ownerNode.remove(), q(a, { resize: Xi }), We && q(i, zt), H && q(H, St), K && q(K, Fn), q(g, Lt), q(g, At), N && q(N, { click: yr }), Q && clearInterval(ln), d && Be) {
        var e = {};
        e[Be] = Le, q(g, e);
      }
      Fe && q(g, Ot), Ye && q(g, Dt);
      var n = [Ai, Ri, Br, Qr, $i, Wi];
      On.forEach(function(o, c) {
        var h = o === "container" ? ee : t[o];
        if (typeof h == "object" && h) {
          var _ = h.previousElementSibling ? h.previousElementSibling : !1, j = h.parentNode;
          h.outerHTML = n[c], t[o] = _ ? _.nextElementSibling : j.firstElementChild;
        }
      }), On = Pe = Xt = Nn = Te = M = ee = te = g = Rn = Ai = T = v = xt = Jt = y = p = D = x = Y = w = st = $n = We = ge = kt = I = re = S = Tt = W = lt = U = C = zi = ft = Wn = Qe = Ve = ct = Et = f = Ie = Me = ue = tn = Se = Ue = Hn = G = Ke = O = oe = Ct = nn = ve = Mt = St = Fn = Lt = At = zt = Ot = Dt = rn = Yn = Nt = Gn = Oi = Di = jn = on = an = qn = Ee = He = H = Ri = L = A = $t = Pt = Ce = K = $i = de = me = Xe = Je = pe = ut = sn = dt = In = Q = Pn = Pi = Ge = je = N = Wi = qe = Wt = ln = ae = fn = pt = cn = et = _e = un = tt = ye = Un = Fe = Ye = null;
      for (var r in this)
        r !== "rebuild" && (this[r] = null);
      _t = !1;
    }
    function Xi(e) {
      Ne(function() {
        Ji(Oe(e));
      });
    }
    function Ji(e) {
      if (_t) {
        at === "outer" && G.emit("outerResized", X(e)), Jt = Gi();
        var n, r = xt, o = !1;
        z && (er(), n = r !== xt, n && G.emit("newBreakpointStart", X(e)));
        var c, h, _ = w, j = oe, Z = ve, F = We, gt = Ee, jt = Ce, rt = Fe, si = Ye, li = Q, vt = je, fi = qe, ci = f;
        if (n) {
          var To = p, Eo = re, Co = He, Mo = V, ui = Ge;
          if (!P)
            var So = x, Lo = D;
        }
        if (We = m("arrowKeys"), Ee = m("controls"), Ce = m("nav"), Fe = m("touch"), V = m("center"), Ye = m("mouseDrag"), Q = m("autoplay"), je = m("autoplayHoverPause"), qe = m("autoplayResetOnVisibility"), n && (oe = m("disable"), p = m("fixedWidth"), ge = m("speed"), re = m("autoHeight"), He = m("controlsText"), Ge = m("autoplayText"), Pn = m("autoplayTimeout"), P || (D = m("edgePadding"), x = m("gutter"))), dn(oe), Y = qi(), (!M || y) && !oe && (cr(), M || (oi(), o = !0)), (p || y) && (ft = ni(), ue = Et()), (n || p) && (w = m("items"), st = m("slideBy"), h = w !== _, h && (!p && !y && (ue = Et()), Bn())), n && oe !== j && (oe ? ir() : oo()), nn && (n || p || y) && (ve = Zn(), ve !== Z && (ve ? (ii(kn(Fi(0))), nr()) : (ro(), o = !0))), dn(oe || ve), Q || (je = qe = !1), We !== F && (We ? R(i, zt) : q(i, zt)), Ee !== gt && (Ee ? H ? fe(H) : (L && fe(L), A && fe(A)) : H ? le(H) : (L && le(L), A && le(A))), Ce !== jt && (Ce ? (fe(K), ai()) : le(K)), Fe !== rt && (Fe ? R(g, Ot, t.preventScrollOnTouch) : q(g, Ot)), Ye !== si && (Ye ? R(g, Dt) : q(g, Dt)), Q !== li && (Q ? (N && fe(N), !ae && !pt && Cn()) : (N && le(N), ae && Gt())), je !== vt && (je ? R(g, Lt) : q(g, Lt)), qe !== fi && (qe ? R(i, At) : q(i, At)), n) {
          if ((p !== To || V !== Mo) && (o = !0), re !== Eo && (re || (te.style.height = "")), Ee && He !== Co && (L.innerHTML = He[0], A.innerHTML = He[1]), N && Ge !== ui) {
            var di = Q ? 1 : 0, pi = N.innerHTML, Cr = pi.length - ui[di].length;
            pi.substring(Cr) === ui[di] && (N.innerHTML = pi.substring(0, Cr) + Ge[di]);
          }
        } else
          V && (p || y) && (o = !0);
        if ((h || p && !y) && (me = Er(), ai()), c = f !== ci, c ? (G.emit("indexChanged", X()), o = !0) : h ? c || sr() : (p || y) && (Xn(), ti(), rr()), h && !d && co(), !oe && !ve) {
          if (n && !P && ((D !== Lo || x !== So) && (te.style.cssText = hn(D, x, p, ge, re)), M)) {
            d && (g.style.width = gn(p, x, w));
            var Ao = vn(p, x, w) + mn(x);
            $r(S, ke(S) - 1), Ae(S, "#" + O + " > .tns-item", Ao, ke(S));
          }
          re && bn(), o && (Ft(), Ie = f);
        }
        n && G.emit("newBreakpointEnd", X(e));
      }
    }
    function Zn() {
      if (!p && !y) {
        var e = V ? w - (w - 1) / 2 : w;
        return v <= e;
      }
      var n = p ? (p + x) * v : W[v], r = D ? Y + D * 2 : Y + x;
      return V && (r -= p ? (Y - p) / 2 : (Y - (W[f + 1] - W[f] - x)) / 2), n <= r;
    }
    function er() {
      xt = 0;
      for (var e in z)
        e = parseInt(e), Jt >= e && (xt = e);
    }
    var Bn = /* @__PURE__ */ function() {
      return I ? d ? (
        // loop + carousel
        function() {
          var e = Me, n = ue;
          e += st, n -= st, D ? (e += 1, n -= 1) : p && (Y + x) % (p + x) && (n -= 1), U && (f > n ? f -= v : f < e && (f += v));
        }
      ) : (
        // loop + gallery
        function() {
          if (f > ue)
            for (; f >= Me + v; )
              f -= v;
          else if (f < Me)
            for (; f <= ue - v; )
              f += v;
        }
      ) : (
        // non-loop
        function() {
          f = Math.max(Me, Math.min(ue, f));
        }
      );
    }();
    function Qn() {
      !Q && N && le(N), !Ce && K && le(K), Ee || (H ? le(H) : (L && le(L), A && le(A)));
    }
    function tr() {
      Q && N && fe(N), Ce && K && fe(K), Ee && (H ? fe(H) : (L && fe(L), A && fe(A)));
    }
    function nr() {
      if (!Mt) {
        if (D && (te.style.margin = "0px"), U)
          for (var e = "tns-transparent", n = U; n--; )
            d && $(T[n], e), $(T[C - n - 1], e);
        Qn(), Mt = !0;
      }
    }
    function ro() {
      if (Mt) {
        if (D && P && (te.style.margin = ""), U)
          for (var e = "tns-transparent", n = U; n--; )
            d && ne(T[n], e), ne(T[C - n - 1], e);
        tr(), Mt = !1;
      }
    }
    function ir() {
      if (!Ct) {
        if (S.disabled = !0, g.className = g.className.replace(Ke.substring(1), ""), $e(g, ["style"]), I)
          for (var e = U; e--; )
            d && le(T[e]), le(T[C - e - 1]);
        if ((!M || !d) && $e(te, ["style"]), !d)
          for (var n = f, r = f + v; n < r; n++) {
            var o = T[n];
            $e(o, ["style"]), ne(o, Pe), ne(o, Te);
          }
        Qn(), Ct = !0;
      }
    }
    function oo() {
      if (Ct) {
        if (S.disabled = !1, g.className += Ke, Ft(), I)
          for (var e = U; e--; )
            d && fe(T[e]), fe(T[C - e - 1]);
        if (!d)
          for (var n = f, r = f + v; n < r; n++) {
            var o = T[n], c = n < f + w ? Pe : Te;
            o.style.left = (n - f) * 100 / w + "%", $(o, c);
          }
        tr(), Ct = !1;
      }
    }
    function rr() {
      var e = or();
      Vn.innerHTML !== e && (Vn.innerHTML = e);
    }
    function or() {
      var e = yn(), n = e[0] + 1, r = e[1] + 1;
      return n === r ? n + "" : n + " to " + r;
    }
    function yn(e) {
      e == null && (e = kn());
      var n = f, r, o, c;
      if (V || D ? (y || p) && (o = -(parseFloat(e) + D), c = o + Y + D * 2) : y && (o = W[f], c = o + Y), y)
        W.forEach(function(Z, F) {
          F < C && ((V || D) && Z <= o + 0.5 && (n = F), c - Z >= 0.5 && (r = F));
        });
      else {
        if (p) {
          var h = p + x;
          V || D ? (n = Math.floor(o / h), r = Math.ceil(c / h - 1)) : r = n + Math.ceil(Y / h) - 1;
        } else if (V || D) {
          var _ = w - 1;
          if (V ? (n -= _ / 2, r = f + _ / 2) : r = f + _, D) {
            var j = D * w / Y;
            n -= j, r += j;
          }
          n = Math.floor(n), r = Math.ceil(r);
        } else
          r = n + w - 1;
        n = Math.max(n, 0), r = Math.min(r, C - 1);
      }
      return [n, r];
    }
    function Xn() {
      if (Tt && !oe) {
        var e = yn();
        e.push(Zr), ei.apply(null, e).forEach(function(n) {
          if (!ot(n, on)) {
            var r = {};
            r[Be] = function(c) {
              c.stopPropagation();
            }, R(n, r), R(n, an), n.src = Kt(n, "data-src");
            var o = Kt(n, "data-srcset");
            o && (n.srcset = o), $(n, "loading");
          }
        });
      }
    }
    function ao(e) {
      ar(ht(e));
    }
    function so(e) {
      lo(ht(e));
    }
    function ar(e) {
      $(e, "loaded"), Jn(e);
    }
    function lo(e) {
      $(e, "failed"), Jn(e);
    }
    function Jn(e) {
      $(e, on), ne(e, "loading"), q(e, an);
    }
    function ei(e, n, r) {
      var o = [];
      for (r || (r = "img"); e <= n; )
        Re(T[e].querySelectorAll(r), function(c) {
          o.push(c);
        }), e++;
      return o;
    }
    function bn() {
      var e = ei.apply(null, yn());
      Ne(function() {
        wn(e, fr);
      });
    }
    function wn(e, n) {
      if (qn || (e.forEach(function(r, o) {
        !Tt && r.complete && Jn(r), ot(r, on) && e.splice(o, 1);
      }), !e.length))
        return n();
      Ne(function() {
        wn(e, n);
      });
    }
    function sr() {
      Xn(), ti(), rr(), hr(), uo();
    }
    function fo() {
      d && re && (ie.style[B] = ge / 1e3 + "s");
    }
    function lr(e, n) {
      for (var r = [], o = e, c = Math.min(e + n, C); o < c; o++)
        r.push(T[o].offsetHeight);
      return Math.max.apply(null, r);
    }
    function fr() {
      var e = re ? lr(f, w) : lr(U, v), n = ie || te;
      n.style.height !== e && (n.style.height = e + "px");
    }
    function cr() {
      W = [0];
      var e = M ? "left" : "top", n = M ? "right" : "bottom", r = T[0].getBoundingClientRect()[e];
      Re(T, function(o, c) {
        c && W.push(o.getBoundingClientRect()[e] - r), c === C - 1 && W.push(o.getBoundingClientRect()[n] - r);
      });
    }
    function ti() {
      var e = yn(), n = e[0], r = e[1];
      Re(T, function(o, c) {
        c >= n && c <= r ? yt(o, "aria-hidden") && ($e(o, ["aria-hidden", "tabindex"]), $(o, jn)) : yt(o, "aria-hidden") || (se(o, {
          "aria-hidden": "true",
          tabindex: "-1"
        }), ne(o, jn));
      });
    }
    function co() {
      for (var e = f + Math.min(v, w), n = C; n--; ) {
        var r = T[n];
        n >= f && n < e ? ($(r, "tns-moving"), r.style.left = (n - f) * 100 / w + "%", $(r, Pe), ne(r, Te)) : r.style.left && (r.style.left = "", $(r, Te), ne(r, Pe)), ne(r, Xt);
      }
      setTimeout(function() {
        Re(T, function(o) {
          ne(o, "tns-moving");
        });
      }, 300);
    }
    function uo() {
      if (Ce && (pe = Je >= 0 ? Je : Yi(), Je = -1, pe !== ut)) {
        var e = de[ut], n = de[pe];
        se(e, {
          tabindex: "-1",
          "aria-label": dt + (ut + 1)
        }), ne(e, sn), se(n, { "aria-label": dt + (pe + 1) + In }), $e(n, "tabindex"), $(n, sn), ut = pe;
      }
    }
    function ur(e) {
      return e.nodeName.toLowerCase();
    }
    function dr(e) {
      return ur(e) === "button";
    }
    function pr(e) {
      return e.getAttribute("aria-disabled") === "true";
    }
    function xn(e, n, r) {
      e ? n.disabled = r : n.setAttribute("aria-disabled", r.toString());
    }
    function hr() {
      if (!(!Ee || kt || I)) {
        var e = $t ? L.disabled : pr(L), n = Pt ? A.disabled : pr(A), r = f <= Me, o = !kt && f >= ue;
        r && !e && xn($t, L, !0), !r && e && xn($t, L, !1), o && !n && xn(Pt, A, !0), !o && n && xn(Pt, A, !1);
      }
    }
    function _n(e, n) {
      B && (e.style[B] = n);
    }
    function po() {
      return p ? (p + x) * C : W[C];
    }
    function Ht(e) {
      e == null && (e = f);
      var n = D ? x : 0;
      return y ? (Y - n - (W[e + 1] - W[e] - x)) / 2 : p ? (Y - p) / 2 : (w - 1) / 2;
    }
    function ni() {
      var e = D ? x : 0, n = Y + e - po();
      return V && !I && (n = p ? -(p + x) * (C - 1) - Ht() : Ht(C - 1) - W[C - 1]), n > 0 && (n = 0), n;
    }
    function kn(e) {
      e == null && (e = f);
      var n;
      if (M && !y)
        if (p)
          n = -(p + x) * e, V && (n += Ht());
        else {
          var r = he ? C : w;
          V && (e -= Ht()), n = -e * 100 / r;
        }
      else
        n = -W[e], V && y && (n += Ht());
      return zi && (n = Math.max(n, ft)), n += M && !y && !p ? "%" : "px", n;
    }
    function Ft(e) {
      _n(g, "0s"), ii(e);
    }
    function ii(e) {
      e == null && (e = kn()), g.style[Qe] = Ve + e + ct;
    }
    function gr(e, n, r, o) {
      var c = e + w;
      I || (c = Math.min(c, C));
      for (var h = e; h < c; h++) {
        var _ = T[h];
        o || (_.style.left = (h - f) * 100 / w + "%"), Nn && Bt && (_.style[Bt] = _.style[zn] = Nn * (h - e) / 1e3 + "s"), ne(_, n), $(_, r), o && lt.push(_);
      }
    }
    var ho = /* @__PURE__ */ function() {
      return d ? function() {
        _n(g, ""), B || !ge ? (ii(), (!ge || !bi(g)) && Le()) : Gr(g, Qe, Ve, ct, kn(), ge, Le), M || oi();
      } : function() {
        lt = [];
        var e = {};
        e[Be] = e[Ei] = Le, q(T[Ie], e), R(T[f], e), gr(Ie, Pe, Xt, !0), gr(f, Te, Pe), (!Be || !Ei || !ge || !bi(g)) && Le();
      };
    }();
    function ri(e, n) {
      Wn && Bn(), (f !== Ie || n) && (G.emit("indexChanged", X()), G.emit("transitionStart", X()), re && bn(), ae && e && ["click", "keydown"].indexOf(e.type) >= 0 && Gt(), Ue = !0, ho());
    }
    function vr(e) {
      return e.toLowerCase().replace(/-/g, "");
    }
    function Le(e) {
      if (d || Ue) {
        if (G.emit("transitionEnd", X(e)), !d && lt.length > 0)
          for (var n = 0; n < lt.length; n++) {
            var r = lt[n];
            r.style.left = "", zn && Bt && (r.style[zn] = "", r.style[Bt] = ""), ne(r, Xt), $(r, Te);
          }
        if (!e || !d && e.target.parentNode === g || e.target === g && vr(e.propertyName) === vr(Qe)) {
          if (!Wn) {
            var o = f;
            Bn(), f !== o && (G.emit("indexChanged", X()), Ft());
          }
          at === "inner" && G.emit("innerLoaded", X()), Ue = !1, Ie = f;
        }
      }
    }
    function Yt(e, n) {
      if (!ve)
        if (e === "prev")
          Ze(n, -1);
        else if (e === "next")
          Ze(n, 1);
        else {
          if (Ue) {
            if (en)
              return;
            Le();
          }
          var r = pn(), o = 0;
          if (e === "first" ? o = -r : e === "last" ? o = d ? v - w - r : v - 1 - r : (typeof e != "number" && (e = parseInt(e)), isNaN(e) || (n || (e = Math.max(0, Math.min(v - 1, e))), o = e - r)), !d && o && Math.abs(o) < w) {
            var c = o > 0 ? 1 : -1;
            o += f + o - v >= Me ? v * c : v * 2 * c * -1;
          }
          f += o, d && I && (f < Me && (f += v), f > ue && (f -= v)), pn(f) !== pn(Ie) && ri(n);
        }
    }
    function Ze(e, n) {
      if (Ue) {
        if (en)
          return;
        Le();
      }
      var r;
      if (!n) {
        e = Oe(e);
        for (var o = ht(e); o !== H && [L, A].indexOf(o) < 0; )
          o = o.parentNode;
        var c = [L, A].indexOf(o);
        c >= 0 && (r = !0, n = c === 0 ? -1 : 1);
      }
      if (kt) {
        if (f === Me && n === -1) {
          Yt("last", e);
          return;
        } else if (f === ue && n === 1) {
          Yt("first", e);
          return;
        }
      }
      n && (f += st * n, y && (f = Math.floor(f)), ri(r || e && e.type === "keydown" ? e : null));
    }
    function go(e) {
      if (Ue) {
        if (en)
          return;
        Le();
      }
      e = Oe(e);
      for (var n = ht(e), r; n !== K && !yt(n, "data-nav"); )
        n = n.parentNode;
      if (yt(n, "data-nav")) {
        var r = Je = Number(Kt(n, "data-nav")), o = p || y ? r * v / me : r * w, c = Nt ? r : Math.min(Math.ceil(o), v - 1);
        Yt(c, e), pe === r && (ae && Gt(), Je = -1);
      }
    }
    function Tn() {
      ln = setInterval(function() {
        Ze(null, Pi);
      }, Pn), ae = !0;
    }
    function En() {
      clearInterval(ln), ae = !1;
    }
    function mr(e, n) {
      se(N, { "data-action": e }), N.innerHTML = Wt[0] + e + Wt[1] + n;
    }
    function Cn() {
      Tn(), N && mr("stop", Ge[1]);
    }
    function Gt() {
      En(), N && mr("start", Ge[0]);
    }
    function vo() {
      Q && !ae && (Cn(), pt = !1);
    }
    function mo() {
      ae && (Gt(), pt = !0);
    }
    function yr() {
      ae ? (Gt(), pt = !0) : (Cn(), pt = !1);
    }
    function yo() {
      i.hidden ? ae && (En(), cn = !0) : cn && (Tn(), cn = !1);
    }
    function bo() {
      ae && (En(), fn = !0);
    }
    function wo() {
      fn && (Tn(), fn = !1);
    }
    function xo(e) {
      e = Oe(e);
      var n = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
      n >= 0 && Ze(e, n === 0 ? -1 : 1);
    }
    function _o(e) {
      e = Oe(e);
      var n = [l.LEFT, l.RIGHT].indexOf(e.keyCode);
      n >= 0 && (n === 0 ? L.disabled || Ze(e, -1) : A.disabled || Ze(e, 1));
    }
    function br(e) {
      e.focus();
    }
    function ko(e) {
      e = Oe(e);
      var n = i.activeElement;
      if (yt(n, "data-nav")) {
        var r = [l.LEFT, l.RIGHT, l.ENTER, l.SPACE].indexOf(e.keyCode), o = Number(Kt(n, "data-nav"));
        r >= 0 && (r === 0 ? o > 0 && br(de[o - 1]) : r === 1 ? o < me - 1 && br(de[o + 1]) : (Je = o, Yt(o, e)));
      }
    }
    function Oe(e) {
      return e = e || a.event, it(e) ? e.changedTouches[0] : e;
    }
    function ht(e) {
      return e.target || a.event.srcElement;
    }
    function it(e) {
      return e.type.indexOf("touch") >= 0;
    }
    function wr(e) {
      e.preventDefault ? e.preventDefault() : e.returnValue = !1;
    }
    function xr() {
      return Wr(Pr(_e.y - et.y, _e.x - et.x), tn) === t.axis;
    }
    function _r(e) {
      if (Ue) {
        if (en)
          return;
        Le();
      }
      Q && ae && En(), tt = !0, ye && (Sn(ye), ye = null);
      var n = Oe(e);
      G.emit(it(e) ? "touchStart" : "dragStart", X(e)), !it(e) && ["img", "a"].indexOf(ur(ht(e))) >= 0 && wr(e), _e.x = et.x = n.clientX, _e.y = et.y = n.clientY, d && (un = parseFloat(g.style[Qe].replace(Ve, "")), _n(g, "0s"));
    }
    function kr(e) {
      if (tt) {
        var n = Oe(e);
        _e.x = n.clientX, _e.y = n.clientY, d ? ye || (ye = Ne(function() {
          Tr(e);
        })) : (Se === "?" && (Se = xr()), Se && (Rt = !0)), (typeof e.cancelable != "boolean" || e.cancelable) && Rt && e.preventDefault();
      }
    }
    function Tr(e) {
      if (!Se) {
        tt = !1;
        return;
      }
      if (Sn(ye), tt && (ye = Ne(function() {
        Tr(e);
      })), Se === "?" && (Se = xr()), Se) {
        !Rt && it(e) && (Rt = !0);
        try {
          e.type && G.emit(it(e) ? "touchMove" : "dragMove", X(e));
        } catch {
        }
        var n = un, r = Un(_e, et);
        if (!M || p || y)
          n += r, n += "px";
        else {
          var o = he ? r * w * 100 / ((Y + x) * C) : r * 100 / (Y + x);
          n += o, n += "%";
        }
        g.style[Qe] = Ve + n + ct;
      }
    }
    function Mn(e) {
      if (tt) {
        ye && (Sn(ye), ye = null), d && _n(g, ""), tt = !1;
        var n = Oe(e);
        _e.x = n.clientX, _e.y = n.clientY;
        var r = Un(_e, et);
        if (Math.abs(r)) {
          if (!it(e)) {
            var o = ht(e);
            R(o, { click: function c(h) {
              wr(h), q(o, { click: c });
            } });
          }
          d ? ye = Ne(function() {
            if (M && !y) {
              var c = -r * w / (Y + x);
              c = r > 0 ? Math.floor(c) : Math.ceil(c), f += c;
            } else {
              var h = -(un + r);
              if (h <= 0)
                f = Me;
              else if (h >= W[C - 1])
                f = ue;
              else
                for (var _ = 0; _ < C && h >= W[_]; )
                  f = _, h > W[_] && r < 0 && (f += 1), _++;
            }
            ri(e, r), G.emit(it(e) ? "touchEnd" : "dragEnd", X(e));
          }) : Se && Ze(e, r > 0 ? -1 : 1);
        }
      }
      t.preventScrollOnTouch === "auto" && (Rt = !1), tn && (Se = "?"), Q && !ae && Tn();
    }
    function oi() {
      var e = ie || te;
      e.style.height = W[f + w] - W[f] + "px";
    }
    function Er() {
      var e = p ? (p + x) * v / Y : v / w;
      return Math.min(Math.ceil(e), v);
    }
    function ai() {
      if (!(!Ce || Nt) && me !== Xe) {
        var e = Xe, n = me, r = fe;
        for (Xe > me && (e = me, n = Xe, r = le); e < n; )
          r(de[e]), e++;
        Xe = me;
      }
    }
    function X(e) {
      return {
        container: g,
        slideItems: T,
        navContainer: K,
        navItems: de,
        controlsContainer: H,
        hasControls: rn,
        prevButton: L,
        nextButton: A,
        items: w,
        slideBy: st,
        cloneCount: U,
        slideCount: v,
        slideCountNew: C,
        index: f,
        indexCached: Ie,
        displayIndex: Hi(),
        navCurrentIndex: pe,
        navCurrentIndexCached: ut,
        pages: me,
        pagesCached: Xe,
        sheet: S,
        isOn: _t,
        event: e || {}
      };
    }
    return {
      version: "2.9.4",
      getInfo: X,
      events: G,
      goTo: Yt,
      play: vo,
      pause: mo,
      isOn: _t,
      updateSliderHeight: fr,
      refresh: Ui,
      destroy: io,
      rebuild: function() {
        return ki(Ln(t, Mi));
      }
    };
  };
  const jr = `.crs_popup_wrapper {\r
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
`, qr = "https://conversionratestore.github.io/projects/grantme", Zt = {
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
  }, Ti = [
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
  ], Vr = {
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
  }, Ir = (
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
  <span class="back">${Zt.back}Back</span>
  <h2>When is the best time to remind you?</h2>
  <p>We'll email you a link to access the FREE webinar at your convenience.</p>
  <div class="popup_form">
  <label>
    <input type="email" placeholder="Your parents email">
    ${Zt.mail}
  </label>
  <label>
    <input type="tel" placeholder="Your parents phone">
    ${Zt.phone}
  </label>
  </div>
  <button class="main">Get a Reminder</button>
</div>
`
  ), Ur = (t, i) => {
    const a = Vr[t][i], l = (
      /*HTML*/
      `
    <div class="popup_main active">
      <h3>${a.h3}</h3>
      <p>${a.p1}</p>
      <div >
        <img src="${qr}/img/grantme_logo.png" alt="logo" />
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
    ${t === "student" ? Ir : ""}
  `
    );
    return (
      /*HTML*/
      `
  <div class="crs_popup_wrapper">
    <style>
      ${jr}
    </style>
    <div class="popup_root">
      <span class="popup_close">${Zt.close}</span>
      <div class="popup_content">
        ${l}
      </div>
      <div class="slider_desktop">
        <h3>Our Student Success Stories</h3>
        <ul class="thumbs">
          ${Ti.map((u) => (
        /*HTML*/
        `
                <li>
                  <img src="${u.thumb}" alt="photo">
                </li>
              `
      )).join("")}
        </ul>
        <div class="slider_stories">
          ${Ti.map((u) => (
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
  Mr({ name: "EIP Grade Type", dev: "YK" }), Sr(["https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css"]);
  class Kr {
    constructor() {
      this.userType = "student", this.grade = this.checkGrade(), this.device = window.innerWidth > 768 ? "desktop" : "mobile", this.init(), this.userType = window.location.href.includes("parent") ? "parent" : "student";
    }
    init() {
      this.renderPopup(), this.bindEvents(), this.bindTriggers(), this.bindTracking();
    }
    renderPopup() {
      document.body.insertAdjacentHTML("beforeend", Ur(this.userType, this.grade)), this.slider = ki({
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
      const i = be(".crs_popup_wrapper .popup_close"), a = be(".crs_popup_wrapper"), l = be(".popup_main button.main");
      if (i.addEventListener("click", () => {
        a.classList.remove("show"), De(`exp_eip_grade_type_close_${this.userType}_${this.grade}`, "Close button", "click", "Main Popup");
      }), a.addEventListener("click", (P) => {
        P.target === a && (a.classList.remove("show"), De(`exp_eip_grade_type_close_bg_${this.userType}_${this.grade}`, "Close bg", "click", "Main Popup"));
      }), l.addEventListener("click", () => {
        a.classList.remove("show"), Lr("#newScheduleBox"), De(`exp_eip_grade_type_main_btn_${this.userType}_${this.grade}`, "Main button", "click", "Main Popup");
      }), this.userType === "parent")
        return;
      const s = be(".popup2_1 button.main"), u = be(".crs_popup_wrapper span.back"), k = be(".crs_popup_wrapper button.secondary"), b = be(".popup_main"), E = be(".popup2_1");
      hi(".popup2_1 input").forEach((P) => {
        P.addEventListener("input", () => {
          P.value && P.closest("label").classList.remove("error");
        }), P.addEventListener("click", () => {
          De(
            `exp_eip_grade_type_input_${this.userType}_${this.grade}`,
            `${P.type} input`,
            "input",
            "Second Popup"
          );
        });
      }), k.addEventListener("click", () => {
        b.classList.remove("active"), E.classList.add("active"), De(`exp_eip_grade_type_share_${this.userType}_${this.grade}`, "Share button", "click", "Main Popup");
      }), u.addEventListener("click", () => {
        b.classList.add("active"), E.classList.remove("active"), De(`exp_eip_grade_type_back_${this.userType}_${this.grade}`, "Back button", "click", "Second Popup");
      }), s.addEventListener("click", () => {
        const P = hi(".popup2_1 input");
        let he = !0;
        P.forEach((ce) => {
          ce.value || (ce.closest("label").classList.add("error"), he = !1), ce.type === "email" && !ce.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/) && (ce.closest("label").classList.add("error"), he = !1), ce.type === "tel" && !ce.value.match(/^\d{8,12}$/) && (ce.closest("label").classList.add("error"), he = !1);
        }), he && (a.classList.remove("show"), console.log("send"), De(
          `exp_eip_grade_type_submit_form_${this.userType}_${this.grade}`,
          "Submit form",
          "submit",
          "Second Popup"
        ));
      });
    }
    bindTriggers() {
      be(".crs_popup_wrapper"), document.body.addEventListener("mouseleave", (l) => {
        this.showPopup();
      }), this.device === "mobile" && Ar(window, (l) => {
        l > 150 && this.showPopup();
      });
      let i;
      const a = () => {
        i = setTimeout(() => {
          let l = new IntersectionObserver(
            (u, k) => {
              u.forEach((b) => {
                b.isIntersecting || this.showPopup();
              });
            },
            { threshold: 0.5 }
          ), s = document.querySelector("#newScheduleBox");
          s && l.observe(s);
        }, 2e4);
      };
      a(), be(".book_free_call_btn").addEventListener("click", () => {
        clearTimeout(i), a();
      });
    }
    showPopup() {
      if (localStorage.getItem("showPopup"))
        return;
      be(".crs_popup_wrapper").classList.add("show"), localStorage.setItem("showPopup", "true");
    }
    bindTracking() {
      gi(
        ".crs_popup_wrapper .popup_main",
        `exp_eip_grade_type_main_${this.userType}_${this.grade}`,
        "Main Popup",
        "Visibulity of Main Popup"
      ), gi(
        ".crs_popup_wrapper .popup2_1",
        `exp_eip_grade_type_second_${this.userType}_${this.grade}`,
        "Second Popup",
        "Visibulity of Second Popup"
      );
    }
  }
  new Kr();
})();
//# sourceMappingURL=index.js.map
