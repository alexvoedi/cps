import { breakpointsTailwind } from '@vueuse/core'

export function useMobile() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const mobile = ref(breakpoints.smallerOrEqual('md'))

  return mobile
}
