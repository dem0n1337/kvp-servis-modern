# Čo bolo opravené na webe kvp-servis.sk
**12. marca 2026**

---

## Prečo stránka zmizla z vyhľadávačov

Stránka bola chránená bezpečnostnou službou Cloudflare, ktorá však omylom blokovala aj vyhľadávače (Google, Bing). Tie sa tak nemohli dostať k obsahu stránky a prestali ju zobrazovať vo výsledkoch hľadania.

---

## Čo bolo opravené

### 1. Odblokované vyhľadávače
Cloudflare blokoval prístup robotom vyhľadávačov. Toto bolo vypnuté — Google a Bing teraz vidia stránku bez problémov.

### 2. Opravený súbor robots.txt
Cloudflare prepisoval náš súbor robots.txt vlastným obsahom. Toto bolo vypnuté — teraz sa zobrazuje náš pôvodný súbor, ktorý vyhľadávačom hovorí, že môžu celú stránku indexovať.

### 3. Sprístupnená mapa stránok (sitemap.xml)
Vytvorili sme automatickú mapu stránok, ktorá vyhľadávačom ukazuje všetky 4 stránky webu (Domov, Služby, Kontakt, Fotogaléria). Predtým vyhľadávače nevedeli o podstránkach.

### 4. Pridané informácie pre vyhľadávače
Na každú stránku boli pridané skryté informácie, ktoré pomáhajú vyhľadávačom pochopiť, o čom stránka je:
- Názov a popis každej stránky
- Adresa firmy, telefón, email
- Otváracie hodiny
- Zoznam služieb (kúrenie, voda, plyn)
- GPS súradnice prevádzky
- Fotky s popismi

### 5. Registrácia v Google Search Console
Stránka bola zaregistrovaná v nástroji Google Search Console a mapa stránok bola odoslaná Googlu. Starý, neplatný sitemap bol zmazaný.

---

## Aktuálny stav

- **Domovská stránka** — Google ju už indexuje (zobrazuje vo výsledkoch)
- **Služby, Kontakt, Fotogaléria** — Google ich práve objavuje, indexácia prebehne v priebehu niekoľkých dní až 2 týždňov

---

## Čo nebolo možné spraviť

- **Google Business Profile cez API** — Google vyžaduje špeciálne schválenie, ktoré trvá niekoľko dní/týždňov. Profil je možné spravovať ručne cez webové rozhranie Google.
