<template>
  <div
    :class="cn(
      'group/spotlight rounded-xl relative border border-neutral-800 bg-transparent dark:border-neutral-800 h-full w-full',
      className
    )"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    v-bind="$attrs"
  >
    <!-- Static Canvas Reveal Effect Background -->
    <div class="absolute inset-0 rounded-xl">
      <UiCanvasRevealEffect
        :animation-speed="5"
        container-class-name="bg-transparent absolute inset-0 pointer-events-none rounded-xl"
        :colors="colors"
        :dot-size="3"
      />
    </div>
    
    <!-- Motion spotlight overlay with mask - only on hover -->
    <div
      v-motion
      class="pointer-events-none absolute z-10 -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
      :style="{
        backgroundColor: color,
        maskImage: `radial-gradient(${radius}px circle at ${mouseX}px ${mouseY}px, white, transparent 70%)`
      }"
    />
    
    <!-- Content -->
    <div class="relative z-20 h-full w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  radius?: number
  color?: string
  className?: string
  colors?: number[][]
}

const props = withDefaults(defineProps<Props>(), {
  radius: 250, // Smaller radius
  color: 'rgba(38, 38, 38, 0.3)', // Less bright
  colors: () => [
    [59, 130, 246],
    [139, 92, 246],
  ]
})

defineOptions({
  inheritAttrs: false,
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovering = ref(false)
let lastUpdate = 0

const handleMouseMove = (event: MouseEvent) => {
  const now = Date.now()
  // Throttle mouse updates to reduce rendering frequency
  if (now - lastUpdate < 16) return // ~60fps max
  lastUpdate = now
  
  const currentTarget = event.currentTarget as HTMLDivElement
  const { left, top } = currentTarget.getBoundingClientRect()
  
  mouseX.value = event.clientX - left
  mouseY.value = event.clientY - top
}

const handleMouseEnter = () => {
  isHovering.value = true
}

const handleMouseLeave = () => {
  isHovering.value = false
}
</script>