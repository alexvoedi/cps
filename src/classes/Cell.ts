export enum CellState {
  Checked = 'checked',
  Unchecked = 'unchecked',
  Failed = 'failed',
}

export interface CellData {
  title: string
  description?: string
  hints?: string[]
  count?: number
}

export class Cell {
  goal: boolean = false
  state: CellState = CellState.Unchecked
  currentCount?: number

  constructor(readonly id: number, readonly data: CellData) {
    if (data.count !== undefined)
      this.currentCount = 0
  }

  toggleState() {
    switch (this.state) {
      case CellState.Checked:
        this.state = CellState.Failed
        break
      case CellState.Failed:
        this.state = CellState.Unchecked
        break
      case CellState.Unchecked:
        this.state = CellState.Checked
        break
    }
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

    if (this.currentCount !== undefined)
      this.currentCount = 0
  }

  incrementCounter() {
    if (this.data.count === undefined || this.currentCount === undefined)
      return

    this.currentCount = Math.min(this.data.count, this.currentCount + 1)

    if (this.currentCount === this.data.count)
      this.state = CellState.Checked
  }

  decrementCounter() {
    if (this.data.count === undefined || this.currentCount === undefined)
      return

    this.currentCount = Math.max(0, this.currentCount - 1)
  }
}
