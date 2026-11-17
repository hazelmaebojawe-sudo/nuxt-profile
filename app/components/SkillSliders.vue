<script setup lang="ts">
const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'Vue / Nuxt', level: 60 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Git & GitHub', level: 65 },
]

const ready = ref(false)
onMounted(() => requestAnimationFrame(() => (ready.value = true)))
</script>

<template>
  <ul class="space-y-6">
    <li v-for="s in skills" :key="s.name">
      <div class="mb-2 flex justify-between text-sm font-semibold">
        <span>{{ s.name }}</span>
        <span class="font-mono text-muted">{{ s.level }}</span>
      </div>
      <div class="relative h-2 rounded-full bg-line/70">
        <div
          class="h-full rounded-full bg-accent transition-[width] duration-1000 ease-out motion-reduce:transition-none"
          :style="{ width: ready ? `${s.level}%` : '0%' }"
        />
        <span
          class="absolute top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md ring-1 ring-black/10 transition-[left] duration-1000 ease-out motion-reduce:transition-none"
          :style="{ left: ready ? `${s.level}%` : '0%' }"
        />
      </div>
    </li>
  </ul>
</template>