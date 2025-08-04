<template>
  <div 
    class="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl group"
    :class="[
      'border border-opacity-20',
      colorClasses.border,
      colorClasses.bg,
      className
    ]"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="cardRef"
  >
    <!-- Glare Effect -->
    <div 
      class="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      :style="glareStyle"
    ></div>
    
    <!-- Gradient Overlay -->
    <div 
      class="absolute inset-0 opacity-40"
      :class="colorClasses.gradient"
    ></div>
    
    <!-- Content -->
    <div class="relative z-10 p-6 h-full">
      <slot />
    </div>
    
    <!-- Border Glow -->
    <div 
      class="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-60"
      :class="colorClasses.borderGlow"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface GlareCardProps {
  className?: string
  variant?: 'fire' | 'water' | 'gas' | 'default'
}

const props = withDefaults(defineProps<GlareCardProps>(), {
  className: '',
  variant: 'default'
})

const cardRef = ref<HTMLElement>()
const glareStyle = ref({})

const colorClasses = computed(() => {
  switch (props.variant) {
    case 'fire':
      return {
        bg: 'bg-gradient-to-br from-heating-light/80 to-warm-card',
        border: 'border-heating-primary/30',
        gradient: 'bg-gradient-to-br from-heating-primary/15 to-heating-accent/15',
        borderGlow: 'shadow-[inset_0_0_30px_rgba(186,122,91,0.4)]',
        glare: 'from-heating-primary/60 via-heating-accent/60 to-warm-light/60'
      }
    case 'water':
      return {
        bg: 'bg-gradient-to-br from-water-light/80 to-primary-pale/60',
        border: 'border-water-primary/30',
        gradient: 'bg-gradient-to-br from-water-primary/15 to-water-accent/15',
        borderGlow: 'shadow-[inset_0_0_30px_rgba(74,107,199,0.4)]',
        glare: 'from-water-primary/60 via-water-accent/60 to-primary-accent/60'
      }
    case 'gas':
      return {
        bg: 'bg-gradient-to-br from-gas-light/80 to-warm-card',
        border: 'border-gas-primary/30',
        gradient: 'bg-gradient-to-br from-gas-primary/15 to-gas-accent/15',
        borderGlow: 'shadow-[inset_0_0_30px_rgba(211,147,109,0.4)]',
        glare: 'from-gas-primary/60 via-gas-accent/60 to-warm-accent/60'
      }
    default:
      return {
        bg: 'bg-gradient-to-br from-primary-pale/60 to-neutral-bg',
        border: 'border-primary-divider',
        gradient: 'bg-gradient-to-br from-primary-gray/10 to-primary-medium/10',
        borderGlow: 'shadow-[inset_0_0_30px_rgba(58,90,168,0.3)]',
        glare: 'from-primary-medium/60 via-primary-light/60 to-primary-accent/60'
      }
  }
})

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  
  const card = cardRef.value
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  const rotateX = (y - centerY) / 10
  const rotateY = (centerX - x) / 10
  
  glareStyle.value = {
    background: `radial-gradient(circle at ${x}px ${y}px, ${getGlareColors()})`,
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
  }
}

const handleMouseLeave = () => {
  glareStyle.value = {
    background: '',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  }
}

const getGlareColors = () => {
  const colors = colorClasses.value.glare
  return `rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 20%, transparent 70%`
}
</script>