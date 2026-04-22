<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 60

  // Highlight the section whose top is closest above the viewport midpoint
  const ids = ['about', 'skills', 'projects', 'contact']
  let current = ''
  for (const id of ids) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      current = id
    }
  }
  activeSection.value = current
}

function scrollToTop() {
  menuOpen.value = false
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function scrollToSection(id) {
  menuOpen.value = false
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.08)] py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">

      <!-- Logo -->
      <button
        class="flex items-center gap-3 font-heading font-bold text-lg transition-colors focus:outline-none"
        :class="scrolled ? 'text-brand' : 'text-surface'"
        @click="scrollToTop"
        aria-label="Back to top"
      >
        <img
          src="/Anders Mogensen Logo.png"
          alt="AM"
          class="h-8 w-auto"
          @error="$event.target.style.display = 'none'"
        />
        <span>Anders Mogensen</span>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8" aria-label="Main navigation">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollToSection(link.id)"
          class="text-sm font-medium transition-colors focus:outline-none"
          :class="
            activeSection === link.id
              ? 'text-gold'
              : scrolled
                ? 'text-charcoal hover:text-brand'
                : 'text-surface/80 hover:text-surface'
          "
        >
          {{ link.label }}
        </button>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-6 h-0.5 transition-all duration-300 origin-center"
          :class="[scrolled ? 'bg-charcoal' : 'bg-surface', menuOpen ? 'rotate-45 translate-y-2' : '']"
        ></span>
        <span
          class="block w-6 h-0.5 transition-all duration-300"
          :class="[scrolled ? 'bg-charcoal' : 'bg-surface', menuOpen ? 'opacity-0' : '']"
        ></span>
        <span
          class="block w-6 h-0.5 transition-all duration-300 origin-center"
          :class="[scrolled ? 'bg-charcoal' : 'bg-surface', menuOpen ? '-rotate-45 -translate-y-2' : '']"
        ></span>
      </button>
    </div>

    <!-- Mobile menu dropdown -->
    <div
      v-show="menuOpen"
      class="md:hidden bg-surface border-t border-gold/20 px-6 py-4 flex flex-col gap-1"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollToSection(link.id)"
        class="text-sm font-medium text-charcoal hover:text-brand transition-colors py-2 text-left"
        :class="activeSection === link.id ? 'text-brand' : ''"
      >
        {{ link.label }}
      </button>
    </div>
  </header>
</template>
