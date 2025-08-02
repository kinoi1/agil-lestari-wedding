<template>
  <section 
    id="cover" 
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary-200 rounded-full blur-3xl animate-float" style="animation-delay: -1s;"></div>
    </div>
    
    <!-- Main Content -->
    <div class="text-center z-10 section-padding max-w-4xl mx-auto">
      <!-- Wedding Rings Illustration -->
      <div class="mb-8 animate-scale-in">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-primary-200 rounded-full mb-6">
          <svg class="w-12 h-12 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
            <circle cx="12" cy="11" r="3"/>
          </svg>
        </div>
      </div>
      
      <!-- Save The Date -->
      <p class="text-primary-600 text-lg md:text-xl font-medium mb-4 animate-slide-down tracking-wider">
        Save The Date
      </p>
      
      <!-- Couple Names -->
      <h1 class="heading-primary mb-6 animate-fade-in" style="animation-delay: 0.2s;">
        {{ coupleData.groomName }}
        <span class="text-secondary-500 mx-4">&</span>
        {{ coupleData.brideName }}
      </h1>
      
      <!-- Wedding Date -->
      <p class="text-2xl md:text-3xl font-playfair text-primary-700 mb-8 animate-slide-up" style="animation-delay: 0.4s;">
        {{ formatWeddingDate }}
      </p>
      
      <!-- Location -->
      <p class="text-lg md:text-xl text-primary-600 mb-12 animate-slide-up" style="animation-delay: 0.6s;">
        {{ coupleData.location }}
      </p>
      
      <!-- CTA Button -->
      <button 
        @click="scrollToNextSection"
        class="btn-primary animate-scale-in"
        style="animation-delay: 0.8s;"
      >
        View Invitation
      </button>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const coupleData = {
  groomName: 'Alexander',
  brideName: 'Isabella',
  weddingDate: new Date('2024-08-15'),
  location: 'Bali, Indonesia'
}

const formatWeddingDate = computed(() => {
  return coupleData.weddingDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const scrollToNextSection = () => {
  const nextSection = document.getElementById('couple')
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>