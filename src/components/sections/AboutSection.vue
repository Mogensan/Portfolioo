<script setup>
import { useReveal } from '@/composables/useReveal'
import SectionTitle from '@/components/ui/SectionTitle.vue'

const { el, visible } = useReveal()
const VIDEO_CV_URL = 'https://youtu.be/FUNg6yoNYzs'
const TWITCH_URL = 'https://twitch.tv/mogensann'
const PHOTO_URL = encodeURI('/Anders Mogense potræt.jpg')

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '10+', label: 'Technologies' },
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
            class="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gold/25 ring-2 ring-gold/80"
          >
            <img
              :src="PHOTO_URL"
              alt="Anders Mogensen portræt"
              class="w-full h-full object-cover object-center rounded-xl border border-gold/70"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Bio -->
        <div>
          <h3 class="text-2xl font-heading font-bold text-brand mb-4">
            Multimedia Designer
          </h3>
          <p class="text-charcoal/80 leading-relaxed mb-4">
            I'm Anders, a multimedia designer focused on creating websites and the full visual
            experience that supports them, from user experience to launch-ready content.
          </p>
          <p class="text-charcoal/80 leading-relaxed mb-6">
            My work spans web design and development, UX, content creation, content management
            systems, photo editing, video editing, and branding. I enjoy building consistent
            identities across digital platforms and crafting content that looks polished,
            communicates clearly, and feels cohesive from first impression to final delivery.
          </p>
          <p class="text-sm text-muted mb-6">
            I am live on Twitch almost every day, and you are always welcome to watch and join the
            conversation at <a :href="TWITCH_URL" target="_blank" rel="noopener noreferrer" class="text-brand hover:underline">twitch.tv/mogensann</a>.
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

          <div class="flex flex-wrap items-center gap-3">
            <a
              href="/Anders Mogensen CV.pdf"
              download
              class="inline-block px-6 py-3 bg-gold text-charcoal font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#c09b2a] transition-colors"
            >
              <!-- Place your CV at public/resume.pdf to enable this download -->
              Download CV
            </a>

            <a
              :href="VIDEO_CV_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-6 py-3 bg-brand text-surface font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#8f0015] transition-colors"
            >
              <!-- Replace VIDEO_CV_URL above with your own video CV link -->
              Video CV
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
