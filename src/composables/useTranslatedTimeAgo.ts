import type { UseTimeAgoMessages, UseTimeAgoOptions, UseTimeAgoUnitNamesDefault } from '@vueuse/core'
import type { MaybeRefOrGetter } from 'vue'

const messages: UseTimeAgoMessages = {
  justNow: 'gerade eben',
  past: (n: string) => n.match(/\d/) ? `vor ${n}` : n,
  future: (n: string) => n.match(/\d/) ? `in ${n}` : n,
  month: (n: number, past: boolean) => n === 1
    ? past
      ? 'Letzten Monat'
      : 'Nächsten Monat'
    : `${n} Monat${n > 1 ? 'e' : ''}`,
  year: (n: number, past: boolean) => n === 1
    ? past
      ? 'Letztes Jahr'
      : 'Nächstes Jahr'
    : `${n} year${n > 1 ? 's' : ''}`,
  day: (n: number, past: boolean) => n === 1
    ? past
      ? 'gestern'
      : 'morgen'
    : `${n} Tag${n > 1 ? 'e' : ''}`,
  week: (n: number, past: boolean) => n === 1
    ? past
      ? 'letzte Woche'
      : 'nächste Woche'
    : `${n} Woche${n > 1 ? 'n' : ''}`,
  hour: (n: number) => `${n} Stunde${n > 1 ? 'n' : ''}`,
  minute: (n: number) => `${n} Minute${n > 1 ? 'n' : ''}`,
  second: (n: number) => `${n} Sekunde${n > 1 ? 'n' : ''}`,
  invalid: 'Ungültiges Datum',
}

export function useTranslatedTimeAgo(time: MaybeRefOrGetter<Date | number | string>, options?: UseTimeAgoOptions<false, UseTimeAgoUnitNamesDefault> | undefined) {
  return useTimeAgo(time, {
    ...options,
    messages,
  })
}
