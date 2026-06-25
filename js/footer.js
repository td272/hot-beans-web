/* Hot Beans Web - shared site footer.
   Edit the links below once here and every page updates. */

(function () {
  "use strict";

  var BRAND = "Hot Beans Web";

  // Quick links (same targets as the header nav).
  var EXPLORE = [
    { href: "index.html", label: "Home" },
    { href: "trainees.html", label: "Our trainees" },
    { href: "courses.html", label: "Courses" },
    { href: "jobs.html", label: "Jobs" },
    { href: "apply.html", label: "Apply Now" }
  ];

  // Social media links. Replace the href values with the real profiles.
  var SOCIAL = [
    { href: "https://twitter.com/", label: "Twitter / X" },
    { href: "https://www.linkedin.com/", label: "LinkedIn" },
    { href: "https://github.com/", label: "GitHub" },
    { href: "https://www.instagram.com/", label: "Instagram" }
  ];

  // Legal links. Point these at real pages when they exist.
  var LEGAL = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" }
  ];

  function listItems(items, external) {
    return items.map(function (item) {
      var attrs = external ? ' target="_blank" rel="noopener"' : "";
      return '<li><a href="' + item.href + '"' + attrs + ">" + item.label + "</a></li>";
    }).join("");
  }

  var year = new Date().getFullYear();

  var footerHTML =
    '<footer class="site-footer">' +
      '<div class="footer-inner">' +
        '<div class="footer-col footer-about">' +
          '<span class="brand brand--sm">' + BRAND + "</span>" +
          "<p>Building exceptional web experiences and training the next generation of web developers.</p>" +
          '<p class="footer-contact">London, UK &middot; <a href="mailto:hello@hotbeansweb.co.uk">hello@hotbeansweb.co.uk</a></p>' +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Explore</h4>" +
          "<ul>" + listItems(EXPLORE, false) + "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Follow us</h4>" +
          "<ul>" + listItems(SOCIAL, true) + "</ul>" +
        "</div>" +
        '<div class="footer-col">' +
          "<h4>Legal</h4>" +
          "<ul>" + listItems(LEGAL, false) + "</ul>" +
        "</div>" +
      "</div>" +
      '<div class="footer-bottom">' +
        "<p>&copy; " + year + " " + BRAND + ". All rights reserved.</p>" +
      "</div>" +
    "</footer>";

  function init() {
    var mount = document.getElementById("site-footer");
    if (!mount) return;
    mount.innerHTML = footerHTML;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
