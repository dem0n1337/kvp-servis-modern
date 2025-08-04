<template>
  <div 
    class="relative flex overflow-hidden p-2"
    :class="[
      direction === 'left' ? 'flex-row' : 'flex-row-reverse',
      pauseOnHover && 'hover:[animation-play-state:paused]',
      className
    ]"
  >
    <div 
      class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
      :style="{ 
        '--gap': gap, 
        animationDuration: `${duration}ms`,
        animationDirection: reverse ? 'reverse' : 'normal'
      }"
    >
      <slot />
    </div>
    <div 
      class="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee"
      :style="{ 
        '--gap': gap, 
        animationDuration: `${duration}ms`,
        animationDirection: reverse ? 'reverse' : 'normal'
      }"
      aria-hidden="true"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  direction?: 'left' | 'right'
  speed?: number
  delay?: number
  gap?: string
}

const props = withDefaults(defineProps<MarqueeProps>(), {
  className: '',
  reverse: false,
  pauseOnHover: false,
  direction: 'left',
  speed: 1,
  delay: 0,
  gap: '1rem'
})

const duration = computed(() => {
  return 25000 / props.speed
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee var(--duration, 25s) linear infinite;
  animation-delay: var(--delay, 0s);
}
</style>