# SEO Audit - Kompletne zistenia pre kvp-servis.sk

**Datum analyzy:** 12. marca 2026
**Zdroje:** Manualna analyza zdrojovych kodov + SEOptimer online audit + WebFetch analyza zivej stranky

---

## HLAVNA PRICINA ZMIZNUTIA Z VYHLADAVACOV

### SSR Rendering Problem (KRITICKE)
SEOptimer audit ukazuje **Word Count = 1 slovo** v surovom HTML a **82% obsahu je renderovaneho cez JavaScript**.
To znamena, ze Googlebot (a ine crawlery) vidia takmer **prazdnu stranku**.

Aj ked Nuxt 4 ma SSR zapnute defaultne, je mozne ze:
- Niektore komponenty (v-motion, Three.js, Canvas efekty) blokuju SSR rendering
- Hydration errors sposobuju ze server posiela prazdny shell
- Cloudflare CDN cache servuje SPA verziu namiesto SSR verzie

**Toto je s najvacsou pravdepodobnostou #1 dovod preco stranka zmizla z vyhladavacov.**

---

## ZISTENIA PODLA PRIORITY

### KRITICKE (Okamzite riesit)

| # | Problem | Detail | Zdroj |
|---|---------|--------|-------|
| 1 | **SSR nefunguje spravne** | Word count = 1, 82% rendered content. Crawlery vidia prazdnu stranku | SEOptimer |
| 2 | **Chyba sitemap.xml** | Vracia 404. Google nema ako objavit podstranky /sluzby, /fotogaleria, /kontakt | SEOptimer + WebFetch |
| 3 | **Chyba lang="sk" atribut** | HTML element nema lang attribute. Google nevie v akom jazyku je stranka | SEOptimer + Code |
| 4 | **Chyba canonical URL** | Ziadny canonical tag. Riziko duplicitneho obsahu (www vs non-www, http vs https) | SEOptimer + Code |

### VYSOKA PRIORITA (Riesit co najskor)

| # | Problem | Detail | Zdroj |
|---|---------|--------|-------|
| 5 | **Chyba JSON-LD LocalBusiness schema** | Google nema strukturovane data o firme, adrese, sluzbach, otvaracich hodinach | SEOptimer + Code |
| 6 | **Chyba Organization/Person schema** | Ziadne schema.org markup nikde na stranke | SEOptimer |
| 7 | **Chybaju Open Graph meta tagy** | Ziadne og:title, og:description, og:image - nefunguju previews na socialnych sietach | SEOptimer + WebFetch |
| 8 | **Chybaju Twitter/X Card meta tagy** | Ziadne twitter:card, twitter:title, twitter:description | SEOptimer |
| 9 | **H1 tag problem** | SEOptimer nedetekuje H1 (lebo SSR nefunguje). Navyse v layout.vue je h1 "KVP-Servis" co koliduje s h1 na podstrankach | SEOptimer + Code |
| 10 | **Meta description je prilis dlhy** | 165 znakov, odporucany rozsah je 120-160 | SEOptimer |
| 11 | **robots.txt neodkazuje na sitemap** | Aj ked robots.txt existuje, nema v sebe odkaz na sitemap.xml | WebFetch |

### STREDNA PRIORITA

| # | Problem | Detail | Zdroj |
|---|---------|--------|-------|
| 12 | **Nizka keyword konzistencia** | Hlavne klucove slova nie su rovnomerne rozlozene v Title, Description a Header tagoch | SEOptimer |
| 13 | **Obrazky v galerii bez alt textov** | 16 obrazkov v galerii nema popisne alt texty pre SEO image search | Code |
| 14 | **Inline styles** | Pouzivaju sa inline styles, odporuca sa externe CSS | SEOptimer |
| 15 | **Chyba llms.txt** | Novy standard pre LLM crawlery, pomaha AI vyhladavacom porozumiet obsahu | SEOptimer |

### NIZKA PRIORITA

| # | Problem | Detail | Zdroj |
|---|---------|--------|-------|
| 16 | **Ziadne socialne profily** | Chyba Facebook, Instagram, LinkedIn, YouTube | SEOptimer |
| 17 | **Chyba Facebook Pixel** | Ziadny FB remarketing pixel | SEOptimer |
| 18 | **Chyba Google Business Profile** | Nie je nalinkovaný Google Business profil | SEOptimer |
| 19 | **Slabe backlinky** | 23 celkovych, 21 referring domains, DomainStrength = 0 | SEOptimer |
| 20 | **Chyba DMARC zaznam** | Email dorecitelnost a anti-spoofing | SEOptimer |
| 21 | **Copyright rok 2025** | Staticky rok vo footeri, mal by byt dynamicky | Code |

---

## CO FUNGUJE DOBRE

| Oblast | Hodnotenie | Detail |
|--------|------------|--------|
| **Usability** | A+ | Stranka je dobre pouzitelna na vsetkych zariadeniach |
| **Performance** | A+ | Load speed 0.5s, velkost stranky 0.44MB |
| **SSL/HTTPS** | OK | SSL je aktivny, redirect funguje |
| **HTTP/2** | OK | Pouziva sa moderny protokol |
| **Kompresia** | OK | 59% miera kompresie |
| **Google Analytics** | OK | GA4 je nainstalovany (G-CF8RBRBE31) |
| **Title tag** | OK | Optimalna dlzka 55 znakov |
| **Responsive design** | OK | Mobile-friendly layout s Tailwind CSS |
| **Favicon** | OK | favicon.ico je pritomny |

---

## TECHNICKY STAV KODU

### nuxt.config.ts
- Chyba `htmlAttrs: { lang: 'sk' }`
- Chyba `site.url` konfiguracia
- Ziadny sitemap modul
- Ziadny SEO modul
- `devtools: { enabled: true }` je zapnute aj pre produkciu

### Stranky (pages/)
- Kazda stranka ma useHead() s title a description - DOBRE
- Chybaju og: meta tagy na vsetkych strankach
- Chybaju canonical URLs
- Chyba JSON-LD structured data

### Layout (layouts/default.vue)
- Header pouziva `<h1>` pre logo "KVP-Servis" - malo by byt `<span>` alebo `<div>`
- Footer ma staticky rok 2025

### robots.txt (public/)
- Minimalisticky, chyba odkaz na sitemap
- Na zivej stranke je Cloudflare-managed verzia ktora blokuje AI crawlery (to je OK)

### Obrazky
- Ziadna optimalizacia (@nuxt/image nie je nainstalovany)
- Galeria obrazky nemaju popisne alt texty
- Brand loga maju alt texty - DOBRE
- Service ikony maju alt texty - DOBRE
