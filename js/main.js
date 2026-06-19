/* Prichindel Club — interactions */
(function () {
  "use strict";

  // year in footer
  var yEl = document.getElementById("year");
  if (yEl) yEl.textContent = String(new Date().getFullYear());

  // mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var navList = document.getElementById("navlist");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var open = navList.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close on link click (mobile)
    navList.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navList.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // back-to-top button
  var toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener(
      "scroll",
      function () {
        if (window.scrollY > 600) toTop.classList.add("show");
        else toTop.classList.remove("show");
      },
      { passive: true }
    );
  }

  // reveal on scroll
  var revealEls = document.querySelectorAll(
    ".section .card, .schedule-item, .opt-card, .price-card, .g-item, .steps li, .team-card, .menu-day > div"
  );
  if ("IntersectionObserver" in window) {
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  }

  // contact form (front-end only — no backend wired yet)
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#cf-name");
      var phone = form.querySelector("#cf-phone");
      if (!name.value.trim() || !phone.value.trim()) {
        status.textContent = "Te rugăm completează numele și telefonul.";
        status.className = "form-status err";
        return;
      }
      // TODO: conectați la un serviciu real (email / Formspree / backend).
      status.textContent =
        "Mulțumim, " + name.value.trim().split(" ")[0] + "! Te contactăm în cel mai scurt timp.";
      status.className = "form-status ok";
      form.reset();
    });
  }
})();
