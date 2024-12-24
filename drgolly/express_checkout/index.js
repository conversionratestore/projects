(function() {
  "use strict";
  const m = (a, e, t, n = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: a,
      event_desc: e,
      event_type: t,
      event_loc: n
    }), console.log(`Event: ${a} | ${e} | ${t} | ${n}`);
  }, x = ({ name: a, dev: e }) => {
    console.log(
      `%c EXP: ${a} (DEV: ${e})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, C = (a) => {
    let e = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(e), window.clarity("set", a, "variant_1"));
    }, 1e3);
  };
  function u(a) {
    return new Promise((e) => {
      if (document.querySelector(a))
        return e(document.querySelector(a));
      const t = new MutationObserver(() => {
        document.querySelector(a) && (e(document.querySelector(a)), t.disconnect());
      });
      t.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const g = (a, e, t, n) => {
    let r = [];
    if (typeof a == "string")
      r = document.querySelectorAll(a);
    else if (a instanceof Element)
      r = [a];
    else {
      console.error("Invalid target type:", a);
      return;
    }
    let i = new IntersectionObserver(
      (o) => {
        o.forEach((s) => {
          s.isIntersecting && (i.unobserve(s.target), setTimeout(function() {
            c.observe(s.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.2
      }
    ), c = new IntersectionObserver((o) => {
      o.forEach((s) => {
        s.isIntersecting ? (m(e || `view_element_${s.target.id}`, t || "Element visibility", "view", n || s.target.id), i.unobserve(s.target)) : i.observe(s.target), c.unobserve(s.target);
      });
    });
    r.forEach((o) => {
      i.observe(o);
    });
  };
  class S {
    constructor() {
      this.init();
    }
    init() {
      this.events();
    }
    addInputError(e, t) {
      var r;
      const n = document.createElement("wpcf7-not-valid-tip");
      n.classList.add("error"), n.textContent = t, (r = e.closest(".wpcf7-form-control-wrap")) == null || r.insertAdjacentElement("beforeend", n);
    }
    async events() {
      try {
        const e = await u("#crs-contact-form form");
        e.addEventListener("submit", async (t) => {
          t.preventDefault();
          const n = new FormData(e), r = await fetch("https://drgolly.com/wp-json/contact-form-7/v1/contact-forms/1671/feedback", {
            method: "POST",
            body: n
          }), i = await r.json();
          if (!r.ok)
            throw new Error(i.message || "Something went wrong");
          if (i.status === "validation_failed")
            for (const c of i.invalid_fields)
              ;
        });
      } catch {
      }
    }
  }
  const T = (
    /* HTML */
    `<div class="et_pb_section et_pb_section_0 et_section_regular">
  <div class="et_pb_row et_pb_row_0">
    <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
      <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
        <div class="et_pb_text_inner"><h1>Contact us</h1></div>
      </div>
      <div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_light">
        <div class="et_pb_text_inner">
          <p>We’re here to help – please choose the relevant option so we can direct your query to the right place</p>
        </div>
      </div>
    </div>
  </div>
  <div class="et_pb_row et_pb_row_1">
    <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
      <div class="et_pb_module et_pb_accordion et_pb_accordion_0">
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_0  et_pb_toggle_open">
          <h3 class="et_pb_toggle_title">Purchase Related Questions</h3>
          <div class="et_pb_toggle_content clearfix">
            <p>Please check out our FAQs first – they are at the bottom of the <a href="/#faq">homepage</a>.</p>
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_1  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Existing Sleep Program Customers</h3>
          <div class="et_pb_toggle_content clearfix">
            At this stage we do not offer private consults for the sleep program. For all Dr Golly Sleep Program related
            specifics please see the FAQs in your program.
            <p></p>
            <div class="text-block-inner">
              <span style="color: #095d66; font-weight: 600; font-style: italic;"
                >If your question is <span style="text-decoration: underline;">not</span> covered in the FAQs</span
              ><br />
              Please complete the form under ‘additional queries’ or drop us a note at
              <a href="mailto:hello@drgolly.com"><strong>hello@drgolly.com</strong></a> and we’ll follow up,
              <span style="text-decoration: underline;">please ensure you use the email you made your purchase</span>
              with so our system can identify you.
            </div>
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_2  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Brand &amp; Social Partnerships</h3>
          <div class="et_pb_toggle_content clearfix">
            <p>
              <span>Please contact: Charlotte Roberts, Head of Marketing at Dr Golly Sleep Program</span><br /><span
                >Email:&nbsp;</span
              ><a href="mailto:charlotte@drgolly.com">charlotte@drgolly.com</a>
            </p>
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_3  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Media &amp; Press</h3>
          <div class="et_pb_toggle_content clearfix">
            <p>
              <span>Please contact: Hannah Cohen at Project Hutton</span><br /><span>Email:&nbsp;</span
              ><a href="mailto:media@drgolly.com">media@drgolly.com</a>
            </p>
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_4  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Talent Booking</h3>
          <div class="et_pb_toggle_content clearfix">
            <p>
              <span>Please contact: Dace McLuckie at Aran Michael Management</span><br /><span>Email:&nbsp;</span
              ><a href="mailto:dace@aranmichaelmanagement.com">dace@aranmichaelmanagement.com</a>
            </p>
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_5  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Medical Appointments</h3>
          <div class="et_pb_toggle_content clearfix">
            The Dr Golly Sleep Program is separate to Dr Golly’s private practice at Cabrini. For all appointments or
            patient communication please contact his rooms on <a href="tel:0395086040">(03) 95086040</a> or
            <a href="mailto:admin@empowerpaediatrics.com">admin@empowerpaediatrics.com</a> and they can arrange in
            person and telehealth appointments. GP referrals <a href="https://drgolly.com/gp-referral-form/">here</a>.
          </div>
        </div>
        <div class="et_pb_toggle et_pb_module et_pb_accordion_item et_pb_accordion_item_6  et_pb_toggle_close">
          <h3 class="et_pb_toggle_title">Additional Queries</h3>
          <div class="et_pb_toggle_content clearfix">
            <p></p>
            <div class="wpcf7 js" id="crs-contact-form" lang="en-US" dir="ltr">
              <div class="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form
                method="post"
                class="wpcf7-form init"
                aria-label="Contact form"
                novalidate="novalidate"
                data-status="init"
              >
                <div style="display: none;">
                  <input type="hidden" name="_wpcf7" value="1671" />
                  <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1671-p1667-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="1667" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
                  <input
                    type="hidden"
                    name="_wpcf7_recaptcha_response"
                  />
                </div>
                <div>
                  <label>
                    Name <span class="required">*</span><br />
                    <span class="wpcf7-form-control-wrap" data-name="your-name"
                      ><input
                        size="40"
                        maxlength="400"
                        class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        value=""
                        type="text"
                        name="your-name"
                    /></span>
                  </label>
                </div>
                <div>
                  <label>
                    Email <span class="required">*</span><br />
                    <span class="wpcf7-form-control-wrap" data-name="your-email"
                      ><div
                        id="clearout__input_container_57666"
                        class="coinputcontainer"
                        style="display: block; position: relative; width:100%;height:auto;"
                      >
                        <input
                          size="40"
                          maxlength="400"
                          class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          value=""
                          type="email"
                          name="your-email"
                          data-clearout-email-identifier="true"
                        />
                        <div
                          class="coloader"
                          style="position: absolute; z-index: 1000000; pointer-events: none; 
background: transparent; text-align: right; margin: 0px; top: 1px;
left: 1px; padding: 0px; border-width: 0px; border-style: solid; border-radius: 0px;
-webkit-appearance: none; vertical-align: baseline; box-sizing: border-box; color: grey;
height: 100%; width: 100%; display:none"
                        >
                          <div
                            class="coloader_img_container"
                            style="height: 100%; margin-right:5px;position: relative; float: right; text-align: right; width: 20px !important;
  display: flex; display: -webkit-flex;display: -ms-flex;justify-content: center;  -ms-align-items: center;  
  align-items: center;"
                          >
                            <img
                              class="co_spinner_img"
                              alt="Clearout Spinner Image"
                              src="https://clearout.io/wp-content/co-js-widget/assets/loader.gif"
                              style="display:none;padding:1px;width:100%"
                            />
                            <img
                              class="co_correct_img"
                              alt="Clearout Correct Image"
                              src="https://clearout.io/wp-content/co-js-widget/assets/correct.png"
                              style="display:none;padding:1px;width:100%"
                            />
                            <img
                              class="co_wrong_img"
                              alt="Clearout Wrong Image"
                              src="https://clearout.io/wp-content/co-js-widget/assets/wrong.png"
                              style="display:none;padding:1px;width:100%"
                            />
                          </div>
                        </div>

                        <div class="cofeedback" style="height:auto;display:none">
                          <span class="feedback_msg error-msg" style="float:left;color:#f50959;display:block"></span>
                          <span class="poweredby" style="font-size:12px;float:right;padding-right:1px;display:none;">
                            <span style="font-size:11px;">Powered by&nbsp;</span>
                            <a
                              href="https://clearout.io?utm_source=js-widget&amp;utm_medium=widget&amp;utm_campaign=clearout-poweredby"
                              style="color:#ff9800;"
                              target="_blank"
                              >Clearout.io</a
                            >
                          </span>
                        </div>
                      </div></span
                    >
                  </label>
                </div>
                <div>
                  <label>
                    Message <span class="required">*</span><br />
                    <span class="wpcf7-form-control-wrap" data-name="your-message">
                      <textarea
                        cols="40"
                        rows="10"
                        maxlength="2000"
                        class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                        aria-required="true"
                        aria-invalid="false"
                        name="your-message"
                      ></textarea>
                    </span>
                  </label>
                </div>
                <div>
                  <input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="Submit" /><span
                    class="wpcf7-spinner"
                  ></span>
                </div>
                <input
                  type="hidden"
                  class="wpcf7-pum"
                  value='{"closepopup":false,"closedelay":0,"openpopup":false,"openpopup_id":0}'
                />
                <div class="wpcf7-response-output" aria-hidden="true"></div>
              </form>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), E = (
    /* HTML */
    `<div class="et-l et-l--post">
  <div class="et_builder_inner_content et_pb_gutters3">
    <div class="et_pb_section et_pb_section_0 section__header-standard et_pb_with_background et_section_regular">
      <div class="et_pb_row et_pb_row_0">
        <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div class="et_pb_module et_pb_post_title et_pb_post_title_0 et_pb_bg_layout_light  et_pb_text_align_left">
            <div class="et_pb_title_container">
              <h1 class="entry-title">Privacy Policy</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="et_pb_section et_pb_section_1 et_section_regular">
      <div class="et_pb_row et_pb_row_1">
        <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
          <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
            <div class="et_pb_text_inner">
              <p>
                This Privacy Policy describes how drgolly.com (the “Site” or “we”) collects, uses, and discloses your
                Personal Information when you visit or make a purchase from the Site.
              </p>
              <p></p>
              <h2>SECTION 1 – WHAT DO WE DO WITH YOUR INFORMATION?</h2>
              <p>
                We have your security and privacy in mind, every step of the way. When you purchase something from our
                store, as part of the buying and selling process, we collect the personal information you give us such
                as your name, address and email address. Your personal information will never be forwarded to third
                parties.
              </p>
              <p>
                When you browse our store, we also automatically receive your computer’s internet protocol (IP) address
                in order to provide us with information that helps us learn about your browser and operating system.
              </p>
              <p>
                Email and SMS marketing (if applicable): With your permission, we may send you emails and text messages
                about our store, new products and other updates.
              </p>
              <h2>SECTION 2 – CONSENT</h2>
              <h3>How do you get my consent?</h3>
              <p>
                When you provide us with personal information to complete a transaction, verify your credit card, place
                an order, arrange for a delivery or return a purchase, you consent to our collecting it and using it for
                that specific reason only.<br />
                If we ask for your personal information for a secondary reason, like marketing, we will either ask you
                directly for your expressed consent, or provide you with an opportunity to say no.
              </p>
              <h3>How do I withdraw my consent?</h3>
              <p>
                If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the
                continued collection, use or disclosure of your information, at anytime, by contacting us at
                privacy@drgolly.com or mailing us at: Dr Golly Sleep Program Pty Ltd 181/183 Wattletree Rd, MALVERN, VIC
                Australia 3144.
              </p>
              <h2>SECTION 3 – DISCLOSURE</h2>
              <p>
                We may disclose your personal information if we are required by law to do so or if you violate our
                <a href="https://drgolly.com/terms-of-service/">Terms of Service.</a>
              </p>
              <h2>SECTION 4 – WORDPRESS &amp; WOOCOMMERCE</h2>
              <p>
                Our store is hosted WordPress.com and WooCommerce. They provide us with the online e-commerce platform
                that allows us to sell our products and services to you.
              </p>
              <p>
                Your data is stored through the Woocommerce data storage, databases and the general Woocommerce
                application. They store your data on a secure server behind a firewall.
              </p>
              <p>
                Payment:<br />
                If you choose a direct payment gateway to complete your purchase, then Woocommerce and Stripe stores
                your credit card data. It is encrypted through the Payment Card Industry Data Security Standard
                (PCI-DSS). Your purchase transaction data is stored only as long as is necessary to complete your
                purchase transaction. After that is complete, your purchase transaction information is deleted.
              </p>
              <p>
                All direct payment gateways adhere to the standards set by PCI-DSS as managed by the PCI Security
                Standards Council, which is a joint effort of brands like Visa, MasterCard, American Express and
                Discover.<br />
                PCI-DSS requirements help ensure the secure handling of credit card information by our store and its
                service providers.
              </p>
              <p>
                For more insight, you may also want to read the WordPress/Woocomerce Terms of Service
                <a href="https://wordpress.com/tos/" target="_blank" rel="noopener">here</a> or Privacy Statement
                <a href="https://en-au.wordpress.org/about/privacy/" target="_blank" rel="noopener">here</a>.
              </p>
              <h2>SECTION 5 – THIRD-PARTY SERVICES</h2>
              <p>
                In general, the third-party providers (e.g. Paypal &amp; Afterpay) used by us will only collect, use and
                disclose your information to the extent necessary to allow them to perform the services they provide to
                us.
              </p>
              <p>
                However, certain third-party service providers, such as payment gateways and other payment transaction
                processors, have their own privacy policies in respect to the information we are required to provide to
                them for your purchase-related transactions.
              </p>
              <p>
                For these providers, we recommend that you read their privacy policies so you can understand the manner
                in which your personal information will be handled by these providers.
              </p>
              <p>
                In particular, remember that certain providers may be located in or have facilities that are located in
                a different jurisdiction than either you or us. So if you elect to proceed with a transaction that
                involves the services of a third-party service provider, then your information may become subject to the
                laws of the jurisdiction(s) in which that service provider or its facilities are located.
              </p>
              <p>
                As an example, if you are located in Canada and your transaction is processed by a payment gateway
                located in the United States, then your personal information used in completing that transaction may be
                subject to disclosure under United States legislation, including the Patriot Act.
              </p>
              <p>
                Once you leave our store’s website or are redirected to a third-party website or application, you are no
                longer governed by this Privacy Policy or our website’s Terms of Service.
              </p>
              <p>
                Links<br />
                When you click on links on our store, they may direct you away from our site. We are not responsible for
                the privacy practices of other sites and encourage you to read their privacy statements.
              </p>
              <h2>SECTION 6 – SECURITY</h2>
              <p>
                To protect your personal information, we take reasonable precautions and follow industry best practices
                to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
              </p>
              <p>
                If you provide us with your credit card information, the information is encrypted using secure socket
                layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the
                Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement
                additional generally accepted industry standards.
              </p>
              <p>
                COOKIES<br />
                Here is a list of cookies that we use. We’ve listed them here so you can choose if you want to opt-out
                of cookies or not.
              </p>
              <p>Cookies Necessary for the Functioning of the Store</p>
              <ul>
                <li aria-level="1">
                  Woocommerce_cart_hash: Helps WooCommerce determine when cart contents/data changes.
                </li>
                <li aria-level="1">
                  Woocommerce_items_in_cart: Helps WooCommerce determine when cart contents/data changes.
                </li>
                <li aria-level="1">
                  Wp_woocommerce_session_: Contains a unique code for each customer so that it knows where to find the
                  cart data in the database for each customer.
                </li>
                <li aria-level="1">
                  Woocommerce_recently_viewed: Powers the
                  <a href="https://docs.woocommerce.com/document/woocommerce-widgets/" target="_blank" rel="noopener"
                    >Recent Viewed Products</a
                  >
                  widget.
                </li>
                <li aria-level="1">
                  store_notice[notice id]: Allows customers to dismiss the
                  <a
                    href="https://docs.woocommerce.com/document/woocommerce-customizer/#section-2"
                    target="_blank"
                    rel="noopener"
                    ><span>Store Notice</span></a
                  ><span>.</span>
                </li>
              </ul>
              <h2>SECTION 7 – AGE OF CONSENT</h2>
              <p>
                By using this site, you represent that you are at least the age of majority in your state or province of
                residence, or that you are the age of majority in your state or province of residence and you have given
                us your consent to allow any of your minor dependents to use this site.
              </p>
              <h2>SECTION 8 – CHANGES TO THIS PRIVACY POLICY</h2>
              <p>
                We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes
                and clarifications will take effect immediately upon their posting on the website. If we make material
                changes to this policy, we will notify you here that it has been updated, so that you are aware of what
                information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
              </p>
              <p>
                If our store is acquired or merged with another company, your information may be transferred to the new
                owners so that we may continue to sell products to you.
              </p>
              <h2>QUESTIONS AND CONTACT INFORMATION</h2>
              <p>
                If you would like to: access, correct, amend or delete any personal information we have about you,
                register a complaint, or simply want more information contact our Privacy Compliance Officer at
                privacy@drgolly.com or by mail at:<br />
                [Re: Privacy Compliance Officer]<br />
                [Dr Golly Sleep Program Pty Ltd 181/183 Wattletree Rd, MALVERN, VIC Australia 3144]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), k = (
    /* HTML */
    `<div class="et_builder_inner_content et_pb_gutters3">
  <div class="et_pb_section et_pb_section_0 section__header-standard et_pb_with_background et_section_regular">
    <div class="et_pb_row et_pb_row_0">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_post_title et_pb_post_title_0 et_pb_bg_layout_light  et_pb_text_align_left">
          <div class="et_pb_title_container">
            <h1 class="entry-title">Refund Policy</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="et_pb_section et_pb_section_1 et_section_regular">
    <div class="et_pb_row et_pb_row_1">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
          <div class="et_pb_text_inner">
            <p>In some extreme cases, we will issue a full refund of your purchase.</p>
            <p>
              We have a 30-day return policy, which means you have 30 days after purchasing your online course to
              request a refund.
            </p>
            <p><strong>To be eligible for a refund, you will need to have:</strong></p>
            <p>a) completed all components of the course;</p>
            <p>b) complete a feedback questionnaire;</p>
            <p>
              c) troubleshoot with our team what you had problems with or where the program fell short, our team will
              work with you to resolve the issues;
            </p>
            <p>d) you’ll also need the receipt or proof of purchase.</p>
            <p>
              Refunds may be issued to those where the program and troubleshooting does not work for their family after
              considerable effort.
            </p>
            <p>
              <strong>Please note:</strong> the program is only advertised as a sleep and settling course NOT MEDICAL
              ADVICE.&nbsp; If one of the reasons your baby is unsettled and not sleeping is medical in nature you will
              always need to see a Health Care Professional to resolve.&nbsp; Dr Golly is not able to provide medical
              advice unless you book a face to face consult with him.
            </p>
            <p>To start a return, you can contact us at hello@drgolly.com.</p>
            <p><strong>Exceptions / non-refundable items</strong></p>
            <p>Unfortunately, we cannot accept returns on gift cards.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), I = (
    /* HTML */
    `<div class="et_builder_inner_content et_pb_gutters3">
  <div class="et_pb_section et_pb_section_0 section__header-standard et_pb_with_background et_section_regular">
    <div class="et_pb_row et_pb_row_0">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_post_title et_pb_post_title_0 et_pb_bg_layout_light  et_pb_text_align_left">
          <div class="et_pb_title_container">
            <h1 class="entry-title">Shipping Policy</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="et_pb_section et_pb_section_1 et_section_regular">
    <div class="et_pb_row et_pb_row_1">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
          <div class="et_pb_text_inner">
            <p>
              Currently, the Dr Golly Sleep Program Pty Ltd only offers online courses via our learning centre. There is
              no physical shipping involved. To access your programs after purchase follow the account creation
              instructions in your inbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), L = (
    /* HTML */
    `<div class="et_builder_inner_content et_pb_gutters3">
  <div class="et_pb_section et_pb_section_0 section__header-standard et_pb_with_background et_section_regular">
    <div class="et_pb_row et_pb_row_0">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_post_title et_pb_post_title_0 et_pb_bg_layout_light  et_pb_text_align_left">
          <div class="et_pb_title_container">
            <h1 class="entry-title">Terms of Service</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="et_pb_section et_pb_section_1 et_section_regular">
    <div class="et_pb_row et_pb_row_1">
      <div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
        <div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_left et_pb_bg_layout_light">
          <div class="et_pb_text_inner">
            <h2><strong>OVERVIEW</strong></h2>
            <p>
              This website is operated by Dr Golly Sleep Program. Throughout the site, the terms “we”, “us” and “our”
              refer to Dr Golly Sleep Program. Dr Golly Sleep Program offers this website, including all information,
              tools and services available from this site to you, the user, conditioned upon your acceptance of all
              terms, conditions, policies and notices stated here.<br />By visiting our site and/ or purchasing
              something from us, you engage in our “Service” and agree to be bound by the following terms and conditions
              (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced
              herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including
              without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using
              any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the
              terms and conditions of this agreement, then you may not access the website or use any services. If these
              Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br />Any
              new features or tools which are added to the current store shall also be subject to the Terms of Service.
              You can review the most current version of the Terms of Service at any time on this page. We reserve the
              right to update, change or replace any part of these Terms of Service by posting updates and/or changes to
              our website. It is your responsibility to check this page periodically for changes. Your continued use of
              or access to the website following the posting of any changes constitutes acceptance of those changes.
            </p>
            <p>
              Our store is on Woocommerce. They provide us with the online e-commerce platform that allows us to sell
              our products and services to you.
            </p>
            <h2>SECTION 1 – ONLINE STORE TERMS</h2>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your
              state or province of residence, or that you are the age of majority in your state or province of residence
              and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the
              Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
            </p>
            <p>You must not transmit any worms or viruses or any code of a destructive nature.</p>
            <p>A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
            <h2>SECTION 2 – GENERAL CONDITIONS</h2>
            <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
            <p>
              You understand that your content (not including credit card information), may be transferred unencrypted
              and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical
              requirements of connecting networks or devices. Credit card information is always encrypted during
              transfer over networks.
            </p>
            <p>
              You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of
              the
            </p>
            <p>
              Service, or access to the Service or any contact on the website through which the service is provided,
              without express written permission by us.
            </p>
            <p>
              The headings used in this agreement are included for convenience only and will not limit or otherwise
              affect these Terms.
            </p>
            <h2>SECTION 3 – ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION</h2>
            <p>
              We are not responsible if information made available on this site is not accurate, complete or current.
              The material on this site is provided for general information only and should not be relied upon or used
              as the sole basis for making decisions without consulting primary, more accurate, more complete or more
              timely sources of information. Any reliance on the material on this site is at your own risk.
            </p>
            <p>
              This site may contain certain historical information. Historical information, necessarily, is not current
              and is provided for your reference only. We reserve the right to modify the contents of this site at any
              time, but we have no obligation to update any information on our site. You agree that it is your
              responsibility to monitor changes to our site.
            </p>
            <h2>SECTION 4 – MODIFICATIONS TO THE SERVICE AND PRICES</h2>
            <p>Prices for our products are subject to change without notice.</p>
            <p>
              We reserve the right at any time to modify or discontinue the Service (or any part or content thereof)
              without notice at any time.
            </p>
            <p>
              We shall not be liable to you or to any third-party for any modification, price change, suspension or
              discontinuance of the Service.
            </p>
            <h2>SECTION 5 – PRODUCTS OR SERVICES (if applicable)</h2>
            <p>
              Certain products or services may be available exclusively online through the website. These products or
              services may have limited quantities and are subject to return or exchange only according to our
              <a href="https://drgolly.com/refund-policy/">Refund Policy</a>.
            </p>
            <p>
              We have made every effort to display as accurately as possible the descriptions of our products that
              appear at the store.
            </p>
            <p>
              We reserve the right, but are not obligated, to limit the sales of our products or Services to any person,
              geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the
              right to limit the quantities of any products or services that we offer. All descriptions of products or
              product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve
              the right to discontinue any product at any time. Any offer for any product or service made on this site
              is void where prohibited.<br />We do not warrant that the quality of any products, services, information,
              or other material purchased or obtained by you will meet your expectations, or that any errors in the
              Service will be corrected.
            </p>
            <h2>SECTION 6 – ACCURACY OF BILLING AND ACCOUNT INFORMATION</h2>
            <p>
              We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or
              cancel quantities purchased per person, per household or per order. These restrictions may include orders
              placed by or under the same customer account, the same credit card, and/or orders that use the same
              billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt
              to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order
              was made. We reserve the right to limit or prohibit orders that, in our sole judgement, appear to be
              placed by dealers, resellers or distributors.
            </p>
            <p>
              You agree to provide current, complete and accurate purchase and account information for all purchases
              made at our store. You agree to promptly update your account and other information, including your email
              address and credit card numbers and expiration dates, so that we can complete your transactions and
              contact you as needed.
            </p>
            <p>For more detail, please review our <a href="https://drgolly.com/refund-policy/">Refund Policy</a>.</p>
            <h2>SECTION 7 – OPTIONAL TOOLS</h2>
            <p>
              We may provide you with access to third-party tools over which we neither monitor nor have any control nor
              input.
            </p>
            <p>
              You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any
              warranties, representations or conditions of any kind and without any endorsement. We shall have no
              liability whatsoever arising from or relating to your use of optional third-party tools.
            </p>
            <p>
              Any use by you of optional tools offered through the site is entirely at your own risk and discretion and
              you should ensure that you are familiar with and approve of the terms on which tools are provided by the
              relevant third-party provider(s).
            </p>
            <p>
              We may also, in the future, offer new services and/or features through the website (including, the release
              of new tools and resources). Such new features and/or services shall also be subject to these Terms of
              Service.
            </p>
            <h2>SECTION 8 – THIRD-PARTY LINKS</h2>
            <p>
              Certain content, products and services available via our Service may include materials from third-parties.
            </p>
            <p>
              Third-party links on this site may direct you to third-party websites that are not affiliated with us. We
              are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not
              have any liability or responsibility for any third-party materials or websites, or for any other
              materials, products, or services of third-parties.
            </p>
            <p>
              We are not liable for any harm or damages related to the purchase or use of goods, services, resources,
              content, or any other transactions made in connection with any third-party websites. Please review
              carefully the third-party’s policies and practices and make sure you understand them before you engage in
              any transaction. Complaints, claims, concerns, or questions regarding third-party products should be
              directed to the third-party.
            </p>
            <h2>SECTION 9 – MOBILE/SMS TERMS OF SERVICE</h2>
            <p>
              The Dr Golly Sleep Program mobile message service (the “Service”) is operated by Dr Golly Sleep Program
              (“Dr Golly Sleep Program”, “we”, or “us”). Your use of the Service constitutes your agreement to these
              terms and conditions (“Mobile Terms”). We may modify or cancel the Service or any of its features without
              notice. To the extent permitted by applicable law, we may also modify these Mobile Terms at any time and
              your continued use of the Service following the effective date of any such changes shall constitute your
              acceptance of such changes.
            </p>
            <p>
              By consenting to Dr Golly Sleep Program’s SMS/text messaging service, you agree to receive recurring
              SMS/text messages from and on behalf of Dr Golly Sleep Program through your wireless provider to the
              mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call
              list. Text messages may be sent using an automatic telephone dialing system or other technology.
              Service-related messages may include updates, alerts, and information (e.g., order updates, account
              alerts, etc.). Promotional messages may include promotions, specials, and other marketing offers (e.g.,
              cart reminders).
            </p>
            <p>
              You understand that you do not have to sign up for this program in order to make any purchases, and your
              consent is not a condition of any purchase with Dr Golly Sleep Program. Your participation in this program
              is completely voluntary.
            </p>
            <p>
              We do not charge for the Service, but you are responsible for all charges and fees associated with text
              messaging imposed by your wireless provider. Message frequency varies. Message and data rates may apply.
              Check your mobile plan and contact your wireless provider for details. You are solely responsible for all
              charges related to SMS/text messages, including charges from your wireless provider.
            </p>
            <p>
              You may opt-out of the Service at any time. Text the single keyword command STOP to +18554498348 or click
              the unsubscribe link (where available) in any text message to cancel. You’ll receive a one-time opt-out
              confirmation text message. No further messages will be sent to your mobile device, unless initiated by
              you. If you have subscribed to other Dr Golly Sleep Program mobile message programs and wish to cancel,
              except where applicable law requires otherwise, you will need to opt out separately from those programs by
              following the instructions provided in their respective mobile terms.
            </p>
            <p>
              For Service support or assistance, text HELP to +18554498348 or email
              <a href="mailto:admin@drgolly.com">admin@drgolly.com</a>.
            </p>
            <p>
              We may change any short code or telephone number we use to operate the Service at any time and will notify
              you of these changes. You acknowledge that any messages, including any STOP or HELP requests, you send to
              a short code or telephone number we have changed may not be received and we will not be responsible for
              honouring requests made in such messages.
            </p>
            <p>
              The wireless carriers supported by the Service are not liable for delayed or undelivered messages. You
              agree to provide us with a valid mobile number. If you get a new mobile number, you will need to sign up
              for the program with your new number.
            </p>
            <p>
              To the extent permitted by applicable law, you agree that we will not be liable for failed, delayed, or
              misdirected delivery of any information sent through the Service, any errors in such information, and/or
              any action you may or may not take in reliance on the information or Service.
            </p>
            <p>
              We respect your right to privacy. To see how we collect and use your personal information, please see our
              <a href="https://drgolly.com/privacy-policy/">Privacy Notice</a>.
            </p>
            <h2>SECTION 10 – USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h2>
            <p>
              If, at our request, you send certain specific submissions (for example contest entries) or without a
              request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether
              online, by email, by postal mail, or otherwise (collectively, ‘comments’), you agree that we may, at any
              time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any
              comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in
              confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.
            </p>
            <p>
              We may, but have no obligation to, monitor, edit or remove content that we determine in our sole
              discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise
              objectionable or violates any party’s intellectual property or these Terms of Service.
            </p>
            <p>
              You agree that your comments will not violate any right of any third-party, including copyright,
              trademark, privacy, personality or other personal or proprietary right. You further agree that your
              comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any
              computer virus or other malware that could in any way affect the operation of the Service or any related
              website. You may not use a false e‑mail address, pretend to be someone other than yourself, or otherwise
              mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments
              you make and their accuracy. We take no responsibility and assume no liability for any comments posted by
              you or any third-party.
            </p>
            <h2>SECTION 11 – PERSONAL INFORMATION</h2>
            <p>
              Your submission of personal information through the store is governed by our Privacy Policy. To view our
              <a href="https://drgolly.com/privacy-policy/">Privacy Policy</a>.
            </p>
            <h2>SECTION 12 – ERRORS, INACCURACIES AND OMISSIONS</h2>
            <p>
              Occasionally there may be information on our site or in the Service that contains typographical errors,
              inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product
              shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies
              or omissions, and to change or update information or cancel orders if any information in the Service or on
              any related website is inaccurate at any time without prior notice (including after you have submitted
              your order).
            </p>
            <p>
              We undertake no obligation to update, amend or clarify information in the Service or on any related
              website, including without limitation, pricing information, except as required by law. No specified update
              or refresh date applied in the Service or on any related website, should be taken to indicate that all
              information in the Service or on any related website has been modified or updated.
            </p>
            <h2>SECTION 13 – PROHIBITED USES</h2>
            <p>
              In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the
              site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any
              unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or
              local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual
              property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or
              discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or
              disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other
              type of malicious code that will or may be used in any way that will affect the functionality or operation
              of the Service or of any related website, other websites, or the Internet; (h) to collect or track the
              personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
              obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or
              any related website, other websites, or the Internet. We reserve the right to terminate your use of the
              Service or any related website for violating any of the prohibited uses.
            </p>
            <h2>SECTION 14 – COURSE COPYRIGHT &amp; INTELLECTUAL PROPERTY GUIDELINES</h2>
            <p>
              If you have purchased an online course you are bound by our copyright and intellectual property
              guidelines.
            </p>
            <p>© Dr Golly Sleep Program Pty Ltd 2022</p>
            <p>
              Except as permitted by the copyright law applicable to you, you may not reproduce or communicate any of
              the content on this website or in the Dr Golly Learning Hub or Dr Golly Online Courses, including files
              downloadable from this website, without the permission of the copyright owner.
            </p>
            <p>
              The owners of copyright in the content on this website may receive compensation for the use of their
              content by educational institutions and governments, including from licensing schemes managed by Copyright
              Agency.<br />We may change these terms of use from time to time. Check before re-using any content from
              this website.
            </p>
            <p>
              As part of our purchase terms and conditions we don’t permit customers to share login details outside
              their family or send PDF routines via email or social media.
            </p>
            <p>
              If you are found to be breaching our copyright terms and conditions your Dr Golly Sleep Program account
              may be deleted.
            </p>
            <p>
              If people you know are looking for help with sleep – please encourage them to purchase the program so we
              can tailor their experience and continue to grow our wonderful Dr Golly community.
            </p>
            <h2>SECTION 15 – DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY</h2>
            <p>
              We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely,
              secure or error-free.
            </p>
            <p>
              We do not warrant that the results that may be obtained from the use of the service will be accurate or
              reliable.
            </p>
            <p>
              You agree that from time to time we may remove the service for indefinite periods of time or cancel the
              service at any time, without notice to you.
            </p>
            <p>
              You expressly agree that your use of, or inability to use, the service is at your sole risk. The service
              and all products and services delivered to you through the service are (except as expressly stated by us)
              provided ‘as is’ and ‘as available’ for your use, without any representation, warranties or conditions of
              any kind, either express or implied, including all implied warranties or conditions of merchantability,
              merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
            </p>
            <p>
              In no case shall Dr Golly Sleep Program, our directors, officers, employees, affiliates, agents,
              contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or
              any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including,
              without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any
              similar damages, whether based in contract, tort (including negligence), strict liability or otherwise,
              arising from your use of any of the service or any products procured using the service, or for any other
              claim related in any way to your use of the service or any product, including, but not limited to, any
              errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of
              the service or any content (or product) posted, transmitted, or otherwise made available via the service,
              even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or
              the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our
              liability shall be limited to the maximum extent permitted by law.
            </p>
            <h2>SECTION 16 – INDEMNIFICATION</h2>
            <p>
              You agree to indemnify, defend and hold harmless Dr Golly Sleep Program and our parent, subsidiaries,
              affiliates, partners, officers, directors, agents, contractors, licensors, service providers,
              subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable
              attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or
              the documents they incorporate by reference, or your violation of any law or the rights of a third-party.
            </p>
            <h2>SECTION 17 – SEVERABILITY</h2>
            <p>
              In the event that any provision of these Terms of Service is determined to be unlawful, void or
              unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by
              applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service,
              such determination shall not affect the validity and enforceability of any other remaining provisions.
            </p>
            <h2>SECTION 18 – TERMINATION</h2>
            <p>
              The obligations and liabilities of the parties incurred prior to the termination date shall survive the
              termination of this agreement for all purposes.
            </p>
            <p>
              These Terms of Service are effective unless and until terminated by either you or us. You may terminate
              these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when
              you cease using our site.
            </p>
            <p>
              If in our sole judgement you fail, or we suspect that you have failed, to comply with any term or
              provision of these Terms of Service, we also may terminate this agreement at any time without notice and
              you will remain liable for all amounts due up to and including the date of termination; and/or accordingly
              may deny you access to our Services (or any part thereof).
            </p>
            <h2>SECTION 19 – ENTIRE AGREEMENT</h2>
            <p>
              The failure of us to exercise or enforce any right or provision of these Terms of Service shall not
              constitute a waiver of such right or provision.
            </p>
            <p>
              These Terms of Service and any policies or operating rules posted by us on this site or in respect to The
              Service constitutes the entire agreement and understanding between you and us and govern your use of the
              Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral
              or written, between you and us (including, but not limited to, any prior versions of the Terms of
              Service).<br />Any ambiguities in the interpretation of these Terms of Service shall not be construed
              against the drafting party.
            </p>
            <h2>SECTION 20 – GOVERNING LAW</h2>
            <p>
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by
              and construed in accordance with the laws of Australia.
            </p>
            <h2>SECTION 21 – CHANGES TO TERMS OF SERVICE</h2>
            <p>
              You can review the most current version of the Terms of Service at any time at this page.<br />We reserve
              the right, at our sole discretion, to update, change or replace any part of these Terms of Service by
              posting updates and changes to our website. It is your responsibility to check our website periodically
              for changes. Your continued use of or access to our website or the Service following the posting of any
              changes to these Terms of Service constitutes acceptance of those changes.
            </p>
            <h2>SECTION 22 – CONTACT INFORMATION</h2>
            <p>Questions about the Terms of Service should be sent to us at admin@drgolly.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  ), v = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="19"
  height="19"
  viewBox="0 0 19 19"
  fill="none"
>
  <g clip-path="url(#clip0_447_352)">
    <path d="M17.5 1L1 17.5" stroke="#095D66" stroke-width="2" />
    <path d="M1 1L17.5 17.5" stroke="#095D66" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_447_352">
      <rect width="19" height="19" fill="white" />
    </clipPath>
  </defs>
</svg>`
  ), P = `dialog.crs-popup {
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

body:has(.crs-popup[open]) {
  overflow: hidden;
}

.crs-popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 19px;
  height: 19px;
  border: none;
  background: none;
  z-index: 9999;
}

.crs-popup__header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 262px;
  background: #f0efeb;
}

.crs-popup__title {
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.76px; /* 141% */
}

.crs-popup__content {
  padding-inline: 16px;
  color: #3c3c3b;
  font-family: Montserrat;
  font-size: 15px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 26.46px; /* 176.4% */
}

.crs-popup__content .et_pb_section_0.et_pb_section {
  margin-top: 0 !important;
}

.crs-popup__content .et_pb_section_1.et_pb_section {
  padding-top: 0 !important;
}
.crs-popup__content :is(p, ul) {
  font-size: 15px !important;
  padding: 0;
  margin-bottom: 24px;
}

.crs-popup__content :is(p, ul):last-child {
  margin-bottom: 0;
}
.crs-popup__content .et_pb_toggle_close p {
  margin-bottom: 0;
}
.crs-popup__content p:empty {
  display: none;
  height: 0;
}
.crs-popup__content h2 {
  color: #3c3c3b;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 33.84px; /* 141% */
}
.crs-popup__content .et_pb_column .et_pb_row_inner {
  padding: 0 !important;
  margin-bottom: 30px;
}

.section__header-standard {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0efeb;
  margin-left: -16px;
  margin-right: -16px;
  width: calc(100% + 32px);
  height: 282px !important;
  min-height: auto;
}
.crs-popup__content .et_pb_row {
  width: 100%;
}

.crs-popup__content h1 {
  color: #8bc3c3;
  text-align: center;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 50.76px; /* 141% */
  padding: 0 !important;
}

.crs-popup__content .et_pb_row_0.et_pb_row {
  padding: 0 !important;
}
.crs-popup__content .et_pb_column .et_pb_module {
  margin-bottom: 14px;
}

.crs-popup__content .et_pb_row_0.et_pb_row .et_pb_text_inner p {
  color: #095d66;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20.11px; /* 125.688% */
}

.crs-popup__content .et_pb_row_0.et_pb_row h1:not(.entry-title) {
  margin-top: 44px;
}

.crs-popup__content .et_pb_toggle {
  border: none;
  background: #fff !important;
  border-top: 1px solid #a9b1b5;
  margin-bottom: 0 !important;
}

.crs-popup__content .et_pb_toggle_title {
  color: #095d66;
  font-family: Montserrat;
  font-size: 16px !important;
  font-style: normal;
  font-weight: 600 !important;
  line-height: 22.5px !important;
  text-transform: inherit;
}

.et_pb_toggle_title:before {
  content: '' !important;
  width: 21px;
  height: 21px;
  background-size: contain;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clip-path="url(%23clip0_206_9803)"><path d="M15.0002 9.75446L11.2063 13.5484L7.41235 9.75446C7.28931 9.61774 7.1355 9.54938 6.95093 9.54938C6.76636 9.54938 6.61255 9.61774 6.4895 9.75446C6.35278 9.8775 6.28442 10.0279 6.28442 10.2056C6.28442 10.3834 6.35278 10.5406 6.4895 10.6773L10.7346 14.9224C10.803 14.9908 10.8782 15.0421 10.9602 15.0762C11.0422 15.1104 11.1243 15.1275 11.2063 15.1275C11.2883 15.1275 11.3704 15.1104 11.4524 15.0762C11.5344 15.0421 11.6096 14.9908 11.678 14.9224L15.9231 10.6773C16.0598 10.5406 16.1282 10.3834 16.1282 10.2056C16.1282 10.0279 16.0598 9.8775 15.9231 9.75446C15.8 9.61774 15.6462 9.54938 15.4617 9.54938C15.2771 9.54938 15.1233 9.61774 15.0002 9.75446ZM11.2473 2.10504C9.8938 2.10504 8.62231 2.35797 7.43286 2.86383C6.24341 3.38336 5.20776 4.08405 4.32593 4.96588C3.44409 5.84772 2.74341 6.88336 2.22388 8.07281C1.71802 9.26227 1.46509 10.5338 1.46509 11.8873C1.46509 13.2408 1.71802 14.5123 2.22388 15.7017C2.74341 16.8912 3.44409 17.9302 4.32593 18.8189C5.20776 19.7076 6.24341 20.4048 7.43286 20.9107C8.62231 21.4302 9.8938 21.69 11.2473 21.69C12.6008 21.69 13.8723 21.4302 15.0618 20.9107C16.2512 20.4048 17.2903 19.7076 18.179 18.8189C19.0676 17.9302 19.7649 16.8912 20.2708 15.7017C20.7903 14.5123 21.05 13.2408 21.05 11.8873C21.05 10.5338 20.7903 9.26227 20.2708 8.07281C19.7649 6.88336 19.0676 5.84772 18.179 4.96588C17.2903 4.08405 16.2512 3.38336 15.0618 2.86383C13.8723 2.35797 12.6008 2.10504 11.2473 2.10504ZM11.2473 20.3775C10.0852 20.3775 8.98462 20.1519 7.94556 19.7007C6.92017 19.2632 6.02466 18.6617 5.25903 17.8961C4.49341 17.1304 3.88501 16.2281 3.43384 15.189C2.99634 14.1636 2.77759 13.063 2.77759 11.8873C2.77759 10.7252 2.99634 9.62457 3.43384 8.58551C3.88501 7.56012 4.49341 6.66461 5.25903 5.89899C6.02466 5.13336 6.92017 4.52496 7.94556 4.07379C8.98462 3.63629 10.0852 3.41754 11.2473 3.41754C12.4231 3.41754 13.5237 3.63629 14.5491 4.07379C15.5881 4.52496 16.4905 5.13336 17.2561 5.89899C18.0217 6.66461 18.6233 7.56012 19.0608 8.58551C19.512 9.62457 19.7375 10.7252 19.7375 11.8873C19.7375 13.063 19.512 14.1636 19.0608 15.189C18.6233 16.2281 18.0217 17.1304 17.2561 17.8961C16.4905 18.6617 15.5881 19.2632 14.5491 19.7007C13.5237 20.1519 12.4231 20.3775 11.2473 20.3775Z" fill="%235EB9B9"/></g><defs><clipPath id="clip0_206_9803"><rect width="21" height="21" fill="white" transform="matrix(1 0 0 -1 0.0500488 21.69)"/></clipPath></defs></svg>');
}

.crs-popup__content .et_pb_toggle_open .et_pb_toggle_title:before {
  position: absolute;
  display: block !important;
  right: -0.563rem !important;
  top: 50%;
  margin-top: -0.5em;
  content: '' !important;
  width: 21px;
  height: 21px;
  transform: rotate(180deg);
  background-size: contain;

  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><g clip-path="url(%23clip0_206_9803)"><path d="M15.0002 9.75446L11.2063 13.5484L7.41235 9.75446C7.28931 9.61774 7.1355 9.54938 6.95093 9.54938C6.76636 9.54938 6.61255 9.61774 6.4895 9.75446C6.35278 9.8775 6.28442 10.0279 6.28442 10.2056C6.28442 10.3834 6.35278 10.5406 6.4895 10.6773L10.7346 14.9224C10.803 14.9908 10.8782 15.0421 10.9602 15.0762C11.0422 15.1104 11.1243 15.1275 11.2063 15.1275C11.2883 15.1275 11.3704 15.1104 11.4524 15.0762C11.5344 15.0421 11.6096 14.9908 11.678 14.9224L15.9231 10.6773C16.0598 10.5406 16.1282 10.3834 16.1282 10.2056C16.1282 10.0279 16.0598 9.8775 15.9231 9.75446C15.8 9.61774 15.6462 9.54938 15.4617 9.54938C15.2771 9.54938 15.1233 9.61774 15.0002 9.75446ZM11.2473 2.10504C9.8938 2.10504 8.62231 2.35797 7.43286 2.86383C6.24341 3.38336 5.20776 4.08405 4.32593 4.96588C3.44409 5.84772 2.74341 6.88336 2.22388 8.07281C1.71802 9.26227 1.46509 10.5338 1.46509 11.8873C1.46509 13.2408 1.71802 14.5123 2.22388 15.7017C2.74341 16.8912 3.44409 17.9302 4.32593 18.8189C5.20776 19.7076 6.24341 20.4048 7.43286 20.9107C8.62231 21.4302 9.8938 21.69 11.2473 21.69C12.6008 21.69 13.8723 21.4302 15.0618 20.9107C16.2512 20.4048 17.2903 19.7076 18.179 18.8189C19.0676 17.9302 19.7649 16.8912 20.2708 15.7017C20.7903 14.5123 21.05 13.2408 21.05 11.8873C21.05 10.5338 20.7903 9.26227 20.2708 8.07281C19.7649 6.88336 19.0676 5.84772 18.179 4.96588C17.2903 4.08405 16.2512 3.38336 15.0618 2.86383C13.8723 2.35797 12.6008 2.10504 11.2473 2.10504ZM11.2473 20.3775C10.0852 20.3775 8.98462 20.1519 7.94556 19.7007C6.92017 19.2632 6.02466 18.6617 5.25903 17.8961C4.49341 17.1304 3.88501 16.2281 3.43384 15.189C2.99634 14.1636 2.77759 13.063 2.77759 11.8873C2.77759 10.7252 2.99634 9.62457 3.43384 8.58551C3.88501 7.56012 4.49341 6.66461 5.25903 5.89899C6.02466 5.13336 6.92017 4.52496 7.94556 4.07379C8.98462 3.63629 10.0852 3.41754 11.2473 3.41754C12.4231 3.41754 13.5237 3.63629 14.5491 4.07379C15.5881 4.52496 16.4905 5.13336 17.2561 5.89899C18.0217 6.66461 18.6233 7.56012 19.0608 8.58551C19.512 9.62457 19.7375 10.7252 19.7375 11.8873C19.7375 13.063 19.512 14.1636 19.0608 15.189C18.6233 16.2281 18.0217 17.1304 17.2561 17.8961C16.4905 18.6617 15.5881 19.2632 14.5491 19.7007C13.5237 20.1519 12.4231 20.3775 11.2473 20.3775Z" fill="%235EB9B9"/></g><defs><clipPath id="clip0_206_9803"><rect width="21" height="21" fill="white" transform="matrix(1 0 0 -1 0.0500488 21.69)"/></clipPath></defs></svg>');
}

#crs-contact-form form {
  max-width: 73.375rem;

  background-color: #e8eff3;
  border-radius: 0.875rem;
  position: relative;
  padding: 2.5rem 1.333rem;

  max-width: none;
}

#crs-contact-form form label {
  color: #095d66;
  font-weight: 600;
  font-size: 1.333rem;
}
#crs-contact-form form :is(input, textarea) {
  margin-block: 1rem;

  border: 1px solid #818c93;
  background: #fff;
  font-family: var(--heading-font);
  font-size: 1.375rem;
  font-weight: 600;
  width: 100%;
  color: var(--base-color);
  padding: 0.667rem 1rem;
}

#crs-contact-form form input[type='submit'] {
  background-color: rgb(94, 185, 185);
  color: #fff;
  border-color: #5eb9b9;
  font-size: 1.5rem;
  width: 26.667rem;
  text-align: center;
  max-width: 18rem;
  padding: 1rem 0.9375rem;
  margin-inline: auto;
}
`, O = {
    contact: T,
    privacyPolicy: E,
    shippingPolicy: I,
    terms: L,
    refundPolicy: k
  };
  class M {
    constructor() {
      this.popup = null, this.init();
    }
    init() {
      this.initStyles(), this.render(), this.events();
    }
    render() {
      const e = (
        /* HTML */
        `
      <dialog class="crs-popup">
        <div class="crs-popup__wrap">
          <button class="crs-popup__close">${v}</button>

          <div class="crs-popup__content"></div>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", e), this.popup = document.querySelector(".crs-popup");
    }
    events() {
      var t;
      const e = (t = this.popup) == null ? void 0 : t.querySelector(".crs-popup__close");
      e == null || e.addEventListener("click", () => this.close());
    }
    open(e) {
      var t;
      this.popup && (this.popup.querySelector(".crs-popup__content").innerHTML = "", this.popup.querySelector(".crs-popup__content").insertAdjacentHTML("beforeend", O[e]), (t = this.popup) == null || t.showModal(), e !== "contact" ? g(".crs-popup", "exp__01__exp_checkout__pop_serv__view", "Section", "Service page popup") : (u(".crs-popup__content .et_pb_toggle").then((n) => {
        document.querySelectorAll(".crs-popup__content .et_pb_toggle h3").forEach((i) => {
          i == null || i.addEventListener("click", (c) => {
            const o = c.currentTarget;
            m("exp__01__exp_checkout__pop_cont__open", `Open question. ${o.textContent}`, "click", "Contact us popup");
          });
        }), new S();
      }), g(".crs-popup", "exp__01__exp_checkout__pop_cont__view", "Section", "Contact us popup")));
    }
    close() {
      var e;
      (e = this.popup) == null || e.close();
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = P, document.head.appendChild(e);
    }
  }
  const A = (
    /* HTML */
    `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="45" fill="none">
  <g clip-path="url(#a)">
    <path
      d="m36 7-1-.6-.8-.4c-.9-.6-1-2.5-2-3s-2.7.4-3.8 0c-1-.3-1.8-2-3-2.1C24.5.7 23.2 2 22 2S19.6.7 18.5.9c-1.1.1-1.9 1.8-3 2.2-1 .3-2.6-.6-3.6 0-1 .4-1.2 2.3-2.1 3-1 .6-2.7.2-3.5 1-.8.8-.4 2.6-1.1 3.5-.7 1-2.5 1.1-3 2.1-.4.8 0 2 .1 3L7 22.9 2.3 30c0 1-.5 2.2-.1 3 .5 1 2.3 1.2 3 2.2.7.9.3 2.7 1 3.5.9.8 2.7.4 3.6 1 .9.7 1 2.6 2 3 1 .6 2.7-.3 3.8 0l.7.4 1.7.5A23.6 23.6 0 0 0 36 7Z"
      fill="#8BC3C3"
    />
    <path
      d="m41.7 30-2-7.2 2-7c0-1 .5-2.3.1-3-.5-1-2.3-1.3-3-2.2-.7-.9-.3-2.7-1-3.5-.7-.6-1.9-.5-2.8-.7A24.1 24.1 0 0 1 16.3 43c.7.5 1.3 1.6 2.2 1.7 1.1.2 2.4-1.2 3.5-1.2s2.4 1.4 3.5 1.2c1.1-.2 1.9-1.9 3-2.2 1-.3 2.6.6 3.6 0 1-.4 1.2-2.3 2.1-3 1-.6 2.7-.2 3.5-1 .8-.8.4-2.6 1.1-3.6.7-.9 2.5-1 3-2 .4-.9 0-2-.1-3Z"
      fill="#8BC3C3"
    />
    <path
      d="m22 7.4-.8.1-11.7 3.7c-.6.2-1 .7-1 1.3v3.3l2 14.2c2.7 4.8 7.4 7.9 10.2 9.3.4.2.9.3 1.3.3L23.4 23 22 7.4Z"
      fill="#F4E0B2"
    />
    <path
      d="M34.5 11.2 23 7.5l-.9-.1v32.2c.4 0 .9-.1 1.3-.3 2.8-1.4 7.6-4.5 10.2-9.3l2-14.2v-3.3c0-.6-.4-1.1-1-1.3Z"
      fill="#F0D28B"
    />
    <path
      d="M38.3 15.8h-36v.6c-.4 1-2.1 1.8-2.3 3-.2 1 1.2 2.3 1.2 3.4 0 1.2-1.4 2.4-1.2 3.5.1.9 1.1 1.5 1.8 2.2l1.7.8h36.2V16.8l-1.4-1Z"
      fill="#52A7A7"
    />
    <path
      d="M44 19.4c-.2-1.2-1.9-2-2.2-3l-.1-.6h-3.4a24.3 24.3 0 0 1-1 10.7c-.4 1.2-1.5 2-2.7 2H1.8c.2.3.4.5.4.8l.1.6h39.4v-.6c.4-1.1 2.1-1.9 2.3-3 .2-1-1.2-2.3-1.2-3.5 0-1.1 1.4-2.3 1.2-3.4Z"
      fill="#4C9090"
    />
    <path
      d="M27.3 19.4a.8.8 0 0 0-.7-.5c-.4 0-.7.2-.8.6l-2.4 6.2a.7.7 0 0 0 1.3.5l.4-1H28l.4 1a.7.7 0 1 0 1.3-.5l-2.4-6.3Zm-1.6 4.3.8-2.3 1 2.3h-1.8ZM20 19h-1.8a.7.7 0 0 0-.7.7V26a.7.7 0 0 0 .7.7H20c1.8 0 3.2-1.6 3.2-3.8 0-2.3-1.3-3.8-3.2-3.8Zm0 6.2h-1v-4.8h1c1.3 0 1.7 1.3 1.7 2.4 0 1.1-.5 2.3-1.7 2.4ZM38.6 22.2l-1.7-.7a.5.5 0 0 1-.2-.5c0-.1.1-.5.6-.6 1-.3 1.8.4 1.8.4a.7.7 0 0 0 .9-1c0-.1-1.4-1.3-3.1-.8-.9.3-1.5 1-1.6 1.8a2 2 0 0 0 1 2l1.9.7c.3.1 1 .4.8 1 0 .4-.5.8-1.2.8-.6 0-1.2-.3-1.6-.7a.7.7 0 0 0-1 1c.6.6 1.6 1 2.6 1 1.3 0 2.4-.7 2.6-1.9.2-.8-.2-2-1.8-2.5ZM34.3 19a.7.7 0 0 0-1 .3L32 21.4l-1.4-2.2a.7.7 0 0 0-1.2.8l2 3v3c0 .4.2.7.6.7.4 0 .7-.3.7-.7v-3l2-3c.1-.3 0-.7-.3-1ZM12 26.8a2.6 2.6 0 0 1-2.6-2.5v-3a2.6 2.6 0 0 1 5.1 0v3c0 1.4-1.1 2.5-2.6 2.5Zm0-6.6c-.7 0-1.2.5-1.2 1.1v3a1.1 1.1 0 0 0 2.3 0v-3c0-.6-.5-1.1-1.2-1.1ZM6 26.8a2.4 2.4 0 0 1-2.4-2.4.7.7 0 1 1 1.4 0v.1a1 1 0 0 0 2 0c0-.6-.4-1-1-1A.7.7 0 1 1 6 22a.9.9 0 1 0-.9-1c0 .3-.4.6-.8.5a.7.7 0 0 1-.6-.9 2.3 2.3 0 1 1 4 2A2.4 2.4 0 0 1 6 26.9Z"
      fill="#fff"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" transform="translate(0 .8)" d="M0 0h44v44H0z" /></clipPath>
  </defs>
</svg>`
  ), N = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="15"
  height="16"
  viewBox="0 0 15 16"
  fill="none"
>
  <g clip-path="url(#clip0_447_176)">
    <path
      d="M7.5 0.840088C3.35476 0.840088 0 4.19446 0 8.34009C0 12.4853 3.35438 15.8401 7.5 15.8401C11.6452 15.8401 15 12.4857 15 8.34009C15 4.1949 11.6456 0.840088 7.5 0.840088ZM8.27019 11.3173C8.27019 11.5542 7.92466 11.7911 7.50015 11.7911C7.05589 11.7911 6.74001 11.5542 6.74001 11.3173V7.55593C6.74001 7.27951 7.05592 7.09189 7.50015 7.09189C7.92466 7.09189 8.27019 7.27951 8.27019 7.55593V11.3173ZM7.50018 6.18372C7.04605 6.18372 6.69067 5.84807 6.69067 5.47289C6.69067 5.09774 7.04607 4.77196 7.50018 4.77196C7.94443 4.77196 8.29986 5.09774 8.29986 5.47289C8.29986 5.84807 7.9444 6.18372 7.50018 6.18372Z"
      fill="#8BC3C3"
    />
  </g>
  <defs>
    <clipPath id="clip0_447_176">
      <rect width="15" height="15" fill="white" transform="translate(0 0.840088)" />
    </clipPath>
  </defs>
</svg>`
  ), q = `header {
  background: #f2f2f2;
  padding-bottom: 22px;
}
header .et_pb_section {
  background: transparent !important;
}

header .et_pb_section_1_tb_header.et_pb_section {
  padding-bottom: 0 !important;
}
header div:has(> .et_pb_column_1_tb_header) {
  display: flex;
  gap: 24px;
}

header .et_pb_section_1_tb_header {
  box-shadow: none !important;
}

header div:has(> .et_pb_column_1_tb_header)::after {
  display: none !important;
}

header .et_pb_section_0_tb_header.et_pb_section {
  display: none !important;
}
.crs-top {
  position: relative;
  width: 100%;
  color: #000;
  font-family: Montserrat;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  line-height: 22.28px;
}

.crs-top::after {
  content: '';
  position: absolute;
  width: 34px;
  height: 66px;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="35" height="69" viewBox="0 0 35 69" fill="none"><g clip-path="url(%23clip0_614_3072)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4948 61.9322C16.2031 63.2317 19.5262 61.3499 21.8229 64.4651C21.0392 64.6999 20.526 64.9212 20.0615 64.9622C14.6058 65.2402 9.15029 65.5182 3.70179 65.6714C2.81443 65.6982 1.5463 65.4817 1.08964 64.8781C0.314936 63.775 1.27974 62.8957 2.18891 62.1481C4.99975 59.7943 7.75512 57.3988 10.5868 55.0173C11.6029 56.9527 11.6029 56.9527 7.5063 61.5926C18.7106 59.7822 25.1728 49.1138 21.1816 38.7385C20.1828 39.2018 19.1908 39.7137 18.1574 40.1076C15.1819 41.2966 12.1524 41.5773 9.07636 40.4785C6.78322 39.6649 5.21189 38.1796 4.9383 35.7182C4.65782 33.2084 6.10893 31.5671 8.10714 30.2939C12.4781 27.5952 17.2529 28.2801 20.7617 32.0899C21.1977 32.548 21.7031 32.9714 22.3053 33.5544C26.617 28.6859 29.1552 23.1776 29.0745 16.8275C28.9989 7.01122 21.2753 3.50156 14.3922 3.48676C13.5257 3.48577 12.6799 3.63038 11.3141 3.7744C12.7721 2.18163 14.3043 1.98928 15.7879 1.80379C21.6532 1.09647 28.0527 4.69474 30.5679 10.0563C32.1918 13.4897 32.6232 17.0672 31.9107 20.7821C30.849 26.2297 28.6236 31.1491 24.7982 35.2557C24.4094 35.6572 24.0483 36.0798 23.5831 36.6407C25.1147 41.5229 25.9391 46.4804 23.9561 51.5388C22.008 56.4932 17.6096 58.9976 13.4948 61.9322ZM19.8967 35.777C17.3874 31.1571 13.0086 29.7726 9.33085 32.472C8.44962 33.0671 7.66442 34.3418 7.56591 35.3954C7.42507 36.851 8.72022 37.6082 10.0852 37.9841C13.6674 38.9864 16.8018 38.0472 19.8967 35.777Z" fill="%238BC3C3"/></g><defs><clipPath id="clip0_614_3072"><rect width="27" height="66" fill="white" transform="matrix(-0.992663 -0.120917 -0.120917 0.992663 34.7825 3.26474)"/></clipPath></defs></svg>');
}
.crs-top span {
  color: #095d66;
  font-weight: 600;
}

.woocommerce button.button {
  border: 2px solid #095d66 !important;
  background: #095d66 !important;
}

.wc_payment_methods {
  margin-bottom: 20px !important;
}

#wc-stripe-payment-request-wrapper {
  margin-bottom: 20px !important;
}
.wc_payment_method:last-child {
  margin-bottom: 0 !important;
}

.form-row.place-order {
  margin-top: 0 !important;
  margin-bottom: 0px !important;
}
.wc_coupon_message_wrap:has(.no_wc_coupon_message:empty) {
  display: none !important;
}
.woocommerce-billing-fields {
  margin-top: 0 !important;
}
.woocommerce-billing-fields h3 {
  padding-top: 0 !important;
}

.woocommerce-billing-fields {
  margin-bottom: 10px;
}
.woocommerce-billing-fields {
  margin-bottom: 20px !important;
}
.woocommerce-terms-and-conditions-wrapper {
  margin-bottom: 20px !important;
}
.place-order-actions:not(:has(.wc-ppcp-hide-button)) {
  margin-top: 5px;
  margin-bottom: 20px;
}
header :is(.et_pb_column_1_tb_header, .et_pb_image_0_tb_header) {
  width: 71px !important;
}

header .et_pb_column_3_tb_header {
  width: 100% !important;
}
.et_pb_section_0.et_pb_section {
  margin-top: 20px !important;
  padding-top: 0 !important;
}
.mandatory-fields {
  padding: 16px 25px !important;
  margin-bottom: 20px;
  border: none !important;
}
.mandatory-fields .form-row:last-child {
  margin-bottom: 0 !important;
}
.mandatory-fields input {
  border-radius: 6px !important;
  border: 1px solid #999 !important;
  background: #fff;
  height: 48px !important;
}
.coupon-container {
  display: none !important;
}

.crs-coupon-container .coupon-heading {
  display: flex;
  align-items: center;
  margin: 0 0 15px 0;
}

.crs-coupon-container[open] .coupon-heading {
  margin-bottom: 10px;
}
.crs-coupon-container .coupon-input-wrapper {
  margin-bottom: 15px;
}
.crs-coupon-container .coupon-heading::-webkit-details-marker {
  display:none;
}

.crs-coupon-container .coupon-heading p {
  display: flex;
  align-items: center;
  gap: 7px;
}

.crs-coupon-container .coupon-heading img.toggle {
  width: 20px;
  height: auto;
  margin-left: auto;
  transition: all 0.2s;
}

.crs-coupon-container[open] .coupon-heading img.toggle {
  transform: rotate(180deg);
}

.crs-coupon-container .form-row {
  width: 100% !important;
  padding: 0;
  margin: 0 !important;
  display: flex;
  justify-content: space-between;
}

.crs-coupon-container .form-row::after,
.crs-coupon-container .form-row::before {
  display: none !important;
}

.crs-coupon-container .form-row input {
  width: calc(100% - 110px) !important;
  font-size: 1em !important;
}

.crs-coupon-container .form-row button {
  padding: 8px !important;
  width: 95px;
  font-size: 1em !important;
  border-radius: 6px !important;
}

.coupon__title {
  color: #3c3c3b;
  font-size: 13.5px;
  font-weight: 400;
  line-height: 18.9px;
}

tr.coupon_item td {
  padding: 0 !important;
}

.crs-refund {
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid rgba(139, 195, 195, 0.1);
  background: #eaf5f4;
  padding: 12px 25px;
  margin-left: -2.08rem !important;
  margin-right: -2.08rem !important;
  width: calc(100% + 4.16rem) !important;
}

.crs-refund__icon {
  width: 44px;
  height: 44px;
}

.crs-refund__text {
  color: #000;
  font-family: Raleway;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 138.462% */
}

.crs-refund__tooltip {
  position: relative;
  width: 15px;
  height: 15px;
  margin-left: 6px;
}
.crs-refund__tooltip svg {
  position: absolute;
  inset: 0;
}

.crs-footer {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 25px;
  border-top: 1px solid rgba(139, 195, 195, 0.2);
}

.crs-footer ul {
  display: grid;
  gap: 12px;
  list-style: none;
  padding: 0;
}

.crs-footer ul li {
  color: #50aea6;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.45px;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
`;
  class D {
    constructor() {
      console.log("CheckoutPageChanges"), this.popup = new M(), this.init();
    }
    init() {
      this.initStyles(), this.coupon(), this.details(), this.header(), this.footer(), this.refundBadge(), this.events();
    }
    async coupon() {
      var i;
      const e = (
        /* HTML */
        `<tr class="coupon_item">
      <td colspan="2">
        <details class="crs-coupon-container">
          <summary class="coupon-heading">
            <p>
              <img
                decoding="async"
                src="https://drgolly.com/wp-content/themes/Divi-child-new-checkout/assets/images/promo-icon.svg"
                alt="coupon of gift card"
              />
              <span class="coupon__title">Have a coupon or gift card?</span>
            </p>
            <img
              decoding="async"
              class="toggle"
              src="https://drgolly.com/wp-content/themes/Divi-child-new-checkout/assets/images/down-chevron.svg"
              alt="toggle section"
            />
          </summary>
          <div class="coupon-input-wrapper">
            <p class="form-row">
              <input
                type="text"
                name="promo_code"
                class="input-text"
                id="promo_code"
                value=""
                placeholder="coupon or gift card"
              />
              <button type="button" class="button apply-promo-code">Add</button>
            </p>
          </div>
        </details>
      </td>
    </tr>`
      ), t = await u("#order_review");
      (i = (await u("table.shop_table")).querySelector("tbody")) == null || i.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        ` ${e}`
      ), new MutationObserver((c, o) => {
        var s;
        for (const f of c)
          if (f.type === "childList") {
            if (!document.querySelector(".crs-coupon-container")) {
              const p = document.querySelector("table.shop_table");
              if ((s = p == null ? void 0 : p.querySelector("tbody")) == null || s.insertAdjacentHTML(
                "beforeend",
                /* HTML */
                ` ${e}`
              ), document.querySelector(".discount-amount")) {
                const d = document.querySelector(".crs-coupon-container"), l = d == null ? void 0 : d.querySelector(".coupon-heading span");
                l.textContent = "Coupon applied";
              }
            }
            const _ = document.querySelectorAll(".cart_item");
            if (_ && _.length === 0) {
              const p = document.querySelector(".crs-refund"), h = document.querySelector(".crs-reviews"), d = document.querySelector(".crs-footer"), l = document.querySelector("footer");
              l.querySelector("div").style.display = "", d == null || d.remove(), p == null || p.remove(), h == null || h.remove(), o.disconnect();
            }
          }
      }).observe(t, { childList: !0, subtree: !0 });
    }
    async details() {
      const e = await u(".mandatory-fields"), t = await u("#order_review"), n = e.previousElementSibling;
      n && n.tagName === "H3" && (t == null || t.insertAdjacentElement("beforebegin", n)), t == null || t.insertAdjacentElement("beforebegin", e);
    }
    async header() {
      const t = (await u("header")).querySelector(".et_pb_column_3_tb_header");
      t && (t.innerHTML = /* HTML */
      `<div class="crs-top">
      You're one step closer to<br />
      <span>better sleep</span> for your baby!
    </div>`);
    }
    async refundBadge() {
      const e = (
        /* HTML */
        `
      <div class="crs-refund">
        <div class="crs-refund__icon">${A}</div>

        <div class="crs-refund__text">
          No results after completing the program? Get a full refund within 30 days!
          <span class="crs-refund__tooltip">${N}</span>
        </div>
      </div>
    `
      );
      (await u("form.checkout ")).insertAdjacentHTML("afterend", e), document.querySelector(".crs-refund__tooltip").addEventListener("click", () => {
        m(
          "exp__01__exp_checkout__refund__click",
          "30 days refund banner",
          "click",
          "No results after completing the program? Get a full refund within 30 days!"
        ), this.popup.open("refundPolicy");
      }), g(
        ".crs-refund",
        "exp__01__exp_checkout__refund__view",
        "Section",
        "No results after completing the program? Get a full refund within 30 days!"
      );
    }
    async footer() {
      const e = await u("footer");
      e.insertAdjacentHTML(
        "beforeend",
        /* HTML */
        `
    <div class="crs-footer">
      <div class="crs-footer__left">
        <ul>
          <li data-popup="contact">Contact & Support</li>
          <li data-popup="shippingPolicy">Shipping Policy</li>
          <li data-popup="terms">Terms of Service</li>
        </ul>
      </div>
      <div class="crs-footer__right">
        <ul>
          <li data-popup="privacyPolicy">Privacy Policy</li>
          <li data-popup="refundPolicy">Refund Policy</li>
        </ul>
      </div>
    </div>
  `
      ), e.querySelector("div").style.display = "none", g(".crs-footer", "exp__01__exp_checkout__footer__view", "Section", "Footer"), e.querySelectorAll("li[data-popup]").forEach((r) => {
        r.addEventListener("click", () => {
          const i = r.getAttribute("data-popup"), c = r.textContent;
          i && (this.popup.open(i), m("exp__01__exp_checkout__footer__click", `Text: ${c}`, "click", "Footer"));
        });
      });
    }
    async events() {
      (await u(".wc-ppcp-payment-method__container")).addEventListener("click", () => {
        m("exp__01__exp_checkout__paypal", "PayPal", "click", "Complete your order in under 2 minutes");
      }), (await u("#wc-stripe-payment-request-wrapper")).addEventListener("click", () => {
        m("exp__01__exp_checkout__applepay", "Apple Pay", "click", "Complete your order in under 2 minutess");
      });
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = q, document.head.appendChild(e);
    }
  }
  const b = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="15"
  height="16"
  viewBox="0 0 15 16"
  fill="none"
>
  <path
    d="M10.9863 7.37329L8.32031 10.7717C8.11523 11.0354 7.84424 11.1917 7.50732 11.2405C7.17041 11.2893 6.86523 11.2161 6.5918 11.0208C6.57227 11.0012 6.55029 10.9817 6.52588 10.9622C6.50146 10.9426 6.47949 10.9231 6.45996 10.9036L4.84863 9.38013C4.70215 9.23364 4.62646 9.05786 4.62158 8.85278C4.6167 8.64771 4.6875 8.47192 4.83398 8.32544C4.9707 8.16919 5.1416 8.08862 5.34668 8.08374C5.55176 8.07886 5.73242 8.14966 5.88867 8.29614L7.30957 9.6438L9.81445 6.45044C9.94141 6.28442 10.1074 6.18921 10.3125 6.16479C10.5176 6.14038 10.7031 6.19165 10.8691 6.3186C11.0254 6.44556 11.1157 6.61157 11.1401 6.81665C11.1646 7.02173 11.1133 7.20728 10.9863 7.37329ZM13.5645 8.41333C13.5742 7.96411 13.4497 7.55396 13.1909 7.18286C12.9321 6.81177 12.5879 6.55298 12.1582 6.40649C12.3633 6.0061 12.4316 5.5813 12.3633 5.13208C12.2949 4.68286 12.1045 4.29224 11.792 3.96021C11.4893 3.63794 11.1182 3.44263 10.6787 3.37427C10.2393 3.30591 9.82422 3.37427 9.43359 3.57935C9.30664 3.14966 9.06494 2.7981 8.7085 2.52466C8.35205 2.25122 7.94922 2.1145 7.5 2.1145C7.05078 2.1145 6.64795 2.25122 6.2915 2.52466C5.93506 2.7981 5.69336 3.14966 5.56641 3.57935C5.17578 3.37427 4.76074 3.30591 4.32129 3.37427C3.88184 3.44263 3.51074 3.63794 3.20801 3.96021C2.89551 4.29224 2.70508 4.68286 2.63672 5.13208C2.56836 5.5813 2.63672 6.0061 2.8418 6.40649C2.42188 6.56274 2.08252 6.82397 1.82373 7.19019C1.56494 7.5564 1.43555 7.96411 1.43555 8.41333C1.43555 8.86255 1.56494 9.27026 1.82373 9.63647C2.08252 10.0027 2.42188 10.2639 2.8418 10.4202C2.63672 10.8206 2.56836 11.2454 2.63672 11.6946C2.70508 12.1438 2.89551 12.5344 3.20801 12.8665C3.51074 13.1887 3.88184 13.384 4.32129 13.4524C4.76074 13.5208 5.17578 13.4524 5.56641 13.2473C5.69336 13.677 5.93506 14.0286 6.2915 14.302C6.64795 14.5754 7.05078 14.7122 7.5 14.7122C7.94922 14.7122 8.35205 14.5754 8.7085 14.302C9.06494 14.0286 9.30664 13.677 9.43359 13.2473C9.82422 13.4524 10.2393 13.5208 10.6787 13.4524C11.1182 13.384 11.4893 13.1887 11.792 12.8665C12.1045 12.5344 12.2949 12.1438 12.3633 11.6946C12.4316 11.2454 12.3633 10.8206 12.1582 10.4202C12.5879 10.2737 12.9321 10.0149 13.1909 9.6438C13.4497 9.27271 13.5742 8.86255 13.5645 8.41333Z"
    fill="#0E1311"
  />
</svg>`
  ), w = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="25"
  height="25"
  viewBox="0 0 25 25"
  fill="none"
>
  <path
    d="M17.1616 4.3103L9.26312 12.5134L17.1616 20.7634C17.3491 20.9197 17.4428 21.0876 17.4428 21.2673C17.4428 21.447 17.3491 21.6306 17.1616 21.8181C17.0053 22.0212 16.8373 22.1228 16.6577 22.1228C16.478 22.1228 16.2944 22.0212 16.1069 21.8181L7.41156 13.0525C7.25531 12.8806 7.17719 12.7087 7.17719 12.5369C7.17719 12.365 7.25531 12.1775 7.41156 11.9744L16.1069 3.20874C16.2944 3.00562 16.478 2.90405 16.6577 2.90405C16.8373 2.90405 17.0053 3.00562 17.1616 3.20874C17.3491 3.38062 17.4428 3.5603 17.4428 3.7478C17.4428 3.9353 17.3491 4.1228 17.1616 4.3103Z"
    fill="#0E1311"
  />
</svg>`
  ), R = `.crs-review-popup {
  border: none;
  top: 0;
  margin-top: 0;
  width: 100%;
  max-width: 640px;
  border-radius: 5px;
  padding: 20px;
}

.crs-review-popup__clheader {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.crs-review-popup__close {
  border: none;
  background: none;
  cursor: pointer;
}
.crs-review-popup::backdrop {
  background: rgba(0, 0, 0, 0.5);
}

.crs-review-popup__header {
  display: flex;
  align-items: center;
  gap: 9px;
}

.crs-review-popup__author {
  color: #0e1311;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.8px;
}

.crs-review-popup__rating {
  display: flex;
  align-items: center;
}

.crs-review-popup__verified {
  margin-top: 7px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #0e1311;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.4px;
}
.crs-review-popup__text {
  margin-top: 20px;
  font-size: 15px;
}

.crs-review-popup__div {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  border-top: 1px solid rgb(60, 60, 59);
}

.crs-review-popup__date {
  text-align: center;
  font-size: 0.75em;
  font-weight: 600;
}
`;
  class W {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles(), this.render(), this.events();
    }
    render() {
      const e = (
        /* HTML */
        `
      <dialog class="crs-review-popup">
        <div class="crs-review-popup__wrap">
          <div class="crs-review-popup__clheader">
            <button class="crs-review-popup__close">${v}</button>
          </div>
          <div class="crs-review-popup__content">
            <div class="crs-review-popup__header">
              <span class="crs-review-popup__author"></span>
              <span class="crs-review-popup__rating"></span>
            </div>
            <div class="crs-review-popup__verified">${b} Verified Customer</div>
            <div class="crs-review-popup__text"></div>
            <div class="crs-review-popup__div"></div>
            <div class="crs-review-popup__date"></div>
          </div>
        </div>
      </dialog>
    `
      );
      document.body.insertAdjacentHTML("beforeend", e);
    }
    events() {
      const e = document.querySelector(".crs-review-popup__close");
      e == null || e.addEventListener("click", () => this.close());
      const t = document.querySelector(".crs-review-popup");
      t == null || t.addEventListener("click", (n) => {
        n.target === t && this.close();
      });
    }
    open({ author: e, rating: t, text: n, date: r }) {
      const i = document.querySelector(".crs-review-popup");
      i.querySelector(".crs-review-popup__author").innerHTML = "", i.querySelector(".crs-review-popup__rating").innerHTML = "", i.querySelector(".crs-review-popup__text").innerHTML = "", i.querySelector(".crs-review-popup__date").innerHTML = "", i.querySelector(".crs-review-popup__author").innerText = e, i.querySelector(".crs-review-popup__rating").innerHTML = this.renderStars(t), i.querySelector(".crs-review-popup__text").innerText = n, i.querySelector(".crs-review-popup__date").innerText = r, i.showModal();
    }
    close() {
      document.querySelector(".crs-review-popup").close();
    }
    renderStars(e) {
      const t = (o) => `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0859 2.96692L8.70117 9.62708H2.3418L7.54102 13.5372L5.69336 20.4337L11.0859 16.3087L16.4785 20.4337L14.6094 13.5372L19.8301 9.62708H13.4707L11.0859 2.96692Z"
        fill="#FEEDC7" />
      <path
        d="M11.0859 2.96692L8.70117 9.62708H2.3418L7.54102 13.5372L5.69336 20.4337L11.0859 16.3087L16.4785 20.4337L14.6094 13.5372L19.8301 9.62708H13.4707L11.0859 2.96692Z"
        fill="url(#paint0_linear_${o})" />
      <defs>
        <linearGradient id="paint0_linear_${o}" x1="0" y1="0" x2="22" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="${o}" stop-color="#FEEDC7" />
          <stop offset="${o}" stop-color="#C4BAA3" />
        </linearGradient>
      </defs>
    </svg>`, n = Math.floor(e), r = Math.round((e - n) * 4) / 4, i = 5 - n - (r > 0 ? 1 : 0);
      let c = "";
      return r === 0.25 ? c = t(0.4) : r === 0.5 ? c = t(0.5) : r === 0.75 && (c = t(0.6)), t(1).repeat(n) + c + t(0).repeat(i);
    }
    initStyles() {
      const e = document.createElement("style");
      e.textContent = R, document.head.insertAdjacentElement("beforeend", e);
    }
  }
  const j = `.crs-reviews {
  padding-top: 8px;
  margin-bottom: 48px;
  padding-right: 2.08rem !important;
  padding-left: 2.08rem !important;
}

.crs-reviews h3 {
  color: #000;
  text-align: center;
  font-family: Raleway;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  text-transform: initial;
  padding: 0;
}

.crs-rating {
  margin-top: 24px;
  display: flex;
  border-radius: 12px;
  border: 1px solid #8bc3c3;
  overflow: hidden;
}

.crs-rating__left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 12px;
  background: #aad1d1;
}

.crs-rating__count {
  color: #095d66;
  font-family: Montserrat;
  font-size: 44px;
  font-weight: 600;
  line-height: 48px;
}

.crs-ration__stars {
  margin-top: 8px;
  white-space: nowrap;
}

.crs-rating__right {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 12px;
  background: #fff;
}

.crs-rating__right div:first-child {
  color: #0e1311;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  white-space: nowrap;
}

.crs-rating__reviewio {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #095d66;
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 22.4px; /* 172.308% */
}

.crs-rating__reviewio a {
  display: inline-flex;
  align-items: flex-end;
}

.crs-reviews__photo {
  margin-top: 8px;
  margin-left: -2.08rem !important;
  margin-right: -2.08rem !important;
  width: calc(100% + 4.16rem) !important;
}

.crs-reviews__photo img {
  width: 100%;
  height: auto;
}
.crs-comments {
  margin-top: 12px;
}

.crs-comments__wrap {
  width: 100%;
  overflow: hidden;
}

.crs-comments__list {
  display: flex;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.crs-comments__item {
  min-width: 100%;
}

/* .crs-comments__item.active {
  display: block;
} */

.crs-comment {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 26px 25px;
  background: #f8f8f8;
  box-shadow: 0px 1.25px 5px -4px rgba(0, 0, 0, 0.05);
  height: 236px;
}

.crs-comment__header {
  display: flex;
  align-items: center;
  gap: 9px;
}

.crs-comment__author {
  color: #0e1311;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16.8px;
}

.crs-comment__rating {
  display: flex;
  align-items: center;
}
.crs-comment__verified {
  margin-top: 7px;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #0e1311;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.4px; /* 140% */
}

.crs-comment__text {
  margin-bottom: 40px;
  margin-top: 7px;
  color: #0e1311;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 19.6px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Кількість видимих рядків */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.crs-comment__date {
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
  color: #0e1311;
  text-align: right;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.4px; /* 140% */
}
.crs-comments__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  height: 48px;
}

.crs-comments__prev,
.crs-comments__next {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  background: none;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

:is(.crs-comments__prev, .crs-comments__next) span {
  width: 24px;
  height: 24px;
}

.crs-comments__next svg {
  transform: rotate(180deg);
}
`;
  class H {
    constructor({ element: e, position: t = "beforeend" }) {
      this.container = e, this.position = t, this.currentSlide = 0, this.totalSlides = 0, this.reviewPopup = new W(), this.init();
    }
    init() {
      if (!this.container) {
        console.log("No container found");
        return;
      }
      this.initStyles(), this.render();
    }
    async render() {
      try {
        const t = await (await fetch(
          "https://api.reviews.io/timeline/data?type=store_review&store=www.drgolly.com&sort=date_desc&page=1&per_page=50&enable_avatars=false&include_subrating_breakdown=1&branch=&tag=&include_product_reviews=1&sku=&lang=en"
        )).json(), n = t.stats, r = t.timeline.filter(({ _source: o }) => o.reviewer_desc === "Verified Buyer");
        this.totalSlides = r.length;
        const i = (
          /* HTML */
          `
        <div class="crs-reviews">
          <h3>Let customers speak for us</h3>
          <div class="crs-reviews__rating crs-rating">
            <div class="crs-rating__left">
              <div class="crs-rating__count">${n.average_rating}</div>
              <div class="crs-ration__stars">${this.renderStars(n.average_rating)}</div>
            </div>
            <div class="crs-rating__right">
              <div>Based on ${n.review_count} reviews</div>
              <div class="crs-rating__reviewio">
                <span>Excellent on</span
                > <a href="https://www.reviews.io/company-reviews/store/www.drgolly.com" target="__self"><img
                  src="https://assets.reviews.io/img/all-global-assets/logo/reviewsio-logo.svg"
                  alt="reviewsio logo"
                  width="78"
                  height="12"
                /></a>
              </div>
            </div>
          </div>

          <div class="crs-reviews__photo">
          <img src="https://conversionratestore.github.io/projects/drgolly/express_checkout/img/children.webp" alt="children"></div>

          <div class="crs-reviews__comments crs-comments">
            <div class="crs-comments__wrap">
              <div class="crs-comments__list">
                ${r.map(({ _source: o }, s) => (
            /* HTML */
            `
                      <div class="crs-comments__item crs-comment ${s === 0 ? "active" : ""}" data-index="${s}">
                        <div class="crs-comment__header">
                          <span class="crs-comment__author">${o.author}</span>
                          <span class="crs-comment__rating" data-rating="${o.rating}"
                            >${this.renderStars(o.rating)}</span
                          >
                        </div>
                        <div class="crs-comment__verified">${b} Verified Customer</div>

                        <div class="crs-comment__text">${o.comments}</div>
                        <div class="crs-comment__date">${o.human_date}</div>
                      </div>
                    `
          )).join("")}
              </div>
            </div>

            <div class="crs-comments__actions">
              <button class="crs-comments__prev"><span>${w}</span></button>
              <button class="crs-comments__next"><span>${w}</span></button>
            </div>
          </div>
        </div>
      `
        );
        if (!this.container)
          return;
        this.container.insertAdjacentHTML(this.position, i), this.initSlider(), g(".crs-reviews", "exp__01__exp_checkout__reviews__view", "Section", "Let customer speak for us"), document.querySelectorAll(".crs-comment").forEach((o) => {
          o.addEventListener("click", () => {
            var p, h, d, l;
            const s = (p = o.querySelector(".crs-comment__author")) == null ? void 0 : p.textContent, f = (h = o.querySelector(".crs-comment__rating")) == null ? void 0 : h.getAttribute("data-rating"), y = (d = o.querySelector(".crs-comment__text")) == null ? void 0 : d.textContent, _ = (l = o.querySelector(".crs-comment__date")) == null ? void 0 : l.textContent;
            this.reviewPopup.open({ author: s, rating: f, text: y, date: _ });
          });
        });
      } catch (e) {
        console.error(e);
      }
    }
    renderStars(e) {
      const t = (o) => `<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.0859 2.96692L8.70117 9.62708H2.3418L7.54102 13.5372L5.69336 20.4337L11.0859 16.3087L16.4785 20.4337L14.6094 13.5372L19.8301 9.62708H13.4707L11.0859 2.96692Z"
        fill="#FEEDC7" />
      <path
        d="M11.0859 2.96692L8.70117 9.62708H2.3418L7.54102 13.5372L5.69336 20.4337L11.0859 16.3087L16.4785 20.4337L14.6094 13.5372L19.8301 9.62708H13.4707L11.0859 2.96692Z"
        fill="url(#paint0_linear_${o})" />
      <defs>
        <linearGradient id="paint0_linear_${o}" x1="0" y1="0" x2="22" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="${o}" stop-color="#FEEDC7" />
          <stop offset="${o}" stop-color="#C4BAA3" />
        </linearGradient>
      </defs>
    </svg>`, n = Math.floor(e), r = Math.round((e - n) * 4) / 4, i = 5 - n - (r > 0 ? 1 : 0);
      let c = "";
      return r === 0.25 ? c = t(0.4) : r === 0.5 ? c = t(0.5) : r === 0.75 && (c = t(0.6)), t(1).repeat(n) + c + t(0).repeat(i);
    }
    initSlider() {
      const e = document.querySelector(".crs-comments__list"), t = document.querySelector(".crs-comments__prev"), n = document.querySelector(".crs-comments__next");
      if (!e || !t || !n)
        return;
      const r = e.querySelectorAll(".crs-comments__item"), i = r[0].cloneNode(!0), c = r[r.length - 1].cloneNode(!0);
      e.appendChild(i), e.insertBefore(c, e.firstChild);
      let o = null, s = null, f = !1;
      const y = () => {
        f || (e.style.transition = "transform 0.5s ease-in-out", e.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`, e.addEventListener("transitionend", _));
      }, _ = () => {
        f = !1, e.removeEventListener("transitionend", _), this.currentSlide <= -1 ? (e.style.transition = "none", this.currentSlide = r.length - 1, e.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`) : this.currentSlide >= r.length && (e.style.transition = "none", this.currentSlide = 0, e.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`);
      }, p = (l) => {
        o = l.touches[0].clientX;
      }, h = (l) => {
        o && (s = l.touches[0].clientX);
      }, d = () => {
        if (!o || !s)
          return;
        const l = o - s;
        l > 50 ? this.currentSlide++ : l < -50 && this.currentSlide--, y(), o = null, s = null;
      };
      e.addEventListener("touchstart", p), e.addEventListener("touchmove", h), e.addEventListener("touchend", d), t.addEventListener("click", () => {
        this.currentSlide--, y(), m("exp__01__exp_checkout__reviews__nav", "Buttons for next/previous review", "click", "Let customer speak for us");
      }), n.addEventListener("click", () => {
        this.currentSlide++, y(), m("exp__01__exp_checkout__reviews__nav", "Buttons for next/previous review", "click", "Let customer speak for us");
      }), this.currentSlide = 0, e.style.transform = `translateX(-${(this.currentSlide + 1) * 100}%)`;
    }
    initStyles() {
      const e = document.createElement("style");
      e.innerHTML = j, document.head.appendChild(e);
    }
  }
  x({ name: "Express Checkout", dev: "OS" }), C("exp__01__express_checkout");
  class Y {
    constructor() {
      this.device = window.screen.width < 981 ? "mobile" : "desktop", this.init();
    }
    init() {
      !location.pathname.includes("/checkout") || this.device !== "mobile" || (new D(), new H({ element: document.querySelector("footer"), position: "beforebegin" }));
    }
  }
  new Y();
})();
