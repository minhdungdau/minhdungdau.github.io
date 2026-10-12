(function () {
  "use strict";
  function updateAnchorOffset() {
    var header = document.querySelector(".header");
    var height = header ? header.getBoundingClientRect().height : 96;
    document.documentElement.style.setProperty("--sp-anchor-offset", Math.ceil(height + 16) + "px");
  }
  updateAnchorOffset();
  window.addEventListener("resize", updateAnchorOffset);
})();
