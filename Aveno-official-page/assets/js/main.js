(function () {
  "use strict";
  var site = document.getElementById("site");
  var observer;
  var menuOpen = false;
  var previousOverflow = "";
  var backgroundState = [];
  var drawerMedia = window.matchMedia("(max-width: 1100px)");
  function enhance() {
    if (observer) observer.disconnect();
    setupDrawer();
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
    close.setAttribute("aria-label", "Close menu");
    close.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" /></svg>';
    controls.append(close);
    dialog.append(controls);
    site.append(dialog);
    var backdrop = document.createElement("div");
    backdrop.className = "drawer-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    site.append(backdrop);
    placeDrawerNavigation();
    nav.inert = drawerMedia.matches;
    nav.setAttribute("aria-hidden", String(drawerMedia.matches));
  }
  function placeDrawerNavigation() {
    var nav = site.querySelector("#main-navigation");
    var navSlot = site.querySelector(".drawer-nav-slot");
    var dialog = site.querySelector(".drawer-dialog");
    if (drawerMedia.matches) {
      dialog.append(nav);
    } else {
      navSlot.before(nav);
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
      dialog.setAttribute("aria-label", "Navigation menu");
    } else {
      dialog.removeAttribute("role");
      dialog.removeAttribute("aria-modal");
    }
    site.classList.toggle("drawer-open", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (open) {
      dialog.querySelector(".drawer-close").focus();
      backgroundState.forEach(function (state) { state.el.setAttribute("aria-hidden", "true"); });
    }
    else if (wasOpen && restoreFocus !== false && drawerMedia.matches) button.focus();
  }
  drawerMedia.addEventListener("change", function () { menu(false); placeDrawerNavigation(); });
  document.addEventListener("click", function (event) {
    if (event.target.closest("#menu-button"))
      menu(
        document.getElementById("menu-button").getAttribute("aria-expanded") !==
          "true",
      );
    else if (event.target.closest(".drawer-close, .drawer-backdrop")) menu(false);
    else if (event.target.closest("#main-navigation a")) menu(false);
    else if (menuOpen && !event.target.closest(".drawer-dialog")) menu(false);
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
  document.addEventListener("submit", function (event) {
    if (site.contains(event.target) && event.target.matches(".ct-form")) {
      event.preventDefault();
    }
  });
  var url = new URL(location.href);
  if (url.searchParams.has("lang")) {
    url.searchParams.delete("lang");
    history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  enhance();
})();
