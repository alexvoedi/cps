export function copyLink(id: string) {
  const url = new URL('/cps/quiz', window.location.origin)

  const query = new URLSearchParams()

  query.set('hostId', id)

  url.search = query.toString()

  try {
    navigator.clipboard.writeText(url.toString())
  }
  catch (error) {
    console.error('Failed to copy link:', error)
  }
}
