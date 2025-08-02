<template>
  <section id="couple" data-aos="fade-right" class="py-20 bg-white duration-[800ms]" data-aos-duration="800" data-aos-delay="300">
    <div class="container-max section-padding">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-secondary">The Happy Couple</h2>
        <div class="w-24 h-1 bg-primary-400 mx-auto rounded-full"></div>
      </div>
      
      <!-- Couple Info Grid -->
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
        <!-- Groom -->
        <div class="text-center group">
          <div class="relative mb-8">
            <!-- Photo Placeholder -->
            <div class="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary-200 to-primary-300 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img 
                :src="groomPhoto" 
                :alt="coupleData.groomName"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <!-- Decorative Ring -->
            <div class="absolute -top-4 -right-4 w-8 h-8 bg-secondary-400 rounded-full opacity-70 animate-pulse"></div>
          </div>
          
          <div class="space-y-4">
            <h3 class="font-playfair text-3xl font-bold text-primary-800">{{ coupleData.groomName }}</h3>
            <p class="text-primary-600 font-medium">{{ coupleData.groomTitle }}</p>
            <p class="text-primary-500 leading-relaxed max-w-md mx-auto">
              {{ coupleData.groomDescription }}
            </p>
            
            <!-- Social Links -->
            <div class="flex justify-center space-x-4 pt-4">
              <a 
                :href="coupleData.groomInstagram" 
                class="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Bride -->
        <div class="text-center group">
          <div class="relative mb-8">
            <!-- Photo Placeholder -->
            <div class="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-secondary-200 to-secondary-300 overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img 
                :src="bridePhoto" 
                :alt="coupleData.brideName"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </div>
            <!-- Decorative Ring -->
            <div class="absolute -top-4 -left-4 w-8 h-8 bg-primary-400 rounded-full opacity-70 animate-pulse" style="animation-delay: 0.5s;"></div>
          </div>
          
          <div class="space-y-4">
            <h3 class="font-playfair text-3xl font-bold text-primary-800">{{ coupleData.brideName }}</h3>
            <p class="text-primary-600 font-medium">{{ coupleData.brideTitle }}</p>
            <p class="text-primary-500 leading-relaxed max-w-md mx-auto">
              {{ coupleData.brideDescription }}
            </p>
            
            <!-- Social Links -->
            <div class="flex justify-center space-x-4 pt-4">
              <a 
                :href="coupleData.brideInstagram" 
                class="w-10 h-10 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Love Story Quote -->
      <div class="text-center mt-16 max-w-3xl mx-auto">
        <blockquote class="font-playfair text-xl md:text-2xl text-primary-700 italic leading-relaxed">
          "{{ coupleData.loveQuote }}"
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const coupleData = {
  groomName: 'Alexander',
  groomTitle: 'Software Engineer',
  groomDescription: 'A passionate developer who loves creating beautiful digital experiences and exploring new technologies.',
  groomInstagram: 'https://instagram.com/alexander',
  
  brideName: 'Isabella',
  brideTitle: 'Interior Designer',
  brideDescription: 'A creative soul who transforms spaces into beautiful, functional environments filled with love and warmth.',
  brideInstagram: 'https://instagram.com/isabella',
  
  loveQuote: 'Two souls with but a single thought, two hearts that beat as one.'
}

const groomPhoto = 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
const bridePhoto = 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400'

const handleImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.style.display = 'none'
}
</script>