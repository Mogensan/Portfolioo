<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '@/data/projects.js'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug),
)

function goBack() {
  router.push({ name: 'home', hash: '#projects' })
}
</script>

<template>
  <main class="min-h-screen bg-surface pt-24 pb-24">
    <div class="max-w-4xl mx-auto px-6">

      <!-- Back link -->
      <button
        class="flex items-center gap-2 text-sm font-medium text-muted hover:text-brand transition-colors mb-10 focus:outline-none"
        @click="goBack"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </button>

      <!-- 404 state -->
      <div v-if="!project" class="text-center py-24">
        <p class="text-6xl font-heading font-bold text-brand mb-4">404</p>
        <p class="text-muted text-lg mb-8">Project not found.</p>
        <button
          class="px-6 py-3 bg-brand text-surface font-semibold rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#8f0015] transition-colors focus:outline-none"
          @click="goBack"
        >
          View All Projects
        </button>
      </div>

      <!-- Project content -->
      <template v-else>
        <!-- Thumbnail -->
        <div
          class="aspect-video w-full rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden bg-charcoal flex items-center justify-center mb-10 border-l-4 border-gold"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-full"
            :class="project.imageFit === 'contain' ? 'object-contain' : 'object-cover'"
          />
          <span
            v-else
            class="text-9xl font-heading font-bold select-none"
            style="color: rgba(212,175,55,0.2)"
            aria-hidden="true"
          >{{ project.title.charAt(0) }}</span>
        </div>

        <!-- Header -->
        <h1 class="text-4xl md:text-5xl font-heading font-bold text-brand mb-4 leading-tight">
          {{ project.title }}
        </h1>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="px-3 py-1 text-sm font-medium bg-white border border-gold/50 text-charcoal rounded"
          >
            {{ tech }}
          </span>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap gap-3 mb-12">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 border border-charcoal/20 rounded text-sm font-medium text-charcoal hover:border-brand hover:text-brand transition-colors"
          >
            View on GitHub
          </a>
          <a
            v-if="project.live"
            :href="project.live"
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-2.5 bg-brand text-surface rounded text-sm font-medium hover:bg-[#8f0015] transition-colors"
          >
            Live Demo
          </a>
        </div>

        <!-- Description -->
        <div class="bg-white rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-gold p-8">
          <h2 class="text-xl font-heading font-bold text-brand mb-4">About this project</h2>
          <p class="text-charcoal/80 leading-relaxed whitespace-pre-line">{{ project.description }}</p>
        </div>
      </template>
    </div>
  </main>
</template>
