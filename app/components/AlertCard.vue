<script setup lang="ts">
const answer = ref<'later' | 'cancel' | null>(null)
</script>

<template>
  <div class="rounded-3xl border border-white bg-white/80 p-5 shadow-xl backdrop-blur-xl">
    <template v-if="!answer">
      <h2 class="text-lg font-bold">View my profile?</h2>
      <p class="mt-1 text-sm text-muted">It only takes a minute, and there are toggles and sliders to play with.</p>
      <div class="mt-5 space-y-2">
        <NuxtLink
          to="/profile"
          class="block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
        >
          Open profile
        </NuxtLink>
        <button
          type="button"
          class="block w-full rounded-full bg-blush py-3 text-sm font-semibold text-danger transition active:scale-[0.98]"
          @click="answer = 'later'"
        >
          Maybe later
        </button>
        <button
          type="button"
          class="block w-full rounded-full bg-ink/5 py-3 text-sm font-semibold transition active:scale-[0.98]"
          @click="answer = 'cancel'"
        >
          Cancel
        </button>
      </div>
    </template>
    <template v-else>
      <p class="text-sm font-semibold">
        {{ answer === 'later' ? "No worries, I'll be right here." : 'Cancelled. Nothing was opened.' }}
      </p>
      <button type="button" class="mt-3 text-sm font-semibold text-accent underline" @click="answer = null">Undo</button>
    </template>
  </div>
</template>