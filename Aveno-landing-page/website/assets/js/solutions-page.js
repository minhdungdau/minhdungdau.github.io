(function () {
  "use strict";
  function updateAnchorOffset() {
    var header = document.querySelector(".header");
    var height = header ? header.getBoundingClientRect().height : 96;
    document.documentElement.style.setProperty("--sp-anchor-offset", Math.ceil(height + 16) + "px");
  }
  updateAnchorOffset();
  window.addEventListener("resize", updateAnchorOffset);
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".language")) return;
    var chapters = Array.from(document.querySelectorAll(".sp-chapter"));
    var active = chapters.filter(function (section) { return section.getBoundingClientRect().top <= 160; }).pop();
    if (!active || active.getBoundingClientRect().bottom <= 96) return;
    var id = active.id;
    requestAnimationFrame(function () {
      updateAnchorOffset();
      var replacement = document.getElementById(id);
      if (!replacement) return;
      history.replaceState(null, "", location.pathname + location.search + "#" + id);
      replacement.scrollIntoView({ behavior: "instant", block: "start" });
    });
  }, true);
})();
