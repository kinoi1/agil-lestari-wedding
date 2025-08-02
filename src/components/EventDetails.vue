<template>
  <section id="events" class="py-20 bg-primary-50">
    <div class="container-max section-padding">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-secondary">Our Wedding Events</h2>
        <div class="w-24 h-1 bg-primary-400 mx-auto rounded-full mb-4"></div>
        <p class="text-primary-600 text-lg max-w-2xl mx-auto">
          Join us as we celebrate our love with family and friends
        </p>
      </div>
      
      <!-- Events Grid -->
      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Akad Nikah -->
        <div class="card group hover:scale-105">
          <div class="text-center">
            <!-- Icon -->
            <div class="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-300 transition-colors duration-300">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            
            <h3 class="font-playfair text-2xl font-bold text-primary-800 mb-4">Akad Nikah</h3>
            
            <!-- Date & Time -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">{{ akadDate }}</span>
              </div>
              
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="font-medium">{{ eventData.akad.time }}</span>
              </div>
              
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="font-medium">{{ eventData.akad.venue }}</span>
              </div>
            </div>
            
            <!-- Address -->
            <p class="text-primary-500 text-sm leading-relaxed mb-6">
              {{ eventData.akad.address }}
            </p>
            
            <!-- Map Button -->
            <a 
              :href="eventData.akad.mapUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>View Location</span>
            </a>
          </div>
        </div>
        
        <!-- Resepsi -->
        <div class="card group hover:scale-105">
          <div class="text-center">
            <!-- Icon -->
            <div class="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-300 transition-colors duration-300">
              <svg class="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            
            <h3 class="font-playfair text-2xl font-bold text-primary-800 mb-4">Wedding Reception</h3>
            
            <!-- Date & Time -->
            <div class="space-y-3 mb-6">
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span class="font-medium">{{ receptionDate }}</span>
              </div>
              
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span class="font-medium">{{ eventData.reception.time }}</span>
              </div>
              
              <div class="flex items-center justify-center space-x-2 text-primary-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="font-medium">{{ eventData.reception.venue }}</span>
              </div>
            </div>
            
            <!-- Address -->
            <p class="text-primary-500 text-sm leading-relaxed mb-6">
              {{ eventData.reception.address }}
            </p>
            
            <!-- Map Button -->
            <a 
              :href="eventData.reception.mapUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn-secondary inline-flex items-center space-x-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>View Location</span>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Additional Info -->
      <div class="text-center mt-12 max-w-2xl mx-auto">
        <div class="bg-white p-6 rounded-2xl shadow-lg">
          <h4 class="font-playfair text-xl font-semibold text-primary-800 mb-3">Important Notes</h4>
          <ul class="text-primary-600 space-y-2 text-sm">
            <li>• Please arrive 15 minutes before the ceremony</li>
            <li>• Dress code: Semi-formal / Traditional attire</li>
            <li>• For any questions, please contact us</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const eventData = {
  akad: {
    date: new Date('2024-08-15T08:00:00'),
    time: '08:00 - 10:00 WITA',
    venue: 'Masjid Al-Ikhlas',
    address: 'Jl. Raya Ubud No. 123, Gianyar, Bali 80571',
    mapUrl: 'https://maps.google.com'
  },
  reception: {
    date: new Date('2024-08-15T18:00:00'),
    time: '18:00 - 21:00 WITA',
    venue: 'The Mulia Resort',
    address: 'Jl. Raya Nusa Dua Selatan, Benoa, Badung, Bali 80363',
    mapUrl: 'https://maps.google.com'
  }
}

const akadDate = computed(() => {
  return eventData.akad.date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const receptionDate = computed(() => {
  return eventData.reception.date.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>