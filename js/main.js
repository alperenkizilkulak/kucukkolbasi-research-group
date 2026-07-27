/* Küçükkolbaşı Research Group — site behaviour
   - TR/EN language toggle (persisted in localStorage)
   - mobile navigation
   - scroll-reveal animations
*/

(function () {
  var html = document.documentElement;

  /* ---------- language ---------- */
  function setLang(lang) {
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    try { localStorage.setItem("krg-lang", lang); } catch (e) {}
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.textContent = lang === "tr" ? "EN" : "TR";
  }

  var saved = null;
  try { saved = localStorage.getItem("krg-lang"); } catch (e) {}
  var initial = saved || ((navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en");
  setLang(initial);

  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".lang-toggle");
    if (btn) setLang(html.getAttribute("data-lang") === "tr" ? "en" : "tr");
  });

  /* ---------- mobile nav ---------- */
  var burger = document.querySelector(".nav-burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
      document.body.classList.toggle("nav-open");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        document.body.classList.remove("nav-open");
      }
    });
  }

  /* ---------- footer year ---------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  function revealAll() {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }
  if ("IntersectionObserver" in window) {
    /* if the observer never reports back (unusual browsers/webviews),
       show everything rather than leaving sections invisible */
    var fallback = setTimeout(revealAll, 1500);
    var io = new IntersectionObserver(function (entries) {
      clearTimeout(fallback);
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealAll();
  }
})();
