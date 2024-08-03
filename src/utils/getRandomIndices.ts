export function getRandomIndices<T>(array: T[], count: number): number[] {
  const indices = Array.from({ length: array.length }, (_, i) => i).sort(() => Math.random() - 0.5)
  return indices.slice(0, count)
}
