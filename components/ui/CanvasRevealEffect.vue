<template>
  <div :class="cn('h-full relative bg-transparent w-full', containerClassName)">
    <div class="h-full w-full">
      <canvas
        ref="canvasRef"
        class="absolute inset-0 w-full h-full"
        style="will-change: transform"
      />
    </div>
    <div 
      v-if="showGradient" 
      class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-xl" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { cn } from '~/lib/utils'

interface Props {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  animationSpeed: 0.4, // Back to original speed
  opacities: () => [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1], // Back to original
  colors: () => [[0, 255, 255]],
  dotSize: 3, // Back to original
  showGradient: true
})

const canvasRef = ref<HTMLCanvasElement>()
let animationId: number
let startTime = Date.now()
let lastFrameTime = 0
const targetFPS = 20 // Much lower FPS for power saving
let isVisible = ref(true)
let observer: IntersectionObserver

const PHI = 1.61803398874989484820459

const random = (x: number, y: number): number => {
  return Math.abs(Math.sin(Math.tan(Math.sqrt((x * PHI + y) * (x + y * PHI)) * 0.5)) * x) % 1
}

const resizeCanvas = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  const rect = canvas.getBoundingClientRect()
  // Low power canvas resolution
  canvas.width = rect.width * 1.25
  canvas.height = rect.height * 1.25
  canvas.style.width = rect.width + 'px'
  canvas.style.height = rect.height + 'px'
}

const animate = (currentTime: number = 0) => {
  const canvas = canvasRef.value
  if (!canvas || !isVisible.value) {
    animationId = requestAnimationFrame(animate)
    return
  }
  
  // Limit frame rate for better performance
  if (currentTime - lastFrameTime < 1000 / targetFPS) {
    animationId = requestAnimationFrame(animate)
    return
  }
  lastFrameTime = currentTime
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  const time = (Date.now() - startTime) * 0.001
  const totalSize = 14 // Larger particles for lower power consumption
  const dotSize = props.dotSize
  
  // Calculate centered positions like the shader
  const centerOffsetX = Math.abs(Math.floor(((canvas.width % totalSize) - dotSize) * 0.5))
  const centerOffsetY = Math.abs(Math.floor(((canvas.height % totalSize) - dotSize) * 0.5))
  
  for (let x = centerOffsetX; x < canvas.width; x += totalSize) {
    for (let y = centerOffsetY; y < canvas.height; y += totalSize) {
      const st2X = Math.floor(x / totalSize)
      const st2Y = Math.floor(y / totalSize)
      
      const frequency = 5.0
      const showOffset = random(st2X, st2Y)
      const rand = random(st2X * Math.floor((time / frequency) + showOffset + frequency) + 1.0, st2Y)
      
      let opacity = props.opacities[Math.floor(rand * 10)] || 0.5
      
      // Apply shader animation logic (back to original)
      const animationSpeedFactor = props.animationSpeed
      const centerX = canvas.width / 2.0 / totalSize
      const centerY = canvas.height / 2.0 / totalSize
      const introOffset = Math.sqrt((st2X - centerX) ** 2 + (st2Y - centerY) ** 2) * 0.01 + (random(st2X, st2Y) * 0.15)
      
      const timeProgress = time * animationSpeedFactor
      if (timeProgress >= introOffset) {
        const fadeProgress = Math.max(0, introOffset + 0.1 - timeProgress)
        opacity *= Math.min((1.0 - fadeProgress) * 1.25, 1.25)
      } else {
        opacity = 0
      }
      
      // Apply dot size masking
      const fracX = (x / totalSize) % 1
      const fracY = (y / totalSize) % 1
      const dotSizeRatio = dotSize / totalSize
      
      if (fracX >= dotSizeRatio || fracY >= dotSizeRatio) {
        opacity = 0
      }
      
      if (opacity > 0.03) {
        const colorIndex = Math.floor(showOffset * 6) % props.colors.length
        const color = props.colors[colorIndex] || [0, 255, 255]
        
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`
        ctx.fillRect(x, y, dotSize, dotSize)
      }
    }
  }
  
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  nextTick(() => {
    resizeCanvas()
    startTime = Date.now()
    animate()
    
    // Intersection observer to pause animation when not visible
    observer = new IntersectionObserver(
      (entries) => {
        isVisible.value = entries[0].isIntersecting
      },
      { threshold: 0.1 }
    )
    
    if (canvasRef.value) {
      observer.observe(canvasRef.value)
    }
  })
  
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  if (observer) {
    observer.disconnect()
  }
  window.removeEventListener('resize', resizeCanvas)
})
</script>