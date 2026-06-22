/* Hot Beans Web - small bits of interactivity */
/* Note: the site header (and its active-tab + hamburger logic) lives in js/header.js */

(function () {
  "use strict";

  // Warn the user when they click a link that hasn't been pointed anywhere yet.
  // Real destinations are set with the data-link attribute (see README).
  var placeholders = document.querySelectorAll('a[href="#"]');
  placeholders.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var target = link.getAttribute("data-link");
      if (target && target !== "#") {
        // A real link has been configured - go there instead.
        window.location.href = target;
        return;
      }
      e.preventDefault();
      console.warn("This link is a placeholder. Set its href (or data-link) to a real URL.");
    });
  });
})();
