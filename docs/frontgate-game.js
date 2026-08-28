/* ============================================================================
   frontgate-game.js — modular "pick a cherry" gate-unlock game
   Portable across any MLC portal frontgate. Pure JS, no deps.

   Usage: drop this markup into a frontgate page:
     <div id="gate-game"
          data-target="🍒"
          data-decoys="🍑,🌸,🔮,🍓,🥚,⚡,🌟"
          data-count="14"
          data-mantra="truth · love · liberation"
          data-enter-href="landing-page.html"
          data-enter-label="enter the circle"></div>
     <script src="frontgate-game.js" defer></script>

   Behavior:
     - spawns `count` floating emojis (1 target + decoys)
     - seeker clicks the target emoji -> gate unlocks, enter button appears
     - wrong pick -> shake + mantra reminder, decoys reshuffle
   ============================================================================ */
(function () {
  "use strict";
  function init(game) {
    if (game.dataset.ready) return;
    game.dataset.ready = "1";

    var target = game.dataset.target || "🍒";
    var decoys = (game.dataset.decoys || "🍑,🌸,🔮,🍓,🥚").split(",").map(function (s) { return s.trim(); }).filter(Boolean);
    var count = parseInt(game.dataset.count || "14", 10);
    var mantra = game.dataset.mantra || "truth · love · liberation";
    var enterHref = game.dataset.enterHref || "landing-page.html";
    var enterLabel = game.dataset.enterLabel || "enter the circle";
    var cover = game.dataset.cover || "";

    var coverHtml = cover
      ? '<img class="gate-cover" src="' + cover + '" alt="cover">'
      : "";

    game.innerHTML =
      coverHtml +
      '<div class="gate-mantra">' + mantra + '</div>' +
      '<div class="float-layer"></div>' +
      '<a class="gate-enter" href="' + enterHref + '">' + enterLabel + ' →</a>' +
      '<div class="gate-bloom"></div>';

    var layer = game.querySelector(".float-layer");

    function spawn() {
      layer.innerHTML = "";
      var picks = [];
      // 1 target + (count-1) decoys (cycle decoys if needed)
      picks.push({ e: target, t: true });
      for (var i = 1; i < count; i++) {
        picks.push({ e: decoys[i % decoys.length], t: false });
      }
      // fisher-yates shuffle (deterministic-enough for a gate game)
      for (var j = picks.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var tmp = picks[j]; picks[j] = picks[k]; picks[k] = tmp;
      }
      picks.forEach(function (p) {
        var el = document.createElement("span");
        el.className = "floaty " + (p.t ? "target" : "decoy");
        el.textContent = p.e;
        el.style.left = (4 + Math.random() * 88) + "%";
        el.style.top = (6 + Math.random() * 78) + "%";
        el.style.animationDuration = (2.4 + Math.random() * 2.6).toFixed(2) + "s";
        el.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
        el.addEventListener("click", function () {
          if (p.t) {
            game.classList.add("unlocked");
          } else {
            game.classList.remove("unlocked");
            game.classList.add("shake");
            setTimeout(function () { game.classList.remove("shake"); }, 420);
            var m = game.querySelector(".gate-mantra");
            if (m) {
              m.textContent = mantra;
              m.style.opacity = "1";
            }
          }
        });
        layer.appendChild(el);
      });
    }
    spawn();

    // reshuffle decoys if the seeker clicks a wrong one repeatedly (already
    // handled by shake); re-spawn fully on a fresh visit is not needed.
  }

  function boot() {
    var games = document.querySelectorAll("#gate-game");
    for (var i = 0; i < games.length; i++) init(games[i]);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
