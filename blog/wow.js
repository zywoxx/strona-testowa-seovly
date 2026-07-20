(function () {
  var style = document.createElement('style');
  style.textContent = [
    '#fcta{position:fixed;left:0;right:0;bottom:0;z-index:9985;background:var(--bg,#fff);border-top:1px solid var(--line,#eaeaee);padding:14px 20px;display:flex;align-items:center;justify-content:center;gap:16px;transform:translateY(100%);transition:transform .4s cubic-bezier(.16,1,.3,1);box-shadow:0 -8px 30px rgba(0,0,0,.06)}',
    '#fcta.show{transform:translateY(0)}',
    '#fcta-text{font-size:.88rem;font-weight:600;color:var(--ink,#08080a);font-family:inherit;display:none}',
    '#fcta-btns{display:flex;gap:8px}',
    '#fcta a{font-family:inherit;font-size:.85rem;font-weight:600;border-radius:999px;padding:10px 18px;text-decoration:none;white-space:nowrap;transition:opacity .2s}',
    '#fcta a:hover{opacity:.85}',
    '.fcta-ghost{border:1.5px solid var(--line,#eaeaee);color:var(--ink,#08080a)}',
    '.fcta-primary{background:var(--ink,#08080a);color:#fff}',
    '@media(min-width:640px){#fcta-text{display:block}}'
  ].join('');
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'fcta';
  var path = location.pathname.split('/').pop() || 'index.html';
  var isKontakt = path.indexOf('kontakt') !== -1;

  if (!isKontakt) {
    function inject() {
      var navA = document.querySelector('a[href$="kontakt.html"]');
      var base = navA ? navA.getAttribute('href').replace('kontakt.html', '') : '';
      bar.innerHTML =
        '<span id="fcta-text">Gotowy zaczac projekt?</span>' +
        '<div id="fcta-btns">' +
          '<a href="' + base + 'cennik.html" class="fcta-ghost">Cennik</a>' +
          '<a href="' + base + 'kontakt.html" class="fcta-primary">Wycen projekt</a>' +
        '</div>';
      document.body.appendChild(bar);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', inject);
    else inject();

    var shown = false;
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.5 && !shown) { bar.classList.add('show'); shown = true; }
      else if (scrolled <= 0.5 && shown) { bar.classList.remove('show'); shown = false; }
    }, { passive: true });
  }
})();