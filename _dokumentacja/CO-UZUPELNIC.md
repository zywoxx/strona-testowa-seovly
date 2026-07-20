# Co uzupełnić przed publikacją (placeholdery)

Wszystko działa, ale w kilku miejscach są placeholdery do podmiany na Twoje dane. Wyszukaj i zamień:

## 1. Domena
Założyłem adres **https://seovly.pl**. Jeśli Twoja domena jest inna, podmień ją w:
- znacznikach `canonical` i `og:url` (wszystkie strony),
- `sitemap.xml` i `robots.txt`.

## 2. Dane kontaktowe (stopka + dane strukturalne)
- **Telefon:** zamień `+48 000 000 000` (stopka) i `+48000000000` (schema) na prawdziwy numer.
- **E-mail:** sprawdź `kontakt@seovly.pl` - podmień, jeśli inny.
- **Miasto:** w danych strukturalnych na stronie głównej zamień `[MIASTO]`.

## 3. Social media (dane strukturalne)
W schemacie na stronie głównej zamień `[LINK_FACEBOOK]`, `[LINK_INSTAGRAM]`, `[LINK_LINKEDIN]` na swoje profile (lub usuń, jeśli nie masz).

## 4. Google Analytics
We wszystkich plikach jest placeholder `G-XXXXXXX`. Załóż konto GA4 i podmień na swój identyfikator (`G-...`). Jeśli nie chcesz analityki - usuń blok „Google Analytics 4".

## 5. Strony prawne
W `polityka-prywatnosci.html` i `regulamin.html` uzupełnij: `[NAZWA FIRMY]`, `[NIP]`, `[ADRES]`, `[EMAIL]`.
**Zweryfikuj treść z prawnikiem/księgową** - to szablony, nie porada prawna.

## 6. Realizacje
Karta „Kancelaria Notarialna" jest Twoją 1. realizacją. Karty w2-w6 to miejsca do uzupełnienia prawdziwymi projektami (zrzuty + krótki opis). Nie wstawiałem fałszywych projektów.

## 7. Opinie
Sekcja „Zaufali Seovly" - wstaw prawdziwe opinie z imieniem/firmą, gdy je zbierzesz.

---

## Po publikacji (kolejność)
1. Wgraj pliki na hosting (statyczny - np. Netlify/Cloudflare Pages, szybkie i darmowe).
2. Podłącz domenę.
3. Dodaj stronę do **Google Search Console** i wyślij `sitemap.xml`.
4. Załóż **wizytówkę Google** (Google Business Profile) - kluczowe dla lokalnego SEO.
5. Sprawdź szybkość w **PageSpeed Insights**.
