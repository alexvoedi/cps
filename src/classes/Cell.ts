export enum CellState {
  Checked = 'checked',
  Unchecked = 'unchecked',
  Failed = 'failed',
}

export interface CellData {
  title: string
  description?: string
  hints?: string[]
  counter?: boolean
}

export class Cell {
  id: number
  goal: boolean
  state: CellState
  data: CellData
  counter: number

  constructor(id: number, data: CellData) {
    this.id = id
    this.goal = false
    this.state = CellState.Unchecked
    this.data = data
    this.counter = 0
  }

  toggleState() {
    if (this.state === CellState.Checked)
      this.state = CellState.Failed
    else if (this.state === CellState.Failed)
      this.state = CellState.Unchecked
    else
      this.state = CellState.Checked
  }

  toggleGoal() {
    this.goal = !this.goal
  }

  isChecked() {
    return this.state === CellState.Checked
  }

  isFailed() {
    return this.state === CellState.Failed
  }

  isUnchecked() {
    return this.state === CellState.Unchecked
  }

  reset() {
    this.state = CellState.Unchecked
    this.goal = false
  }

  incrementCounter() {
    this.counter++
  }

  decrementCounter() {
    this.counter--
  }
}
