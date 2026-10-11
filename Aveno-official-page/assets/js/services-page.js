(function () {
  "use strict";
  function updateOffset() {
    var header = document.querySelector(".header");
    document.documentElement.style.setProperty("--svc-anchor-offset", Math.ceil((header ? header.getBoundingClientRect().height : 96) + 16) + "px");
  }
  updateOffset();
  window.addEventListener("resize", updateOffset);
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".language")) return;
    var services = Array.from(document.querySelectorAll(".svc-service"));
    var anchored = services.find(function (section) { return "#" + section.id === location.hash; });
    var active = anchored && anchored.getBoundingClientRect().top <= 160 && anchored.getBoundingClientRect().bottom > 96 ? anchored : null;
    if (!active) {
      var nearestTop = -Infinity;
      services.forEach(function (section) {
        var rect = section.getBoundingClientRect();
        if (rect.top <= 160 && rect.bottom > 96 && rect.top > nearestTop + 1) {
          active = section;
          nearestTop = rect.top;
        }
      });
    }
    if (!active || active.getBoundingClientRect().bottom <= 96) return;
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
