<template>
  <section id="guestbook" class="py-20 bg-primary-50">
    <div class="container-max section-padding">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="heading-secondary">Guest Book</h2>
        <div class="w-24 h-1 bg-primary-400 mx-auto rounded-full mb-4"></div>
        <p class="text-primary-600 text-lg max-w-2xl mx-auto">
          Leave us your warmest wishes and prayers for our new journey together
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Guest Form -->
        <div class="card">
          <h3 class="font-playfair text-2xl font-semibold text-primary-800 mb-6">
            Share Your Wishes
          </h3>
          
          <form @submit.prevent="submitMessage" class="space-y-6">
            <!-- Name Input -->
            <div>
              <label for="guestName" class="block text-sm font-medium text-primary-700 mb-2">
                Your Name *
              </label>
              <input
                id="guestName"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter your full name"
                class="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                :class="{ 'border-red-500': errors.name }"
              />
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </div>
            
            <!-- Email Input (Optional) -->
            <div>
              <label for="guestEmail" class="block text-sm font-medium text-primary-700 mb-2">
                Email (Optional)
              </label>
              <input
                id="guestEmail"
                v-model="form.email"
                type="email"
                placeholder="your.email@example.com"
                class="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                :class="{ 'border-red-500': errors.email }"
              />
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </div>
            
            <!-- Attendance -->
            <div>
              <label class="block text-sm font-medium text-primary-700 mb-3">
                Will you attend our wedding? *
              </label>
              <div class="grid grid-cols-2 gap-4">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="form.attendance"
                    type="radio"
                    value="yes"
                    class="w-4 h-4 text-primary-600 border-primary-300 focus:ring-primary-500"
                  />
                  <span class="text-primary-700">Yes, I'll be there!</span>
                </label>
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    v-model="form.attendance"
                    type="radio"
                    value="no"
                    class="w-4 h-4 text-primary-600 border-primary-300 focus:ring-primary-500"
                  />
                  <span class="text-primary-700">Sorry, can't make it</span>
                </label>
              </div>
              <p v-if="errors.attendance" class="text-red-500 text-sm mt-1">{{ errors.attendance }}</p>
            </div>
            
            <!-- Message Input -->
            <div>
              <label for="guestMessage" class="block text-sm font-medium text-primary-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="guestMessage"
                v-model="form.message"
                rows="4"
                required
                placeholder="Share your wishes, prayers, or memories with us..."
                class="w-full px-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                :class="{ 'border-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
              <p class="text-primary-500 text-sm mt-1">{{ form.message.length }}/500 characters</p>
            </div>
            
            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary flex items-center justify-center space-x-2"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              <svg v-if="isSubmitting" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
            </button>
          </form>
          
          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Thank you for your message! It means a lot to us.</span>
            </div>
          </div>
        </div>
        
        <!-- Messages Display -->
        <div class="space-y-6">
          <h3 class="font-playfair text-2xl font-semibold text-primary-800 mb-6">
            Messages from Our Loved Ones
            <span class="text-lg font-normal text-primary-600">({{ messages.length }})</span>
          </h3>
          
          <!-- Messages List -->
          <div class="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            <div
              v-for="message in messages"
              :key="message.id"
              class="bg-white p-6 rounded-xl shadow-md border border-primary-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div class="flex items-start justify-between mb-3">
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                    <span class="text-primary-700 font-semibold text-sm">
                      {{ getInitials(message.name) }}
                    </span>
                  </div>
                  <div>
                    <h4 class="font-medium text-primary-800">{{ message.name }}</h4>
                    <p class="text-primary-500 text-sm">{{ formatDate(message.date) }}</p>
                  </div>
                </div>
                <span 
                  v-if="message.attendance === 'yes'"
                  class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
                >
                  Will Attend
                </span>
              </div>
              <p class="text-primary-700 leading-relaxed">{{ message.message }}</p>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-if="messages.length === 0" class="text-center py-12">
            <svg class="w-16 h-16 text-primary-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <p class="text-primary-500">Be the first to leave a message!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

interface GuestMessage {
  id: number
  name: string
  email?: string
  message: string
  attendance: 'yes' | 'no'
  date: Date
}

interface FormData {
  name: string
  email: string
  message: string
  attendance: 'yes' | 'no' | ''
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  attendance?: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  message: '',
  attendance: ''
})

const errors = reactive<FormErrors>({})
const messages = ref<GuestMessage[]>([])
const isSubmitting = ref(false)
const showSuccess = ref(false)

// Load messages from localStorage
const loadMessages = () => {
  const saved = localStorage.getItem('wedding-messages')
  if (saved) {
    const parsed = JSON.parse(saved)
    messages.value = parsed.map((msg: any) => ({
      ...msg,
      date: new Date(msg.date)
    }))
  }
}

// Save messages to localStorage
const saveMessages = () => {
  localStorage.setItem('wedding-messages', JSON.stringify(messages.value))
}

// Form validation
const validateForm = (): boolean => {
  const newErrors: FormErrors = {}
  
  if (!form.name.trim()) {
    newErrors.name = 'Name is required'
  } else if (form.name.trim().length < 2) {
    newErrors.name = 'Name must be at least 2 characters'
  }
  
  if (form.email && !isValidEmail(form.email)) {
    newErrors.email = 'Please enter a valid email address'
  }
  
  if (!form.message.trim()) {
    newErrors.message = 'Message is required'
  } else if (form.message.trim().length < 10) {
    newErrors.message = 'Message must be at least 10 characters'
  } else if (form.message.length > 500) {
    newErrors.message = 'Message must not exceed 500 characters'
  }
  
  if (!form.attendance) {
    newErrors.attendance = 'Please let us know if you can attend'
  }
  
  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Submit form
const submitMessage = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newMessage: GuestMessage = {
      id: Date.now(),
      name: form.name.trim(),
      email: form.email.trim() || undefined,
      message: form.message.trim(),
      attendance: form.attendance as 'yes' | 'no',
      date: new Date()
    }
    
    messages.value.unshift(newMessage)
    saveMessages()
    
    // Reset form
    form.name = ''
    form.email = ''
    form.message = ''
    form.attendance = ''
    Object.keys(errors).forEach(key => delete errors[key as keyof FormErrors])
    
    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting message:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Utility functions
const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  loadMessages()
})
</script>
