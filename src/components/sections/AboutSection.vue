<script setup>
import { useReveal } from '@/composables/useReveal'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { el, visible } = useReveal()

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
]
</script>

<template>
  <section id="about" class="py-24 bg-surface">
    <div class="max-w-6xl mx-auto px-6">
      <SectionTitle title="About Me" subtitle="A little background on who I am and what I do." />

      <div
        ref="el"
        class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <!-- Photo / Avatar -->
        <div class="flex justify-center lg:justify-start">
          <div
            class="relative w-64 h-64 rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-charcoal flex items-center justify-center border-l-4 border-gold"
          >
            <!--
              Replace the placeholder below with your actual photo:
              <img src="/avatar.jpg" alt="Anders Mogensen" class="w-full h-full object-cover" />
            -->
            <span
              class="text-8xl font-heading font-bold select-none"
              style="color: rgba(212,175,55,0.3)"
              aria-hidden="true"
            >AM</span>
          </div>
        </div>

        <!-- Bio -->
        <div>
          <h3 class="text-2xl font-heading font-bold text-brand mb-4">
            Full Stack Developer
          </h3>
          <p class="text-charcoal/80 leading-relaxed mb-4">
            I'm Anders — a developer passionate about building things that work well and look great.
            I enjoy taking an idea from concept to a fully functional product, working across the
            entire stack.
          </p>
          <p class="text-charcoal/80 leading-relaxed mb-6">
            When I'm not coding, I'm exploring new technologies, contributing to open source, and
            refining my craft. I care about clean architecture, good documentation, and shipping
            software that people actually enjoy using.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-white rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-gold p-4 text-center"
            >
              <p class="text-2xl font-heading font-bold text-brand">{{ stat.value }}</p>
              <p class="text-xs text-muted mt-1">{{ stat.label }}</p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            download
            class="inline-block px-6 py-3 bg-gold text-charcoal font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#c09b2a] transition-colors"
          >
            <!-- Place your CV at public/resume.pdf to enable this download -->
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
