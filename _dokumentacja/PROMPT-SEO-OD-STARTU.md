# PROMPT: Zamiana sekcji "Rodzaj 04" na sekcję SEO od startu — strony-www.html

Wklej ten prompt do Claude Code w VS Code.

---

## PROMPT

Jesteś front-end developerem. Twoim zadaniem jest zamiana sekcji "Rodzaj 04 - Zagraniczni klienci w zasięgu" w pliku `strony-www.html` na nową sekcję o nazwie "Widoczna od startu".

## Co zmienić

Znajdź sekcję feat-row z tekstem "Zagraniczni klienci w zasięgu" i "hreflang" — zamień CAŁĄ tę sekcję (lewą i prawą kolumnę) na poniższą.

## Nowa treść lewej kolumny (tekst)

```
eyebrow: RODZAJ 04
H3: Widoczna od startu
p: Większość stron jest budowana "żeby było" - SEO dokładane na końcu albo w ogóle pomijane. Każdą stronę buduję z optymalizacją od pierwszego dnia. Szybki kod, poprawna struktura, dane strukturalne, meta tagi - to wszystko jest w cenie, nie jako dodatek.
lista:
- Poprawna struktura nagłówków H1/H2/H3
- Meta tagi i Open Graph na każdej podstronie
- Dane strukturalne JSON-LD (schema.org)
- Szybkość ładowania - PageSpeed 90+
- Sitemap.xml i robots.txt
- Przyjazne adresy URL
```

## Nowa prawa kolumna (feat-visual) — mockup panelu SEO

Zamień `.feat-visual` na:

```html
<div class="feat-visual" style="background:var(--bg-soft);padding:20px;border:1px solid var(--line);display:flex;flex-direction:column;gap:10px;justify-content:center;">

  <!-- nagłówek panelu -->
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
    <span style="font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--ink-soft);font-family:inherit;text-transform:uppercase;">SEO Checklist</span>
    <span style="font-size:10px;background:#22c55e;color:#fff;padding:3px 10px;border-radius:999px;font-family:inherit;font-weight:600;">100% gotowe</span>
  </div>

  <!-- pozycje checklisty -->
  <div style="background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;">

    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line);">
      <div style="width:20px;height:20px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);font-family:inherit;">Struktura H1/H2/H3</div>
      </div>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line);">
      <div style="width:20px;height:20px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);font-family:inherit;">Meta tagi i Open Graph</div>
      </div>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line);">
      <div style="width:20px;height:20px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);font-family:inherit;">Dane strukturalne JSON-LD</div>
      </div>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--line);">
      <div style="width:20px;height:20px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);font-family:inherit;">Sitemap.xml i robots.txt</div>
      </div>
    </div>

    <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;">
      <div style="width:20px;height:20px;border-radius:50%;background:#e8f5e9;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="flex:1;">
        <div style="font-size:13px;font-weight:600;color:var(--ink);font-family:inherit;">PageSpeed 90+</div>
      </div>
    </div>

  </div>

  <!-- pasek wyniku -->
  <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px 16px;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-size:12px;font-weight:600;color:var(--ink-soft);font-family:inherit;">PageSpeed Score</span>
      <span style="font-size:12px;font-weight:700;color:#22c55e;font-family:inherit;">96/100</span>
    </div>
    <div style="background:var(--line);border-radius:999px;height:6px;overflow:hidden;">
      <div style="background:linear-gradient(90deg,#22c55e,#16a34a);width:96%;height:100%;border-radius:999px;"></div>
    </div>
  </div>

</div>
```

## Zasady techniczne

- Zamień CAŁĄ sekcję feat-row z hreflang — lewą i prawą kolumnę
- Użyj tej samej struktury feat-row co inne sekcje na stronie (grid dwie kolumny, klasy reveal)
- Nie ruszaj pozostałych sekcji feat-row
- Nie dodawaj zewnętrznych bibliotek
- Używaj tylko zmiennych CSS które już istnieją: --bg, --bg-soft, --line, --accent, --ink, --ink-soft, --radius
- Długie myslniki (— –) zastepuj zwyklym "-"
