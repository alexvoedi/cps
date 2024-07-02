import { describe, vitest } from 'vitest'
import { copyLink } from './copyLink'

describe('copyLink', (it) => {
  it('should copy the id to the clipboard', ({ expect }) => {
    const hostId = '123'
    const url = new URL('/cps/quiz', window.location.origin)
    const query = new URLSearchParams()
    query.set('hostId', hostId)
    url.search = query.toString()
    const writeText = vitest.fn()
    Object.assign(navigator, { clipboard: { writeText } })
    copyLink(hostId)
    expect(writeText).toHaveBeenCalledWith(url.toString())
  })
})
