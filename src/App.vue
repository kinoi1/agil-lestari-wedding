<template>
  <div id="app" class="min-h-screen">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main>
      <!-- Cover Page -->
      <CoverPage />
      
      <!-- Couple Section -->
      <CoupleSection />
      
      <!-- Event Details -->
      <EventDetails />
      
      <!-- Countdown Timer -->
      <CountdownTimer />
      
      <!-- Photo Gallery -->
      <PhotoGallery />
      
      <!-- Guest Book -->
      <GuestBook />
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import CoverPage from './components/CoverPage.vue'
import CoupleSection from './components/CoupleSection.vue'
import EventDetails from './components/EventDetails.vue'
import CountdownTimer from './components/CountdownTimer.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import GuestBook from './components/GuestBook.vue'
import Footer from './components/Footer.vue'
</script>