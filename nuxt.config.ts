import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: {
    head: {
      title: 'Mimi | Personal Profile',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/avatar.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Silkscreen:wght@400;700&display=swap',
        },
      ],
    },
  },
})