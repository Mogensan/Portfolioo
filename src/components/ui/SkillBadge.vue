<script setup>
defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <span
    class="inline-block px-3 py-1 text-sm font-medium text-charcoal border border-gold rounded bg-surface"
  >
    {{ name }}
  </span>
</template>
