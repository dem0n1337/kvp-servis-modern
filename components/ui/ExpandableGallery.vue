<template>
  <div :class="cn('grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full', props.class)">
    <div
      v-for="(image, index) in images"
      :key="image"
      class="relative aspect-square cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      @click="openModal(index)"
    >
      <img
        class="relative h-full w-full object-cover"
        :src="image"
        :alt="image"
      />
    </div>
  </div>

  <!-- Modal for expanded image -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
    @click="closeModal"
  >
    <div class="relative max-h-full max-w-full">
      <img
        :src="images[currentImageIndex]"
        :alt="images[currentImageIndex]"
        class="max-h-screen max-w-screen object-contain"
        @click.stop
      />
      
      <!-- Close button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-colors"
      >
        ✕
      </button>
      
      <!-- Navigation arrows -->
      <button
        v-if="images.length > 1"
        @click.stop="previousImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors"
      >
        ‹
      </button>
      
      <button
        v-if="images.length > 1"
        @click.stop="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-colors"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

interface Props {
  images: string[];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();

// Modal state
const isModalOpen = ref(false);
const currentImageIndex = ref(0);

// Modal functions
const openModal = (index: number) => {
  currentImageIndex.value = index;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = ''; // Restore scrolling
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};

const previousImage = () => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? props.images.length - 1 
    : currentImageIndex.value - 1;
};

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!isModalOpen.value) return;
  
  switch (event.key) {
    case 'Escape':
      closeModal();
      break;
    case 'ArrowRight':
      nextImage();
      break;
    case 'ArrowLeft':
      previousImage();
      break;
  }
};

// Add/remove keyboard listener
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = ''; // Cleanup
});
</script>