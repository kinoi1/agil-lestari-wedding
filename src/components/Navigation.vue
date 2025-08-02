<template>
  <!-- Floating Navigation -->
  <nav 
    class="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300"
    :class="{ 'opacity-0 pointer-events-none': !showNav }"
  >
    <div class="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-primary-200">
      <div class="flex items-center space-x-6">
        <a 
          v-for="item in navItems" 
          :key="item.id"
          :href="`#${item.id}`"
          @click="scrollToSection(item.id)"
          class="text-primary-700 hover:text-primary-900 text-sm font-medium transition-colors duration-200 relative group"
          :class="{ 'text-primary-900': activeSection === item.id }"
        >
          {{ item.label }}
          <span 
            class="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
            :class="{ 'scale-x-100': activeSection === item.id }"
          ></span>
        </a>
      </div>
    </div>
  </nav>
  
  <!-- Mobile Menu Button -->
  <button
    @click="toggleMobileMenu"
    class="fixed top-6 right-6 z-50 md:hidden w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-primary-200 flex items-center justify-center"
    :class="{ 'opacity-0 pointer-events-none': !showNav }"
  >
    <svg class="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path v-if="!showMobileMenu" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
  
  <!-- Mobile Menu -->
  <div 
    v-if="showMobileMenu"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
    @click="closeMobileMenu"
  >
    <div class="absolute top-20 right-6 bg-white rounded-2xl shadow-xl border border-primary-200 p-4 min-w-48">
      <a 
        v-for="item in navItems" 
        :key="item.id"
        :href="`#${item.id}`"
        @click="scrollToSection(item.id, true)"
        class="block px-4 py-3 text-primary-700 hover:text-primary-900 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-primary-50"
        :class="{ 'text-primary-900 bg-primary-50': activeSection === item.id }"
      >
        {{ item.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const showNav = ref(false)
const showMobileMenu = ref(false)
const activeSection = ref('cover')

const navItems = [
  { id: 'cover', label: 'Home' },
  { id: 'couple', label: 'Couple' },
  { id: 'events', label: 'Events' },
  { id: 'countdown', label: 'Countdown' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'guestbook', label: 'Guest Book' }
]

let scrollTimeout: NodeJS.Timeout | null = null

const handleScroll = () => {
  // Show navigation after scrolling down a bit
  const scrollY = window.scrollY
  showNav.value = scrollY > 100
  
  // Determine active section
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
  
  scrollTimeout = setTimeout(() => {
    const sections = navItems.map(item => ({
      id: item.id,
      element: document.getElementById(item.id),
      offset: 0
    }))
    
    let currentSection = 'cover'
    
    for (const section of sections) {
      if (section.element) {
        const rect = section.element.getBoundingClientRect()
        if (rect.top <= 200 && rect.bottom >= 200) {
          currentSection = section.id
          break
        }
      }
    }
    
    activeSection.value = currentSection
  }, 100)
}

const scrollToSection = (sectionId: string, closeMobile = false) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  if (closeMobile) {
    closeMobileMenu()
  }
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const closeMobileMenu = () => {
  showMobileMenu.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (scrollTimeout) {
    clearTimeout(scrollTimeout)
  }
})
</script>