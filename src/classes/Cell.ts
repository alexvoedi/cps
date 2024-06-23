export enum CellState {
  None = 'none',
  Done = 'done',
  Failed = 'failed',
}

export enum CellPriority {
  None = 'none',
  Medium = 'medium',
  High = 'high',
}

export interface CellData {
  title: string
  description?: string
  hints?: string[]
  count?: number
}

export class Cell {
  state: CellState = CellState.None
  priority: CellPriority = CellPriority.None

  currentCount?: number

  constructor(readonly id: number, readonly data: CellData) {
    if (data.count !== undefined)
      this.currentCount = 0
  }

  setState(state: CellState) {
    this.state = state
  }

  setPriority(priority: CellPriority) {
    this.priority = priority
  }

  toggleState() {
    switch (this.state) {
      case CellState.Done:
        this.state = CellState.Failed
        break
      case CellState.Failed:
        this.state = CellState.None
        break
      case CellState.None:
        this.state = CellState.Done
        break
    }
  }

  togglePriority() {
    switch (this.priority) {
      case CellPriority.None:
        this.priority = CellPriority.Medium
        break
      case CellPriority.Medium:
        this.priority = CellPriority.High
        break
      case CellPriority.High:
        this.priority = CellPriority.None
        break
    }
  }

  isChecked() {
    return this.state === CellState.Done
  }

  isFailed() {
    return this.state === CellState.Failed
  }

  isUnchecked() {
    return this.state === CellState.None
  }

  isLowPriority() {
    return this.priority === CellPriority.None
  }

  isMediumPriority() {
    return this.priority === CellPriority.Medium
  }

  isHighPriority() {
    return this.priority === CellPriority.High
  }

  reset() {
    this.state = CellState.None
    this.priority = CellPriority.None

    if (this.currentCount !== undefined)
      this.currentCount = 0
  }

  incrementCounter() {
    if (this.data.count === undefined || this.currentCount === undefined)
      return

    this.currentCount = Math.min(this.data.count, this.currentCount + 1)

    if (this.currentCount === this.data.count)
      this.state = CellState.Done
  }

  decrementCounter() {
    if (this.data.count === undefined || this.currentCount === undefined)
      return

    this.currentCount = Math.max(0, this.currentCount - 1)
  }

  handleKeyPress(event: KeyboardEvent) {
    switch (event.key) {
      case 'd':
        if (this.state === CellState.Done) {
          this.setState(CellState.None)
        }
        else {
          this.setState(CellState.Done)
        }
        break
      case 'f':
        if (this.state === CellState.Failed) {
          this.setState(CellState.None)
        }
        else {
          this.setState(CellState.Failed)
        }
        break
      case 'u':
        this.setState(CellState.None)
        break
      case 'r':
        this.reset()
        break
      case 'p':
        this.togglePriority()
        break
      case 's':
        this.toggleState()
        break
      case '1':
        this.setPriority(CellPriority.None)
        break
      case '2':
        if (this.priority === CellPriority.Medium) {
          this.setPriority(CellPriority.None)
        }
        else {
          this.setPriority(CellPriority.Medium)
        }
        break
      case '3':
        if (this.priority === CellPriority.High) {
          this.setPriority(CellPriority.None)
        }
        else {
          this.setPriority(CellPriority.High)
        }
        break
      case 'ArrowUp':
        this.incrementCounter()
        break
      case 'ArrowDown':
        this.decrementCounter()
        break
    }
  }
}
