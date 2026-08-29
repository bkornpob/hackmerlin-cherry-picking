/* ============================================================================
   portal-nav.js — multiverselib-collectives portal navigation dropdowns
   Reads two curated metadata files (copied into build/ by portal-render):
     - hackmerlin-cherry-picking.json  (book A: this book's internal pages)
     - mlc-books.json                  (catalog B: all MLC publishing-house books)
   Populates #pageNav (jump inside this book) and #bookNav (jump to other books).
   Deterministic: onchange -> location.href = option value.
   NOTE: requires http(s) serving (fetch); opening build/*.html via file://
         will not load JSON. Serve with `czone serve` or any static server.

   Metadata scheme (locked):
     levels[].page-link      -> primary navigation href (used as option value)
     levels[].technical-link -> deeper-dive source, rendered as a per-PAGE footer
                                link ("rabbit hole"), NOT in the nav dropdown
     levels[].file           -> fallback href if page-link absent
   ========================================================================== */
(function () {
  "use strict";
  var BOOK_META = "hackmerlin-cherry-picking.json";
  var CATALOG = "mlc-books.json";
  // Resolved book metadata: read the stable name from <meta name="portal-book">
  // (injected by portal-render), falling back to the legacy hackmerlin file.
  var META_TAG = document.querySelector('meta[name="portal-book"]');
  var BOOK_META = (META_TAG && META_TAG.getAttribute("content")) || "hackmerlin-cherry-picking.json";

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

  // Deployed site root IS docs/ (GitHub Pages /docs preset), so repo-root
  // relative links like ./docs/foo.html or ./_archmage-notes/foo.md resolve
  // from the docs/ folder. Normalize to keep metadata working as-written:
  //   ./docs/           -> ./
  //   ./_archmage-notes/ -> ./notes/   (notes copied into docs/notes at build)
  function norm(p) {
    if (!p) return p;
    return p.replace(/^\.\/docs\//, "./").replace(/^\.\/_archmage-notes\//, "./notes/");
  }

  // populate a <select> with optgroups: primary pages + technical notes
  function populatePaged(sel, levels) {
    if (!sel || !levels) return;
    sel.innerHTML = "";
    var ph = document.createElement("option");
    ph.value = "";
    ph.textContent = "jump to page";
    sel.appendChild(ph);

    var gPages = document.createElement("optgroup");
    gPages.label = "Pages";
    levels.forEach(function (l) {
      var v = norm(l["page-link"] || l.file);
      if (!v) return;
      var o = document.createElement("option");
      o.value = v;
      o.textContent = "lvl " + l.page + ": " + l.title;
      gPages.appendChild(o);
    });
    sel.appendChild(gPages);

    sel.addEventListener("change", function () {
      if (sel.value) location.href = sel.value;
    });
    markCurrent(sel, levels);
  }

  function markCurrent(sel, levels) {
    var base = location.pathname.split("/").pop();
    Array.prototype.forEach.call(sel.options, function (o, i) {
      if (o.value && o.value.split("/").pop() === base) sel.selectedIndex = i;
    });
  }

  fetch(BOOK_META)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      populatePaged(document.getElementById("pageNav"), data.levels || []);
    })
    .catch(function (e) { console.warn("portal-nav: book meta load failed", e); });

  fetch(CATALOG)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      populate(document.getElementById("bookNav"), data.books || [],
        function (b) { return b.title; },
        function (b) { return b.url; });
    })
    .catch(function (e) { console.warn("portal-nav: catalog load failed", e); });
})();
