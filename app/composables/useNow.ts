export function useNow() {
  const now = ref<Date | null>(null)
  let timer: ReturnType<typeof setInterval>

  onMounted(() => {
    now.value = new Date()
    timer = setInterval(() => (now.value = new Date()), 15000)
  })
  onBeforeUnmount(() => clearInterval(timer))

  return now
}