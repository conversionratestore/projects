(function() {
  "use strict";
  const l = (o, e) => {
    const t = setInterval(() => {
      const i = document.querySelector(o);
      i && (clearInterval(t), e(i));
    }, 100);
  }, c = ({ name: o, dev: e }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  };
  class u {
    constructor(e) {
      this.elements = typeof e == "string" ? document.querySelectorAll(e) : e instanceof Element ? [e] : e;
    }
    on(e, t, i) {
      return typeof t == "function" && (i = t, t = ""), this.elements.forEach(function(r) {
        r.addEventListener(e, function(a) {
          var s;
          if (t) {
            let n = (s = a.target) == null ? void 0 : s.closest(t);
            r.contains(n) && (i == null || i.call(n, a));
          } else
            i == null || i.call(r, a);
        });
      }), this;
    }
    addClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.add(e);
      }), this;
    }
    removeClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.remove(e);
      }), this;
    }
    toggleClass(e) {
      return this.elements.forEach(function(t) {
        t.classList.toggle(e);
      }), this;
    }
    each(e) {
      return this.elements.forEach((t, i) => {
        e(t, i);
      }), this;
    }
    style(e, t) {
      const i = e.split("-").map((r, a) => a === 0 ? r : r.charAt(0).toUpperCase() + r.slice(1)).join("");
      return this.elements.forEach(function(r) {
        r.style[i] = t;
      }), this;
    }
  }
  const d = (o) => new u(o), h = (o) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", o, "variant_1"));
    }, 1e3);
  }, b = {
    "/blog/how-to-transcribe-audio-to-text": {
      header: "Transcribe Audio to Text Seamlessly with Riverside",
      bullets: ["Fast, accurate transcriptions", "Supports multiple speakers", "Includes automatic timestamps"],
      header_mobile: "Transcribe Audio to Text Seamlessly with Riverside"
    },
    "/blog/how-to-make-a-video-a-short-on-youtube": {
      header: "Instantly Turn Your Video into a Short with Riverside",
      bullets: [
        "Easily create and edit short shareable videos",
        "Fine-tune audio and customize your video with automatic editing tools"
      ],
      header_mobile: "Instantly Turn Video into Short with Riverside"
    },
    "/blog/how-to-record-audio-on-google-slides": {
      header: "Record Audio and Video for Google Slides Presentations with Riverside",
      bullets: [
        "Overlay high-quality audio and video onto your presentation",
        "Experience the best-in-class virtual studio for your presentation"
      ],
      header_mobile: "Record Audio and Video for Presentations with Riverside"
    },
    "/blog/how-to-use-phone-as-a-webcam": {
      header: "Turn Your Phone into a Video Call and Streaming Camera with Riverside",
      bullets: [
        "All-in-one platform for video calls, recording, live streaming, and editing",
        "Use your phone as a secondary webcam for your desktop"
      ],
      header_mobile: "Turn Your Phone into Streaming Camera with Riverside"
    },
    "/blog/how-to-record-a-podcast-remotely": {
      header: "Record Your Podcast Remotely with Riverside ",
      bullets: [
        "Dedicated remote podcast recording software",
        "Record in up to 4K video and 48kHz audio",
        "Synced separate audio and video tracks",
        "Supports up to 8 remote participants and 1000 live audience members"
      ],
      header_mobile: "Record Your Podcast Remotely with Riverside "
    },
    "/blog/how-to-cut-parts-of-a-video": {
      header: "Edit and Trim Your Videos Seamlessly with Riverside",
      bullets: ["Trim your video with the state-of-the-art text-based editor", "Transcribe, clip, and edit in seconds"],
      header_mobile: "Edit and Trim Your Videos with Riverside"
    },
    "/blog/free-podcast-hosting": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds",
        "Easily create short, shareable videos for social media"
      ],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/anchor-review": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds",
        "Easily create short, shareable videos for social media"
      ],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    // '/blog/how-to-record-a-google-meet': {
    //   header: 'Record Your Meetings with Riverside – Your Dedicated Meeting Recording Software',
    //   bullets: [
    //     'Capture high-quality recordings up to 4K video resolution and 48kHz audio',
    //     'Perfect your video with our state-of-the-art text-based, multi-track editor',
    //     'Transcribe, clip, and edit your video in seconds',
    //     'Easily create short, shareable videos for social media'
    //   ],
    //   header_mobile: 'Record Your Meetings Seamlessly with Riverside'
    // },
    "/blog/best-background-noise-removal-apps": {
      header: "Try Riverside's Studio-Quality Recording and Editing Tools",
      bullets: [
        "Experience the state-of-the-art echo cancellation, background noise removal, and audio level normlization features",
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio",
        "Favored by professional content creators from around the world"
      ],
      header_mobile: "Try Riverside's Studio-Quality Recording and Editing Tools"
    },
    "/blog/how-to-upload-a-podcast-to-spotify": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Experience the state-of-the-art echo cancellation, background noise removal, and audio level normlization features",
        "Direct integration with Spotify for Podcasters for seamless publishing"
      ],
      header_mobile: "Record and Edit Podcast with Riverside"
    },
    "/blog/best-podcast-recording-software": {
      header: "Best-in-Class Solution for Creating and Editing Your Podcast",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds",
        "Easily create short, shareable videos for social media"
      ],
      header_mobile: "Best-in-Class Solution for Creating and Editing Your Podcast"
    },
    "/blog/how-to-start-a-podcast": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Podcast with Riverside"
    },
    "/blog/best-podcast-hosting": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Direct integration with Spotify for Podcasters for seamless publishing"
      ],
      header_mobile: "Record and Edit Podcast with Riverside"
    },
    "/blog/google-transcription": {
      header: "Transcribe Audio to Text Seamlessly with Riverside",
      bullets: [
        "Fast, accurate transcriptions",
        "Supports multiple speakers and 100+ languages",
        "Includes automatic timestamps"
      ],
      header_mobile: "Transcribe Audio to Text with Riverside"
    },
    "/blog/how-to-record-a-podcast": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Podcast with Riverside"
    },
    "/blog/how-to-publish-a-podcast": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Direct integration with Spotify for Podcasters for seamless publishing"
      ],
      header_mobile: "Record and Edit Podcast with Riverside"
    },
    "/blog/how-to-record-a-podcast-with-multiple-mics": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture separate high-quality video and audio tracks for each participant ",
        "Perfect your Podcast with our state-of-the-art text-based, multi-track editor",
        "Supports up to 10 remote participants and 1000 live audience members"
      ],
      header_mobile: "Record and Edit Your Podcast  with Riverside"
    },
    "/blog/podcast-equipment": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe and clip your video in seconds"
      ],
      header_mobile: "Record and Edit Your Podcast Videos with Riverside"
    },
    "/blog/podcast-intro": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Add intros to your podcast with our AI Voice feature"
      ],
      header_mobile: "Record and Edit Your Podcast  with Riverside"
    },
    "/blog/podcast-script-templates": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe and clip your video in seconds"
      ],
      header_mobile: "Record and Edit Your Podcast  with Riverside"
    },
    "/blog/free-music-for-podcasts": {
      header: "Record and Edit Your Podcast Seamlessly with Riverside",
      bullets: [
        "Access 88 royalty-free music tracks directly within our state-of-the-art text-based editor.",
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Transcribe and clip your Podcast in seconds"
      ],
      header_mobile: "Record and Edit Your Podcast with Riverside"
    },
    "/blog/how-to-start-a-podcast-on-youtube": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Easily create short clips to grow your presence on YouTube"
      ],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/how-to-record-a-video-podcast": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/podcast-websites": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Podcast Videos with Riverside"
    },
    "/blog/zoom-podcast-and-alternatives": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture separate high-quality video and audio tracks for each participant",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Best-in-Class Solution for Recording and Editing Your Podcast"
    },
    "/blog/improving-zoom-video-quality": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture separate high-quality video and audio tracks for each participant",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe and clip your video in seconds"
      ],
      header_mobile: "Best-in-Class Solution for Recording and Editing Your Podcast"
    },
    "/blog/podcast-headphones": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe and clip your video in seconds"
      ],
      header_mobile: "Best-in-Class Solution for Recording and Editing Your Podcast"
    },
    "/blog/podcast-editing-software": {
      header: "Try Riverside's Studio-Quality Editing and Recording  Tools",
      bullets: [
        "Edit your video with the state-of-the-art text-based editor",
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio",
        "Transcribe, clip in seconds"
      ],
      header_mobile: "Try Riverside's Studio-Quality Editing and Recording  Tools"
    },
    "/blog/how-to-record-a-podcast-on-your-phone": {
      header: "Record Podcasts on Your Phone Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio using mobile app",
        "Perfect your video with our state-of-the-art text-based, multi-track editor"
      ],
      header_mobile: "Record Podcasts on Your Phone with Riverside"
    },
    "/blog/how-to-record-separate-video-tracks": {
      header: "Record and Edit Your Videos Seamlessly with Riverside",
      bullets: [
        "Capture separate high-quality video and audio tracks for each participant",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Your Videos with Riverside"
    },
    "/blog/how-to-add-captions-and-subtitles-in-premiere-pro": {
      header: "Add Captions and Subtitles Seamlessly with Riverside",
      bullets: [
        "Easily add captions with out state-of-the-art text-based editor",
        "Access highly accurate Ai transcriptions in 100+ languages",
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio"
      ],
      header_mobile: "Add Captions and Subtitles with Riverside"
    },
    "/blog/best-video-interview-software": {
      header: "Create Pro-Level Video Interviews with Riverside",
      bullets: [
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio",
        "Edit your video with the state-of-the-art text-based editor",
        "Separate audio and video tracks for each participant for better editing control"
      ],
      header_mobile: "Create Pro-Level Video Interviews with Riverside"
    },
    "/blog/podcast-descriptions": {
      header: "Craft Captivating Podcast Descriptions with Riverside",
      bullets: [
        "Generate accurate transcriptions and craft compelling descriptions with ease",
        "Edit effortlessly using our text-based editor for polished descriptions",
        "Easily create and organize detailed show notes for your episodes"
      ],
      header_mobile: "Craft Captivating Podcast Descriptions with Riverside"
    },
    "/blog/best-streamyard-alternatives": {
      header: "Record and Stream Your Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio",
        "Access highly accurate AI transcriptions in 100+ languages",
        "Stream in full HD to multiple channels with custom branding"
      ],
      header_mobile: "Record and Stream Your Videos with Riverside"
    },
    "/blog/how-to-record-a-podcast-on-your-iphone": {
      header: "Record High-Quality Podcasts on Your iPhone with Riverside",
      bullets: [
        "Capture recordings up to 4K video resolution and 48kHz audio using mobile app",
        "Perfect your video with our state-of-the-art text-based, multi-track editor"
      ],
      header_mobile: "Record High-Quality Podcasts on Your iPhone with Riverside"
    },
    "/blog/record-video-interview": {
      header: "Create Pro-Level Video Interviews Remotely with Riverside  ",
      bullets: [
        "Capture high-quality recordings with up to 4K video resolution and 48kHz audio",
        "Edit your video with the state-of-the-art text-based editor",
        "Separate audio and video tracks for each participant for better editing control"
      ],
      header_mobile: "Create Pro-Level Video Interviews with Riverside  "
    },
    "/blog/side-by-side-video-app": {
      header: "Create Pro-Level Video Interviews with Riverside  ",
      bullets: [
        "Capture high-quality side-by-side interviews with up to 4K video resolution and 48kHz audio",
        "Edit your video with the state-of-the-art text-based editor",
        "Separate audio and video tracks for each participant for better editing control"
      ],
      header_mobile: "Create Pro-Level Video Interviews with Riverside  "
    },
    "/blog/podcast-interview-questions": {
      header: "Record and Edit Your Podcast Videos Seamlessly with Riverside",
      bullets: [
        "Capture high-quality recordings up to 4K video resolution and 48kHz audio",
        "Perfect your video with our state-of-the-art text-based, multi-track editor",
        "Transcribe, clip, and edit your video in seconds"
      ],
      header_mobile: "Record and Edit Your Podcast Videos with Riverside"
    }
  };
  h("Riverside blog v2 41 pages");
  const p = (o, e = "info") => {
    switch (e) {
      case "info":
        e = "color: #3498db;";
        break;
      case "warn":
        e = "color: #f39c12;";
        break;
      case "error":
        e = "color: #e74c3c;";
        break;
      case "success":
        e = "color: #2ecc71;";
        break;
    }
    console.log(`%c>>> ${o}`, `${e} font-size: 16px; font-weight: 600`);
  };
  c({ name: "Riverside change copy", dev: "YK" });
  class v {
    constructor(e) {
      this.data = e, this.init();
    }
    init() {
      const e = window.location.pathname.replace(/\/$/, ""), t = this.data[e];
      if (!t) {
        p("No data found for this page", "warn");
        return;
      }
      const i = t.bullets.map((a) => `<li>${a}</li>`).join(""), r = (
        /* html */
        `
      <style>
        .crs_bullets {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-left: 20px;
        }
        .crs_bullets li {
          color: #fff;
          font-size: 14px;
        }

        .crs_bullets li::marker {
          color: #8665E2;
        }

        @media (max-width: 768px) {
          .crs_bullets {
            display: none;
          }
        }
      </style>
    `
      );
      l(".blog__sidebar-sticky-inner", () => {
        d("body").elements[0].insertAdjacentHTML("afterbegin", r), d(".blog__sidebar-sticky-inner .blog__sidebar-h3").elements[0].innerText = t.header, d(".blog__sidebar-sticky-inner .blog__sidebar-h3").elements[0].insertAdjacentHTML(
          "afterend",
          `<ul class="crs_bullets">${i}</ul>`
        ), d(".blog__sidebar-sticky-inner .blog__sidebar-text").elements[0].innerText = t.header_mobile;
      });
    }
  }
  new v(b);
})();
//# sourceMappingURL=index.js.map
