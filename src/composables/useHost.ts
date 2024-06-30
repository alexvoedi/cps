export function useHost() {
  const params = useUrlSearchParams<{
    host?: string
  }>()

  const host = computed(() => {
    return params.host === 'true'
  })

  return host
}
