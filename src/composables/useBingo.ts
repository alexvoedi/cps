import seedrandom from 'seedrandom'
import { useMessage } from 'naive-ui'
import bingoData from '@/data/bingo.json'
import { Cell, CellState } from '@/classes/Cell'

function getRandomSeed() {
  return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('')
}

function getLatestVersion() {
  return bingoData[bingoData.length - 1].version
}

export function useBingo() {
  const message = useMessage()

  const params = useUrlSearchParams<{
    size: string
    seed: string
    version: string
  }>()

  if (!params.seed)
    params.seed = getRandomSeed()

  if (params.version) {
    const isValidVersion = bingoData.some(data => data.version === params.version)

    if (!isValidVersion) {
      message.warning('Invalid version, using latest version instead')
      params.version = getLatestVersion()
    }
  }
  else {
    params.version = getLatestVersion()
  }

  if (params.size) {
    if (Number(params.size) < 3 || Number(params.size) > 10) {
      message.warning('Invalid size, using default size instead')
      params.size = '5'
    }
  }
  else {
    params.size = '5'
  }

  const rng = seedrandom(params.seed)

  const includedVersions = computed(() => {
    const maxVersion = params.version

    const availableVersions = []

    for (const { version } of bingoData) {
      if (version === maxVersion || isPreviousVersion(version))
        availableVersions.push(version)
    }

    return availableVersions
  })

  const includedData = computed(() => {
    return bingoData.filter(data => includedVersions.value.includes(data.version)).flatMap(data => data.data)
  })

  function isPreviousVersion(version: string) {
    const [major, minor] = version.split('.')
    const [maxMajor, maxMinor] = params.version.split('.')

    return major < maxMajor || (major === maxMajor && minor < maxMinor)
  }

  const getRandomCells = () => {
    const data = includedData.value
    const cellCount = Number(params.size) ** 2

    const cellIndices = new Set<number>()

    while (cellIndices.size < cellCount) {
      const index = Math.floor(rng() * data.length)

      cellIndices.add(index)
    }

    const cells = Array.from(cellIndices).map(index => new Cell(index, data[index]))

    return Array.from(cells)
  }

  const getCellById = (id: number) => {
    return bingoData.flatMap(data => data.data)[id]
  }

  const getGameId = () => {
    return `v${params.version}-seed:${params.seed}-size:${params.size}`
  }

  const cells = useLocalStorage(getGameId(), getRandomCells(), {
    serializer: {
      read: (value: string) => {
        return JSON.parse(value).map(({ data, id, ...rest }: Cell) => {
          const cellData = getCellById(id)
          const newCell = new Cell(id, cellData)

          Object.assign(newCell, rest)

          return newCell
        })
      },
      write: (cells: Cell[]) => {
        return JSON.stringify(cells.map(({ data, ...rest }) => ({
          ...rest,
        })))
      },
    },

  })

  const resetCells = () => {
    cells.value.forEach(cell => cell.reset())
  }

  const newSeed = () => {
    params.seed = getRandomSeed()
    cells.value = getRandomCells()
  }

  const isBingo = () => {
    const size = Number(params.size)

    const rows = Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => i * size + j))
    const cols = Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => j * size + i))
    const diag1 = Array.from({ length: size }, (_, i) => i * size + i)
    const diag2 = Array.from({ length: size }, (_, i) => i * size + size - i - 1)

    const lines = [...rows, ...cols, diag1, diag2]

    return lines.some(line => line.every(index => cells.value[index].state === CellState.Done))
  }

  const cellStates = computed(() => cells.value.map(cell => cell.state))

  watch(cellStates, () => {
    if (isBingo())
      message.success('Bingo!')
  }, {
    deep: true,
  })

  const mostRecentVersion = computed(() => {
    return bingoData[bingoData.length - 1].version
  })

  return {
    cells,
    seed: params.seed,
    size: params.size,
    resetCells,
    newSeed,
    mostRecentVersion,
  }
}
