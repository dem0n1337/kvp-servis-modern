<template>
  <div>
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-dark via-primary-medium to-primary-bright text-white py-24 overflow-hidden">
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
      
      <!-- Additional floating elements for hero -->
      <div class="absolute inset-0">
        <div class="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-white/20 to-primary-light/20 rounded-full animate-float"></div>
        <div class="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-primary-bright/20 to-heating-primary/20 rounded-full animate-bounce" style="animation-delay: 1s; animation-duration: 3s;"></div>
        <div class="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-water-primary/20 to-primary-bright/20 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
        <div class="absolute top-20 right-1/4 w-14 h-14 bg-gradient-to-br from-white/10 to-primary-light/10 rounded-full animate-float" style="animation-delay: 0.5s;"></div>
      </div>
      
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center">
          <div
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          >
            <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-light bg-clip-text">
              <UiHeroHighlight color="white" :animation-delay="500">
                KVP-Servis
              </UiHeroHighlight>
            </h1>
          </div>
          
          <!-- About Me Section -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }"
            class="mb-10"
          >
            <div class="max-w-4xl mx-auto">
              <p class="text-base text-primary-light/90 leading-relaxed">
                Volám sa <UiTextHighlight 
                  class="rounded-xl bg-gradient-to-r from-orange-300 to-red-300 font-bold"
                  :delay="1000"
                  :duration="1500"
                  text-end-color="#1e2a3a"
                >Marcel Ježík</UiTextHighlight> a ponúkam vám riešenia v oblasti všetkých vyššie uvedených služieb. 
                Každý váš problém a želanie je pre mňa dôležité, či už pôjde o výmenu vodovodnej batérie, alebo o riešenie kompletnej vodoinštalácie či kúrenia. 
                V prípade požiadavky na väčšiu rýchlosť realizácie viem práce uskutočniť aj v spolupráci so svojimi kolegami. 
                Preto ma neváhajte kontaktovať, <UiTextHighlight 
                  class="rounded-xl bg-gradient-to-r from-blue-300 to-cyan-300 font-bold"
                  :delay="2000"
                  :duration="1800"
                  text-end-color="#1e2a3a"
                >akúkoľvek obhliadku vykonávam samozrejme zdarma.</UiTextHighlight>
              </p>
            </div>
          </div>
          
          <div
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 700 } }"
            class="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <NuxtLink 
              to="/sluzby" 
              class="rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
            >
              <svg class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
              Naše služby
            </NuxtLink>
            
            <NuxtLink 
              to="/kontakt" 
              class="rainbow-button inverted group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
            >
              <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              Kontaktujte nás
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-16 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <h2 class="text-3xl font-bold text-center text-primary-dark mb-12">Naše služby</h2>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <!-- Heating Services -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 200 } }"
          >
            <UiCardSpotlight 
              :radius="200"
              color="rgba(231, 76, 60, 0.2)"
              :colors="[[231, 76, 60], [255, 107, 53]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-8 text-center h-full flex flex-col items-center justify-center space-y-4 relative rounded-xl">
                <div class="w-20 h-20 mb-6 p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-xl relative group-hover:scale-110 transition-all duration-300">
                  <img src="/images/kurenie.svg" alt="Kúrenie icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h3 class="text-3xl font-black text-red-400 mb-3 tracking-tight">Kúrenie</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full mb-4"></div>
                <p class="text-white text-base font-semibold leading-relaxed max-w-xs">
                  Pri plánovaní vykurovacieho systému je potrebné myslieť na dlhodobé riešenia a v tom Vám poskytnem rady. Taktiež zabezpečím, namontujem alebo opravím kúrenie akéhokoľvek typu.
                </p>
              </div>
            </UiCardSpotlight>
          </div>

          <!-- Water Services -->
          <div 
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }"
          >
            <UiCardSpotlight 
              :radius="200"
              color="rgba(74, 123, 167, 0.2)"
              :colors="[[74, 123, 167], [45, 74, 107]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-8 text-center h-full flex flex-col items-center justify-center space-y-4 relative rounded-xl">
                <div class="w-20 h-20 mb-6 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-xl relative group-hover:scale-110 transition-all duration-300">
                  <img src="/images/voda.svg" alt="Voda icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h3 class="text-3xl font-black text-blue-400 mb-3 tracking-tight">Voda</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mb-4"></div>
                <p class="text-white text-base font-semibold leading-relaxed max-w-xs">
                  Zaoberám sa vodoinštalačnými prácami od základov. Či už ide o prípojku do domu, studňové čerpadlo, výmenu stúpačiek v blokoch alebo kompletnú rekonštrukciu inštalácií vo vašej kúpeľni a WC.
                </p>
              </div>
            </UiCardSpotlight>
          </div>

          <!-- Gas Services -->
          <div 
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600 } }"
          >
            <UiCardSpotlight 
              :radius="200"
              color="rgba(245, 158, 11, 0.2)"
              :colors="[[245, 158, 11], [255, 107, 53]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-8 text-center h-full flex flex-col items-center justify-center space-y-4 relative rounded-xl">
                <div class="w-20 h-20 mb-6 p-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-xl relative group-hover:scale-110 transition-all duration-300">
                  <img src="/images/plyn.svg" alt="Plyn icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h3 class="text-3xl font-black text-amber-400 mb-3 tracking-tight">Plyn</h3>
                <div class="w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-4"></div>
                <p class="text-white text-base font-semibold leading-relaxed max-w-xs">
                  Zabezpečujem realizáciu plynovej prípojky, výmenu alebo inštaláciu sporákov a servis a montáž plynových kotlov. Výnimkou nie je ani zabezpečenie tlakových skúšok a iné.
                </p>
              </div>
            </UiCardSpotlight>
          </div>
        </div>
      </div>
    </section>

    <!-- Brands Section -->
    <BrandsSection />


  </div>
</template>

<script setup>
import { h } from 'vue'

useHead({
  title: 'KVP-Servis - Profesionálne služby kúrenia, vody a plynu',
  meta: [
    {
      name: 'description',
      content: 'KVP-Servis - inštalácia a servis kotlov Buderus, Bosch, Vaillant, Protherm. Kúrenie, voda, plyn. Slovenský Grob, Bratislavský kraj.',
    },
    { property: 'og:title', content: 'KVP-Servis - Profesionálne služby kúrenia, vody a plynu' },
    { property: 'og:description', content: 'Inštalácia a servis kotlov, podlahové kúrenie, vodovodné a plynové inštalácie. Bratislavský kraj.' },
    { property: 'og:url', content: 'https://kvp-servis.sk/' },
    { name: 'twitter:title', content: 'KVP-Servis - Profesionálne služby kúrenia, vody a plynu' },
    { name: 'twitter:description', content: 'Inštalácia a servis kotlov, podlahové kúrenie, vodovodné a plynové inštalácie. Bratislavský kraj.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://kvp-servis.sk/' },
  ],
})

const features = [
  {
    title: 'Profesionalita',
    description: 'Dlhoročné skúsenosti s prémiovými značkami kotlov',
    icon: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        'clip-rule': 'evenodd'
      })
    ])
  },
  {
    title: 'Spoľahlivosť',
    description: 'Rýchla odozva a presné termíny realizácie',
    icon: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
        'clip-rule': 'evenodd'
      })
    ])
  },
  {
    title: 'Kvalita',
    description: 'Používame len kvalitné materiály a komponenty',
    icon: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20',
      class: 'w-8 h-8'
    }, [
      h('path', {
        d: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      })
    ])
  },
  {
    title: 'Osobný prístup',
    description: 'Individuálne riešenia pre každého klienta',
    icon: () => h('svg', {
      fill: 'currentColor',
      viewBox: '0 0 20 20',
      class: 'w-8 h-8'
    }, [
      h('path', {
        'fill-rule': 'evenodd',
        d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z',
        'clip-rule': 'evenodd'
      })
    ])
  }
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