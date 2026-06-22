/* Hot Beans Web - shared site header.
   Edit the NAV array (or BRAND text) once here and every page updates. */

(function () {
  "use strict";

  // ---- The single source of truth for the header / navigation ----
  var BRAND = "Hot Beans Web";
  var NAV = [
    { href: "index.html", label: "Home" },
    { href: "trainees.html", label: "Our Trainees" },
    { href: "jobs.html", label: "Jobs" },
    { href: "courses.html", label: "Courses" },
    { href: "apply.html", label: "Apply Now" }
  ];
  // ----------------------------------------------------------------

  var current = location.pathname.split("/").pop() || "index.html";
  if (current === "") current = "index.html";
  var isHome = current === "index.html";

  var brand = isHome
    ? '<h1 class="brand brand--xl">' + BRAND + "</h1>"
    : '<span class="brand brand--sm">' + BRAND + "</span>";

  var items = NAV.map(function (page) {
    var classes = "nav-tab";
    if (page.stack) classes += " nav-tab--stack";
    var isActive = page.href === current;
    if (isActive) classes += " active";
    var aria = isActive ? ' aria-current="page"' : "";
    return (
      '<li><a class="' + classes + '" href="' + page.href + '"' + aria + ">" +
      page.label +
      "</a></li>"
    );
  }).join("");

  var headerHTML =
    '<header class="site-header">' +
      brand +
      "<nav>" +
        '<button class="nav-toggle" type="button" aria-label="Toggle menu" aria-controls="primary-nav" aria-expanded="false">&#9776; Menu</button>' +
        '<ul class="main-nav" id="primary-nav">' + items + "</ul>" +
      "</nav>" +
    "</header>";

  function init() {
    var mount = document.getElementById("site-header");
    if (!mount) return;
    mount.innerHTML = headerHTML;

    // Collapsible hamburger menu for small screens.
    var toggle = mount.querySelector(".nav-toggle");
    var menu = mount.querySelector("#primary-nav");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
