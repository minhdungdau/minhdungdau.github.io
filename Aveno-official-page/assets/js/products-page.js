(function () {
  "use strict";
  function updateOffset() {
    var header = document.querySelector(".header");
    document.documentElement.style.setProperty("--pr-anchor-offset", Math.ceil((header ? header.getBoundingClientRect().height : 96) + 16) + "px");
  }
  updateOffset();
  window.addEventListener("resize", updateOffset);
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".language")) return;
    var brands = Array.from(document.querySelectorAll(".pr-brand"));
    var catalog = document.getElementById("catalog");
    var anchored = location.hash === "#catalog" ? catalog : brands.find(function (brand) { return "#" + brand.id === location.hash; });
    var active = anchored && anchored.getBoundingClientRect().top <= 160 && anchored.getBoundingClientRect().bottom > 96 ? anchored : null;
    if (!active) {
      var nearestTop = -Infinity;
      brands.forEach(function (brand) {
        var rect = brand.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom > 96 && rect.top > nearestTop + 1) {
          active = brand;
          nearestTop = rect.top;
        }
      });
    }
    if (!active) return;
    var id = active.id;
    requestAnimationFrame(function () {
      updateOffset();
      var replacement = document.getElementById(id);
      if (!replacement) return;
      history.replaceState(null, "", location.pathname + location.search + "#" + id);
      replacement.scrollIntoView({ behavior:"instant", block:"start" });
    });
  }, true);
})();
