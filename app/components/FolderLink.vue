<script setup lang="ts">
defineProps<{ label: string; to: string }>()
</script>

<template>
  <NuxtLink :to="to" class="group flex w-24 flex-col items-center gap-2 text-center focus-visible:outline-2 focus-visible:outline-accent">
    <svg viewBox="0 0 80 64" class="h-16 w-20 drop-shadow-md transition duration-200 group-hover:-translate-y-1 group-hover:scale-105 motion-reduce:transition-none" aria-hidden="true">
      <path d="M4 12a6 6 0 0 1 6-6h18l8 8h34a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z" fill="#3b8ff0" />
      <path d="M4 24a6 6 0 0 1 6-6h60a6 6 0 0 1 6 6v30a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z" fill="#7cc4ff" />
    </svg>
    <span class="text-sm font-semibold">{{ label }}</span>
  </NuxtLink>
</template>