(function () {
  "use strict";
  var site = document.getElementById("site");
  var english = document.getElementById("content-en");
  var vietnamese = site.cloneNode(true);
  var viTitle = document.title;
  var viDescription = document.querySelector(
    'meta[name="description"]',
  ).content;
  var language = "en";
  var observer;
  var menuOpen = false;
  var previousOverflow = "";
  var backgroundState = [];
  var drawerMedia = window.matchMedia("(max-width: 1100px)");
  var draft = null;
  var fields = ["name", "company", "email", "phone", "requirement"];
  function message(vi, en) {
    return language === "vi" ? vi : en;
  }
  function enhance() {
    if (observer) observer.disconnect();
    setupDrawer();
    site.querySelectorAll("a[href]").forEach(function (a) {
      var href = a.getAttribute("href");
      if (
        !/^(index|about|solutions|services|products|contact)\.html(?:[?#]|$)/.test(
          href,
        )
      )
        return;
      var url = new URL(href, location.href);
      url.searchParams.set("lang", language);
      a.setAttribute(
        "href",
        url.pathname.split("/").pop() + url.search + url.hash,
      );
    });
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    site
      .querySelectorAll(
        ".solution-card, .service-card, .product-card, .contact-info, .form-panel, .section-header",
      )
      .forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("reveal-ready", "reveal-pending");
        observer.observe(el);
      });
  }
  function setLanguage(next) {
    var reopenDrawer = menuOpen && drawerMedia.matches;
    menu(false, false);
    var currentForm = site.querySelector("form");
    var values = currentForm ? new FormData(currentForm) : null;
    language = next;
    site.replaceChildren.apply(
      site,
      Array.from(
        (next === "en" ? english.content : vietnamese).cloneNode(true)
          .childNodes,
      ),
    );
    document.documentElement.lang = next;
    document.title = next === "en" ? english.dataset.title : viTitle;
    document.querySelector('meta[name="description"]').content =
      next === "en" ? english.dataset.description : viDescription;
    if (values)
      fields.forEach(function (key) {
        var input = site.querySelector('[name="' + key + '"]');
        if (input) input.value = values.get(key) || "";
      });
    draft = null;
    try {
      localStorage.setItem("aveno-lang", next);
    } catch (error) {
      /* Preferences are optional. */
    }
    try {
      var url = new URL(location.href);
      url.searchParams.set("lang", next);
      history.replaceState(null, "", url.href);
    } catch (error) {
      /* file:// navigation works without History API. */
    }
    enhance();
    if (reopenDrawer) menu(true);
  }
  function setupDrawer() {
    var nav = site.querySelector("#main-navigation");
    nav.classList.add("drawer-nav");
    var navSlot = document.createElement("span");
    navSlot.className = "drawer-nav-slot";
    nav.before(navSlot);
    var dialog = document.createElement("div");
    dialog.className = "drawer-dialog";
    dialog.inert = true;
    dialog.setAttribute("aria-hidden", "true");
    var controls = document.createElement("div");
    controls.className = "drawer-controls";
    var close = document.createElement("button");
    close.type = "button";
    close.className = "drawer-close";
    close.setAttribute("aria-label", message("Đóng menu", "Close menu"));
    close.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg>';
    controls.append(close);
    var languageRow = document.createElement("div");
    languageRow.className = "drawer-language";
    dialog.append(controls, languageRow);
    site.append(dialog);
    var languageButton = site.querySelector(".language");
    var slot = document.createElement("span");
    slot.className = "drawer-language-slot";
    languageButton.before(slot);
    var backdrop = document.createElement("div");
    backdrop.className = "drawer-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    site.append(backdrop);
    placeDrawerLanguage();
    nav.inert = drawerMedia.matches;
    nav.setAttribute("aria-hidden", String(drawerMedia.matches));
  }
  function placeDrawerLanguage() {
    var languageButton = site.querySelector(".language");
    var slot = site.querySelector(".drawer-language-slot");
    var nav = site.querySelector("#main-navigation");
    var navSlot = site.querySelector(".drawer-nav-slot");
    var dialog = site.querySelector(".drawer-dialog");
    if (!languageButton || !slot || !dialog) return;
    if (drawerMedia.matches) {
      dialog.insertBefore(nav, dialog.querySelector(".drawer-language"));
      dialog.querySelector(".drawer-language").append(languageButton);
    } else {
      navSlot.before(nav);
      slot.before(languageButton);
      dialog.removeAttribute("role");
      dialog.removeAttribute("aria-modal");
    }
  }
  function syncDrawerClose() {
    if (!drawerMedia.matches) return;
    var button = site.querySelector("#menu-button");
    var dialog = site.querySelector(".drawer-dialog");
    if (!button || !dialog) return;
    var rect = button.getBoundingClientRect();
    dialog.style.setProperty("--close-top", rect.top + "px");
    dialog.style.setProperty("--close-right", Math.max(0, window.innerWidth - rect.right) + "px");
    dialog.style.setProperty("--close-reserve", Math.max(44, rect.bottom + 8 - 12) + "px");
  }
  window.addEventListener("resize", function () { if (menuOpen) syncDrawerClose(); });
  window.addEventListener("orientationchange", function () { if (menuOpen) syncDrawerClose(); });
  function menu(open, restoreFocus) {
    var button = site.querySelector("#menu-button");
    var nav = site.querySelector("#main-navigation");
    var dialog = site.querySelector(".drawer-dialog");
    if (!button || !nav || !dialog) return;
    open = Boolean(open && drawerMedia.matches);
    if (open && !menuOpen) {
      syncDrawerClose();
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      backgroundState = Array.from(site.children).filter(function (el) {
        return el !== dialog && !el.classList.contains("drawer-backdrop");
      }).map(function (el) {
        var state = { el: el, inert: el.inert, ariaHidden: el.getAttribute("aria-hidden") };
        el.inert = true;
        return state;
      });
    } else if (!open && menuOpen) {
      document.body.style.overflow = previousOverflow;
      backgroundState.forEach(function (state) {
        state.el.inert = state.inert;
        if (state.ariaHidden === null) state.el.removeAttribute("aria-hidden");
        else state.el.setAttribute("aria-hidden", state.ariaHidden);
      });
      backgroundState = [];
    }
    var wasOpen = menuOpen;
    menuOpen = open;
    nav.classList.toggle("open", open);
    nav.inert = drawerMedia.matches && !open;
    nav.setAttribute("aria-hidden", String(drawerMedia.matches && !open));
    dialog.inert = !open;
    dialog.setAttribute("aria-hidden", String(!open));
    if (open) {
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-label", message("Menu điều hướng", "Navigation menu"));
    } else {
      dialog.removeAttribute("role");
      dialog.removeAttribute("aria-modal");
    }
    site.classList.toggle("drawer-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? message("Đóng menu", "Close menu") : message("Mở menu", "Open menu"));
    if (open) {
      dialog.querySelector(".drawer-close").focus();
      backgroundState.forEach(function (state) { state.el.setAttribute("aria-hidden", "true"); });
    }
    else if (wasOpen && restoreFocus !== false && drawerMedia.matches) button.focus();
  }
  drawerMedia.addEventListener("change", function () { menu(false); placeDrawerLanguage(); });
  function clearDraft() {
    draft = null;
    var result = site.querySelector(".draft-result");
    if (result) result.remove();
  }
  document.addEventListener("click", function (event) {
    if (event.target.closest(".language")) {
      setLanguage(language === "vi" ? "en" : "vi");
      site.querySelector(".language").focus();
    } else if (event.target.closest("#menu-button"))
      menu(
        document.getElementById("menu-button").getAttribute("aria-expanded") !==
          "true",
      );
    else if (event.target.closest(".drawer-close, .drawer-backdrop")) menu(false);
    else if (event.target.closest("#main-navigation a")) menu(false);
    else if (menuOpen && !event.target.closest(".drawer-dialog")) menu(false);
    else if (event.target.closest("[data-download-draft]") && draft) {
      var url = URL.createObjectURL(
        new Blob(["\ufeff" + draft], { type: "text/plain;charset=utf-8" }),
      );
      var link = document.createElement("a");
      link.href = url;
      link.download = "AVENO-infrastructure-enquiry.txt";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(function () {
        URL.revokeObjectURL(url);
      }, 1000);
    }
  });
  document.addEventListener("keydown", function (event) {
    if (menuOpen && event.key === "Tab") {
      var targets = Array.from(site.querySelector(".drawer-dialog").querySelectorAll("button, a[href]"));
      var first = targets[0], last = targets[targets.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    }
    if (
      event.key === "Escape" &&
      document.getElementById("menu-button").getAttribute("aria-expanded") ===
        "true"
    ) {
      menu(false);
      document.getElementById("menu-button").focus();
    }
  });
  document.addEventListener("input", function (event) {
    if (event.target.closest("form")) {
      event.target.setCustomValidity("");
      clearDraft();
    }
  });
  document.addEventListener("change", function (event) {
    if (event.target.closest("form")) clearDraft();
  });
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!site.contains(form) || form.tagName !== "FORM") return;
    event.preventDefault();
    fields.forEach(function (key) {
      var input = form.elements.namedItem(key);
      input.value = input.value.trim();
      input.setCustomValidity(
        input.required && !input.value
          ? message(
              "Vui lòng nhập thông tin.",
              "Please enter this information.",
            )
          : "",
      );
    });
    if (!form.reportValidity()) return;
    var labels =
      language === "vi"
        ? ["Họ và tên", "Công ty", "Email", "Số điện thoại", "Nhu cầu"]
        : ["Name", "Company", "Email", "Phone", "Requirement"];
    draft = [
      "AVENO — " + message("Yêu cầu tư vấn hạ tầng", "Infrastructure enquiry"),
    ]
      .concat(
        fields.map(function (key, index) {
          return labels[index] + ": " + form.elements.namedItem(key).value;
        }),
      )
      .join("\n\n");
    var live = form.parentElement.querySelector("[aria-live]");
    live.replaceChildren();
    var result = document.createElement("div");
    result.className = "draft-result";
    var status = document.createElement("p");
    status.textContent = message(
      "Bản yêu cầu đã sẵn sàng. Chưa gửi tới AVENO.",
      "Your draft is ready. It has not been sent to AVENO.",
    );
    var button = document.createElement("button");
    button.type = "button";
    button.className = "text-link";
    button.dataset.downloadDraft = "";
    button.textContent = message(
      "Tải bản yêu cầu (.txt)",
      "Download enquiry (.txt)",
    );
    result.append(status, button);
    live.appendChild(result);
  });
  var saved = "en";
  try {
    saved = localStorage.getItem("aveno-lang") || "en";
  } catch (error) {
    /* No personal information is stored. */
  }
  var requested = new URLSearchParams(location.search).get("lang");
  var initial = requested === "vi" || requested === "en" ? requested : saved;
  setLanguage(initial === "vi" ? "vi" : "en");
})();
