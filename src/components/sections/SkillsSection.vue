<script setup>
import { useReveal } from '@/composables/useReveal'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import { skills } from '@/data/skills.js'

const { el, visible } = useReveal()
</script>

<template>
  <section id="skills" class="py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <SectionTitle
        title="Skills"
        subtitle="Design, content, and production skills I use to build complete digital experiences."
      />

      <div
        ref="el"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div
          v-for="(group, index) in skills"
          :key="group.category"
          class="bg-surface rounded shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-l-4 border-gold p-8"
          :style="{ transitionDelay: `${index * 80}ms` }"
        >
          <h3 class="font-heading font-bold text-brand text-lg mb-5">{{ group.category }}</h3>
          <div class="flex flex-wrap gap-2">
            <SkillBadge v-for="skill in group.items" :key="skill" :name="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
