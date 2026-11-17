<script setup lang="ts">
withDefaults(defineProps<{ title: string; tilt?: number }>(), { tilt: 0 })
</script>

<template>
  <section
    class="relative rounded-3xl border-2 border-pistachio bg-white p-6 shadow-md md:p-8"
    :style="{ transform: `rotate(${tilt}deg)` }"
  >
    <span
      class="absolute -top-3 right-8 h-5 w-16 rotate-6 bg-butter/90 shadow-sm"
      aria-hidden="true"
    />
    <h2
     class="mb-5 inline-block -rotate-2 rounded-full border-4 border-grass bg-sunny px-5 py-1 font-display text-xl font-semibold text-deep shadow-sm"
    >
      {{ title }}
    </h2>
    <slot />
  </section>
</template>