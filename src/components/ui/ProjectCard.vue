<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  project: { type: Object, required: true },
})

const router = useRouter()

function openDetail() {
  router.push(`/projects/${props.project.slug}`)
}
</script>

<template>
  <article
    class="flex flex-col bg-surface rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-gold overflow-hidden hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-all duration-300 cursor-pointer group"
    @click="openDetail"
  >
    <!-- Thumbnail -->
    <div
      class="aspect-video w-full overflow-hidden flex items-center justify-center bg-charcoal"
      :class="{ 'relative': project.image }"
    >
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <!-- Placeholder: first letter with gradient overlay -->
      <span
        v-else
        class="text-7xl font-heading font-bold select-none"
        style="color: rgba(212,175,55,0.25)"
      >
        {{ project.title.charAt(0) }}
      </span>
    </div>

    <!-- Card body -->
    <div class="flex flex-col flex-1 p-6">
      <h3 class="text-lg font-heading font-bold text-charcoal mb-2">{{ project.title }}</h3>
      <p class="text-muted text-sm leading-relaxed mb-4 flex-1">{{ project.shortDesc }}</p>

      <!-- Tech tags -->
      <div class="flex flex-wrap gap-1.5 mb-5">
        <span
          v-for="tech in project.tech.slice(0, 5)"
          :key="tech"
          class="px-2 py-0.5 text-xs font-medium bg-white border border-gold/40 text-charcoal rounded"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Action links — stop propagation so card click still works -->
      <div class="flex gap-2 mt-auto" @click.stop>
        <a
          v-if="project.github"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 text-center py-2 text-sm font-medium border border-charcoal/20 rounded text-charcoal hover:border-brand hover:text-brand transition-colors"
        >
          GitHub
        </a>
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          rel="noopener noreferrer"
          class="flex-1 text-center py-2 text-sm font-medium bg-brand text-surface rounded hover:bg-[#8f0015] transition-colors"
        >
          Live Demo
        </a>
        <button
          class="flex-1 py-2 text-sm font-medium border border-gold text-charcoal rounded hover:bg-gold transition-colors"
          @click="openDetail"
        >
          Details
        </button>
      </div>
    </div>
  </article>
</template>
