(function() {
  "use strict";
  const I = (g, s, a, c = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: g,
      event_desc: s,
      event_type: a,
      event_loc: c
    }), console.log(`Event: ${g} | ${s} | ${a} | ${c}`);
  }, H = ({ name: g, dev: s }) => {
    console.log(
      `%c EXP: ${g} (DEV: ${s})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, O = (g) => {
    let s = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(s), window.clarity("set", g, "variant_1"));
    }, 1e3);
  }, U = (g, s, a, c) => {
    let h = [];
    if (typeof g == "string")
      h = document.querySelectorAll(g);
    else if (g instanceof Element)
      h = [g];
    else {
      console.error("Invalid target type:", g);
      return;
    }
    let A = new IntersectionObserver(
      (m) => {
        m.forEach((w) => {
          w.isIntersecting && (A.unobserve(w.target), setTimeout(function() {
            f.observe(w.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), f = new IntersectionObserver((m) => {
      m.forEach((w) => {
        w.isIntersecting ? (I(s || `view_element_${w.target.id}`, a || "Element visibility", "view", c || w.target.id), A.unobserve(w.target)) : A.observe(w.target), f.unobserve(w.target);
      });
    });
    h.forEach((m) => {
      A.observe(m);
    });
  }, E = "https://conversionratestore.github.io/projects/goiteens/1st_hypothesis", M = "accordion_index";
  function X(g) {
    return g && g.__esModule && Object.prototype.hasOwnProperty.call(g, "default") ? g.default : g;
  }
  var W = { exports: {} };
  (function(g) {
    (function(s) {
      g.exports ? g.exports = s() : window.intlTelInput = s();
    })(function(s) {
      return function() {
        for (var a = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua & Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia & Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros", "km", "269"], ["Congo - Brazzaville", "cg", "242"], ["Congo - Kinshasa", "cd", "243"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran", "ir", "98"], ["Iraq", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar (Burma)", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["North Macedonia", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["Réunion", "re", "262", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé & Príncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain", "es", "34"], ["Sri Lanka", "lk", "94"], ["St Barthélemy", "bl", "590", 1], ["St Helena", "sh", "290"], ["St Kitts & Nevis", "kn", "1", 18, ["869"]], ["St Lucia", "lc", "1", 19, ["758"]], ["St Martin", "mf", "590", 2], ["St Pierre & Miquelon", "pm", "508"], ["St Vincent & Grenadines", "vc", "1", 20, ["784"]], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard & Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden", "se", "46"], ["Switzerland", "ch", "41"], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad & Tobago", "tt", "1", 22, ["868"]], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks & Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["US Virgin Islands", "vi", "1", 24, ["340"]], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis & Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1, ["5288", "5289"]], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]]], c = 0; c < a.length; c++) {
          var h = a[c];
          a[c] = {
            name: h[0],
            iso2: h[1],
            dialCode: h[2],
            priority: h[3] || 0,
            areaCodes: h[4] || null
          };
        }
        function A(p) {
          for (var i = 1; i < arguments.length; i++) {
            var t = arguments[i] != null ? Object(arguments[i]) : {}, e = Object.keys(t);
            typeof Object.getOwnPropertySymbols == "function" && e.push.apply(e, Object.getOwnPropertySymbols(t).filter(function(n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })), e.forEach(function(n) {
              f(p, n, t[n]);
            });
          }
          return p;
        }
        function f(p, i, t) {
          return i = _(i), i in p ? Object.defineProperty(p, i, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : p[i] = t, p;
        }
        function m(p, i) {
          if (!(p instanceof i))
            throw new TypeError("Cannot call a class as a function");
        }
        function w(p, i) {
          for (var t = 0; t < i.length; t++) {
            var e = i[t];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(p, _(e.key), e);
          }
        }
        function L(p, i, t) {
          return i && w(p.prototype, i), t && w(p, t), Object.defineProperty(p, "prototype", {
            writable: !1
          }), p;
        }
        function _(p) {
          var i = B(p, "string");
          return typeof i == "symbol" ? i : String(i);
        }
        function B(p, i) {
          if (typeof p != "object" || p === null)
            return p;
          var t = p[Symbol.toPrimitive];
          if (t !== s) {
            var e = t.call(p, i || "default");
            if (typeof e != "object")
              return e;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (i === "string" ? String : Number)(p);
        }
        var b = {
          getInstance: function(i) {
            var t = i.getAttribute("data-intl-tel-input-id");
            return window.intlTelInputGlobals.instances[t];
          },
          instances: {},
          // using a global like this allows us to mock it in the tests
          documentReady: function() {
            return document.readyState === "complete";
          }
        };
        typeof window == "object" && (window.intlTelInputGlobals = b);
        var P = 0, T = {
          // whether or not to allow the dropdown
          allowDropdown: !0,
          // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
          // also listen for blur/submit and auto remove dial code if that's all there is
          autoInsertDialCode: !1,
          // add a placeholder in the input with an example number for the selected country
          autoPlaceholder: "polite",
          // add a country search input at the top of the dropdown
          countrySearch: !1,
          // modify the parentClass
          customContainer: "",
          // modify the auto placeholder
          customPlaceholder: null,
          // append menu to specified element
          dropdownContainer: null,
          // don't display these countries
          excludeCountries: [],
          // fix the dropdown width to the input width (rather than being as wide as the longest country name)
          fixDropdownWidth: !1,
          // format the input value during initialisation and on setNumber
          formatOnDisplay: !0,
          // geoIp lookup function
          geoIpLookup: null,
          // inject a hidden input with this name, and on submit, populate it with the result of getNumber
          hiddenInput: "",
          // initial country
          initialCountry: "",
          // localized country names e.g. { 'de': 'Deutschland' }
          localizedCountries: null,
          // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
          nationalMode: !0,
          // display only these countries
          onlyCountries: [],
          // number type to use for placeholders
          placeholderNumberType: "MOBILE",
          // the countries at the top of the list. defaults to united states and united kingdom
          preferredCountries: ["us", "gb"],
          // display the country dial code next to the selected flag
          separateDialCode: !1,
          // option to hide the flags - must be used with separateDialCode, or allowDropdown=false
          showFlags: !0,
          // use full screen popup instead of dropdown for country list
          useFullscreenPopup: typeof navigator < "u" && typeof window < "u" ? (
            // we cannot just test screen size as some smartphones/website meta tags will report desktop
            // resolutions
            // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500
          ) : !1,
          // specify the path to the libphonenumber script to enable validation/formatting
          utilsScript: ""
        }, G = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"], k = function(i, t) {
          for (var e = Object.keys(i), n = 0; n < e.length; n++)
            t(e[n], i[e[n]]);
        }, z = function(i) {
          k(window.intlTelInputGlobals.instances, function(t) {
            window.intlTelInputGlobals.instances[t][i]();
          });
        }, lt = /* @__PURE__ */ function() {
          function p(i, t) {
            var e = this;
            m(this, p), this.id = P++, this.telInput = i, this.activeItem = null, this.highlightedItem = null;
            var n = t || {};
            this.options = {}, k(T, function(o, r) {
              e.options[o] = n.hasOwnProperty(o) ? n[o] : r;
            }), this.hadInitialPlaceholder = !!i.getAttribute("placeholder");
          }
          return L(p, [{
            key: "_init",
            value: function() {
              var t = this;
              this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !1), this.options.countrySearch && !this.options.useFullscreenPopup && (this.options.fixDropdownWidth = !0), this.options.nationalMode && (this.options.autoInsertDialCode = !1), this.options.separateDialCode && (this.options.autoInsertDialCode = !1);
              var e = this.options.allowDropdown && !this.options.separateDialCode;
              if (!this.options.showFlags && e && (this.options.showFlags = !0), this.options.useFullscreenPopup && !this.options.dropdownContainer && (this.options.dropdownContainer = document.body), this.isRTL = !!this.telInput.closest("[dir=rtl]"), typeof Promise < "u") {
                var n = new Promise(function(r, d) {
                  t.resolveAutoCountryPromise = r, t.rejectAutoCountryPromise = d;
                }), o = new Promise(function(r, d) {
                  t.resolveUtilsScriptPromise = r, t.rejectUtilsScriptPromise = d;
                });
                this.promise = Promise.all([n, o]);
              } else
                this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {
                }, this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {
                };
              this.selectedCountryData = {}, this._processCountryData(), this._generateMarkup(), this._setInitialState(), this._initListeners(), this._initRequests();
            }
          }, {
            key: "_processCountryData",
            value: function() {
              this._processAllCountries(), this._processCountryCodes(), this._processPreferredCountries(), this.options.localizedCountries && this._translateCountriesByLocale(), (this.options.onlyCountries.length || this.options.localizedCountries) && this.countries.sort(this._countryNameSort);
            }
          }, {
            key: "_addCountryCode",
            value: function(t, e, n) {
              e.length > this.countryCodeMaxLen && (this.countryCodeMaxLen = e.length), this.countryCodes.hasOwnProperty(e) || (this.countryCodes[e] = []);
              for (var o = 0; o < this.countryCodes[e].length; o++)
                if (this.countryCodes[e][o] === t)
                  return;
              var r = n !== s ? n : this.countryCodes[e].length;
              this.countryCodes[e][r] = t;
            }
          }, {
            key: "_processAllCountries",
            value: function() {
              if (this.options.onlyCountries.length) {
                var t = this.options.onlyCountries.map(function(n) {
                  return n.toLowerCase();
                });
                this.countries = a.filter(function(n) {
                  return t.indexOf(n.iso2) > -1;
                });
              } else if (this.options.excludeCountries.length) {
                var e = this.options.excludeCountries.map(function(n) {
                  return n.toLowerCase();
                });
                this.countries = a.filter(function(n) {
                  return e.indexOf(n.iso2) === -1;
                });
              } else
                this.countries = a;
            }
          }, {
            key: "_translateCountriesByLocale",
            value: function() {
              for (var t = 0; t < this.countries.length; t++) {
                var e = this.countries[t].iso2.toLowerCase();
                this.options.localizedCountries.hasOwnProperty(e) && (this.countries[t].name = this.options.localizedCountries[e]);
              }
            }
          }, {
            key: "_countryNameSort",
            value: function(t, e) {
              return t.name < e.name ? -1 : t.name > e.name ? 1 : 0;
            }
          }, {
            key: "_processCountryCodes",
            value: function() {
              this.countryCodeMaxLen = 0, this.dialCodes = {}, this.countryCodes = {};
              for (var t = 0; t < this.countries.length; t++) {
                var e = this.countries[t];
                this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0), this._addCountryCode(e.iso2, e.dialCode, e.priority);
              }
              for (var n = 0; n < this.countries.length; n++) {
                var o = this.countries[n];
                if (o.areaCodes)
                  for (var r = this.countryCodes[o.dialCode][0], d = 0; d < o.areaCodes.length; d++) {
                    for (var l = o.areaCodes[d], u = 1; u < l.length; u++) {
                      var v = o.dialCode + l.substr(0, u);
                      this._addCountryCode(r, v), this._addCountryCode(o.iso2, v);
                    }
                    this._addCountryCode(o.iso2, o.dialCode + l);
                  }
              }
            }
          }, {
            key: "_processPreferredCountries",
            value: function() {
              this.preferredCountries = [];
              for (var t = 0; t < this.options.preferredCountries.length; t++) {
                var e = this.options.preferredCountries[t].toLowerCase(), n = this._getCountryData(e, !1, !0);
                n && this.preferredCountries.push(n);
              }
            }
          }, {
            key: "_createEl",
            value: function(t, e, n) {
              var o = document.createElement(t);
              return e && k(e, function(r, d) {
                return o.setAttribute(r, d);
              }), n && n.appendChild(o), o;
            }
          }, {
            key: "_generateMarkup",
            value: function() {
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off");
              var t = this.options, e = t.allowDropdown, n = t.separateDialCode, o = t.showFlags, r = t.customContainer, d = t.hiddenInput, l = t.dropdownContainer, u = t.fixDropdownWidth, v = t.useFullscreenPopup, y = t.countrySearch, x = "iti";
              e && (x += " iti--allow-dropdown"), n && (x += " iti--separate-dial-code"), o && (x += " iti--show-flags"), r && (x += " ".concat(r));
              var C = this._createEl("div", {
                class: x
              });
              this.telInput.parentNode.insertBefore(C, this.telInput);
              var F = e || o || n;
              if (F && (this.flagsContainer = this._createEl("div", {
                class: "iti__flag-container"
              }, C)), C.appendChild(this.telInput), F && (this.selectedFlag = this._createEl("div", A({
                class: "iti__selected-flag"
              }, e && {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                "aria-expanded": "false",
                "aria-label": "Telephone country code"
              }), this.flagsContainer)), o && (this.selectedFlagInner = this._createEl("div", {
                class: "iti__flag"
              }, this.selectedFlag)), this.selectedFlag && this.telInput.disabled && this.selectedFlag.setAttribute("aria-disabled", "true"), n && (this.selectedDialCode = this._createEl("div", {
                class: "iti__selected-dial-code"
              }, this.selectedFlag)), e) {
                this.telInput.disabled || this.selectedFlag.setAttribute("tabindex", "0"), this.dropdownArrow = this._createEl("div", {
                  class: "iti__arrow"
                }, this.selectedFlag);
                var dt = u ? "" : "iti--flexible-dropdown-width";
                if (this.dropdownContent = this._createEl("div", {
                  class: "iti__dropdown-content iti__hide ".concat(dt)
                }), y && (this.searchInput = this._createEl("input", {
                  type: "text",
                  class: "iti__search-input",
                  placeholder: "Search"
                }, this.dropdownContent)), this.countryList = this._createEl("ul", {
                  class: "iti__country-list",
                  id: "iti-".concat(this.id, "__country-listbox"),
                  role: "listbox",
                  "aria-label": "List of countries"
                }, this.dropdownContent), this.preferredCountries.length && !y && (this._appendListItems(this.preferredCountries, "iti__preferred", !0), this._createEl("li", {
                  class: "iti__divider",
                  "aria-hidden": "true"
                }, this.countryList)), this._appendListItems(this.countries, "iti__standard"), l) {
                  var S = "iti iti--container";
                  v && (S += " iti--fullscreen-popup"), y && (S += " iti--country-search"), this.dropdown = this._createEl("div", {
                    class: S
                  }), this.dropdown.appendChild(this.dropdownContent);
                } else
                  this.flagsContainer.appendChild(this.dropdownContent);
              }
              if (d) {
                var Y = d, j = this.telInput.getAttribute("name");
                if (j) {
                  var R = j.lastIndexOf("[");
                  R !== -1 && (Y = "".concat(j.substr(0, R), "[").concat(Y, "]"));
                }
                this.hiddenInput = this._createEl("input", {
                  type: "hidden",
                  name: Y
                }), C.appendChild(this.hiddenInput);
              }
            }
          }, {
            key: "_appendListItems",
            value: function(t, e, n) {
              for (var o = 0; o < t.length; o++) {
                var r = t[o], d = n ? "-preferred" : "", l = this._createEl("li", {
                  id: "iti-".concat(this.id, "__item-").concat(r.iso2).concat(d),
                  class: "iti__country ".concat(e),
                  tabindex: "-1",
                  role: "option",
                  "data-dial-code": r.dialCode,
                  "data-country-code": r.iso2,
                  "aria-selected": "false"
                }, this.countryList);
                r.node = l;
                var u = "";
                this.options.showFlags && (u += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(r.iso2, "'></div></div>")), u += "<span class='iti__country-name'>".concat(r.name, "</span>"), u += "<span class='iti__dial-code'>+".concat(r.dialCode, "</span>"), l.insertAdjacentHTML("beforeend", u);
              }
            }
          }, {
            key: "_setInitialState",
            value: function() {
              var t = this.telInput.getAttribute("value"), e = this.telInput.value, n = t && t.charAt(0) === "+" && (!e || e.charAt(0) !== "+"), o = n ? t : e, r = this._getDialCode(o), d = this._isRegionlessNanp(o), l = this.options, u = l.initialCountry, v = l.autoInsertDialCode;
              if (r && !d)
                this._updateFlagFromNumber(o);
              else if (u !== "auto") {
                var y = u && this._getCountryData(u, !1, !0);
                y ? this._setFlag(u.toLowerCase()) : r && d ? this._setFlag("us") : (this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2, o || this._setFlag(this.defaultCountry)), !o && v && (this.telInput.value = "+".concat(this.selectedCountryData.dialCode));
              }
              o && this._updateValFromNumber(o);
            }
          }, {
            key: "_initListeners",
            value: function() {
              this._initKeyListeners(), this.options.autoInsertDialCode && this._initBlurListeners(), this.options.allowDropdown && this._initDropdownListeners(), this.hiddenInput && this._initHiddenInputListener();
            }
          }, {
            key: "_initHiddenInputListener",
            value: function() {
              var t = this;
              this._handleHiddenInputSubmit = function() {
                t.hiddenInput.value = t.getNumber();
              }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
            }
          }, {
            key: "_getClosestLabel",
            value: function() {
              for (var t = this.telInput; t && t.tagName !== "LABEL"; )
                t = t.parentNode;
              return t;
            }
          }, {
            key: "_initDropdownListeners",
            value: function() {
              var t = this;
              this._handleLabelClick = function(n) {
                t.dropdownContent.classList.contains("iti__hide") ? t.telInput.focus() : n.preventDefault();
              };
              var e = this._getClosestLabel();
              e && e.addEventListener("click", this._handleLabelClick), this._handleClickSelectedFlag = function() {
                t.dropdownContent.classList.contains("iti__hide") && !t.telInput.disabled && !t.telInput.readOnly && t._showDropdown();
              }, this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag), this._handleFlagsContainerKeydown = function(n) {
                var o = t.dropdownContent.classList.contains("iti__hide");
                o && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(n.key) && (n.preventDefault(), n.stopPropagation(), t._showDropdown()), n.key === "Tab" && t._closeDropdown();
              }, this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
            }
          }, {
            key: "_initRequests",
            value: function() {
              var t = this;
              this.options.utilsScript && !window.intlTelInputUtils ? window.intlTelInputGlobals.documentReady() ? window.intlTelInputGlobals.loadUtils(this.options.utilsScript) : window.addEventListener("load", function() {
                window.intlTelInputGlobals.loadUtils(t.options.utilsScript);
              }) : this.resolveUtilsScriptPromise(), this.options.initialCountry === "auto" ? this._loadAutoCountry() : this.resolveAutoCountryPromise();
            }
          }, {
            key: "_loadAutoCountry",
            value: function() {
              window.intlTelInputGlobals.autoCountry ? this.handleAutoCountry() : window.intlTelInputGlobals.startedLoadingAutoCountry || (window.intlTelInputGlobals.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup(function(t) {
                window.intlTelInputGlobals.autoCountry = t.toLowerCase(), setTimeout(function() {
                  return z("handleAutoCountry");
                });
              }, function() {
                return z("rejectAutoCountryPromise");
              }));
            }
          }, {
            key: "_initKeyListeners",
            value: function() {
              var t = this;
              this._handleKeyupEvent = function() {
                t._updateFlagFromNumber(t.telInput.value) && t._triggerCountryChange();
              }, this.telInput.addEventListener("keyup", this._handleKeyupEvent), this._handleClipboardEvent = function() {
                setTimeout(t._handleKeyupEvent);
              }, this.telInput.addEventListener("cut", this._handleClipboardEvent), this.telInput.addEventListener("paste", this._handleClipboardEvent);
            }
          }, {
            key: "_cap",
            value: function(t) {
              var e = this.telInput.getAttribute("maxlength");
              return e && t.length > e ? t.substr(0, e) : t;
            }
          }, {
            key: "_initBlurListeners",
            value: function() {
              var t = this;
              this._handleSubmitOrBlurEvent = function() {
                t._removeEmptyDialCode();
              }, this.telInput.form && this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
            }
          }, {
            key: "_removeEmptyDialCode",
            value: function() {
              if (this.telInput.value.charAt(0) === "+") {
                var t = this._getNumeric(this.telInput.value);
                (!t || this.selectedCountryData.dialCode === t) && (this.telInput.value = "");
              }
            }
          }, {
            key: "_getNumeric",
            value: function(t) {
              return t.replace(/\D/g, "");
            }
          }, {
            key: "_trigger",
            value: function(t) {
              var e = document.createEvent("Event");
              e.initEvent(t, !0, !0), this.telInput.dispatchEvent(e);
            }
          }, {
            key: "_showDropdown",
            value: function() {
              this.options.fixDropdownWidth && (this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px")), this.dropdownContent.classList.remove("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "true"), this._setDropdownPosition(), this.options.countrySearch ? (this._highlightListItem(this.countryList.firstElementChild, !1), this.searchInput.focus()) : this.activeItem && (this._highlightListItem(this.activeItem, !1), this._scrollTo(this.activeItem, !0)), this._bindDropdownListeners(), this.dropdownArrow.classList.add("iti__arrow--up"), this._trigger("open:countrydropdown");
            }
          }, {
            key: "_toggleClass",
            value: function(t, e, n) {
              n && !t.classList.contains(e) ? t.classList.add(e) : !n && t.classList.contains(e) && t.classList.remove(e);
            }
          }, {
            key: "_setDropdownPosition",
            value: function() {
              var t = this;
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.dropdown), !this.options.useFullscreenPopup) {
                var e = this.telInput.getBoundingClientRect(), n = window.pageYOffset || document.documentElement.scrollTop, o = e.top + n, r = this.dropdownContent.offsetHeight, d = o + this.telInput.offsetHeight + r < n + window.innerHeight, l = o - r > n, u = !this.options.countrySearch && !d && l;
                if (this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", u), this.options.dropdownContainer) {
                  var v = u ? 0 : this.telInput.offsetHeight;
                  this.dropdown.style.top = "".concat(o + v, "px"), this.dropdown.style.left = "".concat(e.left + document.body.scrollLeft, "px"), this._handleWindowScroll = function() {
                    return t._closeDropdown();
                  }, window.addEventListener("scroll", this._handleWindowScroll);
                }
              }
            }
          }, {
            key: "_getClosestListItem",
            value: function(t) {
              for (var e = t; e && e !== this.countryList && !e.classList.contains("iti__country"); )
                e = e.parentNode;
              return e === this.countryList ? null : e;
            }
          }, {
            key: "_bindDropdownListeners",
            value: function() {
              var t = this;
              this._handleMouseoverCountryList = function(l) {
                var u = t._getClosestListItem(l.target);
                u && t._highlightListItem(u, !1);
              }, this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList), this._handleClickCountryList = function(l) {
                var u = t._getClosestListItem(l.target);
                u && t._selectListItem(u);
              }, this.countryList.addEventListener("click", this._handleClickCountryList);
              var e = !0;
              this._handleClickOffToClose = function() {
                e || t._closeDropdown(), e = !1;
              }, document.documentElement.addEventListener("click", this._handleClickOffToClose);
              var n = "", o = null;
              if (this._handleKeydownOnDropdown = function(l) {
                ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(l.key) && (l.preventDefault(), l.stopPropagation(), l.key === "ArrowUp" || l.key === "ArrowDown" ? t._handleUpDownKey(l.key) : l.key === "Enter" ? t._handleEnterKey() : l.key === "Escape" && t._closeDropdown()), !t.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(l.key) && (l.stopPropagation(), o && clearTimeout(o), n += l.key.toLowerCase(), t._searchForCountry(n), o = setTimeout(function() {
                  n = "";
                }, 1e3));
              }, document.addEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch) {
                var r = function() {
                  var u = t.searchInput.value.trim();
                  u ? t._filterCountries(u.toLowerCase()) : t._filterCountries(null, !0);
                }, d = null;
                this._handleSearchChange = function() {
                  d && clearTimeout(d), d = setTimeout(function() {
                    r(), d = null;
                  }, 100);
                }, this.searchInput.addEventListener("input", this._handleSearchChange), this.searchInput.addEventListener("click", function(l) {
                  return l.stopPropagation();
                });
              }
            }
          }, {
            key: "_filterCountries",
            value: function(t) {
              var e = arguments.length > 1 && arguments[1] !== s ? arguments[1] : !1, n = !0;
              this.countryList.innerHTML = "";
              for (var o = 0; o < this.countries.length; o++) {
                var r = this.countries[o], d = r.name.toLowerCase(), l = "+".concat(r.dialCode);
                (e || d.includes(t) || l.includes(t)) && (this.countryList.appendChild(r.node), n && (this._highlightListItem(r.node, !1), n = !1));
              }
            }
          }, {
            key: "_handleUpDownKey",
            value: function(t) {
              var e = t === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
              if (e ? e.classList.contains("iti__divider") && (e = t === "ArrowUp" ? e.previousElementSibling : e.nextElementSibling) : this.countryList.childElementCount > 1 && (e = t === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild), e) {
                var n = !this.options.countrySearch;
                this._highlightListItem(e, n), this.options.countrySearch && this._scrollTo(e, !1);
              }
            }
          }, {
            key: "_handleEnterKey",
            value: function() {
              this.highlightedItem && this._selectListItem(this.highlightedItem);
            }
          }, {
            key: "_searchForCountry",
            value: function(t) {
              for (var e = 0; e < this.countries.length; e++)
                if (this._startsWith(this.countries[e].name, t)) {
                  var n = this.countries[e].node;
                  this._highlightListItem(n, !1), this._scrollTo(n, !0);
                  break;
                }
            }
          }, {
            key: "_startsWith",
            value: function(t, e) {
              return t.substr(0, e.length).toLowerCase() === e;
            }
          }, {
            key: "_updateValFromNumber",
            value: function(t) {
              var e = t;
              if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                var n = this.options.nationalMode || e.charAt(0) !== "+" && !this.options.separateDialCode, o = intlTelInputUtils.numberFormat, r = o.NATIONAL, d = o.INTERNATIONAL, l = n ? r : d;
                e = intlTelInputUtils.formatNumber(e, this.selectedCountryData.iso2, l);
              }
              e = this._beforeSetNumber(e), this.telInput.value = e;
            }
          }, {
            key: "_updateFlagFromNumber",
            value: function(t) {
              var e = t.indexOf("+"), n = e ? t.substring(e) : t, o = this.selectedCountryData.dialCode, r = o === "1";
              n && r && n.charAt(0) !== "+" && (n.charAt(0) !== "1" && (n = "1".concat(n)), n = "+".concat(n)), this.options.separateDialCode && o && n.charAt(0) !== "+" && (n = "+".concat(o).concat(n));
              var d = this._getDialCode(n, !0), l = this._getNumeric(n), u = null;
              if (d) {
                var v = this.countryCodes[this._getNumeric(d)], y = v.indexOf(this.selectedCountryData.iso2) !== -1 && l.length <= d.length - 1, x = o === "1" && this._isRegionlessNanp(l);
                if (!x && !y) {
                  for (var C = 0; C < v.length; C++)
                    if (v[C]) {
                      u = v[C];
                      break;
                    }
                }
              } else
                n.charAt(0) === "+" && l.length ? u = "" : (!n || n === "+") && (u = this.defaultCountry);
              return u !== null ? this._setFlag(u) : !1;
            }
          }, {
            key: "_isRegionlessNanp",
            value: function(t) {
              var e = this._getNumeric(t);
              if (e.charAt(0) === "1") {
                var n = e.substr(1, 3);
                return G.indexOf(n) !== -1;
              }
              return !1;
            }
          }, {
            key: "_highlightListItem",
            value: function(t, e) {
              var n = this.highlightedItem;
              n && n.classList.remove("iti__highlight"), this.highlightedItem = t, this.highlightedItem.classList.add("iti__highlight"), this.selectedFlag.setAttribute("aria-activedescendant", t.getAttribute("id")), e && this.highlightedItem.focus();
            }
          }, {
            key: "_getCountryData",
            value: function(t, e, n) {
              for (var o = e ? a : this.countries, r = 0; r < o.length; r++)
                if (o[r].iso2 === t)
                  return o[r];
              if (n)
                return null;
              throw new Error("No country data for '".concat(t, "'"));
            }
          }, {
            key: "_setFlag",
            value: function(t) {
              var e = this.options, n = e.allowDropdown, o = e.separateDialCode, r = e.showFlags, d = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
              if (this.selectedCountryData = t ? this._getCountryData(t, !1, !1) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), r && this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(t)), this._setSelectedCountryFlagTitleAttribute(t, o), o) {
                var l = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                this.selectedDialCode.innerHTML = l;
                var u = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                this.isRTL ? this.telInput.style.paddingRight = "".concat(u + 6, "px") : this.telInput.style.paddingLeft = "".concat(u + 6, "px");
              }
              if (this._updatePlaceholder(), n) {
                var v = this.activeItem;
                if (v && (v.classList.remove("iti__active"), v.setAttribute("aria-selected", "false")), t) {
                  var y = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(t));
                  y.setAttribute("aria-selected", "true"), y.classList.add("iti__active"), this.activeItem = y;
                }
              }
              return d.iso2 !== t;
            }
          }, {
            key: "_setSelectedCountryFlagTitleAttribute",
            value: function(t, e) {
              if (this.selectedFlag) {
                var n;
                t && !e ? n = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : t ? n = this.selectedCountryData.name : n = "Unknown", this.selectedFlag.setAttribute("title", n);
              }
            }
          }, {
            key: "_getHiddenSelectedFlagWidth",
            value: function() {
              var t = this.telInput.parentNode.cloneNode();
              t.style.visibility = "hidden", document.body.appendChild(t);
              var e = this.flagsContainer.cloneNode();
              t.appendChild(e);
              var n = this.selectedFlag.cloneNode(!0);
              e.appendChild(n);
              var o = n.offsetWidth;
              return t.parentNode.removeChild(t), o;
            }
          }, {
            key: "_updatePlaceholder",
            value: function() {
              var t = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
              if (window.intlTelInputUtils && t) {
                var e = intlTelInputUtils.numberType[this.options.placeholderNumberType], n = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, e) : "";
                n = this._beforeSetNumber(n), typeof this.options.customPlaceholder == "function" && (n = this.options.customPlaceholder(n, this.selectedCountryData)), this.telInput.setAttribute("placeholder", n);
              }
            }
          }, {
            key: "_selectListItem",
            value: function(t) {
              var e = this._setFlag(t.getAttribute("data-country-code"));
              this._closeDropdown(), this._updateDialCode(t.getAttribute("data-dial-code")), this.telInput.focus();
              var n = this.telInput.value.length;
              this.telInput.setSelectionRange(n, n), e && this._triggerCountryChange();
            }
          }, {
            key: "_closeDropdown",
            value: function() {
              this.dropdownContent.classList.add("iti__hide"), this.selectedFlag.setAttribute("aria-expanded", "false"), this.selectedFlag.removeAttribute("aria-activedescendant"), this.dropdownArrow.classList.remove("iti__arrow--up"), document.removeEventListener("keydown", this._handleKeydownOnDropdown), this.options.countrySearch && this.searchInput.removeEventListener("input", this._handleSearchChange), document.documentElement.removeEventListener("click", this._handleClickOffToClose), this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList), this.countryList.removeEventListener("click", this._handleClickCountryList), this.options.dropdownContainer && (this.options.useFullscreenPopup || window.removeEventListener("scroll", this._handleWindowScroll), this.dropdown.parentNode && this.dropdown.parentNode.removeChild(this.dropdown)), this._trigger("close:countrydropdown");
            }
          }, {
            key: "_scrollTo",
            value: function(t, e) {
              var n = this.dropdownContent, o = window.pageYOffset || document.documentElement.scrollTop, r = n.offsetHeight, d = n.getBoundingClientRect().top + o, l = d + r, u = t.offsetHeight, v = t.getBoundingClientRect().top + o, y = v + u, x = v - d + n.scrollTop, C = r / 2 - u / 2;
              if (v < d)
                e && (x -= C), n.scrollTop = x;
              else if (y > l) {
                e && (x += C);
                var F = r - u;
                n.scrollTop = x - F;
              }
            }
          }, {
            key: "_updateDialCode",
            value: function(t) {
              var e = this.telInput.value, n = "+".concat(t), o;
              if (e.charAt(0) === "+") {
                var r = this._getDialCode(e);
                r ? o = e.replace(r, n) : o = n, this.telInput.value = o;
              } else
                this.options.autoInsertDialCode && (e ? o = n + e : o = n, this.telInput.value = o);
            }
          }, {
            key: "_getDialCode",
            value: function(t, e) {
              var n = "";
              if (t.charAt(0) === "+")
                for (var o = "", r = 0; r < t.length; r++) {
                  var d = t.charAt(r);
                  if (!isNaN(parseInt(d, 10))) {
                    if (o += d, e)
                      this.countryCodes[o] && (n = t.substr(0, r + 1));
                    else if (this.dialCodes[o]) {
                      n = t.substr(0, r + 1);
                      break;
                    }
                    if (o.length === this.countryCodeMaxLen)
                      break;
                  }
                }
              return n;
            }
          }, {
            key: "_getFullNumber",
            value: function() {
              var t = this.telInput.value.trim(), e = this.selectedCountryData.dialCode, n, o = this._getNumeric(t);
              return this.options.separateDialCode && t.charAt(0) !== "+" && e && o ? n = "+".concat(e) : n = "", n + t;
            }
          }, {
            key: "_beforeSetNumber",
            value: function(t) {
              var e = t;
              if (this.options.separateDialCode) {
                var n = this._getDialCode(e);
                if (n) {
                  n = "+".concat(this.selectedCountryData.dialCode);
                  var o = e[n.length] === " " || e[n.length] === "-" ? n.length + 1 : n.length;
                  e = e.substr(o);
                }
              }
              return this._cap(e);
            }
          }, {
            key: "_triggerCountryChange",
            value: function() {
              this._trigger("countrychange");
            }
          }, {
            key: "handleAutoCountry",
            value: function() {
              this.options.initialCountry === "auto" && (this.defaultCountry = window.intlTelInputGlobals.autoCountry, this.telInput.value || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise());
            }
          }, {
            key: "handleUtils",
            value: function() {
              window.intlTelInputUtils && (this.telInput.value && this._updateValFromNumber(this.telInput.value), this._updatePlaceholder()), this.resolveUtilsScriptPromise();
            }
          }, {
            key: "destroy",
            value: function() {
              var t = this.telInput.form;
              if (this.options.allowDropdown) {
                this._closeDropdown(), this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag), this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                var e = this._getClosestLabel();
                e && e.removeEventListener("click", this._handleLabelClick);
              }
              this.hiddenInput && t && t.removeEventListener("submit", this._handleHiddenInputSubmit), this.options.autoInsertDialCode && (t && t.removeEventListener("submit", this._handleSubmitOrBlurEvent), this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent)), this.telInput.removeEventListener("keyup", this._handleKeyupEvent), this.telInput.removeEventListener("cut", this._handleClipboardEvent), this.telInput.removeEventListener("paste", this._handleClipboardEvent), this.telInput.removeAttribute("data-intl-tel-input-id");
              var n = this.telInput.parentNode;
              n.parentNode.insertBefore(this.telInput, n), n.parentNode.removeChild(n), delete window.intlTelInputGlobals.instances[this.id];
            }
          }, {
            key: "getExtension",
            value: function() {
              return window.intlTelInputUtils ? intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : "";
            }
          }, {
            key: "getNumber",
            value: function(t) {
              if (window.intlTelInputUtils) {
                var e = this.selectedCountryData.iso2;
                return intlTelInputUtils.formatNumber(this._getFullNumber(), e, t);
              }
              return "";
            }
          }, {
            key: "getNumberType",
            value: function() {
              return window.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : -99;
            }
          }, {
            key: "getSelectedCountryData",
            value: function() {
              return this.selectedCountryData;
            }
          }, {
            key: "getValidationError",
            value: function() {
              if (window.intlTelInputUtils) {
                var t = this.selectedCountryData.iso2;
                return intlTelInputUtils.getValidationError(this._getFullNumber(), t);
              }
              return -99;
            }
          }, {
            key: "isValidNumber",
            value: function() {
              var t = this._getFullNumber().trim();
              return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(t, this.selectedCountryData.iso2) : null;
            }
          }, {
            key: "isPossibleNumber",
            value: function() {
              var t = this._getFullNumber().trim();
              return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(t, this.selectedCountryData.iso2) : null;
            }
          }, {
            key: "setCountry",
            value: function(t) {
              var e = t.toLowerCase();
              this.selectedCountryData.iso2 !== e && (this._setFlag(e), this._updateDialCode(this.selectedCountryData.dialCode), this._triggerCountryChange());
            }
          }, {
            key: "setNumber",
            value: function(t) {
              var e = this._updateFlagFromNumber(t);
              this._updateValFromNumber(t), e && this._triggerCountryChange();
            }
          }, {
            key: "setPlaceholderNumberType",
            value: function(t) {
              this.options.placeholderNumberType = t, this._updatePlaceholder();
            }
          }]), p;
        }();
        b.getCountryData = function() {
          return a;
        };
        var N = function(i, t, e) {
          var n = document.createElement("script");
          n.onload = function() {
            z("handleUtils"), t && t();
          }, n.onerror = function() {
            z("rejectUtilsScriptPromise"), e && e();
          }, n.className = "iti-load-utils", n.async = !0, n.src = i, document.body.appendChild(n);
        };
        return b.loadUtils = function(p) {
          if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
            if (window.intlTelInputGlobals.startedLoadingUtilsScript = !0, typeof Promise < "u")
              return new Promise(function(i, t) {
                return N(p, i, t);
              });
            N(p);
          }
          return null;
        }, b.defaults = T, b.version = "18.5.3", function(p, i) {
          var t = new lt(p, i);
          return t._init(), p.setAttribute("data-intl-tel-input-id", t.id), window.intlTelInputGlobals.instances[t.id] = t, t;
        };
      }();
    });
  })(W);
  var Z = W.exports, Q = Z;
  const V = /* @__PURE__ */ X(Q);
  class K {
    constructor({ container: s, position: a }) {
      this.container = s, this.position = a || "beforeend", this.init();
    }
    init() {
      this.render();
    }
    render() {
      var c;
      (c = this.container) == null || c.insertAdjacentHTML(
        this.position,
        /* HTML */
        `<form class="crs-popup-form" action="">
      <div class="input-wrap">
        <input
          class="input-field"
          id="popup_input_name"
          type="text"
          data-field="name"
          name="name"
          data-type="text"
          placeholder="Ваше імʼя*"
          autofocus="true"
        />
      </div>
      <div class="input-wrap">
        <input class="input-field" id="popup_input_phone" type="tel" name="phone" />
      </div>
      <button type="submit">
        <span class="desktop">Записатись</span><span class="mobile">Записатись на безоплатний урок</span>
      </button>
    </form>`
      ), this.submitForm();
      const a = document.querySelector("#popup_input_phone");
      if (a) {
        const h = V(a, {
          initialCountry: "ua",
          // @ts-ignore
          countryOrder: ["ua"],
          countrySearch: !1,
          nationalMode: !0,
          showFlags: !0,
          useFullscreenPopup: !1
        }), A = () => {
          if (a.value) {
            const { add: L, remove: _ } = this.errorToInput(a);
            h.isValidNumber() || L("Номер телефону невірний!"), h.isValidNumber() && (a.dataset.value = h.getNumber(), _());
          }
        }, f = document.querySelector("#popup_input_name"), m = (L) => {
          const _ = L.target.value;
          if (_) {
            const { add: B, remove: b } = this.errorToInput(f);
            b(), /\d/.test(_) ? B("Ім’я невірне") : _.trim() === "" ? B("Ім’я обов’язкове") : _.length < 2 ? B("Поле повинно містити мінімум 2 символи") : b();
          }
        };
        a.addEventListener("input", A), a.addEventListener("change", () => {
          I("exp_hyp_2_1_input_02", "Phone", "input", "Choose the perfect course");
        }), f == null || f.addEventListener("input", m), f.addEventListener("change", () => {
          I("exp_hyp_2_1_input_01", "Name", "input", "Choose the perfect course");
        });
        const w = document.querySelector('.crs-popup-form button[type="submit"]');
        w && w.addEventListener("click", () => {
          I("exp_hyp_2_1_button_03", "Sign up", "click", "Choose the perfect course");
        });
      }
    }
    errorToInput(s) {
      const a = document.createElement("div");
      return {
        add: (c) => {
          var h;
          this.removeErrors(s), s.classList.add("is-invalid"), a.style.color = "rgb(202, 56, 31)", a.classList.add("is-label-invalid", "just-validate-error-label"), a.textContent = c, (h = s.parentElement) == null || h.appendChild(a);
        },
        remove: () => {
          s.classList.remove("is-invalid"), this.removeErrors(s);
        }
      };
    }
    removeErrors(s) {
      var c;
      const a = (c = s.parentElement) == null ? void 0 : c.querySelectorAll(".just-validate-error-label");
      a == null || a.forEach((h) => h.remove());
    }
    submitForm() {
      const s = document.querySelector(".crs-popup__form form");
      s == null || s.addEventListener("submit", async (a) => {
        a.preventDefault();
        const c = s.querySelector("#popup_input_name"), h = s.querySelector("#popup_input_phone");
        if (!c || !h)
          return;
        const A = c == null ? void 0 : c.value, f = h == null ? void 0 : h.dataset.value, { add: m, remove: w } = this.errorToInput(c), { add: L, remove: _ } = this.errorToInput(h);
        let B = !0;
        if ((!A || A.trim() === "") && (m("Ім’я обов’язкове"), B = !1), (!f || f.trim() === "") && (h == null || h.classList.add("is-invalid"), L("Номер телефону невірний!"), B = !1), !B)
          return;
        const b = s.querySelector('button[type="submit"]');
        b == null || b.setAttribute("disabled", "true");
        try {
          if ((await (await fetch("https://courses-all.goiteens.com/v-gl-v3/crm/lead.php", {
            method: "POST",
            body: JSON.stringify({
              name: A,
              phone: f,
              SiteURL: "https://courses-all.goiteens.com/v-gl-v3/",
              product_name: "GoITeens_Courses_All_GL_v3"
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })).json()).Deal_ID) {
            const G = sessionStorage.getItem(M);
            I(
              "exp_hyp_2_1_submit_01",
              `Sign up - ${G}`,
              "submit",
              "Choose the perfect course"
            ), b == null || b.removeAttribute("disabled"), s.reset();
            const k = s.closest("dialog");
            k && k.close(), location.href = "https://courses-all.goiteens.com/v-gl/success/";
          }
        } catch (P) {
          console.log("error", P);
        }
      });
    }
  }
  const J = `.crs-popup {
  max-width: 1140px;
  border: none;
  border-radius: 40px;
  background: #5f3ed1;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/hp-modal-bg-inv.webp);
  background-repeat: no-repeat;
  background-size: 367px 781px;
  background-position: top 0 right 0;
}

body:has(.crs-popup[open]) {
  overflow: hidden;
}
.crs-popup::backdrop {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%);
  backdrop-filter: blur(4px);
}

.crs-popup__close {
  position: absolute;
  top: 35px;
  right: 35px;
  width: 40px;
  height: 40px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M25 15L15 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 15L25 25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  outline: none;
}

.crs-popup__wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto 1fr;
  column-gap: 76px;
  padding: 44px 36px;
}

.crs-popup__title {
  margin-top: 58px;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: #fff;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
}

.crs-popup__title span {
  color: #f6ca53;
}
.crs-popup__description {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  margin-top: 24px;
  color: #fff;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.crs-popup__content {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin-top: 24px;
}

.crs-popup__content-title {
  color: #fff;
  font-family: 'IBMPlexMono';
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
}

.crs-popup__content-list {
  display: grid;
  gap: 32px;
  margin-top: 24px;
  color: #fff;
  font-family: 'IBMPlexSans';
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
}

.crs-popup__content-list li {
  position: relative;
  counter-increment: list-counter;
  padding-left: 48px;
}

.crs-popup__content-list li::before {
  content: counter(list-counter);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #3811c0;
  background: #3811c0;
  color: #f6ca53;
  font-family: 'IBMPlexMono';
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-popup__content-list li:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 13px;
  top: 38px;
  width: 4px;
  height: calc(100% - 14px);
  border-radius: 111px;
  background: #3811c0;
}
.crs-popup__form {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}

.crs-form__wrap {
  position: relative;
  width: 510px;
  margin-top: 166px;
  padding: 24px;
  border-radius: 40px;
  background: #3c1ea6;
}

.crs-form__wrap::after {
  content: '';
  position: absolute;
  top: -190px;
  left: 0;
  width: 445px;
  height: 277px;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/family.webp);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: -1;
}
.crs-form__title {
  color: #f6ca53;
  text-align: center;
  font-family: 'IBMPlexMono';
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
}

.crs-form__wrap form {
  margin-top: 18px;
  display: grid;
  gap: 24px;
}
.crs-form .input-wrap {
  width: 100%;
}
.crs-form input {
  width: 100%;
  height: 68px;
}
.crs-form button[type='submit'] {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 68px;
  padding-block: 24px;
  border-radius: 64px;
  background: #f6ca53;
  color: #000;
  text-align: center;
  font-family: 'IBMPlexSans';
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  transition: 0.3s background linear;
}

.crs-form button[type='submit'] .mobile {
  display: none;
}

.crs-form button[type='submit']:hover {
  background: #e5b247;
}

.crs-form button[type='submit'][disabled] {
  background: gray;
  color: #000;
}
.crs-popup__branding {
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding-inline: 54px;
}

.crs-popup__branding img {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  object-fit: cover;
}

.crs-popup__branding div {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

@media (max-width: 992px) {
  .crs-popup {
    max-width: 360px;
    border-radius: 24px;
    background-size: 265px 563px;
    background-position: top -24px right -81px;
  }

  .crs-popup__close {
    top: 10px;
    right: 12px;
    width: 32px;
    height: 32px;
  }

  .crs-popup__wrap {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    column-gap: 0;
    padding: 24px 16px;
  }

  .crs-popup__title {
    margin-top: 0;
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }

  .crs-popup__description {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-popup__form {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .crs-form__wrap {
    margin-top: 141px;
    width: 100%;
    padding: 16px;
  }

  .crs-form__wrap::after {
    top: -117px;
    width: 290px;
    height: 173px;
  }
  .crs-form__title {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
  }
  .crs-form__wrap form {
    gap: 16px;
  }
  .crs-form__wrap :is(input, button[type='submit']) {
    height: 52px;
  }
  .crs-form__wrap button[type='submit'] {
    padding-block: 24px;
    font-size: 16px;
    line-height: 24px;
  }

  .crs-form button[type='submit'] .mobile {
    display: inline;
  }

  .crs-form button[type='submit'] .desktop {
    display: none;
  }

  .crs-popup__branding {
    padding-inline: 0;
  }

  .crs-popup__branding img {
    width: 44px;
    height: 44px;
  }

  .crs-popup__branding div {
    font-size: 14px;
    line-height: 20px;
  }
  .crs-popup__content {
    grid-row: 4 / 5;
  }

  .crs-popup__content-title {
    font-size: 18px;
    line-height: 28px;
  }

  .crs-popup__content-list {
    margin-top: 16px;
  }
}
`, D = {
    1: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    },
    2: {
      title: (
        /* HTML */
        "Оберіть найкращий старт в IT для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете IT-напрям, що її захоплює.",
      content: [
        "Знайомимо з IT-професіями й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    },
    3: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    },
    4: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, щоб разом із дитиною обрати курс, де вона знайде нових друзів!",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    },
    5: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    },
    6: {
      title: (
        /* HTML */
        "Оберіть ідеальний курс для вашої дитини на <span>безоплатному уроці</span>"
      ),
      description: "Отримайте персональну консультацію з методистом, де ви разом із дитиною оберете курс, від якого вона буде у захваті.",
      content: [
        "Знайомимо з напрямками й підбираємо курс за інтересами та здібностями дитини.",
        "Дитина створює проєкт і перевіряє, чи цікавий їй обраний напрямок.",
        "Обговорюємо результати й допомагаємо зробити наступний крок."
      ]
    }
  };
  class q {
    constructor() {
      this.popup = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.eventListeners(), new K({ container: document.querySelector(".crs-form__container") });
    }
    render() {
      const s = (
        /* HTML */
        `<dialog class="crs-popup">
      <button type="button" class="crs-popup__close"></button>
      <div class="crs-popup__wrap">
        <h3 class="crs-popup__title">${D[1].title}</h3>
        <div class="crs-popup__description">${D[1].description}</div>
        <div class="crs-popup__content">
          <h4 class="crs-popup__content-title">Як проходить урок:</h4>
          <ol class="crs-popup__content-list">
            ${D[1].content.map((a) => `<li>${a}</li>`).join("")}
          </ol>
        </div>

        <div class="crs-popup__form crs-form">
          <div class="crs-form__wrap">
            <h4 class="crs-form__title">
              Отримати <br class="mobile" /> безоплатний урок
            </h4>

            <div class="crs-form__container"></div>
            <div class="crs-popup__branding">
              <img
                src="${E}/img/award_boty_2023.svg"
                alt="Business of the year 2023"
                width="64"
                height="64"
                load="async"
              />
              <div>Найкращий освітній бізнес у сфері навчання для дітей та підлітків</div>
            </div>
          </div>
        </div>
      </div>
    </dialog>`
      );
      document.body.insertAdjacentHTML("beforeend", s), this.popup = document.querySelector(".crs-popup");
    }
    eventListeners() {
      var a;
      const s = document.querySelector(".crs-popup__close");
      s == null || s.addEventListener("click", () => {
        this.close();
      }), (a = this.popup) == null || a.addEventListener("click", (c) => {
        c.target === this.popup && this.close();
      });
    }
    open(s) {
      this.updatePopupContent(s), this.popup && this.popup.showModal();
    }
    close() {
      this.popup && (this.popup.close(), I("exp_hyp_2_1_button_04", "Close", "click", "Choose the perfect course"));
    }
    updatePopupContent(s) {
      var a, c, h;
      if (console.log("index", s), s) {
        const A = D[s];
        if (A) {
          const f = (a = this.popup) == null ? void 0 : a.querySelector(".crs-popup__title"), m = (c = this.popup) == null ? void 0 : c.querySelector(".crs-popup__description"), w = (h = this.popup) == null ? void 0 : h.querySelector(".crs-popup__content-list");
          f && (f.innerHTML = A.title), m && (m.textContent = A.description), w && (w.innerHTML = A.content.map((L) => `<li>${L}</li>`).join(""));
        }
      }
    }
    initStyles() {
      const s = document.createElement("style");
      s.textContent = J, document.head.insertAdjacentElement("beforeend", s);
    }
  }
  const $ = [
    {
      icon: `${E}/img/icons/icon-1.webp`,
      title: "Хочу щоб моя дитина замість ігор і TikTok витрачала час із користю",
      body: (
        /* HTML */
        `<p>
        Перетворіть це на корисне хобі! Уроки зі Scratch, Minecraft, Roblox та малювання на планшеті допоможуть
        розвивати творчість, математику та програмування в ігровому форматі. Навчання через гру відкриє світ проєктів,
        де з’являються власні ігри та 3D персонажі. Замість безцільного перегляду відео та ігор — досягнення, якими ви
        будете пишатись!
      </p>
      <p>
        Ми зробили акцент на контрасті між шкідливим і безцільним часом у гаджетах на досягненнях дитини, що резонує із
        цілями батьків.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${E}/img/icons/icon-2.webp`,
      title: "Забезпечити дитині перспективну роботу в IT",
      body: (
        /* HTML */
        `<p>Підготуйте дитину до успішної кар'єри в IT!</p>
      <p>
        Фахівці в своїй галазі допоможуть пройти шлях від початківця до junior-спеціаліста, навчаючи створювати ігри,
        програми та вебсайти. Дитина розробить реальні проєкти, які потраплять до її портфоліо, і це стане основою для
        подальшого професійного розвитку в IT.
      </p>
      <p>В результаті навчання вона отримає навички для старту кар'єри в галузі.</p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${E}/img/icons/icon-3.webp`,
      title: "Розвивати в моїй дитині обізнаність в IT і технічні навички",
      body: (
        /* HTML */
        `<p>
        Курси GoITeens дають дітям можливість розвивати технічні навички через практичні заняття та роботу над реальними
        проєктами.
      </p>
      <p>
        Вони не лише вивчають програмування, а й здобувають досвід у створенні ігор, анімацій і вебсайтів, що допомагає
        швидко освоювати нові технології. Це сприяє розвитку інженерного мислення, яке необхідне для успіху в сучасному
        технологічному світі.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${E}/img/icons/icon-4.webp`,
      title: "Допомогти моїй дитині соціалізуватись, більше спілкуватись з однолітками",
      body: (
        /* HTML */
        `<p>
        GoITeens допомагає вашій дитині соціалізуватися завдяки інтерактивним урокам і командним проєктам, де учні
        співпрацюють, обговорюють ідеї та вирішують завдання разом.
      </p>
      <p>
        У GoITeens Club діти публікують свої роботи, отримують відгуки та знаходять однодумців для спільного розвитку.
        Це простір, де народжуються дружні стосунки та формується активна взаємодія з ровесниками.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які курси і заходи допоможуть вашій дитині отримати більше спілкування з однолітками"
    },
    {
      icon: `${E}/img/icons/icon-5.webp`,
      title: "Розвивати в моїй дитині логічне та креативне мислення",
      body: (
        /* HTML */
        `<p>
        Курси GoITeens допоможуть вашій дитині розвинути логічне і креативне мислення через захоплюючі інтерактивні
        заняття.
      </p>
      <p>
        Наприклад, на курсі Scratch дитина навчиться вирішувати задачі, працювати в команді та розвивати критичне
        мислення.
      </p>
      <p>
        Заняття з логіки покращать концентрацію і пам'ять, а курс математики навчить розуміти причинно-наслідкові
        зв’язки, допомогаючи розкрити потенціал вашої дитини.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    },
    {
      icon: `${E}/img/icons/icon-6.webp`,
      title: "Допомогти моїй дитині всебічно розвиватись",
      body: (
        /* HTML */
        `<p>
        В GoITeens ваша дитина може спробувати себе в різних напрямках — від малювання на планшеті до опанування
        професії розробника.
      </p>
      <p>
        Ми не тільки навчаємо технічним навичкам, а й активно розвиваємо емоційний інтелект, соціальні навички та
        стратегічне мислення. Завдяки такому підходу ваша дитина відкриє свої таланти, зможе розвивати внутрішні якості
        та знайти шлях до успіху в житті.
      </p>`
      ),
      action: {
        text: "Записатись на безоплатний урок",
        popup: "free-lesson"
      },
      description: "Дізнайтесь які напрямки будуть відповідати інтересам і талантам вашої дитини"
    }
  ], tt = `.crs-achieve {
  margin-bottom: 60px;
  position: relative;
  padding-block: 84px;
  background-color: #5f3ed1;
}

.crs-achieve::after {
  content: '';
  position: absolute;
  width: 367px;
  height: 781px;
  top: 0;
  left: 0;
  background-image: url(https://conversionratestore.github.io/projects/goiteens/1st_hypothesis/img/hp-modal-bg.webp);
  background-repeat: no-repeat;
}
.crs-achieve h2 {
  position: relative;
  margin-bottom: 25px;
  font-size: 36px;
  line-height: 47px;
  color: #fff;
  font-family: 'IBMPlexMono', sans-serif;
  text-align: center;
  text-transform: inherit;
  z-index: 1;
}

.crs-accordion {
  position: relative;
  display: grid;
  justify-content: center;
  z-index: 2;
}
.crs-accordion__item {
  max-width: 900px;
  border-radius: 40px;
  border: 6px solid #5f3ed1;
  background: #4727b6;
}

.crs-accordion__item[data-state='open'] {
  padding: 24px;
}

.crs-accordion__title {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 24px;
}

.crs-accordion__item[data-state='open'] .crs-accordion__title {
  padding: 0;
}

.crs-accordion__title h3 {
  color: #fff;
  font-family: 'IBMPlexMono', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
}

.crs-accordion__toggle {
  margin-left: auto;
  border-radius: 50px;
  background-color: #f6ca53;
  color: #000;
  font-family: 'IBMPlexMono', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 8px;
  transition: 0.3s background-color linear;
}
.crs-accordion__item[data-state='open'] .crs-accordion__toggle span {
  visibility: hidden;
}
.crs-accordion__item[data-state='open'] .crs-accordion__toggle {
  background-color: #5f3ed1;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(%23clip0_435_1860)"><path d="M12.9365 5.33382L23.6166 16.0141C23.8638 16.2611 24 16.5909 24 16.9425C24 17.2941 23.8638 17.6239 23.6166 17.8709L22.8303 18.6574C22.3179 19.1692 21.4851 19.1692 20.9735 18.6574L12.005 9.68891L3.02651 18.6674C2.7793 18.9144 2.44974 19.0508 2.09833 19.0508C1.74652 19.0508 1.41697 18.9144 1.16955 18.6674L0.383413 17.8808C0.136196 17.6336 1.831e-06 17.3041 1.81563e-06 16.9525C1.80026e-06 16.6009 0.136196 16.2711 0.383413 16.0241L11.0733 5.33382C11.3213 5.08621 11.6524 4.95021 12.0044 4.95099C12.3578 4.95021 12.6887 5.08621 12.9365 5.33382Z" fill="%23F6CA53"/></g><defs><clipPath id="clip0_435_1860"><rect width="24" height="24" fill="white" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 24 24)"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 24px 24px;
}
.crs-accordion__body {
  color: #fff;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.crs-accordion__body p + p {
  margin-top: 16px;
}

.crs-accordion__body {
  display: grid;
  grid-template-rows: 0fr;
  transition: 250ms grid-template-rows ease;
}

.crs-accordion__actions {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.crs-accordion__action {
  display: flex;
  height: 68px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  background: #f6ca53;
  color: #000;
  text-align: center;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  transition: 0.3s background linear;
}

.crs-accordion__action:hover {
  background: #e5b247;
}

.crs-accordion__description {
  margin-top: 12px;
  color: #f6ca53;
  text-align: center;
  font-family: 'IBMPlexSans', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
}

.crs-accordion__item[data-state='open'] .crs-accordion__body {
  grid-template-rows: 1fr;
  padding-top: 24px;
}

.crs-accordion__body > div {
  overflow: hidden;
}

@media (max-width: 768px) {
  .crs-achieve {
    padding-block: 58px;
    margin-bottom: 0;
  }

  .crs-achieve::after {
    width: 295px;
    height: 627px;
    background-size: contain;
  }
  .crs-achieve .container {
    padding-inline: 12px;
  }
  .crs-achieve h2 {
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    text-align: left;
  }

  .crs-accordion {
    width: 100%;
    max-width: 900px;
    gap: 12px;
  }

  .crs-accordion__item {
    width: calc(100% + 12px);
    padding: 16px 12px;
    margin-left: -6px;
  }

  .crs-accordion__title {
    display: grid;
    grid-template-rows: 38px auto;
    grid-template-columns: auto 64px;
    gap: 12px 16px;
    padding: 0;
  }

  .crs-accordion__title > span:not(.crs-accordion__toggle) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    width: 35px;
    height: 35px;
  }

  .crs-accordion__title span svg {
    width: 35px;
    height: 35px;
    object-fit: contain;
  }
  .crs-accordion__title h3 {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  .crs-accordion__toggle {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
  }

  .crs-accordion__action {
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }

  .crs-accordion__description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  .crs-accordion__item[data-state='open'] .crs-accordion__title {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .crs-accordion__item[data-state='open'] {
    padding: 16px 12px;

  }

  .crs-accordion__item[data-state='open'] .crs-accordion__body {
    padding-top: 16px;
  }
}
`;
  class et {
    constructor({ container: s, position: a }) {
      this.container = s, this.position = a || "beforeend", this.popup = new q(), this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render(), this.addEventListeners();
    }
    render() {
      const s = (
        /* HTML */
        `<section class="crs-achieve">
      <div class="container">
        <h2 class="section-title mb-6 md:mb-10">Що ви хочете досягти завдяки IT курсам?</h2>
        <div class="crs-accordion">
          ${$.map(({ icon: a, title: c, body: h, action: A, description: f }, m) => (
          /* HTML */
          `<div class="crs-accordion__item" data-state="close" data-index="${m + 1}">
                <div class="crs-accordion__title">
                  <img src="${a}" width="41" height="41" load="lazy" />
                  <h3>${c}</h3>
                  <span class="crs-accordion__toggle"><span>Хочу!</span></span>
                </div>
                <div class="crs-accordion__body">
                  <div>
                    <div>${h}</div>
                    <div class="crs-accordion__actions">
                      <button data-popup="${A.popup}" class="crs-accordion__action">${A.text}</button>
                    </div>
                    <div class="crs-accordion__description">${f}</div>
                  </div>
                </div>
              </div>`
        )).join("")}
        </div>
      </div>
    </section>`
      );
      this.container.insertAdjacentHTML(this.position, s);
    }
    addEventListeners() {
      const s = this.container.querySelectorAll(".crs-accordion__item");
      s.forEach((c) => {
        const h = c.querySelector(".crs-accordion__title");
        h == null || h.addEventListener("click", () => {
          if (c.getAttribute("data-state") === "open")
            c.setAttribute("data-state", "close"), sessionStorage.removeItem(M);
          else {
            s.forEach((m) => m.setAttribute("data-state", "close")), c.setAttribute("data-state", "open");
            const f = c.getAttribute("data-index");
            f && (sessionStorage.setItem(M, f), I("exp_hyp_2_1_button_01", `Want - ${f}`, "click", "What do you want"));
          }
        });
      }), this.container.querySelectorAll('.crs-accordion__action[data-popup="free-lesson"]').forEach((c) => {
        c.addEventListener("click", () => {
          var f, m;
          const h = (f = c.closest(".crs-accordion__item")) == null ? void 0 : f.getAttribute("data-index");
          this.popup.open(h ? Number(h) : 1);
          const A = (m = c.closest(".crs-accordion__item")) == null ? void 0 : m.getAttribute("data-index");
          A && !isNaN(Number(A)) && I("exp_hyp_2_1_button_02", `Sign up for a free lesson - ${A}`, "click", "What do you want");
        });
      });
    }
    initStyles() {
      const s = document.createElement("style");
      s.innerHTML = tt, document.head.appendChild(s);
    }
  }
  const nt = `.crs-badges {
  position: absolute;
  left: 50%;
  bottom: -184px;
  transform: translateX(-50%);
  margin-top: 89px;
}

.crs-badges .container {
  padding: 0;
}

.crs-badges__list {
  display: flex;
  justify-content: space-between;
}

.crs-badges__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 314px;
  height: 220px;
  object-fit: contain;
  padding-top: 63px;
}

.crs-badges__item span {
  font-size: 62px;
  line-height: 0.8;
}

.crs-badges__item p {
  margin-top: 26px;
  font-size: 15px;
}
.crs-badges__item:is(.item-1, .item-4) {
  padding-top: 0;
}

.crs-badges__item.item-1 {
  background-image: url('data:image/svg+xml,<svg width="246" height="209" viewBox="0 0 246 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M123 -10L245.11 209H0.890419L123 -10Z" fill="%23EBE6FA"/></svg>');
  background-repeat: no-repeat;
  background-position: top 0 left 50%;
  width: 282px;
  height: 292px;
}

.crs-badges__item.item-1 h3 {
  font-size: 15px;
  line-height: 25px;
  font-weight: 600;
  color: #5331b2;
}

.crs-badges__item.item-1 p {
  margin-top: 5px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 600;
  color: #5331b2;
}
.crs-badges__item.item-2 {
  background-image: url(https://courses-all.goiteens.com/v-gl-v2/assets/images/about/item-2.svg);
  background-repeat: no-repeat;
  background-size: 220px 220px;
  background-position: center;
}

.crs-badges__item.item-2 span {
  color: #1d4766;
}

.crs-badges__item.item-2 p {
  color: #225f8a;
}

.crs-badges__item.item-3 {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="221" height="220" viewBox="0 0 221 220" fill="none"><mask id="mask0_398_5035" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="221" height="220"><path d="M220.048 0H0.0478516V220H220.048V0Z" fill="white"/></mask><g mask="url(%23mask0_398_5035)"><path d="M110.048 0L220.048 110L110.048 220L0.0478516 110L110.048 0Z" fill="%23FAF5E6"/></g></svg>');
  background-repeat: no-repeat;
  background-size: 220px 220px;
  background-position: center;
}

.crs-badges__item.item-3 span {
  color: #997500;
}

.crs-badges__item.item-3 p {
  color: #b28800;
}

.crs-badges__item.item-4 img {
  width: 220px;
  height: auto;
  object-fit: cover;
}
@media (max-width: 1280px) {
  .crs-badges {
    margin-top: 44px;
    margin-bottom: 13px;
    position: static;
    padding-inline: 20px;
    transform: none;
    overflow: hidden;
  }
  .crs-badges__list {
    flex-wrap: wrap;
    row-gap: 24px;
    justify-content: space-between;
  }
  .crs-badges__item {
    width: 158px;
    height: 160px;
    padding-top: 40px;
  }

  .crs-badges__item.item-1 {
    order: 1;
    width: 158px;
    height: 160px;
    background-size: 150px 157px;
    background-position: top 24px left 50%;
  }
  .crs-badges__item.item-1 img {
    width: 67px;
    height: 66px;
  }
  .crs-badges__item.item-1 h3 {
    font-size: 12px;
    line-height: 18px;
  }

  .crs-badges__item.item-1 p {
    margin-top: 5px;
    font-size: 11px;
    font-weight: 600;
    line-height: 14px;
  }

  .crs-badges__item.item-2 {
    order: 3;
    background-size: 140px 140px;
  }

  .crs-badges__item.item-2 span {
    font-size: 32px;
    line-height: 40px;
  }

  .crs-badges__item.item-2 p {
    margin-top: 0;
    font-size: 12px;
    line-height: 20px;
  }

  .crs-badges__item.item-3 {
    order: 4;
    background-size: 158px 158px;
  }

  .crs-badges__item.item-3 span {
    font-size: 32px;
    line-height: 40px;
  }

  .crs-badges__item.item-3 p {
    margin-top: 0;

    font-size: 12px;
    line-height: 20px;
  }

  .crs-badges__item.item-4 {
    order: 2;
  }
}
`;
  class it {
    constructor({ container: s, position: a }) {
      this.container = s, this.position = a || "beforeend", this.init();
    }
    init() {
      if (!this.container) {
        console.log("Container is not found");
        return;
      }
      this.initStyles(), this.render();
    }
    render() {
      this.container && (this.container.insertAdjacentHTML(
        this.position,
        /* HTML */
        `
      <div class="crs-badges">
        <div class="container">
          <ul class="crs-badges__list">
            <li class="crs-badges__item item-1">
              <img
                alt="Ukrainian Business Award 2023"
                class="image mx-auto block h-auto md:w-[65px] xl:w-[120px] xxl:w-[124px]"
                height="124"
                loading="lazy"
                src="./assets/images/about/award-1.png"
                srcset="./assets/images/about/award-1@2x.png 2x"
                width="124"
              />
              <h3
                class="title mx-auto mt-2 max-w-[220px] text-center font-IBMPlexMono font-semibold uppercase md:max-w-[200px] md:text-[14px] md:leading-normal xl:max-w-none xl:text-[20px] xl:leading-[1.3]"
              >
                Ukrainian Business <br class="mobile"> Award 2023
              </h3>
              <p
                class="text mx-auto mt-2 max-w-[260px] text-center font-IBMPlexSans text-[12px] font-semibold leading-[1.5] md:text-[10px] md:leading-snug xl:mt-1 xl:max-w-[305px] xl:text-[16px] xl:leading-[1.5]"
              >
                Найкращий освітній <br class="mobile"> бізнес у <br class="desktop"> сфері навчання <br class="mobile"> для дітей та <br class="desktop"> підлітків
              </p>
            </li>
            <li class="crs-badges__item item-2">
              <span
                class="numbers block text-center font-IBMPlexMono text-[68px] font-semibold leading-[1.3] md:text-[50px] xl:text-[80px] xxl:text-[92px]"
                >150000+</span
              >
              <p
                class="text mt-2 text-center font-IBMPlexMono text-lg font-semibold uppercase md:text-[14px] md:leading-[1.28] xl:text-[20px] xl:leading-[1.6]"
              >
                Дітей навчалося <br />в академії GoITeens
              </p>
            </li>
            <li class="crs-badges__item item-3">
              <span
                class="numbers block text-center font-IBMPlexMono text-[68px] font-semibold leading-[1.3] md:text-[50px] xl:text-[80px] xxl:text-[92px]"
                >250000+</span
              >
              <p
                class="text mt-2 text-center font-IBMPlexMono text-lg font-semibold uppercase md:text-[14px] md:leading-[1.28] xl:text-[20px] xl:leading-[1.6]"
              >
                Занять проведено <br />протягом року
              </p>
            </li>
            <li class="crs-badges__item item-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="220"
                height="220"
                viewBox="0 0 220 220"
                fill="none"
              >
                <path d="M220 0H0V220H220V0Z" fill="url(#pattern0_398_5043)" />
                <defs>
                  <pattern id="pattern0_398_5043" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_398_5043" transform="scale(0.00231481)" />
                  </pattern>
                  <image
                    id="image0_398_5043"
                    width="432"
                    height="432"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    `
      ), U(".crs-badges", "exp_hyp_2_1_element_01", "Benefits visibility", "Second screen"));
    }
    initStyles() {
      const s = document.createElement("style");
      s.innerHTML = nt, document.head.appendChild(s);
    }
  }
  const ot = `@media (min-width: 1280px) {
  header.header {
    position: relative;
    margin-bottom: 206px;
    padding-bottom: 196px;
    background-size: 464px auto,810px auto,926px auto;
    background-position: top 120px left calc(50% - 363px),top -64px right calc(50% + 122px),bottom -134px right calc(50% - 411px);
  }

  header.header .container:has(h1) {
    margin-top: 0;
  }
  header.header .container:has(h1) > div {
    max-width: 704px;
  }
  div:has(> form#header) {
    width: 704px;
  }
  header.header h1 {
    margin-top: 70px;
  }
  form#header .register-form-field {
    display: grid;
    grid-template-columns:340px 340px;
    gap: 24px 25px;
  }

  form#header .register-form-field .input-wrap input {
    width: 340px;
    height: 56px;
  }

  form#header .register-form-field .input-wrap input::placeholder {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 16px;
    font-weight: 400;
    line-height: 5rem;
  }

  form#header .register-form-field .input-wrap-radio span {
    white-space: nowrap;
  }

  form#header .register-btn-wrapper button.header-btn-form {
    max-width: 704px;
  }

  form#header .register-btn-wrapper button.header-btn-form::after {
    width: 100%;
  }
}
`;
  class st {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles();
    }
    initStyles() {
      const s = document.createElement("style");
      s.innerHTML = ot, document.head.appendChild(s);
    }
  }
  const rt = `@media (min-width: 1200px) {
  br.mobile {
    display: none;
  }
}

@media (max-width: 1199px) {
  br.desktop {
    display: none;
  }
}`;
  H({
    name: "1st hypothesis",
    dev: "OS"
  }), O('goiteens_hyp_2_1"');
  class at {
    constructor() {
      this.init();
    }
    init() {
      if (location.pathname.includes("v-gl-v2/") && (this.initStyles(), new st(), new it({ container: document.querySelector("header"), position: "beforeend" }), new et({ container: document.querySelector("main"), position: "afterbegin" })), location.pathname.includes("success")) {
        const s = sessionStorage.getItem(M);
        s && I("exp_hyp_2_1_submit_02", `Sign up - ${s}`, "submit", "Success page"), sessionStorage.removeItem(M);
      }
    }
    initStyles() {
      const s = document.createElement("style");
      s.textContent = rt, document.head.appendChild(s);
    }
  }
  new at();
})();
