<template>
  <section class="py-12 bg-emergency-red relative overflow-hidden">
    <!-- Grid overlay with opacity -->
    <div class="absolute inset-0 opacity-20">
      <div 
        class="absolute inset-0"
        style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 40px 40px;"
      ></div>
    </div>
    
    <!-- Enhanced floating decorations -->
    <div class="absolute inset-0">
      <!-- Large floating shapes -->
      <div class="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-10 w-16 h-16 bg-white/5 rounded-full blur-xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-10 right-1/3 w-20 h-20 bg-white/8 rounded-full blur-2xl animate-bounce" style="animation-delay: 0.5s; animation-duration: 4s;"></div>
      
      <!-- Gradient overlays -->
      <div class="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl"></div>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-3xl font-bold text-center text-white mb-12">
        Pracujem s týmito značkami
      </h2>
      <p class="text-center text-white/90 mb-12 max-w-2xl mx-auto">
        Mám dlhoročné skúsenosti s inštaláciou a servisom kotlov od špičkových európskych výrobcov. 
        Všetky práce vykonávam podľa najvyšších štandardov kvality.
      </p>
      
      <!-- Animated Marquee -->
      <UiMarquee 
        :speed="0.5" 
        :pause-on-hover="true"
        gap="4rem"
        class="py-8"
      >
        <div 
          v-for="(brand, index) in brands" 
          :key="brand.name"
          :class="[
            'flex items-center justify-center transform hover:scale-110 transition-transform duration-300',
            index === 0 ? 'ml-24 mr-8' : 'mx-8'
          ]"
        >
          <img 
            :src="brand.logo" 
            :alt="`${brand.name} logo`"
            class="h-12 w-auto object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300 opacity-80 hover:opacity-100"
            loading="lazy"
          >
        </div>
      </UiMarquee>
    </div>
  </section>
</template>

<script setup>
const brands = [
  {
    name: 'Buderus',
    logo: '/images/brands/buderus.png'
  },
  {
    name: 'Vaillant', 
    logo: '/images/brands/vaillant.png'
  },
  {
    name: 'Viessmann',
    logo: '/images/brands/viesmann.png'
  },
  {
    name: 'Bosch',
    logo: '/images/brands/bosch.png'
  },
  {
    name: 'Protherm',
    logo: '/images/brands/protherm.png'
  },
  {
    name: 'Junkers',
    logo: '/images/brands/junkers.png'
  }
]
</script>