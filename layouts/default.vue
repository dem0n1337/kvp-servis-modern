<template>
  <div class="min-h-screen bg-primary-neutral">
    <!-- Header -->
    <header class="bg-primary-dark text-white shadow-lg">
      <div class="container mx-auto px-4">
        <!-- Top Bar -->
        <div class="py-2 border-b border-primary-medium text-sm">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +421 918 572 389
              </span>
              <span class="flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                marcel.jezik@kvp-servis.sk
              </span>
            </div>
            <div class="text-sm">
              Po-Ne: 9:00-17:00
            </div>
          </div>
        </div>

        <!-- Main Header -->
        <div class="py-4">
          <div class="flex justify-between items-center">
            <div class="group cursor-pointer">
              <h1 class="text-2xl font-bold transform group-hover:scale-105 transition-transform duration-300">KVP-Servis</h1>
              <p class="text-primary-light text-sm group-hover:text-white transition-colors duration-300">Kúrenie, voda a plyn</p>
            </div>
            <nav class="hidden md:flex space-x-6">
              <NuxtLink 
                to="/" 
                class="hover:text-primary-light transition-all duration-300 font-semibold relative group px-2 py-1 rounded-lg hover:bg-primary-medium/30"
              >
                Domov
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-bright group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>
              <NuxtLink 
                to="/sluzby" 
                class="hover:text-primary-light transition-all duration-300 font-semibold relative group px-2 py-1 rounded-lg hover:bg-primary-medium/30"
              >
                Služby
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-bright group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>
              <NuxtLink 
                to="/fotogaleria" 
                class="hover:text-primary-light transition-all duration-300 font-semibold relative group px-2 py-1 rounded-lg hover:bg-primary-medium/30"
              >
                Fotogaléria
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-bright group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>
              <NuxtLink 
                to="/kontakt" 
                class="hover:text-primary-light transition-all duration-300 font-semibold relative group px-2 py-1 rounded-lg hover:bg-primary-medium/30"
              >
                Kontakt
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-bright group-hover:w-full transition-all duration-300"></span>
              </NuxtLink>
            </nav>
            <!-- Mobile menu button -->
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-primary-medium">
          <nav class="flex flex-col space-y-2">
            <NuxtLink to="/" class="hover:text-primary-light transition-colors font-semibold py-2" @click="mobileMenuOpen = false">Domov</NuxtLink>
            <NuxtLink to="/sluzby" class="hover:text-primary-light transition-colors font-semibold py-2" @click="mobileMenuOpen = false">Služby</NuxtLink>
            <NuxtLink to="/fotogaleria" class="hover:text-primary-light transition-colors font-semibold py-2" @click="mobileMenuOpen = false">Fotogaléria</NuxtLink>
            <NuxtLink to="/kontakt" class="hover:text-primary-light transition-colors font-semibold py-2" @click="mobileMenuOpen = false">Kontakt</NuxtLink>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Floating Contact Button -->
    <FloatingContactButton />

    <!-- Footer -->
    <footer class="bg-primary-medium text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary-light">KVP-Servis</h3>
            <p class="text-primary-light/80 mb-4">
              Profesionálne služby v oblasti kúrenia, vody a plynu. 
              Specializujeme sa na inštaláciu a servis kotlov značiek Buderus, Bosch, Junkers, Vaillant a Protherm.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary-light">Kontakt</h3>
            <div class="text-primary-light/80 space-y-2">
              <p>📍 Ružová 406/24, 900 26 Slovenský Grob</p>
              <p class="text-emergency-red font-semibold">📞 +421 918 572 389</p>
              <p>✉️ marcel.jezik@kvp-servis.sk</p>
              <p>🕒 Po-Ne: 9:00-17:00</p>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4 text-primary-light">Služby</h3>
            <ul class="text-primary-light/80 space-y-1">
              <li>• Inštalácia a servis kotlov</li>
              <li>• Podlahové kúrenie</li>
              <li>• Radiátorové systémy</li>
              <li>• Vodovodné inštalácie</li>
              <li>• Plynové inštalácie</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-primary-dark mt-8 pt-8 text-center text-primary-light/60">
          <p>&copy; 2025 KVP-Servis. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>