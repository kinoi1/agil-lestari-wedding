<template>
  <section id="countdown" class="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
    <div class="container-max section-padding">
      <div class="text-center">
        <!-- Header -->
        <h2 class="font-playfair text-4xl md:text-5xl font-bold mb-4">
          Our Big Day
        </h2>
        <p class="text-primary-100 text-lg mb-12 max-w-2xl mx-auto">
          We can't wait to celebrate with you! Here's how much time is left until our wedding day.
        </p>
        
        <!-- Countdown Display -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-12">
          <div 
            v-for="(unit, index) in timeUnits" 
            :key="unit.label"
            class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-300 border border-white/20"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="text-3xl md:text-5xl font-bold font-playfair mb-2">
              {{ unit.value }}
            </div>
            <div class="text-primary-200 text-sm md:text-base font-medium uppercase tracking-wider">
              {{ unit.label }}
            </div>
          </div>
        </div>
        
        <!-- Wedding Date Display -->
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
          <h3 class="font-playfair text-2xl md:text-3xl font-semibold mb-2">
            {{ formattedWeddingDate }}
          </h3>
          <p class="text-primary-200">
            Mark your calendar and join us for this special celebration!
          </p>
        </div>
        
        <!-- Special Message -->
        <div v-if="isWeddingDay" class="mt-8 p-6 bg-secondary-500 rounded-2xl max-w-2xl mx-auto">
          <h3 class="font-playfair text-2xl font-bold mb-2">🎉 Today is the Day! 🎉</h3>
          <p class="text-white">
            Our wedding day has finally arrived! Thank you for being part of our special day.
          </p>
        </div>
        
        <div v-else-if="isPastWedding" class="mt-8 p-6 bg-primary-800/50 rounded-2xl max-w-2xl mx-auto">
          <h3 class="font-playfair text-2xl font-bold mb-2">💕 We're Married! 💕</h3>
          <p class="text-primary-100">
            Thank you to everyone who celebrated with us on our special day!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const weddingDate = new Date('2024-08-15T08:00:00')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
let countdownInterval: NodeJS.Timeout | null = null

const timeUnits = computed(() => [
  { value: days.value.toString().padStart(2, '0'), label: 'Days' },
  { value: hours.value.toString().padStart(2, '0'), label: 'Hours' },
  { value: minutes.value.toString().padStart(2, '0'), label: 'Minutes' },
  { value: seconds.value.toString().padStart(2, '0'), label: 'Seconds' }
])

const formattedWeddingDate = computed(() => {
  return weddingDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const isWeddingDay = computed(() => {
  const today = new Date()
  const wedding = new Date(weddingDate)
  return today.toDateString() === wedding.toDateString()
})

const isPastWedding = computed(() => {
  const today = new Date()
  return today > weddingDate && !isWeddingDay.value
})

const updateCountdown = () => {
  const now = new Date().getTime()
  const weddingTime = weddingDate.getTime()
  const difference = weddingTime - now

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
  } else {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
  }
}

onMounted(() => {
  updateCountdown()
  countdownInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval)
  }
})
</script>