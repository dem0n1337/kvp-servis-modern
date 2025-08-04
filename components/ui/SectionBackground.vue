<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <!-- Grid Pattern -->
    <div 
      v-if="pattern === 'grid'" 
      class="absolute inset-0 opacity-5"
      :style="{
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }"
    ></div>
    
    <!-- Dots Pattern -->
    <div 
      v-if="pattern === 'dots'"
      class="absolute inset-0 opacity-10"
      :style="{
        backgroundImage: `radial-gradient(circle, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }"
    ></div>
    
    <!-- Floating Shapes -->
    <div v-if="showShapes">
      <!-- Large primary shape -->
      <div 
        :class="`absolute ${primaryShapePosition} w-${primaryShapeSize} h-${primaryShapeSize} rounded-full blur-3xl opacity-20 animate-float`"
        :style="{ backgroundColor: primaryColor }"
      ></div>
      
      <!-- Medium secondary shape -->
      <div 
        :class="`absolute ${secondaryShapePosition} w-${secondaryShapeSize} h-${secondaryShapeSize} rounded-full blur-2xl opacity-15 animate-pulse`"
        :style="{ backgroundColor: secondaryColor, animationDelay: '1s' }"
      ></div>
      
      <!-- Small accent shapes -->
      <div 
        v-for="(shape, index) in accentShapes" 
        :key="index"
        :class="`absolute ${shape.position} w-${shape.size} h-${shape.size} rounded-full blur-xl opacity-10`"
        :style="{ 
          backgroundColor: shape.color,
          animationDelay: `${shape.delay}s`,
          animation: `${shape.animation} ${shape.duration}s ease-in-out infinite`
        }"
      ></div>
    </div>
    
    <!-- Gradient Overlays -->
    <div v-if="showGradients">
      <div 
        :class="`absolute ${gradientPosition} w-1/3 h-1/3 rounded-full blur-3xl opacity-10`"
        :style="{ background: `radial-gradient(circle, ${primaryColor}, transparent)` }"
      ></div>
      <div 
        :class="`absolute ${gradientPosition2} w-1/4 h-1/4 rounded-full blur-2xl opacity-5`"
        :style="{ background: `radial-gradient(circle, ${secondaryColor}, transparent)` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface SectionBackgroundProps {
  pattern?: 'grid' | 'dots' | 'none'
  primaryColor?: string
  secondaryColor?: string
  gridColor?: string
  showShapes?: boolean
  showGradients?: boolean
  variant?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'scattered'
}

const props = withDefaults(defineProps<SectionBackgroundProps>(), {
  pattern: 'none',
  primaryColor: '#4a7ba7',
  secondaryColor: '#e74c3c',
  gridColor: '#4a7ba7',
  showShapes: true,
  showGradients: true,
  variant: 'scattered'
})

// Define positions based on variant
const positions = {
  'top-left': {
    primary: 'top-10 left-10',
    secondary: 'top-1/4 left-1/4',
    gradient: 'top-0 left-0',
    gradient2: 'top-1/4 left-1/4'
  },
  'top-right': {
    primary: 'top-10 right-10',
    secondary: 'top-1/4 right-1/4',
    gradient: 'top-0 right-0',
    gradient2: 'top-1/4 right-1/4'
  },
  'bottom-left': {
    primary: 'bottom-10 left-10',
    secondary: 'bottom-1/4 left-1/4',
    gradient: 'bottom-0 left-0',
    gradient2: 'bottom-1/4 left-1/4'
  },
  'bottom-right': {
    primary: 'bottom-10 right-10',
    secondary: 'bottom-1/4 right-1/4',
    gradient: 'bottom-0 right-0',
    gradient2: 'bottom-1/4 right-1/4'
  },
  'center': {
    primary: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    secondary: 'top-1/3 left-1/3',
    gradient: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    gradient2: 'top-2/3 left-2/3'
  },
  'scattered': {
    primary: 'top-20 right-20',
    secondary: 'bottom-20 left-20',
    gradient: 'top-10 right-10',
    gradient2: 'bottom-10 left-10'
  }
}

const currentPosition = positions[props.variant]

const primaryShapePosition = currentPosition.primary
const secondaryShapePosition = currentPosition.secondary
const gradientPosition = currentPosition.gradient
const gradientPosition2 = currentPosition.gradient2

// Shape sizes
const primaryShapeSize = '64'
const secondaryShapeSize = '48'

// Accent shapes for scattered effect
const accentShapes = [
  {
    position: 'top-1/4 left-1/2',
    size: '20',
    color: props.primaryColor,
    delay: 0.5,
    animation: 'float',
    duration: 8
  },
  {
    position: 'bottom-1/3 right-1/3',
    size: '16',
    color: props.secondaryColor,
    delay: 1.5,
    animation: 'pulse',
    duration: 6
  },
  {
    position: 'top-2/3 left-1/4',
    size: '12',
    color: props.primaryColor,
    delay: 2,
    animation: 'float',
    duration: 10
  }
]
</script>