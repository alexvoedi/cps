import seedrandom from 'seedrandom'
import { useMessage } from 'naive-ui'
import bingoData from '@/data/bingo.json'
import { Cell } from '@/classes/Cell'

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

  if (!params.size)
    params.size = '5'

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

    const cells: Cell[] = Array.from(cellIndices).map((index) => {
      const { title } = data[index]

      return new Cell(index, title)
    })

    return Array.from(cells)
  }

  const getCellById = (id: number) => {
    return bingoData.flatMap(data => data.data)[id]
  }

  const cells = useLocalStorage(`v${params.version}-seed:${params.seed}-size:${params.size}`, getRandomCells(), {
    serializer: {
      read: (value: string) => {
        return JSON.parse(value).map(({ id, goal, state }: Cell) => {
          const cellData = getCellById(id)
          const newCell = new Cell(id, cellData.title)

          newCell.goal = goal
          newCell.state = state

          return newCell
        })
      },
      write: (cells: Cell[]) => {
        return JSON.stringify(cells.map(cell => ({
          id: cell.id,
          goal: cell.goal,
          state: cell.state,
        })))
      },
    },

  })

  const resetCells = () => {
    cells.value.forEach(cell => cell.reset())
  }

  return {
    cells,
    seed: params.seed,
    size: params.size,
    resetCells,
  }
}
