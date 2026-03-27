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
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Naše služby</h1>
        <p class="text-xl text-primary-pale">Kúrenár a inštalatér v Bratislave — komplexné riešenia pre kúrenie, vodu a plyn</p>
      </div>
    </section>

    <!-- Heating Services -->
    <section class="py-20 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Unified Service Block -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <!-- Hero Card - Full Width -->
          <div class="mb-8">
            <UiCardSpotlight 
              :radius="300"
              color="rgba(231, 76, 60, 0.2)"
              :colors="[[231, 76, 60], [255, 107, 53]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-12 text-center h-full flex flex-col items-center justify-center space-y-6 relative rounded-t-2xl overflow-hidden">
                <!-- Floating embers background -->
                <div class="absolute inset-0 pointer-events-none">
                  <div class="ember ember-1"></div>
                  <div class="ember ember-2"></div>
                  <div class="ember ember-3"></div>
                  <div class="ember ember-4"></div>
                  <div class="ember ember-5"></div>
                </div>
                
                <div class="w-32 h-32 mb-6 p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full shadow-2xl relative group-hover:scale-110 transition-all duration-300 heating-glow">
                  <img src="/images/kurenie.svg" alt="Kúrenie icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h2 class="text-4xl font-black text-red-400 mb-3 tracking-tight">Profesionálne kúrenie</h2>
                <p class="text-white/90 text-lg leading-relaxed max-w-3xl">
                  Komplexné riešenia pre vaše tepelné potreby - od návrhu až po pravidelnú údržbu
                </p>
              </div>
            </UiCardSpotlight>
          </div>

          <!-- Service Details - 3 Columns -->
          <div class="px-8 pb-8">
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-2xl font-black mb-6 text-heating-primary border-b-2 border-heating-primary/20 pb-2">Inštalácia a servis kotlov</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium"><strong class="text-heating-primary">Buderus</strong> - Nemecká kvalita a spoľahlivosť</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium"><strong class="text-heating-primary">Bosch</strong> - Moderné technológie</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium"><strong class="text-heating-primary">Junkers</strong> - Tradičná kvalita</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium"><strong class="text-heating-primary">Vaillant</strong> - Ekologické riešenia</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium"><strong class="text-heating-primary">Protherm</strong> - Ekonomická prevádzka</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-heating-primary border-b-2 border-heating-primary/20 pb-2">Kúrenárske systémy</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Podlahové kúrenie - inštalácia rôznymi materiálmi</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Radiátorové systémy - meď, plast-hliník, pozink</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Výmena termostatických ventilov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Výmena poistných ventilov</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-heating-primary border-b-2 border-heating-primary/20 pb-2">Servis a údržba</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Preplach podlahového kúrenia</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Výmena starých radiátorov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Správa kotolní</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-heating-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Tesnenie spojov</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Water Services -->
    <section class="py-20 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Unified Service Block -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <!-- Hero Card - Full Width -->
          <div class="mb-8">
            <UiCardSpotlight 
              :radius="300"
              color="rgba(74, 123, 167, 0.2)"
              :colors="[[74, 123, 167], [45, 74, 107]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-12 text-center h-full flex flex-col items-center justify-center space-y-6 relative rounded-t-2xl overflow-hidden">
                <!-- Rising bubbles background -->
                <div class="absolute inset-0 pointer-events-none">
                  <div class="bubble bubble-1"></div>
                  <div class="bubble bubble-2"></div>
                  <div class="bubble bubble-3"></div>
                  <div class="bubble bubble-4"></div>
                  <div class="bubble bubble-5"></div>
                  <div class="bubble bubble-6"></div>
                </div>
                
                <!-- Water ripple effect on icon -->
                <div class="w-32 h-32 mb-6 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl relative group-hover:scale-110 transition-all duration-300 water-ripple">
                  <img src="/images/voda.svg" alt="Voda icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  <div class="ripple-circle ripple-1"></div>
                  <div class="ripple-circle ripple-2"></div>
                </div>
                <h2 class="text-4xl font-black text-blue-400 mb-3 tracking-tight">Vodovodné systémy</h2>
                <p class="text-white/90 text-lg leading-relaxed max-w-3xl">
                  Profesionálne vodovodné riešenia - od návrhu až po realizáciu a údržbu
                </p>
              </div>
            </UiCardSpotlight>
          </div>

          <!-- Service Details - 3 Columns -->
          <div class="px-8 pb-8">
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-2xl font-black mb-6 text-water-primary border-b-2 border-water-primary/20 pb-2">Projektovanie a návrh</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Návrh vodovodných inštalácií pre novostavby</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Riešenia pre rekonštrukcie</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Optimalizácia existujúcich systémov</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-water-primary border-b-2 border-water-primary/20 pb-2">Inštalácie a montáž</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Komplexné inštalatérske práce</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Inštalácia sanitárnej techniky</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Pripojenie spotrebičov</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-water-primary border-b-2 border-water-primary/20 pb-2">Opravy a údržba</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Oprava vodovodných porúch</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Údržba rozvodov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-water-primary flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Preventívne kontroly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gas Services -->
    <section class="py-20 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Unified Service Block -->
        <div class="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          <!-- Hero Card - Full Width -->
          <div class="mb-8">
            <UiCardSpotlight 
              :radius="300"
              color="rgba(245, 158, 11, 0.2)"
              :colors="[[245, 158, 11], [255, 107, 53]]"
              class-name="bg-gradient-to-br from-gray-900/95 to-gray-800/95 border-gray-700 h-full"
            >
              <div class="p-12 text-center h-full flex flex-col items-center justify-center space-y-6 relative rounded-t-2xl overflow-hidden">
                <!-- Flowing gas background -->
                <div class="absolute inset-0 pointer-events-none">
                  <div class="gas-flow gas-flow-1"></div>
                  <div class="gas-flow gas-flow-2"></div>
                  <div class="gas-flow gas-flow-3"></div>
                </div>
                
                <!-- Animated grain/energy effect -->
                <div class="absolute inset-0 pointer-events-none opacity-40">
                  <div class="gas-noise"></div>
                </div>
                
                <div class="w-32 h-32 mb-6 p-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-2xl relative group-hover:scale-110 transition-all duration-300 gas-energy">
                  <img src="/images/plyn.svg" alt="Plyn icon" class="w-full h-full object-contain filter brightness-0 invert">
                  <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                </div>
                <h2 class="text-4xl font-black text-amber-400 mb-3 tracking-tight">Bezpečný plyn</h2>
                <p class="text-white/90 text-lg leading-relaxed max-w-3xl">
                  Certifikované plynové služby s najvyššími bezpečnostnými štandardmi
                </p>
              </div>
            </UiCardSpotlight>
          </div>

          <!-- Service Details - 3 Columns -->
          <div class="px-8 pb-8">
            <div class="grid md:grid-cols-3 gap-8">
              <div>
                <h3 class="text-2xl font-black mb-6 text-yellow-400 border-b-2 border-yellow-400/20 pb-2">Inštalácie</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Inštalácia plynových kotlov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Plynové rozvody</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Pripojenie plynových spotrebičov</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-yellow-400 border-b-2 border-yellow-400/20 pb-2">Bezpečnosť</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Bezpečnostné kontroly</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Tesnosť plynových inštalácií</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Revízie a certifikáty</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-2xl font-black mb-6 text-yellow-400 border-b-2 border-yellow-400/20 pb-2">Servis</h3>
                <ul class="space-y-4">
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Servis plynových kotlov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Výmena plynových komponentov</span>
                  </li>
                  <li class="flex items-start group">
                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="text-gray-700 font-medium">Pravidelná údržba</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="py-16 bg-emergency-red text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Hľadáte kúrenára alebo inštalatéra v Bratislave?</h2>
        <p class="text-xl mb-8 text-white/90">Kontaktujte nás pre podrobnú konzultáciu a cenový odhad — pôsobíme v celom Bratislavskom kraji</p>
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
  title: 'Služby kúrenára a inštalatéra - KVP-Servis | Bratislava a okolie',
  meta: [
    {
      name: 'description',
      content: 'Služby kúrenára a inštalatéra v Bratislave: inštalácia kondenzačných kotlov, podlahové kúrenie, vodoinštalácie, plynové rozvody a servis. KVP-Servis — Bratislava a okolie.',
    },
    { property: 'og:title', content: 'Služby kúrenára a inštalatéra - KVP-Servis | Bratislava' },
    { property: 'og:description', content: 'Kúrenár a inštalatér v Bratislave: inštalácia kotlov Buderus, Vaillant, Protherm, podlahové kúrenie, vodoinštalácie, plynové rozvody a servis.' },
    { property: 'og:url', content: 'https://kvp-servis.sk/sluzby' },
    { name: 'twitter:title', content: 'Služby kúrenára a inštalatéra - KVP-Servis | Bratislava' },
    { name: 'twitter:description', content: 'Kúrenár a inštalatér v Bratislave: inštalácia kotlov, podlahové kúrenie, vodoinštalácie a plynové inštalácie.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://kvp-servis.sk/sluzby' },
  ],
})
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

/* ===== HEATING ANIMATIONS (Embers & Glow) ===== */
.heating-glow {
  animation: heating-pulse 2.5s ease-in-out infinite;
}

@keyframes heating-pulse {
  0%, 100% {
    box-shadow: 0 0 30px rgba(239, 68, 68, 0.6), 0 0 60px rgba(239, 68, 68, 0.3), 0 0 90px rgba(255, 107, 53, 0.2);
  }
  50% {
    box-shadow: 0 0 45px rgba(239, 68, 68, 0.8), 0 0 80px rgba(239, 68, 68, 0.5), 0 0 120px rgba(255, 107, 53, 0.3);
  }
}

.ember {
  position: absolute;
  width: 5px;
  height: 5px;
  background: radial-gradient(circle, #ff6b35 0%, #e74c3c 60%, rgba(231, 76, 60, 0.8) 100%);
  border-radius: 50%;
  opacity: 0;
  animation: ember-rise linear infinite;
  box-shadow: 0 0 8px rgba(255, 107, 53, 0.8);
}

.ember-1 {
  left: 20%;
  animation-duration: 8s;
  animation-delay: 0s;
}

.ember-2 {
  left: 35%;
  animation-duration: 10s;
  animation-delay: 2s;
}

.ember-3 {
  left: 60%;
  animation-duration: 9s;
  animation-delay: 4s;
}

.ember-4 {
  left: 75%;
  animation-duration: 7s;
  animation-delay: 1s;
}

.ember-5 {
  left: 45%;
  animation-duration: 11s;
  animation-delay: 6s;
}

@keyframes ember-rise {
  0% {
    bottom: -10px;
    opacity: 0;
    transform: translateX(0px) scale(0.3);
  }
  5% {
    opacity: 0.9;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
    transform: translateX(40px) scale(0.1);
  }
}

/* ===== WATER ANIMATIONS (Bubbles & Ripples) ===== */
.water-ripple .ripple-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid rgba(59, 130, 246, 0.7);
  border-radius: 50%;
  pointer-events: none;
}

.ripple-1 {
  width: 140px;
  height: 140px;
  animation: water-ripple 3s ease-out infinite;
}

.ripple-2 {
  width: 140px;
  height: 140px;
  animation: water-ripple 3s ease-out infinite;
  animation-delay: 1.5s;
}

@keyframes water-ripple {
  0% {
    width: 140px;
    height: 140px;
    opacity: 0.8;
    border-width: 3px;
  }
  50% {
    opacity: 0.6;
    border-width: 2px;
  }
  100% {
    width: 220px;
    height: 220px;
    opacity: 0;
    border-width: 1px;
  }
}

.bubble {
  position: absolute;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 60%, rgba(59, 130, 246, 0.1) 100%);
  border-radius: 50%;
  opacity: 0;
  animation: bubble-rise linear infinite;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
}

.bubble-1 {
  left: 15%;
  width: 6px;
  height: 6px;
  animation-duration: 5s;
  animation-delay: 0s;
}

.bubble-2 {
  left: 30%;
  width: 8px;
  height: 8px;
  animation-duration: 6s;
  animation-delay: 1s;
}

.bubble-3 {
  left: 50%;
  width: 4px;
  height: 4px;
  animation-duration: 5.5s;
  animation-delay: 2.5s;
}

.bubble-4 {
  left: 70%;
  width: 7px;
  height: 7px;
  animation-duration: 6.5s;
  animation-delay: 1.5s;
}

.bubble-5 {
  left: 85%;
  width: 5px;
  height: 5px;
  animation-duration: 5.2s;
  animation-delay: 3s;
}

.bubble-6 {
  left: 25%;
  width: 4px;
  height: 4px;
  animation-duration: 6.8s;
  animation-delay: 4s;
}

@keyframes bubble-rise {
  0% {
    bottom: -10px;
    opacity: 0;
    transform: translateX(0px) scale(0.5);
  }
  5% {
    opacity: 0.9;
  }
  15% {
    opacity: 1;
    transform: translateX(5px) scale(1);
  }
  85% {
    opacity: 1;
  }
  100% {
    bottom: 100%;
    opacity: 0;
    transform: translateX(30px) scale(0.3);
  }
}

/* ===== GAS ANIMATIONS (Flow & Energy) ===== */
.gas-energy {
  animation: gas-pulse 3s ease-in-out infinite;
}

@keyframes gas-pulse {
  0%, 100% {
    box-shadow: 0 0 35px rgba(245, 158, 11, 0.5), 0 0 70px rgba(245, 158, 11, 0.3);
  }
  50% {
    box-shadow: 0 0 50px rgba(245, 158, 11, 0.7), 0 0 100px rgba(245, 158, 11, 0.4);
  }
}

.gas-flow {
  position: absolute;
  width: 100%;
  height: 30px;
  background: linear-gradient(90deg, transparent 0%, rgba(245, 158, 11, 0.3) 20%, rgba(245, 158, 11, 0.5) 50%, rgba(245, 158, 11, 0.3) 80%, transparent 100%);
  opacity: 0;
  animation: gas-flow-move linear infinite;
}

.gas-flow-1 {
  top: 20%;
  animation-duration: 8s;
  animation-delay: 0s;
  transform: rotate(-10deg);
}

.gas-flow-2 {
  top: 50%;
  animation-duration: 10s;
  animation-delay: 2s;
  transform: rotate(5deg);
}

.gas-flow-3 {
  top: 75%;
  animation-duration: 7s;
  animation-delay: 4s;
  transform: rotate(-5deg);
}

@keyframes gas-flow-move {
  0% {
    left: -100%;
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  85% {
    opacity: 0.8;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

.gas-noise {
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 80% 40%, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 1px, transparent 1px),
    radial-gradient(circle at 90% 70%, rgba(245, 158, 11, 0.1) 1px, transparent 1px);
  background-size: 50px 50px, 70px 70px, 60px 60px, 40px 40px;
  animation: gas-noise-move 20s linear infinite;
}

@keyframes gas-noise-move {
  0% {
    background-position: 0 0, 0 0, 0 0, 0 0;
  }
  100% {
    background-position: 50px 50px, -70px 70px, 60px -60px, -40px 40px;
  }
}
</style>