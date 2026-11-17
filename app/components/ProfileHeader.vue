<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    tag?: string
    email?: string
    school?: string
    location?: string
    labelName?: boolean
    hello?: string
  }>(),
  { hello: "Hello, I'm" },
)
</script>

<template>
  <div>
    <div class="relative">
      <img
        src="/hero.jpg"
        alt="Green alpine valley with jagged mountains under a blue sky"
        class="h-72 w-full object-cover object-[50%_25%] md:h-96"
      />
      <SketchStar variant="sparkle" class="absolute left-[8%] top-8 h-14 w-14 rotate-12 md:h-20 md:w-20" />
      <SketchStar variant="rays" class="absolute right-[10%] top-8 h-20 w-20 md:h-28 md:w-28" />
      <SketchStar variant="star" color="#fffbc9" class="absolute left-[30%] top-24 h-8 w-8 -rotate-12 md:h-10 md:w-10" />
    </div>

    <div class="relative mx-auto -mt-56 max-w-3xl px-6">
      <figure
        class="relative z-10 mx-auto -mb-16 w-44 -rotate-3 bg-white p-2 pb-9 shadow-xl transition duration-300 hover:rotate-2 hover:scale-105 motion-reduce:transition-none md:w-52"
      >
        <img src="/mimi.JPG" :alt="`Profile photo of ${name}`" width="200" height="200" class="aspect-square w-full bg-frost object-cover" />
      </figure>

      <div class="overflow-hidden rounded-3xl bg-white shadow-lg">
        <div class="px-6 pb-10 pt-24 text-center">
          <span
            v-if="tag"
            class="inline-block rounded-md border-2 border-grass px-2 py-0.5 text-xs font-bold"
          >
            {{ tag }}
          </span>

          <p v-if="labelName" class="mt-4 font-hand text-3xl text-denim">{{ hello }}</p>
          <h1
            v-if="labelName"
            class="relative mx-auto mt-1 inline-block -rotate-3 border-2 border-dashed border-deep bg-denim/20 px-6 py-2 text-4xl font-bold tracking-tight md:text-5xl"
          >
            {{ name }}
            <span class="absolute -left-1.5 -top-1.5 size-3 bg-deep" />
            <span class="absolute -right-1.5 -top-1.5 size-3 bg-deep" />
            <span class="absolute -bottom-1.5 -left-1.5 size-3 bg-deep" />
            <span class="absolute -bottom-1.5 -right-1.5 size-3 bg-deep" />
          </h1>
          <h1 v-else class="mt-3 font-display text-4xl font-semibold md:text-5xl">{{ name }}</h1>

          <div class="mx-auto mt-5 h-1.5 w-16 rounded-full bg-tomato" />
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>