<template>
  <div class="flex min-h-screen flex-col grid-paper font-sans text-deep">
    <AppNav />
    <main class="flex-1 pb-16">
      <slot />
    </main>
    <footer class="bg-white py-6 text-center text-sm text-deep/70">
      &copy; {{ new Date().getFullYear() }} Mimi &middot; Built with Nuxt and Tailwind CSS
    </footer>
  </div>
</template>