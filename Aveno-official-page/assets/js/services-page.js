(function () {
  "use strict";
  function updateOffset() {
    var header = document.querySelector(".header");
    document.documentElement.style.setProperty("--svc-anchor-offset", Math.ceil((header ? header.getBoundingClientRect().height : 96) + 16) + "px");
  }
  updateOffset();
  window.addEventListener("resize", updateOffset);
})();
