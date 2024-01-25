(function () {
  console.log(
    "%c EXP: Introduce a first order discount A/B test (DEV: Olha)",
    "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
  );

  const dir = "https://conversionratestore.github.io/projects/aeyla/img/";

  const $$el = (selector) => document.querySelectorAll(selector);
  const $el = (selector) => document.querySelector(selector);

  const clarityInterval = setInterval(function () {
    if (typeof clarity == "function") {
      clearInterval(clarityInterval);
      clarity("set", "exp_disc_pdp_car", "variant_1");
    }
  }, 200);

  const device = window.innerWidth < 769 ? "mobile" : "desktop";

  const dataIcons = {
    discount: `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path d="M15.8878 9.21572C15.8207 9.07851 15.8207 8.92116 15.8878 8.78398L16.5094 7.51235C16.8555 6.80432 16.5813 5.96042 15.8851 5.59105L14.6348 4.92765C14.4999 4.8561 14.4074 4.72876 14.381 4.5784L14.1365 3.18424C14.0003 2.40802 13.2823 1.88641 12.5021 1.99679L11.1007 2.19503C10.9494 2.21638 10.7998 2.16775 10.6901 2.0616L9.67284 1.0775C9.1064 0.529522 8.21905 0.52949 7.65265 1.0775L6.63534 2.0617C6.52558 2.16788 6.376 2.21642 6.22476 2.19513L4.82332 1.99689C4.04289 1.88644 3.32512 2.40811 3.18896 3.18434L2.94443 4.57843C2.91803 4.72882 2.82555 4.85613 2.69069 4.92771L1.44038 5.59112C0.74423 5.96045 0.470014 6.80442 0.816104 7.51245L1.43768 8.78405C1.50473 8.92126 1.50473 9.07861 1.43768 9.21578L0.816071 10.4874C0.469981 11.1954 0.744197 12.0393 1.44035 12.4087L2.69066 13.0721C2.82555 13.1436 2.91803 13.271 2.94443 13.4213L3.18896 14.8155C3.31292 15.5221 3.91883 16.0177 4.61521 16.0176C4.6838 16.0176 4.7534 16.0128 4.82335 16.0029L6.2248 15.8047C6.37594 15.7832 6.52561 15.832 6.63537 15.9381L7.65265 16.9222C7.93591 17.1962 8.29925 17.3332 8.66273 17.3332C9.0261 17.3331 9.38967 17.1962 9.6728 16.9222L10.6901 15.9381C10.7999 15.832 10.9495 15.7834 11.1007 15.8047L12.5021 16.0029C13.2827 16.1133 14.0003 15.5917 14.1365 14.8155L14.3811 13.4214C14.4074 13.271 14.4999 13.1437 14.6348 13.0721L15.8851 12.4087C16.5813 12.0394 16.8555 11.1954 16.5094 10.4874L15.8878 9.21572ZM6.74019 4.6742C7.71192 4.6742 8.50251 5.46478 8.50251 6.43652C8.50251 7.40825 7.71192 8.19884 6.74019 8.19884C5.76846 8.19884 4.97787 7.40825 4.97787 6.43652C4.97787 5.46478 5.76846 4.6742 6.74019 4.6742ZM5.83056 12.5117C5.73672 12.6055 5.6137 12.6525 5.49072 12.6525C5.36774 12.6525 5.2447 12.6056 5.15088 12.5117C4.96319 12.324 4.96319 12.0197 5.15088 11.832L11.4949 5.48799C11.6825 5.3003 11.9869 5.3003 12.1746 5.48799C12.3623 5.67569 12.3623 5.98001 12.1746 6.16771L5.83056 12.5117ZM10.5852 13.3255C9.61346 13.3255 8.82288 12.535 8.82288 11.5632C8.82288 10.5915 9.61346 9.8009 10.5852 9.8009C11.5569 9.8009 12.3475 10.5915 12.3475 11.5632C12.3475 12.535 11.5569 13.3255 10.5852 13.3255Z" fill="white"/>
            <path d="M10.5852 10.7622C10.1436 10.7622 9.78418 11.1215 9.78418 11.5632C9.78418 12.0049 10.1435 12.3643 10.5852 12.3643C11.0269 12.3643 11.3863 12.0049 11.3863 11.5632C11.3863 11.1215 11.0269 10.7622 10.5852 10.7622Z" fill="white"/>
            <path d="M6.74012 5.63525C6.29843 5.63525 5.93909 5.99459 5.93909 6.43629C5.93909 6.87798 6.29843 7.23735 6.74012 7.23735C7.18181 7.23735 7.54118 6.87801 7.54118 6.43629C7.54115 5.99462 7.18181 5.63525 6.74012 5.63525Z" fill="white"/>
        </svg>`,
    arrow: `
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M1 6.25H11.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.25 1L11.5 6.25L6.25 11.5" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
    check: `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17737 1.07348C7.43783 0.813016 7.79132 0.666504 8.16031 0.666504C8.5293 0.666504 8.88279 0.813016 9.14326 1.07348L10.2634 2.19364C10.3146 2.2448 10.3874 2.26883 10.4595 2.2572L12.0239 2.00991C12.3882 1.95178 12.7603 2.0417 13.0588 2.25798C13.3564 2.47503 13.5564 2.80139 13.6146 3.16495L13.8619 4.7293C13.8735 4.80139 13.9184 4.8634 13.9836 4.89674L15.3944 5.61534C15.7231 5.78278 15.9719 6.07426 16.0859 6.42464C16.1998 6.77503 16.1696 7.1572 16.0022 7.48511L15.2836 8.89674C15.2502 8.96185 15.2502 9.03782 15.2836 9.10294L16.0022 10.5146C16.1696 10.8425 16.1998 11.2246 16.0859 11.575C15.9719 11.9254 15.7231 12.2169 15.3944 12.3843L13.9836 13.1029C13.9184 13.1363 13.8735 13.1983 13.8619 13.2704L13.6146 14.8347C13.5564 15.1983 13.3564 15.5246 13.0588 15.7417C12.7603 15.958 12.3882 16.0479 12.0239 15.9898L10.4595 15.7425C10.3874 15.7308 10.3146 15.7549 10.2634 15.806L9.14326 16.9262C8.88279 17.1867 8.5293 17.3332 8.16031 17.3332C7.79132 17.3332 7.43783 17.1867 7.17737 16.9262L6.05721 15.806C6.00605 15.7549 5.93318 15.7308 5.86109 15.7425L4.29674 15.9898C3.9324 16.0479 3.56031 15.958 3.26186 15.7417C2.96419 15.5246 2.76419 15.1983 2.70605 14.8347L2.45876 13.2704C2.44713 13.1983 2.40217 13.1363 2.33706 13.1029L0.926203 12.3843C0.597521 12.2169 0.348683 11.9254 0.23473 11.575C0.120776 11.2246 0.151009 10.8425 0.318451 10.5146L1.03706 9.10294C1.07039 9.03782 1.07039 8.96185 1.03706 8.89674L0.318451 7.48511C0.151009 7.1572 0.120776 6.77503 0.23473 6.42464C0.348683 6.07426 0.597521 5.78278 0.926203 5.61534L2.33706 4.89674C2.40217 4.8634 2.44713 4.80139 2.45876 4.7293L2.70605 3.16495C2.76419 2.80139 2.96419 2.47503 3.26186 2.25798C3.56031 2.0417 3.9324 1.95178 4.29674 2.00991L5.86109 2.2572C5.93318 2.26883 6.00605 2.2448 6.05721 2.19364L7.17737 1.07348ZM5.03628 9.41069L6.84481 11.22C7.07194 11.4471 7.44016 11.4471 7.66729 11.22L11.2843 7.60216C11.5115 7.37503 11.5115 7.00681 11.2843 6.77968C11.058 6.55333 10.689 6.55333 10.4626 6.77968L7.25566 9.98666L5.85799 8.58899C5.63163 8.36185 5.26264 8.36185 5.03628 8.58899C4.80915 8.81534 4.80915 9.18433 5.03628 9.41069Z" fill="#A84A23"/>
        </svg>`,
    copy: `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
            <path d="M15 4.57143V10.7429C15 11.4834 14.5749 12.1211 13.9577 12.4297C13.9646 12.3269 13.9714 12.224 13.9714 12.1143V5.94286C13.9714 4.33829 12.6617 3.02857 11.0571 3.02857H5.31771C5.63314 2.41829 6.264 2 6.99771 2H12.4286C13.848 2 15 3.152 15 4.57143ZM11.0571 4.05714H4.88571C3.84549 4.05714 3 4.90263 3 5.94286V12.1143C3 13.1545 3.84549 14 4.88571 14H11.0571C12.0974 14 12.9429 13.1545 12.9429 12.1143V5.94286C12.9429 4.90263 12.0974 4.05714 11.0571 4.05714Z" fill="#1B2943"/>
        </svg>`,
    checkmark: `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1C6.61553 1 5.26215 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C14.9979 6.14412 14.2598 4.36484 12.9475 3.05254C11.6352 1.74023 9.85588 1.00207 8 1ZM11.0867 6.48464L7.83085 10.066C7.77133 10.131 7.69938 10.1833 7.61925 10.2199C7.53913 10.2565 7.45247 10.2766 7.36442 10.2791H7.34884C7.17623 10.2787 7.01076 10.2101 6.88847 10.0883L4.93498 8.13479C4.87362 8.07453 4.82481 8.00272 4.79136 7.92349C4.75791 7.84426 4.74049 7.75919 4.7401 7.6732C4.73971 7.5872 4.75636 7.50197 4.78909 7.42245C4.82182 7.34292 4.86998 7.27067 4.93079 7.20986C4.9916 7.14905 5.06386 7.10088 5.14338 7.06815C5.22291 7.03542 5.30813 7.01877 5.39413 7.01916C5.48013 7.01955 5.5652 7.03697 5.64442 7.07042C5.72365 7.10387 5.79547 7.15269 5.85572 7.21405L7.32624 8.68425L10.1226 5.6084C10.1841 5.54152 10.2587 5.48811 10.3418 5.45155C10.425 5.415 10.5148 5.39608 10.6056 5.39601C10.7316 5.3961 10.8549 5.4328 10.9605 5.50164C11.0661 5.57048 11.1494 5.66849 11.2004 5.78379C11.2513 5.89908 11.2677 6.02668 11.2475 6.1511C11.2273 6.27552 11.1715 6.39138 11.0867 6.48464Z" fill="#A84A23"/>
        </svg>`,
  };

  function checkFocusTime(selector, eventName, eventDesc, eventLocation) {
    const checker = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.getAttribute("data-startShow")
        ) {
          entry.target.setAttribute("data-startShow", new Date().getTime());
        } else if (
          !entry.isIntersecting &&
          entry.target.getAttribute("data-startShow")
        ) {
          const startShow = entry.target.getAttribute("data-startShow");
          const endShow = new Date().getTime();
          const timeShow = Math.round(endShow - startShow);

          entry.target.removeAttribute("data-startShow");
          if (timeShow >= 3000) {
            pushDataLayer(eventName, eventDesc, "Visibility", eventLocation);
          }
          checker.unobserve(entry.target);
        }
      });
    });

    checker.observe(document.querySelector(selector));
  }

  function pushDataLayer(event_name, event_desc, event_type, event_loc) {
    // Send a Google Analytics event
    const eventData = {
      event: "event-to-ga4",
      event_name,
      event_desc,
      event_type,
      event_loc,
    };

    window.dataLayer = window.dataLayer || [];
    dataLayer.push(eventData);
    console.log(
      event_name + " / " + event_desc + " / " + event_type + " / " + event_loc
    );
  }

  function copyText(inputTarget) {
    inputTarget.insertAdjacentHTML(
      "afterend",
      `<div class="crs_copied flex items-center">${dataIcons.checkmark} Code is copied<div>`
    );

    setTimeout(() => {
      $el(".crs_copied").remove();
    }, 2000);

    // Select the text in the input element
    inputTarget.select();
    inputTarget.setSelectionRange(0, 99999); // For mobile devices

    try {
      // Use the Clipboard API to copy the text
      navigator.clipboard.writeText(inputTarget.value);
      console.log("Text copied: " + inputTarget.value);
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  }

  let viewed = 0;

  function visibleAfterTimer() {
    setTimeout(() => {
      if (
        $el('form[data-testid="klaviyo-form-UgpzJ6"]') &&
        !$el("button.kl-teaser-UgpzJ6 ")
      ) {
        let titlePopup = $el(
          'form[data-testid="klaviyo-form-UgpzJ6"]'
        ).innerText.toLowerCase();

        if (titlePopup.includes("want an extra 15%") && viewed == 0) {
          viewed = 1;
          pushDataLayer(
            "exp_disc_pdp_car_vis_popupext_page",
            "Full page view ",
            "Visibility ",
            "Sitewide Popup Want an extra 15%* off?"
          );
        }
        if (titlePopup.includes("unlock your savings below") && viewed == 1) {
          viewed = 2;
          pushDataLayer(
            "exp_disc_pdp_car_vis_popupunl_page",
            "Full page view ",
            "Visibility ",
            "Sitewide Popup Unlock Your Savings Below!"
          );
        }

        if (titlePopup.includes("join the club") && viewed == 2) {
          viewed = 3;
          pushDataLayer(
            "exp_disc_pdp_car_vis_popupclub_page",
            "Full page view ",
            "Visibility ",
            "Sitewide Popup JOIN THE CLUB"
          );
        }

        if (titlePopup.includes("use code:") && viewed == 3) {
          viewed = 4;
          pushDataLayer(
            "exp_disc_pdp_car_vis_popupsucce_page",
            "Full page view ",
            "Visibility ",
            "Sitewide Popup Success! Use"
          );
        }
      }
    }, 3000);
  }

  class changeFlow {
    constructor(device) {
      this.device = device;
      this.init();
    }

    init() {
      this.styleAppend();

      checkFocusTime(
        `.minicart`,
        "exp_disc_pdp_car_vis_cart_page",
        "Full page view",
        "Slide-in cart"
      );

      const globalMutation = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (this.checkPageUrl() === "products") {
            if ($el(".pricing")) {
              // this.getCoupon($el(".pro_price"));
              // this.appliedCoupon($el(".pro_price"));

              this.getCoupon($el(".pricing"));
              this.appliedCoupon($el(".pricing"));
            }
            if (
              $el(".my-5.aa")?.previousElementSibling?.classList.contains(
                "flex-col"
              )
            ) {
              this.getCoupon($el(".my-5.aa").previousElementSibling);
              this.appliedCoupon($el(".my-5.aa").previousElementSibling);
            }

            if (
              $el("form .qw").previousElementSibling &&
              !$el("form .qw").previousElementSibling.classList.contains(
                "crs_applied"
              )
            ) {
              this.appliedCoupon($el("form .qw").previousElementSibling);
            }

            //for https://www.aeyla.co.uk/products/eucalyptus-silk-eye-mask
            if (!$el(".pro_price")) {
              if ($$el(".pricing").length > 1) {
                this.getCoupon($el(".pricing"));
                this.appliedCoupon($el(".pricing"));
              }
              if ($el(".product-labels").parentElement) {
                this.getCoupon($el(".product-labels").parentElement);
                this.appliedCoupon($el(".product-labels").parentElement);
              }
            }

            if ($el(".checkout_wrapper .cart_total")) {
              this.getCoupon($el(".checkout_wrapper .cart_total"));
              this.appliedCoupon($el(".checkout_wrapper .cart_total"));
            }

            // Start observing the target element
            $$el(".crs_btn").forEach((item) => {
              // obs.observe(item)
              if (item.previousElementSibling.querySelector(".pricing")) {
                checkFocusTime(
                  `.crs_btn[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_pdpaddups_elem",
                  "Element view",
                  "PDP Get aDDITIONAL 15% OFF Upstairs"
                );
              } else if (item.closest('.checkout_wrapper')) {
                checkFocusTime(
                  `.crs_btn[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_cartcode_elem",
                  "Element view",
                  "Slide-in cart Get aDDITIONAL 15% OFF"
                );
              } else {
                checkFocusTime(
                  `.crs_btn[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_pdpadddown_elem",
                  "Element view",
                  "PDP Get aDDITIONAL 15% OFF Downstairs"
                );
              }
            });
            $$el(".crs_applied").forEach((item, index) => {
              if (item.previousElementSibling.querySelector(".pricing")) {
                checkFocusTime(
                  `.crs_applied[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_pdpcodeups_elem",
                  "Element view",
                  "PDP 15% OFF | Use Code: HELLO15 at checkout Upstairs"
                );
              } else if (item.nextElementSibling.classList.contains("qw")) {
                // console.log("event before add to cart");
                checkFocusTime(
                  `.crs_applied[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_pdpcodedown_elem",
                  "Element view",
                  "PDP 15% OFF | Use Code: HELLO15 at checkout Downstairs 2"
                );
              } else if (item.closest('.checkout_wrapper')) {
                checkFocusTime(
                  `.crs_applied[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_cartcode_elem",
                  "Element view",
                  "Slide-in cart 15% OFF | Use Code: HELLO15 at checkout"
                );
              } else {
                checkFocusTime(
                  `.crs_applied[data-parent="${item.dataset.parent}"]`,
                  "exp_disc_pdp_car_vis_pdpcodedown_elem",
                  "Element view",
                  "PDP 15% OFF | Use Code: HELLO15 at checkout Downstairs"
                );
              }
            });
          }
        });

        this.setAppliedCoupon();

        //   globalMutation.disconnect();

        globalMutation.observe(document.body, {
          childList: true,
          subtree: true,
        });
      });

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    checkPageUrl() {
      const pageUrl = window.location.href;
      if (pageUrl.includes("/products/")) {
        return "products";
      } else {
        return "other";
      }
    }

    styleAppend() {
      const style = /* html    */ `
          <style class="crs-style">
            button[aria-label="Open Form"] > [data-testid="animated-teaser"] {
                opacity: 0;
            }
            .crs_copied {
                position: absolute;
                right: 20px;
                top: calc(100% + 10px);
                border-radius: 100px;
                border: 1px solid #98A7BA;
                background: #FFF;
                padding: 3px 8px;
                width: fit-content;
                box-shadow: 0px 6px 4px 0px rgba(53, 56, 61, 0.08);
                color: var(--Blue, #1B2943);
                font-family: "Open Sans";
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; 
                text-transform: none;
            }
            .crs_copied svg {
                margin-right: 8px;
            }
            .crs_btn {
                border-radius: 6px;
                background: #1A2942;
                padding: 6px 8px;
                width: fit-content;
                margin: 0 18px;
            }
            .crs_btn svg {
                flex-shrink: 0;
            }
            .crs_btn span {
                color: #FFF;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: 18px; 
                text-transform: uppercase;
                padding: 0 6px 1px;
            }
            .pro_price + .crs_btn {
                margin: 12px 18px;
            }
            .crs_applied {
                background: #FBF3E3;
                padding: 6px 11.5px;
                color: var(--Blue, #1B2943);
                font-family: "Open Sans", sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 18px; /* 128.571% */
                text-transform: uppercase;
                width: 100%;
                position: relative;
                z-index: 2;
            }
            .crs_applied input {
              display: none;
            }
            .pro_price + .crs_applied {
                margin: 18px 0 16px;
            }
            .shipped_within_wrapper + .crs_applied {
                margin: -13px 0 20px;
            }
            .checkout_wrapper .crs_applied {
                margin-bottom: 17px;
                width: 100%;
            }
            .checkout_wrapper .crs_btn {
                margin: 0 14px 17px;
                width: calc(100% - 28px);
            }
            .checkout_wrapper .crs_btn span {
                margin-right: auto;
            }
            .crs_applied svg {
                flex-shrink: 0;
                margin-right: 6px;
            }
            .crs_applied span {
                padding-right: 2px;
            }
            .pre_order_wrapper + .crs_applied {
              margin-bottom: 20px;
            }
            @media (max-width: 768px) {
              .shipped_within_wrapper {
                padding-left: 18px;
              }
            }
            @media (min-width: 768px) {
              #MainProductForm .crs_applied {
                width: fit-content;
              }
              #MainProductForm .crs_btn,
              #ProductInfo .crs_btn {
                margin-left: 0;
              }
              #ProductInfo .crs_btn,
              #ProductInfo .crs_applied {
                margin: -10px 0 20px;
                width: fit-content;
              }
              #ProductInfo .product-info-component .crs_btn,
              #ProductInfo .product-info-component .crs_applied {
                margin: 16px 0 0 0;
              }
            }
          </style>
      `;

      document.body.insertAdjacentHTML("afterbegin", style);
    }

    setAppliedCoupon() {
      if (
        $el('form[data-testid="klaviyo-form-UgpzJ6"]') &&
        $el('form[data-testid="klaviyo-form-UgpzJ6"]')
          .innerText.toUpperCase()
          .includes("JOIN THE CLUB")
      ) {
        localStorage.setItem("appliedCoupon", true);

        viewed = 2;

        if ($el(".crs_btn")) {
          $$el(".crs_btn").forEach((item) => {
            item.remove();
          });
        }
      }
      if (
        $el('form[data-testid="klaviyo-form-UgpzJ6"]') &&
        !$el("button.kl-teaser-UgpzJ6 ")
      ) {
        let titlePopup = $el(
          'form[data-testid="klaviyo-form-UgpzJ6"]'
        ).innerText.toLowerCase();

        if (titlePopup.includes("want an extra 15%")) {
          viewed = 0;
        } else if (titlePopup.includes("unlock your savings below")) {
          viewed = 1;
        } else if (titlePopup.includes("use code:")) {
          viewed = 3;
        }
        visibleAfterTimer();

        $$el('form[data-testid="klaviyo-form-UgpzJ6"] button').forEach(
          (item) => {
            item.addEventListener("click", (e) => {
              e.stopImmediatePropagation();
              if (item.innerText.includes("Yes please!")) {
                pushDataLayer(
                  "exp_disc_pdp_car_but_popupext_yes",
                  "Yes please",
                  "Button",
                  "Sitewide Popup Want an extra 15%* off?"
                );
              } else if (
                item.innerText.includes(`No thanks, I'll pay full price`)
              ) {
                pushDataLayer(
                  "exp_disc_pdp_car_lin_popupext_no",
                  "No thanks...",
                  "Link",
                  "Sitewide Popup Want an extra 15%* off?"
                );
              } else if (item.innerText.includes("Unlock Your Offer Now")) {
                pushDataLayer(
                  "exp_disc_pdp_car_but_popupunl_now",
                  "Unlock your offer now",
                  "Button",
                  "Sitewide Popup Unlock Your Savings Below!"
                );
              } else if (item.innerText.includes("Get Exclusive Offers 1st")) {
                pushDataLayer(
                  "exp_disc_pdp_car_but_popupclub_get",
                  "Get explusive offers 1st",
                  "Button",
                  "Sitewide Popup JOIN THE CLUB"
                );
              } else if (item.innerText.includes(`No Thanks`)) {
                pushDataLayer(
                  "exp_disc_pdp_car_but_popupclub_no",
                  "No thanks..",
                  "Button",
                  "Sitewide Popup JOIN THE CLUB"
                );
              }
            });
          }
        );
        $el("button.klaviyo-close-form").addEventListener("click", (e) => {
          e.stopImmediatePropagation();

          let titlePopup = $el(
            'form[data-testid="klaviyo-form-UgpzJ6"]'
          ).innerText.toLowerCase();

          if (titlePopup.includes("want an extra 15%")) {
            pushDataLayer(
              "exp_disc_pdp_car_but_popupext_close",
              "Close",
              "Button",
              "Sitewide Popup Want an extra 15%* off?"
            );
          } else if (titlePopup.includes("unlock your savings below")) {
            pushDataLayer(
              "exp_disc_pdp_car_but_popupunl_close",
              "Close",
              "Button",
              "Sitewide Popup Unlock Your Savings Below!"
            );
          } else if (titlePopup.includes("join the club")) {
            pushDataLayer(
              "exp_disc_pdp_car_but_popupclub_clos",
              "Close",
              "Button",
              "Sitewide Popup JOIN THE CLUB"
            );
          } else if (titlePopup.includes("use code:")) {
            pushDataLayer(
              "exp_disc_pdp_car_but_popupsucce_close",
              "Close",
              "Button",
              "Sitewide Popup Success! Use"
            );
          }
        });
        $$el('form[data-testid="klaviyo-form-UgpzJ6"] input').forEach(
          (item) => {
            item.addEventListener("click", (e) => {
              e.stopImmediatePropagation();
              if (item.name == "email") {
                pushDataLayer(
                  "exp_disc_pdp_car_inp_popupunl_email",
                  "Email",
                  "Input",
                  "Sitewide Popup Unlock Your Savings Below!"
                );
              } else if (item.name == "phone-number") {
                pushDataLayer(
                  "exp_disc_pdp_car_inp_popupclub_phon",
                  "Phone",
                  "Input",
                  "Sitewide Popup JOIN THE CLUB"
                );
              }
            });
          }
        );
      }
    }

    getCoupon(parent) {
      const block = `
        <button type="button" class="crs_btn flex items-center" data-parent="${parent.className}">${dataIcons.discount} <span>Get aDDITIONAL 15% OFF</span> ${dataIcons.arrow}</button>`;

      if (
        $el(`[class="${parent.className}"] + .crs_btn`) ||
        localStorage.getItem("appliedCoupon") ||
        parent.nextElementSibling?.classList.contains("crs_btn")
      )
        return;
      if (parent.className.includes("pricing")) {
        $$el(".pricing").forEach((item) => {
          if (!item.parentElement.parentElement.querySelector(".crs_btn")) {
            item.parentElement.insertAdjacentHTML("afterend", block);

            item.parentElement.nextElementSibling.addEventListener(
              "click",
              () => {
                pushDataLayer(
                  "exp_disc_pdp_car_but_pdpaddups_click",
                  "Click",
                  "Button",
                  "PDP Get aDDITIONAL 15% OFF Upstairs"
                );

                window._klOnsite = window._klOnsite || [];
                window._klOnsite.openForm("UgpzJ6");
              }
            );
          }
        });
      } else {
        parent.insertAdjacentHTML("afterend", block);

        parent.nextElementSibling.addEventListener("click", (e) => {
          if (e.target.closest('.checkout_wrapper')) {
            pushDataLayer(
              "exp_disc_pdp_car_but_cartcode_click",
              "Click",
              "Button",
              "Slide-in cart Get aDDITIONAL 15% OFF"
            );
          } else {

            pushDataLayer(
              "exp_disc_pdp_car_but_pdpadddown_click",
              "Click",
              "Button",
              "PDP Get aDDITIONAL 15% OFF Downstairs"
            );
          }

          window._klOnsite = window._klOnsite || [];
          window._klOnsite.openForm("UgpzJ6");
        });
      }
    }

    appliedCoupon(parent) {
      const block = `<button type="button" class="crs_applied flex items-center justify-center"  data-parent="${parent.className}">
      <input type="text" value="HELLO15" class="d-none">
      ${dataIcons.check} <span><b>15% OFF</b> | Use Code: <b>HELLO15</b></span>${dataIcons.copy} at checkout</button>`;

      if (
        $el(`[class="${parent.className}"] + .crs_applied`) ||
        !localStorage.getItem("appliedCoupon")
      )
        return;

      if (parent.className.includes("pricing")) {
        $$el(".pricing").forEach((item) => {
          if (!item.parentElement.parentElement.querySelector(".crs_applied")) {
            item.parentElement.insertAdjacentHTML("afterend", block);

            item.parentElement.nextElementSibling.addEventListener(
              "click",
              () => {
                copyText(
                  item.parentElement.nextElementSibling.querySelector(`input`)
                );
                pushDataLayer(
                  "exp_disc_pdp_car_but_pdpcodeups_click",
                  "Click",
                  "Button",
                  "PDP 15% OFF | Use Code: HELLO15 at checkout Upstairs"
                );
              }
            );
          }
        });
      } else {
        parent.insertAdjacentHTML("afterend", block);

        parent.nextElementSibling.addEventListener("click", (e) => {
          copyText($el(`[class="${parent.className}"] + .crs_applied input`));

          if (parent.querySelector(".pricing")) {
            pushDataLayer(
              "exp_disc_pdp_car_but_pdpcodeups_click",
              "Click",
              "Button",
              "PDP 15% OFF | Use Code: HELLO15 at checkout Upstairs"
            );
          } else if (
            parent.nextElementSibling.nextElementSibling.classList.contains('qw')
          ) {
            console.log("click applied button before add to cart");
          } else if (e.target.closest('.checkout_wrapper')) {
            pushDataLayer(
              "exp_disc_pdp_car_but_cartcode_click",
              "Click",
              "Button",
              "Slide-in cart 15% OFF | Use Code: HELLO15 at checkout"
            );
          }  else {
            pushDataLayer(
              "exp_disc_pdp_car_but_pdpcodedown_click",
              "Click",
              "Button",
              "PDP 15% OFF | Use Code: HELLO15 at checkout Downstairs"
            );
          }
        });
      }
    }
  }

  new changeFlow(device);
})();
