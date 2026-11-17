<script setup lang="ts">
useHead({ title: 'Profile | Mimi' })

const tabs = [
  { id: 'personal', label: 'Personal', icon: 'bg-accent' },
  { id: 'education', label: 'Education', icon: 'bg-ios-green' },
  { id: 'skills', label: 'Skills', icon: 'bg-orange-400' },
  { id: 'hobbies', label: 'Hobbies', icon: 'bg-purple-500' },
]

const route = useRoute()
const active = ref('personal')
function fromHash() {
  const id = route.hash.slice(1)
  if (tabs.some((t) => t.id === id)) active.value = id
}
onMounted(fromHash)
watch(() => route.hash, fromHash)

// Replace with your own details
const info = [
  { label: 'Full name', value: 'Hazel Mae P. Bojawe' },
  { label: 'Age', value: '20 years old' },
  { label: 'Location', value: 'KM8, Ampayon, Butuan City, Philippines' },
  { label: 'School', value: 'Caraga State University' },
  { label: 'Email', value: 'bujawehazel@gmail.com' },
]

const education = [
  { year: '2023 - Now', school: 'Caraga State University', detail: 'BS in Information Technology' },
  { year: '2022 - 2023', school: 'Saint Michael College of Caraga', detail: 'Senior High School' },
  { year: '2017 - 2022', school: 'Nasipit National Vocational School', detail: 'Junior High School' },
]

const hobbies = ref([
  { name: 'Art', on: true },
  { name: 'Watching movies', on: true },
  { name: 'Playing video games', on: false },
  { name: 'Sleeping', on: true },
])
const interests = ['Web development', 'UI design', 'Open source']
</script>

<template>
  <div class="mx-auto max-w-[1140px] px-6 pt-10 md:pt-14">
    <p class="font-mono text-xs uppercase tracking-widest text-muted">Get to know me</p>
    <h1 class="mt-3 text-5xl font-extrabold tracking-tighter md:text-7xl">
      <SelectedText>Mimi</SelectedText>
    </h1>

    <div class="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-xl">
      <div class="flex items-center gap-3 border-b border-line px-4 py-2.5">
        <span class="flex gap-2" aria-hidden="true">
          <i class="size-3 rounded-full bg-[#ff5f57]" />
          <i class="size-3 rounded-full bg-[#febc2e]" />
          <i class="size-3 rounded-full bg-[#28c840]" />
        </span>
        <span class="mx-auto font-mono text-xs text-muted">Profile &mdash; {{ tabs.find((t) => t.id === active)?.label }}</span>
        <span class="w-12" />
      </div>

      <div class="grid md:grid-cols-[230px_1fr]">
        <aside class="border-b border-line bg-canvas p-4 md:border-b-0 md:border-r">
          <div class="mb-4 flex items-center gap-3 md:flex-col md:items-start">
            <img src="/mimi.JPG" alt="Photo of Mimi" width="80" height="80" class="size-16 rounded-full object-cover shadow ring-4 ring-white md:size-20" />
            <div>
              <p class="font-bold">Mimi</p>
              <p class="font-mono text-xs text-muted">IT Student</p>
            </div>
          </div>
          <nav class="flex gap-1 overflow-x-auto md:flex-col" aria-label="Profile sections">
            <button
              v-for="t in tabs"
              :key="t.id"
              type="button"
              :aria-current="active === t.id ? 'page' : undefined"
              class="flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition"
              :class="active === t.id ? 'bg-accent text-white' : 'hover:bg-ink/5'"
              @click="active = t.id"
            >
              <span class="size-5 rounded-md" :class="t.icon" aria-hidden="true" />
              {{ t.label }}
            </button>
          </nav>
        </aside>

        <section :key="active" class="rise min-h-[26rem] p-6 md:p-10">
          <template v-if="active === 'personal'">
            <h2 class="text-3xl font-bold tracking-tight">Personal</h2>
            <dl class="mt-6 divide-y divide-line/70 overflow-hidden rounded-2xl border border-line">
              <div v-for="item in info" :key="item.label" class="flex justify-between gap-4 px-4 py-3 text-sm">
                <dt class="text-muted">{{ item.label }}</dt>
                <dd class="text-right font-semibold">{{ item.value }}</dd>
              </div>
            </dl>
            <a
              href="mailto:you@example.com"
              class="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110 active:scale-[0.98]"
            >
              Email me
            </a>
          </template>

          <template v-else-if="active === 'education'">
            <h2 class="text-3xl font-bold tracking-tight">Education</h2>
            <ul class="mt-6 space-y-3">
              <li v-for="e in education" :key="e.school" class="flex items-start gap-4 rounded-2xl border border-line p-4">
                <span class="mt-0.5 shrink-0 rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">{{ e.year }}</span>
                <div>
                  <p class="font-semibold">{{ e.school }}</p>
                  <p class="text-sm text-muted">{{ e.detail }}</p>
                </div>
              </li>
            </ul>
          </template>

          <template v-else-if="active === 'skills'">
            <h2 class="mb-8 text-3xl font-bold tracking-tight">Skills</h2>
            <SkillSliders />
          </template>

          <template v-else>
            <h2 class="text-3xl font-bold tracking-tight">Hobbies</h2>
            <p class="mt-1 text-sm text-muted">Tap a switch to toggle.</p>
            <ul class="mt-6 divide-y divide-line/70 overflow-hidden rounded-2xl border border-line">
              <li v-for="h in hobbies" :key="h.name" class="flex items-center justify-between px-4 py-3">
                <span class="font-medium">{{ h.name }}</span>
                <button
                  type="button"
                  role="switch"
                  :aria-checked="h.on"
                  :aria-label="h.name"
                  class="relative h-7 w-12 rounded-full transition-colors"
                  :class="h.on ? 'bg-ios-green' : 'bg-line'"
                  @click="h.on = !h.on"
                >
                  <span
                    class="absolute left-0.5 top-0.5 size-6 rounded-full bg-white shadow transition-transform motion-reduce:transition-none"
                    :class="h.on ? 'translate-x-5' : ''"
                  />
                </button>
              </li>
            </ul>
            <h3 class="mb-3 mt-8 font-mono text-xs uppercase tracking-widest text-muted">Interests</h3>
            <ul class="flex flex-wrap gap-2">
              <li v-for="i in interests" :key="i" class="rounded-full border border-line px-4 py-1.5 text-sm font-semibold">{{ i }}</li>
            </ul>
          </template>
        </section>
      </div>
    </div>
  </div>
</template>