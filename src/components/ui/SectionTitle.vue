<script setup>
defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  light: { type: Boolean, default: false }, // white text for dark-bg sections
})
</script>

<template>
  <div class="text-center mb-16">
    <h2
      class="text-3xl md:text-4xl font-heading font-bold mb-3 leading-tight"
      :class="light ? 'text-surface' : 'text-brand'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="max-w-2xl mx-auto text-lg"
      :class="light ? 'text-surface/70' : 'text-muted'"
    >
      {{ subtitle }}
    </p>
    <!-- Decorative gold rule -->
    <div class="mt-4 mx-auto w-14 h-1 bg-gold rounded-full"></div>
  </div>
</template>
