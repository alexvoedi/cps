export function useTimer() {
  const time = ref(0)

  const timer = ref<number | null>(null)

  let startTime = 0
  let currentTime = 0
  let stopTime = 0

  const startTimer = () => {
    if (timer.value)
      return

    startTime = Date.now()

    timer.value = setInterval(() => {
      currentTime = Date.now()

      time.value += currentTime - startTime

      startTime = currentTime
    }, 100)
  }

  const stopTimer = () => {
    if (!timer.value)
      return

    stopTime = Date.now()

    time.value += stopTime - startTime

    clearInterval(timer.value)

    timer.value = null
  }

  const resetTimer = () => {
    stopTimer()

    time.value = 0
  }

  const formattedTime = computed(() => {
    const hours = Math.floor(time.value / 3600000)
    const minutes = Math.floor(time.value / 60000) % 60
    const seconds = Math.floor(time.value / 1000) % 60
    const tenths = Math.floor(time.value / 100) % 10

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(tenths)}`
  })

  const running = computed(() => timer.value !== null)

  return {
    time,
    formattedTime,
    running,
    startTimer,
    stopTimer,
    resetTimer,
  }
}
