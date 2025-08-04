<template>
  <component
    :is="as"
    :to="to"
    :href="href"
    :target="target"
    class="relative group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 overflow-hidden"
    :class="[
      variant === 'primary' ? primaryClasses : secondaryClasses,
      className
    ]"
    @mouseenter="startShimmer"
    @mouseleave="stopShimmer"
  >
    <!-- Shimmer Effect -->
    <div 
      v-if="showShimmer"
      class="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 transition-transform duration-700"
      :class="shimmerClass"
    ></div>
    
    <!-- Glow Effect -->
    <div 
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
      :class="variant === 'primary' ? 'bg-primary-accent' : 'bg-primary-medium'"
    ></div>
    
    <!-- Content -->
    <span class="relative z-10 flex items-center">
      <slot />
    </span>
    
    <!-- Border Glow -->
    <div 
      class="absolute inset-0 rounded-2xl border border-transparent group-hover:border-opacity-50 transition-all duration-300"
      :class="variant === 'primary' ? 'group-hover:border-white' : 'group-hover:border-primary-pale'"
    ></div>
  </component>
</template>

<script setup lang="ts">
interface HeroButtonProps {
  as?: string
  to?: string
  href?: string
  target?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

const props = withDefaults(defineProps<HeroButtonProps>(), {
  as: 'button',
  variant: 'primary',
  className: ''
})

const showShimmer = ref(false)
const shimmerClass = ref('')

const primaryClasses = 'bg-primary-medium text-white hover:bg-primary-light shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1'
const secondaryClasses = 'border-2 border-white text-white hover:bg-white hover:text-primary-medium backdrop-blur-sm hover:backdrop-blur-none transform hover:scale-105 hover:-translate-y-1'

const startShimmer = () => {
  showShimmer.value = true
  shimmerClass.value = 'translate-x-full'
  
  setTimeout(() => {
    shimmerClass.value = '-translate-x-full'
  }, 50)
}

const stopShimmer = () => {
  setTimeout(() => {
    showShimmer.value = false
    shimmerClass.value = ''
  }, 700)
}
</script>