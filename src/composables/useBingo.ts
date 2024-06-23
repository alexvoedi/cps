import seedrandom from 'seedrandom'
import { useMessage } from 'naive-ui'
import JSConfetti from 'js-confetti'
import bingoData from '@/data/bingo.json'
import { Cell, CellState } from '@/classes/Cell'

function getRandomSeed() {
  return Array.from({ length: 8 }, () => Math.floor(Math.random() * 36).toString(36)).join('')
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

  const initParameters = () => {
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
  }

  initParameters()

  const rng = seedrandom(params.seed)

  const includedVersions = computed(() =>
    bingoData
      .filter(({ version }) => version === params.version || isPreviousVersion(version))
      .map(({ version }) => version),
  )

  const includedData = computed(() => {
    return bingoData.filter(data => includedVersions.value.includes(data.version)).flatMap(data => data.data)
  })

  function isPreviousVersion(version: string) {
    const [major, minor] = version.split('.').map(Number)
    const [maxMajor, maxMinor] = params.version.split('.').map(Number)

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

    const cells = Array.from(cellIndices, index => new Cell(index, data[index]))

    return cells
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

    for (let i = 0; i < size; i++) {
      let rowDone = true
      let colDone = true
      for (let j = 0; j < size; j++) {
        if (cells.value[i * size + j].state !== CellState.Done) {
          rowDone = false
        }
        if (cells.value[j * size + i].state !== CellState.Done) {
          colDone = false
        }
      }
      if (rowDone || colDone)
        return true
    }

    let diag1Done = true
    let diag2Done = true
    for (let i = 0; i < size; i++) {
      if (cells.value[i * size + i].state !== CellState.Done) {
        diag1Done = false
      }
      if (cells.value[i * size + (size - i - 1)].state !== CellState.Done) {
        diag2Done = false
      }
    }

    return diag1Done || diag2Done
  }

  const cellStates = computed(() => cells.value.map(cell => cell.state))

  const fanfareSound = new Audio('/cps/quest_complete.ogg')

  const finish = () => {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      emojiSize: 32,
      confettiNumber: 200,
    })

    fanfareSound.play()
  }

  watch(cellStates, () => {
    if (isBingo()) {
      finish()
    }
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
