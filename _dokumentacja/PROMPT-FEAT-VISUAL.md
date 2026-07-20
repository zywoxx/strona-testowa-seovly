# PROMPT: Zamiana grafik w sekcjach feat-row — strony-www.html

Wklej ten prompt do Claude Code w VS Code.

---

## PROMPT

Jesteś front-end developerem. Twoim zadaniem jest zamiana prawej kolumny (`.feat-visual`) w sekcjach feat-row na stronie `strony-www.html`. Nie ruszasz lewej kolumny z tekstem i checklistą. Nie zmieniasz CSS `.feat-row`, `.feat-visual` ani żadnych innych istniejących styli. Zamieniasz TYLKO zawartość divów z klasą `.feat-visual`.

Używasz wyłącznie istniejących zmiennych CSS ze strony (--bg, --bg-soft, --bg-dark, --line, --accent, --ink, --ink-soft, --radius, --g1, --g2, --g3). Nie dodajesz zewnętrznych bibliotek. Kod ma być czysty, lekki i spójny z resztą strony.

---

## Co zamienić i jak — każda sekcja osobno

### RODZAJ 02 — "Jedna strona, jeden cel" (landing page)
Aktualna prawa kolumna: ciemny gradient z dashboardem kampanii Google Ads.

Zamień na: **Uproszczony mockup landing page** — wygląda jak podgląd strony w przeglądarce.

Struktura HTML do wstawienia w miejsce `.feat-visual.fv2`:
```html
<div class="feat-visual" style="background:var(--bg-soft);padding:0;overflow:hidden;border:1px solid var(--line);">
  <!-- pasek przeglądarki -->
  <div style="background:#e8eaed;padding:10px 16px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--line);">
    <div style="display:flex;gap:5px;">
      <div style="width:10px;height:10px;border-radius:50%;background:#ff5f57;"></div>
      <div style="width:10px;height:10px;border-radius:50%;background:#febc2e;"></div>
      <div style="width:10px;height:10px;border-radius:50%;background:#28c840;"></div>
    </div>
    <div style="flex:1;background:#fff;border-radius:6px;padding:4px 12px;font-size:11px;color:#888;font-family:inherit;">twojafirma.pl/oferta</div>
  </div>
  <!-- zawartość strony landing -->
  <div style="padding:24px 20px;display:flex;flex-direction:column;gap:12px;">
    <!-- hero baner -->
    <div style="background:var(--accent);border-radius:12px;padding:20px;text-align:center;">
      <div style="width:40%;height:10px;background:rgba(255,255,255,.5);border-radius:4px;margin:0 auto 8px;"></div>
      <div style="width:60%;height:14px;background:#fff;border-radius:4px;margin:0 auto 14px;"></div>
      <div style="display:inline-block;background:#fff;border-radius:999px;padding:7px 20px;">
        <div style="width:80px;height:8px;background:var(--accent);border-radius:4px;"></div>
      </div>
    </div>
    <!-- 3 sekcje korzyści -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;">
      <div style="background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:6px;">
        <div style="width:20px;height:20px;background:var(--accent);border-radius:6px;opacity:.2;"></div>
        <div style="width:100%;height:7px;background:var(--line);border-radius:4px;"></div>
        <div style="width:70%;height:6px;background:var(--line);border-radius:4px;"></div>
      </div>
      <div style="background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:6px;">
        <div style="width:20px;height:20px;background:var(--g2);border-radius:6px;opacity:.2;"></div>
        <div style="width:100%;height:7px;background:var(--line);border-radius:4px;"></div>
        <div style="width:70%;height:6px;background:var(--line);border-radius:4px;"></div>
      </div>
      <div style="background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px;display:flex;flex-direction:column;gap:6px;">
        <div style="width:20px;height:20px;background:var(--g3);border-radius:6px;opacity:.2;"></div>
        <div style="width:100%;height:7px;background:var(--line);border-radius:4px;"></div>
        <div style="width:70%;height:6px;background:var(--line);border-radius:4px;"></div>
      </div>
    </div>
    <!-- CTA -->
    <div style="background:var(--accent);border-radius:999px;padding:12px;text-align:center;">
      <div style="width:120px;height:8px;background:rgba(255,255,255,.8);border-radius:4px;margin:0 auto;"></div>
    </div>
  </div>
</div>
```

---

### RODZAJ 03 — "Sklep gotowy do sprzedaży"
Aktualna prawa kolumna: różowy gradient z ikoną koszyka.

Zamień na: **Mockup karty produktu** — wygląda jak prawdziwa karta w sklepie internetowym.

Struktura HTML do wstawienia w miejsce `.feat-visual.fv3` (lub kolejnego feat-visual):
```html
<div class="feat-visual" style="background:var(--bg-soft);padding:20px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;">
  <div style="background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;width:100%;max-width:280px;box-shadow:0 8px 32px rgba(0,0,0,.06);">
    <!-- zdjęcie produktu -->
    <div style="background:linear-gradient(135deg,#f0f4ff,#e8effe);height:160px;display:flex;align-items:center;justify-content:center;position:relative;">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity=".4">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      <!-- badge -->
      <div style="position:absolute;top:12px;left:12px;background:var(--accent);color:#fff;font-size:10px;font-weight:700;padding:4px 10px;border-radius:999px;font-family:inherit;">NOWOŚĆ</div>
    </div>
    <!-- dane produktu -->
    <div style="padding:16px;">
      <div style="font-size:11px;color:var(--ink-soft);font-family:inherit;margin-bottom:4px;">Kategoria produktu</div>
      <div style="font-size:15px;font-weight:700;color:var(--ink);font-family:inherit;margin-bottom:8px;">Nazwa produktu</div>
      <!-- gwiazdki -->
      <div style="display:flex;gap:2px;margin-bottom:12px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        <span style="font-size:10px;color:var(--ink-soft);font-family:inherit;margin-left:4px;">(24)</span>
      </div>
      <!-- cena i przycisk -->
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <div>
          <span style="font-size:18px;font-weight:800;color:var(--ink);font-family:inherit;">249 zł</span>
          <span style="font-size:12px;color:var(--ink-soft);text-decoration:line-through;margin-left:6px;font-family:inherit;">320 zł</span>
        </div>
        <div style="background:var(--accent);color:#fff;border-radius:999px;padding:8px 16px;font-size:12px;font-weight:700;font-family:inherit;">Do koszyka</div>
      </div>
    </div>
  </div>
</div>
```

---

### RODZAJ 04 — "Zagraniczni klienci w zasięgu" (strony wielojęzyczne)
Aktualna prawa kolumna: ciemny gradient z ikoną flagi.

Zamień na: **Panel przełącznika języków** — pokazuje tę samą stronę w kilku wersjach językowych z flagami i oznaczeniami hreflang.

Struktura HTML do wstawienia:
```html
<div class="feat-visual" style="background:var(--bg-soft);padding:24px;border:1px solid var(--line);display:flex;flex-direction:column;gap:12px;justify-content:center;">
  <!-- nagłówek panelu -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
    <span style="font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--ink-soft);font-family:inherit;text-transform:uppercase;">Wersje językowe</span>
    <span style="font-size:10px;background:var(--accent);color:#fff;padding:3px 10px;border-radius:999px;font-family:inherit;font-weight:600;">4 języki</span>
  </div>
  <!-- wiersze językowe -->
  <div style="background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;">
    <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-bottom:1px solid var(--line);background:var(--accent)08;">
      <span style="font-size:22px;">🇵🇱</span>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--ink);font-family:inherit;">Polski</div>
        <div style="font-size:11px;color:var(--ink-soft);font-family:inherit;">hreflang="pl"</div>
      </div>
      <div style="background:#e8f5e9;color:#2e7d32;font-size:10px;font-weight:700;padding:3px 10px;border-radius:999px;font-family:inherit;">Aktywna</div>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-bottom:1px solid var(--line);">
      <span style="font-size:22px;">🇬🇧</span>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--ink);font-family:inherit;">English</div>
        <div style="font-size:11px;color:var(--ink-soft);font-family:inherit;">hreflang="en"</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;border-bottom:1px solid var(--line);">
      <span style="font-size:22px;">🇩🇪</span>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--ink);font-family:inherit;">Deutsch</div>
        <div style="font-size:11px;color:var(--ink-soft);font-family:inherit;">hreflang="de"</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
    <div style="display:flex;align-items:center;gap:14px;padding:14px 16px;">
      <span style="font-size:22px;">🇫🇷</span>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:700;color:var(--ink);font-family:inherit;">Français</div>
        <div style="font-size:11px;color:var(--ink-soft);font-family:inherit;">hreflang="fr"</div>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    </div>
  </div>
  <!-- info -->
  <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 16px;display:flex;align-items:center;gap:10px;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    <span style="font-size:12px;color:var(--ink-soft);font-family:inherit;">Google wie, co komu i gdzie pokazac</span>
  </div>
</div>
```

---

## Zasady techniczne

- Zamieniaj TYLKO zawartość `.feat-visual` — nie ruszaj lewej kolumny z tekstem
- Nie dodawaj nowych klas CSS ani zewnętrznych bibliotek
- Używaj tylko zmiennych CSS które już istnieją na stronie: --bg, --bg-soft, --bg-dark, --line, --accent, --ink, --ink-soft, --radius, --g1, --g2, --g3
- Flagi emoji w rodzaju 04 są OK — to UI element, nie dekoracja
- Nie zmieniaj kolejności sekcji ani struktury feat-row
- Nie usuwaj klas fv1, fv2, fv3 z feat-visual — tylko podmieniaj zawartość wewnętrzną
- Długie myslniki (— –) zastepuj zwyklym "-"
