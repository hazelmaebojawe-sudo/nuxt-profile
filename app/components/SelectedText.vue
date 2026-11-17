<template>
  <span class="relative inline-block bg-accent/20 px-3 text-ink">
    <slot />
    <span class="absolute left-0 top-0 h-full w-1.5 bg-accent" aria-hidden="true" />
    <span class="absolute -left-2 -top-2 size-5 rounded-full bg-accent" aria-hidden="true" />
    <span class="absolute right-0 top-0 h-full w-1.5 bg-accent" aria-hidden="true" />
    <span class="absolute -bottom-2 -right-2 size-5 rounded-full bg-accent" aria-hidden="true" />
  </span>
</template>