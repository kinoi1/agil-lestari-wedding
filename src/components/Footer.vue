<template>
  <footer class="bg-primary-800 text-white py-12">
    <div class="container-max section-padding">
      <div class="text-center">
        <!-- Couple Names -->
        <h3 class="font-playfair text-3xl font-bold mb-4">
          Alexander & Isabella
        </h3>
        
        <!-- Wedding Date -->
        <p class="text-primary-200 text-lg mb-8">
          {{ formattedWeddingDate }}
        </p>
        
        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mb-8">
          <a 
            href="https://instagram.com/alex_isabella_wedding" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-12 h-12 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="mailto:wedding@alexisabella.com" 
            class="w-12 h-12 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
          
          <a 
            href="tel:+628123456789" 
            class="w-12 h-12 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300 group"
          >
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </a>
        </div>
        
        <!-- Contact Info -->
        <div class="grid md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h4 class="font-semibold text-primary-200 mb-2">Contact Alexander</h4>
            <p class="text-primary-300">+62 812-3456-7890</p>
            <p class="text-primary-300">alexander@email.com</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-primary-200 mb-2">Contact Isabella</h4>
            <p class="text-primary-300">+62 812-9876-5432</p>
            <p class="text-primary-300">isabella@email.com</p>
          </div>
          
          <div>
            <h4 class="font-semibold text-primary-200 mb-2">Wedding Organizer</h4>
            <p class="text-primary-300">Bali Weddings Co.</p>
            <p class="text-primary-300">+62 361-123-4567</p>
          </div>
        </div>
        
        <!-- Navigation Links -->
        <div class="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#cover" class="text-primary-300 hover:text-white transition-colors duration-200">Home</a>
          <a href="#couple" class="text-primary-300 hover:text-white transition-colors duration-200">Couple</a>
          <a href="#events" class="text-primary-300 hover:text-white transition-colors duration-200">Events</a>
          <a href="#countdown" class="text-primary-300 hover:text-white transition-colors duration-200">Countdown</a>
          <a href="#gallery" class="text-primary-300 hover:text-white transition-colors duration-200">Gallery</a>
          <a href="#guestbook" class="text-primary-300 hover:text-white transition-colors duration-200">Guest Book</a>
        </div>
        
        <!-- Thank You Message -->
        <div class="bg-primary-700/50 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
          <h4 class="font-playfair text-xl font-semibold mb-2">Thank You</h4>
          <p class="text-primary-200 leading-relaxed">
            We are incredibly grateful for your love, support, and presence in our lives. 
            Your participation in our special day means the world to us.
          </p>
        </div>
        
        <!-- Copyright -->
        <div class="border-t border-primary-700 pt-6">
          <p class="text-primary-300 text-sm">
            © 2024 Alexander & Isabella Wedding. Made with ❤️ for our special day.
          </p>
          <p class="text-primary-400 text-xs mt-2">
            Website created with Vue.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const weddingDate = new Date('2024-08-15')

const formattedWeddingDate = computed(() => {
  return weddingDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>