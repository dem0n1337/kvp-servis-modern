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
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
        <p class="text-xl text-primary-pale">Sme tu pre vás</p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="py-16 bg-gradient-to-br from-primary-neutral to-primary-light/30 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <!-- Interactive Map - Top Section -->
        <div class="w-full mb-16">
          <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">Kde nás nájdete</h2>
          <ClientOnly>
            <BusinessMap />
            <template #fallback>
              <div class="w-full h-96 rounded-xl overflow-hidden border border-primary-medium/20 shadow-lg bg-gray-100 flex items-center justify-center">
                <p class="text-gray-500">Načítavam mapu...</p>
              </div>
            </template>
          </ClientOnly>
        </div>

        <!-- Contact Details and Form in 2 columns -->
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Details -->
          <div>
            <h2 class="text-3xl font-bold text-primary-dark mb-8">Kontaktné údaje</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Address -->
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-800 mb-1">Adresa</h3>
                  <p class="text-sm text-gray-600">
                    Ružová 406/24<br>
                    900 26 Slovenský Grob<br>
                    Slovenská republika
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-800 mb-1">Telefón</h3>
                  <p class="text-sm text-gray-600">
                    <a href="tel:+421918572389" class="text-red-600 hover:text-red-700 font-semibold">
                      +421 918 572 389
                    </a>
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-800 mb-1">Email</h3>
                  <p class="text-sm text-gray-600">
                    <a href="mailto:marcel.jezik@kvp-servis.sk" class="text-red-600 hover:text-red-700 font-semibold">
                      marcel.jezik@kvp-servis.sk
                    </a>
                  </p>
                </div>
              </div>

              <!-- Operating Hours -->
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-base font-semibold text-gray-800 mb-1">Prevádzkové hodiny</h3>
                  <p class="text-sm text-gray-600">
                    Pondelok - Nedeľa<br>
                    9:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            <!-- Service Area -->
            <div class="mt-12">
              <h3 class="text-xl font-semibold text-gray-800 mb-4">Oblasť pôsobenia</h3>
              <p class="text-gray-600 mb-4">
                Naše služby poskytujeme primárne v Bratislavskom kraji a okolí. 
                Pre väčšie projekty sme ochotní cestovať aj ďalej.
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-8">Napíšte nám</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-semibold text-primary-dark mb-2">
                  Meno a priezvisko *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-primary-medium/30 bg-white/90 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-primary-bright focus:border-primary-bright focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="Vaše meno"
                >
              </div>

              <div>
                <label for="email" class="block text-sm font-semibold text-primary-dark mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-primary-medium/30 bg-white/90 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-primary-bright focus:border-primary-bright focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="vas@email.sk"
                >
              </div>

              <div>
                <label for="phone" class="block text-sm font-semibold text-primary-dark mb-2">
                  Telefón
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="w-full px-4 py-3 border border-primary-medium/30 bg-white/90 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-primary-bright focus:border-primary-bright focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                  placeholder="+421 xxx xxx xxx"
                >
              </div>

              <div>
                <label for="service" class="block text-sm font-semibold text-primary-dark mb-2">
                  Typ služby
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full px-4 py-3 border border-primary-medium/30 bg-white/90 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-primary-bright focus:border-primary-bright focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <option value="">Vyberte typ služby</option>
                  <option value="kurenie">Kúrenie</option>
                  <option value="voda">Voda</option>
                  <option value="plyn">Plyn</option>
                  <option value="servis">Servis a údržba</option>
                  <option value="konzultacia">Konzultácia</option>
                  <option value="ine">Iné</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-semibold text-primary-dark mb-2">
                  Správa *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-primary-medium/30 bg-white/90 backdrop-blur-sm rounded-xl focus:ring-2 focus:ring-primary-bright focus:border-primary-bright focus:bg-white transition-all duration-300 shadow-sm hover:shadow-md resize-vertical"
                  placeholder="Opíšte prosím vašu požiadavku..."
                ></textarea>
              </div>

              <div class="flex justify-center">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
                >
                <svg v-if="isSubmitting" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                </svg>
                <svg v-else class="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
                <span v-if="isSubmitting">Odosielanie...</span>
                <span v-else>Odoslať správu</span>
                </button>
              </div>


              <!-- Success/Error Messages -->
              <div v-if="submitMessage" class="p-4 rounded-lg" :class="submitSuccess ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Emergency Contact -->
    <section class="py-12 bg-emergency-red text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Potrebujete urgentný servis?</h2>
        <p class="text-white/90 mb-6">
          Pri poruchách kúrenia alebo vody volejte priamo na náš telefón
        </p>
        <a 
          href="tel:+421918572389" 
          class="rainbow-button group relative inline-flex h-11 cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-white transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--color-1),var(--color-2),var(--color-3),var(--color-4),var(--color-5),var(--color-6),var(--color-7))]"
        >
          <svg class="w-5 h-5 mr-2 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +421 918 572 389
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Kontakt - KVP-Servis | Kúrenie, voda a plyn',
  meta: [
    {
      name: 'description',
      content: 'Kontaktujte KVP-Servis: +421 918 572 389, marcel.jezik@kvp-servis.sk. Slovenský Grob, Bratislavský kraj.',
    },
    { property: 'og:title', content: 'Kontakt - KVP-Servis' },
    { property: 'og:description', content: 'Kontaktujte nás pre služby kúrenia, vody a plynu. Slovenský Grob, Bratislavský kraj.' },
    { property: 'og:url', content: 'https://kvp-servis.sk/kontakt' },
    { name: 'twitter:title', content: 'Kontakt - KVP-Servis' },
    { name: 'twitter:description', content: 'Kontaktujte nás pre služby kúrenia, vody a plynu. Slovenský Grob, Bratislavský kraj.' },
  ],
  link: [
    { rel: 'canonical', href: 'https://kvp-servis.sk/kontakt' },
  ],
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Send form data to our API endpoint
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        service: form.value.service,
        message: form.value.message
      }
    })
    
    // Reset form on success
    form.value = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    
    submitSuccess.value = true
    submitMessage.value = 'Ďakujeme za vašu správu! Email bol úspešne odoslaný. Ozveme sa vám čo najskôr.'
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    
  } catch (error) {
    console.error('Form submission error:', error)
    submitSuccess.value = false
    
    if (error.statusCode === 400) {
      submitMessage.value = 'Prosím vyplňte všetky povinné polia.'
    } else {
      submitMessage.value = 'Nastala chyba pri odosielaní správy. Skúste to prosím znovu alebo nás kontaktujte priamo na telefón +421 918 572 389.'
    }
  } finally {
    isSubmitting.value = false
  }
}
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