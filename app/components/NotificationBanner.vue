<script setup lang="ts">
const show = ref(false)
onMounted(() => setTimeout(() => (show.value = true), 800))
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out motion-reduce:transition-none"
    enter-from-class="translate-x-8 opacity-0"
    leave-active-class="transition duration-300 motion-reduce:transition-none"
    leave-to-class="translate-x-8 opacity-0"
  >
    <div
      v-if="show"
      role="status"
      class="fixed right-4 top-14 z-50 flex w-[min(92vw,22rem)] items-center gap-3 rounded-2xl border border-white/70 bg-white/80 p-3 shadow-xl backdrop-blur-xl"
    >
      <span class="grid size-10 shrink-0 place-items-center rounded-lg bg-accent font-bold text-white">M</span>
      <div class="min-w-0 flex-1">
        <p class="text-sm font-semibold">Welcome to my profile</p>
        <p class="truncate text-xs text-muted">Tap the weekdays, open the folders, toggle my hobbies.</p>
      </div>
      <button
        type="button"
        class="grid size-7 shrink-0 place-items-center rounded-full text-lg text-muted hover:bg-ink/5"
        aria-label="Dismiss notification"
        @click="show = false"
      >
        &times;
      </button>
    </div>
  </Transition>
</template>