/* ============================================================================
   portal-nav.js — multiverselib-collectives portal navigation dropdowns
   Reads two curated metadata files (copied into build/ by portal-render):
     - hackmerlin-cherry-picking.json  (book A: this book's internal pages)
     - mlc-books.json                  (catalog B: all MLC publishing-house books)
   Populates #pageNav (jump inside this book) and #bookNav (jump to other books).
   Deterministic: onchange -> location.href = option value.
   NOTE: requires http(s) serving (fetch); opening build/*.html via file://
         will not load JSON. Serve with `czone serve` or any static server.
   ========================================================================== */
(function () {
  "use strict";
  var BOOK_META = "hackmerlin-cherry-picking.json";
  var CATALOG = "mlc-books.json";

  function populate(sel, items, labelFn, valueFn) {
    if (!sel || !items) return;
    sel.innerHTML = "";
    items.forEach(function (it) {
      var o = document.createElement("option");
      o.value = valueFn(it);
      o.textContent = labelFn(it);
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () {
      if (sel.value) location.href = sel.value;
    });
  }

  function markCurrent(sel, items, key) {
    var base = location.pathname.split("/").pop();
    items.forEach(function (it, i) {
      if (it[key] === base) sel.selectedIndex = i + 1;
    });
  }

  fetch(BOOK_META)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var sel = document.getElementById("pageNav");
      populate(sel, data.levels,
        function (l) { return "lvl " + l.page + ": " + l.title; },
        function (l) { return l.file; });
      markCurrent(sel, data.levels, "file");
    })
    .catch(function (e) { console.warn("portal-nav: book meta load failed", e); });

  fetch(CATALOG)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      populate(document.getElementById("bookNav"), data.books,
        function (b) { return b.title; },
        function (b) { return b.url; });
    })
    .catch(function (e) { console.warn("portal-nav: catalog load failed", e); });
})();
