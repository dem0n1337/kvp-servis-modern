<template>
  <div
    class="rounded-3xl p-2 group"
    ref="spotlightCardRef"
  >
    <div
      :style="{
        '--x': `${x}px`,
        '--y': `${y}px`,
        '--spotlight-color-stops': `${color}, transparent`,
        '--spotlight-size': `${size}px`,
        '--glow-color': glowColor
      }"
      class="spotlight-card glow-border before:content-[''] before:h-full before:w-full before:absolute before:top-0 before:left-0 relative transform-gpu overflow-hidden rounded-2xl border-2 bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { UseMouseEventExtractor } from '@vueuse/core'
import { useMouse } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    color: string
    glowColor: string
    size?: number
  }>(),
  {
    color: 'rgba(255, 255, 255, 0.1)',
    glowColor: '#4a7ba7',
    size: 300
  }
)

const spotlightCardRef = ref<HTMLElement | null>(null)
const extractor: UseMouseEventExtractor = (event) =>
  event instanceof Touch ? null : [event.offsetX, event.offsetY]
const { x, y } = useMouse({ target: spotlightCardRef, type: extractor })
</script>

<style scoped>
.spotlight-card:before {
  opacity: 0;
  transition: opacity 0.3s;
  background-image: radial-gradient(
    var(--spotlight-size) circle at var(--x) var(--y),
    var(--spotlight-color-stops)
  );
}
.spotlight-card:hover:before {
  opacity: 1;
  transition: opacity 0.3s;
}

.glow-border {
  border-color: var(--glow-color);
  box-shadow: 
    0 0 10px rgba(var(--glow-color-rgb), 0.3),
    0 0 20px rgba(var(--glow-color-rgb), 0.2),
    inset 0 0 10px rgba(var(--glow-color-rgb), 0.1);
  transition: all 0.3s ease;
}

.glow-border:hover {
  box-shadow: 
    0 0 20px rgba(var(--glow-color-rgb), 0.6),
    0 0 40px rgba(var(--glow-color-rgb), 0.4),
    0 0 60px rgba(var(--glow-color-rgb), 0.2),
    inset 0 0 20px rgba(var(--glow-color-rgb), 0.1);
  border-color: var(--glow-color);
}

/* Define color variables for better glow effects */
.glow-border[style*="--glow-color: #ff6b35"] {
  --glow-color-rgb: 255, 107, 53;
}

.glow-border[style*="--glow-color: #4a7ba7"] {
  --glow-color-rgb: 74, 123, 167;
}

.glow-border[style*="--glow-color: #f59e0b"] {
  --glow-color-rgb: 245, 158, 11;
}

.glow-border[style*="--glow-color: #e74c3c"] {
  --glow-color-rgb: 231, 76, 60;
}
</style>