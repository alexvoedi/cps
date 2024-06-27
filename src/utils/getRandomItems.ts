export function getRandomIndices<T>(array: T[], count: number): number[] {
  const indices = Array.from({ length: array.length }, (_, i) => i)
  const shuffled = indices.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}
