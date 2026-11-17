<script setup lang="ts">
import { useNow } from '~/composables/useNow'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profile' },
]

const now = useNow()
const clock = computed(() => {
  if (!now.value) return ''
  const d = now.value.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  const t = now.value.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
  return `${d}  ${t}`
})
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
    <nav class="mx-auto flex h-11 max-w-[1140px] items-center justify-between px-6 text-sm" aria-label="Main navigation">
      <div class="flex items-center gap-1">
        <NuxtLink to="/" class="mr-3 flex items-center gap-2 font-bold">
          <span class="size-4 rounded-full bg-accent" aria-hidden="true" />
          Mimi
        </NuxtLink>
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="rounded-md px-2.5 py-1 font-medium text-ink/80 transition hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-accent"
          exact-active-class="!bg-ink/10 !text-ink !font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
      <span class="hidden min-h-4 whitespace-pre font-mono text-xs text-muted sm:block">{{ clock }}</span>
    </nav>
  </header>
</template>