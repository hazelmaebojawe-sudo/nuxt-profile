<script setup lang="ts">
defineProps<{ email: string; location: string }>()
const open = ref(false)
</script>

<template>
  <button type="button" class="block w-full text-left" :aria-expanded="open" @click="open = !open">
    <span class="relative mt-20 block h-36">
      <span class="absolute inset-0 rounded-lg bg-sunny shadow-md" />
      <span
        class="absolute inset-x-4 top-3 block rounded bg-white p-3 text-sm shadow transition duration-500 motion-reduce:transition-none"
        :class="open ? '-translate-y-20 rotate-2' : ''"
      >
        <span class="block font-bold">{{ email }}</span>
        <span class="block">{{ location }}</span>
      </span>
      <span
        class="absolute inset-x-0 bottom-0 flex h-28 items-end justify-center rounded-b-lg bg-tomato pb-3 font-hand text-2xl text-deep"
        style="clip-path: polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)"
      >
        {{ open ? 'Say hi!' : "Let's contact! (click)" }}
      </span>
    </span>
  </button>
</template>