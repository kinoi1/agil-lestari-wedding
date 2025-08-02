<template>
  <section id="gallery" class="py-20 bg-white">
    <div class="container-max section-padding">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-secondary">Our Gallery</h2>
        <div class="w-24 h-1 bg-primary-400 mx-auto rounded-full mb-4"></div>
        <p class="text-primary-600 text-lg max-w-2xl mx-auto">
          Precious moments from our journey together
        </p>
      </div>
      
      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
          :class="getGridClass(index)"
          @click="openModal(index)"
        >
          <img 
            :src="photo.src" 
            :alt="photo.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 right-4">
              <p class="text-white font-medium text-sm">{{ photo.caption }}</p>
            </div>
          </div>
          
          <!-- View Icon -->
          <div class="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button 
          @click="loadMorePhotos"
          class="btn-secondary"
          v-if="!allPhotosLoaded"
        >
          Load More Photos
        </button>
      </div>
    </div>
    
    <!-- Modal -->
    <Teleport to="body">
      <div 
        v-if="showModal" 
        class="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="closeModal"
      >
        <div class="relative max-w-5xl max-h-[90vh] w-full">
          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors duration-200 z-10"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <!-- Photo -->
          <img 
            v-if="selectedPhoto"
            :src="selectedPhoto.src" 
            :alt="selectedPhoto.alt"
            class="w-full h-full object-contain rounded-lg shadow-2xl"
            @click.stop
          />
          
          <!-- Navigation -->
          <button 
            @click.stop="previousPhoto"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            v-if="currentPhotoIndex > 0"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            @click.stop="nextPhoto"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            v-if="currentPhotoIndex < photos.length - 1"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          
          <!-- Caption -->
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg" v-if="selectedPhoto">
            <p class="text-white text-center font-medium">{{ selectedPhoto.caption }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Photo {
  src: string
  alt: string
  caption: string
}

const showModal = ref(false)
const currentPhotoIndex = ref(0)
const displayedPhotoCount = ref(6)

const allPhotos: Photo[] = [
  {
    src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couple Portrait',
    caption: 'Our engagement photoshoot in the golden hour'
  },
  {
    src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding Rings',
    caption: 'The rings that symbolize our eternal love'
  },
  {
    src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Romantic Moment',
    caption: 'A quiet moment during our pre-wedding shoot'
  },
  {
    src: 'https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding Preparation',
    caption: 'Getting ready for the big day'
  },
  {
    src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couple Dancing',
    caption: 'Dancing under the stars'
  },
  {
    src: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding Bouquet',
    caption: 'Beautiful flowers for our special day'
  },
  {
    src: 'https://images.pexels.com/photos/1024974/pexels-photo-1024974.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couple Walking',
    caption: 'Walking together into our future'
  },
  {
    src: 'https://images.pexels.com/photos/1444430/pexels-photo-1444430.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding Details',
    caption: 'Every detail carefully planned with love'
  },
  {
    src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couple Sunset',
    caption: 'Watching the sunset together'
  }
]

const photos = computed(() => allPhotos.slice(0, displayedPhotoCount.value))
const allPhotosLoaded = computed(() => displayedPhotoCount.value >= allPhotos.length)
const selectedPhoto = computed(() => photos.value[currentPhotoIndex.value])

const getGridClass = (index: number) => {
  // Create varied heights for a masonry-like effect
  const patterns = [
    'h-64', 'h-80', 'h-72', 'h-64', 'h-80', 'h-72'
  ]
  return patterns[index % patterns.length]
}

const openModal = (index: number) => {
  currentPhotoIndex.value = index
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = 'auto'
}

const nextPhoto = () => {
  if (currentPhotoIndex.value < photos.value.length - 1) {
    currentPhotoIndex.value++
  }
}

const previousPhoto = () => {
  if (currentPhotoIndex.value > 0) {
    currentPhotoIndex.value--
  }
}

const loadMorePhotos = () => {
  displayedPhotoCount.value = Math.min(displayedPhotoCount.value + 6, allPhotos.length)
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!showModal.value) return
  
  switch (event.key) {
    case 'Escape':
      closeModal()
      break
    case 'ArrowLeft':
      previousPhoto()
      break
    case 'ArrowRight':
      nextPhoto()
      break
  }
}

document.addEventListener('keydown', handleKeydown)
</script>