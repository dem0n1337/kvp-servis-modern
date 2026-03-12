<template>
  <div>
    <!-- Page Header -->
    <section class="relative bg-gradient-to-br from-primary-dark via-primary-medium to-primary-bright text-white py-16 overflow-hidden">
      <div class="absolute inset-0 bg-primary-dark opacity-40"></div>
      
      <!-- Enhanced Animated background elements -->
      <UiSectionBackground 
        pattern="none"
        :primary-color="'#4a7ba7'"
        :secondary-color="'#e74c3c'"
        variant="scattered"
        :show-shapes="true"
        :show-gradients="true"
      />
      
      <!-- Additional floating elements for header -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-white/20 to-primary-light/20 rounded-full animate-float"></div>
        <div class="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-primary-bright/20 to-heating-primary/20 rounded-full animate-bounce" style="animation-delay: 1s; animation-duration: 3s;"></div>
        <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-water-primary/20 to-primary-bright/20 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-20 right-1/4 w-14 h-14 bg-gradient-to-br from-white/10 to-primary-light/10 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
      </div>
      
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Fotogaléria</h1>
        <p class="text-xl text-primary-pale">Naše realizácie a dokončené projekty</p>
      </div>
    </section>

    <!-- Gallery Introduction -->
    <section class="py-16 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-primary-dark mb-6">Naše realizácie</h2>
        <p class="text-lg text-primary-gray max-w-3xl mx-auto mb-12">
          Prezrite si ukázky našich dokončených projektov. Každá inštalácia je vykonaná s dôrazom na kvalitu, 
          bezpečnosť a dlhodobú spoľahlivosť. Od kotolní až po kompletné kúrenárske systémy.
        </p>
      </div>
    </section>

    <!-- Projects Gallery -->
    <section class="py-16 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <UiExpandableGallery 
          :images="projectImages" 
          class="mb-8"
        />
        
        <p class="text-center text-primary-gray mt-6">
          Inštalácie kotlov značiek Buderus, Bosch, Junkers, Vaillant a Protherm. 
          Podlahové kúrenie, radiátorové systémy, vodovodné inštalácie, sanitárne zariadenia, 
          plynové inštalácie a kompletné kotolne. Všetky práce vykonávame v súlade s platnými normami a predpismi.
        </p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-emergency-red text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Máte záujem o podobnú realizáciu?</h2>
        <p class="text-xl mb-8 text-white/90">Kontaktujte nás pre konzultáciu a cenový odhad vášho projektu</p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="tel:+421918572389" 
            class="rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
          >
            <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +421 918 572 389
          </a>
          
          <NuxtLink 
            to="/kontakt" 
            class="rainbow-button inverted group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
          >
            <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Napíšte nám
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Fotogaléria - KVP-Servis | Naše realizácie',
  meta: [
    {
      name: 'description',
      content: 'Fotogaléria realizácií KVP-Servis: kotolne, kúrenárske systémy, vodovodné a plynové inštalácie. Bratislavský kraj.',
    },
    { property: 'og:title', content: 'Fotogaléria - KVP-Servis | Naše realizácie' },
    { property: 'og:description', content: 'Prezrite si naše dokončené projekty: kotolne, kúrenárske systémy, vodovodné a plynové inštalácie.' },
    { property: 'og:url', content: 'https://kvp-servis.sk/fotogaleria' },
    { name: 'twitter:title', content: 'Fotogaléria - KVP-Servis' },
    { name: 'twitter:description', content: 'Prezrite si naše dokončené projekty: kotolne, kúrenárske systémy, vodovodné a plynové inštalácie.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://kvp-servis.sk/fotogaleria' },
  ],
})

// Project images from the KVP gallery with SEO alt texts
const projectImages = [
  { src: '/images/IMG-20250604-WA0001.jpg', alt: 'Inštalácia vykurovacieho systému - KVP-Servis realizácia' },
  { src: '/images/IMG-20250604-WA0002.jpg', alt: 'Montáž kotla Buderus - profesionálna kotolňa' },
  { src: '/images/IMG-20250604-WA0004.jpg', alt: 'Podlahové kúrenie - rozvody a inštalácia' },
  { src: '/images/IMG-20250604-WA0005.jpg', alt: 'Vodovodné inštalácie - kompletná realizácia' },
  { src: '/images/IMG-20250604-WA0006.jpg', alt: 'Kúrenársky systém - radiátory a rozvody' },
  { src: '/images/IMG-20250604-WA0007.jpg', alt: 'Plynová inštalácia - bezpečné pripojenie' },
  { src: '/images/IMG-20250604-WA0008.jpg', alt: 'Servis a údržba kotlov - KVP-Servis' },
  { src: '/images/IMG-20250604-WA0009.jpg', alt: 'Montáž vykurovacieho zariadenia' },
  { src: '/images/IMG-20250604-WA0010.jpg', alt: 'Rekonštrukcia kúpeľne - vodoinštalácie' },
  { src: '/images/IMG-20250604-WA0013.jpg', alt: 'Kotolňa - kompletná inštalácia vykurovania' },
  { src: '/images/IMG-20250604-WA0014.jpg', alt: 'Inštalácia plynového kotla Vaillant' },
  { src: '/images/IMG-20250604-WA0015.jpg', alt: 'Rozvody podlahového kúrenia' },
  { src: '/images/IMG-20250604-WA0016.jpg', alt: 'Výmena radiátorov a termostatických ventilov' },
  { src: '/images/IMG-20250604-WA0017.jpg', alt: 'Sanitárne inštalácie - kúpeľňa' },
  { src: '/images/IMG-20250604-WA0018.jpg', alt: 'Plynové rozvody - certifikovaná inštalácia' },
  { src: '/images/IMG-20250604-WA0020.jpg', alt: 'Dokončený projekt - kotolňa s kotlom Protherm' },
]
</script>

<style scoped>
.rainbow-button {
  --color-1: #1e2a3a; /* primary-dark */
  --color-2: #2d4a6b; /* primary-medium */
  --color-3: #4a7ba7; /* primary-bright */
  --color-4: #e74c3c; /* emergency-red */
  --color-5: #ff6b35; /* heating-primary */
  --color-6: #f59e0b; /* amber - gas color */
  --color-7: #1e2a3a; /* primary-dark again for smooth loop */
  animation: rainbow 2s infinite linear;
}

.rainbow-button:before {
  animation: rainbow 2s infinite linear;
}

@keyframes rainbow {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 200%;
  }
}

/* Inverted color scheme for contrast */
.rainbow-button.inverted {
  --color-1: #f59e0b; /* amber - gas color */
  --color-2: #ff6b35; /* heating-primary */
  --color-3: #e74c3c; /* emergency-red */
  --color-4: #4a7ba7; /* primary-bright */
  --color-5: #2d4a6b; /* primary-medium */
  --color-6: #1e2a3a; /* primary-dark */
  --color-7: #f59e0b; /* amber again for smooth loop */
}
</style>