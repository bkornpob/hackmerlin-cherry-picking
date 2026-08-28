/* ============================================================================
   theme.js — multiverselib-collectives portal theme switcher
   Swaps the <link id="mlc-theme"> href between og/zaddy/dab/gdk stylesheets.
   Persists choice in localStorage. Pattern aligned with cooking-club theme.js.
   ========================================================================== */
(() => {
  'use strict';

  const THEMES = ['og', 'zaddy', 'dab', 'gdk'];
  const LABELS = { og: 'OG', zaddy: 'ZADDY', dab: 'DAB', gdk: 'GDK' };
  const KEY = 'mlc-theme';

  const link = document.getElementById('mlc-theme');
  const sel = document.getElementById('themeSelect');

  const apply = (name) => {
    if (!THEMES.includes(name) || !link) return;
    link.href = name + '.css';
    try { localStorage.setItem(KEY, name); } catch (e) {}
    if (sel) sel.value = name;
    document.documentElement.setAttribute('data-theme', name);
  };

  const saved = (() => {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  })();

  const initial = THEMES.includes(saved) ? saved : 'og';
  if (sel) {
    sel.innerHTML = THEMES.map(
      (t) => `<option value="${t}">${LABELS[t]}</option>`
    ).join('');
    sel.addEventListener('change', (e) => apply(e.target.value));
  }
  apply(initial);
})();
