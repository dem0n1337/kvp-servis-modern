<template>
  <div
    @mouseenter="setHovered(true)"
    @mouseleave="setHovered(false)"
    class="border border-primary-medium/20 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-6 relative h-[30rem] rounded-2xl bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-primary-medium/40"
  >
    <!-- Corner Icons -->
    <Icon class="absolute h-4 w-4 -top-2 -left-2 text-primary-medium transition-all duration-300 group-hover/canvas-card:text-white" />
    <Icon class="absolute h-4 w-4 -bottom-2 -left-2 text-primary-medium transition-all duration-300 group-hover/canvas-card:text-white" />
    <Icon class="absolute h-4 w-4 -top-2 -right-2 text-primary-medium transition-all duration-300 group-hover/canvas-card:text-white" />
    <Icon class="absolute h-4 w-4 -bottom-2 -right-2 text-primary-medium transition-all duration-300 group-hover/canvas-card:text-white" />

    <!-- Canvas Reveal Effect -->
    <Transition
      enter-active-class="transition-opacity duration-300"
      leave-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="hovered" class="h-full w-full absolute inset-0 rounded-2xl overflow-hidden">
        <UiCanvasRevealEffect
          :animation-speed="animationSpeed"
          :container-class-name="containerClassName"
          :colors="colors"
          :dot-size="dotSize"
        />
      </div>
    </Transition>

    <!-- Content -->
    <div class="relative z-20 text-center h-full flex flex-col justify-center">
      <!-- Icon -->
      <div class="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 w-full mx-auto flex items-center justify-center mb-4">
        <div class="w-16 h-16 flex items-center justify-center">
          <img 
            :src="iconSrc" 
            :alt="`${title} icon`"
            class="w-12 h-12 object-contain"
            :class="iconClass"
          >
        </div>
      </div>
      
      <!-- Title -->
      <h3 class="text-2xl font-bold opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-primary-dark mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-300">
        {{ title }}
      </h3>
      
      <!-- Description -->
      <p class="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-primary-gray mt-4 group-hover/canvas-card:text-white/90 group-hover/canvas-card:-translate-y-2 transition duration-300 delay-75 px-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ServiceCardProps {
  title: string
  description: string
  iconSrc: string
  iconClass?: string
  animationSpeed?: number
  containerClassName?: string
  colors?: number[][]
  dotSize?: number
}

const props = withDefaults(defineProps<ServiceCardProps>(), {
  iconClass: '',
  animationSpeed: 3,
  containerClassName: 'bg-primary-dark',
  colors: () => [[58, 90, 168], [74, 107, 199]],
  dotSize: 2
})

const hovered = ref(false)

const setHovered = (value: boolean) => {
  hovered.value = value
}

// Icon component for corner decorations
const Icon = defineComponent({
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      v-bind="$attrs"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  `,
  inheritAttrs: false
})
</script>