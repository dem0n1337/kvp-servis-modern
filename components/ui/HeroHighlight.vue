<template>
  <span 
    class="relative inline-block"
    @mouseenter="startHighlight"
  >
    <!-- Background Highlight -->
    <span 
      class="absolute inset-0 transform transition-all duration-500 ease-out"
      :class="highlightClass"
      :style="highlightStyle"
    ></span>
    
    <!-- Animated Underline -->
    <span 
      v-if="showUnderline"
      class="absolute bottom-0 left-0 h-1 transform transition-all duration-700 ease-out"
      :class="underlineClass"
      :style="underlineStyle"
    ></span>
    
    <!-- Text Content -->
    <span class="relative z-10">
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
interface HeroHighlightProps {
  color?: 'gradient' | 'heating' | 'water' | 'gas' | 'white'
  highlightType?: 'background' | 'underline' | 'both'
  animationDelay?: number
}

const props = withDefaults(defineProps<HeroHighlightProps>(), {
  color: 'gradient',
  highlightType: 'both',
  animationDelay: 0
})

const isHighlighted = ref(false)
const showUnderline = computed(() => props.highlightType === 'underline' || props.highlightType === 'both')

const highlightClass = computed(() => {
  if (props.highlightType === 'underline') return ''
  
  const baseClass = 'rounded-lg'
  
  switch (props.color) {
    case 'gradient':
      return `${baseClass} bg-gradient-to-r from-primary-medium/20 via-primary-accent/20 to-warm-accent/20`
    case 'heating':
      return `${baseClass} bg-heating-primary/20`
    case 'water':
      return `${baseClass} bg-water-primary/20`
    case 'gas':
      return `${baseClass} bg-gas-primary/20`
    case 'white':
      return `${baseClass} bg-white/20`
    default:
      return `${baseClass} bg-gradient-to-r from-primary-medium/20 via-primary-accent/20 to-warm-accent/20`
  }
})

const underlineClass = computed(() => {
  switch (props.color) {
    case 'gradient':
      return 'bg-gradient-to-r from-primary-medium via-primary-accent to-warm-accent'
    case 'heating':
      return 'bg-heating-primary'
    case 'water':
      return 'bg-water-primary'
    case 'gas':
      return 'bg-gas-primary'
    case 'white':
      return 'bg-white'
    default:
      return 'bg-gradient-to-r from-primary-medium via-primary-accent to-warm-accent'
  }
})

const highlightStyle = computed(() => ({
  transform: isHighlighted.value ? 'scaleX(1)' : 'scaleX(0)',
  transformOrigin: 'left center'
}))

const underlineStyle = computed(() => ({
  transform: isHighlighted.value ? 'scaleX(1)' : 'scaleX(0)',
  transformOrigin: 'left center'
}))

const startHighlight = () => {
  setTimeout(() => {
    isHighlighted.value = true
  }, props.animationDelay)
}

// Auto-trigger highlight after component mounts
onMounted(() => {
  setTimeout(() => {
    isHighlighted.value = true
  }, 1000 + props.animationDelay)
})
</script>