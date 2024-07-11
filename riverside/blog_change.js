(function() {
  "use strict";
  const r = (t, e, n, o = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: t,
      event_desc: e,
      event_type: n,
      event_loc: o
    }), console.log(`Event: ${t} | ${e} | ${n} | ${o}`);
  }, g = ({ name: t, dev: e }) => {
    console.log(
      `%c EXP: ${t} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, p = (t) => document.querySelectorAll(t), i = (t) => document.querySelector(t), u = (t) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", t, "variant_1"));
    }, 1e3);
  }, c = (t, e, n, o, a = 1e3, x = 0.5) => {
    let l, b;
    if (l = new IntersectionObserver(
      function(d) {
        d[0].isIntersecting === !0 ? b = setTimeout(() => {
          r(
            e,
            d[0].target.dataset.visible || n || "",
            "Visibility",
            o
          ), l.disconnect();
        }, a) : (console.log("Element is not fully visible"), clearTimeout(b));
      },
      { threshold: [x] }
    ), typeof t == "string") {
      const d = i(t);
      d && l.observe(d);
    } else
      l.observe(t);
  }, C = (t) => new Promise((e) => {
    if (i(t))
      return e(i(t));
    const n = new MutationObserver(() => {
      i(t) && (e(i(t)), n.disconnect());
    });
    n.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
  }), h = {
    logo: (
      /*html */
      `
    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="24" viewBox="0 0 135 24" fill="none">
      <g clip-path="url(#clip0_26_1080)">
        <path d="M20.0397 0H2.7401C1.23972 0 0.0285645 1.21115 0.0285645 2.71154V20.0112C0.0285645 21.5115 1.23972 22.7227 2.7401 22.7227H20.0397C21.5401 22.7227 22.7513 21.5115 22.7513 20.0112V2.71154C22.7513 1.21115 21.5401 0 20.0397 0ZM17.2016 11.5602C17.0209 12.0844 16.7136 12.8617 16.2616 13.5938C15.7826 14.3802 15.2493 14.9225 14.6889 15.1937C14.3997 15.3383 14.1014 15.4106 13.8032 15.4106C13.6857 15.4106 13.5682 15.4015 13.4597 15.3744C13.0439 15.2931 12.6463 15.0852 12.2847 14.7327C11.652 14.1181 11.1097 13.0787 10.6126 11.5421C10.1155 9.99654 9.66356 9.34577 9.37433 9.06558C9.22972 8.93 9.13933 8.89385 9.09414 8.88481C9.06703 8.88481 9.02183 8.88481 8.93145 8.92096C8.67837 9.03846 8.36203 9.38192 8.05472 9.87C7.75645 10.34 7.46722 10.9365 7.24126 11.5692C7.07856 12.0212 6.58145 12.2562 6.12049 12.0935C5.89453 12.0121 5.71376 11.8585 5.61433 11.6415C5.51491 11.4337 5.50587 11.1987 5.57818 10.9817C5.76799 10.4575 6.09337 9.68019 6.55433 8.94808C7.05145 8.16173 7.59376 7.62846 8.16318 7.35731C8.56991 7.1675 8.98568 7.10423 9.40145 7.17654C9.82626 7.24885 10.2239 7.46577 10.5855 7.80923C11.2272 8.42385 11.7786 9.47231 12.2757 11.0088C12.7728 12.5544 13.2157 13.2142 13.5049 13.4854C13.6495 13.63 13.7399 13.6571 13.767 13.6571C13.7851 13.6571 13.8213 13.6662 13.9026 13.621C14.1466 13.5035 14.454 13.16 14.7432 12.681C15.0324 12.211 15.3036 11.6054 15.5205 10.9817C15.6741 10.5298 16.1713 10.2858 16.6322 10.4394C16.8582 10.5117 17.0389 10.6744 17.1474 10.8823C17.2468 11.0902 17.2649 11.3252 17.1926 11.5421L17.2016 11.5602Z" fill="white"/>
        <path d="M41.2622 11.6594C41.6237 11.0809 41.8045 10.3759 41.8045 9.55339C41.8045 8.73088 41.6237 8.03492 41.2712 7.43838C40.9187 6.84184 40.4126 6.38088 39.7618 6.06453C39.111 5.73915 38.3427 5.58549 37.4479 5.58549H32.522V17.4982H35.4052V13.4219H36.8785L39.0568 17.4982H42.2022L39.7347 12.9609C40.3945 12.6626 40.9006 12.2197 41.2531 11.6503L41.2622 11.6594ZM35.4143 7.90838H36.8333C37.2672 7.90838 37.6287 7.97165 37.9179 8.09819C38.2162 8.21569 38.4331 8.39646 38.5868 8.6405C38.7404 8.88453 38.8127 9.18281 38.8127 9.55339C38.8127 9.92397 38.7404 10.2222 38.5868 10.4572C38.4331 10.6922 38.2162 10.864 37.9179 10.9815C37.6287 11.0899 37.2672 11.1532 36.8333 11.1532H35.4143V7.90838Z" fill="white"/>
        <path d="M48.4111 5.58549H45.5278V17.4982H48.4111V5.58549Z" fill="white"/>
        <path d="M57.8206 14.3076H57.7212L55.0549 5.58549H51.8281L55.8502 17.4982H59.6825L63.7047 5.58549H60.4779L57.8206 14.3076Z" fill="white"/>
        <path d="M67.1211 17.4982H75.4365V15.1572H70.0044V12.7078H75.0117V10.3669H70.0044V7.92646H75.4365V5.58549H67.1211V17.4982Z" fill="white"/>
        <path d="M88.0996 11.6594C88.4611 11.0809 88.6419 10.3759 88.6419 9.55339C88.6419 8.73088 88.4611 8.03492 88.1086 7.43838C87.7561 6.84184 87.25 6.38088 86.5992 6.06453C85.9484 5.73915 85.1801 5.58549 84.2853 5.58549H79.3594V17.4982H82.2426V13.4219H83.7159L85.8942 17.4982H89.0396L86.5721 12.9609C87.2319 12.6626 87.738 12.2197 88.0905 11.6503L88.0996 11.6594ZM82.2517 7.90838H83.6707C84.1046 7.90838 84.4661 7.97165 84.7553 8.09819C85.0536 8.21569 85.2705 8.39646 85.4242 8.6405C85.5778 8.88453 85.6502 9.18281 85.6502 9.55339C85.6502 9.92397 85.5778 10.2222 85.4242 10.4572C85.2705 10.6922 85.0536 10.864 84.7553 10.9815C84.4661 11.0899 84.1046 11.1532 83.6707 11.1532H82.2517V7.90838Z" fill="white"/>
        <path d="M100.771 11.7321C100.464 11.4338 100.085 11.1808 99.6326 10.9729C99.1807 10.7559 98.6655 10.5933 98.078 10.4577L97.0566 10.2227C96.7855 10.1684 96.5415 10.0961 96.3245 10.0148C96.1076 9.93345 95.9178 9.8521 95.7641 9.74364C95.6105 9.63518 95.493 9.51768 95.4116 9.3821C95.3303 9.24653 95.3032 9.09287 95.3032 8.91213C95.3032 8.69521 95.3755 8.5054 95.493 8.33367C95.6195 8.16194 95.8003 8.02636 96.0534 7.93598C96.3065 7.83655 96.6138 7.79136 96.9843 7.79136C97.5447 7.79136 97.9786 7.90887 98.2859 8.15291C98.5932 8.38791 98.7649 8.72232 98.8011 9.1471H101.558C101.558 8.40598 101.359 7.75521 100.979 7.19482C100.6 6.63444 100.075 6.20059 99.3886 5.88425C98.7107 5.5679 97.9063 5.41425 96.9843 5.41425C96.0624 5.41425 95.2761 5.5679 94.5711 5.87521C93.8661 6.18251 93.3147 6.61636 92.908 7.17675C92.5103 7.72809 92.3115 8.37886 92.3115 9.11095C92.3115 10.0148 92.6007 10.7288 93.1972 11.2621C93.7938 11.7863 94.5982 12.175 95.6376 12.41L96.8849 12.6992C97.3188 12.7986 97.6803 12.9071 97.9515 13.0336C98.2316 13.1511 98.4395 13.2867 98.5841 13.4494C98.7197 13.6121 98.792 13.8019 98.792 14.0279C98.792 14.2719 98.7107 14.4798 98.5661 14.6696C98.4215 14.8594 98.2045 15.004 97.9334 15.1034C97.6622 15.2119 97.3368 15.2571 96.9482 15.2571C96.5234 15.2571 96.1528 15.1938 95.8274 15.0583C95.5111 14.9227 95.258 14.7329 95.0772 14.4798C94.8965 14.2267 94.788 13.9013 94.7699 13.5217H92.0132C92.0222 14.4527 92.2391 15.2209 92.6459 15.8356C93.0616 16.4411 93.6311 16.9021 94.3722 17.2004C95.1134 17.4986 95.9811 17.6523 96.9753 17.6523C97.9695 17.6523 98.8191 17.5077 99.5151 17.2184C100.22 16.9292 100.762 16.5225 101.142 15.9802C101.522 15.4379 101.711 14.7961 101.711 14.0459C101.711 13.5669 101.63 13.1421 101.467 12.7534C101.305 12.3738 101.079 12.0304 100.762 11.7321H100.771Z" fill="white"/>
        <path d="M108.192 5.58549H105.309V17.4982H108.192V5.58549Z" fill="white"/>
        <path d="M119.671 6.29953C118.794 5.82049 117.746 5.58549 116.535 5.58549H112.133V17.4982H116.535C117.746 17.4982 118.785 17.2632 119.671 16.7842C120.548 16.3051 121.226 15.6182 121.705 14.7324C122.184 13.8376 122.419 12.7711 122.419 11.5328C122.419 10.2945 122.184 9.23704 121.705 8.34223C121.226 7.44742 120.548 6.76953 119.671 6.2905V6.29953ZM119.174 13.5936C118.939 14.1088 118.586 14.4794 118.125 14.7053C117.664 14.9313 117.095 15.0397 116.435 15.0397H115.025V8.03492H116.399C117.086 8.03492 117.655 8.15242 118.125 8.37838C118.595 8.60434 118.948 8.97492 119.192 9.48108C119.436 9.98724 119.553 10.6742 119.553 11.5328C119.553 12.3915 119.436 13.0784 119.192 13.5936H119.174Z" fill="white"/>
        <path d="M126.242 17.4982H134.548V15.1572H129.125V12.7078H134.123V10.3669H129.125V7.92646H134.548V5.58549H126.242V17.4982Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_26_1080">
          <rect width="134.673" height="23.5" fill="white" transform="translate(0.0285645)"/>
        </clipPath>
      </defs>
    </svg>`
    ),
    arrowDown: `
    <svg class="icon-arrow-down" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M-4.46487e-08 1.02144C-3.23788e-08 0.74074 0.0938015 0.491228 0.281406 0.304093C0.656616 -0.101365 1.31323 -0.101365 1.68844 0.304093L7.00391 5.57505L12.2881 0.304094C12.6633 -0.101365 13.3199 -0.101365 13.6951 0.304094C14.1016 0.678363 14.1016 1.33333 13.6951 1.7076L7.69179 7.69591C7.31658 8.10136 6.65997 8.10136 6.28476 7.69591L0.281406 1.7076C0.0938014 1.52047 -5.55552e-08 1.27095 -4.46487e-08 1.02144Z" fill="white"/>
    </svg>`,
    arrowUp: `
    <svg class="icon-arrow-up" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
      <path d="M14 6.97856C14 7.25926 13.9062 7.50877 13.7186 7.69591C13.3434 8.10136 12.6868 8.10136 12.3116 7.69591L6.99609 2.42495L1.71189 7.69591C1.33668 8.10136 0.680067 8.10136 0.304858 7.69591C-0.101619 7.32164 -0.101619 6.66667 0.304858 6.2924L6.30821 0.304092C6.68342 -0.101365 7.34003 -0.101365 7.71524 0.304092L13.7186 6.2924C13.9062 6.47953 14 6.72904 14 6.97856Z" fill="white"/>
    </svg>`
  }, s = {
    "/blog/how-to-transcribe-audio-to-text": {
      header: "Transcribe Audio to Text Seamlessly with Riverside",
      bulets: ["Fast, accurate transcriptions", "Supports multiple speakers", "Includes automatic timestamps"],
      header_mobile: "Transcribe Audio to Text Seamlessly with Riverside"
    },
    "/blog/how-to-make-a-video-a-short-on-youtube": {
      header: "Instantly Turn Your Video into a Short with Riverside",
      bulets: ["Easily create and edit short shareable videos", "Fine-tune audio and customize your video with automatic editing tools"],
      header_mobile: "Instantly Turn Video into Short with Riverside"
    },
    "/blog/how-to-record-audio-on-google-slides": {
      header: "Record Audio and Video for Google Slides Presentations with Riverside",
      bulets: ["Overlay high-quality audio and video onto your presentation", "Experience the best-in-class virtual studio for your presentation"],
      header_mobile: "Record Audio and Video for Presentations with Riverside"
    },
    "/blog/how-to-use-phone-as-a-webcam": {
      header: "Turn Your Phone into a Video Call and Streaming Camera with Riverside",
      bulets: ["All-in-one platform for video calls, recording, live streaming, and editing", "Use your phone as a secondary webcam for your desktop"],
      header_mobile: "Turn Your Phone into Streaming Camera with Riverside"
    },
    "/blog/how-to-record-a-podcast-remotely": {
      header: "Record Your Podcast Remotely with Riverside ",
      bulets: ["Dedicated remote podcast recording software", "Record in up to 4K video and 48kHz audio", "Synced separate audio and video tracks", "Supports up to 8 remote participants and 1000 live audience members"],
      header_mobile: "Record Your Podcast Remotely with Riverside "
    },
    "/blog/how-to-cut-parts-of-a-video": {
      header: "Edit and Trim Your Videos Seamlessly with Riverside",
      bulets: ["Trim your video with the state-of-the-art text-based editor", "Transcribe, clip, and edit in seconds"],
      header_mobile: "Edit and Trim Your Videos with Riverside"
    },
    "/blog/free-podcast-hosting": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bulets: ["Capture high-quality recordings up to 4K video resolution and 48kHz audio", "Perfect your video with our state-of-the-art text-based, multi-track editor", "Transcribe, clip, and edit your video in seconds", "Easily create short, shareable videos for social media"],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/anchor-review": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bulets: ["Capture high-quality recordings up to 4K video resolution and 48kHz audio", "Perfect your video with our state-of-the-art text-based, multi-track editor", "Transcribe, clip, and edit your video in seconds", "Easily create short, shareable videos for social media"],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/how-to-record-a-google-meet": {
      header: "Record Your Meetings with Riverside – Your Dedicated Meeting Recording Software",
      bulets: ["Capture high-quality recordings up to 4K video resolution and 48kHz audio", "Perfect your video with our state-of-the-art text-based, multi-track editor", "Transcribe, clip, and edit your video in seconds", "Easily create short, shareable videos for social media"],
      header_mobile: "Record Your Meetings Seamlessly with Riverside"
    },
    "/blog/best-background-noise-removal-apps": {
      header: "Try Riverside's Studio-Quality Recording and Editing Tools",
      bulets: ["Experience the state-of-the-art echo cancellation, background noise removal, and audio level normlization features", "Capture high-quality recordings with up to 4K video resolution and 48kHz audio", "Favored by professional content creators from around the world"],
      header_mobile: "Try Riverside's Studio-Quality Recording and Editing Tools"
    }
  }, w = (t) => `
  <div class="crs_sticky">
    <button type="button" class="crs_sticky_arrow">${h.arrowDown}${h.arrowUp}</button>
    <div class="crs_sticky__head">${t}</div>
    <a href="https://riverside.fm/start" class="crs_cta">Try Riverside for Free</a>
  </div>`, v = (t, e) => `
  <div class="crs_rightside">
    <div class="crs_rightside__head">${h.logo}</div>
    <h3>${t}</h3>
    <ul>${e}</ul>
    <a href="https://riverside.fm/start" class="crs_cta">Try Riverside for Free</a>
  </div>`, f = `.blog-sidebar-sticky .blog-sidebar-signup-block {
  display: none;
}

.crs_rightside__head {
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.crs_rightside h3 {
  color: #FFF;
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  padding: 16px 0;
}
.crs_rightside ul {
  padding: 0;
  margin: 0;
}
.crs_rightside ul li {
  list-style-type: none;
  position: relative;
  padding-left: 16px;
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  padding-bottom: 16px;
}
.crs_rightside ul li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 9px;
  border-radius: 50%;
  height: 4px;
  width: 4px;
  background-color: #8665E2;
}

.crs_cta {
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  padding: 16px;
  display: block;
  width: 100%;
  border-radius: 4px;
  background: #8F79F7;
  margin-top: 4px;
}

.crs_sticky {
  display: none;
  position: fixed;
  bottom: 0;
  left: 12px;
  z-index: 9999;
  width: calc(100% - 24px);
  padding: 12px;
  border-radius: 4px 4px 0px 0px;
  border: 1px solid var(--riverside-fm-mine-shaft, #393939);
  background: linear-gradient(180deg, #2C2C2C 0%, #252525 100%);
  transform: translateY(150%);
  transition: all 0.3s ease;
}
.crs_sticky.active {
  transform: translateY(0);
}
.crs_sticky.active.collapsed {
  transform: translateY(calc(100% - 5px));
}
.crs_sticky .icon-arrow-up {
  display: none;
}
.crs_sticky.collapsed .icon-arrow-up {
  display: block;
}
.crs_sticky.collapsed .icon-arrow-down {
  display: none;
}
.crs_sticky_arrow {
  flex-shrink: 0;
  position: absolute;
  bottom: 100%;
  right: 12px;
  height: 24px;
  padding: 0;
  width: 42px;
  height: 24px;
  flex-shrink: 0;
  border: 1px solid #393939;
  border-bottom: none;
  display: flex;
  border-radius: 4px 4px 0px 0px;
  background: linear-gradient(180deg, #2C2C2C 100%, #252525 100%);
}
.crs_sticky_arrow svg {
  margin: auto;
}
.crs_sticky__head {
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  padding-bottom: 8px;
}

@media screen and (min-width: 768px) {
  .blog-sidebar-sticky .blog-content-block {
    display: none;
  }
  .blog-content-block {
    border-radius: 4px;
    background: #F6F6F6;
    padding: 40px;
    width: 100%;
    margin-bottom: 40px;
  }
  .blog-content-heading {
    color: #1D1D1D;
    font-size: 28px;
    font-weight: 800;
    line-height: 34px;
  }
  .sidebar-table-of-content {
    max-height: none;
    margin-top: 16px;
    grid-row-gap: 20px;
    padding: 0;
  }
  .sidebar-table-of-content a {
    color: #151C22;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
    text-decoration-line: underline;
    background-color: transparent !important;
    padding: 0;
  }
  .sidebar-table-of-content a strong {
    font-weight: 500;
  }
  .blog-sidebar-wrapper {
    max-width: 326px;
  }
  .blog-sidebar-sticky {
    border-radius: 8px;
    border: 1px solid var(--riverside-fm-mine-shaft, #393939);
    background: linear-gradient(180deg, #2C2C2C 0%, #252525 100%);
    padding: 32px 20px;
    margin-bottom: 12px;
  }
  .blog-sidebar-sticky .blog-share-block.hor._2 {
    bottom: -36px;
  }
}
@media screen and (max-width: 767px) {
  .crs_rightside {
    display: none;
  }
  .crs_sticky {
    display: block;
  }
}/*# sourceMappingURL=main.css.map */`;
  g({ name: "Blog Table of contents + CTAs", dev: "Olha" }), u("blog_table_of_contents_and_ctas");
  const m = window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop";
  class y {
    constructor(e) {
      this.headerMobile = "", this.device = e, this.init();
    }
    init() {
      i(".crs_style") || document.head.insertAdjacentHTML("beforeend", `<style class="crs_style">${f}</style>`), C(".blog-sidebar-sticky .blog-content-block").then((e) => {
        this.renderTableContent(), this.renderRightSide(), c(".blog-content-block .blog-content-heading", "exp_blogcontentsctas_visibility_01", "Table of contents", "Table of contents"), p(".blog-content-block a").forEach((n) => {
          n.addEventListener("click", () => {
            r("exp_blogcontentsctas_link_01", n.innerText, "Link", "Table of contents");
          });
        }), i(".c-updated-nav-button.get-started-start.gs-mobile").addEventListener("click", () => {
          r("exp_blogcontentsctas_button_03", "Get Started", "Button", "Header");
        });
      });
    }
    renderTableContent() {
      var e;
      i(".blog-content .blog-content-block") || this.device === "mobile" || (e = i(".blog-content")) == null || e.insertAdjacentHTML("afterbegin", `
    <div class="blog-content-block">
      ${i(".blog-sidebar-sticky .blog-content-block").innerHTML}
    </div>`);
    }
    renderRightSide() {
      for (const e in s)
        if (window.location.href.includes(e)) {
          if (this.device === "desktop") {
            let n = s[e].bulets, o = "";
            for (let a = 0; a < n.length; a++)
              o += `<li>${n[a]}</li>`;
            i(".blog-sidebar-sticky").insertAdjacentHTML("afterbegin", v(s[e].header, o)), c(".blog-sidebar-sticky", "exp_blogcontentsctas_visibility_02", s[e].header, "Sticky block");
          } else
            this.headerMobile = s[e].header_mobile, this.renderSticky();
          i(".crs_cta").addEventListener("click", () => {
            r("exp_blogcontentsctas_button_01", "Try Riverside for Free", "Button", "Sticky block");
          });
        }
    }
    renderSticky() {
      document.body.insertAdjacentHTML("beforeend", w(this.headerMobile)), c(".crs_sticky", "exp_blogcontentsctas_visibility_02", this.headerMobile, "Sticky block");
      let e = 0;
      const n = () => {
        console.log(e), i(".blog-sidebar-wrapper") && e >= 20 && (i(".blog-sidebar-wrapper").getBoundingClientRect().bottom < 0 ? i(".crs_sticky").classList.add("active") : i(".crs_sticky").classList.remove("active"));
      };
      setInterval(() => {
        e < 20 && (e += 1, n());
      }, 1e3), window.addEventListener("scroll", () => n()), i(".crs_sticky_arrow").addEventListener("click", () => {
        i(".crs_sticky").classList.toggle("collapsed"), r("exp_blogcontentsctas_button_02", "Arrow", "Button", "Sticky block");
      });
    }
  }
  new y(m);
})();
