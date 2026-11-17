<script setup lang="ts">
import { useNow } from '~/composables/useNow'

useHead({ title: 'Home | Mimi' })

const now = useNow()
const dateText = computed(() =>
  now.value?.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }) ?? '',
)
const timeText = computed(() =>
  now.value?.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) ?? '',
)

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
// Edit these to match your week
const plans = [
  'Classes and assignments',
  'Classes and assignments',
  'Classes and assignments',
  'Classes and assignments',
  'Classes + Side project day',
  'Rest and games',
  'Family and recharge',
]
const active = ref(0)
onMounted(() => (active.value = (new Date().getDay() + 6) % 7))
</script>

<template>
  <div>
    <NotificationBanner />

    <section class="mx-auto max-w-[1140px] px-6 pt-14 md:pt-20">
      <p class="font-mono text-xs uppercase tracking-widest text-muted">Personal profile &middot; 2026</p>
      <h1 class="mt-4 text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-[9rem]">
        Hi, I'm<br />
        <SelectedText>Mimi</SelectedText>
      </h1>
      <p class="mt-8 font-pixel text-3xl md:text-6xl">IT Student</p>
      <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        I enjoy building websites and learning how things work on the web. This site is my first
        Nuxt project.
      </p>
    </section>

    <section class="mx-auto mt-14 grid max-w-[1140px] gap-6 px-6 lg:grid-cols-[1fr_320px]">
      <div class="overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
        <div class="flex items-center gap-3 border-b border-line bg-white px-4 py-2.5">
          <span class="flex gap-2" aria-hidden="true">
            <i class="size-3 rounded-full bg-[#ff5f57]" />
            <i class="size-3 rounded-full bg-[#febc2e]" />
            <i class="size-3 rounded-full bg-[#28c840]" />
          </span>
          <span class="mx-auto font-mono text-xs text-muted">plans.jpg</span>
          <NuxtLink to="/profile" class="rounded-full border border-line px-3 py-1 text-xs font-semibold transition hover:bg-canvas">
            Open profile
          </NuxtLink>
        </div>

        <div class="relative">
          <img
            src="/hero.jpg"
            alt="Green alpine valley with jagged mountains under a blue sky"
            class="aspect-[4/5] w-full object-cover sm:aspect-[4/3] md:aspect-[16/10]"
          />

          <div class="absolute inset-x-3 bottom-3 rounded-[28px] border border-white/50 bg-black/15 p-5 text-white shadow-2xl backdrop-blur-xl md:inset-x-8 md:bottom-8 md:p-6">
            <div class="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p class="min-h-5 text-sm font-medium drop-shadow">{{ dateText }}</p>
                <p class="min-h-14 text-6xl font-semibold leading-none tracking-tight drop-shadow md:min-h-16 md:text-7xl">{{ timeText }}</p>
              </div>
              <div class="sm:text-right">
                <p class="text-sm font-medium drop-shadow">Butuan City, PH</p>
                <div class="mt-2 flex gap-2 sm:justify-end">
                  <span class="rounded-full bg-black/25 px-3 py-1.5 text-sm font-semibold">Nuxt</span>
                  <span class="rounded-full bg-black/25 px-3 py-1.5 text-sm font-semibold">Tailwind</span>
                </div>
              </div>
            </div>

            <div class="mt-5 flex justify-between gap-1" role="group" aria-label="Week at a glance">
              <button
                v-for="(d, i) in days"
                :key="d"
                type="button"
                :aria-pressed="active === i"
                class="rounded-full px-2 py-1.5 font-mono text-[11px] transition sm:px-4 sm:text-sm"
                :class="active === i ? 'bg-white text-ink' : 'text-white hover:bg-white/20'"
                @click="active = i"
              >
                {{ d }}
              </button>
            </div>
            <p class="mt-3 font-mono text-xs drop-shadow">{{ plans[active] }}</p>
          </div>
        </div>
      </div>

      <AlertCard class="self-start" />
    </section>

    <section class="mx-auto mt-12 max-w-[1140px] px-6">
      <p class="mb-5 font-mono text-xs uppercase tracking-widest text-muted">Jump to</p>
      <div class="flex flex-wrap gap-8">
        <FolderLink label="Personal" to="/profile#personal" />
        <FolderLink label="Education" to="/profile#education" />
        <FolderLink label="Skills" to="/profile#skills" />
        <FolderLink label="Hobbies" to="/profile#hobbies" />
      </div>
    </section>
  </div>
</template>