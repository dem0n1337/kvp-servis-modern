# SEO Fix Plan - kvp-servis.sk

**Datum:** 12. marca 2026
**Ciel:** Opravit vsetky SEO problemy aby sa stranka vratila do vysledkov vyhladavacov

---

## FAZA 1: KRITICKE OPRAVY (Indexacia a crawlability)

Tieto opravy su nutne aby Google vobec videl obsah stranky.

### 1.1 Opravit SSR rendering
**Subor:** `nuxt.config.ts`
**Problem:** Obsah stranky sa renderuje len na strane klienta (JS), crawlery vidia prazdnu stranku
**Riesenie:**
- Overit ze `ssr: true` je aktivne (default v Nuxt 4, ale explicitne nastavit)
- Oznacit klientske komponenty ktore nemozu byt SSR ako `<ClientOnly>`:
  - `UiSectionBackground` (pouziva Canvas/WebGL)
  - `UiCanvasRevealEffect` (Canvas efekty)
  - `UiHeroHighlight` (animacie)
  - `UiTextHighlight` (animacie)
  - `ShaderMaterial` (Three.js/WebGL)
  - `BusinessMap` (Google Maps API)
  - `FloatingContactButton` (DOM manipulacia)
- Zabezpecit ze textovy obsah (h1, h2, p, ul/li) je MIMO `<ClientOnly>` wrapperov
**Dotkute subory:** `pages/index.vue`, `pages/sluzby.vue`, `pages/fotogaleria.vue`, `pages/kontakt.vue`, `layouts/default.vue`, `components/`

### 1.2 Nainštalovať a konfigurovať @nuxtjs/sitemap
**Subor:** `nuxt.config.ts`, `package.json`
**Problem:** sitemap.xml vracia 404
**Riesenie:**
- `npm install @nuxtjs/sitemap`
- Pridat do modules v nuxt.config.ts
- Konfiguracia:
```ts
site: {
  url: 'https://kvp-servis.sk'
},
sitemap: {
  xslColumns: [
    { label: 'URL', width: '65%' },
    { label: 'Last Modified', select: 'sitemap:lastmod', width: '35%' }
  ]
}
```

### 1.3 Pridat lang="sk" na HTML element
**Subor:** `nuxt.config.ts`
**Problem:** HTML element nema lang atribut
**Riesenie:**
```ts
app: {
  head: {
    htmlAttrs: { lang: 'sk' },
    // ... existujuce meta
  }
}
```

### 1.4 Pridat canonical URLs
**Subory:** `pages/index.vue`, `pages/sluzby.vue`, `pages/fotogaleria.vue`, `pages/kontakt.vue`
**Problem:** Ziadny canonical tag
**Riesenie:** Pridat do useHead() na kazdej stranke:
```ts
link: [
  { rel: 'canonical', href: 'https://kvp-servis.sk/' }
]
```

### 1.5 Aktualizovat robots.txt
**Subor:** `public/robots.txt`
**Problem:** Neodkazuje na sitemap
**Riesenie:**
```
User-Agent: *
Disallow:

Sitemap: https://kvp-servis.sk/sitemap.xml
```

---

## FAZA 2: STRUKTUROVANE DATA A META TAGY (Lepsie rankings)

### 2.1 Pridat JSON-LD LocalBusiness schema
**Subor:** `layouts/default.vue` alebo `app.vue`
**Problem:** Google nema strukturovane data o firme
**Riesenie:** Pridat cez useHead() globalny JSON-LD script:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "KVP-Servis",
  "description": "Profesionalne sluzby v oblasti kurenia, vody a plynu",
  "url": "https://kvp-servis.sk",
  "telephone": "+421918572389",
  "email": "marcel.jezik@kvp-servis.sk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ruzova 406/24",
    "addressLocality": "Slovensky Grob",
    "postalCode": "900 26",
    "addressCountry": "SK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.2523,
    "longitude": 17.2617
  },
  "openingHours": "Mo-Su 09:00-17:00",
  "areaServed": "Bratislavsky kraj",
  "priceRange": "$$",
  "image": "https://kvp-servis.sk/favicon.ico",
  "sameAs": []
}
```

### 2.2 Pridat Service schema na stranku /sluzby
**Subor:** `pages/sluzby.vue`
**Riesenie:** Pridat JSON-LD s typom Service pre kazdu kategoriu sluzieb

### 2.3 Pridat Open Graph meta tagy
**Subory:** Vsetky pages + nuxt.config.ts (globalne defaults)
**Problem:** Ziadne OG tagy
**Riesenie:** Pridat do useHead() na kazdej stranke:
```ts
meta: [
  { property: 'og:title', content: 'KVP-Servis - ...' },
  { property: 'og:description', content: '...' },
  { property: 'og:type', content: 'website' },
  { property: 'og:url', content: 'https://kvp-servis.sk/' },
  { property: 'og:locale', content: 'sk_SK' },
  { property: 'og:site_name', content: 'KVP-Servis' },
  // twitter/X
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:title', content: '...' },
  { name: 'twitter:description', content: '...' },
]
```

### 2.4 Opravit heading hierarchy
**Subor:** `layouts/default.vue`
**Problem:** Layout ma `<h1>KVP-Servis</h1>` v headeri, co koliduje s h1 na strankach
**Riesenie:** Zmenit h1 v layout headeri na `<span>` alebo `<p>` s rovnakym stylingom:
```html
<span class="text-2xl font-bold ...">KVP-Servis</span>
```
Kazda stranka uz ma svoju vlastnu h1 - to je spravne.

### 2.5 Skratit meta description
**Subor:** `nuxt.config.ts` (globalna), `pages/index.vue`
**Problem:** 165 znakov, odporucanych 120-160
**Riesenie:** Skratit globalnu description na max 155 znakov

### 2.6 Pridat alt texty k galerii obrazkov
**Subor:** `pages/fotogaleria.vue`, pripadne `components/ui/ExpandableGallery.vue`
**Problem:** 16 obrazkov nema popisne alt texty
**Riesenie:** Zmenit z jednoduchych string paths na objekty s alt textami:
```ts
const projectImages = [
  { src: '/images/IMG-20250604-WA0001.jpg', alt: 'Instalacia kotla Buderus - kotolna' },
  // ...
]
```

---

## FAZA 3: DOPLNKOVE VYLEPSENIA

### 3.1 Dynamicky copyright rok
**Subor:** `layouts/default.vue`
**Problem:** Staticky "2025"
**Riesenie:** `{{ new Date().getFullYear() }}`

### 3.2 Vytvorit llms.txt
**Subor:** `public/llms.txt`
**Problem:** Chyba subor pre LLM crawlery
**Riesenie:** Vytvorit subor s popisom firmy a sluzieb

### 3.3 Vypnut devtools v produkcii
**Subor:** `nuxt.config.ts`
**Problem:** `devtools: { enabled: true }` aj v produkcii
**Riesenie:** `devtools: { enabled: process.env.NODE_ENV === 'development' }`

---

## VECI MIMO SCOPE KODU (Manual actions)

Tieto veci sa nedaju opravit v kode, musia sa spravit manualne:

| Akcia | Kde | Poznamka |
|-------|-----|----------|
| Vytvorit Google Business Profile | google.com/business | Kriticke pre local SEO |
| Submittnut sitemap do Google Search Console | search.google.com/search-console | Po deployi noveho sitemap.xml |
| Requestnut re-indexaciu stranky | Google Search Console | URL Inspection → Request indexing |
| Vytvorit Facebook stranku | facebook.com | Volitelne |
| Nastavit DMARC DNS zaznam | DNS provider (Cloudflare?) | Pre email deliverability |
| Link building | - | Registracia do slovenskych katalogov (zlatestranky.sk, firmy.sk, atd.) |

---

## PORADIE IMPLEMENTACIE

1. **Najprv** Faza 1 (vsetky body) - toto je nutne aby sa stranka vobec indexovala
2. **Potom** Faza 2 (vsetky body) - toto zlepsuje rankings a zobrazovanie
3. **Nakoniec** Faza 3 - nice-to-have vylepsenia
4. **Po deployi** - manualne akcie (Google Search Console, Business Profile)

Vsetky zmeny v Faze 1 a 2 sa daju implementovat v jednom commit/deploy cykle.
