<script setup>
import { computed, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'
import { projects } from '@/data/projects.js'

const { el, visible } = useReveal()

const categories = computed(() => ['All', ...new Set(projects.map((project) => project.category))])
const activeFilter = ref('All')

function filteredProjects() {
  if (activeFilter.value === 'All') return projects
  return projects.filter((project) => project.category.toLowerCase() === activeFilter.value.toLowerCase())
}
</script>

<template>
  <section id="projects" class="py-24 bg-surface">
    <div class="max-w-6xl mx-auto px-6">
      <SectionTitle
        title="Projects"
        subtitle="A selection of things I've built. Click any card for the full case study."
      />

      <!-- Category filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          class="px-5 py-2 text-sm font-medium rounded border transition-colors focus:outline-none"
          :class="
            activeFilter === cat
              ? 'bg-brand text-surface border-brand'
              : 'bg-white text-charcoal border-charcoal/20 hover:border-brand hover:text-brand'
          "
          @click="activeFilter = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects grid -->
      <div
        ref="el"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <ProjectCard
          v-for="project in filteredProjects()"
          :key="project.slug"
          :project="project"
        />
      </div>

      <p
        v-if="filteredProjects().length === 0"
        class="text-center text-muted mt-12"
      >
        No projects in this category yet.
      </p>
    </div>
  </section>
</template>
